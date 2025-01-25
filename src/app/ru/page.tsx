'use client';
import Image from 'next/image';
// import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useState } from 'react';
import { JumpButton } from '@/components/jumpButton';

export default function RussianPage() {
  const [value, setValue] = useState('0');
  const jumpPoints = ['1', '2', '3'];
  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      <section className="flex flex-wrap object-center px-2 md:flex-nowrap md:space-x-2 md:pt-5">
        <div className="border-p2-orange bg-p1-white dark:bg-p1-deepdarkgreen w-full rounded-3xl shadow-lg md:mb-4 md:min-w-96 md:border-4">
          <div className="flex flex-row">
            <div className="mx-auto text-center md:p-2 md:text-xl lg:text-2xl">
              <div className="text-p1-darkgreen dark:text-p2-orange pt-2">
                Генеративная коллекция
              </div>
              <div id="1" className="text-p1-darkgreen dark:text-p2-orange pb-2">
                RaceLads NFT
              </div>
              <div className="md:p-4">
                <Image
                  className="object-centre border-p2-orange relative mb-4 inline-block w-3/5 rounded-3xl border-2 shadow-lg md:w-full"
                  width={700}
                  height={700}
                  src="/HeroNFT/RaceLads/RaceLads1.png"
                  alt="RaceLads1"
                />
              </div>
              <div className="accent-amber-600 md:my-5">
                <label
                  htmlFor="default-range"
                  className="dark:text-p2-orange mb-2 block text-2xl font-medium text-gray-900"
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
                  className="border-p2-orange bg-p1-white text-p1-darkgreen hover:bg-p2-orange hover:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p2-orange inline-block rounded-xl border-2 px-10 py-8 shadow-lg transition-all delay-75 duration-300 ease-in-out dark:hover:bg-amber-600 dark:hover:text-amber-100"
                >
                  Создай NFT
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          id="2"
          className="border-p1-darkgreen bg-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen mb-4 rounded-3xl shadow-lg md:border-4"
        >
          <div className="text-centre flex flex-row">
            <div className="text-p1-darkgreen dark:text-p1-green place-content-center p-2 text-center md:text-xl lg:text-2xl">
              <div className="pt-2">Сервис</div>
              <div className="pb-5">создания NFT наград на сайте</div>
              <Link
                href="/applicationform"
                className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-darkgreen hover:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan inline-block place-content-center rounded-xl border-2 px-10 py-8 shadow-lg transition-all delay-75 duration-300 ease-in-out"
              >
                Форма заявки
              </Link>
              <div className="place-items-centre mt-5 grid grid-cols-3 gap-2 p-4">
                <Image width={1000} height={1200} src="/Licenses/Promoter.png" alt="Promoter" />

                <Image width={1000} height={1200} src="/Licenses/National.png" alt="National" />

                <Image width={1000} height={1200} src="/Licenses/Global.png" alt="Global" />

                <div className="text-p1-darkgreen dark:text-p1-green pt-2 text-center text-sm lg:text-xl">
                  Все награды в единой коллекции
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green pt-2 text-center text-sm lg:text-xl">
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
