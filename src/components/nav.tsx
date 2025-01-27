'use client';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Dispatch, SetStateAction, useState } from 'react';

function Navbar({ open, setter }: { open: boolean; setter: Dispatch<SetStateAction<boolean>> }) {
  const locale = useLocale();
  console.log(locale);
  const t = useTranslations('Navbar');

  const menuItems = [
    { name: t('about'), url: '/about' },
    { name: t('roadmap'), url: '/roadmap' },
    { name: t('events'), url: '/events' },
    { name: t('mint'), url: '/mint' },
    { name: t('racepoint'), url: '/racepoint' },
    { name: t('partners'), url: '/partners' },
    { name: t('socials'), url: '/socials' },
    { name: t('dashboard'), url: '/dashboard' },
  ];

  return (
    <nav className="sticky top-0 z-10 bg-white dark:bg-p1-darkgreen">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="items-center space-x-3 lg:hidden">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            {t('home')}
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => {
            setter(!open);
          }}
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
        <div
          className={'mx-auto' + (open ? '' : ' hidden') + ' w-full lg:block lg:w-auto'}
          id="navbar-default"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:bg-white lg:p-0 rtl:space-x-reverse dark:bg-p1-deepdarkgreen lg:dark:bg-p1-deepdarkgreen">
            {menuItems.map(({ name, url }) => (
              <li key={name}>
                <Link
                  href={url}
                  className="block bg-transparent px-3 py-2 text-slate-700 hover:text-p1-cyan focus:text-p1-cyan lg:p-0 dark:text-p1-gray lg:dark:text-p1-green"
                  aria-current="page"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

const Nav = () => {
  const [open, setOpen] = useState(false);

  return <Navbar open={open} setter={setOpen} />;
};

export default Nav;
