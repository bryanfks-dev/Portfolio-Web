import type { Metadata } from "next";
import "./globals.css";
import { Inter, Istok_Web } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const istockWeb = Istok_Web({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--istock_web",
});

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
      <body className={`${inter.className} ${istockWeb.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
