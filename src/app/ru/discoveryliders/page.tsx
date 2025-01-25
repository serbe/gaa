'use client';

import { useLayoutEffect } from 'react';
import { useGaaStore } from '@/context/gaa-store-provider';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { JumpButton } from '@/components/jumpButton';

const Buttons = ({ lider, setter }: { lider: number; setter: (liderNumber: number) => void }) => {
  const jumpPoints = ['1', '2'];

  return (
    <div className="inline-flex w-full justify-self-center rounded-md pt-5 shadow-sm" role="group">
      <JumpButton points={jumpPoints} />

      <button
        id="button-drivers"
        className={
          'w-full rounded-l-2xl border ' +
          (lider == 0 ? 'text-p1-white bg-red-400 dark:bg-red-900' : 'bg-white') +
          ' bg-p2-white2 text-p1-darkgreen hover:text-p1-white focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:focus:text-p1-cyan dark:focus:ring-p1-green rounded-l-xl border-red-400 p-5 text-center text-sm font-medium shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-red-400 focus:z-10 focus:bg-red-400 focus:ring-2 focus:ring-red-400 md:p-4 dark:hover:bg-red-900 dark:hover:text-red-100'
        }
        onClick={() => {
          setter(0);
        }}
      >
        Drivers
      </button>
      <button
        id="button-team-members"
        className={
          'w-full border ' +
          (lider == 1 ? 'bg-p3-blue text-p1-white dark:bg-p3-violet' : 'bg-white') +
          ' border-p3-blue bg-p2-white2 text-p1-darkgreen hover:bg-p3-blue hover:text-p1-white focus:bg-p3-blue focus:text-p1-white focus:ring-p3-blue dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-p3-violet dark:focus:ring-p3-blue p-5 text-center text-sm font-medium shadow-lg transition-all delay-75 duration-300 ease-in-out focus:z-10 focus:ring-2 md:p-4 dark:hover:text-white dark:focus:text-white'
        }
        onClick={() => {
          setter(1);
        }}
      >
        Team&apos;s Members
      </button>
      <button
        id="button-collectors"
        className={
          'w-full border ' +
          (lider == 2 ? 'text-p1-white bg-stone-500 dark:bg-stone-700' : 'bg-white') +
          ' bg-p2-white2 text-p1-darkgreen hover:text-p1-white focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan border-stone-500 p-5 text-center text-sm font-medium shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-stone-500 focus:z-10 focus:bg-stone-500 focus:ring-2 focus:ring-stone-500 md:p-4 dark:hover:bg-stone-700 dark:hover:text-stone-100 dark:focus:text-white dark:focus:ring-stone-500'
        }
        onClick={() => {
          setter(2);
        }}
      >
        Collectors
      </button>
      <Link
        href="/discoverycars"
        className={
          'w-full rounded-r-2xl border ' +
          (lider == 3 ? 'text-p1-white bg-cyan-700 dark:bg-cyan-900' : 'bg-white') +
          ' bg-p2-white2 text-p1-darkgreen hover:text-p1-white focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan rounded-r-xl border border-cyan-700 p-5 text-center text-sm font-medium shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-700 focus:z-10 focus:bg-cyan-700 focus:ring-2 focus:ring-cyan-700 md:p-4 dark:hover:bg-cyan-900 dark:hover:text-white dark:focus:text-white dark:focus:ring-cyan-700'
        }
      >
        Cars
      </Link>
    </div>
  );
};

