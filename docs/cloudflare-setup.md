# Cloudflare Pages Setup Guide

This guide walks you through setting up Cloudflare Pages for the SageSyn website, including custom domains and CI/CD integration.

> **Note:** This guide is updated for 2025. The `cloudflare/pages-action` GitHub Action is **deprecated**. Use `cloudflare/wrangler-action@v3` instead (the `v` prefix is required).

## Prerequisites

- A Cloudflare account (free tier works)
- Access to the GitHub repository
- GitHub secrets configured: `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`

---

## 1. Create Cloudflare Pages Project

There are two methods to create a Pages project. **Method B (CLI) is recommended** as the Dashboard UI can be confusing.

### Method A: Cloudflare Dashboard

> **Location:** Cloudflare Dashboard

1. Log in to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Click **Workers & Pages** in the left sidebar
3. Click **Create**
4. Select the **Pages** tab (important: not Workers!)
5. Click **Connect to Git**
6. Authorize Cloudflare to access your GitHub account
7. Select the `sagesyn/sagesyn-website` repository
8. Configure build settings:
   - **Framework preset:** None
   - **Build command:** `bun run build`
   - **Build output directory:** `out`
9. Click **Save and Deploy**

> **Warning:** If you see a "Deploy command" field that's required, you may have accidentally created a Workers project. Delete it and start over, or use Method B.

### Method B: Wrangler CLI (Recommended)

> **Location:** Your Terminal

This method is more reliable and avoids Dashboard UI issues.

1. **Login to Cloudflare:**

   ```bash
   npx wrangler login
   ```

   This opens a browser for authentication.

2. **Create the Pages project:**

   ```bash
   npx wrangler pages project create sagesyn-website --production-branch=main
   ```

3. **Deploy via GitHub Actions:**

   Push to `main` branch - the GitHub Actions workflow will deploy automatically.

   Or deploy manually:

   ```bash
   bun run build
   npx wrangler pages deploy out --project-name=sagesyn-website
   ```

---

## 2. Add Domains to Cloudflare

> **Location:** Cloudflare Dashboard

Before connecting custom domains to Pages, the domains must be added to your Cloudflare account.

### 2.1 Add sagesyn.ai

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Click **Websites** in the left sidebar (or **Add a site** button)
3. Click **Add a site**
4. Enter `sagesyn.ai`
5. Select the **Free** plan → **Continue**
6. Cloudflare will scan existing DNS records → **Continue**
7. Copy the two nameservers shown (e.g., `anna.ns.cloudflare.com`)
8. Go to your domain registrar and update nameservers to Cloudflare's
9. Click **Done, check nameservers**

Wait for activation (usually 5-30 minutes, can take up to 24 hours).

### 2.2 Add sagesyn.com (Optional - for redirect)

Repeat the same steps for `sagesyn.com` if you want to redirect it to `sagesyn.ai`.

---

## 3. Connect Custom Domain to Pages

> **Location:** Cloudflare Dashboard → Workers & Pages

Once your domain is active in Cloudflare:

### 3.1 Add Primary Domain (sagesyn.ai)

1. Go to **Workers & Pages** in the left sidebar
2. Click on `sagesyn-website`
3. Click **Custom domains** tab
4. Click **Set up a custom domain**
5. Enter `sagesyn.ai`
6. Click **Continue** → **Activate domain**

Cloudflare will automatically:

- Create the necessary CNAME record
- Provision an SSL certificate
- Enable HTTPS

### 3.2 Add www Subdomain

1. In **Custom domains**, click **Set up a custom domain**
2. Enter `www.sagesyn.ai`
3. Click **Continue** → **Activate domain**

---

## 4. Redirect sagesyn.com to sagesyn.ai (Optional)

> **Location:** Cloudflare Dashboard → Websites → sagesyn.com

**Prerequisite:** `sagesyn.com` must be added to your Cloudflare account first (see Section 2.2).

