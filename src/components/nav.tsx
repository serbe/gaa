"use client";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

const menuItems = [
  { name: "О нас", url: "/ruabout" },
  { name: "Дорожная карта", url: "/ruroadmap" },
  { name: "События", url: "/ruevents" },
  { name: "Создай NFT", url: "/rumint" },
  { name: "Racepoint", url: "/ruracepoint" },
  { name: "Партнеры", url: "/rupartners" },
  { name: "Социальные сети", url: "/rusocials" },
];

const Navbar = ({
  open,
  setter,
}: {
  open: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
}) => (
  <nav className="sticky top-0 z-10 bg-white shadow-blue-600 drop-shadow">
    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
      <Link href="/" className="items-center space-x-3 md:hidden">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Домой
        </span>
      </Link>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        onClick={() => setter(!open)}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-5 w-5"
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
        className={
          "mx-auto " + (open ? "" : "hidden") + " w-full md:block md:w-auto"
        }
        id="navbar-default"
      >
        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
          {menuItems.map(({ name, url }) => (
            <li key={name}>
              <Link
                href={url}
                className="block bg-transparent px-3 py-2 text-slate-700 md:p-0 dark:text-white md:dark:text-blue-500"
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

{
  /* <nav className="sticky top-0 z-10 bg-white px-4 py-2.5 shadow-blue-600 drop-shadow">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        <div className="mx-auto w-full items-center justify-between lg:order-1 lg:flex lg:w-auto">
          <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
            {menuItems.map(({ name, url }) => (
              <li key={name}>
                <Link
                  href={url}
                  className="lg:text-primary-700 block rounded py-2 pl-3 pr-4 text-slate-700 lg:bg-transparent lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav> */
}

const Nav = () => {
  const [open, setOpen] = useState(false);

  return <Navbar open={open} setter={setOpen} />;
};

export default Nav;
