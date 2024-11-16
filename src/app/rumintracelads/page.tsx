'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [value, setValue] = useState('1');

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
        <div className="px-5 text-xl font-bold text-p2-orange md:pt-2 md:text-4xl">
          RaceLads NFT
        </div>
        <div className="px-5 text-right text-xl font-bold text-p2-orange md:pt-2 md:text-4xl">
          Страница создания NFT
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:flex-nowrap">
        <div className="h-max rounded-3xl border-p2-orange md:w-3/5 md:border-4 md:hover:shadow-lg">
          <div>
            <p className="px-2 text-center text-base text-p1-darkgreen md:text-2xl">
              Присоединяйтесь к нам
            </p>
            <p className="px-2 pb-2 text-center text-base text-p1-darkgreen md:text-2xl">
              Получите своего героя RaceLad
            </p>
            <Image
              className="mb-4 flex w-4/5 place-self-center rounded-3xl border-2 border-p2-orange md:w-2/3 md:shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/RaceLads/RaceLads1.png"
              alt="RaceLads1"
            />

            <div className="w-full place-items-center">
              <label
                htmlFor="default-range"
                className="block text-xl font-medium text-gray-900 dark:text-white"
              >
                {value}
              </label>
              <input
                id="default-range"
                type="range"
                min="1"
                max="10"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-2 cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
              />
            </div>

            <p className="pt-4 text-center text-base text-p1-darkgreen md:text-2xl">
              Максимальное количество:
            </p>
            <p className="pb-4 text-center text-base text-p1-darkgreen md:pb-8 md:text-2xl">
              10 RaceLads за транзакцию
            </p>
            <div className="place-self-center">
              <button className="rounded-xl border-2 border-p2-orange bg-p2-white2 px-5 py-4 text-p1-darkgreen hover:bg-p2-orange hover:text-p1-white md:rounded-3xl md:px-20 md:py-8 md:shadow-lg">
                Создать NFT
              </button>
            </div>
            <div className="pb-2 md:pb-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
