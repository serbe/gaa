'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [check, setCheck] = useState(false);

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan px-2 text-center text-xl font-semibold md:pt-2 md:text-4xl">
        Форма заявки
        <p>by Global Automotive Association</p>
      </div>
      <div className="flex flex-wrap place-content-center px-2 pt-5 md:flex-nowrap">
        <div className="border-p1-gray bg-p1-white dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan w-4/5 min-w-96 rounded-3xl md:border-4 md:shadow-lg">
          <div className="place-self-center pt-5">
            <div className="place-self-center">
              <Image
                className="relative mb-4 inline-block p-2 md:w-max"
                width={100}
                height={150}
                src="/Licenses/Promoter.png"
                alt="Promoter"
              />
              <Image
                className="relative mb-4 inline-block p-2 md:w-max"
                width={100}
                height={150}
                src="/Licenses/National.png"
                alt="National"
              />
              <Image
                className="relative mb-4 inline-block p-2 md:w-max"
                width={100}
                height={150}
                src="/Licenses/Global.png"
                alt="National"
              />
            </div>
            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan px-2 text-center text-xl font-semibold md:pt-2 md:text-4xl">
              Выберите лицензии, которые Вы хотите получить
            </p>

            <div className="pb-3"></div>

            <div className="accent-p1-green flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Лицензия Промоутера
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="accent-p1-green flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Национальная Лицензия
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="accent-p1-green flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Глобальная лицензия
              </label>
            </div>

            <div className="pb-3"></div>

            <div>
              <label
                htmlFor="teamcountry"
                className="text-p1-darkgreen dark:text-p1-cyan block px-5 text-left text-sm font-medium"
              >
                Страна
              </label>
              <input
                type="text"
                id="country"
                className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:text-p1-cyan dark:focus:border-p2-orange dark:focus:ring-p2-orange mx-5 block w-11/12 rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
                placeholder="Страна"
                required
              />
            </div>
            <div className="pb-3"></div>

            <div>
              <label
                htmlFor="city"
                className="text-p1-darkgreen dark:text-p1-cyan block px-5 text-left text-sm font-medium"
              >
                Город
              </label>
              <input
                type="text"
                id="city"
                className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:text-p1-cyan dark:focus:border-p2-orange dark:focus:ring-p2-orange mx-5 block w-11/12 rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
                placeholder="Город"
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="organization"
                className="text-p1-darkgreen dark:text-p1-cyan block px-5 text-left text-sm font-medium"
              >
                Организация
              </label>
              <input
                type="text"
                id="organization"
                className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:text-p1-cyan dark:focus:border-p2-orange dark:focus:ring-p2-orange mx-5 block w-11/12 rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
                placeholder="Организация"
                required
              />
            </div>
            <div className="pb-3"></div>

            <p className="text-p1-darkgreen px-5 text-left text-xl font-semibold">
              Категория продвижения:
            </p>

            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Открытые колеса
              </label>
            </div>

            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Драгрэйсинг
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Дрифт
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Кузовные гонки серийных автомобилей (TCR)
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Ралли
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Олдтаймер
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Стэнс
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Спортивные автомобили
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Раритетные автомобили
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Автозвук
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Картинг
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Симрэйсинг
              </label>
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="answerCategoryPromote"
                className="text-p1-darkgreen dark:text-p1-cyan block px-5 text-left text-sm font-medium"
              >
                Ваш ответ
              </label>
              <input
                type="text"
                id="organization"
                className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:text-p1-cyan dark:focus:border-p2-orange dark:focus:ring-p2-orange mx-5 block w-11/12 rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
                placeholder="Ваш ответ"
                required
              />
            </div>

            <div className="pb-3"></div>

            <p className="text-p1-darkgreen px-5 text-left text-xl font-semibold">
              Чем Вы занимаетесь?
            </p>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Я смотрю гонки по телевизору, в Интернете
              </label>
            </div>

            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Я участник команды
              </label>
            </div>

            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Я водитель, пилот
              </label>
            </div>

            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Я промоутер
              </label>
            </div>

            <div className="pb-3"></div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Я коллекционер автомобилей
              </label>
            </div>

            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Я коллекционер NFT
              </label>
            </div>

            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Мои дети в автоспортивной команде
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                Я спонсор
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="text-p1-darkgreen focus:ring-p1-green dark:focus:ring-p1-green mx-5 h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
              />
              <label
                htmlFor="checkbox"
                className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan ms-2 text-base font-medium md:text-xl"
              >
                У меня есть бизнес по аренде автомобилей
              </label>
            </div>

            <div className="pb-3"></div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="answerwhattodo"
                className="text-p1-darkgreen dark:text-p1-cyan block px-5 text-left text-sm font-medium"
              >
                Ваш ответ
              </label>
              <input
                type="text"
                id="answerwhattodo"
                className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:text-p1-cyan dark:focus:border-p2-orange dark:focus:ring-p2-orange mx-5 block w-11/12 rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
                placeholder="Ваш ответ"
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="fullname"
                className="text-p1-darkgreen dark:text-p1-cyan block px-5 text-left text-sm font-medium"
              >
                ФИО
              </label>
              <input
                type="text"
                id="organization"
                className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:text-p1-cyan dark:focus:border-p2-orange dark:focus:ring-p2-orange mx-5 block w-11/12 rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
                placeholder="Иванов Иван Иванович"
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="nicname"
                className="text-p1-darkgreen dark:text-p1-cyan block px-5 text-left text-sm font-medium"
              >
                Ник-Имя
              </label>
              <input
                type="text"
                id="nicname"
                className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:text-p1-cyan dark:focus:border-p2-orange dark:focus:ring-p2-orange mx-5 block w-11/12 rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
                placeholder="Ник-Имя"
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="birthday"
                className="text-p1-darkgreen dark:text-p1-cyan block px-5 text-left text-sm font-medium"
              >
                Дата рождения
              </label>
              <input
                type="date"
                id="birthday"
                className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:text-p1-cyan dark:focus:border-p2-orange dark:focus:ring-p2-orange mx-5 block w-11/12 rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
                placeholder="Дата рождения"
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="tag"
                className="text-p1-darkgreen dark:text-p1-cyan block px-5 text-left text-sm font-medium"
              >
                Хэш-Тэг
              </label>
              <input
                type="text"
                id="tag"
                className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:text-p1-cyan dark:focus:border-p2-orange dark:focus:ring-p2-orange mx-5 block w-11/12 rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
                placeholder="Хэш-Тэг"
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="skils"
                className="text-p1-darkgreen dark:text-p1-cyan block px-5 text-left text-sm font-medium"
              >
                Навыки/Умения
              </label>
              <input
                type="text"
                id="skils"
                className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:text-p1-cyan dark:focus:border-p2-orange dark:focus:ring-p2-orange mx-5 block w-11/12 rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
                placeholder="Навыки/Умения"
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="phone"
                className="text-p1-darkgreen dark:text-p1-cyan block px-5 text-left text-sm font-medium"
              >
                Номер телефона
              </label>
              <input
                type="text"
                id="phone"
                className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:text-p1-cyan dark:focus:border-p2-orange dark:focus:ring-p2-orange mx-5 block w-11/12 rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
                placeholder="Номер телефона"
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="email"
                className="text-p1-darkgreen dark:text-p1-cyan block px-5 text-left text-sm font-medium"
              >
                Адрес электронной почты
              </label>
              <input
                type="text"
                id="email"
                className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:text-p1-cyan dark:focus:border-p2-orange dark:focus:ring-p2-orange mx-5 block w-11/12 rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
                placeholder="e-mail"
                required
              />
            </div>

            <div className="pt-2">
              <label
                htmlFor="message"
                className="text-p1-darkgreen dark:text-p1-cyan mx-5 mb-2 block text-left text-sm font-medium"
              >
                Описание причин по которым Вы хотите присоединиться к GAA
              </label>
              <textarea
                id="message"
                rows={4}
                className="bg-p2-white2 text-p1-darkgreen mx-5 block w-11/12 rounded-lg border-2 border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Описание причин по которым Вы хотите присоединиться к GAA"
              ></textarea>
            </div>
            <div className="pb-5"></div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="site"
                className="text-p1-darkgreen dark:text-p1-cyan block px-5 text-left text-sm font-medium"
              >
                Интернет сайт
              </label>
              <input
                type="text"
                id="site"
                className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:text-p1-cyan dark:focus:border-p2-orange dark:focus:ring-p2-orange mx-5 block w-11/12 rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
                placeholder="Интернет сайт www://"
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="Telegram"
                className="text-p1-darkgreen dark:text-p1-cyan block px-5 text-left text-sm font-medium"
              >
                Telegram
              </label>
              <input
                type="text"
                id="Telegram"
                className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:text-p1-cyan dark:focus:border-p2-orange dark:focus:ring-p2-orange mx-5 block w-11/12 rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
                placeholder="Telegram"
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="YouTube"
                className="text-p1-darkgreen dark:text-p1-cyan block px-5 text-left text-sm font-medium"
              >
                YouTube / RuTube
              </label>
              <input
                type="text"
                id="YouTube"
                className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:text-p1-cyan dark:focus:border-p2-orange dark:focus:ring-p2-orange mx-5 block w-11/12 rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
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
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
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

              <div className="grid md:px-5">
                <button className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-darkgreen hover:text-p1-white dark:border-p1-cyan dark:bg-p1-green dark:text-p1-deepdarkgreen dark:hover:border-p1-green dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan mx-auto inline-block w-full place-content-center rounded-xl border-2 px-10 py-8 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out">
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
