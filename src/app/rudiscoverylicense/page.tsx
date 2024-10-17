"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [value, setValue] = useState("0");
  const [check, setCheck] = useState(false);

  return (
    <div className="font-serif">
      {/* //Promoter License */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          Promoter License NFT
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
                Promoter License NFT невзаимозаменяемый токен, предоставляется
                Промоутеру (Организатору) мероприятия.
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Promoter License NFT предоставляет доступ к странице создания
                NFT Наград
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Промоутер создает и вручает NFT награды победителям
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Для получения Promoter License NFT необходимо зарегистрироваться
                и заполнить заявку для рассмотрения
              </p>

              <div className="my-2 justify-self-center">
                <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p1-green hover:text-p1-white">
                  Регистрационная форма заявки
                </button>
              </div>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                При положительном решении Промоутеру (Организатору)
                предоставляется возможность создания Promoter License NFT.
              </p>
            </div>
            <div className="justify-self-end">
              <Image
                className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                width={4000}
                height={4000}
                src="/Licenses/Promoter Lic.png"
                alt="PromoterLic"
              />
              <div
                className="inline-flex w-full justify-self-center rounded-md pt-5 shadow-sm"
                role="group"
              >
                <Link
                  href={{
                    pathname: "/rudiscoverylicense",
                    query: { license: "promouter" },
                  }}
                  className="w-full rounded-l-2xl border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-yellow-800 focus:text-p1-white focus:ring-2 focus:ring-yellow-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p1-green"
                >
                  Promouter License
                </Link>
                <Link
                  href={{
                    pathname: "/rudiscoverylicense",
                    query: { license: "national" },
                  }}
                  className="w-full border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-stone-500 focus:text-p1-white focus:ring-2 focus:ring-stone-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-stone-500"
                >
                  National License
                </Link>
                <Link
                  href={{
                    pathname: "/rudiscoverylicense",
                    query: { license: "global" },
                  }}
                  className="w-full rounded-r-2xl border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
                >
                  Global License
                </Link>
              </div>{" "}
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
                случае нарушения держателем Promoter License NFT правил создания
                NFT не соответствующих целям Проекта.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* //National License */}

      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          National License NFT
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
                National License NFT невзаимозаменяемый токен, предоставляется
                лидерам направлений
              </p>
              <div className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                National License NFT предоставляет доступ
                <ul className="list-disc px-5">
                  <li>к странице создания NFT Наград</li>
                  <li> к странице создания Promoter License NFT</li>
                  <li>
                    {" "}
                    к голосованию по вопросам развития сообщества на локальном
                    уровне
                  </li>
                </ul>
              </div>

              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                National License NFT решает вопросы связанные с организацией и
                проведением награждения конкурсантов и спортсменов мероприятий,
                а именно решает кто будет создавать NFT и кто будет награждать
                конкурсантов и спортсменов, подтверждает статус организатора,
                лидера направления, пилота, участника команды в своей
                компетенции.{" "}
              </p>

              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Для получения National License NFT необходимо зарегистрироваться
                и заполнить заявку для рассмотрения
              </p>

              <div className="my-2 justify-self-center">
                <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p1-green hover:text-p1-white">
                  Регистрационная форма заявки
                </button>
              </div>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                При положительном решении лидеру направления предоставляется
                возможность создания National License NFT.
              </p>
            </div>
            <div className="justify-self-end">
              <Image
                className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                width={4000}
                height={4000}
                src="/Licenses/National Lic.png"
                alt="NationalLic"
              />
              <div
                className="inline-flex w-full justify-self-center rounded-md pt-5 shadow-sm"
                role="group"
              >
                <Link
                  href={{
                    pathname: "/rudiscoverylicense",
                    query: { license: "promouter" },
                  }}
                  className="w-full rounded-l-2xl border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-yellow-800 focus:text-p1-white focus:ring-2 focus:ring-yellow-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p1-green"
                >
                  Promouter License
                </Link>
                <Link
                  href={{
                    pathname: "/rudiscoverylicense",
                    query: { license: "national" },
                  }}
                  className="w-full border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-stone-500 focus:text-p1-white focus:ring-2 focus:ring-stone-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-stone-500"
                >
                  National License
                </Link>
                <Link
                  href={{
                    pathname: "/rudiscoverylicense",
                    query: { license: "global" },
                  }}
                  className="w-full rounded-r-2xl border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
                >
                  Global License
                </Link>
              </div>{" "}
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
                случае нарушения держателем National License NFT правил создания
                NFT не соответствующих целям Проекта.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* //Global License */}

      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          Global License NFT
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
                Global License NFT невзаимозаменяемый токен, предоставляется
                лидерам направлений и организаторам мероприятий международного
                уровня
              </p>
              <div className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Global License NFT предоставляет доступ:
                <ul className="list-disc px-5">
                  <li>к странице создания NFT Наград</li>
                  <li> к странице создания Promoter License NFT</li>
                  <li> к странице создания National License NFT</li>
                  <li>
                    {" "}
                    к голосованию по вопросам развития сообщества на локальном
                    уровне
                  </li>
                  <li>
                    {" "}
                    к голосованию по вопросам развития сообщества на
                    международном уровне
                  </li>
                </ul>
              </div>

              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Global License NFT решает вопросы связанные с организацией и
                проведением награждения конкурсантов и спортсменов мероприятий,
                определяет кто будет развивать направления, а именно решает кто
                будет создавать NFT и кто будет награждать конкурсантов и
                спортсменов, подтверждает статус организатора, лидера
                направления, пилота, участника команды в своей компетенции.{" "}
              </p>

              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Для получения Global License NFT необходимо зарегистрироваться и
                заполнить заявку для рассмотрения
              </p>

              <div className="my-2 justify-self-center">
                <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p1-green hover:text-p1-white">
                  Регистрационная форма заявки
                </button>
              </div>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                При положительном решении лидеру направления предоставляется
                возможность создания Global License NFT.
              </p>
            </div>
            <div className="justify-self-end">
              <Image
                className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                width={4000}
                height={4000}
                src="/Licenses/Global Lic.png"
                alt="GlobalLic"
              />
              <div
                className="inline-flex w-full justify-self-center rounded-md pt-5 shadow-sm"
                role="group"
              >
                <Link
                  href={{
                    pathname: "/rudiscoverylicense",
                    query: { license: "promouter" },
                  }}
                  className="w-full rounded-l-2xl border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-yellow-800 focus:text-p1-white focus:ring-2 focus:ring-yellow-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p1-green"
                >
                  Promouter License
                </Link>
                <Link
                  href={{
                    pathname: "/rudiscoverylicense",
                    query: { license: "national" },
                  }}
                  className="w-full border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-stone-500 focus:text-p1-white focus:ring-2 focus:ring-stone-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-stone-500"
                >
                  National License
                </Link>
                <Link
                  href={{
                    pathname: "/rudiscoverylicense",
                    query: { license: "global" },
                  }}
                  className="w-full rounded-r-2xl border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
                >
                  Global License
                </Link>
              </div>{" "}
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
                случае нарушения держателем Global License NFT правил создания
                NFT не соответствующих целям Проекта.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8"></div>

      <div className="pt-5 text-center text-4xl font-bold text-p1-darkgreen">
        Способы получения
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        Promoter, National, Global Licenses NFT
      </div>
      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen p-6 shadow-lg">
        <div className="pb-5 text-center text-xl">
          Management GAA и держатели Global License организуют обшее развитие и
          управление GAA
        </div>
        <div className="pb-5 text-center text-xl">
          Management GAA проводит верификацию и удостоверяет статус National
          License, Promoter License Global License
        </div>

        <div className="grid grid-cols-7 gap-1">
          <div className="col-span-1 col-start-1 row-span-4 place-self-center">
            {" "}
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
              src="/Licenses/Management.png"
              alt="Management"
            />
          </div>
          <div></div>
          <div></div>
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
          <div></div>
          <div></div>

          <div className="col-start-14 col-span-3 row-span-1">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/arrows/3.png"
              alt="3"
            />
          </div>
          <div></div>
          <div></div>

          <div>
            {" "}
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
          <div>
            {" "}
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/arrows/5.png"
              alt="5"
            />
          </div>
          <div>
            {" "}
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/Licenses/Promoter.png"
              alt="Promoter"
            />
          </div>
          <div>
            {" "}
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/Licenses/National.png"
              alt="national"
            />
          </div>
          <div>
            {" "}
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/Licenses/Global.png"
              alt="global"
            />
          </div>
        </div>

        <div className="p-5 text-center text-xl">
          Вектор развития направления решает Management GAA, Global License,
          National License
        </div>
        <div className="p-5 text-center text-xl">
          Promoter License организует локальные мероприятия по разным
          направления
        </div>
        <div className="p-5 text-center text-xl">
          National License организует развитие направлений на локальном уровне
        </div>
      </div>
    </div>
  );
}
