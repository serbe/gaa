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
        <div className="px-5 text-xl font-bold text-p2-orange md:pt-2 md:text-4xl dark:text-amber-600">
          RaceLads NFT
        </div>
        <div className="px-5 text-right text-xl font-bold text-p2-orange md:pt-2 md:text-4xl dark:text-amber-600">
          NFT creation page
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:flex-nowrap">
        <div className="h-max rounded-3xl border-p2-orange md:w-3/5 md:border-4 md:hover:shadow-lg dark:border-amber-600">
          <div>
            <p className="px-2 text-center text-base text-p1-darkgreen md:text-2xl dark:text-p1-green">
              Join us
            </p>
            <p className="px-2 pb-2 text-center text-base text-p1-darkgreen md:text-2xl dark:text-p1-green">
              Get your RaceLad hero
            </p>
            <Image
              className="mb-4 flex w-4/5 place-self-center rounded-3xl border-2 border-p2-orange md:w-2/5 md:shadow-lg dark:border-amber-600"
              width={1000}
              height={1000}
              src="/HeroNFT/RaceLads/RaceLads1.png"
              alt="RaceLads1"
            />

            <div className="w-2/5 place-self-center text-center accent-amber-600 md:my-2">
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

            <p className="text-center text-base text-p1-darkgreen md:text-xl dark:text-p1-green">
              Maximum quantity:
            </p>
            <p className="pb-2 text-center text-base text-p1-darkgreen md:pb-2 md:text-xl dark:text-p1-green">
              10 RaceLads per transaction
            </p>
            <div className="place-self-center">
              <button className="inline-block w-full rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p2-orange dark:hover:bg-amber-600 dark:hover:text-amber-100">
                Mint NFT
              </button>
            </div>
            <div id="1" className="pb-2 md:pb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
