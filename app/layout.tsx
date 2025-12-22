import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Bangers, Permanent_Marker, Kalam, Short_Stack } from "next/font/google";

export const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

export const marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker",
});

export const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-handwritten",
});

export const shortStack = Short_Stack({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Examania",
  description: "A modern Next.js app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bangers.variable} ${marker.variable} ${kalam.variable} ${shortStack.variable} ink-splatter-cursor`}>
        {/* Page border overlays */}
        <div className="page-border-overlay top" />
        <div className="page-border-overlay bottom" />
        <div className="page-border-overlay left" />
        <div className="page-border-overlay right" />

        {/* Sound effect display */}
        <div id="sound-effect-display" className="sound-effect" />
        
        {/* Site content */}
        <Navbar />
        <main className="min-h-screen" id='content-scroll'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