### 4.1 Navigate to Redirect Rules

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Click **Websites** in the left sidebar
3. Click on **sagesyn.com** (not sagesyn.ai!)
4. In the left sidebar, scroll down and expand **Rules**
5. Click **Redirect Rules**
6. Click **+ Create rule**

### 4.2 Configure the Redirect Rule

1. **Rule name:** `Redirect to sagesyn.ai`

2. **When incoming requests match:**
   - Click **Edit expression** and enter:
     ```
     (http.host eq "sagesyn.com") or (http.host eq "www.sagesyn.com")
     ```
   - Or use the builder:
     - Field: `Hostname` | Operator: `equals` | Value: `sagesyn.com`
     - Click **Or** to add another condition
     - Field: `Hostname` | Operator: `equals` | Value: `www.sagesyn.com`

3. **Then:**
   - Type: `Dynamic`
   - Expression: `concat("https://sagesyn.ai", http.request.uri.path)`
   - Status code: `301` (Permanent Redirect)

4. Click **Deploy**

### 4.3 Add Placeholder DNS Record

For the redirect to work, you need a DNS record:

1. In `sagesyn.com`, go to **DNS** → **Records** (in left sidebar)
2. Click **Add record**
3. Configure:
   - Type: `A`
   - Name: `@`
   - IPv4 address: `192.0.2.1` (placeholder address)
   - Proxy status: **Proxied** (orange cloud - important!)
4. Add another for www:
   - Type: `CNAME`
   - Name: `www`
   - Target: `sagesyn.com`
   - Proxy status: **Proxied**

---

## 5. DNS Records Reference

> **Location:** Cloudflare Dashboard → Websites → [domain] → DNS

### sagesyn.ai Zone

| Type  | Name  | Content                     | Proxy   |
| ----- | ----- | --------------------------- | ------- |
| CNAME | `@`   | `sagesyn-website.pages.dev` | Proxied |
| CNAME | `www` | `sagesyn.ai`                | Proxied |

### sagesyn.com Zone (for redirect only)

| Type  | Name  | Content       | Proxy   |
| ----- | ----- | ------------- | ------- |
| A     | `@`   | `192.0.2.1`   | Proxied |
| CNAME | `www` | `sagesyn.com` | Proxied |

---

## 6. GitHub Actions CI/CD

This section covers generating credentials in Cloudflare and configuring GitHub for automated deployments.

### 6.1 Create API Token

> **Location:** Cloudflare Dashboard

1. Click your profile icon (top right) → **My Profile**
2. Click **API Tokens** tab (left sidebar)
3. Click **Create Token**
4. Use template **Edit Cloudflare Pages**
   - Or create custom token with permissions:
     - Account → Cloudflare Pages → Edit
     - Zone → DNS → Edit (for both domains)
