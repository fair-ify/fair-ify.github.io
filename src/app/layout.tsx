import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fairify.ai - Your Data, Now FAIR and Everywhere",
  description: "Revolutionizing data sharing with privacy-preserving FAIR principles. Making data Findable, Accessible, Interoperable, and Reusable while protecting your privacy.",
  keywords: "FAIR data, data sharing, privacy, interoperability, data accessibility, research data, data economy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
