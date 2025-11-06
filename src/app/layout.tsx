import type { Metadata } from "next";
import { Geist, Geist_Mono, Petrona } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScrolling from "@/Components/SmoothScrolling";
import ObserverProvider from "@/Components/ObserverProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const petrona = Petrona({
  variable: "--font-petrona",
  subsets: ["latin"],
  weight: "700",
  style: "italic",
});

const sfPro = localFont({
  src: [
    {
      path: "../../public/fonts/SF-Pro.ttf",
      weight: '100 900',
      style: "normal",
    },
    {
      path: "../../public/fonts/SF-Pro-Italic.ttf",
      weight: '100 900',
      style: "italic",
    },
  ],
  variable: "--font-sf-pro",
});

export const metadata: Metadata = {
  title: "Sonata Leadership Academy",
  description: "além da técnica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sfPro.variable} ${petrona.variable} antialiased`}
      >
        <SmoothScrolling>
          <ObserverProvider> 
            {children}
          </ObserverProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}
