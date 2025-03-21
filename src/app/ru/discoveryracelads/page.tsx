'use client';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { JumpButton } from '@/components/jumpButton';
import { useFavicon } from '@/utils/hooks';

export default function Page() {
  const jumpPoints = ['1', '2', '3', '4'];
  useFavicon('/Icon/RaceLads.png');

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      {/* //RaceLads discovery*/}
      <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
        <div className="px-2 text-xl font-semibold text-p1-darkgreen md:pt-2 md:text-3xl dark:text-p1-green dark:hover:text-p1-cyan">
          RaceLads NFT
        </div>
        <div className="px-2 text-xl font-semibold text-p1-darkgreen md:pt-2 md:text-3xl dark:text-p1-green dark:hover:text-p1-cyan">
          Страница исследователя
        </div>
      </div>
      <div id="1"></div>

      <div className="rounded-3xl border-p1-darkgreen md:border-4 md:shadow-lg md:hover:border-p1-green dark:border-p1-green dark:text-p1-green dark:hover:border-p1-darkgreen dark:hover:text-p1-cyan">
        <div className="flex flex-wrap justify-center space-x-2 px-2 md:flex-nowrap">
          <div>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
              Невзаимозаменяемый токен, представляющий коллекцию из 10.000 уникальных цифровых
              героев, вдохновленных любовью к автомобилям и запечатленных в Blockchain.
            </p>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
              Коллекция, призванная внести свой вклад в развитие и популяризацию автокультуры и
              автоспорта.
            </p>
            <div className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
              Приобретая героя из коллекции ты становишься членом большого дружного сообщества!
              <ul className="list-disc p-5 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
                <li className="pb-2">
                  посещай автоспортивные мероприятия, выставки, лекции, вечеринки
                </li>
                <li className="pb-2">
                  участвуй в виртуальных гонках и других захватывающих онлайн событиях
                </li>
                <li className="">
                  принимай участие в ключевых голосованиях, определяющих развитие сообщества
                </li>
              </ul>
            </div>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
              Любой RaceLad по желанию держателя может быть передан/продан любому участнику
              сообщества.
            </p>
          </div>
          <div id="2"></div>

          <div className="m-1 place-items-center p-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Image
                  className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg dark:border-p1-green"
                  width={4000}
                  height={4000}
                  src="/HeroNFT/RaceLads/RaceLads1.png"
                  alt="RaceLads1"
                />
              </div>
              <div className="justify-self-end">
                <Image
                  className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg dark:border-p1-green"
                  width={4000}
                  height={4000}
                  src="/HeroNFT/RaceLads/RaceLads2.png"
                  alt="RaceLads2"
                />
              </div>
              <div className="justify-self-end">
                <Image
                  className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg dark:border-p1-green"
                  width={4000}
                  height={4000}
                  src="/HeroNFT/RaceLads/RaceLads3.png"
                  alt="RaceLads3"
                />
              </div>
              <div className="justify-self-end">
                <Image
                  className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg dark:border-p1-green"
                  width={4000}
                  height={4000}
                  src="/HeroNFT/RaceLads/RaceLads4.png"
                  alt="RaceLads4"
                />
              </div>
            </div>
            <div className="col-span-2 col-start-1 row-span-1 m-1 place-self-center p-5">
              <div className="">
                <Link
                  href="/mintracelads"
                  className="inline-block w-full rounded-3xl border-2 border-p2-orange bg-p2-white2 px-10 py-8 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p2-orange dark:hover:bg-amber-600 dark:hover:text-amber-100"
                >
                  Создай своего RaceLad!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8"></div>
      <div id="3"></div>

      <div className="place-self-center pt-2 text-center text-2xl font-bold text-p1-darkgreen md:pt-2 md:text-3xl dark:text-p1-green dark:hover:text-p1-cyan">
        Способы получения RaceLads NFT
      </div>

      <div className="rounded-3xl border-p1-darkgreen p-2 md:border-4 md:shadow-lg dark:border-p1-green dark:text-p1-green dark:hover:border-p1-darkgreen dark:hover:text-p1-cyan">
        <div className="pb-5 text-center text-base text-p1-darkgreen md:text-2xl dark:text-p1-green dark:hover:text-p1-cyan">
          Любой желающий может получить своего персонажа (RaceLad) в период публичного минта или
          приобрести на вторичном рынке позднее
        </div>

        <div className="grid grid-cols-6 gap-1">
          <div className="col-span-1 col-start-1 row-span-3 place-self-start">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/Hero/h13.png"
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
              className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg dark:border-p1-green"
              width={1000}
              height={1000}
              src="/HeroNFT/RaceLads/RaceLads1.png"
              alt="RaceLads1"
            />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div>
            <Image
              className="relative -mt-40 inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg dark:border-p1-green"
              width={1000}
              height={1000}
              src="/HeroNFT/RaceLads/RaceLads3.png"
              alt="RaceLads3"
            />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div id="4"></div>

      <div className="pb-5"></div>
    </div>
  );
}
