'use client';
import { useFavicon } from '@/utils/hooks';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [check, setCheck] = useState(false);
  useFavicon('/Logo/letter.png ');

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <div className="px-2 text-center text-xl font-semibold text-p1-darkgreen md:pt-2 md:text-4xl dark:text-p1-green dark:hover:text-p1-cyan">
        Заявка на получение лицензии
      </div>
      <div className="flex flex-wrap place-content-center px-2 pt-5 md:flex-nowrap">
        <div className="w-4/5 min-w-96 rounded-3xl border-p1-gray bg-p1-white md:border-4 md:shadow-lg dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
          <div className="max-w-3xl place-self-center pt-5">
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
                src="/Licenses/Local.png"
                alt="Local"
              />
              <Image
                className="relative mb-4 inline-block p-2 md:w-max"
                width={100}
                height={150}
                src="/Licenses/Global.png"
                alt="National"
              />
            </div>
            <p className="px-2 text-center text-xl font-semibold text-p1-darkgreen md:pt-2 md:text-4xl dark:text-p1-green dark:hover:text-p1-cyan">
              Выберите лицензии, которые Вы желаете получить
            </p>

            <div className="pb-3"></div>

            <div className="flex items-center accent-p1-green">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
              >
                Лицензия Промоутера
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center accent-p1-green">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
              >
                Национальная Лицензия
              </label>
            </div>
            <div className="pb-3"></div>

            <div className="flex items-center accent-p1-green">
              <input
                checked={check}
                id="checkbox"
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
              >
                Глобальная лицензия
              </label>
            </div>

            <div className="pb-3"></div>

            <div>
              <label
                htmlFor="teamcountry"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
              >
                Страна
              </label>
              <input
                type="text"
                id="country"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-cyan dark:placeholder:text-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder=""
                required
              />
            </div>
            <div className="pb-3"></div>

            <div>
              <label
                htmlFor="city"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
              >
                Город
              </label>
              <input
                type="text"
                id="city"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-cyan dark:placeholder:text-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder=""
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="organization"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
              >
                Организация
              </label>
              <input
                type="text"
                id="organization"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-cyan dark:placeholder:text-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder=""
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
                onChange={() => {
                  setCheck(!check);
                }}
                type="checkbox"
                value=""
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
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
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
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
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
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
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
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
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
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
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
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
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
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
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
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
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
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
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
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
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
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
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
              >
                Симрэйсинг
              </label>
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="answerCategoryPromote"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
              >
                Другой вариант
              </label>
              <input
                type="text"
                id="organization"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-cyan dark:placeholder:text-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder=""
                required
              />
            </div>

            <div className="pb-3"></div>

            <p className="px-5 text-left text-xl font-semibold text-p1-darkgreen">
              Ваше отношение к автоспорту:
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
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
              >
                Я зритель
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
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
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
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
              >
                Я пилот
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
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
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
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
              >
                Я коллекционирую автомобили
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
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
              >
                Я коллекционирую NFT
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
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
              >
                Мой ребенок занимается автоспортом
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
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
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
                className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-base font-medium text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
              >
                У меня есть бизнес, связанный с автомобилями
              </label>
            </div>

            <div className="pb-3"></div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="answerwhattodo"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
              >
                Другой вариант
              </label>
              <input
                type="text"
                id="answerwhattodo"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-cyan dark:placeholder:text-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder=""
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="fullname"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
              >
                ФИО
              </label>
              <input
                type="text"
                id="organization"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-cyan dark:placeholder:text-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder=""
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="nicname"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
              >
                Никнейм
              </label>
              <input
                type="text"
                id="nicname"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-cyan dark:placeholder:text-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder=""
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="birthday"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
              >
                Дата рождения
              </label>
              <input
                type="date"
                id="birthday"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-cyan dark:placeholder:text-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder=""
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="skils"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
              >
                Навыки/Умения
              </label>
              <input
                type="text"
                id="skils"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-cyan dark:placeholder:text-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder=""
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="phone"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
              >
                Номер телефона
              </label>
              <input
                type="text"
                id="phone"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-cyan dark:placeholder:text-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder=""
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="email"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
              >
                Адрес электронной почты
              </label>
              <input
                type="text"
                id="email"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-cyan dark:placeholder:text-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder=""
                required
              />
            </div>

            <div className="pt-2">
              <label
                htmlFor="message"
                className="mx-5 mb-2 block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
              >
                Почему Вы хотите присоединиться к GAA?
              </label>
              <textarea
                id="message"
                rows={4}
                className="mx-5 block w-11/12 rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder=""
              ></textarea>
            </div>
            <div className="pb-5"></div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="site"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
              >
                Ваш сайт
              </label>
              <input
                type="text"
                id="site"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-cyan dark:placeholder:text-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder=""
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="Telegram"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
              >
                Telegram
              </label>
              <input
                type="text"
                id=""
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-cyan dark:placeholder:text-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder=""
                required
              />
            </div>

            <div className="pb-3"></div>
            <div>
              <label
                htmlFor="YouTube"
                className="block px-5 text-left text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
              >
                YouTube / RuTube
              </label>
              <input
                type="text"
                id="YouTube"
                className="mx-5 block w-11/12 rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-cyan dark:placeholder:text-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder=""
                required
              />
              <div className="pb-2"></div>

              <div>
                <div className="flex">
                  <div className="mx-5 block w-full items-center justify-center">
                    <label
                      htmlFor="dropzone-file"
                      className="flex size-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800"
                    >
                      <div className="flex flex-col items-center justify-center pb-6 pt-5">
                        <svg
                          className="mb-4 size-8 text-gray-500 dark:text-gray-400"
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
                <button className="mx-auto inline-block w-full place-content-center rounded-xl border-2 border-p1-green bg-p1-white px-10 py-8 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-darkgreen hover:text-p1-white dark:border-p1-cyan dark:bg-p1-green dark:text-p1-deepdarkgreen dark:hover:border-p1-green dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan">
                  Отправить заявку
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
