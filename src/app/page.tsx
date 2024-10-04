"use client";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState("0");
  const [check, setCheck] = useState(false);

  return (
    <div className="w-full">
      <section className="flex flex-wrap md:flex-nowrap h-4/5 space-x-2 object-center px-2 pt-5">
        <div className="mb-4 w-full md:w-2/5 overflow-hidden rounded-3xl border-4 border-p2-orange bg-p1-white shadow-lg">
          <div className="flex flex-row">
            <div className="mx-auto p-8 text-center md:text-xl lg:text-2xl">
              <div className="pt-2 text-p1-darkgreen">
                Генеративная коллекция
              </div>
              <div className="pb-2 text-p1-darkgreen">RaceLads NFT</div>

              <Image
                className="object-centre relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                width={1000}
                height={1000}
                src="/HeroNFT/RaceLads/RaceLads1.png"
                alt="RaceLads1"
              />
              <div className="my-5">
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
                  max="10000"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                />
              </div>
              <div className="my-5">
                <button className="rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
                  Создай NFT
                </button>
              </div>
              <div className="my-5">
                <label className="inline-flex cursor-pointer items-center">
                  <input type="checkbox" value="" className="peer sr-only" />
                  <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Toggle me
                  </span>
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked={check}
                  id="checkbox"
                  onChange={() => setCheck(!check)}
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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

        <div className="mb-4 md:w-3/5 overflow-hidden rounded-3xl border-4 border-p1-darkgreen bg-p1-white shadow-lg">
          <div className="text-centre flex flex-row">
            <div className="place-content-center p-8 text-center md:text-xl lg:text-2xl text-p1-darkgreen">
              <div className="pt-2">Сервис</div>
              <div className="pb-5">создания NFT наград на сайте</div>

              <button className="rounded-xl border-2 border-p1-darkgreen bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white">
                Форма подачи заявки
              </button>

              <div className="place-items-centre mt-5 grid grid-cols-3 gap-2 p-4">
                <Image
                  width={1000}
                  height={1200}
                  src="/Licenses/Promoter.png"
                  alt="Promoter"
                />

                <Image
                  width={1000}
                  height={1200}
                  src="/Licenses/National.png"
                  alt="National"
                />

                <Image
                  width={1000}
                  height={1200}
                  src="/Licenses/Global.png"
                  alt="Global"
                />

                <div className="pt-2 text-center text-sm lg:text-xl text-p1-darkgreen">
                  Все награды в единой коллекции
                </div>
                <div className="pt-2 text-center text-sm lg:text-xl text-p1-darkgreen">
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
    </div>
  );
}
