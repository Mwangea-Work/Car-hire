import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://twenderides.com"), // ✅ Required for full OG/Twitter image URLs

  title: "Twende Rides | Your Trusted Vehicle Rental Service",
  description:
    "Rent premium vehicles for any occasion. Self-drive, chauffeur services, airport pickup, and long-term rentals available.",
  generator: "version 1.0",

  icons: {
    icon: "/favicon.svg?v=2", // ✅ Add ?v=2 to bust cache
    shortcut: "/favicon.svg?v=2",
    apple: "/favicon.svg?v=2",
  },

  openGraph: {
    title: "Twende Rides | Your Trusted Vehicle Rental Service",
    description:
      "Rent premium vehicles for any occasion. Self-drive, chauffeur services, airport pickup, and long-term rentals available.",
    url: "https://twenderides.com",
    siteName: "Twende Rides",
    images: [
      {
        url: "/favicon.svg?v=2", // ✅ Cache busting here too
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
