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
          RaceLads NFT
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
                Невзаимозаменяемый токен, представляющий коллекцию из 10.000
                уникальных цифровых героев, вдохновленных любовью к автомобилям
                и запечатленных в Blockchain.
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Коллекция, призванная внести свой вклад в развитие и
                популяризацию автокультуры и автоспорта.
              </p>
              <div className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Приобретая героя из коллекции ты становишься членом большого
                дружного сообщества!
                <ul className="list-disc p-5 text-xl text-p1-darkgreen">
                  <li className="pb-2">
                    посещай автоспортивные мероприятия, выставки, лекции,
                    вечеринки
                  </li>
                  <li className="pb-2">
                    участвуй в виртуальных гонках и других захватывающих онлайн
                    событиях
                  </li>
                  <li className="pb-2">
                    принимай участие в ключевых голосованиях, определяющих
                    развитие сообщества
                  </li>
                </ul>
              </div>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Данная коллекция будет доступна только для держателей NFT из
                коллекции RaceLads.
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                10 уровней доступа к редким элементам определяется наличием
                соответствующего количества NFT из коллекции RaceLads
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Любой CustomLad по желанию держателя может быть передан/продан
                любому участнику сообщества.
              </p>
            </div>

            <div className="grid grid-cols-2 place-items-start justify-center gap-4 p-5">
              <div className="justify-self-end">
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={4000}
                  height={4000}
                  src="/HeroNFT/RaceLads/RaceLads1.png"
                  alt="RaceLads1"
                />
              </div>
              <div className="justify-self-end">
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={4000}
                  height={4000}
                  src="/HeroNFT/RaceLads/RaceLads2.png"
                  alt="RaceLads2"
                />
              </div>
              <div className="justify-self-end">
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={4000}
                  height={4000}
                  src="/HeroNFT/RaceLads/RaceLads3.png"
                  alt="RaceLads3"
                />
              </div>
              <div className="justify-self-end">
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={4000}
                  height={4000}
                  src="/HeroNFT/RaceLads/RaceLads4.png"
                  alt="RaceLads4"
                />
              </div>

              <div className="col-span-2 col-start-1 row-span-1 m-1 place-self-center p-5">
                <div className="">
                  <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
                    Страница создания NFT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8"></div>

      <div className="pt-5 text-center text-4xl font-bold text-p1-darkgreen">
        Способы получения RaceLads NFT
      </div>

      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen p-6 shadow-lg">
        <div className="pb-5 text-center text-2xl text-p1-darkgreen">
          Любой желающий может получить своего персонажа (RaceLad) в период
          публичного минта или приобрести на вторичном рынке позднее
        </div>

        <div className="grid grid-cols-6 gap-1">
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
              src="/HeroNFT/RaceLads/RaceLads1.png"
              alt="RaceLads1"
            />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div>
            <Image
              className="relative -mt-40 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/RaceLads/RaceLads3.png"
              alt="RaceLads3"
            />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
