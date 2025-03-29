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
              className={`max-w-4xl place-self-center rounded-sm md:min-h-96  ${currentVisibleArea == 1 ? '' : 'hidden'}`}
            >
              <div className="bg-p2-red p-4 text-center text-p1-white md:text-3xl">
                {' '}
                Близко, но правильный ответ другой.
              </div>
              <div className="pt-4 text-center text-base text-p1-darkgreen md:text-2xl dark:text-p2-orange">
                Тацио Нуволари (Ле-Ман 1933, Гран-при Монако 1932, не хватает «Инди-500»)
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
                Джим Кларк (титул Ф-1 в 1963 и 1965, «Инди-500» 1965, не хватает Ле-Мана)
              </div>
            </div>
            <div
              id="area3"
              className={`max-w-4xl place-self-center rounded-sm md:min-h-96  ${currentVisibleArea == 3 ? '' : 'hidden'}`}
            >
              <div className="bg-p1-green  p-4 text-center text-p1-white  md:text-3xl">
                {' '}
                Вы совершенно правы!
              </div>
              <div className="pt-4 text-center text-base text-p1-darkgreen md:text-2xl dark:text-p2-orange">
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
              className={`max-w-4xl place-self-center rounded-sm md:min-h-96  ${currentVisibleArea == 4 ? '' : 'hidden'}`}
            >
              <div className="bg-p2-red p-4 text-center text-p1-white md:text-3xl">
                {' '}
                Близко, но правильный ответ другой.
              </div>
              <div className="pt-4 text-center text-base text-p1-darkgreen md:text-2xl dark:text-p2-orange">
                Брюс Макларен (Ле-Ман 1966, Гран-при Монако 1961, не хватает «Инди-500»)
                <p className="text-base md:text-xl">
                  У команды McLaren славная история, но в длинном списке её достижений есть и
                  особенное: так называемая Тройная корона. Только McLaren может похвастаться тем,
                  что её машины и её гонщики в своё время побеждали в трёх самых престижных гонках
                  мира – Гран При Монако, Indy 500 и 24 часа Ле-Мана.
                </p>
                <p className="  text-base md:text-xl">
                  в 1974-м Джонни Рутерфорд выиграл Indy 500 на машине McLaren 16C/D. В 1995-м
                  триумфаторами в Ле-Мане были Янник Дальмас, Мизанори Секия и Джей-Джей Лехто,
                  победившие в абсолютном зачёте на спорткаре McLaren F1 GTR. А в 1984-м Ален Прост
                  добыл для McLaren первую победу в Монако – всего в истории команды таких побед
                  было 15 – четыре из них на счету Проста, и пять раз эту гонку выиграл Айртон
                  Сенна.
                </p>{' '}
              </div>
            </div>
            <div className="grid w-full grid-cols-1 flex-row justify-center gap-2 place-self-center pb-5 md:grid-cols-2 xl:w-7xl">
              <div className="scale-95 duration-500 hover:scale-100">
                <button
                  data-target="area1"
                  className="inline-block h-20 w-full place-content-center rounded-xl border-2 border-p2-orange bg-p1-white px-4 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p2-orange focus:bg-p2-red focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p2-orange dark:bg-p1-deepdarkgreen dark:text-p2-orange dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red/50 dark:focus:text-p1-white"
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
                  className="inline-block h-20 w-full place-content-center rounded-xl border-2 border-p2-orange bg-p1-white px-4 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p2-orange focus:bg-p2-red focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p2-orange dark:bg-p1-deepdarkgreen dark:text-p2-orange dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red/50 dark:focus:text-p1-white"
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
                  className="inline-block h-20 w-full place-content-center rounded-xl border-2 border-p2-orange bg-p1-white px-4 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p2-orange dark:bg-p1-deepdarkgreen dark:text-p2-orange dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-darkgreen dark:focus:text-p1-white"
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
                  className="inline-block h-20 w-full place-content-center rounded-xl border-2 border-p2-orange bg-p1-white px-4 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p2-orange focus:bg-p2-red focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p2-orange dark:bg-p1-deepdarkgreen dark:text-p2-orange dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red/50 dark:focus:text-p1-white"
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
      <div className="place-self-center ">
        {' '}
        <div className="inline-flex w-max flex-auto rounded-md pt-1 shadow-xs" role="group">
          <Link
            href="/autoquestion2"
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
            className="inline-block w-full place-content-center border  bg-p2-orange px-4 py-2 text-center text-p1-darkgreen text-p1-white shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p2-orange/15 hover:bg-p2-orange/25 hover:text-p1-darkgreen focus:border-p2-orange/20 focus:bg-p2-orange focus:text-p1-white md:text-xl  dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p2-orange dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p2-orange dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p2-orange"
          >
            3
          </Link>
          <Link
            href="/autoquestion4"
            className="inline-block w-full place-content-center  border bg-p1-white px-4 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p2-orange/15 hover:bg-p2-orange/25 hover:text-p1-darkgreen focus:border-p2-orange/20 focus:bg-p2-orange focus:text-p1-white md:text-xl  dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p2-orange"
          >
            4
          </Link>

          <Link
            href="/autoquestion4"
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
