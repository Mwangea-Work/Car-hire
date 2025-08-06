import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import Script from "next/script"; // Import the Script component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://twenderides.com"),
  title: "Twende Rides | Your Trusted Vehicle Rental Service",
  description:
    "Rent premium vehicles for any occasion. Self-drive, chauffeur services, airport pickup, and long-term rentals available.",
  generator: "version 1.0",
  icons: {
    icon: "/favicon.svg?v=2",
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
        url: "/favicon.svg?v=2",
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
          {/* <WhatsAppButton /> */}
          
          {/* Tawk.to Script */}
          <Script id="tawk-to" strategy="afterInteractive">
            {`
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68937986bd3585192d5d17a6/1j2015ekn';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `}
          </Script>
        </div>
      </body>
    </html>
  );
}