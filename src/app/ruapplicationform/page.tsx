'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [check, setCheck] = useState(false);

  return (
    <div className="font-serif">
      <div className="pt-5 text-center text-6xl font-bold text-p1-darkgreen">Форма заявки</div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        by Global Automotive Association
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 col-start-2 w-full rounded-3xl border-4 border-p1-darkgreen text-center text-p1-darkgreen shadow-lg hover:border-p2-orange">
          <div className="pt-5">
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden p-2"
              width={100}
              height={150}
              src="/Licenses/Promoter.png"
              alt="Promoter"
            />
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden p-2"
              width={100}
              height={150}
              src="/Licenses/National.png"
              alt="National"
            />
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden p-2"
              width={100}
              height={150}
              src="/Licenses/Global.png"
              alt="National"
            />

            <p className="p-2 text-2xl font-semibold text-p1-darkgreen">
              Выберите лицензии, которые вы хотите получить
            </p>

            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Лицензия Промоутера
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Национальная Лицензия
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Глобальная лицензия
              </label>
            </div>

            <div className="pb-3"></div>

            <div>
              <label
                htmlFor="teamcountry"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Страна
              </label>
              <input
                type="text"
                id="country"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Страна"
                required
              />
            </div>
            <div className="pb-3"></div>

            <div>
              <label
                htmlFor="city"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Город
              </label>
              <input
                type="text"
                id="city"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Город"
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="organization"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Организация
              </label>
              <input
                type="text"
                id="organization"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Организация"
                required
              />
            </div>
            <div className="pb-3"></div>

            <p className="px-5 text-left text-xl font-semibold text-p1-darkgreen">
              Категория продвижения:
            </p>

            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Открытые колеса
              </label>
            </div>

            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Драгрэйсинг
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Дрифт
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Кузовные гонки серийных автомобилей (TCR)
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Ралли
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Олдтаймер
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Стэнс
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Спортивные автомобили
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Раритетные автомобили
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Автозвук
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Картинг
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Симрэйсинг
              </label>
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="answerCategoryPromote"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Ваш ответ
              </label>
              <input
                type="text"
                id="organization"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Ваш ответ"
                required
              />
            </div>

            <div className="pb-3"></div>

            <p className="px-5 text-left text-xl font-semibold text-p1-darkgreen">
              Чем Вы занимаетесь?
            </p>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я смотрю гонки по телевизору, в Интернете
              </label>
            </div>

            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я участник команды
              </label>
            </div>

            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я водитель, пилот
              </label>
            </div>

            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я промоутер
              </label>
            </div>

            <div className="pb-3"></div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я коллекционер автомобилей
              </label>
            </div>

            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я коллекционер NFT
              </label>
            </div>

            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Мои дети в автоспортивной команде
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я спонсор
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-xl font-medium text-p1-darkgreen dark:text-gray-300"
              >
                У меня есть бизнес по аренде автомобилей
              </label>
            </div>

            <div className="pb-3"></div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="answerwhattodo"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Ваш ответ
              </label>
              <input
                type="text"
                id="answerwhattodo"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Ваш ответ"
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="fullname"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                ФИО
              </label>
              <input
                type="text"
                id="organization"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Иванов Иван Иванович"
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="nicname"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Ник-Имя
              </label>
              <input
                type="text"
                id="nicname"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Ник-Имя"
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="birthday"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Дата рождения
              </label>
              <input
                type="date"
                id="birthday"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Дата рождения"
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="tag"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Хэш-Тэг
              </label>
              <input
                type="text"
                id="tag"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Хэш-Тэг"
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="skils"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Навыки/Умения
              </label>
              <input
                type="text"
                id="skils"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Навыки/Умения"
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="phone"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Номер телефона
              </label>
              <input
                type="text"
                id="phone"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Номер телефона"
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="email"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Адрес электронной почты
              </label>
              <input
                type="text"
                id="email"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="e-mail"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mx-5 mb-2 block text-left text-sm font-medium text-p1-darkgreen dark:text-white"
              >
                Описание причин по которым Вы хотите присоединиться к GAA
              </label>
              <textarea
                id="message"
                rows={4}
                className="mx-5 block w-11/12 rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Описание причин по которым Вы хотите присоединиться к GAA"
              ></textarea>
            </div>
            <div className="pb-5"></div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="site"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Интернет сайт
              </label>
              <input
                type="text"
                id="site"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Интернет сайт www://"
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="Telegram"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Telegram
              </label>
              <input
                type="text"
                id="Telegram"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Telegram"
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="YouTube"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                YouTube / RuTube
              </label>
              <input
                type="text"
                id="YouTube"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="YouTube"
                required
              />
              <div className="pb-2"></div>

              <div>
                <div className="flex">
                  <div className="mx-5 block w-full items-center justify-center">
                    <label
                      htmlFor="dropzone-file"
                      className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800"
                    >
                      <div className="flex flex-col items-center justify-center pb-6 pt-5">
                        <svg
                          className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Добавь свое фото</span>
                        </p>
                        <div className="pb-2"></div>

                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="pb-2"></div>

              <div className="grid">
                <button className="mx-auto w-11/12 justify-center rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-10 py-8 text-xl text-p1-darkgreen shadow-sm shadow-p1-cyan hover:border-p2-orange hover:bg-p2-orange hover:text-p1-white">
                  Отправить в GAA
                </button>
              </div>
            </div>
            <div className="p-2"></div>
          </div>
        </div>
      </div>
      <div className="pb-8"></div>
    </div>
  );
}
