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
              Кто является основателем Дрифта?
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
                    Кейити Цучия (Keiichi Tsuchiya)
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
                    Цуёси Сиода (Tsuyoshi Shiota)
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
                    Рис Миллен (Rhys Millen)
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
                    Дайго Сайто (Daigo Saito)
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
          Дрифт, как особый стиль вождения, зародился в Японии в 1970-х годах. Основателем и первым
          популяризатором дрифта считается Кейити Цучия (Keiichi Tsuchiya), известный как
          &quot;Король дрифта&quot;. Он был профессиональным автогонщиком и первым стал использовать
          технику скольжения на горных дорогах Японии. Профессиональные соревнования по дрифту
          впервые были организованы в Японии в 1980-х годах. В 2000 году появилась первая
          официальная дрифт-серия — D1 Grand Prix, что сделало дрифт полноценной дисциплиной
          автоспорта. С тех пор дрифт приобрел мировую популярность и стал неотъемлемой частью
          культуры автоспорта.
        </p>
        <p className="pb-5">
          Дрифт в США стал популярен в 1990-х годах, и основоположником этого движения считается
          Цуёси Сиода (Tsuyoshi Shiota), который привез идею дрифта из Японии. Он организовал первые
          мероприятия по дрифту в США, привлекая внимание местных автолюбителей.
        </p>
        <p className="pb-5">
          ключевую роль в популяризации дрифта в Северной Америке сыграл Рис Миллен (Rhys Millen),
          профессиональный гонщик и каскадер родом из Новой Зеландии. Миллен первым из американских
          водителей принял дрифт как вид автоспорта и вскоре стал его &quot;лицом&quot; в США.
          Окончательное формирование дрифт-культуры в США связано с организацией Formula Drift
          (Formula D) — первой профессиональной дрифт-серии в Северной Америке, запущенной в 2004
          году. Formula Drift была создана для развития и продвижения дрифта как автоспортивной
          дисциплины в США и быстро получила широкое признание.
        </p>

        <p>
          Дайго Сайто (Daigo Saito) — японский гонщик, известный своей агрессивной манерой езды и
          способностью управлять мощными машинами в экстремальных условиях. Сайто стал первым
          гонщиком, выигравшим как D1 Grand Prix в Японии, так и Formula Drift в США, что принесло
          ему международную известность.
        </p>
        <p className="pb-5"></p>
      </div>
    </div>
  );
}
