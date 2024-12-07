import Link from 'next/link';
import Image from 'next/image';
import logoCr from '../../public/Logo/logo_cr.png';

const Header = () => {
  return (
    <header className="bg-sky-50 dark:bg-p1-deepdarkgreen">
      <div className="flex">
        <Link className="w-1/2 px-8 pt-2" href="/">
          <Image src={logoCr} alt="GAA" width="200" height="90" />
        </Link>
        <div className="w-1/2">
          <div className="flex justify-end p-8 dark:text-p1-gray">
            <div className="mx-2 dark:hover:text-p1-cyan">
              <Link href="/ruautorization">Авторизация</Link>
            </div>
            <div className="mx-2 dark:hover:text-p1-cyan">
              <Link href="/ruconnectwallet">Подключить кошелек</Link>
            </div>
            <div className="mx-2 dark:hover:text-p1-cyan">
              <Link href="/en">En</Link>
            </div>
            <div className="mx-2 dark:hover:text-p1-cyan">
              <Link href="/ru">Ru</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
