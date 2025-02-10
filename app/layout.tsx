"use client";

import "./globals.css";
import Link from "next/link";
import Image from 'next/image';
import { Home } from "lucide-react";
import { Geist, Geist_Mono } from "next/font/google";
import { motion } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navItems = [
  { href: "/hvem-er-vi", label: "Hvem er vi" },
  { href: "/hvad-laver-vi", label: "Hvad laver vi" },
  { href: "/billedgalleri", label: "Billedgalleri" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-sage-50">
        <nav className="fixed top-0 left-0 w-full z-50 glass-panel">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/images/FMC1_1-1.png"
                  alt="Fugemester Clausen Logo"
                  width={130}
                  height={35}
                  className="h-8 w-auto"
                />
              </Link>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sage-700 hover:text-sage-900 transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Home Icon */}
              <Link 
                href="/"
                className="p-2 rounded-full hover:bg-sage-100 transition-colors duration-200"
              >
                <Home className="h-6 w-6 text-sage-700" />
              </Link>
            </div>
          </div>
        </nav>
        
        {/* Add padding to account for fixed navbar */}
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}