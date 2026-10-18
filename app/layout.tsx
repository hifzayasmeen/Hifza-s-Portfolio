import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://hifza-s-portfolio-delta.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hifza Yasmeen — Full-Stack Developer",
    template: "%s | Hifza Yasmeen",
  },
  description:
    "Hifza Yasmeen is a full-stack developer and AI automation enthusiast building thoughtful web applications, reliable APIs, and intelligent digital experiences.",
  keywords: [
    "Hifza Yasmeen",
    "Full-Stack Developer",
    "AI Automation",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Hifza Yasmeen — Full-Stack Developer",
    description:
      "Building high-performance web applications and intelligent systems.",
    siteName: "Hifza Yasmeen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hifza Yasmeen — Full-Stack Developer",
    description:
      "Building high-performance web applications and intelligent systems.",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0f19",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
