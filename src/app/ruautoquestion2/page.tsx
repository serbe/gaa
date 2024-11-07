export default function Page() {
  return (
    <div className="mx-auto max-w-7xl font-serif">
      <div className="flex flex-row">
        <div className="w-full text-center">
          <div className="text-center text-6xl font-bold text-p2-orange">Racepoint</div>
          <div className="text-center text-4xl font-bold text-p2-orange">QUESTIONS</div>
          <div className="text-center text-4xl font-bold text-p2-orange">
            Автоспорт, автокультура
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="w-1/5"></div>
        <div className="w-3/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="w-1/5"></div>
        <div className="w-3/5">
          <div className="my-5 place-items-center rounded-3xl border-4 border-p2-orange p-6">
            <div className="text-center font-serif text-2xl font-semibold text-p1-darkgreen">
              Где прошла первая гонка Формулы-1?{' '}
            </div>

            <div className="pb-5"></div>

            <ul className="w-full rounded-lg border border-gray-200 bg-p1-white text-2xl font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
              <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="list-radio-eleven"
                    type="radio"
                    value=""
                    name="list-radio"
                    className="h-5 w-5 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-eleven"
                    className="ms-4 w-full py-3 font-serif text-2xl text-p1-darkgreen dark:text-gray-300"
                  >
                    на трассе Сильверстоун в Великобритании
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
                    className="h-5 w-5 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-twelve"
                    className="ms-4 w-full py-3 font-serif text-2xl text-p1-darkgreen dark:text-gray-300"
                  >
                    на трассе в Монако
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
                    className="h-5 w-5 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-thirteen"
                    className="ms-4 w-full py-3 font-serif text-2xl text-p1-darkgreen dark:text-gray-300"
                  >
                    на трассе в Германии - Нюрбургринг
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
                    className="h-5 w-5 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                  />
                  <label
                    htmlFor="list-radio-fourteen"
                    className="ms-4 w-full py-3 font-serif text-2xl text-p1-darkgreen dark:text-gray-300"
                  >
                    на автодроме «Индианаполис Мотор Спидвей», Индианаполис 500 — США
                  </label>
                </div>
              </li>
            </ul>
            <div className="pb-5"></div>

            <button className="mx-auto rounded-3xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Ответить
            </button>

            <div className="pb-5"></div>
          </div>
        </div>
      </div>
      <div>
        <p className="pb-5 font-semibold">
          Первое соревнование чемпионата мира Формулы-1 прошло на трассе Сильверстоун в
          Великобритании 13 мая 1950 года. Эта гонка, известная как Гран-при Великобритании, стала
          первым этапом чемпионата мира Формулы-1, организованного Международной автомобильной
          федерацией (FIA).
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
          стандартов безопасности гонки были переведены на более короткую и безопасную конфигурацию.
        </p>
        <p className="pb-5">
          Гонка, проводимая по собственным правилам, всё же была включена в зачёт чемпионата мира
          Формулы-1. Победа в этом соревновании, наряду с победами в гонках 24 часа Ле-Мана и
          Гран-при Монако, является составляющей для получения звания Тройной короны автоспорта
        </p>
        <p className="pb-5"></p>
      </div>
    </div>
  );
}
