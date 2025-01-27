'use client';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
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

function ModalWindow({
  viewModal,
  setViewModal,
  answer,
}: {
  viewModal: boolean;
  setViewModal: Dispatch<SetStateAction<boolean>>;
  answer: number;
}) {
  return (
    <div
      id="question-modal"
      data-modal-placement="center-center"
      tabIndex={-1}
      aria-hidden={viewModal}
      className={`fixed z-50 ${viewModal ? 'hidden' : ''} h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden backdrop-blur-sm md:inset-0`}
    >
      <div className="relative m-auto max-h-full w-full p-4 md:w-3/5">
        {/* <!-- Modal content --> */}
        <div className="relative rounded-lg border-4 border-p2-orange bg-p1-white shadow md:rounded-3xl dark:bg-p1-deepdarkgreen">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600">
            <p className="text-center font-serif text-base text-p1-darkgreen md:text-2xl dark:text-p1-cyan">
              Кто основал гонки Формула-1?
            </p>
            <button
              type="button"
              className="ms-auto inline-flex size-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="question-modal"
              onClick={() => {
                setViewModal(!viewModal);
              }}
            >
              <svg
                className="size-3"
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
            {answer == 2 ? <CorrectAnswer /> : <WrongAnswer />}
          </div>
          <div className="space-y-4 p-4 text-p1-darkgreen md:p-5 md:text-lg dark:text-p1-green">
            <p className="pb-5">
              Берни Экклстоун хотя и не стоял у истоков, сделал Формулу-1 глобальной и коммерчески
              успешной. Он фактически реформировал спорт и стал влиятельной фигурой, сделав Ф1
              массовым зрелищем и организовав трансляции гонок по всему миру.
            </p>
            <p className="pb-5 text-p1-cyan">
              Жан-Мари Балестр и FIA — официально первые чемпионаты мира Формулы-1 были организованы
              Международной автомобильной федерацией (FIA) под руководством её президента Жана-Мари
              Балестра. Формула-1 как чемпионат мира была учреждена FIA в 1950 году.
            </p>
            <p className="pb-5">
              Формула-1 выросла из множества национальных и международных гонок 1930-х годов, когда
              автомобильные клубы Европы, включая британский RAC и итальянский ACI, стали проводить
              гонки на открытых трассах.
            </p>
            <p className="pb-5">
              некоторые считают, что Формула-1 образовалась благодаря владельцам команд, которые
              договорились о стандартизации правил и форматов гонок.
            </p>
            <p className="pb-5">
              король Англии Георга VI, правил с 1936 года В 1952 году, через два года после первого
              чемпионата Формулы-1, Георг VI умер, и его старшая дочь, принцесса Елизавета, стала
              королевой Елизаветой II.
            </p>
          </div>
          {/* <!-- Modal footer --> */}
          <div className="items-center rounded-b border-t border-gray-200 p-4 md:p-5 dark:border-gray-600">
            <button
              data-modal-hide="question-modal"
              type="button"
              onClick={() => {
                setViewModal(!viewModal);
              }}
              className="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-p2-orange hover:text-p1-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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

      <div className="px-2 text-center text-xl font-semibold text-p2-orange md:pt-2 md:text-3xl">
        Автоспорт, автокультура
      </div>

      <div className="flex flex-row justify-center">
        <div className="md:w-3/5">
          <div className="place-items-center rounded-3xl border-p2-orange p-2 md:border-4">
            <div className="text-center font-serif text-base text-p1-darkgreen md:text-2xl dark:text-p2-orange">
              Кто основал гонки Формула-1?
            </div>
            <div className="pb-5"></div>
            <ul className="w-full rounded-lg border border-gray-200 bg-p1-white font-medium text-gray-900 accent-p2-orange dark:border-gray-600 dark:bg-p1-deepdarkgreen dark:text-white">
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div
                  className="flex items-center ps-3"
                  onClick={() => {
                    setAnswer(1);
                  }}
                >
                  <input
                    id="list-radio-eleven"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="size-5 border-gray-300 bg-gray-100 text-p2-orange dark:border-p2-orange dark:bg-gray-600"
                  />
                  <label
                    htmlFor="list-radio-eleven"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
                  >
                    Берни Экклстоун
                  </label>
                </div>
              </li>

              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div
                  className="flex items-center ps-3"
                  onClick={() => {
                    setAnswer(2);
                  }}
                >
                  <input
                    id="list-radio-twelve"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="size-5 border-gray-300 bg-gray-100 text-p2-orange dark:border-p2-orange dark:bg-gray-600"
                  />
                  <label
                    htmlFor="list-radio-twelve"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
                  >
                    Жан-Мари Балестр и FIA
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div
                  className="flex items-center ps-3"
                  onClick={() => {
                    setAnswer(3);
                  }}
                >
                  <input
                    id="list-radio-thirteen"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="size-5 border-gray-300 bg-gray-100 text-p2-orange dark:border-p2-orange dark:bg-gray-600"
                  />
                  <label
                    htmlFor="list-radio-thirteen"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
                  >
                    Король Англии Георг VI
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div
                  className="flex items-center ps-3"
                  onClick={() => {
                    setAnswer(4);
                  }}
                >
                  <input
                    id="list-radio-fourteen"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="size-5 border-gray-300 bg-gray-100 text-p2-orange dark:border-p2-orange dark:bg-gray-600"
                  />
                  <label
                    htmlFor="list-radio-fourteen"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
                  >
                    Королева Англии Елизавета II
                  </label>
                </div>
              </li>
            </ul>
            <div className="pb-5"></div>

            <button
              data-modal-target="question-modal"
              data-modal-toggle="question-modal"
              onClick={() => {
                setViewModal(!viewModal);
              }}
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
