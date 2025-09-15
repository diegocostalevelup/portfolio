import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seu Nome — Portfólio",
  description: "Portfólio minimalista de vídeos",
  icons: {
    icon: [
      { url: "/faviconbig.png", type: "image/png", sizes: "64x64" },
    ],
    shortcut: [
      { url: "/faviconbig.png", type: "image/png" },
    ],
    apple: [
      { url: "/faviconbig.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <div className="pt-6">
          <div className="mx-auto max-w-6xl px-4 flex items-center justify-center">
            <Image src="/logo.png" alt="Logo" width={704} height={335} quality={100} priority />
          </div>
        </div>
        <main className="mx-auto max-w-6xl px-4 py-8 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
