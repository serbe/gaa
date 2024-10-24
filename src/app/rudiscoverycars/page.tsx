"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [value, setValue] = useState("0");
  const [check, setCheck] = useState(false);

  return (
    <div className="font-serif">
      {/* //Cars*/}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          Cars NFT
        </div>
        <div className="p-2 text-end text-4xl font-semibold text-p1-darkgreen">
          Страница исследователя
        </div>
      </div>
      <div className="flex">
        <div className="m-5 rounded-3xl border-4 border-p1-darkgreen shadow-lg hover:border-p1-green">
          <div className="grid grid-cols-2 place-items-start justify-center gap-4 p-5">
            <div className="grid">
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Невзаимозаменяемый токен, отражающий реальный коллекционный,
                спортивный, кастомизированный или раритетный автомобиль из
                национальной, корпоративной или частной коллекции
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Каждый NFT содержит метаданные, хранящие информацию о
                коллекционном экземпляре, его описание и характеристики
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                При создании NFT есть возможность добавить медиаконтент.
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Для получения Car NFT необходимо владеть хотябы одной NFT из
                коллекций Drivers, Team&apos;s Members, Collectors NFT
              </p>
            </div>
            <div className="justify-self-end">
              <Image
                className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                width={4000}
                height={4000}
                src="/Cars/Car.png"
                alt="Car"
              />
              <div
                className="inline-flex w-full justify-self-center rounded-md pt-5 shadow-sm"
                role="group"
              >
                <Link
                  href={{
                    pathname: "/rudiscoveryliders",
                    query: { liders: "drivers" },
                  }}
                  className="w-full rounded-l-2xl border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-red-500 focus:text-p1-white focus:ring-2 focus:ring-red-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p1-green"
                >
                  Drivers
                </Link>
                <Link
                  href={{
                    pathname: "/rudiscoveryliders",
                    query: { liders: "Team&apos;s Members" },
                  }}
                  className="w-full border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-sky-600 focus:text-p1-white focus:ring-2 focus:ring-sky-600 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-stone-500"
                >
                  Team&apos;s Members
                </Link>
                <Link
                  href={{
                    pathname: "/rudiscoveryliders",
                    query: { liders: "collectors" },
                  }}
                  className="w-full border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-stone-500 focus:text-p1-white focus:ring-2 focus:ring-stone-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-stone-500"
                >
                  Collectors
                </Link>
                <Link
                  href={{
                    pathname: "/rudiscoverycars",
                    query: { liders: "cars" },
                  }}
                  className="w-full rounded-r-2xl border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
                >
                  Cars
                </Link>
              </div>
              <div className="m-1 p-5">
                <div className="justify-self-center">
                  <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
                    Страница создания NFT
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className="rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Данный токен Burnebal, то есть собственник смарт-контракта может
                уничтожить любой токен из коллекции, эта мера необходима для
                формирования чистоты коллекции.
              </p>
            </div>
            <div>
              <p className="rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                То есть собственник смарт-контракта вправе уничтожить NFT в
                случае нарушения держателем Drivers, Team&apos;s Members,
                Collectors NFT правил создания NFT не соответствующих целям
                Проекта.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8"></div>

      <div className="pt-5 text-center text-4xl font-bold text-p1-darkgreen">
        Способы получения Car NFT
      </div>

      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen p-6 shadow-lg">
        <div className="pb-5 text-center text-2xl text-p1-darkgreen">
          Только владельцы NFT коллекций Drivers, Team&apos;s members,
          Collectors смогут оцифровать свои автомобили и создать Car NFT
        </div>

        <div className="grid grid-cols-5 gap-1">
          <div className="col-span-1 col-start-1 row-span-3 place-self-start">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/Hero/13.png"
              alt="13"
            />
          </div>
          <div className="place-self-center">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/arrows/1.png"
              alt="1"
            />
          </div>
          <div className="place-self-end">
            <button className="hover:drop-shadow-2xl">
              <Image
                className="relative inline-block w-max overflow-hidden"
                width={1000}
                height={1000}
                src="/Logo/MetaMask.png"
                alt="Metamask"
              />
            </button>
          </div>
          <div className="place-self-center">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/arrows/22.png"
              alt="22"
            />
          </div>
          <div className="place-self-end">
            <Image
              className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/Cars/car.png"
              alt="car"
            />
          </div>
          <div></div>
          <div className="text-centre relative place-self-center text-3xl font-bold text-p1-darkgreen">
            +
          </div>
          <div></div>
          <div></div>
          <div>
            <Image
              className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/Drivers/Driver4.png"
              alt="Driver4"
            />
          </div>
          <div>
            <Image
              className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/Team's members/TeamMember1.png"
              alt="TeamMember1"
            />
          </div>
          <div>
            <Image
              className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/Collectors/Collector1.png"
              alt="Collector1"
            />
          </div>
          <div></div>
          <div></div>
        </div>

        <div className="pt-5 text-center text-xl">
          Так мы планируем обеспечить прозрачность процесса.
        </div>
        <div className="text-center text-xl">и чистоту коллекции</div>
      </div>
    </div>
  );
}
