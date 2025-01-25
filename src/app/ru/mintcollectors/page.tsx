'use client';
import Image from 'next/image';
import { useState } from 'react';
import { JumpButton } from '@/components/jumpButton';

export default function Page() {
  const [value, setValue] = useState('0');
  const [check, setCheck] = useState(false);
  const jumpPoints = ['1', '2', '3'];

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between">
        <div className="px-2 text-2xl font-semibold text-stone-500 md:pt-2 md:text-4xl">
          Collectors NFT
        </div>
        <div className="px-2 text-2xl font-semibold text-stone-500 md:pt-2 md:text-4xl">
          Страница создания NFT
        </div>
      </div>
      <section className="bg-p1-white dark:bg-p1-deepdarkgreen flex flex-wrap rounded-3xl border-stone-500 p-2 md:flex-nowrap md:border-4 md:shadow-lg dark:border-stone-700 dark:hover:border-stone-800">
        <div className="grid grid-cols-1 md:w-max md:grid-cols-2 md:gap-4">
          <div className="">
            <div className="text-center md:text-2xl lg:text-2xl">
              <div className="">
                <div className="flex flex-wrap px-2 pt-2 md:flex-nowrap">
                  <div className="">
                    <div className="text-p1-darkgreen dark:text-p1-green text-center text-base font-semibold md:text-xl">
                      <p>Присоединяйтесь к нам</p>
                      <p>Создай NFT Коллекционера</p>
                    </div>

                    <div className="z-10 rounded-3xl border-2 bg-stone-400 py-5 md:sticky md:top-16 dark:border-stone-700 dark:bg-stone-800">
                      <div className="grid-1 grid flex-wrap-reverse gap-2 md:w-full md:grid-cols-3">
                        <div className="place-items-center p-2">
                          <Image
                            className="relative mb-4 inline-block w-max rounded-3xl border-2 border-stone-500 shadow-lg"
                            width={1000}
                            height={1000}
                            src="/HeroNFT/Collectors/Collector1.png"
                            alt="Collector1"
                          />
                          <button className="bg-p2-white2 text-p1-darkgreen hover:text-p1-white w-full rounded-3xl border-2 border-stone-500 p-8 text-center text-base font-normal shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-stone-500 md:px-1 md:py-2 md:text-xs dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:hover:border-stone-700 dark:hover:bg-stone-900 dark:hover:text-stone-400">
                            Сгенерировать изображение
                          </button>
                        </div>
                        <div className="m-1 place-items-center p-2">
                          <label
                            htmlFor="dropzone-file"
                            className="flex h-56 w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-gray-50 shadow-lg hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800"
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
                                <span className="font-semibold">
                                  Изображение персоны в картинке
                                </span>
                              </p>

                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">Click to upload</span> or drag and
                                drop
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                              </p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                          </label>
                        </div>
                        <div className="m-1 place-items-center p-2">
                          <label
                            htmlFor="dropzone-file"
                            className="flex h-56 w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-gray-50 shadow-lg hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800"
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
                                <span className="font-semibold">Фото Персоны</span>
                              </p>

                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">Click to upload</span> or drag and
                                drop
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                              </p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                          </label>
                        </div>
                      </div>

                      <div className="md:w-full">
                        <div className="accent-p1-gray">
                          <label
                            htmlFor="default-range"
                            className="dark:text-p1-gray mt-5 mb-2 block text-2xl font-medium text-gray-900"
                          >
                            {value}
                          </label>
                          <input
                            id="default-range"
                            type="range"
                            min="1"
                            max="100"
                            value={value}
                            onChange={(e) => {
                              setValue(e.target.value);
                            }}
                            className="h-2 w-3/5 cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                          />
                        </div>
                      </div>
                    </div>
                    <div id="1" className="md:w-full">
                      <p className="text-p1-darkgreen dark:text-p1-green p-2 pt-8 text-base md:text-xl">
                        Максимальное количество: 100 Collectors NFT за транзакцию
                      </p>

                      <p className="text-p1-darkgreen dark:text-p1-green p-2 text-base md:text-xl">
                        Созданные вами NFT автоматически попадут в глобальную коллекцию GAA
                      </p>
                      <p className="text-p1-darkgreen dark:text-p1-green p-2 text-base md:text-xl">
                        это единый сборник мирового сообщества
                      </p>
                      <p className="text-p1-darkgreen dark:text-p1-green p-2 text-base md:text-xl">
                        Если вы планируете раздать или продать свои NFT, вы можете сделать несколько
                        NFT одновременно
                      </p>
                      <p className="text-p1-darkgreen dark:text-p1-green px-2 pt-2 text-base font-semibold md:pb-72 md:text-2xl">
                        Это Ваш способ привлечения инвестиций
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col object-right p-2 md:w-full">
              <div id="2">
                <p className="text-p1-darkgreen dark:text-p1-green text-center text-xl md:text-left md:text-2xl">
                  Заполни все поля - эти метаданные будут храниться в блокчейне
                </p>
              </div>
              <div className="pb-5"></div>
              <div>
                <label
                  htmlFor="full_name"
                  className="text-p1-darkgreen dark:text-p1-green block text-left text-sm font-medium"
                >
                  Полное имя
                </label>
                <input
                  type="text"
                  id="full_name"
                  className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p2-orange dark:focus:ring-p2-orange block w-full rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                  placeholder="Иванов Иван Иванович"
                  required
                />
              </div>
              <div className="pb-2"></div>

              <div>
                <label
                  htmlFor="nic_name"
                  className="text-p1-darkgreen dark:text-p1-green block text-left text-sm font-medium"
                >
                  Ник-Имя
                </label>
                <input
                  type="text"
                  id="nic_name"
                  className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p2-orange dark:focus:ring-p2-orange block w-full rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                  placeholder="Ник-Имя"
                  required
                />
              </div>
              <div className="pb-2"></div>

              <div>
                <label
                  htmlFor="birthday"
                  className="text-p1-darkgreen dark:text-p1-green block text-left text-sm font-medium"
                >
                  Дата рождения
                </label>
                <input
                  type="date"
                  id="birthday"
                  className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p2-orange dark:focus:ring-p2-orange block w-full rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                  placeholder="Дата рождения"
                  required
                />
              </div>
              <div className="pb-2"></div>

              <div>
                <label
                  htmlFor="contry"
                  className="text-p1-darkgreen dark:text-p1-green block text-left text-sm font-medium"
                >
                  Страна
                </label>
                <input
                  type="text"
                  id="contry"
                  className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p2-orange dark:focus:ring-p2-orange block w-full rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                  placeholder="Страна"
                  required
                />
              </div>
              <div className="pb-2"></div>

              <div>
                <label
                  htmlFor="city"
                  className="text-p1-darkgreen dark:text-p1-green block text-left text-sm font-medium"
                >
                  Город
                </label>
                <input
                  type="text"
                  id="city"
                  className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p2-orange dark:focus:ring-p2-orange block w-full rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                  placeholder="Город"
                  required
                />
              </div>
              <div className="pb-2"></div>

              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="message"
                  className="text-p1-darkgreen dark:text-p1-green mb-2 block text-left text-sm font-medium"
                >
                  Описание
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="bg-p2-white2 text-p1-darkgreen block w-full rounded-lg border-2 border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Описание"
                ></textarea>
              </div>
              <div className="pb-5"></div>
              <div className="flex items-center">
                <input
                  checked={check}
                  id="checkbox"
                  onChange={() => {
                    setCheck(!check);
                  }}
                  type="checkbox"
                  value=""
                  className="focus:ring-p1-cian text-p1-darkgreen dark:accent-p1-deepdarkgreen dark:focus:ring-p1-green h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                />
                <label
                  htmlFor="checkbox"
                  className="text-p1-darkgreen ms-2 text-sm font-medium dark:text-gray-300"
                >
                  Я согласен на обработку персональных данных.
                </label>
              </div>
              <div id="3" className="pb-8"></div>

              <button className="border-p1-darkgreen bg-p2-white2 text-p1-darkgreen hover:text-p1-white rounded-3xl border-2 px-20 py-8 shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-stone-500 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:hover:border-stone-700 dark:hover:bg-stone-900 dark:hover:text-stone-400">
                Создать NFT Коллекционера
              </button>
              <div className="pb-8"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="pb-5"></div>
    </div>
  );
}