5. Click **Continue to summary** → **Create Token**
6. **Copy the token immediately** (it won't be shown again!)

### 6.2 Get Account ID

> **Location:** Cloudflare Dashboard

1. Click on any website in your account
2. Look at the right sidebar under **API**
3. Copy the **Account ID** (32-character hex string)

### 6.3 Add Secrets to GitHub

> **Location:** GitHub Repository

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add:
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: (paste the token from step 6.1)
5. Click **Add secret**, then add another:
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Value: (paste the account ID from step 6.2)

### 6.4 GitHub Actions Workflow

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

- Use `cloudflare/wrangler-action@v3` (with the `v` prefix - required!)
- The `gitHubToken` parameter enables GitHub Deployments integration
- The deprecated `cloudflare/pages-action` should no longer be used

**Available outputs** (for use in subsequent workflow steps):

- `deployment-url` - The URL of the deployment
- `pages-deployment-alias-url` - The alias URL for the Pages deployment

---

## 7. Verify Deployment

### 7.1 Check Pages Dashboard

> **Location:** Cloudflare Dashboard

1. Go to **Workers & Pages** → `sagesyn-website`
2. Click **Deployments** tab
3. Verify the latest deployment shows a green checkmark
4. Click on a deployment to see build logs

### 7.2 Test URLs

> **Location:** Browser (use incognito to avoid cache)

Verify all URLs work correctly:

| URL                       | Expected Result                   |
| ------------------------- | --------------------------------- |
| `https://sagesyn.ai`      | Shows the website                 |
| `https://www.sagesyn.ai`  | Redirects to `https://sagesyn.ai` |
| `https://sagesyn.com`     | Redirects to `https://sagesyn.ai` |
| `https://www.sagesyn.com` | Redirects to `https://sagesyn.ai` |

### 7.3 Check SSL Certificates

> **Location:** Cloudflare Dashboard

1. Go to **Websites** → `sagesyn.ai`
2. Click **SSL/TLS** → **Edge Certificates**
3. Verify certificate is **Active** and covers:
   - `sagesyn.ai`
   - `*.sagesyn.ai`

---

## 8. Security Headers

### Automatic (Cloudflare)

> **Location:** Automatic - no configuration needed

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

## 9. Troubleshooting

### "Project not found" error in GitHub Actions

> **Cause:** The Cloudflare Pages project doesn't exist yet.

**Solution:** Create it via CLI:

```bash
npx wrangler login
npx wrangler pages project create sagesyn-website --production-branch=main
```

### "Deploy command required" in Dashboard

> **Cause:** You created a Workers project instead of a Pages project.

**Solution:** Delete the project and recreate using Method B (CLI) in Section 1.

### Can't find Redirect Rules

> **Cause:** You're looking in the wrong place.

**Solution:** Redirect Rules are per-domain, not per-Pages-project:

1. Go to **Websites** (not Workers & Pages)
2. Click on the domain you want to redirect FROM (e.g., `sagesyn.com`)
3. Expand **Rules** in the left sidebar
4. Click **Redirect Rules**

### SSL Certificate Issues

> **Location:** Cloudflare Dashboard

1. Wait 24 hours for DNS propagation
2. Check domain is set to **Proxied** (orange cloud)
3. Verify nameservers are correctly set at your registrar

### Redirects Not Working

1. Ensure redirect rule is **Deployed** (not just saved)
2. Ensure DNS records are **Proxied** (orange cloud)
3. Clear browser cache or test in incognito window

### Build Fails in Cloudflare

> **Location:** Cloudflare Dashboard → Workers & Pages → Deployments

1. Check the build logs for specific errors
2. Verify `bun` commands work locally
3. Ensure all dependencies are in `package.json`

---

## 10. Quick Reference

### URLs

| Service         | URL                                             |
| --------------- | ----------------------------------------------- |
| Production      | `https://sagesyn.ai`                            |
| Pages Preview   | `https://[hash].sagesyn-website.pages.dev`      |
| Pages Dashboard | `https://dash.cloudflare.com` → Workers & Pages |
| GitHub Repo     | `https://github.com/sagesyn/sagesyn-website`    |

### CLI Commands

```bash
# Login to Cloudflare
npx wrangler login

# Create Pages project
npx wrangler pages project create sagesyn-website --production-branch=main

# Manual deploy
bun run build && npx wrangler pages deploy out --project-name=sagesyn-website

# Check deployment status
npx wrangler pages deployment list --project-name=sagesyn-website
```

---

## 11. Next Steps

- [ ] Set up Web Analytics (Cloudflare Dashboard → Analytics)
- [ ] Configure Turnstile for forms (spam protection)
- [ ] Set up monitoring alerts
- [ ] Configure Cloudflare Workers for future backend needs

---

## Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Custom Domains Guide](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Redirect Rules](https://developers.cloudflare.com/rules/url-forwarding/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [Wrangler Action (GitHub)](https://github.com/cloudflare/wrangler-action)
- [Cloudflare API Tokens](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/)
