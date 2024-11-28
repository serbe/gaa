'use client';

import { useGaaStore } from '@/providers/store-provider';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  const [{ setLider }] = useGaaStore((state) => state);
  return (
    <div className="mx-auto max-w-7xl font-serif">
      {/* //Cars*/}
      <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
        <div className="px-2 text-xl font-semibold text-cyan-700 md:pt-2 md:text-3xl">Cars NFT</div>
        <div className="px-2 text-xl font-semibold text-cyan-700 md:pt-2 md:text-3xl">
          Страница исследователя
        </div>
      </div>
      <div className="rounded-3xl border-cyan-700 hover:border-p1-gray md:border-4 md:shadow-lg">
        <div className="flex flex-wrap justify-center px-2 pt-2 md:flex-nowrap">
          <div>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl">
              Невзаимозаменяемый токен, отражающий реальный коллекционный, спортивный,
              кастомизированный или раритетный автомобиль из национальной, корпоративной или частной
              коллекции
            </p>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl">
              Каждый NFT содержит метаданные, хранящие информацию о коллекционном экземпляре, его
              описание и характеристики
            </p>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl">
              При создании NFT есть возможность добавить медиаконтент.
            </p>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl">
              Для получения Car NFT необходимо владеть хотябы одной NFT из коллекций Drivers,
              Team&apos;s Members, Collectors NFT
            </p>

            <p className="p-2 text-base text-p1-darkgreen md:text-xl">
              Данный токен Burnebal, то есть собственник смарт-контракта может уничтожить любой
              токен из коллекции, эта мера необходима для формирования чистоты коллекции.
            </p>

            <p className="p-2 text-base text-p1-darkgreen md:text-xl">
              То есть собственник смарт-контракта вправе уничтожить NFT в случае нарушения
              держателем Drivers, Team&apos;s Members, Collectors NFT правил создания NFT не
              соответствующих целям Проекта.
            </p>
          </div>
          <div className="m-1 place-items-center p-2">
            <Image
              className="mb-4 flex w-4/5 place-self-center rounded-3xl border-2 border-cyan-700 shadow-lg md:w-full"
              width={4000}
              height={4000}
              src="/Cars/Car.png"
              alt="Car"
            />
            <div
              className="inline-flex w-full justify-self-center rounded-md pt-5 shadow-sm"
              role="group"
            >
              <Link
                href={'/rudiscoveryliders'}
                onClick={() => setLider(0)}
                className="w-full rounded-l-2xl border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-red-400 focus:text-p1-white focus:ring-2 focus:ring-red-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p1-green"
              >
                Drivers
              </Link>
              <Link
                href={'/rudiscoveryliders'}
                onClick={() => setLider(1)}
                className="w-full border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p3-blue focus:text-p1-white focus:ring-2 focus:ring-p3-blue dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-stone-500"
              >
                Team&apos;s Members
              </Link>
              <Link
                href={'/rudiscoveryliders'}
                onClick={() => setLider(2)}
                className="w-full border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-stone-500 focus:text-p1-white focus:ring-2 focus:ring-stone-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-stone-500"
              >
                Collectors
              </Link>
              <Link
                href={'/rudiscoverycars'}
                onClick={() => setLider(3)}
                className="w-full rounded-r-2xl border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-cyan-700 focus:text-p1-white focus:ring-2 focus:ring-cyan-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
              >
                Cars
              </Link>
            </div>
            <div className="m-1 p-5">
              <div className="justify-self-center">
                <div className="justify-self-center">
                  <a
                    href="/rumintcars"
                    className="inline-block w-full place-content-center rounded-3xl border-2 border-cyan-700 bg-p2-white2 px-10 py-8 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-700 hover:text-p1-white"
                  >
                    Страница создания NFT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:pb-8"></div>

      <div className="px-2 text-center text-xl font-semibold text-p1-darkgreen md:pt-10 md:text-3xl">
        Способы получения Car NFT
      </div>

      <div className="rounded-3xl border-p1-darkgreen p-2 md:border-4 md:shadow-lg">
        <div className="text-center text-base text-p1-darkgreen md:text-2xl">
          Только владельцы NFT коллекций Drivers, Team&apos;s members, Collectors смогут оцифровать
          свои автомобили и создать Car NFT
        </div>

        <div className="grid grid-cols-5 gap-1 md:m-5">
          <div className="col-span-1 col-start-1 row-span-3 place-self-start">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/Hero/13.png"
              alt="13"
            />
          </div>
          <div className="place-self-center">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/arrows/1.png"
              alt="1"
            />
          </div>
          <div className="place-self-end">
            <button className="hover:drop-shadow-2xl">
              <Image
                className="relative inline-block w-max"
                width={1000}
                height={1000}
                src="/Logo/MetaMask.png"
                alt="Metamask"
              />
            </button>
          </div>
          <div className="place-self-center">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/arrows/22.png"
              alt="22"
            />
          </div>
          <div className="place-self-end">
            <Image
              className="relative inline-block w-max rounded-3xl border-2 border-cyan-700 shadow-lg"
              width={1000}
              height={1000}
              src="/Cars/car.png"
              alt="car"
            />
          </div>
          <div></div>
          <div className="text-centre relative place-self-center text-3xl font-bold text-p1-darkgreen">
            +
          </div>
          <div></div>
          <div></div>
          <div>
            <Image
              className="relative inline-block w-max rounded-3xl border-2 border-cyan-700 shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/Drivers/Driver4.png"
              alt="Driver4"
            />
          </div>
          <div>
            <Image
              className="relative inline-block w-max rounded-3xl border-2 border-cyan-700 shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/Team's members/TeamMember1.png"
              alt="TeamMember1"
            />
          </div>
          <div>
            <Image
              className="relative inline-block w-max rounded-3xl border-2 border-cyan-700 shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/Collectors/Collector1.png"
              alt="Collector1"
            />
          </div>
          <div></div>
          <div></div>
        </div>

        <div className="pt-5 text-center text-base text-p1-darkgreen md:text-2xl">
          Так мы планируем обеспечить прозрачность процесса.
        </div>
        <div className="text-center text-base text-p1-darkgreen md:text-2xl">
          и чистоту коллекции
        </div>
      </div>
      <div className="md:pb-8"></div>
    </div>
  );
}
