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
              Какое отношение Вы имеете к автоспорту, автокультуре?
            </div>

            <div className="pb-2 md:pb-5"></div>
            <ul className="bg-p1-white accent-p2-orange dark:bg-p1-deepdarkgreen w-full rounded-lg border border-gray-200 font-medium text-gray-900 dark:border-gray-600 dark:text-white">
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-eleven"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-eleven"
                    className="text-p1-darkgreen ms-4 w-full py-3 font-serif text-base md:text-lg dark:text-gray-300"
                  >
                    Я зритель, автоспорт смотрю по телевизору, интернету
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-twelve"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-twelve"
                    className="text-p1-darkgreen ms-4 w-full py-3 font-serif text-base md:text-lg dark:text-gray-300"
                  >
                    Я Пилот автоспортивной команды
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-thirteen"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-thirteen"
                    className="text-p1-darkgreen ms-4 w-full py-3 font-serif text-base md:text-lg dark:text-gray-300"
                  >
                    Я участник автоспортивной команды
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-fourteen"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-fourteen"
                    className="text-p1-darkgreen ms-4 w-full py-3 font-serif text-base md:text-lg dark:text-gray-300"
                  >
                    Я организатор автоспортивных и автокультурных мероприятий
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-fifteen"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-fifteen"
                    className="text-p1-darkgreen ms-4 w-full py-3 font-serif text-base md:text-lg dark:text-gray-300"
                  >
                    У меня арендный бизнес спортивных автомобилей
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-sixteen"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-sixteen"
                    className="text-p1-darkgreen ms-4 w-full py-3 font-serif text-base md:text-lg dark:text-gray-300"
                  >
                    Я спонсор автоспортивных и автокультурных мероприятий
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-seventeen"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-seventeen"
                    className="text-p1-darkgreen ms-4 w-full py-3 font-serif text-base md:text-lg dark:text-gray-300"
                  >
                    Я коллекционирую автомобили, участник авто мероприятий
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-eighteen"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-eighteen"
                    className="text-p1-darkgreen ms-4 w-full py-3 font-serif text-base md:text-lg dark:text-gray-300"
                  >
                    Мои дети занимаются автоспортом
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-nineteen"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-nineteen"
                    className="text-p1-darkgreen ms-4 w-full py-3 font-serif text-base md:text-lg dark:text-gray-300"
                  >
                    Я коллекционирую NFT
                  </label>
                </div>
              </li>
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-twenty"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-twenty"
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
    </div>
  );
}
