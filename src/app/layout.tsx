import { LayoutProvider } from '@/components/layoutProvider';
import { GaaStoreProvider } from '@/context/gaa-store-provider';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Roboto_Serif } from 'next/font/google';
import './globals.css';

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

export default async function LocaleLayout({
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
            <LayoutProvider>{children}</LayoutProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </GaaStoreProvider>
  );
}
