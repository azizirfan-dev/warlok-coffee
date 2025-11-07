import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { Inter, Playfair_Display } from "next/font/google";
import { defaultSEO } from "./lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata : Metadata = {
  ...defaultSEO,
  title: {
    default: "Warlok Coffee",
    template: "%s | Warlok Coffee",
  },
  keywords: ["kopi", "coffee shop", "barista lokal", "warung kopi", "Warlok Coffee"],
  authors: [{ name: "Warlok Team" }],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={`${playfair.variable} ${inter.variable} bg-[#F5F1E7] text-[#1C1815] antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
