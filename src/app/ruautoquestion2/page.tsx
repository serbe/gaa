'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';

const CorrectAnswer = () => (
  <div className="text-3xl font-semibold text-green-600 dark:text-green-400">
    Вы совершенно правы!
  </div>
);

const WrongAnswer = () => (
  <div className="text-3xl font-semibold text-red-600 dark:text-red-400">
    Близко, но правильный ответ другой.
  </div>
);

const ModalWindow = ({
  viewModal,
  setViewModal,
  answer,
}: {
  viewModal: boolean;
  setViewModal: Dispatch<SetStateAction<boolean>>;
  answer: number;
}) => {
  return (
    <div
      id="question-modal"
      data-modal-placement="center-center"
      tabIndex={-1}
      aria-hidden={viewModal}
      className={`fixed z-50 ${viewModal ? 'hidden' : ''} h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden backdrop-blur-sm md:inset-0`}
    >
      <div className="relative mx-auto my-auto max-h-full w-full p-4 md:w-3/5">
        {/* <!-- Modal content --> */}
        <div className="relative rounded-lg border-4 border-p2-orange bg-p1-white shadow md:rounded-3xl dark:bg-p1-deepdarkgreen">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600">
            <p className="text-center font-serif text-base text-p1-darkgreen md:text-2xl dark:text-p1-cyan">
              Где прошла первая гонка Формулы-1?
            </p>
            <button
              type="button"
              className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="question-modal"
              onClick={() => setViewModal(!viewModal)}
            >
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="space-y-4 p-4 md:p-5">
            {/* здесь проверяется правильность ответа в данном случае верный пункт - 2 */}
            {answer == 1 ? <CorrectAnswer /> : <WrongAnswer />}
          </div>
          <div className="space-y-4 p-4 text-p1-darkgreen md:p-5 md:text-lg dark:text-p1-green">
            <p className="pb-5 text-p1-cyan">
              Первое соревнование чемпионата мира Формулы-1 прошло на трассе Сильверстоун в
              Великобритании 13 мая 1950 года. Эта гонка, известная как Гран-при Великобритании,
              стала первым этапом чемпионата мира Формулы-1, организованного Международной
              автомобильной федерацией (FIA).
            </p>
            <p className="pb-5">
              Гран-при Монако в 1950 году был второй гонкой сезона Формулы-1. Она прошла 28 мая 1950
              года Гонка проходит на знаменитой уличной трассе в Монте-Карло. Это одно из самых
              престижных событий в календаре Формулы-1.
            </p>
            <p className="pb-5">
              Первая гонка Формулы-1 на Нюрбургринге прошла 4 августа 1951 года. Это был Гран-при
              Германии, который проводился на Nordschleife (Северной петле) — знаменитой и сложной
              конфигурации трассы. Нюрбургринг принимал гонки Формулы-1 с 1951 по 1976 год. Гран-при
              Германии проводился на Северной петле, однако после трагических инцидентов и роста
              стандартов безопасности гонки были переведены на более короткую и безопасную
              конфигурацию.
            </p>
            <p className="pb-5">
              Гонка, проводимая по собственным правилам, всё же была включена в зачёт чемпионата
              мира Формулы-1. Победа в этом соревновании, наряду с победами в гонках 24 часа Ле-Мана
              и Гран-при Монако, является составляющей для получения звания Тройной короны
              автоспорта
            </p>
          </div>
          {/* <!-- Modal footer --> */}
          <div className="items-center rounded-b border-t border-gray-200 p-4 md:p-5 dark:border-gray-600">
            <button
              data-modal-hide="question-modal"
              type="button"
              onClick={() => setViewModal(!viewModal)}
              className="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-p2-orange hover:text-p1-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  const [viewModal, setViewModal] = useState(true);
  const [answer, setAnswer] = useState(0);

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
          <Link
            href={{
              pathname: '/ruautoquestion1',
              query: { ruabout: 'ruautoquestion1' },
            }}
            className="mx-auto justify-center rounded-3xl hover:drop-shadow-2xl"
          >
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
        <div className="px-2 text-xl font-semibold text-p2-orange md:pt-2 md:text-3xl"></div>{' '}
        <div className="w-1/5 md:w-1/12">
          <Link
            href={{
              pathname: '/ruautoquestion3',
              query: { ruabout: 'ruautoquestion3' },
            }}
            className="mx-auto justify-center rounded-3xl hover:drop-shadow-2xl"
          >
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

      <div className="px-2 text-center text-xl font-semibold text-p2-orange md:pt-2 md:text-3xl">
        Автоспорт, автокультура
      </div>

      <div className="flex flex-row justify-center">
        <div className="md:w-3/5">
          <div className="place-items-center rounded-3xl border-p2-orange p-2 md:border-4">
            <div className="text-center font-serif text-base text-p1-darkgreen md:text-2xl dark:text-p2-orange">
              Где прошла первая гонка Формулы-1?
            </div>
            <div className="pb-5"></div>
            <ul className="w-full rounded-lg border border-gray-200 bg-p1-white font-medium text-gray-900 accent-p2-orange dark:border-gray-600 dark:bg-p1-deepdarkgreen dark:text-white">
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3" onClick={() => setAnswer(1)}>
                  <input
                    id="list-radio-eleven"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="h-5 w-5 border-gray-300 bg-gray-100 text-p2-orange dark:border-p2-orange dark:bg-gray-600"
                  />
                  <label
                    htmlFor="list-radio-eleven"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
                  >
                    на трассе Сильверстоун в Великобритании
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3" onClick={() => setAnswer(2)}>
                  <input
                    id="list-radio-twelve"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="h-5 w-5 border-gray-300 bg-gray-100 text-p2-orange dark:border-p2-orange dark:bg-gray-600"
                  />
                  <label
                    htmlFor="list-radio-twelve"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
                  >
                    на трассе в Монако
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3" onClick={() => setAnswer(3)}>
                  <input
                    id="list-radio-thirteen"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="h-5 w-5 border-gray-300 bg-gray-100 text-p2-orange dark:border-p2-orange dark:bg-gray-600"
                  />
                  <label
                    htmlFor="list-radio-thirteen"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
                  >
                    на трассе в Германии - Нюрбургринг
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3" onClick={() => setAnswer(4)}>
                  <input
                    id="list-radio-fourteen"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="h-5 w-5 border-gray-300 bg-gray-100 text-p2-orange dark:border-p2-orange dark:bg-gray-600"
                  />
                  <label
                    htmlFor="list-radio-fourteen"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
                  >
                    на автодроме «Индианаполис Мотор Спидвей», Индианаполис 500 — США
                  </label>
                </div>
              </li>
            </ul>
            <div className="pb-5"></div>

            <button
              data-modal-target="question-modal"
              data-modal-toggle="question-modal"
              onClick={() => setViewModal(!viewModal)}
              className="inline-block rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p2-orange dark:hover:bg-amber-600 dark:hover:text-amber-100"
            >
              Ответить
            </button>

            <ModalWindow viewModal={viewModal} setViewModal={setViewModal} answer={answer} />

            <div className="pb-5"></div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
