"use client";
import { HeroUIProvider } from "@heroui/react"; import "./globals.css";
import { Navbar, NavbarContent, NavbarBrand, NavbarItem, Link, Button } from "@heroui/react";
import { Geist, Geist_Mono } from "next/font/google";
import Image from 'next/image';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Componente Logo Personalizado
const CustomLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      {/* SVG Path aquí */}
    </svg>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <head>
        <title>Fugemester Clausen</title>
      </head>
      <body>
        <HeroUIProvider>
          <Navbar>
            <NavbarBrand>
              <Link href="/">
                <Image
                  src="/images/FMC1_1-1.png"
                  alt="Fugemester Clausen Logo"
                  width={130}
                  height={35}
                />
              </Link>
            </NavbarBrand>

            <NavbarContent justify="center">
              <NavbarItem>
                <Link color="foreground" href="/hvem-er-vi">Hvem er vi</Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="/hvad-laver-vi">Hvad laver vi</Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="/billedgalleri">Billedgalleri</Link>
              </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
              <NavbarItem>
                <Button as={Link} href="/kontakt" variant="flat">
                  Kontakt
                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </HeroUIProvider>
        {children}
      </body>
    </html>
  );
}