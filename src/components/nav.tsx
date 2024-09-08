import Link from "next/link";

const menuItems = [
  { name: "Домой", url: "/" },
  { name: "О нас", url: "/ruabout" },
  { name: "Дорожная карта", url: "/ruroadmap" },
  { name: "События", url: "/rusocials" },
  { name: "Создай NFT", url: "/rumint" },
  { name: "Racepoint", url: "/ruracepoint" },
  { name: "Партнеры", url: "/rupartners" },
  { name: "Социальные сети", url: "rusocials" },
  { name: "Авторизация", url: "/ruautorization" },
  { name: "Подключить кошелек", url: "/ruconnectwallet" },
  { name: "En", url: "/en" },
  { name: "Ru", url: "/ru" },
];

const Nav = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white px-4 py-2.5 shadow-blue-600 drop-shadow">
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
    </nav>
  );
};

export default Nav;
