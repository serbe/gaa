'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { JumpButton } from '@/components/jumpButton';
import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

export default function Home() {
  const [value, setValue] = useState('0');
  const jumpPoints = ['1', '2', '3'];
  return (
    <div className="mx-auto max-w-full font-serif">
      <JumpButton points={jumpPoints} />

      <section className="flex flex-wrap object-left px-2 md:flex-nowrap md:space-x-2 md:pt-5">
        <div className="rounded-3xl border-p2-orange bg-p1-white shadow-lg md:mb-4 md:w-10 md:min-w-56 md:border-4 dark:bg-p1-deepdarkgreen">
          <div className="flex flex-row">
            <div id="1" className="mx-auto text-left md:pt-2 md:text-xl lg:text-2xl">
              <img
                className="h-10 w-10 rounded-full p-1 ring-2 ring-p1-green dark:ring-p1-darkgreen"
                src="/HeroNFT/RaceLads/RaceLads1.png"
                alt="Bordered avatar"
              />
            </div>
          </div>
        </div>
        <div>
          <Image
            className="relative inline-block w-full rounded-3xl border-2 border-p1-green shadow-lg"
            width={1000}
            height={1000}
            src="/HeroNFT/Team's members/TeamMember4.png"
            alt="TeamMember4"
          />
        </div>
        <div
          id="2"
          className="mb-4 justify-center rounded-3xl border-p1-darkgreen bg-p1-white shadow-lg md:border-4 dark:border-p1-green dark:bg-p1-deepdarkgreen"
        >
          <div className="mx-auto flex justify-end space-x-4 md:p-2 md:text-xl lg:text-2xl">
            <div>
              <a
                href="#"
                className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                Все NFT
              </a>
            </div>
            <div className="space-x-2">
              <a
                href="#"
                className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                Мои NFT
              </a>
            </div>
            <div>
              <img
                className="h-10 w-10 rounded-full p-1 ring-2 ring-p1-green dark:ring-p1-darkgreen"
                src="/HeroNFT/RaceLads/RaceLads1.png"
                alt="Bordered avatar"
              />
            </div>
          </div>

          <div className="text-centre flex flex-row p-2">
            <div>
              <Image
                className="relative inline-block w-full rounded-3xl border-2 border-p1-green shadow-lg"
                width={1000}
                height={1000}
                src="/HeroNFT/Team's members/TeamMember4.png"
                alt="TeamMember4"
              />
            </div>{' '}
            <div className="place-content-centertext-center text-p1-darkgreen md:text-xl lg:text-2xl dark:text-p1-cyan">
              <div className="rounded-3xl border-2 bg-p2-white2 p-2 text-p1-darkgreen dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                <div className="px-2 text-xl font-semibold md:text-3xl">
                  <div className="pt-2 text-left">Название коллекции</div>

                  <div className="grid grid-cols-1 gap-2 space-x-2 p-4 text-base md:grid-cols-4 md:text-xl">
                    <div className="p-2 text-start font-normal">
                      <p>Создатель</p>
                      <p>Владелец</p>
                      <p>Текущая цена</p>
                    </div>
                  </div>
                  <div className="text-start text-base font-normal">
                    <div>Фон:</div>
                    <div>Тело:</div>
                    <div>Глаза:</div>
                    <div>Рот:</div>
                    <div>Нос:</div>
                    <div>усы, борода:</div>
                    <div>Серьга в ухо:</div>
                    <div>Балаклава, маски, очки:</div>
                    <div>Бронежилет:</div>
                    <div>Верхняя одежда:</div>
                    <div>Головной убор, прическа:</div>
                  </div>
                </div>
                <div className="relative place-self-center p-2">
                  <div>
                    <a
                      href="№"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-p1-green dark:hover:text-p1-deepdarkgreen"
                    >
                      Купить сейчас
                    </a>
                  </div>
                </div>
                <div className="relative place-self-center pt-2">
                  <div>
                    <a
                      href="№"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-p1-green dark:hover:text-p1-deepdarkgreen"
                    >
                      Сделать предложение
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="3"></div>
    </div>
  );
}
