import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/navbar";

const font = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: "Randall Sim",
  description: "CS @ Brown | Software Engineer",
  icons: { icon: '/ICON.png' }
};

export const viewport: Viewport = {
  themeColor: "#000000"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
