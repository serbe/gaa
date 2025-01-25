'use client';
import Image from 'next/image';
import { useState } from 'react';
import { JumpButton } from '@/components/jumpButton';

export default function Page() {
  const [check, setCheck] = useState(false);
  const jumpPoints = ['1', '2', '3'];
  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />
      <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between">
        <div className="text-p2-orange px-2 text-2xl font-semibold md:pt-2 md:text-4xl dark:text-amber-700">
          Rewards NFT
        </div>
        <div className="text-p2-orange px-2 text-2xl font-semibold md:pt-2 md:text-4xl dark:text-amber-700">
          Страница создания NFT
        </div>
      </div>
      <section className="border-p2-orange bg-p1-white dark:bg-p1-deepdarkgreen flex flex-wrap rounded-3xl p-2 md:flex-nowrap md:border-4 md:shadow-lg dark:border-amber-700">
        <div className="grid grid-cols-1 md:w-max md:grid-cols-2 md:gap-4">
          <div className="">
            <div className="text-center md:text-2xl lg:text-2xl">
              <div className="">
                <div className="flex flex-wrap px-2 md:flex-nowrap">
                  <div className="">
                    <div className="text-p1-darkgreen dark:text-p1-green text-center text-base font-semibold md:text-xl">
                      <p>Присоединяйся к нам</p>
                      <p>Создавай NFT Награды</p>
                    </div>
                    <div id="1"></div>
                    <div className="z-10 rounded-3xl border-2 bg-amber-500 md:sticky md:top-16 dark:border-amber-700 dark:bg-amber-950">
                      <div className="grid-1 grid flex-wrap-reverse gap-2 md:w-full md:grid-cols-2">
                        <div className="place-items-center p-2">
                          <Image
                            className="border-p2-orange relative mb-4 inline-block w-max rounded-3xl border-2 shadow-lg"
                            width={1000}
                            height={1000}
                            src="/Hero/Rewards.png"
                            alt="Rewards"
                          />
                        </div>

                        <div className="place-items-center p-2">
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
                                <span className="font-regular">
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
                        <div className="place-items-center p-2">
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
                                <span className="font-regular">
                                  Добавь медиаконтент: Победитель на подиуме награждения
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
                        <div className="place-items-center p-2">
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
                                <span className="font-regular">
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
                      <p className="md:pb-10"></p>
                      <p className="text-p1-darkgreen dark:text-p1-green place-self-center pt-2 text-base md:text-xl">
                        Доступно для держателей NFT:
                      </p>
                      <p className="text-p1-darkgreen dark:text-p1-green place-self-center px-2 text-base md:text-xl">
                        Promoter license
                      </p>
                      <p className="text-p1-darkgreen dark:text-p1-green place-self-center px-2 text-base md:text-xl">
                        National license
                      </p>
                      <p className="text-p1-darkgreen dark:text-p1-green place-self-center text-base md:text-xl">
                        Global license
                      </p>
                      <p className="text-p1-darkgreen dark:text-p1-green place-self-center text-base md:text-xl">
                        Management GAA
                      </p>
                      <p className="md:pb-96"></p>
                      <p className="md:pb-96"></p>
                      <p className="md:pb-96"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="2">
            <div className="flex flex-col object-right px-2 md:w-full">
              <div>
                <p className="text-p1-darkgreen dark:text-p1-green place-self-center text-base font-semibold md:text-xl">
                  Добавить лого спонсоров на награды
                </p>
              </div>
              <div className="grid-1 grid flex-wrap-reverse gap-2 md:w-full md:grid-cols-4">
                <div className="text-p1-white flex items-center">
                  <div className="place-items-center p-2">
                    <form className="mx-auto max-w-2xl">
                      <label
                        htmlFor="license"
                        className="text-p1-darkgreen dark:text-p1-green block w-full text-left text-sm font-medium"
                      >
                        Категория спонсора
                      </label>
                      <select
                        id="license"
                        className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border-2 border-gray-300 p-2.5 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
                        defaultValue={'DEFAULT'}
                      >
                        <option value="DEFAULT" disabled>
                          Категория спонсора
                        </option>
                        <option value="Title_Sponsor">Титульный спонсор</option>
                        <option value="General_Sponsor">Генеральный спонсор</option>
                        <option value="Official_Sponsor">Официальный спонсор</option>
                        <option value="Sponsor_participant">Спонсор участник</option>
                        <option value="Information_Sponsor">Информационный спонсор</option>
                        <option value="Barter_sponsor ">Бартерный спонсор</option>
                      </select>
                    </form>
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

                        <p className="mb-2 text-center text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-regular">&quot;Логотип спонсора&quot;</span>
                        </p>

                        <p className="mb-2 text-center text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                  </div>
                </div>
                <div className="text-p1-white flex items-center">
                  <div className="place-items-center p-2">
                    <form className="mx-auto max-w-2xl">
                      <label
                        htmlFor="license"
                        className="text-p1-darkgreen dark:text-p1-green block w-full text-left text-sm font-medium"
                      >
                        Категория спонсора
                      </label>
                      <select
                        id="license"
                        className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border-2 border-gray-300 p-2.5 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
                        defaultValue={'DEFAULT'}
                      >
                        <option value="DEFAULT" disabled>
                          Категория спонсора
                        </option>
                        <option value="Title_Sponsor">Титульный спонсор</option>
                        <option value="General_Sponsor">Генеральный спонсор</option>
                        <option value="Official_Sponsor">Официальный спонсор</option>
                        <option value="Sponsor_participant">Спонсор участник</option>
                        <option value="Information_Sponsor">Информационный спонсор</option>
                        <option value="Barter_sponsor ">Бартерный спонсор</option>
                      </select>
                    </form>
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

                        <p className="mb-2 text-center text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-regular">&quot;Логотип спонсора&quot;</span>
                        </p>

                        <p className="mb-2 text-center text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                  </div>
                </div>
                <div className="text-p1-white flex items-center">
                  <div className="place-items-center p-2">
                    <form className="mx-auto max-w-2xl">
                      <label
                        htmlFor="license"
                        className="text-p1-darkgreen dark:text-p1-green block w-full text-left text-sm font-medium"
                      >
                        Категория спонсора
                      </label>
                      <select
                        id="license"
                        className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border-2 border-gray-300 p-2.5 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
                        defaultValue={'DEFAULT'}
                      >
                        <option value="DEFAULT" disabled>
                          Категория спонсора
                        </option>
                        <option value="Title_Sponsor">Титульный спонсор</option>
                        <option value="General_Sponsor">Генеральный спонсор</option>
                        <option value="Official_Sponsor">Официальный спонсор</option>
                        <option value="Sponsor_participant">Спонсор участник</option>
                        <option value="Information_Sponsor">Информационный спонсор</option>
                        <option value="Barter_sponsor ">Бартерный спонсор</option>
                      </select>
                    </form>
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

                        <p className="mb-2 text-center text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-regular">&quot;Логотип спонсора&quot;</span>
                        </p>

                        <p className="mb-2 text-center text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                  </div>
                </div>
                <div className="text-p1-white flex items-center">
                  <div className="place-items-center p-2">
                    <form className="mx-auto max-w-2xl">
                      <label
                        htmlFor="license"
                        className="text-p1-darkgreen dark:text-p1-green block w-full text-left text-sm font-medium"
                      >
                        Категория спонсора
                      </label>
                      <select
                        id="license"
                        className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border-2 border-gray-300 p-2.5 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
                        defaultValue={'DEFAULT'}
                      >
                        <option value="DEFAULT" disabled>
                          Категория спонсора
                        </option>
                        <option value="Title_Sponsor">Титульный спонсор</option>
                        <option value="General_Sponsor">Генеральный спонсор</option>
                        <option value="Official_Sponsor">Официальный спонсор</option>
                        <option value="Sponsor_participant">Спонсор участник</option>
                        <option value="Information_Sponsor">Информационный спонсор</option>
                        <option value="Barter_sponsor ">Бартерный спонсор</option>
                      </select>
                    </form>
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

                        <p className="mb-2 text-center text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-regular">&quot;Логотип спонсора&quot;</span>
                        </p>

                        <p className="mb-2 text-center text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-p1-darkgreen dark:text-p1-green place-self-center text-base font-semibold md:text-xl">
                  Добавь медиаконтент о победителе
                </p>

                <p className="text-p1-darkgreen dark:text-p1-green place-self-center px-2 text-base font-semibold md:pb-2 md:text-xl">
                  Cоздаём единую коллекцию наград
                </p>
                <p className="text-p1-darkgreen dark:text-p1-green text-center text-xl md:text-left md:text-xl">
                  Заполни все поля - эти метаданные будут храниться в блокчейне
                </p>
              </div>
              <div className="pb-5"></div>
              <div>
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
                    className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
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
                    className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
                    placeholder="Город"
                    required
                  />
                </div>

                <div className="pb-2"></div>
                <div>
                  <label
                    htmlFor="event"
                    className="text-p1-darkgreen dark:text-p1-green block text-left text-sm font-medium"
                  >
                    Официальное название мероприятия
                  </label>
                  <input
                    type="text"
                    id="event"
                    className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
                    placeholder="Официальное название мероприятия"
                    required
                  />
                </div>
                <div className="pb-2"></div>

                <form className="mx-auto max-w-2xl">
                  <label
                    htmlFor="license"
                    className="text-p1-darkgreen dark:text-p1-green block w-full text-left text-sm font-medium"
                  >
                    Направление
                  </label>
                  <select
                    id="license"
                    className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border-2 border-gray-300 p-2.5 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
                    defaultValue={'DEFAULT'}
                  >
                    <option value="DEFAULT" disabled>
                      Выберите направления
                    </option>
                    <option value="Drift">Дрифт</option>
                    <option value="Dragracing">Драгрэйсинг</option>
                    <option value="Rally">Ралли</option>
                    <option value="OpenWheels">Открытые колеса</option>
                    <option value="TCR">Кузовные гонки</option>
                    <option value="Oldtimer">Олдтаймер</option>
                    <option value="Stance">Стэнс</option>
                    <option value="AutoSound">Авто Звук</option>
                    <option value="Simracing">Симрэйсинг</option>
                  </select>
                </form>

                <div className="pb-2"></div>
                <div>
                  <label
                    htmlFor="event_category"
                    className="text-p1-darkgreen dark:text-p1-green block text-left text-sm font-medium"
                  >
                    Официальное название соревнования/конкурса
                  </label>
                  <input
                    type="text"
                    id="competition"
                    className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
                    placeholder="Официальное название соревнования/конкурса"
                    required
                  />
                </div>
                <div className="pb-2"></div>

                <form className="mx-auto max-w-2xl">
                  <label
                    htmlFor="license"
                    className="text-p1-darkgreen dark:text-p1-green block w-full text-left text-sm font-medium"
                  >
                    Категория: Соревнование/Конкурс
                  </label>
                  <select
                    id="license"
                    className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border-2 border-gray-300 p-2.5 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
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
                  className="text-p1-darkgreen dark:text-p1-green block text-left text-sm font-medium"
                >
                  Номинация
                </label>
                <input
                  type="text"
                  id="nomination"
                  className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
                  placeholder="Номинация"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <div className="w-full">
                <form className="mx-auto max-w-2xl">
                  <label
                    htmlFor="Reward_Category"
                    className="text-p1-darkgreen dark:text-p1-green block w-full text-left text-sm font-medium"
                  >
                    Категория награды
                  </label>
                  <select
                    id="Reward"
                    className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border-2 border-gray-300 p-2.5 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
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
                    className="text-p1-darkgreen dark:text-p1-green block w-full text-left text-sm font-medium"
                  >
                    Занятое место
                  </label>
                  <select
                    id="Place_Victory"
                    className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border-2 border-gray-300 p-2.5 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
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
                  className="text-p1-darkgreen dark:text-p1-green block text-left text-sm font-medium"
                >
                  День Победы
                </label>
                <input
                  type="date"
                  id="victory_day"
                  className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
                  placeholder="День Победы"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <p className="text-p1-darkgreen dark:text-p1-green pt-5 text-left text-xl">
                Сведения о победителе:
              </p>
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
                  className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
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
                  className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
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
                  className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
                  placeholder="Дата рождения"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="team"
                  className="text-p1-darkgreen dark:text-p1-green block text-left text-sm font-medium"
                >
                  Название команды
                </label>
                <input
                  type="text"
                  id="team"
                  className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
                  placeholder="Название команды"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="tag"
                  className="text-p1-darkgreen dark:text-p1-green block text-left text-sm font-medium"
                >
                  Хэш-Тэг
                </label>
                <input
                  type="text"
                  id="tag"
                  className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
                  placeholder="Хэш-Тэг"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="geolocation"
                  className="text-p1-darkgreen dark:text-p1-green block text-left text-sm font-medium"
                >
                  Геолокация
                </label>
                <input
                  type="text"
                  id="geolocation"
                  className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
                  placeholder="Геолокация"
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
                  className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange block w-full rounded-lg border-2 border-gray-300 p-2.5 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Описание"
                ></textarea>
              </div>
              <div className="pb-5"></div>
              <div className="text-p1-white flex items-center">
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
                  className="text-p1-darkgreen dark:text-p1-green ms-2 text-sm font-medium"
                >
                  Я согласен на обработку персональных данных.
                </label>
              </div>
              <div className="pb-8"></div>
              <button className="border-p2-orange bg-p2-white2 text-p1-darkgreen hover:bg-p2-orange hover:text-p1-white rounded-3xl border-2 px-20 py-8 shadow-lg transition-all delay-75 duration-300 ease-in-out dark:border-amber-800 dark:bg-amber-950 dark:text-amber-300 dark:hover:border-amber-700 dark:hover:bg-amber-900 dark:hover:text-amber-300">
                Создать NFT Награду
              </button>
              <div className="pb-8"></div>
            </div>
          </div>
        </div>
      </section>

      <div id="3" className="pb-5"></div>
    </div>
  );
}
