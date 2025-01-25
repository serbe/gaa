'use client';
import Image from 'next/image';
import { JumpButton } from '@/components/jumpButton';
import { Link } from '@/i18n/routing';

export default function Page() {
  const jumpPoints = ['1', '2', '3', '4'];
  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      {/* //CustomLads discovery*/}
      <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
        <div className="text-p1-darkgreen dark:text-p1-green px-2 text-xl font-semibold md:pt-2 md:text-3xl">
          CustomLads NFT
        </div>
        <div className="text-p1-darkgreen dark:text-p1-green px-2 text-xl font-semibold md:pt-2 md:text-3xl">
          Страница исследователя
        </div>
      </div>
      <div id="1"></div>
      <div className="border-p1-darkgreen hover:border-p1-gray dark:border-p1-green dark:hover:border-p1-darkgreen dark:hover:text-p1-cyan rounded-3xl md:border-4 md:shadow-lg">
        <div className="flex flex-wrap justify-center space-x-2 px-2 pt-2 md:flex-nowrap">
          <div>
            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
              Невзаимозаменяемый токен, представляющий кастомизированного героя из элементов первой
              генеративной коллекции RaceLads, который собран его владельцем.
            </p>
            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
              Мы очень ценим вклад каждого неравнодушного к проекту и готовы предоставить
              возможность формирования героя по своим предпочтениям.
            </p>
            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
              Мы стали свидетелями дублирования (воровства) существующих коллекций и выступаем
              против подобных деяний, поэтому хотим дать каждому возможность собрать своего героя
              легальным способом.
            </p>
            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
              Данная коллекция будет доступна только для держателей NFT из коллекции RaceLads.
            </p>
            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
              10 уровней доступа к редким элементам определяется наличием соответствующего
              количества NFT из коллекции RaceLads.
            </p>
            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
              Любой CustomLad по желанию держателя может быть передан/продан любому участнику
              сообщества.
            </p>
          </div>
          <div id="2"></div>
          <div className="m-1 place-items-center p-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Image
                  className="border-p2-orange dark:border-p1-green relative inline-block w-max rounded-3xl border-2 shadow-lg"
                  width={4000}
                  height={4000}
                  src="/HeroNFT/CustomLads/CustomLads1.png"
                  alt="CustomLads1"
                />
              </div>
              <div className="justify-self-end">
                <Image
                  className="border-p2-orange dark:border-p1-green relative inline-block w-max rounded-3xl border-2 shadow-lg"
                  width={4000}
                  height={4000}
                  src="/HeroNFT/CustomLads/CustomLads2.png"
                  alt="CustomLads2"
                />
              </div>
              <div className="justify-self-end">
                <Image
                  className="border-p2-orange dark:border-p1-green relative inline-block w-max rounded-3xl border-2 shadow-lg"
                  width={4000}
                  height={4000}
                  src="/HeroNFT/CustomLads/CustomLads3.png"
                  alt="CustomLads3"
                />
              </div>
              <div className="justify-self-end">
                <Image
                  className="border-p2-orange dark:border-p1-green relative inline-block w-max rounded-3xl border-2 shadow-lg"
                  width={4000}
                  height={4000}
                  src="/HeroNFT/CustomLads/CustomLads4.png"
                  alt="CustomLads4"
                />
              </div>
            </div>

            <div className="m-1 justify-self-center p-5">
              <Link
                href="/mintcustomlads"
                className="border-p2-orange bg-p2-white2 text-p1-darkgreen hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p2-orange inline-block w-full rounded-3xl border-2 px-10 py-8 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out dark:hover:bg-amber-600 dark:hover:text-amber-100"
              >
                Создай NFT
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8"></div>
      <div id="3"></div>
      <div className="text-p1-darkgreen dark:text-p1-green px-2 text-center text-xl font-semibold md:pt-2 md:text-3xl">
        Способы получения CustomLads NFT
      </div>

      <div className="border-p1-darkgreen dark:border-p1-green dark:hover:border-p1-darkgreen m-2 rounded-3xl p-2 md:border-4 md:shadow-lg">
        <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan pb-2 text-center text-base md:text-2xl">
          Любой владелец NFT из коллекции RaceLads может собрать персонажа из коллекции CustomLads
        </div>

        <div className="grid grid-cols-6 gap-1">
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
              className="border-p2-orange dark:border-p1-green relative inline-block w-max rounded-3xl border-2 shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/CustomLads/Customlads1.png"
              alt="Customlads1"
            />
          </div>
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
              className="border-p2-orange dark:border-p1-green relative inline-block w-max rounded-3xl border-2 shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/RaceLads/RaceLads1.png"
              alt="RaceLad1"
            />
          </div>
          <div></div>
          <div></div>
          <div>
            <Image
              className="border-p2-orange dark:border-p1-green relative -mt-40 inline-block w-max rounded-3xl border-2 shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/CustomLads/Customlads2.png"
              alt="Customlads2"
            />
          </div>
          <div></div>
          <div></div>
        </div>

        <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-center text-base md:text-2xl">
          Страница создания CustomLads NFT станет доступна через некоторое время после официального
          выпуска коллекции RaceLads
        </div>
        <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan pb-2 text-center text-base md:text-2xl">
          Так мы планируем создать инвестиционную привлекательность и стабильность коллекции
          RaceLads
        </div>
      </div>
      <div id="4"></div>
      <div className="pb-8"></div>
    </div>
  );
}
