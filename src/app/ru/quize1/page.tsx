export default function Page() {
  return (
    <div className="mx-auto max-w-7xl font-serif">
      <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
        <div className="px-2 text-xl font-semibold text-p2-orange md:pt-2 md:text-3xl">
          Racepoint
        </div>
        <div className="px-2 text-xl font-semibold text-p2-orange md:pt-2 md:text-3xl">QUIZ</div>
      </div>
      <div className="px-2 text-center text-xl font-semibold text-p2-orange md:pt-2 md:text-3xl">
        Автоспорт, автокультура
      </div>

      <div className="flex flex-row justify-center">
        <div className="md:w-3/5">
          <div className="place-items-center rounded-3xl border-p2-orange p-2 md:border-4">
            <div className="text-center font-serif text-base text-p1-darkgreen md:text-2xl dark:text-p2-orange">
              Какое направлениt автоспорта, автокультуры
              <p className="text-center font-serif">Вам больше всего нравится?</p>
            </div>
            <div className="pb-2 md:pb-5"></div>
            <ul className="w-full rounded-lg border border-gray-200 bg-p1-white font-medium text-gray-900 accent-p2-orange dark:border-gray-600 dark:bg-p1-deepdarkgreen dark:text-white">
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-one"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="size-5 border-gray-300 bg-gray-100 text-p1-green focus:ring-2 focus:ring-p1-green dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-p2-orange dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-one"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
                  >
                    Дрифт
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-two"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="size-5 border-gray-300 bg-gray-100 text-p1-green focus:ring-2 focus:ring-p1-green dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-p2-orange dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-two"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
                  >
                    Кузовные гонки
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-three"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="size-5 border-gray-300 bg-gray-100 text-p1-green focus:ring-2 focus:ring-p1-green dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-p2-orange dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-three"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
                  >
                    Открытые колеса
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-four"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="size-5 border-gray-300 bg-gray-100 text-p1-green focus:ring-2 focus:ring-p1-green dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-p2-orange dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-four"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
                  >
                    Драгрэйсинг
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-five"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="size-5 border-gray-300 bg-gray-100 text-p1-green focus:ring-2 focus:ring-p1-green dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-p2-orange dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-five"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
                  >
                    Стэнс
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-six"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="size-5 border-gray-300 bg-gray-100 text-p1-green focus:ring-2 focus:ring-p1-green dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-p2-orange dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-six"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
                  >
                    Ралли
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-seven"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="size-5 border-gray-300 bg-gray-100 text-p1-green focus:ring-2 focus:ring-p1-green dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-p2-orange dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-seven"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
                  >
                    Авто Звук
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-eight"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="size-5 border-gray-300 bg-gray-100 text-p1-green focus:ring-2 focus:ring-p1-green dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-p2-orange dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-eight"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
                  >
                    Олдтаймер
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-nine"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="size-5 border-gray-300 bg-gray-100 text-p1-green focus:ring-2 focus:ring-p1-green dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-p2-orange dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-nine"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
                  >
                    Симрэйсинг
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-ten"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="size-5 border-gray-300 bg-gray-100 text-p1-green focus:ring-2 focus:ring-p1-green dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-p2-orange dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-ten"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
                  >
                    Другое
                  </label>
                </div>
              </li>

              <li className="">
                <div>
                  <label
                    htmlFor="other"
                    className="block text-left text-lg font-medium text-p1-darkgreen dark:text-gray-300"
                  ></label>
                  <input
                    type="text"
                    id="other"
                    className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-lg text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder:text-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                    placeholder="Другое"
                    required
                  />
                </div>
              </li>
            </ul>
            <div className="pb-5"></div>

            <button className="inline-block rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p2-orange dark:hover:bg-amber-600 dark:hover:text-amber-100">
              Проголосовать
            </button>

            <div className="pb-5"></div>
          </div>
        </div>
      </div>

      <div className="pb-5"></div>
    </div>
  );
}
