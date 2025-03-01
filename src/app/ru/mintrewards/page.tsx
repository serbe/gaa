'use client';
import Image from 'next/image';
import { useState } from 'react';
import { JumpButton } from '@/components/jumpButton';
import { Link } from '@/i18n/routing';

export default function Page() {
  const [check, setCheck] = useState(false);
  const [visibleArea1, setVisibleArea1] = useState(true);

  const [currentVisibleArea, setCurrentVisibleArea] = useState(2);
  const jumpPoints = ['1', '2', '3'];
  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />
      <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between">
        <div className="px-2 text-2xl font-semibold text-p2-orange md:pt-2 md:text-4xl dark:text-amber-700">
          Awards NFT
        </div>
        <div className="px-2 text-2xl font-semibold text-p2-orange md:pt-2 md:text-4xl dark:text-amber-700">
          Страница создания NFT
        </div>
      </div>
      <section className="flex flex-wrap rounded-3xl border-p2-orange bg-p1-white p-2 md:flex-nowrap md:border-4 md:shadow-lg dark:border-amber-700 dark:bg-p1-deepdarkgreen">
        <div className="grid grid-cols-1 md:w-max md:grid-cols-2 md:gap-4">
          <div className="">
            <div className="text-center md:text-2xl lg:text-2xl">
              <div className="">
                <div className="flex flex-wrap px-2 md:flex-nowrap">
                  <div className="">
                    <div className="text-center text-base font-semibold text-p1-darkgreen md:text-xl dark:text-p1-green">
                      <p>Присоединяйся к нам</p>
                      <p>Создавай NFT Награды</p>
                    </div>
                    <div id="1"></div>
                    <div className="z-10 rounded-3xl border-2 bg-amber-500 md:sticky md:top-16 dark:border-amber-700 dark:bg-amber-950">
                      <div className="grid grid-cols-1 flex-wrap-reverse gap-2 md:w-full md:grid-cols-2">
                        <div className="place-items-center p-2">
                          <Image
                            className="relative mb-4 inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
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
                                <span className="font-bold">
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
                                <span className="font-bold">
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
                                <span className="font-bold">
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
                      <p className="place-self-center pt-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green">
                        Доступно для держателей NFT:
                      </p>
                      <p className="place-self-center px-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green">
                        Promoter license
                      </p>
                      <p className="place-self-center px-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green">
                        Local license
                      </p>
                      <p className="place-self-center text-base text-p1-darkgreen md:text-xl dark:text-p1-green">
                        Global license
                      </p>
                      <p className="place-self-center text-base text-p1-darkgreen md:text-xl dark:text-p1-green">
                        Management GAA
                      </p>
                      <p className="md:pb-96"></p>
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
            <div className="flex flex-col object-right md:w-full">
              <div className="place-content-start py-1">
                <div className="w-full rounded-2xl border border-p1-green bg-p1-white text-xl text-p1-darkgreen shadow-lg dark:bg-p1-deepdarkgreen">
                  <details className="m-2" open>
                    <summary className="relative flex cursor-pointer justify-start py-2 text-p1-darkgreen transition-all duration-300 ease-in-out hover:pl-3 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
                      <div className="px-2">
                        <Image
                          className="size-10 transition-all duration-300 ease-in-out hover:scale-125"
                          width={480}
                          height={480}
                          src="/icon/traits_green.png"
                          alt="ph"
                        />
                      </div>
                      <div className="place-content-center px-4">Логотипы спонсоров</div>
                      <div className="place-content-center px-4">Лого</div>
                    </summary>
                    <div className="grid grid-cols-2 justify-between p-1 md:grid-cols-2 2xl:grid-cols-2">
                      <div className="flex justify-start space-x-1">
                        <div>
                          <button
                            data-target="area1"
                            className="mx-auto justify-start rounded transition-all delay-75 duration-100 ease-in-out hover:bg-p1-cyan/50 hover:shadow-lg focus:shadow-lg dark:shadow-p1-cyan dark:ring-p1-darkgreen dark:brightness-50 dark:hover:brightness-90"
                            onClick={() => {
                              setVisibleArea1(!visibleArea1);
                            }}
                          >
                            <Image
                              className="size-10 p-1"
                              width={480}
                              height={480}
                              src="/icon/2.png"
                              alt="bt2"
                            />
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <div className="inline-flex w-full justify-end rounded-md" role="group">
                          <div className="w-10">
                            <button
                              data-target="area2"
                              className="mx-auto justify-start rounded transition-all delay-75 duration-100 ease-in-out hover:bg-p1-cyan/50 hover:shadow-lg focus:bg-p1-cyan/50 focus:shadow-lg focus:hover:shadow-lg dark:shadow-p1-cyan dark:ring-p1-darkgreen dark:brightness-50 dark:hover:brightness-90 dark:focus:brightness-90"
                              id="toggleButton2"
                              onClick={() => {
                                setCurrentVisibleArea(2);
                              }}
                            >
                              <Image
                                className="size-10 p-1"
                                width={480}
                                height={480}
                                src="/icon/line.png"
                                alt="line"
                              />
                            </button>
                          </div>
                          <div className="w-10">
                            <button
                              data-target="area3"
                              className="mx-auto justify-start rounded transition-all delay-75 duration-100 ease-in-out hover:bg-p1-cyan/50 hover:shadow-lg focus:bg-p1-cyan/50 focus:shadow-lg focus:hover:shadow-lg dark:shadow-p1-cyan dark:ring-p1-darkgreen dark:brightness-50 dark:hover:brightness-90 dark:focus:brightness-90"
                              id="toggleButton3"
                              onClick={() => {
                                setCurrentVisibleArea(3);
                              }}
                            >
                              <Image
                                className="size-10 p-1"
                                width={480}
                                height={480}
                                src="/icon/16.png"
                                alt="bt16"
                              />
                            </button>
                          </div>
                          <div className="w-10">
                            <button
                              data-target="area4"
                              className="mx-auto justify-start rounded transition-all delay-75 duration-100 ease-in-out hover:bg-p1-cyan/50 hover:shadow-lg focus:bg-p1-cyan/50 focus:shadow-lg focus:hover:shadow-lg dark:shadow-p1-cyan dark:ring-p1-darkgreen dark:brightness-50 dark:hover:brightness-90 dark:focus:brightness-90"
                              id="toggleButton4"
                              onClick={() => {
                                setCurrentVisibleArea(4);
                              }}
                            >
                              <Image
                                className="size-10 p-1"
                                width={480}
                                height={480}
                                src="/icon/9.png"
                                alt="bt9"
                              />
                            </button>
                          </div>
                          <div className="w-10">
                            <button
                              data-target="area5"
                              className="mx-auto justify-start rounded transition-all delay-75 duration-100 ease-in-out hover:bg-p1-cyan/50 hover:shadow-lg focus:bg-p1-cyan/50 focus:shadow-lg focus:hover:shadow-lg dark:shadow-p1-cyan dark:ring-p1-darkgreen dark:brightness-50 dark:hover:brightness-90 dark:focus:brightness-90"
                              id="toggleButton5"
                              onClick={() => {
                                setCurrentVisibleArea(5);
                              }}
                            >
                              <Image
                                className="size-10 p-1"
                                width={480}
                                height={480}
                                src="/icon/4.png"
                                alt="bt4"
                              />
                            </button>
                          </div>
                          <div className="w-10">
                            <button
                              data-target="area6"
                              className="mx-auto justify-start rounded transition-all delay-75 duration-100 ease-in-out hover:bg-p1-cyan/50 hover:shadow-lg focus:bg-p1-cyan/50 focus:shadow-lg focus:hover:shadow-lg dark:shadow-p1-cyan dark:ring-p1-darkgreen dark:brightness-50 dark:hover:brightness-90 dark:focus:brightness-90"
                              id="toggleButton6"
                              onClick={() => {
                                setCurrentVisibleArea(6);
                              }}
                            >
                              <Image
                                className="size-10 p-1"
                                width={480}
                                height={480}
                                src="/icon/3.png"
                                alt="bt3"
                              />
                            </button>
                          </div>
                          <div className="w-10">
                            <button
                              data-target="area8"
                              className="mx-auto justify-start rounded transition-all delay-75 duration-100 ease-in-out hover:bg-p1-cyan/50 hover:shadow-lg focus:bg-p1-cyan/50 focus:shadow-lg focus:hover:shadow-lg dark:shadow-p1-cyan dark:ring-p1-darkgreen dark:brightness-50 dark:hover:brightness-90 dark:focus:brightness-90"
                              id="toggleButton6"
                              onClick={() => {
                                setCurrentVisibleArea(8);
                              }}
                            >
                              <Image
                                className="size-10 p-1"
                                width={480}
                                height={480}
                                src="/icon/1.png"
                                alt="bt1"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex max-w-full place-content-center">
                      {/* ... левый блок */}
                      <div
                        id="area1"
                        className={`w-6/12 justify-start ${visibleArea1 == true ? '' : 'hidden'}`}
                      >
                        <div className="inline-flex w-full justify-start rounded-md" role="group">
                          <div></div>
                        </div>

                        <div className="flex items-center text-p1-white">
                          <div className="place-items-center">
                            <form className="mx-auto max-w-2xl">
                              <label
                                htmlFor="license"
                                className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                              >
                                Категория спонсора
                              </label>
                              <select
                                id="license"
                                className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder:text-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
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
                              className="mt-5 flex h-56 w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-gray-50 shadow-lg hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800"
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

                                <p className="mb-2 text-center text-sm text-gray-500 dark:text-gray-400">
                                  <span className="font-bold">&quot;Логотип спонсора&quot;</span>
                                </p>

                                <p className="mb-2 text-center text-sm text-gray-500 dark:text-gray-400">
                                  <span className="font-semibold">Click to upload</span> or drag and
                                  drop
                                </p>
                                <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                              </div>
                              <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                            <div
                              className="inline-flex w-full justify-center rounded-md pt-1 shadow-sm"
                              role="group"
                            >
                              <button
                                data-target="#"
                                className="mt-5 inline-block w-max place-content-center rounded-l-xl border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                                id="toggleButton12"
                                onClick={() => {
                                  setCurrentVisibleArea(12);
                                }}
                              >
                                Лого спонсора
                              </button>
                              <Link
                                href="#"
                                className="mt-5 inline-block w-max place-content-center border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                +
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ... правый блок */}
                      <div className="relative flex w-full max-w-full grid-flow-row flex-wrap justify-center overflow-hidden">
                        {/* ...Строки Таблица */}
                        <div
                          id="area2"
                          className={`inline-block h-96 w-max resize-y snap-y  snap-start place-self-start overflow-auto rounded border ${currentVisibleArea == 2 ? '' : 'hidden'}`}
                        >
                          <div className="">
                            <div className="relative snap-start scroll-smooth">
                              <table className="text-left text-xl text-p1-darkgreen dark:text-p1-green">
                                <thead className="sticky top-0 z-20 border-b border-p1-green/30 bg-p1-white/100 text-xs uppercase text-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                                  <tr>
                                    <th scope="col" className="p-2 text-center">
                                      choose
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                      <div className="flex items-center">
                                        Logo
                                        <Link href="#"></Link>
                                      </div>
                                    </th>
                                    <th scope="col" className="p-2">
                                      <div className="flex items-center">
                                        Год
                                        <Link href="#">
                                          <svg
                                            className="ms-1.5 size-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                          </svg>
                                        </Link>
                                      </div>
                                    </th>
                                    <th scope="col" className="p-2">
                                      <div className="flex items-center">
                                        Страна
                                        <Link href="#">
                                          <svg
                                            className="ms-1.5 size-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                          </svg>
                                        </Link>
                                      </div>
                                    </th>
                                    <th scope="col" className="p-2">
                                      <div className="flex items-center">
                                        Мероприятие
                                        <Link href="#">
                                          <svg
                                            className="ms-1.5 size-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                          </svg>
                                        </Link>
                                      </div>
                                    </th>
                                    <th scope="col" className="p-2">
                                      <div className="flex items-center text-nowrap">
                                        Статус спонсора
                                        <Link href="#">
                                          <svg
                                            className="ms-1.5 size-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                          </svg>
                                        </Link>
                                      </div>
                                    </th>
                                    <th scope="col" className="p-2">
                                      <div className="flex items-center">
                                        Delete
                                        <Link href="#">
                                          <svg
                                            className="ms-1.5 size-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                          </svg>
                                        </Link>
                                      </div>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="z-10 w-full scroll-mt-4 place-self-start overflow-auto scroll-smooth text-lg">
                                  <tr className="border-b border-p1-green/30 bg-p1-white lining-nums hover:bg-p1-cyan/5 dark:border-p1-green dark:bg-p1-deepdarkgreen">
                                    <th scope="row" className="whitespace-nowrap p-2 font-medium">
                                      <div className="flex items-center">
                                        <input
                                          checked={check}
                                          id="checkbox"
                                          onChange={() => {
                                            setCheck(!check);
                                          }}
                                          type="checkbox"
                                          value=""
                                          className="size-6 rounded border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                                        />
                                        <label
                                          htmlFor="checkbox "
                                          className="ms-2 font-medium text-p1-darkgreen dark:text-p1-green"
                                        ></label>
                                      </div>
                                    </th>
                                    <td className="p-1">
                                      <div className="relative">
                                        <Link href="/card" className="mx-auto justify-center">
                                          <Image
                                            width={500}
                                            height={500}
                                            src="/Hero/Rewards.png"
                                            alt="Cup1"
                                            className="-z-10 size-16 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                          />
                                        </Link>
                                      </div>
                                    </td>
                                    <td className="p-1">2025</td>
                                    <td className="p-1">Россия</td>
                                    <td className="p-1">RDS</td>
                                    <td className="p-1">
                                      {' '}
                                      <form className="mx-auto max-w-2xl">
                                        <label
                                          htmlFor="license"
                                          className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                                        ></label>
                                        <select
                                          id="license"
                                          className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder:text-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
                                          defaultValue={'DEFAULT'}
                                        >
                                          <option value="DEFAULT" disabled>
                                            Категория спонсора
                                          </option>
                                          <option value="Title_Sponsor">Титульный спонсор</option>
                                          <option value="General_Sponsor">
                                            Генеральный спонсор
                                          </option>
                                          <option value="Official_Sponsor">
                                            Официальный спонсор
                                          </option>
                                          <option value="Sponsor_participant">
                                            Спонсор участник
                                          </option>
                                          <option value="Information_Sponsor">
                                            Информационный спонсор
                                          </option>
                                          <option value="Barter_sponsor ">Бартерный спонсор</option>
                                        </select>
                                      </form>
                                    </td>
                                    <td className="p-1 text-center">
                                      <Link
                                        href="#"
                                        className="inline-block w-max place-content-center rounded-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p2-red hover:bg-p2-red hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                                      >
                                        Delete
                                      </Link>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        {/* ... маленькие карточки  ... */}
                        <div id="area3" className={`${currentVisibleArea == 3 ? '' : 'hidden'}`}>
                          <div className="flex gap-4">
                            <div className="group relative h-[14.5rem] w-40 place-self-center overflow-hidden rounded-xl bg-white object-cover lining-nums shadow-lg transition-transform duration-100 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                              <div>
                                <path
                                  d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                                  fill="white"
                                ></path>

                                <div className="group invisible absolute right-1 top-1 z-10 inline-block duration-100 ease-in-out group-hover:visible group-hover:opacity-100">
                                  <Link
                                    href="#"
                                    className="z-50 grid w-6 place-content-center transition-all delay-75 duration-100 ease-in-out hover:scale-125"
                                  >
                                    <Image
                                      className="p-1"
                                      width={480}
                                      height={480}
                                      src="/Logo/heart-red.png"
                                      alt="Bordered avatar"
                                    />
                                  </Link>
                                </div>
                              </div>

                              <div className="relative">
                                <Link href="/card" className="mx-auto justify-center">
                                  <Image
                                    width={500}
                                    height={500}
                                    src="/Hero/Rewards.png"
                                    alt="Cup1"
                                    className="size-40 object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                                  />
                                </Link>
                              </div>

                              <div className="w-full bg-p2-white2/100 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl group-hover:shadow-p2-red dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
                                <div className="flex items-center justify-between">
                                  <div className="px-1 pt-1 text-left text-sm font-bold">Award</div>
                                  <div className="px-1 pt-1 text-left text-sm font-bold">
                                    # 12345
                                  </div>
                                </div>

                                <div className="px-1 pb-12 pt-1">
                                  <div className="flex items-center justify-between">
                                    <div className="text-center">
                                      <p className="text-center text-xs">Дрифт</p>
                                    </div>
                                  </div>
                                  <div className="space-x-4 text-left text-xs font-thin">
                                    Дата: 21.01.2025
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="absolute bottom-0 left-0 h-8 w-40 translate-y-full bg-p2-red text-center text-p2-white2 opacity-100 shadow-lg shadow-p2-red transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p2-red">
                                  <div
                                    className="inline-flex h-8 w-40 justify-center text-sm"
                                    role="group"
                                  >
                                    <Link
                                      href="#"
                                      className="grid w-full place-content-center rounded-bl-xl border border-p1-darkgreen bg-p2-orange text-center text-sm shadow-lg shadow-p2-red transition-all duration-100 ease-in-out hover:border-p1-cyan hover:bg-p2-red hover:text-p1-white hover:shadow-2xl hover:shadow-p2-red md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red dark:focus:text-p1-cyan"
                                    >
                                      <div className="grid grid-cols-2 items-center justify-between gap-2">
                                        <div className="text-base leading-3">Delete</div>
                                        <div className="text-center text-xs leading-3">
                                          <Image
                                            className="relative inline-block w-5 px-0.5"
                                            width={50}
                                            height={50}
                                            src="/icon/del.png"
                                            alt="del"
                                          />
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* ... средние карточки  ... */}
                        <div id="area4" className={`${currentVisibleArea == 4 ? '' : 'hidden'}`}>
                          <div className="flex gap-4">
                            <div className="group relative h-[21.5rem] w-60 place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-100 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                              <div>
                                <div className="group invisible absolute right-1 top-1 z-10 inline-block duration-100 ease-in-out group-hover:visible group-hover:opacity-100">
                                  <Link
                                    href="#"
                                    className="z-50 grid w-8 place-content-center transition-all delay-75 duration-100 ease-in-out hover:scale-125"
                                  >
                                    <Image
                                      className="p-1"
                                      width={480}
                                      height={480}
                                      src="/Logo/heart-red.png"
                                      alt="Bordered avatar"
                                    />
                                  </Link>
                                </div>
                              </div>

                              <div className="relative">
                                <Link href="/card" className="mx-auto justify-center">
                                  <Image
                                    width={500}
                                    height={500}
                                    src="/Hero/Rewards.png"
                                    alt="Cup1"
                                    className="size-60 object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                                  />
                                </Link>
                              </div>

                              <div className="w-full bg-p2-white2/100 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl group-hover:shadow-p2-red dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
                                <div className="flex items-center justify-between">
                                  <div className="px-1 pt-1 text-left text-base font-bold">
                                    Award
                                  </div>
                                  <div className="px-1 pt-1 text-left text-base font-bold">
                                    # 12345
                                  </div>
                                </div>

                                <div className="px-1 pb-12 pt-1">
                                  <div className="flex items-center justify-between">
                                    <div className="text-center">
                                      <p className="text-center text-base">Дрифт</p>
                                    </div>
                                  </div>
                                  <div className="space-x-4 text-left text-base font-thin">
                                    Дата: 21.01.2025
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="absolute bottom-0 left-0 h-10 w-40 translate-y-full bg-p2-red text-center text-p2-white2 opacity-100 shadow-lg shadow-p2-red transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p2-red">
                                  <div
                                    className="inline-flex h-10 w-60 justify-center text-base"
                                    role="group"
                                  >
                                    <Link
                                      href="#"
                                      className="grid w-full place-content-center rounded-bl-xl border border-p1-darkgreen bg-p2-orange text-center text-base shadow-lg shadow-p2-red transition-all duration-100 ease-in-out hover:border-p1-cyan hover:bg-p2-red hover:text-p1-white hover:shadow-2xl hover:shadow-p2-red md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red dark:focus:text-p1-cyan"
                                    >
                                      <div className="grid grid-cols-2 items-center justify-between gap-2">
                                        <div className="text-xl leading-3">Delete</div>
                                        <div className="text-center text-lg leading-3">
                                          <Image
                                            className="relative inline-block w-5 px-0.5"
                                            width={50}
                                            height={50}
                                            src="/icon/del.png"
                                            alt="del"
                                          />
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* ... большие карточки  ... */}
                        <div id="area5" className={`${currentVisibleArea == 5 ? '' : 'hidden'}`}>
                          <div className="flex gap-4">
                            <div className="group relative h-[28rem] w-80 place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-100 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                              <div>
                                <div className="group invisible absolute right-1 top-1 z-10 inline-block duration-100 ease-in-out group-hover:visible group-hover:opacity-100">
                                  <Link
                                    href="#"
                                    className="z-50 grid w-10 place-content-center transition-all delay-75 duration-100 ease-in-out hover:scale-125"
                                  >
                                    <Image
                                      className="p-1"
                                      width={480}
                                      height={480}
                                      src="/Logo/heart-red.png"
                                      alt="Bordered avatar"
                                    />
                                  </Link>
                                </div>
                              </div>

                              <div className="relative">
                                <Link href="/card" className="mx-auto justify-center">
                                  <Image
                                    width={500}
                                    height={500}
                                    src="/Hero/Rewards.png"
                                    alt="Cup1"
                                    className="size-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                                  />
                                </Link>
                              </div>

                              <div className="w-full bg-p2-white2/100 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl group-hover:shadow-p2-red dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
                                <div className="flex items-center justify-between">
                                  <div className="px-1 pt-1 text-left text-xl font-bold">Award</div>
                                  <div className="px-1 pt-1 text-left text-xl font-bold">
                                    # 12345
                                  </div>
                                </div>

                                <div className="px-1 pb-12 pt-1">
                                  <div className="flex items-center justify-between">
                                    <div className="text-center">
                                      <p className="text-center text-lg">Дрифт</p>
                                    </div>
                                  </div>
                                  <div className="space-x-4 text-left text-lg font-thin">
                                    Дата: 21.01.2025
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="absolute bottom-0 left-0 h-12 w-40 translate-y-full bg-p2-red text-center text-p2-white2 opacity-100 shadow-lg shadow-p2-red transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p2-red">
                                  <div
                                    className="inline-flex h-12 w-80 justify-center text-sm"
                                    role="group"
                                  >
                                    <Link
                                      href="#"
                                      className="grid w-full place-content-center rounded-bl-xl border border-p1-darkgreen bg-p2-orange text-center text-sm shadow-lg shadow-p2-red transition-all duration-100 ease-in-out hover:border-p1-cyan hover:bg-p2-red hover:text-p1-white hover:shadow-2xl hover:shadow-p2-red md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red dark:focus:text-p1-cyan"
                                    >
                                      <div className="grid grid-cols-2 items-center justify-between gap-2">
                                        <div className="text-2xl leading-3">Delete</div>
                                        <div className="text-center text-xl leading-3">
                                          <Image
                                            className="relative inline-block w-5 px-0.5"
                                            width={50}
                                            height={50}
                                            src="/icon/del.png"
                                            alt="del"
                                          />
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* ... самые большие карточки  ... */}
                        <div id="area6" className={`${currentVisibleArea == 6 ? '' : 'hidden'}`}>
                          <div className="flex gap-4">
                            <div className="group relative h-[39rem] w-[28rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-100 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                              <div>
                                <div className="group invisible absolute right-1 top-1 z-10 inline-block duration-100 ease-in-out group-hover:visible group-hover:opacity-100">
                                  <Link
                                    href="#"
                                    className="z-50 grid w-12 place-content-center transition-all delay-75 duration-100 ease-in-out hover:scale-125"
                                  >
                                    <Image
                                      className="p-1"
                                      width={1000}
                                      height={1000}
                                      src="/Logo/heart-red.png"
                                      alt="Bordered avatar"
                                    />
                                  </Link>
                                </div>
                              </div>

                              <div className="relative">
                                <Link href="/card" className="mx-auto justify-center">
                                  <Image
                                    width={500}
                                    height={500}
                                    src="/Hero/Rewards.png"
                                    alt="Cup1"
                                    className="size-[28rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                                  />
                                </Link>
                              </div>

                              <div className="w-full bg-p2-white2/100 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl group-hover:shadow-p2-red dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
                                <div className="flex items-center justify-between">
                                  <div className="px-1 pt-1 text-left text-3xl font-bold">
                                    Award
                                  </div>
                                  <div className="px-1 pt-1 text-left text-3xl font-bold">
                                    # 12345
                                  </div>
                                </div>

                                <div className="px-1 pb-12 pt-1">
                                  <div className="flex items-center justify-between">
                                    <div className="text-center">
                                      <p className="text-center text-3xl">Дрифт</p>
                                    </div>
                                  </div>
                                  <div className="space-x-4 text-left text-xl font-thin">
                                    Дата: 21.01.2025
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="absolute bottom-0 left-0 h-14 w-40 translate-y-full bg-p2-red text-center text-p2-white2 opacity-100 shadow-lg shadow-p2-red transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p2-red">
                                  <div
                                    className="inline-flex h-14 w-[28rem] justify-center text-sm"
                                    role="group"
                                  >
                                    <Link
                                      href="#"
                                      className="grid w-full place-content-center rounded-bl-xl border border-p1-darkgreen bg-p2-orange text-center text-sm shadow-lg shadow-p2-red transition-all duration-100 ease-in-out hover:border-p1-cyan hover:bg-p2-red hover:text-p1-white hover:shadow-2xl hover:shadow-p2-red md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red dark:focus:text-p1-cyan"
                                    >
                                      <div className="grid grid-cols-2 items-center justify-between gap-2">
                                        <div className="text-3xl leading-3">Delete</div>
                                        <div className="text-center text-xl leading-3">
                                          <Image
                                            className="relative inline-block w-5 px-0.5"
                                            width={50}
                                            height={50}
                                            src="/icon/del.png"
                                            alt="del"
                                          />
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* ...  карточки ,без подписи  ... */}
                        <div id="area8" className={`${currentVisibleArea == 8 ? '' : 'hidden'}`}>
                          <div className="flex gap-4">
                            <div className="group relative w-80 place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-100 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                              <div>
                                <div className="group invisible absolute right-1 top-1 z-10 inline-block duration-100 ease-in-out group-hover:visible group-hover:opacity-100">
                                  <Link
                                    href="#"
                                    className="z-50 grid w-10 place-content-center transition-all delay-75 duration-100 ease-in-out hover:scale-105"
                                  >
                                    <Image
                                      className="p-1"
                                      width={480}
                                      height={480}
                                      src="/Logo/heart-red.png"
                                      alt="Bordered avatar"
                                    />
                                  </Link>
                                </div>
                              </div>

                              <div className="relative">
                                <Link href="/card" className="mx-auto justify-center">
                                  <Image
                                    width={500}
                                    height={500}
                                    src="/Hero/Rewards.png"
                                    alt="Cup1"
                                    className="size-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                  />
                                </Link>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="absolute bottom-0 left-0 h-10 w-40 translate-y-full bg-p2-red text-center text-p2-white2 opacity-100 shadow-lg shadow-p2-red transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p2-red">
                                  <div
                                    className="inline-flex h-10 w-80 justify-center text-sm"
                                    role="group"
                                  >
                                    <Link
                                      href="#"
                                      className="grid w-full place-content-center rounded-bl-xl border border-p1-darkgreen bg-p2-orange text-center text-sm shadow-lg shadow-p2-red transition-all duration-100 ease-in-out hover:border-p1-cyan hover:bg-p2-red hover:text-p1-white hover:shadow-2xl hover:shadow-p2-red md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red dark:focus:text-p1-cyan"
                                    >
                                      <div className="grid grid-cols-2 items-center justify-between gap-2">
                                        <div className="text-3xl leading-3">Delete</div>
                                        <div className="text-center text-3xl leading-3">
                                          <Image
                                            className="relative inline-block w-5 px-0.5"
                                            width={50}
                                            height={50}
                                            src="/icon/del.png"
                                            alt="del"
                                          />
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-1 text-center lining-nums text-p1-darkgreen sm:px-2 dark:text-p1-green">
                      <div className="">
                        <div className="grid grid-cols-2 place-content-center gap-1 text-sm sm:grid-cols-2 sm:gap-2 sm:text-xl 2xl:grid-cols-3">
                          <div id="area8" className={`${currentVisibleArea == 8 ? '' : 'hidden'}`}>
                            <div className="flex gap-4">
                              <div className="group relative w-full place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-100 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                                <div>
                                  <div className="invisible absolute right-1 top-1 z-10 inline-block duration-100 ease-in-out group-hover:visible group-hover:opacity-100">
                                    <Link
                                      href="#"
                                      className="z-50 grid w-10 place-content-center transition-all delay-75 duration-100 ease-in-out hover:scale-105"
                                    >
                                      <Image
                                        className="p-1"
                                        width={480}
                                        height={480}
                                        src="/Logo/heart-red.png"
                                        alt="Bordered avatar"
                                      />
                                    </Link>
                                  </div>
                                </div>

                                <div className="relative">
                                  <Link href="/card" className="mx-auto justify-center">
                                    <Image
                                      width={500}
                                      height={500}
                                      src="/Hero/Rewards.png"
                                      alt="Cup1"
                                      className="size-max object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                    />
                                  </Link>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="absolute bottom-0 left-0 h-10 w-full translate-y-full bg-p2-red text-center text-p2-white2 opacity-100 shadow-lg shadow-p2-red transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p2-red">
                                    <div
                                      className="inline-flex h-10 w-full justify-center text-sm"
                                      role="group"
                                    >
                                      <Link
                                        href="#"
                                        className="grid w-full place-content-center rounded-bl-xl border border-p1-darkgreen bg-p2-orange text-center text-sm shadow-lg shadow-p2-red transition-all duration-100 ease-in-out hover:border-p1-cyan hover:bg-p2-red hover:text-p1-white hover:shadow-2xl hover:shadow-p2-red md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red dark:focus:text-p1-cyan"
                                      >
                                        <div className="grid grid-cols-2 items-center justify-between gap-2">
                                          <div className="text-xl leading-3">Delete</div>
                                          <div className="text-center text-3xl leading-3">
                                            <Image
                                              className="relative inline-block w-5 px-0.5"
                                              width={50}
                                              height={50}
                                              src="/icon/del.png"
                                              alt="del"
                                            />
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div id="area8" className={`${currentVisibleArea == 8 ? '' : 'hidden'}`}>
                            <div className="flex gap-4">
                              <div className="group relative w-full place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-100 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                                <div>
                                  <div className="invisible absolute right-1 top-1 z-10 inline-block duration-100 ease-in-out group-hover:visible group-hover:opacity-100">
                                    <Link
                                      href="#"
                                      className="z-50 grid w-10 place-content-center transition-all delay-75 duration-100 ease-in-out hover:scale-105"
                                    >
                                      <Image
                                        className="p-1"
                                        width={480}
                                        height={480}
                                        src="/Logo/heart-red.png"
                                        alt="Bordered avatar"
                                      />
                                    </Link>
                                  </div>
                                </div>

                                <div className="relative">
                                  <Link href="/card" className="mx-auto justify-center">
                                    <Image
                                      width={500}
                                      height={500}
                                      src="/Hero/Rewards.png"
                                      alt="Cup1"
                                      className="size-max object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                    />
                                  </Link>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="absolute bottom-0 left-0 h-10 w-full translate-y-full bg-p2-red text-center text-p2-white2 opacity-100 shadow-lg shadow-p2-red transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p2-red">
                                    <div
                                      className="inline-flex h-10 w-full justify-center text-sm"
                                      role="group"
                                    >
                                      <Link
                                        href="#"
                                        className="grid w-full place-content-center rounded-bl-xl border border-p1-darkgreen bg-p2-orange text-center text-sm shadow-lg shadow-p2-red transition-all duration-100 ease-in-out hover:border-p1-cyan hover:bg-p2-red hover:text-p1-white hover:shadow-2xl hover:shadow-p2-red md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red dark:focus:text-p1-cyan"
                                      >
                                        <div className="grid grid-cols-2 items-center justify-between gap-2">
                                          <div className="text-xl leading-3">Delete</div>
                                          <div className="text-center text-3xl leading-3">
                                            <Image
                                              className="relative inline-block w-5 px-0.5"
                                              width={50}
                                              height={50}
                                              src="/icon/del.png"
                                              alt="del"
                                            />
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="area8" className={`${currentVisibleArea == 8 ? '' : 'hidden'}`}>
                            <div className="flex gap-4">
                              <div className="group relative w-full place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-100 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                                <div>
                                  <div className="invisible absolute right-1 top-1 z-10 inline-block duration-100 ease-in-out group-hover:visible group-hover:opacity-100">
                                    <Link
                                      href="#"
                                      className="z-50 grid w-10 place-content-center transition-all delay-75 duration-100 ease-in-out hover:scale-105"
                                    >
                                      <Image
                                        className="p-1"
                                        width={480}
                                        height={480}
                                        src="/Logo/heart-red.png"
                                        alt="Bordered avatar"
                                      />
                                    </Link>
                                  </div>
                                </div>

                                <div className="relative">
                                  <Link href="/card" className="mx-auto justify-center">
                                    <Image
                                      width={500}
                                      height={500}
                                      src="/Hero/Rewards.png"
                                      alt="Cup1"
                                      className="size-max object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                    />
                                  </Link>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="absolute bottom-0 left-0 h-10 w-full translate-y-full bg-p2-red text-center text-p2-white2 opacity-100 shadow-lg shadow-p2-red transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p2-red">
                                    <div
                                      className="inline-flex h-10 w-full justify-center text-sm"
                                      role="group"
                                    >
                                      <Link
                                        href="#"
                                        className="grid w-full place-content-center rounded-bl-xl border border-p1-darkgreen bg-p2-orange text-center text-sm shadow-lg shadow-p2-red transition-all duration-100 ease-in-out hover:border-p1-cyan hover:bg-p2-red hover:text-p1-white hover:shadow-2xl hover:shadow-p2-red md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red dark:focus:text-p1-cyan"
                                      >
                                        <div className="grid grid-cols-2 items-center justify-between gap-2">
                                          <div className="text-xl leading-3">Delete</div>
                                          <div className="text-center text-3xl leading-3">
                                            <Image
                                              className="relative inline-block w-5 px-0.5"
                                              width={50}
                                              height={50}
                                              src="/icon/del.png"
                                              alt="del"
                                            />
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="area8" className={`${currentVisibleArea == 8 ? '' : 'hidden'}`}>
                            <div className="flex gap-4">
                              <div className="group relative w-full place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-100 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                                <div>
                                  <div className="invisible absolute right-1 top-1 z-10 inline-block duration-100 ease-in-out group-hover:visible group-hover:opacity-100">
                                    <Link
                                      href="#"
                                      className="z-50 grid w-10 place-content-center transition-all delay-75 duration-100 ease-in-out hover:scale-105"
                                    >
                                      <Image
                                        className="p-1"
                                        width={480}
                                        height={480}
                                        src="/Logo/heart-red.png"
                                        alt="Bordered avatar"
                                      />
                                    </Link>
                                  </div>
                                </div>

                                <div className="relative">
                                  <Link href="/card" className="mx-auto justify-center">
                                    <Image
                                      width={500}
                                      height={500}
                                      src="/Hero/Rewards.png"
                                      alt="Cup1"
                                      className="size-max object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                    />
                                  </Link>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="absolute bottom-0 left-0 h-10 w-full translate-y-full bg-p2-red text-center text-p2-white2 opacity-100 shadow-lg shadow-p2-red transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p2-red">
                                    <div
                                      className="inline-flex h-10 w-full justify-center text-sm"
                                      role="group"
                                    >
                                      <Link
                                        href="#"
                                        className="grid w-full place-content-center rounded-bl-xl border border-p1-darkgreen bg-p2-orange text-center text-sm shadow-lg shadow-p2-red transition-all duration-100 ease-in-out hover:border-p1-cyan hover:bg-p2-red hover:text-p1-white hover:shadow-2xl hover:shadow-p2-red md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red dark:focus:text-p1-cyan"
                                      >
                                        <div className="grid grid-cols-2 items-center justify-between gap-2">
                                          <div className="text-xl leading-3">Delete</div>
                                          <div className="text-center text-3xl leading-3">
                                            <Image
                                              className="relative inline-block w-5 px-0.5"
                                              width={50}
                                              height={50}
                                              src="/icon/del.png"
                                              alt="del"
                                            />
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </details>
                </div>
              </div>

              <div className="place-content-start py-1">
                <div className="w-full rounded-2xl border border-p1-green bg-p1-white text-xl text-p1-darkgreen shadow-lg dark:bg-p1-deepdarkgreen">
                  {/* Метаданные о мероприятии  */}

                  <details className="m-2">
                    <summary className="relative flex cursor-pointer justify-start py-2 text-p1-darkgreen transition-all duration-300 ease-in-out hover:pl-3 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
                      <div className="px-2">
                        <Image
                          className="size-10 transition-all duration-300 ease-in-out hover:scale-125"
                          width={480}
                          height={480}
                          src="/icon/traits_green.png"
                          alt="ph"
                        />
                      </div>
                      <div className="place-content-center px-4">Метаданные о мероприятии</div>
                      <div className="place-content-center px-4"></div>
                    </summary>
                    <div className="pt-1 text-center lining-nums text-p1-darkgreen sm:px-2 dark:text-p1-green">
                      <div className="group">
                        <p className="text-center text-xl text-p1-darkgreen md:text-left md:text-xl dark:text-p1-green">
                          Заполни все поля - эти метаданные будут храниться в блокчейне
                        </p>
                        <div className="pb-5"></div>

                        <div>
                          <div>
                            <label
                              htmlFor="contry"
                              className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                            >
                              Страна
                            </label>
                            <input
                              type="text"
                              id="contry"
                              className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder:text-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
                              placeholder="Страна"
                              required
                            />
                          </div>
                          <div className="pb-2"></div>

                          <div>
                            <label
                              htmlFor="city"
                              className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                            >
                              Город
                            </label>
                            <input
                              type="text"
                              id="city"
                              className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder:text-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
                              placeholder="Город"
                              required
                            />
                          </div>

                          <div className="pb-2"></div>
                          <div>
                            <label
                              htmlFor="event"
                              className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                            >
                              Официальное название мероприятия
                            </label>
                            <input
                              type="text"
                              id="event"
                              className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder:text-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
                              placeholder="Официальное название мероприятия"
                              required
                            />
                          </div>
                          <div className="pb-2"></div>

                          <form className="mx-auto max-w-2xl">
                            <label
                              htmlFor="license"
                              className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                            >
                              Направление
                            </label>
                            <select
                              id="license"
                              className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder:text-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
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
                              className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                            >
                              Официальное название соревнования/конкурса
                            </label>
                            <input
                              type="text"
                              id="competition"
                              className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder:text-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
                              placeholder="Официальное название соревнования/конкурса"
                              required
                            />
                          </div>
                          <div className="pb-2"></div>

                          <form className="mx-auto max-w-2xl">
                            <label
                              htmlFor="license"
                              className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                            >
                              Категория: Соревнование/Конкурс
                            </label>
                            <select
                              id="license"
                              className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder:text-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
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
                            className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                          >
                            Номинация
                          </label>
                          <input
                            type="text"
                            id="nomination"
                            className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder:text-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
                            placeholder="Номинация"
                            required
                          />
                        </div>
                        <div className="pb-2"></div>
                        <div className="w-full">
                          <form className="mx-auto max-w-2xl">
                            <label
                              htmlFor="Reward_Category"
                              className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                            >
                              Категория награды
                            </label>
                            <select
                              id="Reward"
                              className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder:text-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
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
                              className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                            >
                              Занятое место
                            </label>
                            <select
                              id="Place_Victory"
                              className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder:text-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
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
                            className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                          >
                            День Победы
                          </label>
                          <input
                            type="date"
                            id="victory_day"
                            className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder:text-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
                            placeholder="День Победы"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pb-2"></div>
                  </details>
                </div>
              </div>

              <div className="place-content-start py-1">
                <div className="w-full rounded-2xl border border-p1-green bg-p1-white text-xl text-p1-darkgreen shadow-lg dark:bg-p1-deepdarkgreen">
                  {/* Метаданные о победителе  */}

                  <details className="m-2">
                    <summary className="relative flex cursor-pointer justify-start py-2 text-p1-darkgreen transition-all duration-300 ease-in-out hover:pl-3 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
                      <div className="px-2">
                        <Image
                          className="size-10 transition-all duration-300 ease-in-out hover:scale-125"
                          width={480}
                          height={480}
                          src="/icon/traits_green.png"
                          alt="ph"
                        />
                      </div>
                      <div className="place-content-center px-4">Метаданные о победителе</div>
                    </summary>
                    <div className="pt-1 text-center lining-nums text-p1-darkgreen sm:px-2 dark:text-p1-green">
                      <div className="group">
                        <div className="pb-5"></div>

                        <div>
                          <label
                            htmlFor="full_name"
                            className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                          >
                            Полное имя
                          </label>
                          <input
                            type="text"
                            id="full_name"
                            className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder:text-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
                            placeholder="Иванов Иван Иванович"
                            required
                          />
                        </div>
                        <div className="pb-2"></div>
                        <div>
                          <label
                            htmlFor="nic_name"
                            className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                          >
                            Ник-Имя
                          </label>
                          <input
                            type="text"
                            id="nic_name"
                            className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder:text-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
                            placeholder="Ник-Имя"
                            required
                          />
                        </div>
                        <div className="pb-2"></div>
                        <div>
                          <label
                            htmlFor="birthday"
                            className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                          >
                            Дата рождения
                          </label>
                          <input
                            type="date"
                            id="birthday"
                            className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder:text-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
                            placeholder="Дата рождения"
                            required
                          />
                        </div>
                        <div className="pb-2"></div>
                        <div>
                          <label
                            htmlFor="team"
                            className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                          >
                            Название команды
                          </label>
                          <input
                            type="text"
                            id="team"
                            className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder:text-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
                            placeholder="Название команды"
                            required
                          />
                        </div>
                        <div className="pb-2"></div>
                        <div>
                          <label
                            htmlFor="tag"
                            className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                          >
                            Хэш-Тэг
                          </label>
                          <input
                            type="text"
                            id="tag"
                            className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder:text-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
                            placeholder="Хэш-Тэг"
                            required
                          />
                        </div>
                        <div className="pb-2"></div>
                        <div>
                          <label
                            htmlFor="geolocation"
                            className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                          >
                            Геолокация
                          </label>
                          <input
                            type="text"
                            id="geolocation"
                            className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder:text-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
                            placeholder="Геолокация"
                            required
                          />
                        </div>
                        <div className="pb-2"></div>
                        <div className="pb-2"></div>
                        <div>
                          <label
                            htmlFor="message"
                            className="mb-2 block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                          >
                            Описание
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
                            className="size-6 rounded border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                          />
                          <label
                            htmlFor="checkbox "
                            className="ms-2 font-medium text-p1-darkgreen dark:text-p1-green"
                          >
                            Я согласен на обработку персональных данных
                          </label>
                        </div>
                        <div className="pb-8"></div>
                      </div>
                    </div>
                    <div className="pb-2"></div>
                  </details>
                </div>
              </div>

              <div className="pb-8"></div>

              <button className="rounded-3xl border-2 border-p2-orange bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-amber-800 dark:bg-amber-950 dark:text-amber-300/50 dark:hover:border-amber-700 dark:hover:bg-amber-900 dark:hover:text-amber-300">
                Создать NFT Награду
              </button>
              <button
                data-target="area92"
                className="mt-4 rounded-3xl border-2 border-p2-orange bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-amber-800 dark:bg-amber-950 dark:text-amber-300/50 dark:hover:border-amber-700 dark:hover:bg-amber-900 dark:hover:text-amber-300"
                id="toggleButton92"
                onClick={() => {
                  setCurrentVisibleArea(92);
                }}
              >
                Добавить в комплексное создание NFT
              </button>
              <div className="pb-8"></div>
            </div>
          </div>
        </div>

        <div id="area92" className={`${currentVisibleArea == 92 ? '' : 'hidden'}`}>
          <div>
            <button
              data-target="area91"
              className="mt-4 rounded-3xl border-2 border-p2-orange bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-amber-800 dark:bg-amber-950 dark:text-amber-300 dark:hover:border-amber-700 dark:hover:bg-amber-900 dark:hover:text-amber-300"
              id="toggleButton91"
              onClick={() => {
                setCurrentVisibleArea(91);
              }}
            >
              Добавить в комплексное создание NFT
            </button>
          </div>
        </div>
      </section>

      <div id="3" className="pb-5"></div>
    </div>
  );
}
