import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-sky-50">
      <div className="flex">
        <div className="w-1/2 px-8 pt-2">
          <Image src={`/Logo/logo_cr.png`} alt="GAA" width="200" height="90" />
        </div>
        <div className="w-1/2">
          <div className="flex justify-end p-8">
            <div className="mx-2">
              <Link href="/ruautorization">Авторизация</Link>
            </div>
            <div className="mx-2">
              <Link href="/ruconnectwallet">Подключить кошелек</Link>
            </div>
            <div className="mx-2">
              <Link href="/en">En</Link>
            </div>
            <div className="mx-2">
              <Link href="/ru">Ru</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
