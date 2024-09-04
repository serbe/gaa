import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GAA",
  description: "Global Automotive Association",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={inter.className}>
          <Header />
          <Nav />
          <main className="h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
