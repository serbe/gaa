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
        QUIZ NFT
      </div>

      <div className="flex flex-row justify-center">
        <div className="md:w-3/5">
          <div className="place-items-center rounded-3xl border-p2-orange p-2 md:border-4">
            <div className="text-center font-serif text-base text-p1-darkgreen md:text-2xl dark:text-p2-orange">
              Какие из сервисов Web3, блокчейн, NFT Вы бы хотели увидеть в автоспорте и автокультуре
              в первую очередь?
            </div>

            <div className="pb-2 md:pb-5"></div>
            <ul className="w-full rounded-lg border border-gray-200 bg-p1-white font-medium text-gray-900 accent-p2-orange dark:border-gray-600 dark:bg-p1-deepdarkgreen dark:text-white">
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-eleven"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="size-5 border-gray-300 bg-gray-100 text-p1-green focus:ring-2 focus:ring-p1-green dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-p2-orange dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-eleven"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
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
                    className="size-5 border-gray-300 bg-gray-100 text-p1-green focus:ring-2 focus:ring-p1-green dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-p2-orange dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-twelve"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
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
                    className="size-5 border-gray-300 bg-gray-100 text-p1-green focus:ring-2 focus:ring-p1-green dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-p2-orange dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-thirteen"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
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
                    className="size-5 border-gray-300 bg-gray-100 text-p1-green focus:ring-2 focus:ring-p1-green dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-p2-orange dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-fourteen"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
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
                    className="size-5 border-gray-300 bg-gray-100 text-p1-green focus:ring-2 focus:ring-p1-green dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-p2-orange dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-fifteen"
                    className="ms-4 w-full py-3 font-serif text-base text-p1-darkgreen md:text-lg dark:text-gray-300"
                  >
                    Коллекция NFT с эксклюзивными условиями для держателей
                  </label>
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
