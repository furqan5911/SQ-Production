import type { Metadata } from "next";
import { Syne, Space_Mono, Poppins } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import LoadingScreen from "@/components/LoadingScreen";
import ChatBubble from "@/components/ChatBubble";
import WhatsAppButton from "@/components/WhatsAppButton";
import CursorTrail from "@/components/CursorTrail";
import AmbientGlow from "@/components/AmbientGlow";
import { SITE_URL } from "@/lib/constants";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const title = "SQ Productions — Video Production Agency";
const description =
  "We craft commercials, corporate videos, and social ads that spark engagement. From concept to final cut.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s — SQ Productions",
  },
  description,
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "SQ Productions",
    images: [{ url: "/icon.png" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable} ${poppins.variable} h-full`}>
      <head>
        {/* Preload hero banner so it starts downloading before CSS parses the background-image */}
        <link
          rel="preload"
          as="image"
          href="https://pub-b15bbd49746c4d96b2482593b2520339.r2.dev/Siteimages/banner.png"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text antialiased">
        <AmbientGlow />
        <LoadingScreen />
        {/* Horizontal-overflow clipping (e.g. for off-screen marquee/sweep
            animations) scoped to this wrapper instead of html/body — putting
            it on the root elements breaks position:sticky site-wide. */}
        <div className="overflow-x-clip">
          <LenisProvider>{children}</LenisProvider>
        </div>
        <ChatBubble />
        <WhatsAppButton />
        <CursorTrail />
      </body>
    </html>
  );
}
