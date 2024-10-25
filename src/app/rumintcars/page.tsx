'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [value, setValue] = useState('0');
  const [check, setCheck] = useState(false);

  return (
    <div className="font-serif">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p2-orange">Cars NFT</div>
        <div className="p-2 text-end text-4xl font-semibold text-p2-orange">
          Страница создания NFT
        </div>
      </div>
      <div className="m-5 rounded-3xl border-4 border-p2-orange text-center text-p1-darkgreen shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-x-5 p-2 text-2xl font-semibold text-p2-orange">
            Car NFT + Реальное Фото
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/Cars/Car.png"
              alt="Car"
            />
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-8 py-8 text-xl font-normal text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Сгенерировать изображение NFT
            </button>
            <div className="pb-5"></div>
            <div>
              <label
                htmlFor="default-range"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {value}
              </label>
              <input
                id="default-range"
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-2 w-3/5 cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
              />
            </div>
            <p className="p2 pt-8 text-2xl font-normal text-p1-darkgreen">
              Максимальное количество: 100 Cars NFT за транзакцию
            </p>
            <p className="p-2 text-2xl font-semibold text-p1-darkgreen">
              Созданные вами NFT автоматически попадут в глобальную коллекцию GAA
            </p>
            <p className="p-2 text-2xl font-semibold text-p1-darkgreen">
              это единый сборник мирового сообщества
            </p>
            <p className="p-5 text-2xl font-semibold text-p1-darkgreen">
              Если вы планируете раздать или продать свои NFT, вы можете сделать несколько NFT
              одновременно
            </p>
            <p className="p-5 text-2xl font-semibold text-p1-darkgreen">
              Это Ваш способ привлечения инвестиций
            </p>
          </div>
          <div className="p-2 text-4xl text-p2-orange">
            <p className="text-left text-2xl font-semibold text-p1-darkgreen">
              Присоединяйтесь к нам
            </p>
            <p className="pb-5 text-left text-2xl font-semibold text-p1-darkgreen">
              Создай NFT спортивного/раритетного автомобиля
            </p>
            <div className="flex w-full items-center justify-center p-5">
              <label
                htmlFor="dropzone-file"
                className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800"
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
                    <span className="font-semibold">Фото Автомобиля</span>
                  </p>

                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <p className="pt-5 text-left text-2xl text-p1-darkgreen">
              Заполни все поля - эти метаданные будут храниться в блокчейне
            </p>
            <div className="pb-5"></div>

            <div>
              <label
                htmlFor="car_category"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Категория Авто
              </label>
              <input
                type="text"
                id="car_category"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Дрифт/Dragster/Oldtimer/Stance/Sport/Rarity"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="first_name"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Самодельный или Оригональный
              </label>
              <input
                type="text"
                id="custom_orig"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Самодельный или Оригональный"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="full_name"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Полное имя
              </label>
              <input
                type="text"
                id="full_name"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Полное имя создателя/владельца"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="nic_name"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Ник-Имя
              </label>
              <input
                type="text"
                id="nic_name"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Ник-Имя"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="birthday"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Дата рождения
              </label>
              <input
                type="date"
                id="birthday"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Дата рождения"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="brand"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Марка авто
              </label>
              <input
                type="text"
                id="Brand"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Марка авто"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="model"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Модель авто
              </label>
              <input
                type="text"
                id="model"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Модель авто"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="year_made"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Год создания
              </label>
              <input
                type="text"
                id="contry"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Год создания"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="engine"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Двигатель
              </label>
              <input
                type="text"
                id="engine"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Двигатель"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="hp"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Лошадиных сил
              </label>
              <input
                type="text"
                id="contry"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Лошадиных сил"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="contry"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Страна
              </label>
              <input
                type="text"
                id="contry"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Страна"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="first_name"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Город
              </label>
              <input
                type="text"
                id="city"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Город"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-left text-sm font-medium text-p1-darkgreen dark:text-white"
              >
                Описание
              </label>
              <textarea
                id="message"
                rows={4}
                className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Описание"
              ></textarea>
            </div>

            <div className="pb-5"></div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-sm font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я согласен на обработку персональных данных.
              </label>
            </div>
            <div className="pb-8"></div>
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-20 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создать NFT Автомобиля
            </button>
            <div className="pb-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
