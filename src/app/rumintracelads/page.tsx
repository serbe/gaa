'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [value, setValue] = useState('1');

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <div className="flex flex-wrap justify-between space-x-2 object-center px-2 pt-5 md:flex-nowrap">
        <div className="p-2 text-center text-4xl font-semibold text-p2-orange">RaceLads NFT</div>
        <div className="p-2 text-center text-4xl font-semibold text-p2-orange">
          Страница создания NFT
        </div>
      </div>
      <div className="flex flex-wrap justify-center space-x-2 px-2 pt-5 md:flex-nowrap">
        <div className="m-5 h-max rounded-3xl border-4 border-p2-orange hover:shadow-lg">
          <div>
            <p className="px-2 text-center text-2xl text-p1-darkgreen">Присоединяйтесь к нам</p>
            <p className="px-2 pb-5 text-center text-2xl text-p1-darkgreen">
              Получите своего героя RaceLad
            </p>
            <Image
              className="mb-4 flex w-3/5 place-self-center rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/RaceLads/RaceLads1.png"
              alt="RaceLads1"
            />

            <div className="w-full place-items-center">
              <label
                htmlFor="default-range"
                className="mb-2 block text-xl font-medium text-gray-900 dark:text-white"
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

            <p className="p-8 text-center text-2xl text-p1-darkgreen">
              Максимальное количество: 10 RaceLads за транзакцию
            </p>
            <div className="place-self-center">
              <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-20 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
                Создать NFT
              </button>
            </div>
            <div className="pb-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
