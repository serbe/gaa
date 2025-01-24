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
        QUIZ NFT
      </div>

      <div className="flex flex-row justify-center">
        <div className="md:w-3/5">
          <div className="border-p2-orange place-items-center rounded-3xl p-2 md:border-4">
            <div className="text-p1-darkgreen dark:text-p2-orange text-center font-serif text-base md:text-2xl">
              Какие из сервисов Web3, блокчейн, NFT Вы бы хотели увидеть в автоспорте и автокультуре
              в первую очередь?
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
                    NFT награды для победителей, участников и членов команд
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
                    Коллекцию NFT Пилотов
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
                    Коллекцию NFT членов команд
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
                    Коллекцию NFT раритетных, спортивных автомобилей
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
                    Коллекция NFT с эксклюзивными условиями для держателей
                  </label>
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
