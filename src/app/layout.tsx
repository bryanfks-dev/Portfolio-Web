import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import DesktopNavbar from "./components/desktop-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bryanfks",
  description:
    "A portfolio website for bryanfks, a undergraduate back-end engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} antialiased`}>
        <DesktopNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
