import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sagesyn.ai"),
  title: {
    default: "SageSyn - The Decision Fabric for Intelligent Systems",
    template: "%s | SageSyn",
  },
  description:
    "SageSyn builds futuristic agent infrastructure - a coordinated layer where intelligent agents, tools, and data work together as a stable decision fabric for modern systems.",
  keywords: [
    "agent infrastructure",
    "AI agents",
    "decision fabric",
    "agent mesh",
    "MCP",
    "LLM orchestration",
    "intelligent systems",
  ],
  authors: [{ name: "SageSyn" }],
  creator: "SageSyn",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sagesyn.ai",
    siteName: "SageSyn",
    title: "SageSyn - The Decision Fabric for Intelligent Systems",
    description:
      "Build the next generation of agent infrastructure - layered, observable, and safe.",
    images: [
      {
        url: "/images/og/default.png",
        width: 1200,
        height: 630,
        alt: "SageSyn - Agent Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SageSyn - The Decision Fabric for Intelligent Systems",
    description:
      "Build the next generation of agent infrastructure - layered, observable, and safe.",
    images: ["/images/og/default.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background antialiased">{children}</body>
    </html>
  );
}
