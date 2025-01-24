export default function Page() {
  return (
    <div className="mx-auto max-w-7xl font-serif">
      <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
        <div className="text-p2-orange px-2 text-xl font-semibold md:pt-2 md:text-3xl">
          Racepoint
        </div>
        <div className="text-p2-orange px-2 text-xl font-semibold md:pt-2 md:text-3xl">QUIZ</div>
      </div>
      <div className="text-p2-orange px-2 text-center text-xl font-semibold md:pt-2 md:text-3xl">
        Автоспорт, автокультура
      </div>

      <div className="flex flex-row justify-center">
        <div className="md:w-3/5">
          <div className="border-p2-orange place-items-center rounded-3xl p-2 md:border-4">
            <div className="text-p1-darkgreen dark:text-p2-orange text-center font-serif text-base md:text-2xl">
              Какое направлениt автоспорта, автокультуры
              <p className="text-center font-serif">Вам больше всего нравится?</p>
            </div>
            <div className="pb-2 md:pb-5"></div>
            <ul className="bg-p1-white accent-p2-orange dark:bg-p1-deepdarkgreen w-full rounded-lg border border-gray-200 font-medium text-gray-900 dark:border-gray-600 dark:text-white">
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-one"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-one"
                    className="text-p1-darkgreen ms-4 w-full py-3 font-serif text-base md:text-lg dark:text-gray-300"
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
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-two"
                    className="text-p1-darkgreen ms-4 w-full py-3 font-serif text-base md:text-lg dark:text-gray-300"
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
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-three"
                    className="text-p1-darkgreen ms-4 w-full py-3 font-serif text-base md:text-lg dark:text-gray-300"
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
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-four"
                    className="text-p1-darkgreen ms-4 w-full py-3 font-serif text-base md:text-lg dark:text-gray-300"
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
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-five"
                    className="text-p1-darkgreen ms-4 w-full py-3 font-serif text-base md:text-lg dark:text-gray-300"
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
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-six"
                    className="text-p1-darkgreen ms-4 w-full py-3 font-serif text-base md:text-lg dark:text-gray-300"
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
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-seven"
                    className="text-p1-darkgreen ms-4 w-full py-3 font-serif text-base md:text-lg dark:text-gray-300"
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
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-eight"
                    className="text-p1-darkgreen ms-4 w-full py-3 font-serif text-base md:text-lg dark:text-gray-300"
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
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-nine"
                    className="text-p1-darkgreen ms-4 w-full py-3 font-serif text-base md:text-lg dark:text-gray-300"
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
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-ten"
                    className="text-p1-darkgreen ms-4 w-full py-3 font-serif text-base md:text-lg dark:text-gray-300"
                  >
                    Другое
                  </label>
                </div>
              </li>

              <li className="">
                <div>
                  <label
                    htmlFor="other"
                    className="text-p1-darkgreen block text-left text-lg font-medium dark:text-gray-300"
                  ></label>
                  <input
                    type="text"
                    id="other"
                    className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:text-p1-white dark:focus:border-p2-orange dark:focus:ring-p2-orange block w-full rounded-lg border border-gray-300 p-3 text-lg dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
                    placeholder="Другое"
                    required
                  />
                </div>
              </li>
            </ul>
            <div className="pb-5"></div>

            <button className="border-p2-orange bg-p1-white text-p1-darkgreen hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p2-orange inline-block rounded-xl border-2 px-10 py-8 shadow-lg transition-all delay-75 duration-300 ease-in-out dark:hover:bg-amber-600 dark:hover:text-amber-100">
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
