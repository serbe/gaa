'use client';

import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useState } from 'react';

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
          <Link href="/autoquestion2" className="mx-auto justify-center rounded-3xl">
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
          <Link href="/autoquestion4" className="mx-auto justify-center rounded-3xl">
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
            <div className="p-2 text-center text-xl text-p1-darkgreen md:text-2xl dark:text-amber-600">
              Тройная корона автоспорта — не официальный, но при этом достаточно ценный титул. Его
              присуждают пилоту, который на протяжении карьеры смог добиться абсолютных побед в трех
              гонках: 500 миль Индианаполиса, 24 часа Ле-Мана и Гран-при Монако. Это пока удалось
              только одному-единственному человеку! Кто этот человек?
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
              className={`max-w-4xl place-self-center rounded-sm md:min-h-96 ${currentVisibleArea == 1 ? '' : 'hidden'}`}
            >
              <div className="p-4 text-center font-bold text-p2-red md:text-3xl">
                {' '}
                Близко, но правильный ответ другой.
              </div>
              <div className="text-center text-base text-p1-darkgreen md:text-2xl dark:text-amber-600">
                Тацио Нуволари (Ле-Ман 1933, Гран-при Монако 1932, не хватает «Инди-500»)
              </div>
            </div>
            <div
              id="area2"
              className={`max-w-4xl place-self-center rounded-sm md:min-h-96 ${currentVisibleArea == 2 ? '' : 'hidden'}`}
            >
              <div className="p-4 text-center font-bold text-p2-red md:text-3xl">
                {' '}
                Близко, но правильный ответ другой.
              </div>
              <div className="text-center text-base text-p1-darkgreen md:text-2xl dark:text-amber-600">
                Джим Кларк (титул Ф-1 в 1963 и 1965, «Инди-500» 1965, не хватает Ле-Мана)
              </div>
            </div>
            <div
              id="area3"
              className={`max-w-4xl place-self-center rounded-sm md:min-h-96 ${currentVisibleArea == 3 ? '' : 'hidden'}`}
            >
              <div className="p-4 text-center font-bold text-p1-green md:text-3xl">
                {' '}
                Вы совершенно правы!
              </div>
              <div className="text-center text-base text-p1-darkgreen md:text-2xl dark:text-amber-600">
                Грэм Хилл — единственный в истории человек, выигравший все главные гонки мира.
                Англичанин пять раз побеждал в Монако (больше побед только у Айртона Сенны), в
                1969-м объехал всех на овале Индианаполиса, а еще через три года поднялся на высшую
                ступеньку пьедестала в Ле-Мане. Грэм был приверженцем альтернативных правил «Тройной
                короны». Чемпионский титул F1 он ставил выше победы в Гран-при Монако. Но и с этим у
                него тоже все хорошо — на счету Хилла два выигранных чемпионата в сезонах 1962 и
                1968 годов.
              </div>
            </div>
            <div
              id="area3"
              className={`max-w-4xl place-self-center rounded-sm md:min-h-96 ${currentVisibleArea == 4 ? '' : 'hidden'}`}
            >
              <div className="p-4 text-center font-bold text-p2-red md:text-3xl">
                {' '}
                Близко, но правильный ответ другой.
              </div>
              <div className="text-center text-base text-p1-darkgreen md:text-2xl dark:text-amber-600">
                Брюс Макларен (Ле-Ман 1966, Гран-при Монако 1961, не хватает «Инди-500»)
                <p className="p-4">
                  У команды McLaren славная история, но в длинном списке её достижений есть и
                  особенное: так называемая Тройная корона. Только McLaren может похвастаться тем,
                  что её машины и её гонщики в своё время побеждали в трёх самых престижных гонках
                  мира – Гран При Монако, Indy 500 и 24 часа Ле-Мана.
                </p>
                <p className="p-2">
                  в 1974-м Джонни Рутерфорд выиграл Indy 500 на машине McLaren 16C/D. В 1995-м
                  триумфаторами в Ле-Мане были Янник Дальмас, Мизанори Секия и Джей-Джей Лехто,
                  победившие в абсолютном зачёте на спорткаре McLaren F1 GTR. А в 1984-м Ален Прост
                  добыл для McLaren первую победу в Монако – всего в истории команды таких побед
                  было 15 – четыре из них на счету Проста, и пять раз эту гонку выиграл Айртон
                  Сенна.
                </p>{' '}
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
                  Тацио Нуволари
                </button>
              </div>

              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <button
                  data-target="area2"
                  className="inline-block h-20 w-full place-content-center rounded-xl border-2 border-p2-orange bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p2-red/80 focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p2-red/80 dark:focus:bg-p1-deepdarkgreen dark:focus:text-p2-red/80"
                  id="toggleButton2"
                  onClick={() => {
                    setCurrentVisibleArea(2);
                  }}
                >
                  Джим Кларк
                </button>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <button
                  data-target="area3"
                  className="inline-block h-20 w-full place-content-center rounded-xl border-2 border-p2-orange bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  id="toggleButton3"
                  onClick={() => {
                    setCurrentVisibleArea(3);
                  }}
                >
                  Грэм Хилл
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
                  Брюс Макларен
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
