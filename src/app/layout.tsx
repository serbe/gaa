import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const inter = Roboto_Serif({
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
          <main className="mx-auto min-h-screen max-w-[1200px] bg-p1-white">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
