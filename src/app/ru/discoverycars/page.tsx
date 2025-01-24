'use client';

import { useGaaStore } from '@/context/gaa-store-provider';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { JumpButton } from '@/components/jumpButton';

export default function Page() {
  const [{ setLider }] = useGaaStore((state) => state);
  const jumpPoints = ['1', '2'];

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
      <div className="hover:border-p1-gray dark:hover:border-p1-green rounded-3xl border-cyan-700 md:border-4 md:shadow-lg">
        <div className="flex flex-wrap justify-center px-2 pt-2 md:flex-nowrap">
          <div>
            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
              Невзаимозаменяемый токен, отражающий реальный коллекционный, спортивный,
              кастомизированный или раритетный автомобиль из национальной, корпоративной или частной
              коллекции.
            </p>
            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
              Каждый NFT содержит метаданные, хранящие информацию о коллекционном экземпляре, его
              описание и характеристики.
            </p>
            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
              При создании NFT есть возможность добавить медиаконтент.
            </p>
            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
              Для создания Cars NFT необходимо владеть хотя бы одним NFT из коллекций Drivers,
              Team&apos;s Members или Collectors.
            </p>

            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
              Данный токен имеет характеристику &quot;Burnable&quot; - собственник смарт-контракта
              может уничтожить любой токен из коллекции. Эта мера необходима для поддержания
              актуальности коллекции.
            </p>

            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
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
                className="bg-p2-white2 text-p1-darkgreen hover:text-p1-white focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:focus:text-p1-cyan dark:focus:ring-p1-green rounded-l-xl border border-red-400 p-5 text-center text-sm font-medium shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-red-400 focus:z-10 focus:bg-red-400 focus:ring-2 focus:ring-red-400 md:p-4 dark:border dark:hover:bg-red-900 dark:hover:text-red-100"
              >
                Drivers
              </Link>
              <Link
                href="/discoveryliders"
                onClick={() => {
                  setLider(1);
                }}
                className="border-p3-blue bg-p2-white2 text-p1-darkgreen hover:bg-p3-blue hover:text-p1-white focus:bg-p3-blue focus:text-p1-white focus:ring-p3-blue dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-p3-violet dark:focus:ring-p3-blue border p-5 text-center text-sm font-medium shadow-lg transition-all delay-75 duration-300 ease-in-out focus:z-10 focus:ring-2 md:p-4 dark:border dark:hover:text-white dark:focus:text-white"
              >
                Team&apos;s Members
              </Link>
              <Link
                href="/discoveryliders"
                onClick={() => {
                  setLider(2);
                }}
                className="bg-p2-white2 text-p1-darkgreen hover:text-p1-white focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan border border-stone-500 p-5 text-center text-sm font-medium shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-stone-500 focus:z-10 focus:bg-stone-500 focus:ring-2 focus:ring-stone-500 md:p-4 dark:border dark:hover:bg-stone-700 dark:hover:text-stone-100 dark:focus:text-white dark:focus:ring-stone-500"
              >
                Collectors
              </Link>
              <Link
                href="/discoverycars"
                onClick={() => {
                  setLider(3);
                }}
                className="bg-p2-white2 text-p1-darkgreen hover:text-p1-white focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan rounded-r-xl border border-cyan-700 p-5 text-center text-sm font-medium shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-700 focus:z-10 focus:bg-cyan-700 focus:ring-2 focus:ring-cyan-700 md:p-4 dark:border dark:hover:bg-cyan-900 dark:hover:text-white dark:focus:text-white dark:focus:ring-cyan-700"
              >
                Cars
              </Link>
            </div>
            <div className="m-1 p-5">
              <div className="justify-self-center">
                <div className="justify-self-center">
                  <Link
                    href="/mintcars"
                    className="bg-p2-white2 text-p1-darkgreen hover:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan inline-block w-full place-content-center rounded-3xl border-2 border-cyan-700 px-10 py-8 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-700 dark:hover:bg-cyan-900 dark:hover:text-white dark:focus:text-white dark:focus:ring-cyan-700"
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
      <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan px-2 text-center text-xl font-semibold md:pt-10 md:text-3xl">
        Способы получения Cars NFT
      </div>

      <div className="border-p1-darkgreen dark:hover:border-p1-green h-max rounded-3xl p-2 md:border-4 md:shadow-lg">
        <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan text-center text-base md:text-2xl">
          Только владельцы NFT из коллекций Drivers, Team&apos;s members, Collectors смогут
          оцифровать свои автомобили и создать Cars NFT
        </div>

        <div className="grid grid-cols-7 gap-1 md:m-5">
          <div className="col-span-1 col-start-2 row-span-3 place-self-start">
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
          <div></div>
          <div></div>

          <div className="text-centre text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan relative place-self-center text-3xl font-bold">
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

        <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan pt-5 text-center text-base md:text-2xl">
          Так мы планируем обеспечить прозрачность процесса
          <p className="text-center text-base md:text-2xl">и чистоту коллекции</p>
        </div>
      </div>
      <div id="1"></div>
      <div className="md:pb-8"></div>
    </div>
  );
}
