'use client';

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
              Тройная корона автоспорта — не официальный, но при этом достаточно ценный титул. Его
              присуждают пилоту, который на протяжении карьеры смог добиться абсолютных побед в трех
              гонках: 500 миль Индианаполиса, 24 часа Ле-Мана и Гран-при Монако. Это пока удалось
              только одному-единственному человеку! Кто этот человек?
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
            {answer == 3 ? <CorrectAnswer /> : <WrongAnswer />}
          </div>
          <div className="space-y-4 p-4 text-p1-darkgreen md:p-5 md:text-lg dark:text-p1-green">
            <p className="pb-5">
              Тацио Нуволари (Ле-Ман 1933, Гран-при Монако 1932, не хватает «Инди-500»)
            </p>
            <p className="pb-5">
              Джим Кларк (титул Ф-1 в 1963 и 1965, «Инди-500» 1965, не хватает Ле-Мана)
            </p>
            <p className="pb-5 text-p1-cyan">
              Грэм Хилл — единственный в истории человек, выигравший все главные гонки мира.
              Англичанин пять раз побеждал в Монако (больше побед только у Айртона Сенны), в 1969-м
              объехал всех на овале Индианаполиса, а еще через три года поднялся на высшую ступеньку
              пьедестала в Ле-Мане. Грэм был приверженцем альтернативных правил «Тройной короны».
              Чемпионский титул F1 он ставил выше победы в Гран-при Монако. Но и с этим у него тоже
              все хорошо — на счету Хилла два выигранных чемпионата в сезонах 1962 и 1968 годов.
            </p>
            <p className="pb-5">
              Брюс Макларен (Ле-Ман 1966, Гран-при Монако 1961, не хватает «Инди-500»)
            </p>
            <p className="pb-5">
              У команды McLaren славная история, но в длинном списке её достижений есть и особенное:
              так называемая Тройная корона. Только McLaren может похвастаться тем, что её машины и
              её гонщики в своё время побеждали в трёх самых престижных гонках мира – Гран При
              Монако, Indy 500 и 24 часа Ле-Мана.
            </p>
            <p className="pb-5">
              в 1974-м Джонни Рутерфорд выиграл Indy 500 на машине McLaren 16C/D. В 1995-м
              триумфаторами в Ле-Мане были Янник Дальмас, Мизанори Секия и Джей-Джей Лехто,
              победившие в абсолютном зачёте на спорткаре McLaren F1 GTR. А в 1984-м Ален Прост
              добыл для McLaren первую победу в Монако – всего в истории команды таких побед было 15
              – четыре из них на счету Проста, и пять раз эту гонку выиграл Айртон Сенна.
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
      <div className="px-2 text-center text-xl font-semibold text-p2-orange md:pt-2 md:text-3xl">
        Автоспорт, автокультура
      </div>

      <div className="flex flex-row justify-center">
        <div className="md:w-3/5">
          <div className="place-items-center rounded-3xl border-p2-orange p-2 md:border-4">
            <div className="text-center font-serif text-base text-p1-darkgreen md:text-2xl dark:text-p2-orange">
              Тройная корона автоспорта — не официальный, но при этом достаточно ценный титул. Его
              присуждают пилоту, который на протяжении карьеры смог добиться абсолютных побед в трех
              гонках: 500 миль Индианаполиса, 24 часа Ле-Мана и Гран-при Монако. Это пока удалось
              только одному-единственному человеку! Кто этот человек?
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
                    className="h-5 w-5 border-gray-300 bg-gray-100 text-p1-green focus:ring-2 focus:ring-p1-green dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-p2-orange dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-eleven"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-2xl dark:text-gray-300"
                  >
                    Тацио Нуволари
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
                    className="h-5 w-5 border-gray-300 bg-gray-100 text-p1-green focus:ring-2 focus:ring-p1-green dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-p2-orange dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-twelve"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-2xl dark:text-gray-300"
                  >
                    Джим Кларк
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
                    className="h-5 w-5 border-gray-300 bg-gray-100 text-p1-green focus:ring-2 focus:ring-p1-green dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-p2-orange dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-thirteen"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-2xl dark:text-gray-300"
                  >
                    Грэм Хилл
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
                    className="h-5 w-5 border-gray-300 bg-gray-100 text-p1-green focus:ring-2 focus:ring-p1-green dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-p2-orange dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-fourteen"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-2xl dark:text-gray-300"
                  >
                    Брюс Макларен
                  </label>
                </div>
              </li>
            </ul>
            <div className="pb-5"></div>

            <button
              data-modal-target="question-modal"
              data-modal-toggle="question-modal"
              onClick={() => setViewModal(!viewModal)}
              className="inline-block rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p2-orange dark:hover:bg-amber-600 dark:hover:text-amber-100"
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
