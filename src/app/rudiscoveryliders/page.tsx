"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [value, setValue] = useState("0");
  const [check, setCheck] = useState(false);

  return (
    <div className="font-serif">
      {/* //Лидеры движений */}
      {/* //Drivers */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          Drivers NFT
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
                Невзаимозаменяемый токен, отражающий пилота спортивного
                автомобиля.
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Каждый NFT содержит метаданные, хранящие информацию о гонщике
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                По согласованию мы можем полностью скопировать внешность персоны
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Мы очень ценим вклад пилотов в развитие автоспорта и хотели бы
                запечатлеть каждого в единой коллекции, будь то представитель
                кольцевых гонок или дисциплины дрифта
              </p>

              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Предполагается, что первоначальным владельцем NFT будет сам
                пилот. Позже по желанию владельца токен может быть
                передан/продан любому человеку.
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Это ваш способ привлечения инвестиций, за одну транзакцию вы
                сможете создать до 100 NFT, так мы планируем организовать
                поддержку пилотов и членов команд
              </p>
            </div>

            <div className="m-1 p-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Image
                    className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Drivers/Driver4.png"
                    alt="Driver4"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Drivers/Driver3.png"
                    alt="Driver3"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Drivers/Driver2.png"
                    alt="Driver2"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={150}
                    height={150}
                    src="/HeroNFT/Drivers/Driver1.png"
                    alt="Driver1"
                  />
                </div>
              </div>
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
          </div>
        </div>
      </div>
      {/* //Участники команд */}

      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          Team&apos;s Members NFT
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
                Невзаимозаменяемый токен, отражающий члена автоспортивной
                команды.
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Каждый NFT содержит метаданные, хранящие информацию о персоне
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                По согласованию мы можем полностью скопировать внешность персоны
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Участники автоспортивных команд вносят огромный вклад в развитие
                автоспорта, поэтому мы бы хотели запечатлеть каждого из них в
                единой коллекции.
              </p>

              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Предполагается, что первоначальным владельцем NFT будет сам член
                команды. Позже по желанию владельца токен может быть
                передан/продан любому человеку.
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Это ваш способ привлечения инвестиций, за одну транзакцию вы
                сможете создать до 100 NFT, так мы планируем организовать
                поддержку пилотов и членов команд
              </p>
            </div>

            <div className="m-1 p-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Image
                    className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Team's members/TeamMember1.png"
                    alt="TeamMember1"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Team's members/TeamMember2.png"
                    alt="TeamMember2"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Team's members/TeamMember3.png"
                    alt="TeamMember3"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={150}
                    height={150}
                    src="/HeroNFT/Team's members/TeamMember4.png"
                    alt="TeamMember4"
                  />
                </div>
              </div>
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
          </div>
        </div>
      </div>

      {/* //Коллекционеры */}

      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          Collectors NFT
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
                Невзаимозаменяемый токен, отражающий коллекционера спортивных,
                раритетных и редких автомобилей.
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Каждый NFT содержит метаданные, хранящие информацию о персоне
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                По согласованию мы можем полностью скопировать внешность персоны
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Мы очень ценим вклад коллекционеров в историю автокультуры и
                автоспорта и хотели бы запечатлеть историю каждого в единой
                коллекции
              </p>

              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Предполагается, что первоначальным владельцем NFT будет сам член
                команды. Позже по желанию владельца токен может быть
                передан/продан любому человеку.
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Это ваш способ привлечения инвестиций, за одну транзакцию вы
                сможете создать до 100 NFT, так мы планируем организовать
                поддержку коллекционеров и развитие направления
              </p>
            </div>

            <div className="m-1 p-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Image
                    className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Collectors/Collector1.png"
                    alt="Collector1"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Collectors/Collector2.png"
                    alt="Collector2"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Collectors/Collector3.png"
                    alt="Collector3"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={150}
                    height={150}
                    src="/HeroNFT/Collectors/Collector4.png"
                    alt="Collector4"
                  />
                </div>
              </div>
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
          </div>
        </div>
      </div>

      {/* //Лидеры движений */}

      <div className="pb-8"></div>

      <div className="pt-5 text-center text-4xl font-bold text-p1-darkgreen">
        Способы получения
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        Drivers, Team&apos;s Members, Collectors NFT
      </div>
      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen p-6 shadow-lg">
        <div className="pb-5 text-center text-xl">
          Только верифицированные пользователи смогут создать NFT в коллекциях
          Drivers, Team&apos;s Members, Collectors NFT
        </div>
        <div className="pb-5 text-center text-xl">
          Верифицировать статус пользователя могут держатели Promoter License,
          National License, Global License, Management GAA
        </div>

        <div className="grid grid-cols-8 gap-1">
          <div className="col-span-1 col-start-1 row-span-4 place-self-center">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/Hero/13.png"
              alt="13"
            />
          </div>
          <div></div>
          <div></div>
          <div></div>

          <div className="col-span-1 col-start-5 row-span-3 place-self-center">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/Licenses/Promoter.png"
              alt="Promoter"
            />
          </div>
          <div className="col-span-1 col-start-6 row-span-3 place-self-center">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/Licenses/National.png"
              alt="national"
            />
          </div>
          <div className="col-span-1 col-start-7 row-span-3 place-self-center">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/Licenses/Global.png"
              alt="global"
            />
          </div>
          <div className="col-span-1 col-start-8 row-span-3 place-self-center">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/Licenses/Management.png"
              alt="Management"
            />
          </div>
          <div className="place-self-end">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/arrows/11.png"
              alt="11"
            />
          </div>
          <div className="relative place-self-center">
            <div>
              <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-2 py-5 text-sm text-p1-darkgreen shadow-sm shadow-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white">
                Форма подачи заявки
              </button>
            </div>
          </div>
          <div className="place-self-center">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/arrows/2.png"
              alt="2"
            />
          </div>

          <div className="col-start-15 col-span-3 row-span-1">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/arrows/3.png"
              alt="3"
            />
          </div>
          <div className="place-self-center">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/arrows/4.png"
              alt="4"
            />
          </div>
          <div>
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
              src="/arrows/5.png"
              alt="5"
            />
          </div>
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

          <div></div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="p-5 text-center text-xl">
          Любой желающий сможет приобрести NFT из коллекций на вторичном рынке,
          так мы поддерживаем активных участников направлений и их развитие
        </div>
        <div className="p-5 text-center text-xl">
          Это ваш способ идентификации и привлечения дополнительных инвестиций
          для вашего развития
        </div>
      </div>
    </div>
  );
}
