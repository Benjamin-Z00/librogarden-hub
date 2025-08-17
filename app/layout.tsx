import type { Metadata } from "next";
import "../styles/globals.css";
import Script from "next/script";

const siteBase = process.env.NEXT_PUBLIC_SITE_BASE_URL || "https://librogarden.com";
const googleVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteBase),
  title: { default: "LibroGarden — 3 分钟发现你的梦想职业", template: "%s — LibroGarden" },
  description: "CareerPulse / WorkCompass：基于 RIASEC + 大五 + O*NET 的职业探索与岗位匹配。",
  alternates: { canonical: "/" },
  verification: googleVerification ? { google: googleVerification } : undefined,
  openGraph: {
    title: "3 分钟发现你的梦想职业",
    description: "基于 RIASEC + 大五 + O*NET 的职业探索与岗位匹配。",
    url: siteBase,
    siteName: "LibroGarden",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const enableGA = process.env.NODE_ENV === "production" && !!process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="zh-CN">
      <body>
        {enableGA ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}</Script>
          </>
        ) : null}
        {children}
        <footer className="container py-12 text-sm text-[#93A0C5]">
          © {new Date().getFullYear()} LibroGarden · <a className="link" href="https://careerpulse.librogarden.com/assess">开始测评</a>
        </footer>
      </body>
    </html>
  );
}
