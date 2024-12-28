import localFont from "next/font/local";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import "./app.css";
import Header from "@/components/Header";
import ViewCanvas from "@/components/ViewCanvas";
import Footer from "@/components/Footer";

const switzer = localFont({
  src: '../../public/fonts/Switzer-Variable.woff2',
  display: 'swap',
  weight: "100 900",
  variable: "--font-switzer",
})

const crimson = localFont({
  src: '../../public/fonts/CrimsonPro-Variable.woff2',
  display: 'swap',
  weight: "100 900",
  variable: "--font-crimson",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${switzer.variable} ${crimson.variable}`}>
      <body className="overflow-x-hidden bg-yellow-300">
        <Header />
        <main>
          {children}
          <ViewCanvas />
        </main>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
