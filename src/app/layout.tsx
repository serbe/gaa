import type { Metadata } from 'next';
import { Roboto_Serif } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import { GaaStoreProvider } from '@/providers/store-provider';

const inter = Roboto_Serif({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
});

type Props = {
  params: { locale: string };
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'GAA',
  description: 'Global Automotive Association',
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body className="scroll-smooth">
        <div className={inter.className}>
          <GaaStoreProvider>
            <Header />
            <Nav />
            <main className="mx-auto min-h-screen bg-p1-white">{children}</main>
            <Footer />
          </GaaStoreProvider>
        </div>
      </body>
    </html>
  );
}
