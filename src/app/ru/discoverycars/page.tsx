'use client';

import { useGaaStore } from '@/context/gaa-store-provider';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { JumpButton } from '@/components/jumpButton';
import { useFavicon } from '@/utils/hooks';

export default function Page() {
  const [{ setLider }] = useGaaStore((state) => state);
  const jumpPoints = ['1', '2'];
  useFavicon('/Cars/Oldtimer2.png ');

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      {/* //Cars*/}
      <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
        <div className="px-2 text-xl font-semibold text-cyan-700 md:pt-2 md:text-3xl">Cars NFT</div>
        <div className="px-2 text-xl font-semibold text-cyan-700 md:pt-2 md:text-3xl">
          Страница исследователя
        </div>
      </div>
      <div className="rounded-3xl border-cyan-700 hover:border-p1-gray md:border-4 md:shadow-lg dark:hover:border-p1-green">
        <div className="flex flex-wrap justify-center px-2 pt-2 md:flex-nowrap">
          <div>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
              Невзаимозаменяемый токен, отражающий реальный коллекционный, спортивный,
              кастомизированный или раритетный автомобиль из национальной, корпоративной или частной
              коллекции.
            </p>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
              Каждый NFT содержит метаданные, хранящие информацию о коллекционном экземпляре, его
              описание и характеристики.
            </p>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
              При создании NFT есть возможность добавить медиаконтент.
            </p>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
              Для создания Cars NFT необходимо владеть хотя бы одним NFT из коллекций Drivers,
              Team&apos;s Members или Collectors.
            </p>

            <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
              Данный токен имеет характеристику &quot;Burnable&quot; - собственник смарт-контракта
              может уничтожить любой токен из коллекции. Эта мера необходима для поддержания
              актуальности коллекции.
            </p>

            <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
              Собственник смарт-контракта вправе уничтожить NFT в случае создания NFT, не
              соответствующих правилам проекта.
            </p>
          </div>
          <div id="1"></div>
          <div className="m-1 place-items-center pt-2">
            <Image
              className="mb-4 flex w-4/5 place-self-center rounded-3xl border-2 border-cyan-700 shadow-lg md:w-11/12"
              width={4000}
              height={4000}
              src="/Cars/Car.png"
              alt="Car"
            />
            <div
              className="inline-flex w-full justify-self-center rounded-md p-2 align-baseline shadow-sm"
              role="group"
            >
              <Link
                href="/discoveryliders"
                onClick={() => {
                  setLider(0);
                }}
                className="rounded-l-xl border border-red-400 bg-p2-white2 p-5 text-center text-sm font-medium text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-red-400 hover:text-p1-white focus:z-10 focus:bg-red-400 focus:text-p1-white focus:ring-2 focus:ring-red-400 md:p-4 dark:border dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-red-900 dark:hover:text-red-100 dark:focus:text-p1-cyan dark:focus:ring-p1-green"
              >
                Drivers
              </Link>
              <Link
                href="/discoveryliders"
                onClick={() => {
                  setLider(1);
                }}
                className="border border-p3-blue bg-p2-white2 p-5 text-center text-sm font-medium text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p3-blue hover:text-p1-white focus:z-10 focus:bg-p3-blue focus:text-p1-white focus:ring-2 focus:ring-p3-blue md:p-4 dark:border dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-p3-violet dark:hover:text-white dark:focus:text-white dark:focus:ring-p3-blue"
              >
                Team&apos;s Members
              </Link>
              <Link
                href="/discoveryliders"
                onClick={() => {
                  setLider(2);
                }}
                className="border border-stone-500 bg-p2-white2 p-5 text-center text-sm font-medium text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-stone-500 hover:text-p1-white focus:z-10 focus:bg-stone-500 focus:text-p1-white focus:ring-2 focus:ring-stone-500 md:p-4 dark:border dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-stone-700 dark:hover:text-stone-100 dark:focus:text-white dark:focus:ring-stone-500"
              >
                Collectors
              </Link>
              <Link
                href="/discoverycars"
                onClick={() => {
                  setLider(3);
                }}
                className="rounded-r-xl border border-cyan-700 bg-p2-white2 p-5 text-center text-sm font-medium text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-700 hover:text-p1-white focus:z-10 focus:bg-cyan-700 focus:text-p1-white focus:ring-2 focus:ring-cyan-700 md:p-4 dark:border dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-cyan-900 dark:hover:text-white dark:focus:text-white dark:focus:ring-cyan-700"
              >
                Cars
              </Link>
            </div>
            <div className="m-1 p-5">
              <div className="justify-self-center">
                <div className="justify-self-center">
                  <Link
                    href="/mintcars"
                    className="inline-block w-full place-content-center rounded-3xl border-2 border-cyan-700 bg-p2-white2 px-10 py-8 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-700 hover:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-cyan-900 dark:hover:text-white dark:focus:text-white dark:focus:ring-cyan-700"
                  >
                    Создай NFT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:pb-8"></div>
      <div id="2"></div>
      <div className="px-2 text-center text-xl font-semibold text-p1-darkgreen md:pt-10 md:text-3xl dark:text-p1-green dark:hover:text-p1-cyan">
        Способы получения Cars NFT
      </div>

      <div className="h-max rounded-3xl border-p1-darkgreen p-2 md:border-4 md:shadow-lg dark:hover:border-p1-green">
        <div className="text-center text-base text-p1-darkgreen md:text-2xl dark:text-p1-green dark:hover:text-p1-cyan">
          Только владельцы NFT из коллекций Drivers, Team&apos;s members, Collectors смогут
          оцифровать свои автомобили и создать Cars NFT
        </div>

        <div className="grid grid-cols-7 gap-1 md:m-5">
          <div className="col-span-1 col-start-2 row-span-3 place-self-start">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src=/Hero/i13.png"
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
          <div></div>
          <div></div>

          <div className="relative place-self-center text-center text-3xl font-bold text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
            +
          </div>
          <div></div>
          <div></div>
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

        <div className="pt-5 text-center text-base text-p1-darkgreen md:text-2xl dark:text-p1-green dark:hover:text-p1-cyan">
          Так мы планируем обеспечить прозрачность процесса
          <p className="text-center text-base md:text-2xl">и чистоту коллекции</p>
        </div>
      </div>
      <div id="1"></div>
      <div className="md:pb-8"></div>
    </div>
  );
}