export default function Page() {
  const [{ lider, setLider }, gaaStore] = useGaaStore((state) => state);

  useLayoutEffect(() => {
    void gaaStore.persist.rehydrate();
  }, [gaaStore.persist]);

  return !gaaStore.persist.hasHydrated() ? (
    'Loading...'
  ) : (
    <div className="mx-auto max-w-7xl font-serif">
      {/* //Лидеры движений */}
      {/* //Drivers */}
      <div id="drivers" className={lider == 0 ? '' : 'hidden'}>
        <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
          <div className="px-2 text-xl font-semibold text-red-400 md:pt-2 md:text-3xl dark:text-red-800">
            Drivers NFT
          </div>
          <div className="px-2 text-xl font-semibold text-red-400 md:pt-2 md:text-3xl dark:text-red-800">
            Страница исследователя
          </div>
        </div>
        <div className="hover:border-p1-gray dark:hover:border-p1-green rounded-3xl border-red-400 md:border-4 md:shadow-lg dark:border-red-900">
          <div className="flex flex-wrap justify-center px-2 pt-2 md:flex-nowrap">
            <div>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Невзаимозаменяемый токен, отражающий пилота спортивного автомобиля.
              </p>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Каждый NFT содержит метаданные, хранящие информацию о гонщике.
              </p>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                По согласованию мы можем полностью скопировать внешность персоны.
              </p>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Мы очень ценим вклад пилотов в развитие автоспорта и хотели бы запечатлеть каждого в
                единой коллекции, будь то представитель кольцевых гонок или дисциплины дрифта.
              </p>

              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Предполагается, что первоначальным владельцем NFT будет сам пилот. Позже по желанию
                владельца токен может быть передан/продан любому человеку.
              </p>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Это ваш способ привлечения инвестиций, за одну транзакцию вы сможете создать до 100
                NFT - так мы планируем организовать поддержку пилотов и членов команд.
              </p>
            </div>

            <div className="m-1 place-items-center p-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Image
                    className="border-p2-orange relative inline-block w-max rounded-3xl border-2 shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Drivers/Driver4.png"
                    alt="Driver4"
                  />
                </div>
                <div>
                  <Image
                    className="border-p2-orange relative inline-block w-max rounded-3xl border-2 shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Drivers/Driver3.png"
                    alt="Driver3"
                  />
                </div>
                <div>
                  <Image
                    className="border-p2-orange relative inline-block w-max rounded-3xl border-2 shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Drivers/Driver2.png"
                    alt="Driver2"
                  />
                </div>
                <div>
                  <Image
                    className="border-p2-orange relative inline-block w-max rounded-3xl border-2 shadow-lg"
                    width={150}
                    height={150}
                    src="/HeroNFT/Drivers/Driver1.png"
                    alt="Driver1"
                  />
                </div>
              </div>
              <Buttons lider={lider} setter={setLider} />
              <div className="m-1 justify-self-center p-5">
                <Link
                  href="/mintdrivers"
                  className="bg-p2-white2 text-p1-darkgreen hover:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:text-p1-white inline-block w-full place-content-center rounded-3xl border-2 border-red-400 px-10 py-8 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-red-400 dark:hover:bg-red-900"
                >
                  Создай NFT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //Участники команд */}
      <div id="teammembers" className={lider == 1 ? '' : 'hidden'}>
        <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
          <div className="text-p3-blue px-2 text-xl font-semibold md:pt-2 md:text-3xl dark:text-blue-800">
            Team&apos;s Members NFT
          </div>
          <div className="text-p3-blue px-2 text-xl font-semibold md:pt-2 md:text-3xl dark:text-blue-800">
            Страница исследователя
          </div>
        </div>
        <div className="border-p3-blue hover:border-p1-gray dark:hover:border-p1-green rounded-3xl md:border-4 md:shadow-lg dark:border-blue-800">
          <div className="flex flex-wrap justify-center px-2 pt-2 md:flex-nowrap">
            <div>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Невзаимозаменяемый токен, отражающий члена автоспортивной команды.
              </p>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Каждый NFT содержит метаданные, хранящие информацию о персоне.
              </p>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                По согласованию мы можем полностью скопировать внешность персоны.
              </p>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Участники автоспортивных команд вносят огромный вклад в развитие автоспорта, поэтому
                мы бы хотели запечатлеть каждого из них в единой коллекции.
              </p>

              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Предполагается, что первоначальным владельцем NFT будет сам член команды. Позже по
                желанию владельца токен может быть передан/продан любому человеку.
              </p>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Это ваш способ привлечения инвестиций, за одну транзакцию вы сможете создать до 100
                NFT - так мы планируем организовать поддержку пилотов и членов команд.
              </p>
            </div>

            <div className="m-1 place-items-center p-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Image
                    className="border-p2-orange relative inline-block w-max rounded-3xl border-2 shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Team's members/TeamMember1.png"
                    alt="TeamMember1"
                  />
                </div>
                <div>
                  <Image
                    className="border-p2-orange relative inline-block w-max rounded-3xl border-2 shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Team's members/TeamMember2.png"
                    alt="TeamMember2"
                  />
                </div>
                <div>
                  <Image
                    className="border-p2-orange relative inline-block w-max rounded-3xl border-2 shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Team's members/TeamMember3.png"
                    alt="TeamMember3"
                  />
                </div>
                <div>
                  <Image
                    className="border-p2-orange relative inline-block w-max rounded-3xl border-2 shadow-lg"
                    width={150}
                    height={150}
                    src="/HeroNFT/Team's members/TeamMember4.png"
                    alt="TeamMember4"
                  />
                </div>
              </div>
              <Buttons lider={lider} setter={setLider} />
              <div className="m-1 p-5">
                <div className="justify-self-center">
                  <Link
                    href="/mintteammembers"
                    className="border-p3-blue bg-p2-white2 text-p1-darkgreen hover:bg-p3-blue hover:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-p3-violet dark:hover:text-p1-white inline-block w-full place-content-center rounded-3xl border-2 px-10 py-8 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out"
                  >
                    Создай NFT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //Коллекционеры */}
      <div id="collectors" className={lider == 2 ? '' : 'hidden'}>
        <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
          <div className="px-2 text-xl font-semibold text-stone-500 md:pt-2 md:text-3xl">
            Collectors NFT
          </div>
          <div className="px-2 text-xl font-semibold text-stone-500 md:pt-2 md:text-3xl">
            Страница исследователя
          </div>
        </div>
        <div className="hover:border-p1-gray dark:hover:border-p1-green rounded-3xl border-stone-500 md:border-4 md:shadow-lg">
          <div className="flex flex-wrap justify-center px-2 pt-2 md:flex-nowrap">
            <div>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Невзаимозаменяемый токен, отражающий коллекционера спортивных, раритетных и редких
                автомобилей.
              </p>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Каждый NFT содержит метаданные, хранящие информацию о персоне.
              </p>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                По согласованию мы можем полностью скопировать внешность персоны.
              </p>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Мы очень ценим вклад коллекционеров в историю автокультуры и автоспорта и хотели бы
                запечатлеть историю каждого в единой коллекции.
              </p>

              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Предполагается, что первоначальным владельцем NFT будет сам коллекционер. Позже по
                желанию владельца токен может быть передан/продан любому человеку.
              </p>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Это ваш способ привлечения инвестиций, за одну транзакцию вы сможете создать до 100
                NFT, так мы планируем организовать поддержку коллекционеров и развитие направления.
              </p>
            </div>

            <div className="m-1 place-items-center p-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Image
                    className="border-p2-orange relative inline-block w-max rounded-3xl border-2 shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Collectors/Collector1.png"
                    alt="Collector1"
                  />
                </div>
                <div>
                  <Image
                    className="border-p2-orange relative inline-block w-max rounded-3xl border-2 shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Collectors/Collector2.png"
                    alt="Collector2"
                  />
                </div>
                <div>
                  <Image
                    className="border-p2-orange relative inline-block w-max rounded-3xl border-2 shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Collectors/Collector3.png"
                    alt="Collector3"
                  />
                </div>
                <div>
                  <Image
                    className="border-p2-orange relative inline-block w-max rounded-3xl border-2 shadow-lg"
                    width={150}
                    height={150}
                    src="/HeroNFT/Collectors/Collector4.png"
                    alt="Collector4"
                  />
                </div>
              </div>
              <Buttons lider={lider} setter={setLider} />
              <div className="m-1 p-5">
                <div className="justify-self-center">
                  <Link
                    href="/mintcollectors"
                    className="bg-p2-white2 text-p1-darkgreen hover:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:text-p1-white inline-block w-full place-content-center rounded-3xl border-2 border-stone-500 px-10 py-8 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-stone-500 dark:hover:bg-stone-700"
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
      {/* //Лидеры движений */}
      <div id="1"></div>
      <div>
        <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
          <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan px-2 text-center text-xl font-semibold md:pt-2 md:text-3xl">
            Способы получения
          </div>
          <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan px-2 text-center text-xl font-semibold md:pt-2 md:text-3xl">
            Drivers, Team&apos;s Members, Collectors NFT
          </div>
        </div>
        <div className="border-p1-darkgreen dark:hover:border-p1-green rounded-3xl p-2 md:border-4 md:shadow-lg">
          <div className="dark:text-p1-green dark:hover:text-p1-cyan px-2 pt-2 text-center text-base md:text-2xl">
            Только верифицированные пользователи смогут создать NFT в коллекциях
          </div>
          <div className="dark:text-p1-green dark:hover:text-p1-cyan text-center text-base md:text-2xl">
            Drivers, Team&apos;s Members, Collectors
          </div>

          <div className="dark:text-p1-green dark:hover:text-p1-cyan pb-5 text-center text-base md:text-2xl">
            Верифицировать статус пользователя могут держатели Promoter License, National License,
            Global License, Management GAA
          </div>

          <div className="grid grid-cols-8 gap-1">
            <div className="col-span-1 col-start-1 row-span-4 place-self-center">
              <Image
                className="relative inline-block w-max"
                width={1000}
                height={1000}
                src="/Hero/13.png"
                alt="13"
              />
            </div>
            <div></div>
            <div></div>
            <div></div>

            <div className="col-span-1 col-start-5 row-span-3 place-self-center">
              <Image
                className="relative inline-block w-max"
                width={1000}
                height={1000}
                src="/Licenses/Promoter.png"
                alt="Promoter"
              />
            </div>
            <div className="col-span-1 col-start-6 row-span-3 place-self-center">
              <Image
                className="relative inline-block w-max"
                width={1000}
                height={1000}
                src="/Licenses/National.png"
                alt="national"
              />
            </div>
            <div className="col-span-1 col-start-7 row-span-3 place-self-center">
              <Image
                className="relative inline-block w-max"
                width={1000}
                height={1000}
                src="/Licenses/Global.png"
                alt="global"
              />
            </div>
            <div className="col-span-1 col-start-8 row-span-3 place-self-center">
              <Image
                className="relative inline-block w-max"
                width={1000}
                height={1000}
                src="/Licenses/Management.png"
                alt="Management"
              />
            </div>
            <div className="place-self-end">
              <Image
                className="relative z-50 inline-block w-max"
                width={1000}
                height={1000}
                src="/arrows/11.png"
                alt="11"
              />
            </div>
            <div className="relative place-self-center">
              <div>
                <Link
                  href="/applicationform"
                  className="border-p1-darkgreen bg-p1-white text-p1-darkgreen hover:bg-p1-green hover:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-p1-green dark:hover:text-p1-deepdarkgreen inline-block place-content-center rounded-xl border-2 p-2 text-center text-base shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
                >
                  Форма заявки
                </Link>
              </div>
            </div>
            <div className="place-self-center">
              <Image
                className="relative inline-block w-max"
                width={1000}
                height={1000}
                src="/arrows/2.png"
                alt="2"
              />
            </div>

            <div className="col-span-3 col-start-15 row-span-1">
              <Image
                className="relative inline-block w-max"
                width={1000}
                height={1000}
                src="/arrows/3.png"
                alt="3"
              />
            </div>
            <div className="place-self-center">
              <Image
                className="relative inline-block w-max"
                width={1000}
                height={1000}
                src="/arrows/4.png"
                alt="4"
              />
            </div>
            <div>
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
                src="/arrows/5.png"
                alt="5"
              />
            </div>
            <div>
              <Image
                className="border-p2-orange dark:border-p1-green relative inline-block w-max rounded-3xl border-2 shadow-lg"
                width={1000}
                height={1000}
                src="/HeroNFT/Drivers/Driver4.png"
                alt="Driver4"
              />
            </div>
            <div>
              <Image
                className="border-p2-orange dark:border-p1-green relative inline-block w-max rounded-3xl border-2 shadow-lg"
                width={1000}
                height={1000}
                src="/HeroNFT/Team's members/TeamMember1.png"
                alt="TeamMember1"
              />
            </div>
            <div>
              <Image
                className="border-p2-orange dark:border-p1-green relative inline-block w-max rounded-3xl border-2 shadow-lg"
                width={1000}
                height={1000}
                src="/HeroNFT/Collectors/Collector1.png"
                alt="Collector1"
              />
            </div>
          </div>

          <div className="dark:text-p1-green dark:hover:text-p1-cyan p-2 text-center text-base md:text-2xl">
            Любой желающий сможет приобрести NFT из коллекций на вторичном рынке - так мы
            поддерживаем активных участников направлений и их развитие
          </div>
          <div className="dark:text-p1-green dark:hover:text-p1-cyan p-2 text-center text-base md:text-2xl">
            Это ваш способ идентификации и привлечения дополнительных инвестиций для вашего развития
          </div>
        </div>
      </div>
      <div id="2"></div>
      <div className="pb-8"></div>
    </div>
  );
}
