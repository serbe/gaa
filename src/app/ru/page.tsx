'use client';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useState } from 'react';
import { JumpButton } from '@/components/jumpButton';
import { useFavicon } from '@/utils/hooks';

export default function RussianPage() {
  const [value, setValue] = useState('0');
  const jumpPoints = ['1', '2', '3'];

  useFavicon('/Logo/GAA_Logo_1.png ');

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      <section className="flex flex-wrap object-center px-2 md:flex-nowrap md:space-x-2 md:pt-5">
        <div className="w-full rounded-3xl border-p2-orange bg-p1-white shadow-lg md:mb-4 md:min-w-96 md:border-4 dark:bg-p1-deepdarkgreen">
          <div className="flex flex-row">
            <div className="mx-auto text-center md:p-2 md:text-xl lg:text-2xl">
              <div className="pt-2 text-p1-darkgreen dark:text-p2-orange">
                Генеративная коллекция
              </div>
              <div id="1" className="pb-2 text-p1-darkgreen dark:text-p2-orange">
                RaceLads NFT
              </div>
              <div className="md:p-4">
                <Image
                  className="relative mb-4 inline-block w-3/5 rounded-3xl border-2 border-p2-orange object-center shadow-lg md:w-full"
                  width={700}
                  height={700}
                  src="/HeroNFT/RaceLads/RaceLads1.png"
                  alt="RaceLads1"
                />
              </div>
              <div className="accent-amber-600 md:my-5">
                <label
                  htmlFor="default-range"
                  className="mb-2 block text-2xl font-medium text-gray-900 dark:text-p2-orange"
                >
                  {value}
                </label>
                <input
                  id="default-range"
                  type="range"
                  min="1"
                  max="10"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                />
              </div>
              <div className="my-5">
                <Link
                  href="/mintracelads"
                  className="inline-block rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p2-orange dark:hover:bg-amber-600 dark:hover:text-amber-100"
                >
                  Создай NFT
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          id="2"
          className="mb-4 rounded-3xl border-p1-darkgreen bg-p1-white shadow-lg md:border-4 dark:border-p1-green dark:bg-p1-deepdarkgreen"
        >
          <div className="flex flex-row text-center">
            <div className="place-content-center p-2 text-center text-p1-darkgreen md:text-xl lg:text-2xl dark:text-p1-green">
              <div className="pt-2">Сервис</div>
              <div className="pb-5">создания NFT наград</div>
              <Link
                href="/applicationform"
                className="inline-block place-content-center rounded-xl border-2 border-p1-green bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-darkgreen hover:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
              >
                Подать заявку на получение лицензии
              </Link>
              <div className="mt-5 grid grid-cols-3 place-items-center gap-2 p-4">
                <Image width={1000} height={1200} src="/Licenses/Promoter.png" alt="Promoter" />

                <Image width={1000} height={1200} src="/Licenses/Local.png" alt="Local" />

                <Image width={1000} height={1200} src="/Licenses/Global.png" alt="Global" />

                <div className="pt-2 text-center text-sm text-p1-darkgreen lg:text-xl dark:text-p1-green">
                  Все награды в единой коллекции
                </div>
                <div className="pt-2 text-center text-sm text-p1-darkgreen lg:text-xl dark:text-p1-green">
                  Безопасное хранение медиаконтента в IPFS сети
                </div>
                <Image
                  width={1000}
                  height={1200}
                  src="/RewardsSite/DriftRewardSite.png"
                  alt="Drift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="3"></div>
    </div>
  );
}
