'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [check, setCheck] = useState(false);

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <p>WALLET</p>
      <Link href="/parallax">Пример параллакса из видео</Link>
      <section className="flex flex-wrap object-center px-2 md:flex-nowrap md:space-x-2 md:pt-5">
        <div className="w-full rounded-3xl border-p2-orange bg-p1-white shadow-lg md:mb-4 md:min-w-96 md:border-4">
          <div className="flex flex-row">
            <div className="mx-auto text-center md:p-8 md:text-xl lg:text-2xl">
              <div className="pt-2 text-p1-darkgreen">Wallet</div>

              <Image
                className="object-centre relative mb-4 inline-block w-3/5 rounded-3xl border-2 border-p2-orange shadow-lg md:w-full"
                width={700}
                height={700}
                src="/HeroNFT/RaceLads/RaceLads1.png"
                alt="RaceLads1"
              />

              <div className="my-5">
                <label className="inline-flex cursor-pointer items-center">
                  <input type="checkbox" value="" className="peer sr-only" />
                  <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Toggle me
                  </span>
                </label>
              </div>

              <div className="flex items-center accent-pink-500">
                <input
                  checked={check}
                  id="checkbox"
                  onChange={() => setCheck(!check)}
                  type="checkbox"
                  value=""
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="checkbox"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Check me
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
