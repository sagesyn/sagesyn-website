# Cloudflare Pages Setup Guide

This guide walks you through setting up Cloudflare Pages for the SageSyn website, including custom domains and CI/CD integration.

> **Note:** This guide is updated for 2025. The `cloudflare/pages-action` GitHub Action is **deprecated**. Use `cloudflare/wrangler-action@v3` instead (the `v` prefix is required).

## Prerequisites

- A Cloudflare account (free tier works)
- Domains `sagesyn.ai` and `sagesyn.com` added to Cloudflare
- Access to the GitHub repository

---

## 1. Initial Cloudflare Pages Setup

> **Location:** Cloudflare Dashboard

### 1.1 Create a Cloudflare Account

If you don't have one already:

1. Go to [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
2. Verify your email
3. Complete the account setup

### 1.2 Create a Pages Project

1. Log in to the Cloudflare Dashboard
2. Navigate to **Workers & Pages** in the sidebar
3. Click **Create**
4. Select **Pages** tab
5. Click **Connect to Git**
6. Authorize Cloudflare to access your GitHub account
7. Select the `sagesyn/sagesyn-website` repository
8. Click **Begin setup**

### 1.3 Configure Build Settings

Configure the following build settings:

| Setting                    | Value           |
| -------------------------- | --------------- |
| **Framework preset**       | None            |
| **Build command**          | `bun run build` |
| **Build output directory** | `out`           |
| **Root directory**         | `/`             |

### 1.4 Set Environment Variables

Add the following environment variables:

| Variable               | Value                |
| ---------------------- | -------------------- |
| `NODE_VERSION`         | `20`                 |
| `NEXT_PUBLIC_SITE_URL` | `https://sagesyn.ai` |

Click **Save and Deploy** to trigger the first build.

---

## 2. Custom Domain Setup

> **Location:** Cloudflare Dashboard

### 2.1 Add Domain to Cloudflare (if not already)

For each domain (`sagesyn.ai` and `sagesyn.com`):

1. Go to **Websites** in the dashboard
2. Click **Add a site**
3. Enter the domain name
4. Select the **Free** plan
5. Review and add DNS records
6. Update nameservers at your registrar to Cloudflare's nameservers

Wait for DNS propagation (can take up to 24 hours).

### 2.2 Connect Primary Domain (sagesyn.ai)

1. Go to **Workers & Pages** → `sagesyn-website`
2. Click **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter `sagesyn.ai`
5. Click **Activate domain**

Cloudflare will automatically:

- Create the necessary CNAME record
- Provision an SSL certificate
- Enable HTTPS

### 2.3 Add www Subdomain

1. In **Custom domains**, click **Set up a custom domain**
2. Enter `www.sagesyn.ai`
3. Click **Activate domain**

---

## 3. Redirect sagesyn.com to sagesyn.ai

> **Location:** Cloudflare Dashboard

### 3.1 Create Redirect Rule

1. Go to **sagesyn.com** in Websites
2. Navigate to **Rules** → **Redirect Rules**
3. Click **Create rule**
4. Configure:
   - **Rule name**: `Redirect to sagesyn.ai`
   - **When incoming requests match**:
     - Field: `Hostname`
     - Operator: `equals`
     - Value: `sagesyn.com`
   - Add another condition (OR):
     - Field: `Hostname`
     - Operator: `equals`
     - Value: `www.sagesyn.com`
   - **Then**:
     - Type: `Dynamic`
     - Expression: `concat("https://sagesyn.ai", http.request.uri.path)`
     - Status code: `301`
5. Click **Deploy**

### 3.2 Add Placeholder DNS Record

For the redirect to work, add a placeholder DNS record:

1. Go to **sagesyn.com** → **DNS** → **Records**
2. Add:
   - Type: `A`
   - Name: `@`
   - IPv4 address: `192.0.2.1`
   - Proxy status: **Proxied** (orange cloud)

---

## 4. DNS Records Reference

> **Location:** Cloudflare Dashboard → DNS

### sagesyn.ai Zone

| Type  | Name  | Content                     | Proxy   |
| ----- | ----- | --------------------------- | ------- |
| CNAME | `@`   | `sagesyn-website.pages.dev` | Proxied |
| CNAME | `www` | `sagesyn.ai`                | Proxied |

### sagesyn.com Zone

| Type  | Name  | Content       | Proxy   |
| ----- | ----- | ------------- | ------- |
| A     | `@`   | `192.0.2.1`   | Proxied |
| CNAME | `www` | `sagesyn.com` | Proxied |

---

## 5. CI/CD Integration

This section covers generating credentials in Cloudflare and configuring GitHub for automated deployments.

### 5.1 Create API Token

> **Location:** Cloudflare Dashboard

1. Click your profile icon → **My Profile**
2. Go to **API Tokens** tab
3. Click **Create Token**
4. Use template **Edit Cloudflare Pages**
   - Or create custom token with permissions:
     - Account → Cloudflare Pages → Edit
     - Zone → DNS → Edit (for both domains)
5. Click **Continue to summary**
6. Click **Create Token**
7. **Copy the token** (it won't be shown again)

### 5.2 Get Account ID

> **Location:** Cloudflare Dashboard

1. Go to any website in your account
2. Look at the right sidebar
3. Copy the **Account ID** (a 32-character hex string)

### 5.3 Add Secrets to GitHub

> **Location:** GitHub Repository

1. Go to the GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add:
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: (paste the token from step 5.1)
5. Add another secret:
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Value: (paste the account ID from step 5.2)

### 5.4 GitHub Actions Workflow

> **Location:** GitHub Repository (`.github/workflows/deploy.yml`)

The deployment workflow uses `cloudflare/wrangler-action@v3`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      deployments: write

    steps:
      - uses: actions/checkout@v4

      - uses: oven-sh/setup-bun@v2
        with:
          bun-version: latest

      - name: Install dependencies
        run: bun install --frozen-lockfile

      - name: Build
        run: bun run build
        env:
          NEXT_PUBLIC_SITE_URL: https://sagesyn.ai

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: pages deploy out --project-name=sagesyn-website
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```

**Important notes:**

- Use `cloudflare/wrangler-action@v3` (with the `v` prefix)
- The `gitHubToken` parameter enables GitHub Deployments integration
- The deprecated `cloudflare/pages-action` should no longer be used

**Available outputs** (for use in subsequent steps):

- `deployment-url` - The URL of the deployment
- `pages-deployment-alias-url` - The alias URL for the Pages deployment

---

## 6. Verify Deployment

### 6.1 Check Pages Dashboard

> **Location:** Cloudflare Dashboard

1. Go to **Workers & Pages** → `sagesyn-website`
2. Check the **Deployments** tab for successful builds
3. Click on a deployment to see build logs

### 6.2 Test URLs

> **Location:** Browser

Verify all URLs work correctly:

- `https://sagesyn.ai` - Should show the website
- `https://www.sagesyn.ai` - Should redirect to `https://sagesyn.ai`
- `https://sagesyn.com` - Should redirect to `https://sagesyn.ai`
- `https://www.sagesyn.com` - Should redirect to `https://sagesyn.ai`

### 6.3 Check SSL Certificates

> **Location:** Cloudflare Dashboard

1. Go to **sagesyn.ai** → **SSL/TLS** → **Edge Certificates**
2. Verify certificate is active and covers:
   - `sagesyn.ai`
   - `*.sagesyn.ai`

---

## 7. Security Headers

### Automatic (Cloudflare)

> **Location:** Cloudflare Dashboard (automatic)

Cloudflare Pages automatically provides:

- HTTPS enforcement
- HSTS headers
- Modern TLS (1.2+)

### Custom Headers (Repository)

> **Location:** GitHub Repository (`public/_headers`)

Additional headers are configured in the `public/_headers` file:

```text
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

---

## 8. Troubleshooting

### Build Fails

> **Location:** Cloudflare Dashboard → Workers & Pages → Deployments

1. Check the build logs in the Pages dashboard
2. Verify `bun` is available (Node.js 20 includes Corepack)
3. Ensure all dependencies are in `package.json`

### SSL Certificate Issues

> **Location:** Cloudflare Dashboard

1. Wait 24 hours for DNS propagation
2. Check domain is set to **Proxied** (orange cloud)
3. Verify nameservers are correctly set

### Redirects Not Working

> **Location:** Cloudflare Dashboard

1. Check redirect rules are deployed
2. Ensure placeholder DNS record is proxied
3. Clear browser cache and test in incognito

---

## 9. Next Steps

- [ ] Set up monitoring/analytics (Cloudflare Dashboard)
- [ ] Configure Web Analytics - Cloudflare free feature (Cloudflare Dashboard)
- [ ] Set up Turnstile for forms - spam protection (Cloudflare Dashboard)
- [ ] Configure Cloudflare Workers for future backend needs (Cloudflare Dashboard)

---

## Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Custom Domains Guide](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Redirect Rules](https://developers.cloudflare.com/rules/url-forwarding/)
- [Cloudflare API Tokens](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/)
- [Wrangler Action (GitHub)](https://github.com/cloudflare/wrangler-action)
