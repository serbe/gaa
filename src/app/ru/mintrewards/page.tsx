'use client';
import Image from 'next/image';
import { useState } from 'react';
import { JumpButton } from '@/components/jumpButton';
import { Link } from '@/i18n/routing';

export default function Page() {
  const [check, setCheck] = useState(false);
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
                        National license
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
            <div className="flex flex-col object-right px-2 md:w-full">
              <div>
                <p className="place-self-center text-base font-semibold text-p1-darkgreen md:text-xl dark:text-p1-green">
                  Добавить лого спонсоров на награды
                </p>
              </div>

              <div className="inline-block h-96 resize snap-y snap-start place-self-start overflow-auto rounded border">
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
                          <div className="flex items-center">
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
                        <td className="p-2">
                          <div className="relative">
                            <Link href="/card" className="mx-auto justify-center">
                              <Image
                                width={500}
                                height={500}
                                src="/HeroNFT/RaceLads/RaceLads1.png"
                                alt="RaceLads"
                                className="-z-10 size-16 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                              />
                            </Link>
                          </div>
                        </td>
                        <td className="p-2">2025</td>
                        <td className="p-2">Россия</td>
                        <td className="p-2">RDS</td>
                        <td className="p-2">Категория</td>
                      </tr>
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
                        <td className="p-2">
                          <div className="relative">
                            <Link href="/card" className="mx-auto justify-center">
                              <Image
                                width={500}
                                height={500}
                                src="/HeroNFT/RaceLads/RaceLads1.png"
                                alt="RaceLads"
                                className="-z-10 size-16 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                              />
                            </Link>
                          </div>
                        </td>
                        <td className="p-2">2025</td>
                        <td className="p-2">Россия</td>
                        <td className="p-2">RDS</td>
                        <td className="p-2">Категория</td>
                      </tr>
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
                        <td className="p-2">
                          <div className="relative">
                            <Link href="/card" className="mx-auto justify-center">
                              <Image
                                width={500}
                                height={500}
                                src="/HeroNFT/RaceLads/RaceLads1.png"
                                alt="RaceLads"
                                className="-z-10 size-16 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                              />
                            </Link>
                          </div>
                        </td>
                        <td className="p-2">2025</td>
                        <td className="p-2">Россия</td>
                        <td className="p-2">RDS</td>
                        <td className="p-2">Категория</td>
                      </tr>
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
                        <td className="p-2">
                          <div className="relative">
                            <Link href="/card" className="mx-auto justify-center">
                              <Image
                                width={500}
                                height={500}
                                src="/HeroNFT/RaceLads/RaceLads1.png"
                                alt="RaceLads"
                                className="-z-10 size-16 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                              />
                            </Link>
                          </div>
                        </td>
                        <td className="p-2">2025</td>
                        <td className="p-2">Россия</td>
                        <td className="p-2">RDS</td>
                        <td className="p-2">Категория</td>
                      </tr>
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
                        <td className="p-2">
                          <div className="relative">
                            <Link href="/card" className="mx-auto justify-center">
                              <Image
                                width={500}
                                height={500}
                                src="/HeroNFT/RaceLads/RaceLads1.png"
                                alt="RaceLads"
                                className="-z-10 size-16 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                              />
                            </Link>
                          </div>
                        </td>
                        <td className="p-2">2025</td>
                        <td className="p-2">Россия</td>
                        <td className="p-2">RDS</td>
                        <td className="p-2">Категория</td>
                      </tr>
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
                        <td className="p-2">
                          <div className="relative">
                            <Link href="/card" className="mx-auto justify-center">
                              <Image
                                width={500}
                                height={500}
                                src="/HeroNFT/RaceLads/RaceLads1.png"
                                alt="RaceLads"
                                className="-z-10 size-16 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                              />
                            </Link>
                          </div>
                        </td>
                        <td className="p-2">2025</td>
                        <td className="p-2">Россия</td>
                        <td className="p-2">RDS</td>
                        <td className="p-2">Категория</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 flex-wrap-reverse gap-2 md:w-full md:grid-cols-4">
                <div className="flex items-center text-p1-white">
                  <div className="place-items-center p-2">
                    <Link
                      href="/mynfts"
                      className="inline-block w-full place-content-center rounded-xl border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Добавить логотип спонсора
                    </Link>
                  </div>
                </div>
                <div className="flex items-center text-p1-white"></div>
                <div className="flex items-center text-p1-white"></div>
                <div className="flex items-center text-p1-white">
                  <div className="place-items-center p-2">
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

                        <p className="mb-2 text-center text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-bold">&quot;Логотип спонсора&quot;</span>
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
                <p className="place-self-center text-base font-semibold text-p1-darkgreen md:text-xl dark:text-p1-green">
                  Добавь медиаконтент о победителе
                </p>

                <p className="place-self-center px-2 text-base font-semibold text-p1-darkgreen md:pb-2 md:text-xl dark:text-p1-green">
                  Cоздаём единую коллекцию наград
                </p>
                <p className="text-center text-xl text-p1-darkgreen md:text-left md:text-xl dark:text-p1-green">
                  Заполни все поля - эти метаданные будут храниться в блокчейне
                </p>
              </div>
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
              <div className="pb-2"></div>
              <p className="pt-5 text-left text-xl text-p1-darkgreen dark:text-p1-green">
                Сведения о победителе:
              </p>
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
              <button className="rounded-3xl border-2 border-p2-orange bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-amber-800 dark:bg-amber-950 dark:text-amber-300 dark:hover:border-amber-700 dark:hover:bg-amber-900 dark:hover:text-amber-300">
                Создать NFT Награду
              </button>
              <button className="mt-4 rounded-3xl border-2 border-p2-orange bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-amber-800 dark:bg-amber-950 dark:text-amber-300 dark:hover:border-amber-700 dark:hover:bg-amber-900 dark:hover:text-amber-300">
                Добавить в комплексное создание NFT
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
