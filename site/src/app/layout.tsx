import type { Metadata } from "next";
import { Syne, Space_Mono, Poppins } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

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

export const metadata: Metadata = {
  title: "SQ Production — Video Production Agency",
  description:
    "We craft commercials, corporate videos, and social ads that spark engagement. From concept to final cut.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable} ${poppins.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-bg text-text antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
