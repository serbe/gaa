'use client';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { useGaaStore } from '@/context/gaa-store-provider';
import Image from 'next/image';
import { useLayoutEffect, useState } from 'react';

const setThemeClass = (value: string) => {
  if (value === 'dark') {
    if (!document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark');
    }
  } else {
    document.documentElement.classList.remove('dark');
  }
};

function Nav() {
  const [{ theme, switchTheme }, gaaStore] = useGaaStore((state) => state);
  const [accDrop, setAccDrop] = useState(false);
  const [menuDrop, setMenuDrop] = useState(false);
  const t = useTranslations('Navbar');
  const pathname = usePathname();

  const menuItems = [
    { name: t('about'), url: '/about' },
    { name: t('roadmap'), url: '/roadmap' },
    { name: t('events'), url: '/events' },
    { name: t('mint'), url: '/mint' },
    { name: t('racepoint'), url: '/racepoint' },
    { name: t('partners'), url: '/partners' },
    { name: t('socials'), url: '/socials' },
    { name: t('marketplace'), url: '/marketplace' },
  ];

  useLayoutEffect(() => {
    void gaaStore.persist.rehydrate();
    setThemeClass(theme);
  }, [gaaStore.persist, theme]);

  return (
    <nav className="sticky top-0 z-10 border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <div className="flex items-center space-x-3 ">
          {/* <!-- Dropdown menu --> */}
          <div
            className={`z-50 my-4 ${accDrop ? 'absolute right-2 top-11' : 'hidden'} list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow-sm dark:divide-gray-600 dark:bg-gray-700`}
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
              <span className="block truncate  text-sm text-gray-500 dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <div className="flex flex-wrap px-4 py-3">
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
                  className="size-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
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
            <ul className="py-2" aria-labelledby="user-menu-button">
              {menuItems.map(({ name, url }) => (
                <li key={name}>
                  <Link
                    href={url}
                    className="block p-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
            onClick={() => setMenuDrop(!menuDrop)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${menuDrop ? 'block' : 'hidden'} w-full items-center justify-between md:flex md:w-auto`}
          id="navbar-user"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
            {menuItems.map(({ name, url }) => (
              <li key={name}>
                <Link
                  href={url}
                  className="block rounded-sm bg-transparent px-3 py-2 text-slate-700 hover:text-p1-cyan focus:text-p1-cyan lg:p-0 dark:text-p1-gray lg:dark:text-p1-green"
                  aria-current="page"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 md:me-0 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
          onClick={() => setAccDrop(!accDrop)}
        >
          <span className="sr-only">Open user menu</span>
          <Image
            className="size-8 rounded-full"
            src="/HeroNFT/CustomLads/CustomLads1.png"
            alt="user photo"
            width={32}
            height={32}
          />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
