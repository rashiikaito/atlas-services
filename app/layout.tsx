import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Atlas Managed Services | Professional Property Management & Concierge in Kenya",
  description: "Property management, concierge services, expat relocation support, and travel planning across Kenya, Uganda, and Tanzania.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Geist:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-geist bg-cream text-deep-charcoal">
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
