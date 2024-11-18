'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [check, setCheck] = useState(false);

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between">
        <div className="px-2 text-2xl font-semibold text-p2-orange md:pt-2 md:text-4xl">
          Rewards NFT
        </div>
        <div className="px-2 text-2xl font-semibold text-p2-orange md:pt-2 md:text-4xl">
          Страница создания NFT
        </div>
      </div>
      <section className="flex flex-wrap rounded-3xl border-p2-orange bg-p1-white p-2 md:flex-nowrap md:border-4 md:shadow-lg">
        <div className="grid grid-cols-1 md:w-max md:grid-cols-2 md:gap-4">
          <div className="">
            <div className="text-center md:text-2xl lg:text-2xl">
              <div className="">
                <div className="flex flex-wrap px-2 pt-2 md:flex-nowrap">
                  <div className="">
                    <div className="text-center text-base font-semibold text-p1-darkgreen md:text-xl">
                      <p>Присоединяйтесь к нам</p>
                      <p>Создай NFT Награды</p>
                    </div>

                    <div className="z-10 rounded-3xl border-2 bg-amber-500 py-5 md:sticky md:top-16">
                      <div className="grid-1 grid flex-wrap-reverse gap-2 md:w-full md:grid-cols-3">
                        <div className="place-items-center p-2">
                          <Image
                            className="relative mb-4 inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                            width={1000}
                            height={1000}
                            src="/Hero/Rewards.png"
                            alt="Rewards"
                          />
                        </div>
                        <div className="m-1 place-items-center p-2">
                          <label
                            htmlFor="dropzone-file"
                            className="flex h-56 w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-gray-50 shadow-lg hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800"
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
                                <span className="font-semibold">
                                  Добавь медиаконтент: момент победы
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
                                <span className="font-semibold">
                                  Добавь медиаконтент: Победитель на подиуме награждения с наградой
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
                                <span className="font-semibold">
                                  Добавь файл: Финальный отчет / Протокол соревнования
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
                      </div>
                    </div>
                    <div className="md:w-full">
                      <p className="p-2 pt-8 text-base font-normal text-p1-darkgreen md:text-2xl">
                        Добавьте медиаконтент о победителе
                      </p>

                      <p className="p-2 text-base font-semibold text-p1-darkgreen md:text-2xl">
                        Созданные Вами NFT автоматически попадут в глобальную коллекцию GAA
                      </p>
                      <p className="p-2 text-base font-semibold text-p1-darkgreen md:text-2xl">
                        это единый сборник мирового сообщества
                      </p>
                      <p className="p-2 text-base font-semibold text-p1-darkgreen md:text-2xl">
                        Доступно для держателей NFT:
                      </p>
                      <p className="p-2 px-2 text-base font-semibold text-p1-darkgreen md:text-2xl">
                        Promoter license
                      </p>
                      <p className="p-2 px-2 text-base font-semibold text-p1-darkgreen md:text-2xl">
                        National license
                      </p>
                      <p className="p-2 text-base font-semibold text-p1-darkgreen md:text-2xl">
                        Global license
                      </p>
                      <p className="p-2 text-base font-semibold text-p1-darkgreen md:text-2xl">
                        Management GAA
                      </p>

                      <p className="px-2 pt-2 text-base font-semibold text-p1-darkgreen md:pb-72 md:text-2xl">
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
              <div>
                <p className="text-center text-xl text-p1-darkgreen md:text-left md:text-2xl">
                  Заполни все поля - эти метаданные будут храниться в блокчейне
                </p>
              </div>
              <div className="pb-5"></div>
              <div>
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
                    htmlFor="city"
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
                <div>
                  <label
                    htmlFor="event"
                    className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                  >
                    Официаллное название мероприятия
                  </label>
                  <input
                    type="text"
                    id="event"
                    className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                    placeholder="Официальное название мероприятия"
                    required
                  />
                </div>
                <div className="pb-2"></div>
                <div>
                  <label
                    htmlFor="event_category"
                    className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                  >
                    Официальное название соревнования/конкурса
                  </label>
                  <input
                    type="text"
                    id="competition"
                    className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                    placeholder="Официальное название соревнования/конкурса"
                    required
                  />
                </div>
                <div className="pb-2"></div>

                <form className="mx-auto max-w-2xl">
                  <label
                    htmlFor="license"
                    className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                  >
                    Категория: Соревнование/Конкурс
                  </label>
                  <select
                    id="license"
                    className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                    defaultValue={'DEFAULT'}
                  >
                    <option value="DEFAULT" disabled>
                      Выберите категорию: Соревнование / Конкурс
                    </option>
                    <option value="Competition">Соревнование</option>
                    <option value="Contest">Конкурс</option>
                  </select>
                </form>
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="nomination"
                  className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                >
                  Номинация
                </label>
                <input
                  type="text"
                  id="nomination"
                  className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                  placeholder="Номинация"
                  required
                />
              </div>

              <div className="pb-2"></div>
              <div className="w-full">
                <form className="mx-auto max-w-2xl">
                  <label
                    htmlFor="Reward_Category"
                    className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                  >
                    Категория награды
                  </label>
                  <select
                    id="Reward"
                    className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                    defaultValue={'DEFAULT'}
                  >
                    <option value="DEFAULT" disabled>
                      Выберите категорию награды
                    </option>
                    <option value="Cup">Кубок</option>
                    <option value="Medal">Медаль</option>
                    <option value="Diploma">Грамота участника</option>
                  </select>
                </form>
              </div>
              <div className="pb-2"></div>
              <div className="w-full">
                <form className="mx-auto max-w-2xl">
                  <label
                    htmlFor="license"
                    className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                  >
                    Занятое место
                  </label>
                  <select
                    id="Place_Victory"
                    className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                    defaultValue={'DEFAULT'}
                  >
                    <option value="DEFAULT" disabled>
                      Выберите занятое место
                    </option>
                    <option value="First_Place">1 место</option>
                    <option value="Second_Place">2 место</option>
                    <option value="Third_Place">3 место</option>
                    <option value="Member">Участник</option>
                  </select>
                </form>
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="Victory_day"
                  className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                >
                  День Победы
                </label>
                <input
                  type="date"
                  id="victory_day"
                  className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                  placeholder="День Победы"
                  required
                />
              </div>
              <div className="pb-2"></div>

              <p className="pt-5 text-left text-xl text-p1-darkgreen">Сведения о победителе:</p>

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
                  placeholder="Иванов Иван Иванович"
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
                  htmlFor="team"
                  className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                >
                  Название команды
                </label>
                <input
                  type="text"
                  id="team"
                  className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                  placeholder="Название команды"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="tag"
                  className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                >
                  Хэш-Тэг
                </label>
                <input
                  type="text"
                  id="tag"
                  className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                  placeholder="Хэш-Тэг"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="geolocation"
                  className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                >
                  Геолокация
                </label>
                <input
                  type="text"
                  id="geolocation"
                  className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                  placeholder="Геолокация"
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

              <button className="rounded-3xl border-2 border-p2-orange bg-p2-white2 px-20 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
                Создать NFT Награды
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
