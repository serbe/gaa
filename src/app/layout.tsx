import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const inter = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "cyrillic"],
});

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
          <main className="min-h-screen bg-sky-50">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
