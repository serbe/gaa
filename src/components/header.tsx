'use client';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import Image from 'next/image';
import logoCr from '../../public/Logo/logo_cr.png';
import { useLayoutEffect } from 'react';
import { useGaaStore } from '@/context/gaa-store-provider';

const setThemeClass = (value: string) => {
  if (value === 'dark') {
    if (!document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark');
    }
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const Header = () => {
  const [{ theme, switchTheme }, gaaStore] = useGaaStore((state) => state);

  useLayoutEffect(() => {
    void gaaStore.persist.rehydrate();
    setThemeClass(theme);
  }, [gaaStore.persist, theme]);

  const t = useTranslations('Header');
  const pathname = usePathname();

  return (
    <header className="bg-sky-50 dark:bg-p1-deepdarkgreen">
      <div className="flex">
        <Link className="w-1/2 px-8 pt-2" href="/">
          <Image src={logoCr} alt="GAA" width="200" height="90" />
        </Link>
        <div className="w-1/2">
          <div className="flex justify-end p-8 dark:text-p1-gray">
            <div className="mx-2 dark:hover:text-p1-cyan">
              <Link href="/autorization">{t('autorization')}</Link>
            </div>
            <div className="mx-2 dark:hover:text-p1-cyan">
              <Link href="/connectwallet">{t('connectwallet')}</Link>
            </div>
            <div className="mx-2 dark:hover:text-p1-cyan">
              <Link href={pathname} locale="en">
                En
              </Link>
            </div>
            <div className="mx-2 dark:hover:text-p1-cyan">
              <Link href={pathname} locale="ru">
                Ru
              </Link>
            </div>
            <div className="mx-2 dark:hover:text-p1-cyan">
              <button
                onClick={() => {
                  switchTheme();
                }}
                className="h-6 w-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="block fill-violet-700 dark:hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                  className="hidden fill-yellow-500 dark:block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
