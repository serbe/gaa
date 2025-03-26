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

      <div className="flex flex-wrap justify-between self-center md:flex-nowrap">
        <div className="w-1/5 md:w-1/12">
          <Link href="/autoquestion4" className="mx-auto justify-center rounded-3xl">
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
          <Link href="/autoquestion2" className="mx-auto justify-center rounded-3xl">
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
              Кто основал гонки Формула-1?
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
              <div className="p-4 text-center text-p2-red md:text-3xl">
                {' '}
                Близко, но правильный ответ другой.
              </div>
              <div className="text-center text-base text-p1-darkgreen md:text-2xl dark:text-amber-600">
                Берни Экклстоун хотя и не стоял у истоков, сделал Формулу-1 глобальной и коммерчески
                успешной. Он фактически реформировал спорт и стал влиятельной фигурой, сделав Ф1
                массовым зрелищем и организовав трансляции гонок по всему миру.
              </div>
            </div>
            <div
              id="area2"
              className={`max-w-4xl place-self-center rounded-sm md:min-h-96  ${currentVisibleArea == 2 ? '' : 'hidden'}`}
            >
              <div className="p-4 text-center font-bold text-p1-green md:text-3xl">
                {' '}
                Вы совершенно правы!
              </div>
              <div className="text-center text-base text-p1-darkgreen md:text-2xl dark:text-amber-600">
                Жан-Мари Балестр и FIA — официально первые чемпионаты мира Формулы-1 были
                организованы Международной автомобильной федерацией (FIA) под руководством её
                президента Жана-Мари Балестра. Формула-1 как чемпионат мира была учреждена FIA в
                1950 году.
                <p className="py-2">
                  Формула-1 выросла из множества национальных и международных гонок 1930-х годов,
                  когда автомобильные клубы Европы, включая британский RAC и итальянский ACI, стали
                  проводить гонки на открытых трассах.
                </p>
                <p className="py-2">
                  некоторые считают, что Формула-1 образовалась благодаря владельцам команд, которые
                  договорились о стандартизации правил и форматов гонок.
                </p>
              </div>
            </div>
            <div
              id="area3"
              className={`max-w-4xl place-self-center rounded-sm md:min-h-96  ${currentVisibleArea == 3 ? '' : 'hidden'}`}
            >
              <div className="p-4 text-center text-p2-red md:text-3xl">
                {' '}
                Близко, но правильный ответ другой.
              </div>
              <div className="text-center text-base text-p1-darkgreen md:text-2xl dark:text-amber-600">
                Король Англии Георга VI, правил с 1936 года В 1952 году, через два года после
                первого чемпионата Формулы-1, Георг VI умер, и его старшая дочь, принцесса
                Елизавета, стала королевой Елизаветой II.
                <p className="py-2">
                  Формула-1 выросла из множества национальных и международных гонок 1930-х годов,
                  когда автомобильные клубы Европы, включая британский RAC и итальянский ACI, стали
                  проводить гонки на открытых трассах.
                </p>
                <p className="py-2">
                  Некоторые считают, что Формула-1 образовалась благодаря владельцам команд, которые
                  договорились о стандартизации правил и форматов гонок.
                </p>
              </div>
            </div>
            <div
              id="area3"
              className={`max-w-4xl place-self-center rounded-sm md:min-h-96  ${currentVisibleArea == 4 ? '' : 'hidden'}`}
            >
              <div className="p-4 text-center text-p2-red md:text-3xl">
                {' '}
                Близко, но правильный ответ другой.
              </div>
              <div className="text-center text-base text-p1-darkgreen md:text-2xl dark:text-amber-600">
                королева Англии Елизавета II правила с 8 февраля 1952 года по 8 сентября 2022 года
                <p className="py-2">
                  Формула-1 выросла из множества национальных и международных гонок 1930-х годов,
                  когда автомобильные клубы Европы, включая британский RAC и итальянский ACI, стали
                  проводить гонки на открытых трассах.
                </p>
                <p className="py-2">
                  некоторые считают, что Формула-1 образовалась благодаря владельцам команд, которые
                  договорились о стандартизации правил и форматов гонок.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 flex-row justify-center gap-2 pb-5 md:grid-cols-2">
              <div className="scale-95 duration-500 hover:scale-100">
                <button
                  data-target="area1"
                  className="inline-block h-20 w-full place-content-center rounded-xl border-2 border-p2-orange bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p2-red/80 focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p2-red/80 dark:focus:bg-p1-deepdarkgreen dark:focus:text-p2-red/80"
                  id="toggleButton1"
                  onClick={() => {
                    setCurrentVisibleArea(1);
                  }}
                >
                  Берни Экклстоун
                </button>
              </div>

              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <button
                  data-target="area2"
                  className="inline-block h-20 w-full place-content-center rounded-xl border-2 border-p2-orange bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  id="toggleButton2"
                  onClick={() => {
                    setCurrentVisibleArea(2);
                  }}
                >
                  Жан-Мари Балестр и FIA
                </button>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <button
                  data-target="area3"
                  className="inline-block h-20 w-full place-content-center rounded-xl border-2 border-p2-orange bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p2-red/80 focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p2-red/80 dark:focus:bg-p1-deepdarkgreen dark:focus:text-p2-red/80"
                  id="toggleButton3"
                  onClick={() => {
                    setCurrentVisibleArea(3);
                  }}
                >
                  Король Англии Георг VI
                </button>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <button
                  data-target="area4"
                  className="inline-block h-20 w-full place-content-center rounded-xl border-2 border-p2-orange bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p2-red/80 focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p2-red/80 dark:focus:bg-p1-deepdarkgreen dark:focus:text-p2-red/80"
                  id="toggleButton4"
                  onClick={() => {
                    setCurrentVisibleArea(4);
                  }}
                >
                  Королева Англии Елизавета II
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
