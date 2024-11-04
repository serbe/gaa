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
        <div className="w-3/5">
       
        </div>
      </div>

     

      <div className="flex flex-row pb-5">
        <div className="w-1/5"></div>
        <div className="w-3/5">
          <div className="my-5 place-items-center rounded-3xl border-4 border-p2-orange p-6">
            <div className="text-center font-serif text-2xl font-semibold text-p1-darkgreen">
Кто основал гонки на открытых колесах Формула-1?            </div>

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
Берни Экклстоун
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
Жан-Мари Балестр и FIA 
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
                  Король Англии Георг VI
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
Королева Англии Елизавета II
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
       <p className="pb-5">Берни Экклстоун — хотя он не стоял у истоков, Берни Экклстоун сделал Формулу-1 глобальной и коммерчески успешной. Он фактически реформировал спорт и стал влиятельной фигурой, сделав Ф1 массовым зрелищем и организовав трансляции гонок по всему миру.</p>
      <p className="pb-5 font-semibold">Жан-Мари Балестр и FIA — официально первые чемпионаты мира Формулы-1 были организованы Международной автомобильной федерацией (FIA) под руководством её президента Жана-Мари Балестра. Формула-1 как чемпионат мира была учреждена FIA в 1950 году.</p>
     <p className="pb-5">Формула-1 выросла из множества национальных и международных гонок 1930-х годов, когда автомобильные клубы Европы, включая британский RAC и итальянский ACI, стали проводить гонки на открытых трассах.</p>
      <p className="pb-5">некоторые считают, что Формула-1 образовалась благодаря владельцам команд, которые договорились о стандартизации правил и форматов гонок.</p>
      <p className="pb-5">король Англии Георга VI,  правил с 1936 года В 1952 году, через два года после первого чемпионата Формулы-1, Георг VI умер, и его старшая дочь, принцесса Елизавета, стала королевой Елизаветой II.</p>
      </div>


    </div>
    
  );
}
