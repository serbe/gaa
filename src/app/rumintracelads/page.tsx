'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [value, setValue] = useState('0');

  return (
    <div className="font-serif">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p2-orange">RaceLads NFT</div>
        <div className="p-2 text-end text-4xl font-semibold text-p2-orange">
          Страница создания NFT
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 col-start-2 w-full rounded-3xl border-4 border-p2-orange text-center text-p1-darkgreen shadow-lg">
          <div>
            <p className="text-2xl text-p1-darkgreen">Присоединяйтесь к нам</p>
            <p className="text-2xl text-p1-darkgreen">Получите своего героя RaceLad</p>
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/RaceLads/RaceLads1.png"
              alt="RaceLads1"
            />

            <div>
              <label
                htmlFor="default-range"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {value}
              </label>
              <input
                id="default-range"
                type="range"
                min="0"
                max="10"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-2 w-3/5 cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
              />
            </div>

            <p className="pb-8 pt-8 text-2xl text-p1-darkgreen">
              Максимальное количество: 10 RaceLads за транзакцию
            </p>

            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-48 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создать NFT
            </button>
            <div className="pb-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
