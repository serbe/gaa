'use client';

import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useState } from 'react';
import { Autoplay, Mousewheel, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home() {
  const [currentVisibleArea, setCurrentVisibleArea] = useState(5);

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
        <div className="px-2 text-xl font-semibold text-p2-orange md:pt-2 md:text-3xl">
          Racepoint
        </div>
        <div className="px-2 text-xl font-semibold text-p2-orange md:pt-2 md:text-3xl">
          QUESTIONS
        </div>
      </div>

      <div className="flex flex-wrap justify-between self-center md:flex-nowrap">
        <div className="w-1/5 md:w-1/12">
          <Link href="/autoquestion1" className="mx-auto justify-center rounded-3xl">
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl opacity-85 transition-all delay-75 duration-500 ease-in-out hover:scale-105 hover:opacity-100"
              width={1000}
              height={1000}
              src="/Arrows/Prev.png"
              alt="prev"
            />
          </Link>
        </div>
        <div className="px-2 text-xl font-semibold text-p2-orange md:pt-2 md:text-3xl"></div>
        <div className="px-2 text-xl font-semibold text-p2-orange md:pt-2 md:text-3xl"></div>
        <div className="w-1/5 md:w-1/12">
          <Link href="/autoquestion3" className="mx-auto justify-center rounded-3xl">
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl opacity-85 transition-all delay-75 duration-500 ease-in-out hover:scale-105 hover:opacity-100"
              width={1000}
              height={1000}
              src="/Arrows/Next.png"
              alt="next"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-row justify-center"></div>

      <div className="px-2 text-center text-xl font-semibold text-p2-orange md:-mt-32 md:pt-2 md:text-3xl">
        Автоспорт, автокультура
      </div>
      <div className="flex flex-row justify-center pb-5">
        <div className="place-items-center">
          <div className="rounded-3xl border-p2-orange md:my-5 md:space-y-6 md:p-6 dark:border-amber-600">
            <div className="text-center text-xl text-p1-darkgreen md:text-2xl dark:text-amber-600">
              Где прошла первая гонка Формулы-1?
            </div>
            <div
              id="area5"
              className={`max-w-4xl place-self-center md:min-h-96 ${currentVisibleArea == 5 ? '' : 'hidden'}`}
            >
              <Image
                className="relative mb-4 inline-block w-32 rounded-xl sm:w-56 md:w-96 md:rounded-3xl"
                width={1000}
                height={1000}
                src="/Arrows/question.png"
                alt="question"
              />
            </div>
            <div
              id="area1"
              className={`max-w-4xl place-self-center rounded md:min-h-96  ${currentVisibleArea == 1 ? '' : 'hidden'}`}
            >
              <div className="p-4 text-center font-bold text-p1-green md:text-3xl">
                {' '}
                Вы совершенно правы!
              </div>
              <div className="text-center text-base text-p1-darkgreen md:text-2xl dark:text-amber-600">
                Первое соревнование чемпионата мира Формулы-1 прошло на трассе Сильверстоун в
                Великобритании 13 мая 1950 года. Эта гонка, известная как Гран-при Великобритании,
                стала первым этапом чемпионата мира Формулы-1, организованного Международной
                автомобильной федерацией (FIA).
              </div>
            </div>
            <div
              id="area2"
              className={`max-w-4xl place-self-center rounded md:min-h-96  ${currentVisibleArea == 2 ? '' : 'hidden'}`}
            >
              <div className="p-4 text-center text-p2-red md:text-3xl">
                {' '}
                Близко, но правильный ответ другой.
              </div>
              <div className="text-center text-base text-p1-darkgreen md:text-2xl dark:text-amber-600">
                Гран-при Монако в 1950 году был второй гонкой сезона Формулы-1. Она прошла 21 мая
                1950 года Гонка проходит на знаменитой уличной трассе в Монте-Карло. Это одно из
                самых престижных событий в календаре Формулы-1.
              </div>
            </div>
            <div
              id="area3"
              className={`max-w-4xl place-self-center rounded md:min-h-96  ${currentVisibleArea == 3 ? '' : 'hidden'}`}
            >
              <div className="p-4 text-center text-p2-red md:text-3xl">
                {' '}
                Близко, но правильный ответ другой.
              </div>
              <div className="text-center text-base text-p1-darkgreen md:text-2xl dark:text-amber-600">
                Первая гонка Формулы-1 на Нюрбургринге прошла 4 августа 1951 года. Это был Гран-при
                Германии, который проводился на Nordschleife (Северной петле) — знаменитой и сложной
                конфигурации трассы. Нюрбургринг принимал гонки Формулы-1 с 1951 по 1976 год.
                Гран-при Германии проводился на Северной петле, однако после трагических инцидентов
                и роста стандартов безопасности гонки были переведены на более короткую и безопасную
     autoquestiautoquestion12 copyon12 copy           конфигурацию.
              </div>
            </div>
            <div
              id="area3"
              className={`max-w-4xl place-self-center rounded md:min-h-96  ${currentVisibleArea == 4 ? '' : 'hidden'}`}
            >
              <div className="p-4 text-center text-p2-red md:text-3xl">
                {' '}
                Близко, но правильный ответ другой.
              </div>
              <div className="text-center text-base text-p1-darkgreen md:text-2xl dark:text-amber-600">
                Первая гонка Формулы-1 на Индианаполис 500 состоялась в 1950 году. Она прошла 30 мая
                и входила в календарь первого сезона чемпионата мира Формулы-1. Гонка, проводимая по
                собственным правилам, всё же была включена в зачёт чемпионата мира Формулы-1. Победа
                в этом соревновании, наряду с победами в гонках 24 часа Ле-Мана и Гран-при Монако,
                является составляющей для получения звания Тройной короны автоспорта
              </div>
            </div>
            <div className="grid grid-cols-1 flex-row justify-center gap-2 pb-5 md:grid-cols-2">
              <div className="scale-95 duration-500 hover:scale-100">
                <button
                  data-target="area1"
                  className="inline-block h-20 w-full place-content-center rounded-xl border border-2 border-p2-orange bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  id="toggleButton1"
                  onClick={() => {
                    setCurrentVisibleArea(1);
                  }}
                >
                  на трассе Сильверстоун в Великобритании
                </button>
              </div>

              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <button
                  data-target="area2"
                  className="inline-block h-20 w-full place-content-center rounded-xl border border-2 border-p2-orange bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p2-red/80 focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p2-red/80 dark:focus:bg-p1-deepdarkgreen dark:focus:text-p2-red/80"
                  id="toggleButton2"
                  onClick={() => {
                    setCurrentVisibleArea(2);
                  }}
                >
                  на трассе в Монако
                </button>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <button
                  data-target="area3"
                  className="inline-block h-20 w-full place-content-center rounded-xl border border-2 border-p2-orange bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p2-red/80 focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p2-red/80 dark:focus:bg-p1-deepdarkgreen dark:focus:text-p2-red/80"
                  id="toggleButton3"
                  onClick={() => {
                    setCurrentVisibleArea(3);
                  }}
                >
                  на трассе в Германии - Нюрбургринг
                </button>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <button
                  data-target="area4"
                  className="inline-block h-20 w-full place-content-center rounded-xl border border-2 border-p2-orange bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p2-red/80 focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p2-red/80 dark:focus:bg-p1-deepdarkgreen dark:focus:text-p2-red/80"
                  id="toggleButton4"
                  onClick={() => {
                    setCurrentVisibleArea(4);
                  }}
                >
                  на автодроме «Индианаполис Мотор Спидвей», Индианаполис 500 — США
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
