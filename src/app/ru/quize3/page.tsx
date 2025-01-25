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
        NFT
      </div>

      <div className="flex flex-row justify-center">
        <div className="md:w-3/5">
          <div className="border-p2-orange place-items-center rounded-3xl p-2 md:border-4">
            <div className="text-p1-darkgreen dark:text-p2-orange text-center font-serif text-base md:text-2xl">
              Какое у вас отношение к NFT?
            </div>

            <div className="pb-2 md:pb-5"></div>
            <ul className="bg-p1-white accent-p2-orange dark:bg-p1-deepdarkgreen w-full rounded-lg border border-gray-200 font-medium text-gray-900 dark:border-gray-600 dark:text-white">
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-twentyone"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="text-p1-green focus:ring-p1-green dark:focus:ring-p2-orange h-5 w-5 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-twentyone"
                    className="text-p1-darkgreen ms-4 w-full py-3 font-serif text-base md:text-lg dark:text-gray-300"
                  >
                    У меня есть NFT
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
                    У меня есть криптокошелек, слышал(а) про NFT, но NFT нет.
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
                    Я слышал про NFT, но как приобрести, как создать NFT я не знаю.
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
                    Я не знаю, что такое NFT
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
                    Мне NFT не нужны и знать про NFT ничего не хочу
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
