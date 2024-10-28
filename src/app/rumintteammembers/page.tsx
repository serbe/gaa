'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [value, setValue] = useState('0');
  const [check, setCheck] = useState(false);

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <div className="flex flex-wrap justify-between space-x-2 object-center px-2 pt-5 md:flex-nowrap">
        <div className="p-2 text-center text-4xl font-semibold text-p3-blue">
          Team&apos;s members NFT
        </div>
        <div className="p-2 text-center text-4xl font-semibold text-p3-blue">
          Страница создания NFT
        </div>
      </div>
      <section className="mb-2 flex w-full min-w-96 flex-wrap space-x-2 rounded-3xl border-4 border-p3-blue bg-p1-white object-center p-2 shadow-lg md:flex-nowrap">
        <div className="mb-4 w-full min-w-96 bg-p1-white">
          <div className="flex flex-row">
            <div className="mx-auto text-center md:text-xl lg:text-2xl">
              <div className="flex flex-wrap justify-center space-x-2 px-2 pt-5 md:flex-nowrap">
                <div>
                  <div className="text-center text-2xl font-semibold text-p1-darkgreen">
                    <p className="">Присоединяйтесь к нам</p>
                    <p className="">Создай Team&apos;s member NFT</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="m-1 place-items-center p-2">
                      <Image
                        className="relative mb-4 inline-block w-max rounded-3xl border-2 border-p3-blue shadow-lg"
                        width={1000}
                        height={1000}
                        src="/HeroNFT/Team's members/TeamMember1.png"
                        alt="TeamMember1"
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
                            <span className="font-semibold">Изображение персоны в картинке</span>
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
                            <span className="font-semibold">Фото участника команды</span>
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
                  </div>
                </div>
              </div>

              <div>
                <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 p-8 text-xl font-normal text-p1-darkgreen shadow-lg hover:bg-p3-blue hover:text-p1-white">
                  Сгенерировать изображение
                </button>

                <div>
                  <label
                    htmlFor="default-range"
                    className="mb-2 mt-5 block text-2xl font-medium text-gray-900 dark:text-white"
                  >
                    {value}
                  </label>
                  <input
                    id="default-range"
                    type="range"
                    min="1"
                    max="100"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="h-2 w-3/5 cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                  />
                </div>

                <p className="pb-8 pt-8 text-2xl font-normal text-p1-darkgreen">
                  Максимальное количество: 100 Team&apos;s member NFT за транзакцию
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
            </div>{' '}
          </div>
        </div>

        <div className="text-centre flex flex-row">
          <div className="place-content-center text-center text-p1-darkgreen md:text-xl lg:text-2xl">
            <div>
              <div className="flex w-full flex-col place-self-center p-5">
                <div>
                  <p className="text-left text-2xl text-p1-darkgreen">
                    Заполни все поля - эти метаданные будут храниться в блокчейне
                  </p>
                </div>
                <div className="pb-5"></div>
                <div>
                  <label
                    htmlFor="discipline"
                    className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                  >
                    Дисциплина
                  </label>
                  <input
                    type="text"
                    id="discipline"
                    className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                    placeholder="Дисциплина"
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

                <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p3-blue hover:text-p1-white">
                  Создать NFT Участника команды
                </button>
                <div className="pb-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
