import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css"; // CRITICAL: This connects Tailwind to your project

// 1. Import your Components and Sanity Client
import Navbar from "././components/Navbar";
import Footer from "././components/Footer"; // Imported Footer
import { client } from "@/sanity/lib/client";
import { LAYOUT_QUERY } from "@/sanity/lib/queries"; // Using the combined query

// Configure Serif font for those elegant headings
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  weight: ["400", "600", "700"],
});

// Configure Sans font for clean, readable body text
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

export const metadata: Metadata = {
  title: "Art of Cleaning | Premium Dry Cleaning & Garment Care",
  description: "Professional eco-friendly dry cleaning delivered to your doorstep.",
};

// 2. Make the RootLayout async to allow data fetching
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 3. Fetch both Nav and Footer data from Sanity
  const { navData, footerData } = await client.fetch(LAYOUT_QUERY);

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-gray-900 selection:bg-blue-100">
        {/* 4. Add the Navbar component here */}
        <Navbar data={navData} />
        
        {/* Added padding-top (pt-20) so content isn't hidden behind the fixed navbar */}
        <main className="pt-20 min-h-screen">
          {children}
        </main>

        {/* 5. Add the Footer component here */}
        <Footer data={footerData} />
      </body>
    </html>
  );
}