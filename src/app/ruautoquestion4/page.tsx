'use client';

import { Dispatch, SetStateAction, useState } from 'react';

const CorrectAnswer = () => (
  <div className="text-3xl font-semibold text-green-600">Вы совершенно правы!</div>
);

const WrongAnswer = () => <div className="text-3xl font-semibold text-red-600">Хера с два!</div>;

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
      <div className="relative mx-auto my-auto max-h-full w-full max-w-2xl p-4">
        {/* <!-- Modal content --> */}
        <div className="relative rounded-lg border-4 border-p2-orange bg-p1-white shadow md:rounded-3xl dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600">
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              Кто является основателем Дрифта?
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
          <div className="space-y-4 p-4 md:p-5">
            <p className="pb-5 font-semibold">
              Кейити Цучия (Keiichi Tsuchiya), которого называют &quot;Король дрифта&quot; или
              &quot;Drift &quot;Drift King&quot;. Именно он превратил дрифт из уличного развлечения
              в настоящий автоспорт и автоспорт и вдохновил многие поколения гонщиков. Цучия начал
              свою карьеру стрит-рейсер и стал популярным благодаря своему уникальному стилю,
              который он демонстрировал на японских горных дорогах (тоугэ). Цучия также сыграл
              важную роль в создании первых профессиональных соревнований по дрифту, таких как D1
              Grand Prix в Японии, и стал их неотъемлемой частью. Он участвовал не только в дрифте,
              но и в других автогонках, таких как 24 часа Ле-Мана
            </p>
            <p className="pb-5">
              Цуёси Сиода привез идею дрифта в США и провел первые показательные заезды. (1990-2000
              годы) В 2004 году была создана Formula Drift (Formula D), которая стала первой
              профессиональной серией дрифта в Северной Америке и популяризировала этот вид спорта в
              США и за его пределами.
            </p>
            <p className="pb-5">
              Рис Миллен (Rhys Millen) — новозеландский и американский гонщик, внесший большой вклад
              в популяризацию дрифта в США и выступавший в серии Formula Drift. Миллен известен
              своими зрелищными выступлениями и достижениями на чемпионатах по дрифту.
            </p>
            <p className="pb-5">
              Дайго Сайто (Daigo Saito) — японский гонщик, известный своей агрессивной манерой езды
              и способностью управлять мощными машинами в экстремальных условиях. Сайто стал первым
              гонщиком, выигравшим как D1 Grand Prix в Японии, так и Formula Drift в США, что
              принесло ему международную известность.
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
            <div className="text-center font-serif text-base font-semibold text-p1-darkgreen md:text-xl">
              Кто является основателем Дрифта?
            </div>
            <div className="pb-5"></div>
            <ul className="w-full rounded-lg border border-gray-200 bg-p1-white text-2xl font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3" onClick={() => setAnswer(1)}>
                  <input
                    id="list-radio-eleven"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="h-5 w-5 border-gray-300 bg-gray-100 text-blue-600 accent-amber-600 focus:ring-2 focus:ring-amber-600 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-eleven"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-2xl dark:text-gray-300"
                  >
                    Кейити Цучия (Keiichi Tsuchiya)
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
                    className="h-5 w-5 border-gray-300 bg-gray-100 text-blue-600 accent-amber-600 focus:ring-2 focus:ring-amber-600 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-twelve"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-2xl dark:text-gray-300"
                  >
                    Цуёси Сиода (Tsuyoshi Shiota)
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
                    className="h-5 w-5 border-gray-300 bg-gray-100 text-blue-600 accent-amber-600 focus:ring-2 focus:ring-amber-600 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-thirteen"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-2xl dark:text-gray-300"
                  >
                    Рис Миллен (Rhys Millen)
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
                    className="h-5 w-5 border-gray-300 bg-gray-100 text-blue-600 accent-amber-600 focus:ring-2 focus:ring-amber-600 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-fourteen"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-2xl dark:text-gray-300"
                  >
                    Дайго Сайто (Daigo Saito)
                  </label>
                </div>
              </li>
            </ul>
            <div className="pb-5"></div>

            <button
              data-modal-target="question-modal"
              data-modal-toggle="question-modal"
              onClick={() => setViewModal(!viewModal)}
              className="mx-auto rounded-3xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white"
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
