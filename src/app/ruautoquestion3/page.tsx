import Image from 'next/image';

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
              Тройная корона автоспорта — не официальный, но при этом достаточно ценный титул. Его
              присуждают пилоту, который на протяжении карьеры смог добиться абсолютных побед в трех
              гонках: 500 миль Индианаполиса, 24 часа Ле-Мана и Гран-при Монако. Это пока удалось
              только одному-единственному человеку! Кто этот человек?
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
                    Тацио Нуволари
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
                    Джим Кларк
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
                    Грэм Хилл{' '}
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
                    Брюс Макларен{' '}
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
        <p className="pb-5">
          Тацио Нуволари (Ле-Ман 1933, Гран-при Монако 1932, не хватает «Инди-500»)
        </p>
        <p className="pb-5">
          Джим Кларк (титул Ф-1 в 1963 и 1965, «Инди-500» 1965, не хватает Ле-Мана)
        </p>
        <p className="pb-5 font-semibold">
          Грэм Хилл — единственный в истории человек, выигравший все главные гонки мира. Англичанин
          пять раз побеждал в Монако (больше побед только у Айртона Сенны), в 1969-м объехал всех на
          овале Индианаполиса, а еще через три года поднялся на высшую ступеньку пьедестала в
          Ле-Мане. Грэм был приверженцем альтернативных правил «Тройной короны». Чемпионский титул
          F1 он ставил выше победы в Гран-при Монако. Но и с этим у него тоже все хорошо — на счету
          Хилла два выигранных чемпионата в сезонах 1962 и 1968 годов.
        </p>
        <p className="pb-5">
          Брюс Макларен (Ле-Ман 1966, Гран-при Монако 1961, не хватает «Инди-500»){' '}
        </p>
        <p className="pb-5">
          У команды McLaren славная история, но в длинном списке её достижений есть и особенное: так
          называемая Тройная корона. Только McLaren может похвастаться тем, что её машины и её
          гонщики в своё время побеждали в трёх самых престижных гонках мира – Гран При Монако, Indy
          500 и 24 часа Ле-Мана.
        </p>

        <p>
          в 1974-м Джонни Рутерфорд выиграл Indy 500 на машине McLaren 16C/D. В 1995-м триумфаторами
          в Ле-Мане были Янник Дальмас, Мизанори Секия и Джей-Джей Лехто, победившие в абсолютном
          зачёте на спорткаре McLaren F1 GTR. А в 1984-м Ален Прост добыл для McLaren первую победу
          в Монако – всего в истории команды таких побед было 15 – четыре из них на счету Проста, и
          пять раз эту гонку выиграл Айртон Сенна.
        </p>
        <p className="pb-5"></p>
      </div>
    </div>
  );
}
