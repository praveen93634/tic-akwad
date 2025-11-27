import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/Wrapper/LenisScroll";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Navigation/Footer";
import NavbarNew from "@/components/Navigation/NavbarNew";
import localFont from "next/font/local";
import { suisse } from "./fonts";

// Load Inter font
// export const suisse = localFont({
//   src: "../public/fonts/fonnts.com-Suisse_Intl_Book.ttf",
//   weight: "400",
//   style: "normal",
//   variable: "--font-suisse", // just like --font-inter
// });

export const metadata: Metadata = {
  title: "The Internet Company",
  description: "A Web Branding House",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body  className={suisse.variable}>
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
          </LenisProvider>
      </body>
    </html>
  );
}
