import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="font-serif">
      <div className="pt-5 text-center text-6xl font-bold text-p1-darkgreen">RaceLads</div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        by Global Automotive Association
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 col-start-2 w-full rounded-3xl border-4 border-p1-darkgreen text-center text-p1-darkgreen shadow-lg">
          <div>
            <p className="p-2 text-2xl text-p1-darkgreen">Генеративная коллекция</p>
            <h2 className="pb-2 text-2xl text-p1-darkgreen">RaceLads NFT</h2>
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/RaceLads/RaceLads1.png"
              alt="RaceLads1"
            />
            <p className="pt-2 text-2xl text-p1-darkgreen">10.000 уникальных героев.</p>
            <p className="pb-2 text-2xl text-p1-darkgreen">Кто твой персонаж - решать тебе!</p>
            <div className="pb-8"></div>

            <div className="flex flex-wrap px-10">
              <Link
                href={{
                  pathname: '/rudiscoveryracelads',
                  query: { racelad: 'discovery' },
                }}
                className="mx-auto w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange md:w-1/2 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
              >
                Исследуй NFT
              </Link>
              <Link
                href={{
                  pathname: '/rumintracelads',
                  query: { racelad: 'rumintracelads' },
                }}
                className="mx-auto w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange md:w-1/2 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
              >
                Страница создания NFT
              </Link>
            </div>
            <div className="pb-8 pt-8"></div>
          </div>
        </div>
      </div>

      {/* //Лидеры движений */}
      <div className="pt-5 text-center text-6xl font-bold text-p1-darkgreen">Лидеры движений</div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">знаковые персоны</div>
      <div className="m-5 grid grid-cols-1 gap-4 rounded-3xl border-4 border-p1-darkgreen p-5 text-center text-p1-darkgreen shadow-lg md:grid-cols-2 2xl:grid-cols-4">
        <div>
          <Image
            className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
            width={1000}
            height={1000}
            src="/HeroNFT/Drivers/Driver4.png"
            alt="Driver4"
          />
          <p className="text-2xl text-p1-darkgreen">Drivers</p>
          <p className="text-xm pb-2 text-p1-darkgreen">
            Пилоты гоночных автомобилей и болидов, присоединившиеся к Web3
          </p>
          <div className="py-5">
            <Link
              href={{
                pathname: '/rudiscoveryliders',
                query: { drivers: 'discovery' },
              }}
              className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-3 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Исследуй NFT
            </Link>
            <Link
              href={{
                pathname: '/rumintdrivers',
                query: { drivers: 'rumintdrivers' },
              }}
              className="rounded-r-xl border-2 border-p1-darkgreen bg-p2-white2 p-3 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Cоздай NFT
            </Link>
          </div>
        </div>
        <div>
          <Image
            className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
            width={1000}
            height={1000}
            src="/HeroNFT/Team's members/TeamMember1.png"
            alt="TeamMember1"
          />
          <p className="text-2xl text-p1-darkgreen">Team&apos;s Members</p>
          <p className="text-xm pb-2 text-p1-darkgreen">
            Участники команд, присоединившиеся к Web3
          </p>
          <div className="py-5">
            <Link
              href={{
                pathname: '/rudiscoveryliders',
                query: { teammembers: 'discovery' },
              }}
              className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-3 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Исследуй NFT
            </Link>
            <Link
              href={{
                pathname: '/rumintteammembers',
                query: { teammembers: 'rumintteammembers' },
              }}
              className="rounded-r-xl border-2 border-p1-darkgreen bg-p2-white2 p-3 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Cоздай NFT
            </Link>
          </div>
        </div>
        <div>
          <Image
            className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
            width={1000}
            height={1000}
            src="/HeroNFT/Collectors/Collector1.png"
            alt="Collector1"
          />
          <p className="text-2xl text-p1-darkgreen">Collectors</p>
          <p className="text-xm pb-2 text-p1-darkgreen">
            Владельцы редких, спортивных и уникальных автомобилей, присоединившиеся к Web3
          </p>
          <div className="py-5">
            <Link
              href={{
                pathname: '/rudiscoveryliders',
                query: { collectors: 'discovery' },
              }}
              className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-3 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Исследуй NFT
            </Link>
            <Link
              href={{
                pathname: '/rumintcollectors',
                query: { collectors: 'rumintcollectors' },
              }}
              className="rounded-r-xl border-2 border-p1-darkgreen bg-p2-white2 p-3 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Cоздай NFT
            </Link>
          </div>
        </div>
        <div>
          <Image
            className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
            width={1000}
            height={1000}
            src="/Cars/Car.png"
            alt="Car"
          />
          <p className="text-2xl text-p1-darkgreen">Cars</p>
          <p className="text-xm pb-2 text-p1-darkgreen">
            Раритетные, уникальные и спортивные автомобили из частных коллекций
          </p>
          <div className="py-5">
            <Link
              href={{
                pathname: '/rudiscoverycars',
                query: { cars: 'discovery' },
              }}
              className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-3 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Исследуй NFT
            </Link>
            <Link
              href={{
                pathname: '/rumintcars',
                query: { cars: 'rumintcars' },
              }}
              className="rounded-r-xl border-2 border-p1-darkgreen bg-p2-white2 p-3 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Cоздай NFT
            </Link>
          </div>
        </div>
      </div>

      {/* // CustomLads */}

      <div className="pt-5 text-center text-6xl font-bold text-p1-darkgreen">CustomLads</div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        Собери своего героя!
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 col-start-2 w-full rounded-3xl border-4 border-p1-darkgreen text-center text-p1-darkgreen shadow-lg">
          <div>
            <p className="p-2 text-2xl text-p1-darkgreen">
              Собери своего героя из готовых элементов коллекции
            </p>
            <h2 className="pb-2 text-2xl text-p1-darkgreen">RaceLads </h2>
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/CustomLads/CustomLads1.png"
              alt="CustomLads1"
            />
            <p className="pt-2 text-2xl text-p1-darkgreen">
              Только для держателей NFT коллекции RaceLads
            </p>
            <p className="pb-2 text-2xl text-p1-darkgreen">Кто твой персонаж - решать тебе!</p>
            <div className="pb-8"></div>

            <Link
              href={{
                pathname: '/rudiscoverycustomlads',
                query: { customlad: 'discovery' },
              }}
              className="rounded-l-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Исследуй NFT
            </Link>
            <Link
              href={{
                pathname: '/rumintcustomlads',
                query: { customlad: 'rumintcustomlads' },
              }}
              className="rounded-r-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Страница создания NFT
            </Link>

            <div className="pb-8 pt-8"></div>
          </div>
        </div>
      </div>

      {/* //Награды */}

      <div className="pt-5 text-center text-6xl font-bold text-p1-darkgreen">Награды</div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">Кубки и Медали</div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 col-start-2 w-full rounded-3xl border-4 border-p1-darkgreen text-center text-p1-darkgreen shadow-lg">
          <div>
            <Image
              className="relative m-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/Hero/Rewards.png"
              alt="Rewards"
            />
            <p className="p-2 text-2xl text-p1-darkgreen">
              NFT награды, содержащие метаданные о мероприятии, награжденном спортсмене, а также
              медиаконтент
            </p>
            <p className="p-4 text-2xl text-p1-darkgreen">Когда присоединиться - решать тебе!</p>
            <div className="pb-8"></div>

            <Link
              href={{
                pathname: '/rudiscoveryrewards',
                query: { rewards: 'discovery' },
              }}
              className="rounded-l-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Исследуй NFT
            </Link>
            <Link
              href={{
                pathname: '/rumintrewards',
                query: { rewards: 'rumintrewards' },
              }}
              className="rounded-r-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
            >
              Страница создания NFT
            </Link>

            <div className="pb-8 pt-8"></div>
          </div>
        </div>
      </div>

      {/* //Лицензии */}
      <div className="pt-5 text-center text-6xl font-bold text-p1-darkgreen">Лицензии</div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        NFT, дающие преференции своим держателям
      </div>
      <div className="m-5 grid grid-cols-3 gap-4 rounded-3xl border-4 border-p1-darkgreen p-5 text-center text-p1-darkgreen shadow-lg">
        <div>
          <Image
            className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
            width={1000}
            height={1000}
            src="/Licenses/Promoter Lic.png"
            alt="PromoterLic"
          />
          <p className="text-2xl text-p1-darkgreen">Лицензия Промоутера</p>
          <p className="text-xm pb-2 text-p1-darkgreen">
            Предоставляет доступ на страницу создания NFT наград
          </p>
        </div>
        <div>
          <Image
            className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
            width={1000}
            height={1000}
            src="/Licenses/National Lic.png"
            alt="NationalLic"
          />
          <p className="text-2xl text-p1-darkgreen">Национальная лицензия</p>
          <p className="text-xm pb-2 text-p1-darkgreen">
            Предоставляет право голоса по развитию GAA на национальном и локальном уровнях
          </p>
        </div>

        <div>
          <Image
            className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
            width={1000}
            height={1000}
            src="/Licenses/Global Lic.png"
            alt="GlobalLic"
          />
          <p className="text-2xl text-p1-darkgreen">Глобальная лицензия</p>
          <p className="text-xm pb-2 text-p1-darkgreen">
            Предоставляет право голоса по развитию GAA на международном уровне
          </p>
        </div>

        <div>
          <Link
            href={{
              pathname: '/rudiscoverylicense',
              query: { license: 'promoter' },
            }}
            className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-3 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
          >
            Исследуй NFT
          </Link>
          <Link
            href={{
              pathname: '/rulicense',
              query: { license: 'promoter' },
            }}
            className="rounded-r-xl border-2 border-p1-darkgreen bg-p2-white2 p-3 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
          >
            Cоздай NFT
          </Link>
        </div>
        <div>
          <Link
            href={{
              pathname: '/rudiscoverylicense',
              query: { license: 'national' },
            }}
            className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-3 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
          >
            Исследуй NFT
          </Link>
          <Link
            href={{
              pathname: '/rulicense',
              query: { license: 'national' },
            }}
            className="rounded-r-xl border-2 border-p1-darkgreen bg-p2-white2 p-3 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
          >
            Cоздай NFT
          </Link>
        </div>
        <div>
          <Link
            href={{
              pathname: '/rudiscoverylicense',
              query: { license: 'global' },
            }}
            className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-3 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
          >
            Исследуй NFT
          </Link>
          <Link
            href={{
              pathname: '/rulicense',
              query: { license: 'global' },
            }}
            className="rounded-r-xl border-2 border-p1-darkgreen bg-p2-white2 p-3 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
          >
            Cоздай NFT
          </Link>
        </div>
      </div>
    </div>
  );
}
