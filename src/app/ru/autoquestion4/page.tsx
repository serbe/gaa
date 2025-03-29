'use client';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useState } from 'react';
import { useFavicon } from '@/utils/hooks';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home() {
  const [currentVisibleArea, setCurrentVisibleArea] = useState(5);
  useFavicon('/Arrows/question.png ');

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
      <div className="flex flex-row justify-center"></div>
      <div className="px-2 text-center text-xl font-semibold text-p2-orange md:-mt-8 md:pt-2 md:text-3xl">
        Автоспорт, автокультура
      </div>
      <div className="flex flex-row justify-center">
        <div className="place-items-center">
          <div className="rounded-3xl border-p2-orange md:my-2  dark:border-p2-orange">
            <div className="w-screen py-4 text-center text-xl text-p1-darkgreen md:px-6 md:text-2xl dark:text-p2-orange">
              Кто является основателем Дрифта?
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
              className={`max-w-4xl place-self-center rounded-sm md:min-h-96  ${currentVisibleArea == 1 ? '' : 'hidden'}`}
            >
              <div className="bg-p1-green  p-4 text-center text-p1-white  md:text-3xl">
                {' '}
                Вы совершенно правы!
              </div>
              <div className="pt-4 text-center text-base text-p1-darkgreen md:text-2xl dark:text-p2-orange">
                Кейити Цучия (Keiichi Tsuchiya), которого называют "Король дрифта" или "Drift King".
                Именно он превратил дрифт из уличного развлечения в настоящий автоспорт и вдохновил
                многие поколения гонщиков. Цучия начал свою карьеру стрит-рейсера и стал популярным
                благодаря своему уникальному стилю, который он демонстрировал на японских горных
                дорогах (тоугэ). Цучия также сыграл важную роль в создании первых профессиональных
                соревнований по дрифту, таких как D1 Grand Prix в Японии, и стал их неотъемлемой
                частью. Он участвовал не только в дрифте, но и в других автогонках, таких как 24
                часа Ле-Мана{' '}
              </div>
            </div>
            <div
              id="area2"
              className={`max-w-4xl place-self-center rounded-sm md:min-h-96  ${currentVisibleArea == 2 ? '' : 'hidden'}`}
            >
              <div className="bg-p2-red p-4 text-center text-p1-white md:text-3xl">
                {' '}
                Близко, но правильный ответ другой.
              </div>
              <div className="pt-4 text-center text-base text-p1-darkgreen md:text-2xl dark:text-p2-orange">
                Цуёси Сиода привез идею дрифта в США и провел первые показательные заезды.
                (1990-2000 годы) В 2004 году была создана Formula Drift (Formula D), которая стала
                первой профессиональной серией дрифта в Северной Америке и популяризировала этот вид
                спорта в США и за его пределами.{' '}
              </div>
            </div>
            <div
              id="area3"
              className={`max-w-4xl place-self-center rounded-sm md:min-h-96  ${currentVisibleArea == 3 ? '' : 'hidden'}`}
            >
              <div className="bg-p2-red p-4 text-center text-p1-white md:text-3xl">
                {' '}
                Близко, но правильный ответ другой.
              </div>
              <div className="pt-4 text-center text-base text-p1-darkgreen md:text-2xl dark:text-p2-orange">
                Рис Миллен (Rhys Millen) — новозеландский и американский гонщик, внесший большой
                вклад в популяризацию дрифта в США и выступавший в серии Formula Drift. Миллен
                известен своими зрелищными выступлениями и достижениями на чемпионатах по дрифту.
              </div>
            </div>
            <div
              id="area3"
              className={`max-w-4xl place-self-center rounded-sm md:min-h-96  ${currentVisibleArea == 4 ? '' : 'hidden'}`}
            >
              <div className="bg-p2-red p-4 text-center text-p1-white md:text-3xl">
                {' '}
                Близко, но правильный ответ другой.
              </div>
              <div className="pt-4 text-center text-base text-p1-darkgreen md:text-2xl dark:text-p2-orange">
                Дайго Сайто (Daigo Saito) — японский гонщик, известный своей агрессивной манерой
                езды и способностью управлять мощными машинами в экстремальных условиях. Сайто стал
                первым гонщиком, выигравшим как D1 Grand Prix в Японии, так и Formula Drift в США,
                что принесло ему международную известность.
              </div>
            </div>
            <div className="grid w-full grid-cols-1 flex-row justify-center gap-2 place-self-center pb-5 md:grid-cols-2 xl:w-7xl">
              <div className="scale-95 duration-500 hover:scale-100">
                <button
                  data-target="area1"
                  className="inline-block h-20 w-full place-content-center rounded-xl border-2 border-p2-orange bg-p1-white px-4 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p2-orange dark:bg-p1-deepdarkgreen dark:text-p2-orange dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-darkgreen dark:focus:text-p1-white"
                  id="toggleButton1"
                  onClick={() => {
                    setCurrentVisibleArea(1);
                  }}
                >
                  Кейити Цучия (Keiichi Tsuchiya)
                </button>
              </div>

              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <button
                  data-target="area2"
                  className="inline-block h-20 w-full place-content-center rounded-xl border-2 border-p2-orange bg-p1-white px-4 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p2-orange focus:bg-p2-red focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p2-orange dark:bg-p1-deepdarkgreen dark:text-p2-orange dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red/50 dark:focus:text-p1-white"
                  id="toggleButton2"
                  onClick={() => {
                    setCurrentVisibleArea(2);
                  }}
                >
                  Цуёси Сиода (Tsuyoshi Shiota)
                </button>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <button
                  data-target="area3"
                  className="inline-block h-20 w-full place-content-center rounded-xl border-2 border-p2-orange bg-p1-white px-4 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p2-orange focus:bg-p2-red focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p2-orange dark:bg-p1-deepdarkgreen dark:text-p2-orange dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red/50 dark:focus:text-p1-white"
                  id="toggleButton3"
                  onClick={() => {
                    setCurrentVisibleArea(3);
                  }}
                >
                  Рис Миллен (Rhys Millen)
                </button>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <button
                  data-target="area4"
                  className="inline-block h-20 w-full place-content-center rounded-xl border-2 border-p2-orange bg-p1-white px-4 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p2-orange focus:bg-p2-red focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p2-orange dark:bg-p1-deepdarkgreen dark:text-p2-orange dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red/50 dark:focus:text-p1-white"
                  id="toggleButton4"
                  onClick={() => {
                    setCurrentVisibleArea(4);
                  }}
                >
                  Дайго Сайто (Daigo Saito)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="place-self-center ">
        {' '}
        <div className="inline-flex w-max flex-auto rounded-md pt-1 shadow-xs" role="group">
          <Link
            href="/autoquestion3"
            className="inline-block w-full place-content-center rounded-l-xl border bg-p1-white px-4 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p2-orange/15 hover:bg-p2-orange/25 hover:text-p1-darkgreen focus:border-p2-orange/20 focus:bg-p2-orange focus:text-p1-white md:text-xl  dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p2-orange "
          >
            ❮
          </Link>
          <Link
            href="/autoquestion1"
            className="inline-block w-full place-content-center  border bg-p1-white px-4 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p2-orange/15 hover:bg-p2-orange/25 hover:text-p1-darkgreen focus:border-p2-orange/20 focus:bg-p2-orange focus:text-p1-white md:text-xl  dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p2-orange"
          >
            1
          </Link>
          <Link
            href="/autoquestion2"
            className="inline-block w-full place-content-center  border bg-p1-white px-4 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p2-orange/15 hover:bg-p2-orange/25 hover:text-p1-darkgreen focus:border-p2-orange/20 focus:bg-p2-orange focus:text-p1-white md:text-xl  dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p2-orange"
          >
            2
          </Link>
          <Link
            href="/autoquestion3"
            className="inline-block w-full place-content-center  border bg-p1-white px-4 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p2-orange/15 hover:bg-p2-orange/25 hover:text-p1-darkgreen focus:border-p2-orange/20 focus:bg-p2-orange focus:text-p1-white md:text-xl  dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p2-orange"
          >
            3
          </Link>
          <Link
            href="/autoquestion4"
            className="inline-block w-full place-content-center border  bg-p2-orange px-4 py-2 text-center text-p1-darkgreen text-p1-white shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p2-orange/15 hover:bg-p2-orange/25 hover:text-p1-darkgreen focus:border-p2-orange/20 focus:bg-p2-orange focus:text-p1-white md:text-xl  dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p2-orange dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p2-orange dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p2-orange"
          >
            4
          </Link>

          <Link
            href="/autoquestion1"
            className="inline-block w-full place-content-center rounded-r-xl border bg-p1-white px-4 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p2-orange/15 hover:bg-p2-orange/25 hover:text-p1-darkgreen focus:border-p2-orange/20 focus:bg-p2-orange focus:text-p1-white md:text-xl  dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p2-orange "
          >
            ❯
          </Link>
        </div>
      </div>{' '}
      <div className="pb-20"> </div>
    </div>
  );
}
