'use client';
import Image from 'next/image';
import { useState } from 'react';
import { JumpButton } from '@/components/jumpButton';

export default function Page() {
  const [value, setValue] = useState('1');
  const jumpPoints = ['1', '2'];

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />
      <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
        <div className="text-p2-orange px-5 text-xl font-bold md:pt-2 md:text-4xl dark:text-amber-600">
          RaceLads NFT
        </div>
        <div className="text-p2-orange px-5 text-right text-xl font-bold md:pt-2 md:text-4xl dark:text-amber-600">
          Страница создания NFT
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:flex-nowrap">
        <div className="border-p2-orange h-max rounded-3xl md:w-3/5 md:border-4 md:hover:shadow-lg dark:border-amber-600">
          <div>
            <p className="text-p1-darkgreen dark:text-p1-green px-2 text-center text-base md:text-2xl">
              Присоединяйтесь к нам
            </p>
            <p className="text-p1-darkgreen dark:text-p1-green px-2 pb-2 text-center text-base md:text-2xl">
              Получите своего героя RaceLad
            </p>
            <Image
              className="border-p2-orange mb-4 flex w-4/5 place-self-center rounded-3xl border-2 md:w-2/5 md:shadow-lg dark:border-amber-600"
              width={1000}
              height={1000}
              src="/HeroNFT/RaceLads/RaceLads1.png"
              alt="RaceLads1"
            />

            <div className="w-2/5 place-self-center text-center accent-amber-600 md:my-2">
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

            <p className="text-p1-darkgreen dark:text-p1-green text-center text-base md:text-xl">
              Максимальное количество:
            </p>
            <p className="text-p1-darkgreen dark:text-p1-green pb-2 text-center text-base md:pb-2 md:text-xl">
              10 RaceLads за транзакцию
            </p>
            <div className="place-self-center">
              <button className="border-p2-orange bg-p1-white text-p1-darkgreen hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p2-orange inline-block w-full rounded-xl border-2 px-10 py-8 shadow-lg transition-all delay-75 duration-300 ease-in-out dark:hover:bg-amber-600 dark:hover:text-amber-100">
                Создать NFT
              </button>
            </div>
            <div id="1" className="pb-2 md:pb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
