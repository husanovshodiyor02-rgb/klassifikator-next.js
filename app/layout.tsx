import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klassifikator Next.js",
  description: "Qurilish resurslari klassifikatori",

  openGraph: {
    title: "Klassifikator Next.js",
    description: "Qurilish resurslari klassifikatori",
    url: "https://klassifikator-next-js.vercel.app/",
    siteName: "Klassifikator",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Klassifikator Sayti Rasmi",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
