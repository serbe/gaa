'use client';
import Image from 'next/image';
import Link from 'next/link';

import { JumpButton } from '@/components/jumpButton';

import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

export default function Home() {
  const jumpPoints = ['1', '2', '3'];
  return (
    <div className="mx-auto w-full font-serif">
      <JumpButton points={jumpPoints} />

      <section className="flex flex-wrap object-left px-2 md:flex-nowrap md:space-x-2 md:pt-5">
        <div className="rounded-3xl border-p2-orange bg-p1-white shadow-lg md:mb-4 md:w-1/12 md:border-4 dark:bg-p1-deepdarkgreen">
          <div className="flex flex-row">
            <div id="1" className="mx-auto text-left md:pt-2 md:text-xl lg:text-2xl">
              <Image
                className="h-10 w-10 rounded-full p-1 ring-2 ring-p1-green dark:ring-p1-darkgreen"
                width={1000}
                height={1000}
                src="/HeroNFT/RaceLads/RaceLads1.png"
                alt="Bordered avatar"
              />
            </div>
          </div>
        </div>

        <div className="mb-4 rounded-3xl border-p1-darkgreen bg-p1-white shadow-lg md:border-4 dark:border-p1-green dark:bg-p1-deepdarkgreen">
          <div className="mx-auto flex justify-end space-x-4 md:p-2 md:text-xl lg:text-2xl">
            <div>
              <a
                href="#"
                className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                Все NFT
              </a>
            </div>
            <div className="space-x-2">
              <a
                href="#2"
                className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                Мои NFT
              </a>
            </div>
            <div>
              <Image
                className="h-10 w-10 rounded-full p-1 ring-2 ring-p1-green dark:ring-p1-darkgreen"
                width={1000}
                height={1000}
                src="/HeroNFT/RaceLads/RaceLads1.png"
                alt="Bordered avatar"
              />
            </div>
          </div>
          <div className="text-centre flex flex-row">
            <div className="place-content-center p-2 text-center text-p1-darkgreen md:text-xl lg:text-2xl dark:text-p1-cyan">
              <div className="mx-auto flex max-w-md overflow-hidden rounded-md border-2 border-p1-green font-[sans-serif]">
                <input
                  type="email"
                  placeholder="Search Something..."
                  className="w-full bg-white px-4 py-3 text-sm text-gray-600 outline-none"
                />
                <button type="button" className="flex items-center justify-center bg-p1-green px-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192.904 192.904"
                    width="16px"
                    className="fill-white"
                  >
                    <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                  </svg>
                </button>
              </div>

              <div className="mt-2 rounded-3xl border-2 bg-p2-white2 p-2 text-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                <div className="px-2 text-xl font-semibold md:pt-2 md:text-3xl">
                  <div className="pt-2 text-left">Коллекции</div>
                  <div className="w-4/5 snap-x space-x-1 overflow-x-auto rounded-3xl md:h-3/5 md:place-self-start">
                    <Swiper
                      autoplay={{
                        delay: 5500,
                        pauseOnMouseEnter: true,
                      }}
                      direction={'horizontal'}
                      spaceBetween={1}
                      slidesPerView={8}
                      mousewheel={true}
                      modules={[Autoplay, Mousewheel, Navigation, Pagination]}
                      navigation={true}
                      pagination={{
                        clickable: true,
                      }}
                      loop={false}
                      className="mySwyper"
                    >
                      <SwiperSlide>
                        <div className="basis-3/5 scale-95 duration-500">
                          <Link href={'#'} className="mx-auto justify-center">
                            <div className="group relative h-96 w-52 justify-self-center overflow-hidden rounded-3xl border border-gray-300">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-p1-green">
                                RaceLads
                              </h5>
                              <img
                                src="/HeroNFT/RaceLads/RaceLads1.png"
                                alt="RaceLads1"
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
                              />

                              <div className="absolute inset-0 flex -translate-y-28 transform items-end justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="basis-3/5 scale-95 duration-500">
                          <Link href={'#'} className="mx-auto justify-center">
                            <div className="group relative h-96 w-52 justify-self-center overflow-hidden rounded-3xl border border-gray-300">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-p1-green">
                                RaceLads
                              </h5>
                              <img
                                src="/HeroNFT/Drivers/Driver4.png"
                                alt="Driver4"
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
                              />

                              <div className="absolute inset-0 flex -translate-y-28 transform items-end justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="basis-3/5 scale-95 duration-500">
                          <Link href={'#'} className="mx-auto justify-center">
                            <div className="group relative h-96 w-52 justify-self-center overflow-hidden rounded-3xl border border-gray-300">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-p1-green">
                                Team&apos;s Members
                              </h5>
                              <img
                                src="/HeroNFT/Team's members/TeamMember1.png"
                                alt="TeamMember1"
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
                              />

                              <div className="absolute inset-0 flex -translate-y-28 transform items-end justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="basis-3/5 scale-95 duration-500">
                          <Link href={'#'} className="mx-auto justify-center">
                            <div className="group relative h-96 w-52 justify-self-center overflow-hidden rounded-3xl border border-gray-300">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-p1-green">
                                Collectors
                              </h5>
                              <img
                                src="/HeroNFT/Collectors/Collector1.png"
                                alt="Collector1"
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
                              />

                              <div className="absolute inset-0 flex -translate-y-28 transform items-end justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="basis-3/5 scale-95 duration-500">
                          <Link href={'#'} className="mx-auto justify-center">
                            <div className="group relative h-96 w-52 justify-self-center overflow-hidden rounded-3xl border border-gray-300">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-p1-green">
                                Cars
                              </h5>
                              <img
                                src="/Cars/Car.png"
                                alt="Car"
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
                              />

                              <div className="absolute inset-0 flex -translate-y-28 transform items-end justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="basis-3/5 scale-95 duration-500">
                          <Link href={'#'} className="mx-auto justify-center">
                            <div className="group relative h-96 w-52 justify-self-center overflow-hidden rounded-3xl border border-gray-300">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-p1-green">
                                CustomLads
                              </h5>
                              <img
                                src="/HeroNFT/CustomLads/CustomLads1.png"
                                alt="CustomLads1"
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
                              />

                              <div className="absolute inset-0 flex -translate-y-28 transform items-end justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="basis-3/5 scale-95 duration-500">
                          <Link href={'#'} className="mx-auto justify-center">
                            <div className="group relative h-96 w-52 justify-self-center overflow-hidden rounded-3xl border border-gray-300">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-p1-green">
                                Awards NFT
                              </h5>
                              <img
                                src="/Hero/Rewards.png"
                                alt="Rewards"
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
                              />

                              <div className="absolute inset-0 flex -translate-y-28 transform items-end justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="basis-3/5 scale-95 duration-500">
                          <Link href={'#'} className="mx-auto justify-center">
                            <div className="group relative h-96 w-52 justify-self-center overflow-hidden rounded-3xl border border-gray-300">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-p1-green">
                                Лицензии
                              </h5>
                              <img
                                src="/Licenses/Promoter Lic.png"
                                alt="PromoterLic"
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
                              />

                              <div className="absolute inset-0 flex -translate-y-28 transform items-end justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                    </Swiper>

                    <div className="pb-2 md:pb-5"></div>
                  </div>
                  <div className="mt-2 grid grid-cols-1 gap-2 space-x-2 p-4 text-base text-gray-900 sm:grid-cols-2 md:text-xl lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    <div className="group relative h-52 w-52 justify-self-center overflow-hidden rounded-3xl border border-gray-300">
                      <img
                        src="/HeroNFT/RaceLads/RaceLads1.png"
                        alt="Пример изображения"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 flex translate-y-4 transform items-end justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <ul className="w-full rounded-lg bg-white p-2 text-center shadow-lg">
                          <li>
                            <button className="w-full rounded px-4 py-2 text-gray-700 hover:bg-gray-100">
                              Функция 1
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="group relative w-52 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                      <div className="relative">
                        <img
                          src="/HeroNFT/RaceLads/RaceLads1.png"
                          alt="RaceLad"
                          className="h-52 w-52 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute left-2 top-2 rounded-full bg-p1-darkgreen px-3 py-1 text-sm text-white">
                          Rare
                        </div>
                      </div>

                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-800">RaceLad</h3>
                        <p className="mt-1 text-sm text-gray-600">Generative Collection by GAA</p>

                        <div className="mt-4 flex items-center justify-between">
                          <div className="text-center">
                            <p className="text-xs text-gray-500">Health</p>
                            <p className="font-semibold text-gray-800">43</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-gray-500">Speed</p>
                            <p className="font-semibold text-gray-800">61</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-gray-500">Skill</p>
                            <p className="font-semibold text-gray-800">57</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-gray-500">Morale</p>
                            <p className="font-semibold text-gray-800">52</p>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 w-full translate-y-full bg-gray-900 bg-opacity-90 py-3 text-center text-white transition-transform duration-300 group-hover:-translate-y-0">
                        <div className="absolute bottom-0 left-0 w-full translate-y-full bg-gray-900 bg-opacity-90 py-3 text-center text-white transition-transform duration-300 group-hover:translate-y-0">
                          Buy Now
                        </div>
                      </div>
                    </div>

                    <div className="group relative w-80 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                      <div className="relative">
                        <img
                          src="https://via.placeholder.com/300"
                          alt="Axie"
                          className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute left-2 top-2 rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
                          Rare
                        </div>
                      </div>

                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-800">Axie Name</h3>
                        <p className="mt-1 text-sm text-gray-600">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                        <div className="mt-4 flex items-center justify-between">
                          <div className="text-center">
                            <p className="text-xs text-gray-500">Health</p>
                            <p className="font-semibold text-gray-800">43</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-gray-500">Speed</p>
                            <p className="font-semibold text-gray-800">61</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-gray-500">Skill</p>
                            <p className="font-semibold text-gray-800">57</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-gray-500">Morale</p>
                            <p className="font-semibold text-gray-800">52</p>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 w-full translate-y-full bg-gray-900 bg-opacity-90 py-3 text-center text-white transition-transform duration-300 group-hover:translate-y-0">
                        <p className="text-sm">View Details</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2 rounded-3xl border-2 bg-p2-white2 p-2 text-p1-darkgreen dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
                  <div className="px-2 text-xl font-semibold md:pt-2 md:text-3xl">Статистика</div>
                  <div className="space-x-2 px-2 text-xl font-semibold text-p1-darkgreen md:pt-2 md:text-3xl">
                    <a
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      24H
                    </a>
                    <a
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      7D
                    </a>
                    <a
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      30D
                    </a>
                  </div>
                </div>
                <div className="mt-2 grid grid-cols-3 place-items-center gap-2 space-x-2 p-4 text-base md:text-xl">
                  <div className="m-2 aspect-video w-full rounded-3xl border border-p1-darkgreen text-center md:pt-28">
                    Total Sales:
                  </div>
                  <div className="m-2 aspect-video w-full rounded-3xl border border-p1-darkgreen md:pt-28">
                    Total Volume:
                  </div>
                  <div className="m-2 aspect-video w-full rounded-3xl border border-p1-darkgreen md:pt-28">
                    RaceLads Sold:
                  </div>
                </div>
              </div>

              <div className="mt-2 rounded-3xl border-2 bg-p2-white2 p-2 text-p1-darkgreen dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
                  <div className="px-2 text-xl font-semibold md:pt-2 md:text-3xl">RaceLads</div>
                </div>
                <section></section>

                <div className="mt-2 grid grid-cols-3 place-items-start gap-4 space-x-2 p-4 text-base">
                  <div className="grid h-48 grid-cols-2 place-content-center gap-4">
                    <div className="text-3xl font-semibold"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="">Total</div>
                    <div>Owners</div>
                  </div>

                  <div className="m-2 aspect-video w-full rounded-3xl border border-p1-darkgreen">
                    <div className="grid h-48 grid-cols-2 place-content-center gap-4">
                      <div className="">RaceLads</div>
                      <div>RARITY</div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>

                      <div></div>
                      <div className="">FLOOR PRICE:</div>
                      <div>TOTAL RaceLads</div>
                    </div>
                  </div>
                  <div className="m-2 aspect-video w-full rounded-3xl border border-p1-darkgreen">
                    <div className="grid h-48 grid-cols-2 place-content-center gap-4">
                      <div className="">RaceLads</div>
                      <div>RARITY</div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>

                      <div></div>
                      <div className="">FLOOR PRICE:</div>
                      <div>TOTAL RaceLads</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 rounded-3xl border-2 bg-p2-white2 p-2 text-p1-darkgreen dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
                  <div className="px-2 text-xl font-semibold md:pt-2 md:text-3xl">
                    Лучшие продажи
                  </div>
                  <div className="space-x-2 px-2 text-xl font-semibold text-p1-darkgreen md:pt-2 md:text-3xl">
                    <a
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      24H
                    </a>
                    <a
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      7D
                    </a>
                    <a
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      30D
                    </a>
                  </div>
                </div>
                <div className="font-regular space-x-2 px-2 text-xl text-p1-darkgreen md:pt-2 md:text-3xl">
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Все
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    RaceLads
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Drivers
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Team&apos;s Members
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Collectors
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Cars
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    CustomLads
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Награды
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Лицензии
                  </a>
                </div>
                <div className="mt-2 grid grid-cols-3 place-items-center gap-2 space-x-2 p-4 text-base md:text-xl">
                  <div className="m-2 aspect-video w-full rounded-3xl border border-p1-darkgreen text-center md:pt-28">
                    ETH: USDT:
                  </div>
                  <div className="m-2 aspect-video w-full rounded-3xl border border-p1-darkgreen md:pt-28">
                    ETH: USDT:
                  </div>
                  <div className="m-2 aspect-video w-full rounded-3xl border border-p1-darkgreen md:pt-28">
                    ETH: USDT:
                  </div>
                </div>
              </div>

              <div className="mt-2 rounded-3xl border-2 bg-p2-white2 p-2 text-p1-darkgreen dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
                  <div className="px-2 text-xl font-semibold md:pt-2 md:text-3xl">
                    Последние объявления:{' '}
                  </div>
                  <div className="space-x-2 px-2 text-xl font-semibold text-p1-darkgreen md:pt-2 md:text-3xl">
                    <a
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      24H
                    </a>
                    <a
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      7D
                    </a>
                    <a
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      30D
                    </a>
                  </div>
                </div>
                <div className="font-regular space-x-2 px-2 text-xl text-p1-darkgreen md:pt-2 md:text-3xl">
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Все
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    RaceLads
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Drivers
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Team&apos;s Members
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Collectors
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Cars
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    CustomLads
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Награды
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Лицензии
                  </a>
                </div>
                <div className="mt-2 grid grid-cols-3 place-items-center gap-2 space-x-2 p-4 text-base md:text-xl">
                  <div className="m-2 aspect-video w-full rounded-3xl border border-p1-darkgreen text-center md:pt-28">
                    ETH: USDT:
                  </div>
                  <div className="m-2 aspect-video w-full rounded-3xl border border-p1-darkgreen md:pt-28">
                    ETH: USDT:
                  </div>
                  <div className="m-2 aspect-video w-full rounded-3xl border border-p1-darkgreen md:pt-28">
                    ETH: USDT:
                  </div>
                </div>
              </div>

              <div className="mt-2 rounded-3xl border-2 bg-p2-white2 p-2 text-p1-darkgreen dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
                  <div className="px-2 text-xl font-semibold md:pt-2 md:text-3xl">
                    Последние продажи:{' '}
                  </div>
                </div>
                <div className="font-regular space-x-2 px-2 text-xl text-p1-darkgreen md:pt-2 md:text-3xl">
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Все
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    RaceLads
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Drivers
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Team&apos;s Members
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Collectors
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Cars
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    CustomLads
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Награды
                  </a>
                  <a
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Лицензии
                  </a>
                </div>
                <div className="mt-2 grid grid-cols-3 place-items-center gap-2 space-x-2 p-4 text-base md:text-xl">
                  <div className="m-2 aspect-video w-full rounded-3xl border border-p1-darkgreen text-center md:pt-28">
                    ETH: USDT:
                    <p>времени назад:</p>
                  </div>
                  <div className="m-2 aspect-video w-full rounded-3xl border border-p1-darkgreen md:pt-28">
                    ETH: USDT:
                    <p>времени назад:</p>
                  </div>
                  <div className="m-2 aspect-video w-full rounded-3xl border border-p1-darkgreen md:pt-28">
                    ETH: USDT:
                    <p>времени назад:</p>
                  </div>
                </div>
              </div>
              <div id="2" className="pb-8"></div>
              <div className="mt-2 rounded-3xl border-2 bg-p2-white2 p-2 text-p1-darkgreen dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                <div className="px-2 text-xl font-semibold md:pt-2 md:text-3xl">
                  <div className="pt-2 text-left">Мои NFT___ Total NFTs:____ GAA_NFTs:_____</div>
                  <div className="font-regular space-x-2 px-2 text-xl text-p1-darkgreen md:pt-2 md:text-3xl">
                    <a
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Все
                    </a>
                    <a
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      RaceLads
                    </a>
                    <a
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Drivers
                    </a>
                    <a
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Team&apos;s Members
                    </a>
                    <a
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Collectors
                    </a>
                    <a
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Cars
                    </a>
                    <a
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      CustomLads
                    </a>
                    <a
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Награды
                    </a>
                    <a
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Лицензии
                    </a>
                  </div>
                  <div className="pt-2 text-left">RaceLads</div>
                  <div className="mt-2 grid grid-cols-5 place-items-center gap-2 space-x-2 p-4 text-base md:text-xl">
                    <div className="group relative w-80 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg hover:shadow-2xl">
                      <div className="relative">
                        <Link
                          href={'/rucard'}
                          className="mx-auto justify-center hover:drop-shadow-2xl"
                        >
                          <img
                            src="/HeroNFT/RaceLads/RaceLads1.png"
                            alt="RaceLads"
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </Link>
                        <div className="absolute left-2 top-2 rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
                          Rare
                        </div>
                      </div>

                      <div className="w-full bg-p1-white p-4 text-p1-darkgreen transition-transform duration-300 group-hover:-translate-y-12">
                        <div className="flex items-center justify-between">
                          <div className="text-left text-xl font-bold text-gray-800">RaceLad</div>
                          <div className="text-left text-lg font-bold text-gray-800"># 8888</div>
                        </div>

                        <p className="mt-1 text-left text-xl text-gray-600">Total: 10.000</p>
                        <div className="">
                          <div className="mt-4 flex items-center justify-between">
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600">
                                Price:
                                <Image
                                  className="relative mb-4 inline-block w-max"
                                  width={1000}
                                  height={1000}
                                  src="/public/Logo/eth.png"
                                  alt="eth"
                                />
                                10.000
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600">
                                Price:
                                <Image
                                  className="relative mb-4 inline-block w-max"
                                  width={1000}
                                  height={1000}
                                  src="/public/Logo/usd.png"
                                  alt="usd"
                                />
                                10
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <button className="absolute bottom-0 left-0 w-full translate-y-full border-p1-cyan bg-p1-darkgreen bg-opacity-90 py-3 text-center text-xl text-p1-white transition-transform duration-300 hover:bg-p1-green group-hover:translate-y-0">
                          Buy
                        </button>
                      </div>
                    </div>

                    <div className="group relative w-80 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg hover:shadow-2xl">
                      <div className="relative">
                        <Link
                          href={'/rucard'}
                          className="mx-auto justify-center hover:drop-shadow-2xl"
                        >
                          <img
                            src="/HeroNFT/RaceLads/RaceLads1.png"
                            alt="RaceLads"
                            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                          />
                        </Link>
                        <div>
                       
                          <button className="absolute left-2 top-2 rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
                            Rare
                          </button>
                          
                        </div>
                      </div>

                      <div className="w-full bg-p1-white p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12">
                        <div className="flex items-center justify-between">
                          <div className="text-left text-xl font-bold text-gray-800">RaceLad</div>
                          <div className="text-left text-lg font-bold text-gray-800"># 8888</div>
                        </div>

                        <p className="mt-1 text-left text-xl text-gray-600">Total: 10.000</p>
                        <div className="">
                          <div className="mt-4 flex items-center justify-between">
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600">
                                Price:
                                <Image
                                  className="relative mb-4 inline-block w-max"
                                  width={1000}
                                  height={1000}
                                  src="/public/Logo/eth.png"
                                  alt="eth"
                                />
                                10.000
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600">
                                Price:
                                <Image
                                  className="relative mb-4 inline-block w-max"
                                  width={1000}
                                  height={1000}
                                  src="/public/Logo/usd.png"
                                  alt="usd"
                                />
                                10
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <button className="absolute bottom-0 left-0 w-full translate-y-full border-p1-cyan bg-p1-darkgreen bg-opacity-90 py-3 text-center text-xl text-p1-white transition-transform duration-500 ease-in-out hover:bg-p1-green group-hover:translate-y-0">
                          Buy
                        </button>
                      </div>
                    </div>

                    <div className="flex h-10 items-center justify-center bg-gray-100 font-sans">
                      <div className="group relative">
                        <button className="rounded-lg bg-indigo-600 px-6 py-3 text-white shadow-lg hover:bg-indigo-700">
                          Hover over me
                        </button>

                        <div className="absolute bottom-full left-1/2 mb-3 -translate-x-1/2 translate-y-2 transform rounded-md bg-black px-4 py-2 text-sm text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          I'm a tooltip with animation!
                        </div>
                      </div>
                    </div>

             

                  

                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="3"></div>
    </div>
  );
}
