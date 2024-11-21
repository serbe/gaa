'use client';

import { useGaaStore } from '@/providers/store-provider';
import Image from 'next/image';
import Link from 'next/link';
import { JumpButton } from '@/components/jumpButton';

export default function Page() {
  const [{ setLicense }] = useGaaStore((state) => state);
  const jumpPoints = ['racelads', 'movement-leaders', 'custom-lads', 'awards', 'licenses'];

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />
      <div
        id="racelads"
        className="text-center text-4xl font-bold text-p1-darkgreen md:pt-4 md:text-6xl"
      >
        RaceLads
      </div>
      <div className="text-center text-xl font-bold text-p1-darkgreen md:pb-4 md:text-4xl">
        by Global Automotive Association
      </div>
      <div className="w-full place-self-center rounded-3xl border-p1-darkgreen text-center text-p1-darkgreen md:w-3/5 md:border-4 md:shadow-lg">
        <div>
          <p className="text-base text-p1-darkgreen md:pt-2 md:text-2xl">Генеративная коллекция</p>
          <h2 className="text-base text-p1-darkgreen md:pb-2 md:text-2xl">RaceLads NFT</h2>
          <Image
            className="relative mb-2 inline-block w-2/5 rounded-3xl border-2 border-p2-orange shadow-lg md:w-2/5"
            width={1000}
            height={1000}
            src="/HeroNFT/RaceLads/RaceLads1.png"
            alt="RaceLads1"
          />
          <p className="text-base text-p1-darkgreen md:text-2xl">10.000 уникальных героев.</p>
          <p className="text-base text-p1-darkgreen md:text-2xl">
            Кто твой персонаж - решать тебе!
          </p>

          <div className="inline-flex rounded-md pt-5 shadow-sm md:place-self-center">
            <Link
              href={{
                pathname: '/rudiscoveryracelads',
                query: { racelad: 'discovery' },
              }}
              className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p1-darkgreen focus:text-p1-white focus:ring-2 focus:ring-p1-darkgreen md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Исследуй NFT
            </Link>
            <Link
              href={{
                pathname: '/rumintracelads',
                query: { racelad: 'rumintracelads' },
              }}
              className="rounded-r-xl border-2 border-p2-orange bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white hover:ring-p2-orange focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Создай NFT
            </Link>
          </div>
          <div className="pb-4 md:pt-4"></div>
        </div>
      </div>
      <div className="md:h-96"> </div>
      <div className="h-14"></div>

      {/* //Лидеры движений */}
      <div
        id="movement-leaders"
        className="p-2 text-center text-4xl font-bold text-p1-darkgreen md:pt-20 md:text-6xl"
      >
        Лидеры движений
      </div>
      <div className="pb-2 text-center text-xl font-bold text-p1-darkgreen md:pb-5 md:text-4xl">
        знаковые персоны
      </div>
      <div className="mx-5 grid grid-cols-1 gap-2 rounded-3xl border-p1-darkgreen text-center text-p1-darkgreen md:grid-cols-2 md:border-4 md:p-5 md:shadow-lg xl:grid-cols-4">
        <div>
          <p className="text-2xl text-p1-darkgreen">Drivers</p>
          <Image
            className="relative mb-4 inline-block w-3/5 rounded-3xl border-2 border-red-400 shadow-lg md:w-full"
            width={1000}
            height={1000}
            src="/HeroNFT/Drivers/Driver4.png"
            alt="Driver4"
          />

          <p className="pt-2 text-base text-p1-darkgreen">
            Пилоты гоночных автомобилей и болидов, присоединившиеся
          </p>
          <p className="pb-2 text-base text-p1-darkgreen">к Web3</p>
          <div className="py-5">
            <Link
              href={{
                pathname: '/rudiscoveryliders',
                query: { drivers: 'discovery' },
              }}
              className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p1-darkgreen focus:text-p1-white focus:ring-2 focus:ring-p1-darkgreen md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Исследуй NFT
            </Link>
            <Link
              href={{
                pathname: '/rumintdrivers',
                query: { drivers: 'rumintdrivers' },
              }}
              className="rounded-r-xl border-2 border-red-400 bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-red-400 hover:text-p1-white focus:z-10 focus:bg-red-400 focus:text-p1-white focus:ring-2 focus:ring-red-400 md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-red-400"
            >
              Создай NFT
            </Link>
          </div>
        </div>
        <div>
          <p className="text-2xl text-p1-darkgreen">Team&apos;s Members</p>
          <Image
            className="relative mb-4 inline-block w-3/5 rounded-3xl border-2 border-p3-blue shadow-lg md:w-full"
            width={1000}
            height={1000}
            src="/HeroNFT/Team's members/TeamMember1.png"
            alt="TeamMember1"
          />

          <p className="pt-2 text-base text-p1-darkgreen">Участники команд, присоединившиеся</p>
          <p className="pb-2 text-base text-p1-darkgreen">к Web3</p>
          <div className="py-5">
            <Link
              href={{
                pathname: '/rudiscoveryliders',
                query: { teammembers: 'discovery' },
              }}
              className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p1-darkgreen focus:text-p1-white focus:ring-2 focus:ring-p1-darkgreen md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Исследуй NFT
            </Link>
            <Link
              href={{
                pathname: '/rumintteammembers',
                query: { teammembers: 'rumintteammembers' },
              }}
              className="rounded-r-xl border-2 border-p3-blue bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p3-blue hover:text-p1-white focus:z-10 focus:bg-p3-blue focus:text-p1-white focus:ring-2 focus:ring-p3-blue md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p3-blue"
            >
              Cоздай NFT
            </Link>
          </div>
        </div>
        <div>
          <p className="text-2xl text-p1-darkgreen">Collectors</p>
          <Image
            className="relative mb-4 inline-block w-3/5 rounded-3xl border-2 border-stone-500 shadow-lg md:w-full"
            width={1000}
            height={1000}
            src="/HeroNFT/Collectors/Collector1.png"
            alt="Collector1"
          />

          <p className="p-2 text-base text-p1-darkgreen">
            Владельцы редких, спортивных и уникальных автомобилей, присоединившиеся к Web3
          </p>
          <div className="py-5">
            <Link
              href={{
                pathname: '/rudiscoveryliders',
                query: { collectors: 'discovery' },
              }}
              className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p1-darkgreen focus:text-p1-white focus:ring-2 focus:ring-p1-darkgreen md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Исследуй NFT
            </Link>
            <Link
              href={{
                pathname: '/rumintcollectors',
                query: { collectors: 'rumintcollectors' },
              }}
              className="rounded-r-xl border-2 border-stone-500 bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-stone-500 hover:text-p1-white focus:z-10 focus:bg-stone-500 focus:text-p1-white focus:ring-2 focus:ring-stone-500 md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-stone-500"
            >
              Cоздай NFT
            </Link>
          </div>
        </div>
        <div>
          <p className="text-2xl text-p1-darkgreen">Cars</p>

          <Image
            className="relative mb-4 inline-block w-3/5 rounded-3xl border-2 border-p3-blue shadow-lg md:w-full"
            width={1000}
            height={1000}
            src="/Cars/Car.png"
            alt="Car"
          />
          <p className="p-2 text-base text-p1-darkgreen">
            Раритетные, уникальные и спортивные автомобили из частных коллекций
          </p>
          <div className="py-5">
            <Link
              href={{
                pathname: '/rudiscoverycars',
                query: { cars: 'discovery' },
              }}
              className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p1-darkgreen focus:text-p1-white focus:ring-2 focus:ring-p1-darkgreen md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Исследуй NFT
            </Link>
            <Link
              href={{
                pathname: '/rumintcars',
                query: { cars: 'rumintcars' },
              }}
              className="rounded-r-xl border-2 border-cyan-700 bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-700 hover:text-p1-white focus:z-10 focus:bg-cyan-700 focus:text-p1-white focus:ring-2 focus:ring-cyan-700 md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-cyan-700"
            >
              Cоздай NFT
            </Link>
          </div>
        </div>
      </div>
      <div className="md:h-96"> </div>
      <div className="h-14"></div>

      {/* // CustomLads */}

      <div
        id="custom-lads"
        className="p-2 text-center text-4xl font-bold text-p1-darkgreen md:pt-20 md:text-6xl"
      >
        CustomLads
      </div>

      <div className="w-full place-self-center rounded-3xl border-p1-darkgreen text-center text-p1-darkgreen md:w-3/5 md:border-4 md:shadow-lg">
        <div>
          <p className="text-base text-p1-darkgreen md:pt-2 md:text-2xl">
            Собери своего героя из готовых элементов коллекции
          </p>
          <h2 className="pb-2 text-2xl text-p1-darkgreen">RaceLads </h2>

          <Image
            className="relative mb-2 inline-block w-2/5 rounded-3xl border-2 border-p2-orange shadow-lg md:w-2/5"
            width={1000}
            height={1000}
            src="/HeroNFT/CustomLads/CustomLads1.png"
            alt="CustomLads1"
          />
          <p className="pt-2 text-base text-p1-darkgreen md:pt-2 md:text-2xl">
            Только для держателей NFT коллекции RaceLads
          </p>
          <p className="pb-2 text-base text-p1-darkgreen md:text-2xl">
            Кто твой персонаж - решать тебе!
          </p>
          <div className="inline-flex rounded-md shadow-sm md:place-self-center">
            <Link
              href={{
                pathname: '/rudiscoverycustomlads',
                query: { customlad: 'discovery' },
              }}
              className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p1-darkgreen focus:text-p1-white focus:ring-2 focus:ring-p1-darkgreen md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Исследуй NFT
            </Link>
            <Link
              href={{
                pathname: '/rumintcustomlads',
                query: { customlad: 'rumintcustomlads' },
              }}
              className="rounded-r-xl border-2 border-p2-orange bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Создай NFT
            </Link>
          </div>
          <div className="pb-4 pt-4"></div>
        </div>
      </div>
      <div className="md:h-96"> </div>
      <div className="h-14"></div>
      {/* //Награды */}

      <div
        id="awards"
        className="pt-2 text-center text-4xl font-bold text-p1-darkgreen md:pt-20 md:text-6xl"
      >
        Награды
      </div>
      <div className="text-center text-xl font-bold text-p1-darkgreen md:pb-5 md:text-4xl">
        Кубки и Медали
      </div>
      <div className="w-full place-self-center rounded-3xl border-p1-darkgreen text-center text-p1-darkgreen md:w-3/5 md:border-4 md:shadow-lg">
        <p className="pt-2 text-base text-p1-darkgreen md:pt-2 md:text-2xl">
          Вручай награды победителям
        </p>
        <h2 className="pb-2 text-base text-p1-darkgreen md:pb-2 md:text-2xl"> NFT Awards </h2>
        <div>
          <Image
            className="relative mb-2 inline-block w-2/5 rounded-3xl border-2 border-p2-orange shadow-lg md:w-2/5"
            width={1000}
            height={1000}
            src="/Hero/Rewards.png"
            alt="Rewards"
          />
          <p className="pt-2 text-base text-p1-darkgreen md:pt-2 md:text-2xl">
            NFT награды содержат метаданные о мероприятии, спортсмене и медиаконтент
          </p>
          <p className="pb-2 text-base text-p1-darkgreen md:pb-2 md:text-2xl">
            Когда присоединиться - решать тебе!
          </p>
          <div className="inline-flex rounded-md pt-5 shadow-sm md:place-self-center">
            <Link
              href={{
                pathname: '/rudiscoveryrewards',
                query: { rewards: 'discovery' },
              }}
              className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p1-darkgreen focus:text-p1-white focus:ring-2 focus:ring-p1-darkgreen md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Исследуй NFT
            </Link>
            <Link
              href={{
                pathname: '/rumintrewards',
                query: { rewards: 'rumintrewards' },
              }}
              className="rounded-r-xl border-2 border-p2-orange bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Создай NFT
            </Link>
          </div>
          <div className="pb-4 pt-4"></div>
        </div>
      </div>
      <div className="md:h-96"> </div>
      <div className="h-14"></div>

      {/* //Лицензии */}
      <div
        id="licenses"
        className="pt-2 text-center text-4xl font-bold text-p1-darkgreen md:pt-20 md:text-6xl"
      >
        Лицензии
      </div>
      <div className="pb-2 text-center text-xl font-bold text-p1-darkgreen md:pb-5 md:text-4xl">
        NFT, дающие преференции своим держателям
      </div>
      <div className="m-5 grid grid-cols-1 gap-2 place-self-center rounded-3xl border-p1-darkgreen p-5 text-center text-p1-darkgreen md:grid-cols-3 md:border-4 md:shadow-lg">
        <div className="mb-4 mt-4">
          <p className="pb-2 text-2xl text-p1-darkgreen">Лицензия Промоутера</p>
          <Image
            className="relative mb-4 inline-block w-3/5 rounded-3xl border-2 border-amber-600 shadow-lg md:w-4/5"
            width={1000}
            height={1000}
            src="/Licenses/Promoter Lic.png"
            alt="PromoterLic"
          />

          <p className="text-xm pb-8 text-p1-darkgreen">
            Предоставляет доступ на страницу создания NFT наград
          </p>
          <Link
            href={'/rudiscoverylicense'}
            onClick={() => setLicense(0)}
            className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p1-darkgreen focus:text-p1-white focus:ring-2 focus:ring-p1-darkgreen md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
          >
            Исследуй NFT
          </Link>
          <Link
            href={'/rulicense'}
            onClick={() => setLicense(0)}
            className="rounded-r-xl border-2 border-amber-600 bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-amber-600 hover:text-p1-white focus:z-10 focus:bg-amber-600 focus:text-p1-white focus:ring-2 focus:ring-amber-600 md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-amber-600"
          >
            Cоздай NFT
          </Link>
        </div>
        <div className="mb-5 mt-5">
          <p className="pb-2 text-2xl text-p1-darkgreen">Национальная лицензия</p>

          <Image
            className="relative mb-4 inline-block w-3/5 rounded-3xl border-2 border-p1-gray shadow-lg md:w-4/5"
            width={1000}
            height={1000}
            src="/Licenses/National Lic.png"
            alt="NationalLic"
          />
          <p className="text-xm pb-8 text-p1-darkgreen">
            Предоставляет право голоса по развитию GAA на национальном и локальном уровнях
          </p>
          <Link
            href={'/rudiscoverylicense'}
            onClick={() => setLicense(1)}
            className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p1-darkgreen focus:text-p1-white focus:ring-2 focus:ring-p1-darkgreen md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
          >
            Исследуй NFT
          </Link>
          <Link
            href={'/rulicense'}
            onClick={() => setLicense(1)}
            className="rounded-r-xl border-2 border-p1-gray bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-gray hover:text-p1-white focus:z-10 focus:bg-p1-gray focus:text-p1-white focus:ring-2 focus:ring-p1-gray md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p1-gray"
          >
            Cоздай NFT
          </Link>
        </div>

        <div className="mb-5 mt-5">
          <p className="pb-2 text-2xl text-p1-darkgreen">Глобальная лицензия</p>

          <Image
            className="relative mb-4 inline-block w-3/5 rounded-3xl border-2 border-p2-orange shadow-lg md:w-4/5"
            width={1000}
            height={1000}
            src="/Licenses/Global Lic.png"
            alt="GlobalLic"
          />

          <p className="text-xm pb-8 text-p1-darkgreen">
            Предоставляет право голоса по развитию GAA на международном уровне
          </p>
          <Link
            href={'/rudiscoverylicense'}
            onClick={() => setLicense(2)}
            className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p1-darkgreen focus:text-p1-white focus:ring-2 focus:ring-p1-darkgreen md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
          >
            Исследуй NFT
          </Link>
          <Link
            href={'/rulicense'}
            onClick={() => setLicense(2)}
            className="rounded-r-xl border-2 border-p2-orange bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
          >
            Cоздай NFT
          </Link>
          <div className="pb-4"></div>
        </div>
      </div>
      <div className="md:pb-96"></div>
      <div className="md:pb-14"></div>
    </div>
  );
}
