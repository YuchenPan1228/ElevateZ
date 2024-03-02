import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ElevateZ｜KOL招募",
  description: "ElevateZ｜KOL招募",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'bg-black'}>
        <Navbar></Navbar>

        {children}
      </body>
    </html>
  );
}
