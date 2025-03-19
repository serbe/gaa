'use client';

import Nav from '@/components/nav';
import { usePathname } from 'next/navigation';
import Footer from './footer';
import { ToTopButton } from './toTopButton';

const noDesignPages = ['/ru/login', '/ru/register', '/en/login', '/en/register'];

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div>
      {!noDesignPages.includes(pathname) && <Nav />}
      <main className="mx-auto min-h-screen bg-p1-white dark:bg-p1-deepdarkgreen">{children}</main>
      {!noDesignPages.includes(pathname) && <ToTopButton />}
      {!noDesignPages.includes(pathname) && <Footer />}
    </div>
  );
};
