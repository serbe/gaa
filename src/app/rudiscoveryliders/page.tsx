'use client';

import { useLayoutEffect } from 'react';
import { useGaaStore } from '@/providers/gaa-store-provider';
import Image from 'next/image';
import Link from 'next/link';

const Buttons = ({ lider, setter }: { lider: number; setter: (liderNumber: number) => void }) => {
  return (
    <div className="inline-flex w-full justify-self-center rounded-md pt-5 shadow-sm" role="group">
      <button
        id="button-drivers"
        className={
          'w-full rounded-l-2xl border border-gray-200 ' +
          (lider == 0 ? 'bg-red-400' : 'bg-white') +
          ' p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-red-400 focus:text-p1-white focus:ring-2 focus:ring-red-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p1-green'
        }
        onClick={() => setter(0)}
      >
        Drivers
      </button>
      <button
        id="button-team-members"
        className={
          'w-full border border-gray-200 ' +
          (lider == 1 ? 'bg-p3-blue' : 'bg-white') +
          ' p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p3-blue focus:text-p1-white focus:ring-2 focus:ring-p3-blue dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-stone-500'
        }
        onClick={() => setter(1)}
      >
        Team&apos;s Members
      </button>
      <button
        id="button-collectors"
        className={
          'w-full border border-gray-200 ' +
          (lider == 2 ? 'bg-stone-500' : 'bg-white') +
          ' p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-stone-500 focus:text-p1-white focus:ring-2 focus:ring-stone-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-stone-500'
        }
        onClick={() => setter(2)}
      >
        Collectors
      </button>
      <Link
        href="/rudiscoverycars"
        className={
          'w-full rounded-r-2xl border border-gray-200 ' +
          (lider == 3 ? 'bg-cyan-700' : 'bg-white') +
          ' p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-cyan-700 focus:text-p1-white focus:ring-2 focus:ring-cyan-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange'
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
    gaaStore.persist.rehydrate();
  }, [gaaStore.persist]);

  return !gaaStore.persist?.hasHydrated() ? (
    'Loading...'
  ) : (
    <div className="mx-auto max-w-7xl font-serif">
      {/* //Лидеры движений */}
      {/* //Drivers */}
      <div id="drivers" className={lider == 0 ? '' : 'hidden'}>
        <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
          <div className="px-2 text-xl font-semibold text-red-400 md:pt-2 md:text-3xl">
            Drivers NFT
          </div>
          <div className="px-2 text-xl font-semibold text-red-400 md:pt-2 md:text-3xl">
            Страница исследователя
          </div>
        </div>
        <div className="rounded-3xl border-red-400 hover:border-p1-gray dark:hover:border-p1-green md:border-4 md:shadow-lg">
          <div className="flex flex-wrap justify-center px-2 pt-2 md:flex-nowrap">
            <div>
              <p className="p-2 text-base text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan md:text-xl">
                Невзаимозаменяемый токен, отражающий пилота спортивного автомобиля.
              </p>
              <p className="p-2 text-base text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan md:text-xl">
                Каждый NFT содержит метаданные, хранящие информацию о гонщике
              </p>
              <p className="p-2 text-base text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan md:text-xl">
                По согласованию мы можем полностью скопировать внешность персоны
              </p>
              <p className="p-2 text-base text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan md:text-xl">
                Мы очень ценим вклад пилотов в развитие автоспорта и хотели бы запечатлеть каждого в
                единой коллекции, будь то представитель кольцевых гонок или дисциплины дрифта
              </p>

              <p className="p-2 text-base text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan md:text-xl">
                Предполагается, что первоначальным владельцем NFT будет сам пилот. Позже по желанию
                владельца токен может быть передан/продан любому человеку.
              </p>
              <p className="p-2 text-base text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan md:text-xl">
                Это ваш способ привлечения инвестиций, за одну транзакцию вы сможете создать до 100
                NFT, так мы планируем организовать поддержку пилотов и членов команд
              </p>
            </div>

            <div className="m-1 place-items-center p-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Drivers/Driver4.png"
                    alt="Driver4"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Drivers/Driver3.png"
                    alt="Driver3"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Drivers/Driver2.png"
                    alt="Driver2"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={150}
                    height={150}
                    src="/HeroNFT/Drivers/Driver1.png"
                    alt="Driver1"
                  />
                </div>
              </div>
              <Buttons lider={lider} setter={setLider} />
              <div className="m-1 justify-self-center p-5">
                <a
                  href="/rumintdrivers"
                  className="inline-block w-full place-content-center rounded-3xl border-2 border-red-400 bg-p2-white2 px-10 py-8 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-red-400 hover:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-red-400 dark:hover:text-p1-white"
                >
                  Страница создания NFT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //Участники команд */}
      <div id="teammembers" className={lider == 1 ? '' : 'hidden'}>
        <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
          <div className="px-2 text-xl font-semibold text-p3-blue md:pt-2 md:text-3xl">
            Team&apos;s Members NFT
          </div>
          <div className="px-2 text-xl font-semibold text-p3-blue md:pt-2 md:text-3xl">
            Страница исследователя
          </div>
        </div>
        <div className="rounded-3xl border-p3-blue hover:border-p1-gray dark:hover:border-p1-green md:border-4 md:shadow-lg">
          <div className="flex flex-wrap justify-center px-2 pt-2 md:flex-nowrap">
            <div>
              <p className="p-2 text-base text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan md:text-xl">
                Невзаимозаменяемый токен, отражающий члена автоспортивной команды.
              </p>
              <p className="p-2 text-base text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan md:text-xl">
                Каждый NFT содержит метаданные, хранящие информацию о персоне
              </p>
              <p className="p-2 text-base text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan md:text-xl">
                По согласованию мы можем полностью скопировать внешность персоны
              </p>
              <p className="p-2 text-base text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan md:text-xl">
                Участники автоспортивных команд вносят огромный вклад в развитие автоспорта, поэтому
                мы бы хотели запечатлеть каждого из них в единой коллекции.
              </p>

              <p className="p-2 text-base text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan md:text-xl">
                Предполагается, что первоначальным владельцем NFT будет сам член команды. Позже по
                желанию владельца токен может быть передан/продан любому человеку.
              </p>
              <p className="p-2 text-base text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan md:text-xl">
                Это ваш способ привлечения инвестиций, за одну транзакцию вы сможете создать до 100
                NFT, так мы планируем организовать поддержку пилотов и членов команд
              </p>
            </div>

            <div className="m-1 place-items-center p-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Team's members/TeamMember1.png"
                    alt="TeamMember1"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Team's members/TeamMember2.png"
                    alt="TeamMember2"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Team's members/TeamMember3.png"
                    alt="TeamMember3"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
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
                  <a
                    href="/rumintteammembers"
                    className="inline-block w-full place-content-center rounded-3xl border-2 border-p3-blue bg-p2-white2 px-10 py-8 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p3-blue hover:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-p3-blue dark:hover:text-p1-white"
                  >
                    Страница создания NFT
                  </a>
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
        <div className="rounded-3xl border-stone-500 hover:border-p1-gray dark:hover:border-p1-green md:border-4 md:shadow-lg">
          <div className="flex flex-wrap justify-center px-2 pt-2 md:flex-nowrap">
            <div>
              <p className="p-2 text-base text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan md:text-xl">
                Невзаимозаменяемый токен, отражающий коллекционера спортивных, раритетных и редких
                автомобилей.
              </p>
              <p className="p-2 text-base text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan md:text-xl">
                Каждый NFT содержит метаданные, хранящие информацию о персоне
              </p>
              <p className="p-2 text-base text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan md:text-xl">
                По согласованию мы можем полностью скопировать внешность персоны
              </p>
              <p className="p-2 text-base text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan md:text-xl">
                Мы очень ценим вклад коллекционеров в историю автокультуры и автоспорта и хотели бы
                запечатлеть историю каждого в единой коллекции
              </p>

              <p className="p-2 text-base text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan md:text-xl">
                Предполагается, что первоначальным владельцем NFT будет сам член команды. Позже по
                желанию владельца токен может быть передан/продан любому человеку.
              </p>
              <p className="p-2 text-base text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan md:text-xl">
                Это ваш способ привлечения инвестиций, за одну транзакцию вы сможете создать до 100
                NFT, так мы планируем организовать поддержку коллекционеров и развитие направления
              </p>
            </div>

            <div className="m-1 place-items-center p-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Collectors/Collector1.png"
                    alt="Collector1"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Collectors/Collector2.png"
                    alt="Collector2"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Collectors/Collector3.png"
                    alt="Collector3"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
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
                  <a
                    href="/rumintcollectors"
                    className="inline-block w-full place-content-center rounded-3xl border-2 border-stone-500 bg-p2-white2 px-10 py-8 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-stone-500 hover:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-stone-500 dark:hover:text-p1-white"
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
      {/* //Лидеры движений */}
      <div>
        <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
          <div className="px-2 text-center text-xl font-semibold text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan md:pt-2 md:text-3xl">
            Способы получения
          </div>
          <div className="px-2 text-center text-xl font-semibold text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan md:pt-2 md:text-3xl">
            Drivers, Team&apos;s Members, Collectors NFT
          </div>
        </div>
        <div className="rounded-3xl border-p1-darkgreen p-2 dark:hover:border-p1-green md:border-4 md:shadow-lg">
          <div className="px-2 pt-2 text-center text-base dark:text-p1-green dark:hover:text-p1-cyan md:text-2xl">
            Только верифицированные пользователи смогут создать NFT в коллекциях
          </div>
          <div className="text-center text-base dark:text-p1-green dark:hover:text-p1-cyan md:text-2xl">
            Drivers, Team&apos;s Members, Collectors NFT
          </div>

          <div className="pb-5 text-center text-base dark:text-p1-green dark:hover:text-p1-cyan md:text-2xl">
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
                <a
                  href="/ruapplicationform"
                  className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-p1-green dark:hover:text-p1-deepdarkgreen md:text-xl"
                >
                  Форма заявки
                </a>
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

            <div className="col-start-15 col-span-3 row-span-1">
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
                className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg dark:border-p1-green"
                width={1000}
                height={1000}
                src="/HeroNFT/Drivers/Driver4.png"
                alt="Driver4"
              />
            </div>
            <div>
              <Image
                className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg dark:border-p1-green"
                width={1000}
                height={1000}
                src="/HeroNFT/Team's members/TeamMember1.png"
                alt="TeamMember1"
              />
            </div>
            <div>
              <Image
                className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg dark:border-p1-green"
                width={1000}
                height={1000}
                src="/HeroNFT/Collectors/Collector1.png"
                alt="Collector1"
              />
            </div>
          </div>

          <div className="p-2 text-center text-base dark:text-p1-green dark:hover:text-p1-cyan md:text-2xl">
            Любой желающий сможет приобрести NFT из коллекций на вторичном рынке, так мы
            поддерживаем активных участников направлений и их развитие
          </div>
          <div className="p-2 text-center text-base dark:text-p1-green dark:hover:text-p1-cyan md:text-2xl">
            Это ваш способ идентификации и привлечения дополнительных инвестиций для вашего развития
          </div>
        </div>
      </div>
      <div className="pb-8"></div>
    </div>
  );
}
