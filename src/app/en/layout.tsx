import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import { Roboto_Serif } from 'next/font/google';
import '../globals.css';
import Header from '@/components/header';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import { GaaStoreProvider } from '@/context/gaa-store-provider';
import { ToTopButton } from '@/components/toTopButton';
// import { Sidebar } from '@/components/sidebar';

const inter = Roboto_Serif({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
});

type Params = Promise<{ locale: string }>;

export const metadata: Metadata = {
  title: 'GAA',
  description: 'Global Automotive Association',
};

export default async function EnLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <GaaStoreProvider>
      <html lang={locale} className={`${inter.className} scroll-smooth md:scroll-auto`}>
        <body>
          <NextIntlClientProvider messages={messages}>
            <div className="">
              <Header />
              <Nav />
              {/* <Sidebar /> */}
              <main className="mx-auto min-h-screen bg-p1-white dark:bg-p1-deepdarkgreen">
                {children}
              </main>
              {/* <TopButton /> */}
              <ToTopButton />
              <Footer />
            </div>
          </NextIntlClientProvider>
        </body>
      </html>
    </GaaStoreProvider>
  );
}
