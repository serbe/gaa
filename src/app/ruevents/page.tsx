'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [check, setCheck] = useState(false);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-row p-2">
        <div className="basis-1/6 text-center"></div>
        <div className="basis-1/6 text-center">
          <button className="mx-auto justify-center rounded-3xl drop-shadow-2xl hover:drop-shadow-none">
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/EventHero/ruNews.png"
              alt="runews"
            />
          </button>
        </div>
        <div className="basis-1/6 text-center">
          <button className="mx-auto justify-center rounded-3xl drop-shadow-2xl hover:drop-shadow-none">
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/EventHero/ruSchedule.png"
              alt="ruSchedule"
            />
          </button>
        </div>
        <div className="basis-1/6 text-center">
          <button className="mx-auto justify-center rounded-3xl drop-shadow-2xl hover:drop-shadow-none">
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/EventHero/ruResults.png"
              alt="ruresults"
            />
          </button>
        </div>
        <div className="basis-1/6 text-center">
          <button className="mx-auto justify-center rounded-3xl drop-shadow-2xl hover:drop-shadow-none">
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/EventHero/ruForm.png"
              alt="ruform"
            />
          </button>
        </div>
        <div className="basis-1/6 text-center"></div>
      </div>
      <div>новости</div>
      <div>Календарь</div>
      <div>Результаты</div>
      <div>Форма заявки</div>
      <div className="flex items-center">
        <input
          checked={check}
          id="checkbox"
          onChange={() => setCheck(!check)}
          type="checkbox"
          value=""
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        />
        <label
          htmlFor="checkbox"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Check me
        </label>
      </div>
      <div className="flex items-center rounded border border-gray-200 ps-4 dark:border-gray-700">
        <input
          id="bordered-radio-1"
          type="radio"
          value=""
          name="bordered-radio"
          className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        />
        <label
          htmlFor="bordered-radio-1"
          className="ms-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Одиночная радиокнопка
        </label>
      </div>
      <div>
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Несколько кнопок</h3>
        <ul className="w-48 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
          <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="list-radio-one"
                type="radio"
                value=""
                name="list-radio"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
              />
              <label
                htmlFor="list-radio-one"
                className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Кнопка раз
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
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
              />
              <label
                htmlFor="list-radio-two"
                className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Вторая кнопка
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
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
              />
              <label
                htmlFor="list-radio-three"
                className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Третья
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
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
              />
              <label
                htmlFor="list-radio-four"
                className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Последняя, четвертая
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
