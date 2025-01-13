'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Autoplay, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { JumpButton } from '@/components/jumpButton';
import { useDeviceSize } from '@/utils/hooks';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

export default function Home() {
  const jumpPoints = ['1', '2', '3'];
  const { width } = useDeviceSize();
  const cardWidth = 288;

  return (
    <div className="mx-auto w-full font-serif">
      <JumpButton points={jumpPoints} />

      <div id="1"></div>
      <div className="h-1/6 bg-p1-white bg-cover bg-center p-2 dark:bg-p1-deepdarkgreen dark:brightness-75">
        <div className="flex justify-center space-x-2"></div>
        <div className="grid grid-cols-2 justify-center p-1 md:justify-between">
          <div className="flex justify-start space-x-6"></div>

          {/* кошелек, профиль, корзина */}
          <div className="flex justify-end space-x-6 px-2 md:px-10">
            <div>
              <Link href={'#'} className="mx-auto justify-center">
                <Image
                  className="h-10 w-10 rounded-lg p-1 ring-p1-green transition-all delay-75 duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:ring-2 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-deepdarkgreen"
                  width={480}
                  height={480}
                  src="/Logo/wallet-nft.png"
                  alt="Bordered avatar"
                />
              </Link>
            </div>

            <div className="group relative inline-block">
              <Link href={'#'} className="mx-auto justify-center">
                <Image
                  className="h-10 w-10 rounded-full p-1 ring-p1-green transition-all delay-75 duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:ring-2 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-deepdarkgreen"
                  width={480}
                  height={480}
                  src="/Logo/user.png"
                  alt="Bordered avatar"
                />

                <div className="invisible absolute left-1/2 z-10 mt-2 w-40 -translate-x-1/2 transform rounded-xl bg-p1-cyan bg-center p-4 text-gray-800 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100 md:w-52">
                  <div className="rounded-lg border-b border-p1-darkgreen p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen md:px-3 dark:border-p1-deepdarkgreen">
                    <Link href={'/profile'} className="mx-auto justify-center">
                      Profile
                    </Link>
                  </div>
                  <div className="rounded-lg border-b border-p1-darkgreen p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen md:px-3 dark:border-p1-deepdarkgreen">
                    <Link href={'/dashboard'} className="mx-auto justify-center">
                      Dashboard
                    </Link>
                  </div>
                  <div className="rounded-lg border-b border-p1-darkgreen p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen md:px-3 dark:border-p1-deepdarkgreen">
                    <Link href={'/marketplace'} className="mx-auto justify-center">
                      Marketplace
                    </Link>
                  </div>
                  <div className="rounded-lg border-b border-p1-darkgreen p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen md:px-3 dark:border-p1-deepdarkgreen">
                    <Link href={'/user'} className="mx-auto justify-center">
                      My NFT{' '}
                    </Link>
                  </div>

                  <div className="rounded-lg border-b border-p1-darkgreen p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen md:px-3 dark:border-p1-deepdarkgreen">
                    <Link href={'#'} className="mx-auto justify-center">
                      Watchlist
                    </Link>
                  </div>

                  <div className="rounded-lg border-b border-p1-darkgreen p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen md:px-3 dark:border-p1-deepdarkgreen">
                    <Link href={'#'} className="mx-auto justify-center">
                      Deals
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href={'#'} className="mx-auto justify-center">
                <Image
                  className="h-10 w-10 rounded-lg p-1 ring-p1-green transition-all delay-75 duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:ring-2 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-deepdarkgreen"
                  width={480}
                  height={480}
                  src="/Logo/shopping-cart.png"
                  alt="Bordered avatar"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Поиск 1 */}
        <div className="flex justify-center space-x-2 pt-2 md:-mt-14">
          <div>
            <div className="mx-auto flex max-w-2xl overflow-hidden rounded-2xl border-2 border-p1-green bg-p2-white2 px-4 py-3 hover:border-p1-cyan focus:border-p1-cyan md:w-96 dark:bg-p1-darkgreen dark:text-p1-cyan">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                className="mr-3 rotate-90 fill-gray-800 dark:fill-p1-cyan"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
              <input
                type="email"
                placeholder="Search ..."
                className="w-full bg-transparent text-xl text-p1-deepdarkgreen outline-none dark:text-p1-cyan"
              />
            </div>
          </div>
        </div>

        {/* Карточка */}

        <div className="grid grid-cols-1 place-content-between pt-2 md:grid-cols-2">
          <div className="grid grid-cols-1 place-content-start">
            <div className="grid grid-cols-2 justify-between md:grid-cols-2 2xl:grid-cols-2">
              <div className="flex justify-start space-x-1 md:px-10">
                <div className="w-10 transition-all delay-75 duration-300 ease-in-out hover:scale-125">
                  <Link href={'#'}>
                    <Image
                      className="p-1"
                      width={480}
                      height={480}
                      src="/Logo/Poligon_zkEVM_logo_green.png"
                      alt="LogoETH"
                    />
                  </Link>
                </div>

                <div className="place-content-start text-2xl text-p1-green md:text-xl dark:text-p1-green">
                  Polygon zkEVM
                </div>
                <div className="flex grid-flow-row auto-rows-max justify-start space-x-2"></div>
                <div></div>
              </div>

              <div className="flex justify-end">
                <div className="inline-flex w-full justify-end rounded-md md:px-10" role="group">
                  <div className="w-7 text-xl text-p1-green">10</div>
                  <div className="w-10">
                    <div className="transition-all delay-75 duration-300 ease-in-out hover:scale-125">
                      {' '}
                      <Link href={'#'} className="">
                        <Image
                          className="p-1"
                          width={480}
                          height={480}
                          src="/icon/heart_green.png"
                          alt="Bordered avatar"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex grid-flow-row auto-rows-max space-x-2 px-2 md:px-4">
              <Link href={'#'} className="mx-auto w-full">
                <Image
                  className="rounded-3xl dark:ring-p1-darkgreen"
                  width={1000}
                  height={1000}
                  src="/HeroNFT/RaceLads/RaceLads1.png"
                  alt="Bordered avatar"
                />
              </Link>
            </div>
            <div className="place-content-start px-2 py-1">
              <div className="text-darkgreen w-full rounded-2xl border border-p1-green bg-p1-white text-xl shadow-lg dark:bg-p1-deepdarkgreen">
                <details className="m-2">
                  <summary className="relative flex cursor-pointer justify-start py-2">
                    {' '}
                    <div className="px-2">
                      <Image
                        className="h-10 w-10 transition-all duration-300 ease-in-out hover:scale-125"
                        width={480}
                        height={480}
                        src="/icon/description_green.png"
                        alt="ph"
                      />
                    </div>{' '}
                    <div className="place-content-center px-4 text-p1-darkgreen dark:text-p1-green">
                      Description
                    </div>
                  </summary>
                  <div className="pl-4 pt-1 text-p1-darkgreen dark:text-p1-green">
                    <div className="group relative">
                      <div>
                        <Link
                          href={'#'}
                          className="mx-auto justify-start text-2xl text-p1-green hover:text-p1-cyan"
                        >
                          by Global Automotive Association
                        </Link>
                      </div>
                      <div className="invisible absolute left-1/2 z-10 -translate-x-1/2 transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                        <div className="w-64 rounded-xl text-xl shadow-lg">
                          <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                            <Link href="#" className="mx-auto">
                              <div className="inline-flex place-content-start space-x-2">
                                <Image
                                  width={480}
                                  height={480}
                                  src="/HeroNFT/RaceLads/RaceLads1.png"
                                  alt="RaceLad"
                                  className="w-12 rounded-lg"
                                />
                                <div className="font-semibold text-p1-darkgreen">
                                  {' '}
                                  GAA
                                  <div className="text-base font-thin lining-nums text-p1-darkgreen">
                                    {' '}
                                    0x010a...0369
                                  </div>
                                </div>
                              </div>{' '}
                            </Link>

                            <div className="grid w-full grid-cols-3 items-center text-center lining-nums">
                              <div>
                                <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                  collected
                                </p>
                                <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                  1258
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                  created
                                </p>
                                <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                  10.000
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">sold</p>
                                <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                  7891
                                </p>
                              </div>
                            </div>
                            <div className="inline-flex place-content-center space-x-1">
                              <Link href="#" className="mx-auto">
                                <Image
                                  width={480}
                                  height={480}
                                  src="/HeroNFT/RaceLads/RaceLads2.png"
                                  alt="RaceLad"
                                  className="w-20 rounded-lg"
                                />
                              </Link>
                              <Link href="#" className="mx-auto">
                                <Image
                                  width={480}
                                  height={480}
                                  src="/HeroNFT/RaceLads/RaceLads3.png"
                                  alt="RaceLad"
                                  className="w-20 rounded-lg"
                                />
                              </Link>
                              <Link href="#" className="mx-auto">
                                <Image
                                  width={480}
                                  height={480}
                                  src="/HeroNFT/RaceLads/RaceLads4.png"
                                  alt="RaceLad"
                                  className="w-20 rounded-lg"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>
                      RaceLads are a collection of 10.000 randomly generated NFTs minted on Polygon
                      zkEVM
                    </p>
                    <p> Polygon zkEVM — это блокчейн второго уровня для Ethereum</p>
                    <p>
                      – это революционный блокчейн-проект, который объединяет всех любителей
                      автоспорта и автомобилей в сильное и активное сообщество, нацеленное на
                      популяризацию автомобильной культуры.{' '}
                    </p>
                  </div>
                </details>
              </div>
            </div>
            <div className="place-content-start px-2 py-1">
              <div className="text-darkgreen w-full rounded-2xl border border-p1-green bg-p1-white text-xl shadow-lg dark:bg-p1-deepdarkgreen">
                <details className="m-2">
                  <summary className="relative flex cursor-pointer justify-start py-2">
                    {' '}
                    <div className="px-2">
                      <Image
                        className="h-10 w-10 transition-all duration-300 ease-in-out hover:scale-125"
                        width={480}
                        height={480}
                        src="/icon/traits_green.png"
                        alt="ph"
                      />
                    </div>{' '}
                    <div className="place-content-center px-4 text-p1-darkgreen dark:text-p1-green">
                      Traits
                    </div>
                  </summary>
                  <div className="px-2 pt-1 text-center lining-nums text-p1-darkgreen dark:text-p1-green">
                    <div className="group">
                      <div className="grid grid-cols-3 place-content-center gap-2">
                        <div className="">
                          <div className="grid">
                            <Link
                              href="#"
                              className="rounded-xl border-2 border-p1-green bg-p1-white px-4 py-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                            >
                              <div>
                                <Image
                                  className="h-7 w-7 transition-all duration-300 ease-in-out hover:scale-125"
                                  width={480}
                                  height={480}
                                  src="/icon/offer_green.png"
                                  alt="offer"
                                />
                              </div>
                              <div className="px-4">Background</div>
                              <div className="px-4 font-semibold">Sky 13%</div>
                              <div className="px-4">Floor: 2,99%</div>
                            </Link>
                          </div>
                        </div>

                        <div className="">
                          <div className="grid">
                            <Link
                              href="#"
                              className="rounded-xl border-2 border-p1-green bg-p1-white px-4 py-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                            >
                              <div>
                                <Image
                                  className="h-7 w-7 transition-all duration-300 ease-in-out hover:scale-125"
                                  width={480}
                                  height={480}
                                  src="/icon/offer_green.png"
                                  alt="offer"
                                />
                              </div>
                              <div className="px-4">Body</div>
                              <div className="px-4 font-semibold">Asia 17%</div>
                              <div className="px-4">Floor: 3,99%</div>
                            </Link>
                          </div>
                        </div>
                        <div className="">
                          <div className="grid">
                            <Link
                              href="#"
                              className="rounded-xl border-2 border-p1-green bg-p1-white px-4 py-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                            >
                              <div>
                                <Image
                                  className="h-7 w-7 transition-all duration-300 ease-in-out hover:scale-125"
                                  width={480}
                                  height={480}
                                  src="/icon/offer_green.png"
                                  alt="offer"
                                />
                              </div>
                              <div className="px-4">Background</div>
                              <div className="px-4 font-semibold">Sky 13%</div>
                              <div className="px-4">Floor: 2,99%</div>
                            </Link>
                          </div>
                        </div>
                        <div className="">
                          <div className="grid">
                            <Link
                              href="#"
                              className="rounded-xl border-2 border-p1-green bg-p1-white px-4 py-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                            >
                              <div>
                                <Image
                                  className="h-7 w-7 transition-all duration-300 ease-in-out hover:scale-125"
                                  width={480}
                                  height={480}
                                  src="/icon/offer_green.png"
                                  alt="offer"
                                />
                              </div>
                              <div className="px-4">Нос</div>
                              <div className="px-4 font-semibold">Прямой 13%</div>
                              <div className="px-4">Floor: 1,99%</div>
                            </Link>
                          </div>
                        </div>
                        <div className="">
                          <div className="grid">
                            <Link
                              href="#"
                              className="rounded-xl border-2 border-p1-green bg-p1-white px-4 py-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                            >
                              <div>
                                <Image
                                  className="h-7 w-7 transition-all duration-300 ease-in-out hover:scale-125"
                                  width={480}
                                  height={480}
                                  src="/icon/offer_green.png"
                                  alt="offer"
                                />
                              </div>
                              <div className="px-4">Рот</div>
                              <div className="px-4 font-semibold">Улыбается 12%</div>
                              <div className="px-4">Floor: 2,99%</div>
                            </Link>
                          </div>
                        </div>
                        <div className="">
                          <div className="grid">
                            <Link
                              href="#"
                              className="rounded-xl border-2 border-p1-green bg-p1-white px-4 py-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                            >
                              <div>
                                <Image
                                  className="h-7 w-7 transition-all duration-300 ease-in-out hover:scale-125"
                                  width={480}
                                  height={480}
                                  src="/icon/offer_green.png"
                                  alt="offer"
                                />
                              </div>
                              <div className="px-4">Одежда</div>
                              <div className="px-4 font-semibold">Куртка 18%</div>
                              <div className="px-4">Floor: 2,99%</div>
                            </Link>
                          </div>
                        </div>
                        <div className="">
                          <div className="grid">
                            <Link
                              href="#"
                              className="rounded-xl border-2 border-p1-green bg-p1-white px-4 py-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                            >
                              <div>
                                <Image
                                  className="h-7 w-7 transition-all duration-300 ease-in-out hover:scale-125"
                                  width={480}
                                  height={480}
                                  src="/icon/offer_green.png"
                                  alt="offer"
                                />
                              </div>
                              <div className="px-4">Головной убор</div>
                              <div className="px-4 font-semibold">Шлем 60-х 25%</div>
                              <div className="px-4">Floor: 2,99%</div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>111</div>
                </details>
              </div>
            </div>
            <div className="place-content-start px-2 py-1">
              <div className="text-darkgreen w-full rounded-2xl border border-p1-green bg-p1-white text-xl shadow-lg dark:bg-p1-deepdarkgreen">
                <details className="m-2">
                  <summary className="relative flex cursor-pointer justify-start py-2">
                    {' '}
                    <div className="px-2">
                      <Image
                        className="h-10 w-10 transition-all duration-300 ease-in-out hover:scale-125"
                        width={480}
                        height={480}
                        src="/icon/about_green.png"
                        alt="ph"
                      />
                    </div>{' '}
                    <div className="place-content-center px-4 text-p1-darkgreen dark:text-p1-green">
                      Description
                    </div>
                  </summary>
                  <div className="pl-4 pt-1 text-p1-darkgreen dark:text-p1-green">
                    <div className="group relative">
                      <div>
                        <Link
                          href={'#'}
                          className="mx-auto justify-start text-2xl text-p1-green hover:text-p1-cyan"
                        >
                          by Global Automotive Association
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>111</div>
                </details>
              </div>
            </div>
            <div className="place-content-start px-2 py-1">
              <div className="text-darkgreen w-full rounded-2xl border border-p1-green bg-p1-white text-xl shadow-lg dark:bg-p1-deepdarkgreen">
                <details className="m-2">
                  <summary className="relative flex cursor-pointer justify-start py-2">
                    {' '}
                    <div className="px-2">
                      <Image
                        className="h-10 w-10 transition-all duration-300 ease-in-out hover:scale-125"
                        width={480}
                        height={480}
                        src="/icon/detail_green.png"
                        alt="ph"
                      />
                    </div>{' '}
                    <div className="place-content-center px-4 text-p1-darkgreen dark:text-p1-green">
                      Detail
                    </div>
                  </summary>
                  <div className="pl-4 pt-1 text-p1-darkgreen dark:text-p1-green">
                    <div className="group relative">
                      <div className="grid grid-cols-2 justify-between">
                        <div>Contract Address</div>
                        <div> 0 x524c ...a048</div>
                        <div>Token ID</div>
                        <div>10451</div>
                        <div>Token Standard</div>
                        <div>ERC-721</div>

                        <div>Chain</div>
                        <div> Polygon zkEVM</div>
                        <div>Last Updated</div>
                        <div>14 hours ago</div>
                        <div>Creator Earnings</div>
                        <div>5%</div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>
            {/* Конец левой колонки */}
          </div>

          <div>
            {/* Начало правой колонки */}
            <div className="">
              <div className="grid grid-cols-2 justify-between md:grid-cols-2 2xl:grid-cols-2">
                <div className="flex justify-start space-x-1 md:px-10">
                  <div className="group relative">
                    <div>
                      <Link
                        href={'#'}
                        className="mx-auto justify-start text-2xl text-p1-green hover:text-p1-cyan"
                      >
                        RaceLads
                      </Link>
                    </div>
                    <div className="invisible absolute left-1/2 top-full z-10 -translate-x-1/2 transform opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                      <div className="w-96 text-base shadow-lg">
                        <div className="group mx-auto mt-1 w-full space-x-3 rounded-2xl border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                          <Link href="#" className="mx-auto justify-center">
                            <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-2xl xl:grid-cols-2">
                              <Image
                                width={480}
                                height={480}
                                src="/HeroNFT/RaceLads/RaceLads1.png"
                                alt="RaceLad"
                                className="w-full scale-90"
                              />
                              <div>
                                <h2 className="spacing-1 text-xl font-bold text-p1-darkgreen xl:text-2xl dark:text-p1-cyan">
                                  RaceLads
                                </h2>
                                <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                                <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                                <button className="w-full place-content-end rounded-md border border-p1-cyan bg-p1-green py-2 text-white hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-lg dark:hover:shadow-p1-darkgreen">
                                  Explore Collection
                                </button>
                              </div>
                            </div>{' '}
                            <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                              <div>
                                <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Items</p>
                                <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                  10,000
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                  Floor Price
                                </p>
                                <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                  <Image
                                    className="relative inline-block w-8 px-1"
                                    layout="intrinsic"
                                    width={50}
                                    height={50}
                                    src="/Logo/eth.png"
                                    alt="eth"
                                  />{' '}
                                  15.2
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                  Total Volume
                                </p>
                                <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                  25K
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="group relative">
                      <Link href={'#'} className="mx-auto justify-start">
                        <Image
                          className="h-7 w-7 rounded-sm p-1 transition-all delay-75 duration-300 ease-in-out"
                          width={480}
                          height={480}
                          src="/icon/chek_bold_green.png"
                          alt="bt2"
                        />
                      </Link>
                      <div className="invisible absolute left-1/2 top-full z-10 mt-2 w-80 -translate-x-1/2 transform rounded-xl bg-p2-white2 bg-center p-4 text-gray-800 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100 dark:bg-p1-darkgreen">
                        <div className="w-72 rounded-lg text-base">
                          <details className="mb-2 border-b border-gray-600">
                            <summary className="relative flex cursor-pointer justify-start py-1">
                              {' '}
                              <div className="px-2">
                                <Image
                                  className="h-6 w-6"
                                  width={480}
                                  height={480}
                                  src="/icon/chek_green.png"
                                  alt="bt2"
                                />
                              </div>{' '}
                              <div className="text-p1-darkgreen dark:text-p1-cyan">
                                Bedged Collectiob
                              </div>
                            </summary>
                            <div className="pt-1 text-p1-darkgreen dark:text-p1-cyan">
                              This collection belongs to a verified account and has significant
                              interest or sales. Learn more This token was minted on the smart
                              contract at the address below:
                            </div>
                          </details>
                          <details>
                            <summary className="relative flex cursor-pointer justify-start py-1">
                              <div className="px-2">
                                <Image
                                  className="h-6 w-6"
                                  width={480}
                                  height={480}
                                  src="/icon/Attention_orange.png"
                                  alt="bt2"
                                />
                              </div>
                              <div className="text-p1-darkgreen dark:text-p1-cyan">
                                Mintable Collection
                              </div>
                            </summary>
                            <div className="pt-1 text-p1-darkgreen dark:text-p1-cyan">
                              Mintable collections allow users to create their own digital items,
                              which could include duplicate or fake versions of items from other
                              projects. You should always do your own research, proceed with
                              caution, and be certain that the smart contract address of the project
                              is exactly what you expect.
                            </div>
                          </details>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end md:px-10">
                  <div className="inline-flex w-full justify-end space-x-6 rounded-md" role="group">
                    <div className="w-10">
                      <Link href={'#'} className="mx-auto justify-center">
                        <Image
                          className="h-10 w-10 rounded-xl p-0 transition-all delay-75 duration-300 ease-in-out hover:bg-opacity-50 hover:ring-1 hover:ring-p1-green dark:ring-p1-green dark:hover:ring-p1-cyan"
                          width={480}
                          height={480}
                          src="/icon/hand_shake_green.png"
                          alt="line"
                        />
                      </Link>
                    </div>
                    <div className="w-10">
                      <Link href={'#'} className="mx-auto justify-center">
                        <Image
                          className="h-10 w-10 rounded-xl p-1 transition-all delay-75 duration-300 ease-in-out hover:bg-opacity-50 hover:ring-1 hover:ring-p1-green dark:ring-p1-green dark:hover:ring-p1-cyan"
                          width={480}
                          height={480}
                          src="/icon/share_green.png"
                          alt="bt16"
                        />
                      </Link>
                    </div>
                    <div className="w-10">
                      <Link href={'#'} className="mx-auto justify-center">
                        <Image
                          className="h-10 w-10 rounded-xl p-1 transition-all delay-75 duration-300 ease-in-out hover:bg-opacity-50 hover:ring-1 hover:ring-p1-green dark:ring-p1-green dark:hover:ring-p1-cyan"
                          width={480}
                          height={480}
                          src="/icon/points_green.png"
                          alt="bt9"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="">
                <div className="grid grid-cols-2 justify-between md:grid-cols-2 2xl:grid-cols-2">
                  <div className="flex justify-start space-x-1 md:px-10">
                    <div className="relative">
                      <div className="mx-auto justify-start text-2xl text-p1-darkgreen dark:text-p1-green">
                        RaceLad
                      </div>
                    </div>
                    <div className="">
                      <div className="mx-auto justify-start px-3 text-2xl text-p1-darkgreen dark:text-p1-green">
                        {' '}
                        JohnDoe{' '}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end md:px-10"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="">
                <div className="grid grid-cols-2 justify-between md:grid-cols-2 2xl:grid-cols-2">
                  <div className="flex justify-start space-x-1 md:px-10">
                    <div className="relative">
                      <div className="mx-auto justify-start text-2xl text-p1-darkgreen"></div>
                    </div>
                    <div className="">
                      <div className="mx-auto justify-start text-xl text-p1-darkgreen dark:text-p1-green">
                        # 8888
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end md:px-10"></div>
                </div>
              </div>
            </div>

            <div>
              <div className="">
                <div className="">
                  <div className="flex justify-start space-x-1 md:px-10">
                    <div className="relative">
                      <div className="mx-auto justify-start text-xl text-p1-darkgreen dark:text-p1-green">
                        Owned by:
                      </div>
                    </div>
                    <div className="group relative">
                      <div>
                        <Link
                          href={'#'}
                          className="mx-auto justify-start text-2xl text-p1-green hover:text-p1-cyan"
                        >
                          JeamBeam
                        </Link>
                      </div>
                      <div className="invisible absolute left-1/2 z-10 -translate-x-1/2 transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                        <div className="w-64 rounded-xl text-xl shadow-lg">
                          <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                            <Link href="#" className="mx-auto">
                              <div className="inline-flex place-content-start space-x-2">
                                <Image
                                  width={480}
                                  height={480}
                                  src="/HeroNFT/RaceLads/RaceLads1.png"
                                  alt="RaceLad"
                                  className="w-12 rounded-lg"
                                />
                                <div className="font-semibold text-p1-darkgreen">
                                  {' '}
                                  JeamBeam
                                  <div className="text-base font-thin lining-nums text-p1-darkgreen">
                                    {' '}
                                    0x010a...0369
                                  </div>
                                </div>
                              </div>{' '}
                            </Link>

                            <div className="grid w-full grid-cols-3 items-center text-center">
                              <div>
                                <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                  collected
                                </p>
                                <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                  105
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                  created
                                </p>
                                <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                  15
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">sold</p>
                                <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                  12
                                </p>
                              </div>
                            </div>
                            <div className="inline-flex place-content-center space-x-1">
                              <Link href="#" className="mx-auto">
                                <Image
                                  width={480}
                                  height={480}
                                  src="/HeroNFT/RaceLads/RaceLads2.png"
                                  alt="RaceLad"
                                  className="w-20 rounded-lg"
                                />
                              </Link>
                              <Link href="#" className="mx-auto">
                                <Image
                                  width={480}
                                  height={480}
                                  src="/HeroNFT/RaceLads/RaceLads3.png"
                                  alt="RaceLad"
                                  className="w-20 rounded-lg"
                                />
                              </Link>
                              <Link href="#" className="mx-auto">
                                <Image
                                  width={480}
                                  height={480}
                                  src="/HeroNFT/RaceLads/RaceLads4.png"
                                  alt="RaceLad"
                                  className="w-20 rounded-lg"
                                />
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
            <div className="pb-4"></div>
            <div>
              <div className="">
                <div className="grid grid-cols-1 justify-between">
                  <div className="flex justify-start space-x-4">
                    <div className="relative">
                      <div className="mx-auto justify-start text-xl text-p1-darkgreen dark:text-p1-green">
                        <Image
                          className="h-8 w-8 p-0 transition-all delay-75 duration-300 ease-in-out hover:scale-125"
                          width={480}
                          height={480}
                          src="/icon/view_green.png"
                          alt="view"
                        />
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="mx-auto justify-start text-xl text-p1-darkgreen dark:text-p1-green">
                        569 views
                      </div>
                    </div>
                    <div className="">
                      <div className="mx-auto justify-start text-xl text-p1-darkgreen dark:text-p1-green">
                        <Image
                          className="h-7 w-7 p-0 transition-all delay-75 duration-300 ease-in-out hover:scale-125"
                          width={480}
                          height={480}
                          src="/icon/heart_green.png"
                          alt="heart"
                        />
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="mx-auto justify-start text-xl text-p1-darkgreen dark:text-p1-green">
                        10 favorites
                      </div>
                    </div>
                    <div className="">
                      <div className="mx-auto justify-start text-xl text-p1-darkgreen dark:text-p1-green">
                        <Image
                          className="h-7 w-7 p-0 transition-all delay-75 duration-300 ease-in-out hover:scale-125"
                          width={480}
                          height={480}
                          src="/icon/pfps.png"
                          alt="pfps"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="mx-auto justify-start text-xl text-p1-darkgreen dark:text-p1-green">
                        PFPs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-2"> </div>
            <div className="rounded-2xl border-2 bg-p1-white p-2 shadow-sm md:px-10 dark:border-p1-green dark:bg-p1-deepdarkgreen">
              <div className="flex justify-start space-x-1">
                <div className="relative">
                  <div className="mx-auto text-xl text-p1-darkgreen dark:text-p1-green">
                    Best offer
                  </div>

                  <div>
                    <div className="">
                      <div className="grid grid-cols-1 justify-between">
                        <div className="flex justify-start">
                          <div className="relative">
                            <div className="mx-auto justify-start text-4xl text-p1-darkgreen dark:text-p1-green">
                              2,72
                            </div>
                          </div>
                          <div className="">
                            <div className="mx-auto justify-start text-4xl text-p1-darkgreen dark:text-p1-green">
                              WETH
                            </div>
                          </div>
                          <div className="px-4"> </div>
                          <div className="self-end">
                            <div className="">
                              <Image
                                className="h-6 w-6 px-1"
                                width={480}
                                height={480}
                                src="/logo/usd-green.png"
                                alt="heart"
                              />
                            </div>
                          </div>
                          <div className="self-end text-xl text-p1-darkgreen dark:text-p1-green">
                            <div className="">10.000</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-5 grid grid-cols-1 place-content-around gap-4 md:grid-cols-2">
                <div className="basis-1/2">
                  {' '}
                  <div className="relative flex place-content-center">
                    <div className="apace-x-4 inline-flex w-full justify-center rounded-l-xl text-xl">
                      <Link
                        href="#"
                        className="grid w-4/5 place-content-center rounded-l-xl border-2 border-p1-green bg-p1-white px-4 py-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                      >
                        <div className="leading-2 text-xl">Buy:</div>
                      </Link>

                      <Link
                        href={'#'}
                        className="hover:bg-p2-white grid w-1/5 place-content-center rounded-r-xl border-b-2 border-r-2 border-t-2 border-p1-darkgreen bg-p1-white text-center text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:shadow-xl hover:ring-p1-cyan focus:scale-95 focus:border-l-2 focus:border-p1-darkgreen focus:shadow-lg focus:shadow-p1-green focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-darkgreen dark:focus:text-p1-cyan"
                      >
                        <Image
                          className="bg-p1-darkgreenе inline-block h-8 w-8 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
                          width={480}
                          height={480}
                          src="/Logo/shopping-cart.png"
                          alt="Bordered avatar"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="basis-1/2">
                  {' '}
                  <div>
                    <Link
                      href="#"
                      className="relative flex place-content-center rounded-xl border-2 border-p1-green bg-p1-white px-4 py-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                    >
                      <div>
                        <Image
                          className="h-7 w-7 transition-all duration-300 ease-in-out hover:scale-125"
                          width={480}
                          height={480}
                          src="/icon/offer_green.png"
                          alt="offer"
                        />
                      </div>
                      <div className="px-4">Сделать предложение</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <div className="text-darkgreen w-full rounded-2xl border border-p1-green bg-p1-white text-xl shadow-lg dark:bg-p1-deepdarkgreen">
                <details className="m-2">
                  <summary className="relative flex cursor-pointer justify-start py-2">
                    <div className="px-2">
                      <Image
                        className="h-10 w-10 transition-all duration-300 ease-in-out hover:scale-125"
                        width={480}
                        height={480}
                        src="/icon/price_history_green.png"
                        alt="ph"
                      />
                    </div>
                    <div className="place-content-center px-4 text-p1-darkgreen dark:text-p1-green">
                      Price History
                    </div>
                  </summary>
                  <div className="pl-4 pt-1 text-p1-darkgreen dark:text-p1-green">
                    This collection belongs to a verified account and has significant interest or
                    sales. Learn more This token was minted on the smart contract at the address
                    below:
                  </div>
                </details>
              </div>
            </div>
            <div className="pt-2">
              <div className="text-darkgreen w-full rounded-2xl border border-p1-green bg-p1-white text-xl shadow-lg dark:bg-p1-deepdarkgreen">
                <details className="m-2">
                  <summary className="relative flex cursor-pointer justify-start py-2">
                    {' '}
                    <div className="px-2">
                      <Image
                        className="h-10 w-10 transition-all duration-300 ease-in-out hover:scale-125"
                        width={480}
                        height={480}
                        src="/icon/listings_green.png"
                        alt="ph"
                      />
                    </div>{' '}
                    <div className="place-content-center px-4 text-p1-darkgreen dark:text-p1-green">
                      Listings
                    </div>
                  </summary>
                  {/* Таблица Listings*/}
                  <div className="h-80 place-content-center overflow-x-auto overflow-y-auto p-1 md:visible">
                    <div className="relative shadow-md sm:rounded-lg">
                      <table className="w-full pb-2 text-left text-xl text-p1-darkgreen dark:text-p1-green">
                        <thead className="bg-gray-50 text-xs uppercase text-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                          <tr className="caption-top">
                            <th scope="col" className="px-2 py-3">
                              <div className="flex place-content-center"> Price</div>
                            </th>
                            <th scope="col" className="px-2 py-3">
                              <div className="flex place-content-end">USD Price</div>
                            </th>
                            <th scope="col" className="px-2 py-3">
                              <div className="flex place-content-center">Quantity</div>
                            </th>
                            <th scope="col" className="px-2 py-3">
                              <div className="flex place-content-center">Expiration</div>
                            </th>
                            <th scope="col" className="px-2 py-3">
                              <div className="flex place-content-start">From</div>
                            </th>
                            <th scope="col" className="px-2 py-3">
                              <div className="flex place-content-center">Buy</div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="place-content-center">
                          <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                            <th
                              scope="row"
                              className="place-content-center whitespace-nowrap px-2 py-2 text-right font-medium"
                            >
                              2,7475 ETH
                            </th>
                            <td className="px-2 py-2">
                              {' '}
                              <div className="relative text-right">$ 9 012,43</div>
                            </td>
                            <td className="px-2 py-2 text-center">1</td>
                            <td className="px-2 py-2 text-center">2 minute ago</td>
                            <td className="px-2 py-2 text-left">
                              <div className="group relative">
                                <div>
                                  <Link
                                    href={'#'}
                                    className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                  >
                                    JeamBeam
                                  </Link>
                                </div>
                                <div className="invisible absolute -left-1.5 top-0 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                  <div className="w-64 rounded-xl text-xl shadow-lg">
                                    <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                                      <Link href="#" className="mx-auto">
                                        <div className="inline-flex place-content-start space-x-2">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads1.png"
                                            alt="RaceLad"
                                            className="w-12 rounded-lg"
                                          />
                                          <div className="font-semibold text-p1-darkgreen">
                                            {' '}
                                            JeamBeam
                                            <div className="text-base font-thin lining-nums text-p1-darkgreen">
                                              {' '}
                                              0x010a...0369
                                            </div>
                                          </div>
                                        </div>{' '}
                                      </Link>

                                      <div className="grid w-full grid-cols-3 items-center text-center">
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            collected
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            105
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            created
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            15
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            sold
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            12
                                          </p>
                                        </div>
                                      </div>
                                      <div className="inline-flex place-content-center space-x-1">
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads2.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads3.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads4.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-2 py-2 text-right">
                              <Link
                                href="#"
                                className="relative flex place-content-center rounded-xl border-2 border-p1-green bg-p1-white px-4 py-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                              >
                                <div></div>
                                <div className="px-2">Buy</div>
                              </Link>
                            </td>
                          </tr>
                          <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                            <th
                              scope="row"
                              className="place-content-center whitespace-nowrap px-2 py-2 text-right font-medium"
                            >
                              2,7475 ETH
                            </th>
                            <td className="px-2 py-2">
                              {' '}
                              <div className="relative text-right">$ 9 012,43</div>
                            </td>
                            <td className="px-2 py-2 text-center">1</td>
                            <td className="px-2 py-2 text-center">2 minute ago</td>
                            <td className="px-2 py-2 text-left">
                              <div className="group relative">
                                <div>
                                  <Link
                                    href={'#'}
                                    className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                  >
                                    JeamBeam
                                  </Link>
                                </div>
                                <div className="invisible absolute -left-1.5 top-0 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                  <div className="w-64 rounded-xl text-xl shadow-lg">
                                    <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                                      <Link href="#" className="mx-auto">
                                        <div className="inline-flex place-content-start space-x-2">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads1.png"
                                            alt="RaceLad"
                                            className="w-12 rounded-lg"
                                          />
                                          <div className="font-semibold text-p1-darkgreen">
                                            {' '}
                                            JeamBeam
                                            <div className="text-base font-thin lining-nums text-p1-darkgreen">
                                              {' '}
                                              0x010a...0369
                                            </div>
                                          </div>
                                        </div>{' '}
                                      </Link>

                                      <div className="grid w-full grid-cols-3 items-center text-center">
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            collected
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            105
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            created
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            15
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            sold
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            12
                                          </p>
                                        </div>
                                      </div>
                                      <div className="inline-flex place-content-center space-x-1">
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads2.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads3.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads4.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-2 py-2 text-right">
                              <Link
                                href="#"
                                className="relative flex place-content-center rounded-xl border-2 border-p1-green bg-p1-white px-4 py-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                              >
                                <div></div>
                                <div className="px-2">Buy</div>
                              </Link>
                            </td>
                          </tr>
                          <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                            <th
                              scope="row"
                              className="place-content-center whitespace-nowrap px-2 py-2 text-right font-medium"
                            >
                              2,7475 ETH
                            </th>
                            <td className="px-2 py-2">
                              {' '}
                              <div className="relative text-right">$ 9 012,43</div>
                            </td>
                            <td className="px-2 py-2 text-center">1</td>
                            <td className="px-2 py-2 text-center">2 minute ago</td>
                            <td className="px-2 py-2 text-left">
                              <div className="group relative">
                                <div>
                                  <Link
                                    href={'#'}
                                    className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                  >
                                    JeamBeam
                                  </Link>
                                </div>
                                <div className="invisible absolute -left-1.5 top-0 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                  <div className="w-64 rounded-xl text-xl shadow-lg">
                                    <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                                      <Link href="#" className="mx-auto">
                                        <div className="inline-flex place-content-start space-x-2">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads1.png"
                                            alt="RaceLad"
                                            className="w-12 rounded-lg"
                                          />
                                          <div className="font-semibold text-p1-darkgreen">
                                            {' '}
                                            JeamBeam
                                            <div className="text-base font-thin lining-nums text-p1-darkgreen">
                                              {' '}
                                              0x010a...0369
                                            </div>
                                          </div>
                                        </div>{' '}
                                      </Link>

                                      <div className="grid w-full grid-cols-3 items-center text-center">
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            collected
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            105
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            created
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            15
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            sold
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            12
                                          </p>
                                        </div>
                                      </div>
                                      <div className="inline-flex place-content-center space-x-1">
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads2.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads3.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads4.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-2 py-2 text-right">
                              <Link
                                href="#"
                                className="relative flex place-content-center rounded-xl border-2 border-p1-green bg-p1-white px-4 py-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                              >
                                <div></div>
                                <div className="px-2">Buy</div>
                              </Link>
                            </td>
                          </tr>
                          <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                            <th
                              scope="row"
                              className="place-content-center whitespace-nowrap px-2 py-2 text-right font-medium"
                            >
                              2,7475 ETH
                            </th>
                            <td className="px-2 py-2">
                              {' '}
                              <div className="relative text-right">$ 9 012,43</div>
                            </td>
                            <td className="px-2 py-2 text-center">1</td>
                            <td className="px-2 py-2 text-center">2 minute ago</td>
                            <td className="px-2 py-2 text-left">
                              <div className="group relative">
                                <div>
                                  <Link
                                    href={'#'}
                                    className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                  >
                                    JeamBeam
                                  </Link>
                                </div>
                                <div className="invisible absolute -left-1.5 top-0 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                  <div className="w-64 rounded-xl text-xl shadow-lg">
                                    <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                                      <Link href="#" className="mx-auto">
                                        <div className="inline-flex place-content-start space-x-2">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads1.png"
                                            alt="RaceLad"
                                            className="w-12 rounded-lg"
                                          />
                                          <div className="font-semibold text-p1-darkgreen">
                                            {' '}
                                            JeamBeam
                                            <div className="text-base font-thin lining-nums text-p1-darkgreen">
                                              {' '}
                                              0x010a...0369
                                            </div>
                                          </div>
                                        </div>{' '}
                                      </Link>

                                      <div className="grid w-full grid-cols-3 items-center text-center">
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            collected
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            105
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            created
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            15
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            sold
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            12
                                          </p>
                                        </div>
                                      </div>
                                      <div className="inline-flex place-content-center space-x-1">
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads2.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads3.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads4.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-2 py-2 text-right">
                              <Link
                                href="#"
                                className="relative flex place-content-center rounded-xl border-2 border-p1-green bg-p1-white px-4 py-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                              >
                                <div></div>
                                <div className="px-2">Buy</div>
                              </Link>
                            </td>
                          </tr>
                          <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                            <th
                              scope="row"
                              className="place-content-center whitespace-nowrap px-2 py-2 text-right font-medium"
                            >
                              2,7475 ETH
                            </th>
                            <td className="px-2 py-2">
                              {' '}
                              <div className="relative text-right">$ 9 012,43</div>
                            </td>
                            <td className="px-2 py-2 text-center">1</td>
                            <td className="px-2 py-2 text-center">2 minute ago</td>
                            <td className="px-2 py-2 text-left">
                              <div className="group relative">
                                <div>
                                  <Link
                                    href={'#'}
                                    className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                  >
                                    JeamBeam
                                  </Link>
                                </div>
                                <div className="invisible absolute -left-1.5 top-0 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                  <div className="w-64 rounded-xl text-xl shadow-lg">
                                    <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                                      <Link href="#" className="mx-auto">
                                        <div className="inline-flex place-content-start space-x-2">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads1.png"
                                            alt="RaceLad"
                                            className="w-12 rounded-lg"
                                          />
                                          <div className="font-semibold text-p1-darkgreen">
                                            {' '}
                                            JeamBeam
                                            <div className="text-base font-thin lining-nums text-p1-darkgreen">
                                              {' '}
                                              0x010a...0369
                                            </div>
                                          </div>
                                        </div>{' '}
                                      </Link>

                                      <div className="grid w-full grid-cols-3 items-center text-center">
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            collected
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            105
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            created
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            15
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            sold
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            12
                                          </p>
                                        </div>
                                      </div>
                                      <div className="inline-flex place-content-center space-x-1">
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads2.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads3.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads4.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-2 py-2 text-right">
                              <Link
                                href="#"
                                className="relative flex place-content-center rounded-xl border-2 border-p1-green bg-p1-white px-4 py-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                              >
                                <div></div>
                                <div className="px-2">Buy</div>
                              </Link>
                            </td>
                          </tr>
                          <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                            <th
                              scope="row"
                              className="place-content-center whitespace-nowrap px-2 py-2 text-right font-medium"
                            >
                              2,7475 ETH
                            </th>
                            <td className="px-2 py-2">
                              {' '}
                              <div className="relative text-right">$ 9 012,43</div>
                            </td>
                            <td className="px-2 py-2 text-center">1</td>
                            <td className="px-2 py-2 text-center">2 minute ago</td>
                            <td className="px-2 py-2 text-left">
                              <div className="group relative">
                                <div>
                                  <Link
                                    href={'#'}
                                    className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                  >
                                    JeamBeam
                                  </Link>
                                </div>
                                <div className="invisible absolute -left-1.5 top-0 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                  <div className="w-64 rounded-xl text-xl shadow-lg">
                                    <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                                      <Link href="#" className="mx-auto">
                                        <div className="inline-flex place-content-start space-x-2">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads1.png"
                                            alt="RaceLad"
                                            className="w-12 rounded-lg"
                                          />
                                          <div className="font-semibold text-p1-darkgreen">
                                            {' '}
                                            JeamBeam
                                            <div className="text-base font-thin lining-nums text-p1-darkgreen">
                                              {' '}
                                              0x010a...0369
                                            </div>
                                          </div>
                                        </div>{' '}
                                      </Link>

                                      <div className="grid w-full grid-cols-3 items-center text-center">
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            collected
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            105
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            created
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            15
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            sold
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            12
                                          </p>
                                        </div>
                                      </div>
                                      <div className="inline-flex place-content-center space-x-1">
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads2.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads3.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads4.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-2 py-2 text-right">
                              <Link
                                href="#"
                                className="relative flex place-content-center rounded-xl border-2 border-p1-green bg-p1-white px-4 py-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                              >
                                <div></div>
                                <div className="px-2">Buy</div>
                              </Link>
                            </td>
                          </tr>
                          <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                            <th
                              scope="row"
                              className="place-content-center whitespace-nowrap px-2 py-2 text-right font-medium"
                            >
                              2,7475 ETH
                            </th>
                            <td className="px-2 py-2">
                              {' '}
                              <div className="relative text-right">$ 9 012,43</div>
                            </td>
                            <td className="px-2 py-2 text-center">1</td>
                            <td className="px-2 py-2 text-center">2 minute ago</td>
                            <td className="px-2 py-2 text-left">
                              <div className="group relative">
                                <div>
                                  <Link
                                    href={'#'}
                                    className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                  >
                                    JeamBeam
                                  </Link>
                                </div>
                                <div className="invisible absolute -left-1.5 top-0 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                  <div className="w-64 rounded-xl text-xl shadow-lg">
                                    <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                                      <Link href="#" className="mx-auto">
                                        <div className="inline-flex place-content-start space-x-2">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads1.png"
                                            alt="RaceLad"
                                            className="w-12 rounded-lg"
                                          />
                                          <div className="font-semibold text-p1-darkgreen">
                                            {' '}
                                            JeamBeam
                                            <div className="text-base font-thin lining-nums text-p1-darkgreen">
                                              {' '}
                                              0x010a...0369
                                            </div>
                                          </div>
                                        </div>{' '}
                                      </Link>

                                      <div className="grid w-full grid-cols-3 items-center text-center">
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            collected
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            105
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            created
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            15
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            sold
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            12
                                          </p>
                                        </div>
                                      </div>
                                      <div className="inline-flex place-content-center space-x-1">
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads2.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads3.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads4.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-2 py-2 text-right">
                              <Link
                                href="#"
                                className="relative flex place-content-center rounded-xl border-2 border-p1-green bg-p1-white px-4 py-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                              >
                                <div></div>
                                <div className="px-2">Buy</div>
                              </Link>
                            </td>
                          </tr>
                          <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                            <th
                              scope="row"
                              className="place-content-center whitespace-nowrap px-2 py-2 text-right font-medium"
                            >
                              2,7475 ETH
                            </th>
                            <td className="px-2 py-2">
                              {' '}
                              <div className="relative text-right">$ 9 012,43</div>
                            </td>
                            <td className="px-2 py-2 text-center">1</td>
                            <td className="px-2 py-2 text-center">2 minute ago</td>
                            <td className="px-2 py-2 text-left">
                              <div className="group relative">
                                <div>
                                  <Link
                                    href={'#'}
                                    className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                  >
                                    JeamBeam
                                  </Link>
                                </div>
                                <div className="invisible absolute -left-1.5 top-0 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                  <div className="w-64 rounded-xl text-xl shadow-lg">
                                    <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                                      <Link href="#" className="mx-auto">
                                        <div className="inline-flex place-content-start space-x-2">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads1.png"
                                            alt="RaceLad"
                                            className="w-12 rounded-lg"
                                          />
                                          <div className="font-semibold text-p1-darkgreen">
                                            {' '}
                                            JeamBeam
                                            <div className="text-base font-thin lining-nums text-p1-darkgreen">
                                              {' '}
                                              0x010a...0369
                                            </div>
                                          </div>
                                        </div>{' '}
                                      </Link>

                                      <div className="grid w-full grid-cols-3 items-center text-center">
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            collected
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            105
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            created
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            15
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                            sold
                                          </p>
                                          <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                            12
                                          </p>
                                        </div>
                                      </div>
                                      <div className="inline-flex place-content-center space-x-1">
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads2.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads3.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                        <Link href="#" className="mx-auto">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads4.png"
                                            alt="RaceLad"
                                            className="w-20 rounded-lg"
                                          />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-2 py-2 text-right">
                              <Link
                                href="#"
                                className="relative flex place-content-center rounded-xl border-2 border-p1-green bg-p1-white px-4 py-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                              >
                                <div></div>
                                <div className="px-2">Buy</div>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </details>
              </div>
            </div>
            <div className="pt-2">
              <div className="text-darkgreen w-full rounded-2xl border border-p1-green bg-p1-white text-xl shadow-lg dark:bg-p1-deepdarkgreen">
                <details className="m-2">
                  <summary className="relative flex cursor-pointer justify-start py-2">
                    {' '}
                    <div className="px-2">
                      <Image
                        className="h-10 w-10 transition-all duration-300 ease-in-out hover:scale-125"
                        width={480}
                        height={480}
                        src="/icon/offers_green.png"
                        alt="ph"
                      />
                    </div>{' '}
                    <div className="place-content-center px-4 text-p1-darkgreen dark:text-p1-green">
                      Offers
                    </div>
                  </summary>
                  <div className="pl-4 pt-1 text-p1-darkgreen dark:text-p1-green">
                    {/* Таблица Offers*/}
                    <div className="h-72 place-content-center overflow-x-auto overflow-y-auto p-1 md:visible">
                      <div className="relative shadow-md sm:rounded-lg">
                        <table className="w-full pb-2 text-left text-xl text-p1-darkgreen dark:text-p1-green">
                          <thead className="bg-gray-50 text-xs uppercase text-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                            <tr className="caption-top">
                              <th scope="col" className="px-2 py-3">
                                <div className="flex place-content-center"> Price</div>
                              </th>
                              <th scope="col" className="px-2 py-3">
                                <div className="flex place-content-end">USD Price</div>
                              </th>
                              <th scope="col" className="px-2 py-3">
                                <div className="flex place-content-center">Quantity</div>
                              </th>
                              <th scope="col" className="px-2 py-3">
                                <div className="flex place-content-center">Floor Difference</div>
                              </th>
                              <th scope="col" className="px-2 py-3">
                                <div className="flex place-content-start">Expiration</div>
                              </th>
                              <th scope="col" className="px-2 py-3">
                                <div className="flex place-content-center">From</div>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="place-content-center">
                            <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                              <th
                                scope="row"
                                className="place-content-center whitespace-nowrap px-2 py-2 text-right font-medium"
                              >
                                2,7475 ETH
                              </th>
                              <td className="px-2 py-2">
                                {' '}
                                <div className="relative text-right">$ 9 012,43</div>
                              </td>
                              <td className="px-2 py-2 text-center">8</td>
                              <td className="px-2 py-2 text-center">100% below</td>

                              <td className="px-2 py-2 text-center">in 17 days</td>
                              <td className="px-2 py-2 text-left">
                                <div className="group relative">
                                  <div>
                                    <Link
                                      href={'#'}
                                      className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                    >
                                      JeamBeam
                                    </Link>
                                  </div>
                                  <div className="invisible absolute -left-1.5 top-0 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                    <div className="w-64 rounded-xl text-xl shadow-lg">
                                      <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                                        <Link href="#" className="mx-auto">
                                          <div className="inline-flex place-content-start space-x-2">
                                            <Image
                                              width={480}
                                              height={480}
                                              src="/HeroNFT/RaceLads/RaceLads1.png"
                                              alt="RaceLad"
                                              className="w-12 rounded-lg"
                                            />
                                            <div className="font-semibold text-p1-darkgreen">
                                              {' '}
                                              JeamBeam
                                              <div className="text-base font-thin lining-nums text-p1-darkgreen">
                                                {' '}
                                                0x010a...0369
                                              </div>
                                            </div>
                                          </div>{' '}
                                        </Link>

                                        <div className="grid w-full grid-cols-3 items-center text-center">
                                          <div>
                                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                              collected
                                            </p>
                                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                              105
                                            </p>
                                          </div>
                                          <div>
                                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                              created
                                            </p>
                                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                              15
                                            </p>
                                          </div>
                                          <div>
                                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                              sold
                                            </p>
                                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                              12
                                            </p>
                                          </div>
                                        </div>
                                        <div className="inline-flex place-content-center space-x-1">
                                          <Link href="#" className="mx-auto">
                                            <Image
                                              width={480}
                                              height={480}
                                              src="/HeroNFT/RaceLads/RaceLads2.png"
                                              alt="RaceLad"
                                              className="w-20 rounded-lg"
                                            />
                                          </Link>
                                          <Link href="#" className="mx-auto">
                                            <Image
                                              width={480}
                                              height={480}
                                              src="/HeroNFT/RaceLads/RaceLads3.png"
                                              alt="RaceLad"
                                              className="w-20 rounded-lg"
                                            />
                                          </Link>
                                          <Link href="#" className="mx-auto">
                                            <Image
                                              width={480}
                                              height={480}
                                              src="/HeroNFT/RaceLads/RaceLads4.png"
                                              alt="RaceLad"
                                              className="w-20 rounded-lg"
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>
            {/* Конец столбца справа*/}
          </div>

          <div> {/* Вторая строка столбца слева*/} </div>
        </div>
        {/* Вся ширина страницы*/}
        {/* Item Activity*/}
        <div className="pt-2">
          <div className="text-darkgreen w-full rounded-2xl border border-p1-green bg-p1-white text-xl shadow-lg dark:bg-p1-deepdarkgreen">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-start py-2">
                {' '}
                <div className="px-2">
                  <Image
                    className="h-10 w-10 transition-all duration-300 ease-in-out hover:scale-125"
                    width={480}
                    height={480}
                    src="/icon/top_down-arrow_green.png"
                    alt="ph"
                  />
                </div>{' '}
                <div className="place-content-center px-4 text-p1-darkgreen dark:text-p1-green">
                  Item Activity
                </div>
              </summary>
              <div className="pl-4 pt-1 text-p1-darkgreen dark:text-p1-green">
                <div className="flex grid-flow-row auto-rows-max justify-center space-x-2 lg:justify-start">
                  <div>
                    <div
                      className="inline-flex w-full justify-center rounded-md pt-1 text-sm shadow-sm"
                      role="group"
                    >
                      <Link
                        href="#"
                        className="inline-block w-full place-content-center rounded-l-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-lg dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                      >
                        Sales
                      </Link>
                      <Link
                        href="#"
                        className="inline-block w-full place-content-center border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-lg dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                      >
                        Deals_accepted
                      </Link>
                      <Link
                        href="#"
                        className="inline-block w-full place-content-center border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-lg dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                      >
                        Listings
                      </Link>

                      <Link
                        href="#"
                        className="inline-block w-full place-content-center border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-lg dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                      >
                        Offers
                      </Link>
                      <Link
                        href="#"
                        className="inline-block w-full place-content-center border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-lg dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                      >
                        Deal_Offers
                      </Link>
                      <Link
                        href="#"
                        className="inline-block w-full place-content-center border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-lg dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                      >
                        Transfers
                      </Link>
                      <Link
                        href="#"
                        className="inline-block w-full place-content-center rounded-r-lg border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-lg dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                      >
                        Clear_All
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Item Activity*/}
                <div className="h-72 place-content-center overflow-x-auto overflow-y-auto p-1 md:visible">
                  <div className="relative shadow-md sm:rounded-lg">
                    <table className="w-full pb-2 text-left text-xl text-p1-darkgreen dark:text-p1-green">
                      <thead className="bg-gray-50 text-xs uppercase text-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                        <tr className="caption-top">
                          <th scope="col" className="px-2 py-3">
                            <div className="flex place-content-start"> Event_logo</div>
                          </th>
                          <th scope="col" className="px-2 py-3">
                            <div className="flex place-content-start"> Event</div>
                          </th>
                          <th scope="col" className="px-2 py-3">
                            <div className="flex place-content-start">Price</div>
                          </th>
                          <th scope="col" className="px-2 py-3">
                            <div className="flex place-content-start">From</div>
                          </th>
                          <th scope="col" className="px-2 py-3">
                            <div className="flex place-content-start">To</div>
                          </th>

                          <th scope="col" className="px-2 py-3">
                            <div className="flex place-content-start">Date</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="place-content-center">
                        <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                          <th
                            scope="row"
                            className="place-content-center whitespace-nowrap px-2 py-2 text-right font-medium"
                          >
                            <Image
                              width={480}
                              height={480}
                              src="/icon/Transfer_green.png"
                              alt="Transfer_green"
                              className="w-6 rounded-lg"
                            />
                          </th>
                          <td className="px-2 py-2">
                            {' '}
                            <div className="relative text-left">Transfer</div>
                          </td>
                          <td className="px-2 py-2 text-left"> ...</td>
                          <td className="px-2 py-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href={'#'}
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  JeamBeam
                                </Link>
                              </div>
                              <div className="invisible absolute -left-1.5 top-0 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads1.png"
                                          alt="RaceLad"
                                          className="w-12 rounded-lg"
                                        />
                                        <div className="font-semibold text-p1-darkgreen">
                                          {' '}
                                          JeamBeam
                                          <div className="text-base font-thin lining-nums text-p1-darkgreen">
                                            {' '}
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>{' '}
                                    </Link>

                                    <div className="grid w-full grid-cols-3 items-center text-center">
                                      <div>
                                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                          collected
                                        </p>
                                        <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                          105
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                          created
                                        </p>
                                        <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                          15
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                          sold
                                        </p>
                                        <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                          12
                                        </p>
                                      </div>
                                    </div>
                                    <div className="inline-flex place-content-center space-x-1">
                                      <Link href="#" className="mx-auto">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads2.png"
                                          alt="RaceLad"
                                          className="w-20 rounded-lg"
                                        />
                                      </Link>
                                      <Link href="#" className="mx-auto">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads3.png"
                                          alt="RaceLad"
                                          className="w-20 rounded-lg"
                                        />
                                      </Link>
                                      <Link href="#" className="mx-auto">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads4.png"
                                          alt="RaceLad"
                                          className="w-20 rounded-lg"
                                        />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="px-2 py-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href={'#'}
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  JeamBeam
                                </Link>
                              </div>
                              <div className="invisible absolute -left-1.5 top-0 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads1.png"
                                          alt="RaceLad"
                                          className="w-12 rounded-lg"
                                        />
                                        <div className="font-semibold text-p1-darkgreen">
                                          {' '}
                                          JeamBeam
                                          <div className="text-base font-thin lining-nums text-p1-darkgreen">
                                            {' '}
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>{' '}
                                    </Link>

                                    <div className="grid w-full grid-cols-3 items-center text-center">
                                      <div>
                                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                          collected
                                        </p>
                                        <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                          105
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                          created
                                        </p>
                                        <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                          15
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                          sold
                                        </p>
                                        <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                          12
                                        </p>
                                      </div>
                                    </div>
                                    <div className="inline-flex place-content-center space-x-1">
                                      <Link href="#" className="mx-auto">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads2.png"
                                          alt="RaceLad"
                                          className="w-20 rounded-lg"
                                        />
                                      </Link>
                                      <Link href="#" className="mx-auto">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads3.png"
                                          alt="RaceLad"
                                          className="w-20 rounded-lg"
                                        />
                                      </Link>
                                      <Link href="#" className="mx-auto">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads4.png"
                                          alt="RaceLad"
                                          className="w-20 rounded-lg"
                                        />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-2 py-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href={'#'}
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  4d ago
                                </Link>
                              </div>
                              <div className="invisible absolute -left-1.5 top-0 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <div className="font-semibold text-p1-darkgreen">
                                          {' '}
                                          на страницу Etherscan
                                          <div className="text-base font-thin lining-nums text-p1-darkgreen">
                                            Transaction Details
                                          </div>
                                        </div>
                                      </div>{' '}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                          <th
                            scope="row"
                            className="place-content-center whitespace-nowrap px-2 py-2 text-right font-medium"
                          >
                            <Image
                              width={480}
                              height={480}
                              src="/logo/shopping-cart.png"
                              alt="shopping-cart"
                              className="w-6 rounded-lg"
                            />
                          </th>
                          <td className="px-2 py-2">
                            {' '}
                            <div className="relative text-left">Sale</div>
                          </td>
                          <td className="px-2 py-2 text-left">2,8413 WETH</td>
                          <td className="px-2 py-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href={'#'}
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  JeamBeam
                                </Link>
                              </div>
                              <div className="invisible absolute -left-1.5 top-0 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads1.png"
                                          alt="RaceLad"
                                          className="w-12 rounded-lg"
                                        />
                                        <div className="font-semibold text-p1-darkgreen">
                                          {' '}
                                          JeamBeam
                                          <div className="text-base font-thin lining-nums text-p1-darkgreen">
                                            {' '}
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>{' '}
                                    </Link>

                                    <div className="grid w-full grid-cols-3 items-center text-center">
                                      <div>
                                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                          collected
                                        </p>
                                        <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                          105
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                          created
                                        </p>
                                        <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                          15
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                          sold
                                        </p>
                                        <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                          12
                                        </p>
                                      </div>
                                    </div>
                                    <div className="inline-flex place-content-center space-x-1">
                                      <Link href="#" className="mx-auto">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads2.png"
                                          alt="RaceLad"
                                          className="w-20 rounded-lg"
                                        />
                                      </Link>
                                      <Link href="#" className="mx-auto">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads3.png"
                                          alt="RaceLad"
                                          className="w-20 rounded-lg"
                                        />
                                      </Link>
                                      <Link href="#" className="mx-auto">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads4.png"
                                          alt="RaceLad"
                                          className="w-20 rounded-lg"
                                        />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="px-2 py-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href={'#'}
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  JeamBeam
                                </Link>
                              </div>
                              <div className="invisible absolute -left-1.5 top-0 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads1.png"
                                          alt="RaceLad"
                                          className="w-12 rounded-lg"
                                        />
                                        <div className="font-semibold text-p1-darkgreen">
                                          {' '}
                                          JeamBeam
                                          <div className="text-base font-thin lining-nums text-p1-darkgreen">
                                            {' '}
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>{' '}
                                    </Link>

                                    <div className="grid w-full grid-cols-3 items-center text-center">
                                      <div>
                                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                          collected
                                        </p>
                                        <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                          105
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                          created
                                        </p>
                                        <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                          15
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                          sold
                                        </p>
                                        <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                          12
                                        </p>
                                      </div>
                                    </div>
                                    <div className="inline-flex place-content-center space-x-1">
                                      <Link href="#" className="mx-auto">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads2.png"
                                          alt="RaceLad"
                                          className="w-20 rounded-lg"
                                        />
                                      </Link>
                                      <Link href="#" className="mx-auto">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads3.png"
                                          alt="RaceLad"
                                          className="w-20 rounded-lg"
                                        />
                                      </Link>
                                      <Link href="#" className="mx-auto">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads4.png"
                                          alt="RaceLad"
                                          className="w-20 rounded-lg"
                                        />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-2 py-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href={'#'}
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  4d ago
                                </Link>
                              </div>
                              <div className="invisible absolute -left-1.5 top-0 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <div className="font-semibold text-p1-darkgreen">
                                          {' '}
                                          на страницу Etherscan
                                          <div className="text-base font-thin lining-nums text-p1-darkgreen">
                                            Transaction Details
                                          </div>
                                        </div>
                                      </div>{' '}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                          <th
                            scope="row"
                            className="place-content-center whitespace-nowrap px-2 py-2 text-right font-medium"
                          >
                            <Image
                              width={480}
                              height={480}
                              src="/icon/mint_green.png"
                              alt="mint"
                              className="w-8 rounded-lg"
                            />
                          </th>
                          <td className="px-2 py-2">
                            {' '}
                            <div className="relative text-left">Mint</div>
                          </td>
                          <td className="px-2 py-2 text-left">0,03 ETH</td>
                          <td className="px-2 py-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href={'#'}
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  NulAdress
                                </Link>
                              </div>
                              <div className="invisible absolute -left-1.5 top-0 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads1.png"
                                          alt="RaceLad"
                                          className="w-12 rounded-lg"
                                        />
                                        <div className="font-semibold text-p1-darkgreen">
                                          {' '}
                                          JeamBeam
                                          <div className="text-base font-thin lining-nums text-p1-darkgreen">
                                            {' '}
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>{' '}
                                    </Link>

                                    <div className="grid w-full grid-cols-3 items-center text-center">
                                      <div>
                                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                          collected
                                        </p>
                                        <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                          105
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                          created
                                        </p>
                                        <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                          15
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                          sold
                                        </p>
                                        <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                          12
                                        </p>
                                      </div>
                                    </div>
                                    <div className="inline-flex place-content-center space-x-1">
                                      <Link href="#" className="mx-auto">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads2.png"
                                          alt="RaceLad"
                                          className="w-20 rounded-lg"
                                        />
                                      </Link>
                                      <Link href="#" className="mx-auto">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads3.png"
                                          alt="RaceLad"
                                          className="w-20 rounded-lg"
                                        />
                                      </Link>
                                      <Link href="#" className="mx-auto">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads4.png"
                                          alt="RaceLad"
                                          className="w-20 rounded-lg"
                                        />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="px-2 py-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href={'#'}
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  JeamBeam
                                </Link>
                              </div>
                              <div className="invisible absolute -left-1.5 top-0 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads1.png"
                                          alt="RaceLad"
                                          className="w-12 rounded-lg"
                                        />
                                        <div className="font-semibold text-p1-darkgreen">
                                          {' '}
                                          JeamBeam
                                          <div className="text-base font-thin lining-nums text-p1-darkgreen">
                                            {' '}
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>{' '}
                                    </Link>

                                    <div className="grid w-full grid-cols-3 items-center text-center">
                                      <div>
                                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                          collected
                                        </p>
                                        <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                          105
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                          created
                                        </p>
                                        <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                          15
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                                          sold
                                        </p>
                                        <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                                          12
                                        </p>
                                      </div>
                                    </div>
                                    <div className="inline-flex place-content-center space-x-1">
                                      <Link href="#" className="mx-auto">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads2.png"
                                          alt="RaceLad"
                                          className="w-20 rounded-lg"
                                        />
                                      </Link>
                                      <Link href="#" className="mx-auto">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads3.png"
                                          alt="RaceLad"
                                          className="w-20 rounded-lg"
                                        />
                                      </Link>
                                      <Link href="#" className="mx-auto">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads4.png"
                                          alt="RaceLad"
                                          className="w-20 rounded-lg"
                                        />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-2 py-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href={'#'}
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  4d ago
                                </Link>
                              </div>
                              <div className="invisible absolute -left-1.5 top-0 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2 bg-opacity-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <div className="font-semibold text-p1-darkgreen">
                                          {' '}
                                          на страницу Etherscan
                                          <div className="text-base font-thin lining-nums text-p1-darkgreen">
                                            Transaction Details
                                          </div>
                                        </div>
                                      </div>{' '}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>

        <div className="pt-2">
          <div className="text-darkgreen w-full rounded-2xl border border-p1-green bg-p1-white text-xl shadow-lg dark:bg-p1-deepdarkgreen">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-start py-2">
                <div className="px-2">
                  <Image
                    className="h-10 w-10 transition-all duration-300 ease-in-out hover:scale-125"
                    width={480}
                    height={480}
                    src="/icon/more.png"
                    alt="ph"
                  />
                </div>
                <div className="place-content-center px-4 text-p1-darkgreen dark:text-p1-green">
                  More From This Collection
                </div>
              </summary>
              <div className="pl-4 pt-1 text-p1-darkgreen dark:text-p1-green">
                {/* Карусель Карточки коллекции*/}
                <div className="w-full snap-x space-x-6 place-self-center overflow-x-auto rounded-3xl bg-p1-white bg-opacity-0 p-4 dark:bg-p1-green dark:bg-opacity-0">
                  <Swiper
                    autoplay={{
                      delay: 9500,
                      pauseOnMouseEnter: true,
                    }}
                    direction={'horizontal'}
                    spaceBetween={1}
                    slidesPerView={Math.floor(width / cardWidth)}
                    mousewheel={true}
                    modules={[Autoplay, Mousewheel, Navigation]}
                    navigation={false}
                    pagination={{
                      clickable: true,
                    }}
                    loop={true}
                    className="mySwyper place-items-center"
                  >
                    <SwiperSlide>
                      <div className="group relative h-[21.5rem] w-[15rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute right-1 top-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                            <Link
                              href={'#'}
                              className="z-50 grid w-8 place-content-center transition-all delay-75 duration-300 ease-in-out hover:scale-125"
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
                              src="/HeroNFT/RaceLads/RaceLads1.png"
                              alt="RaceLads"
                              className="h-[15rem] w-[15rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p2-white2 bg-opacity-100 p-1 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:bg-opacity-100 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
                          <div className="flex items-center justify-between pt-1">
                            <div className="px-2 text-left text-base font-bold">RaceLad</div>
                            <div className="px-2 text-left text-base font-bold"># 2222</div>
                          </div>

                          <div className="px-2 pb-12 pt-2">
                            <div className="flex items-center justify-between">
                              <div className="text-center">
                                <p className="text-center text-base">
                                  Price:
                                  <Image
                                    className="relative inline-block w-5 space-x-4 px-1"
                                    layout="intrinsic"
                                    width={50}
                                    height={50}
                                    src="/Logo/eth1.png"
                                    alt="eth"
                                  />
                                  0.001
                                </p>
                              </div>
                            </div>
                            <div className="text-left text-base font-thin">
                              {' '}
                              Last sale: 1000 WETH
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 h-[2.8rem] w-[15rem] translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-p2-white2 shadow-sm shadow-p1-green transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p1-deepdarkgreen">
                            <div
                              className="inline-flex h-[2.8rem] w-[15rem] justify-center text-sm"
                              role="group"
                            >
                              <Link
                                href="#"
                                className="grid w-4/5 place-content-center rounded-bl-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-base shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <div className="flex items-center justify-between space-x-4">
                                  <div className="text-base leading-4">Buy:</div>
                                  <p className="text-center text-base leading-3">
                                    <Image
                                      className="relative inline-block w-5 px-1"
                                      layout="intrinsic"
                                      width={50}
                                      height={50}
                                      src="/Logo/eth1.png"
                                      alt="eth"
                                    />
                                    0.001
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href={'#'}
                                className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <Image
                                  className="bg-p1-darkgreenе inline-block h-6 w-6 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
                                  width={480}
                                  height={480}
                                  src="/Logo/shopping-cart-white.png"
                                  alt="Bordered avatar"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="group relative h-[21.5rem] w-[15rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute right-1 top-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                            <Link
                              href={'#'}
                              className="z-50 grid w-8 place-content-center transition-all delay-75 duration-300 ease-in-out hover:scale-125"
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
                              src="/HeroNFT/RaceLads/RaceLads1.png"
                              alt="RaceLads"
                              className="h-[15rem] w-[15rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p2-white2 bg-opacity-100 p-1 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:bg-opacity-100 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
                          <div className="flex items-center justify-between pt-1">
                            <div className="px-2 text-left text-base font-bold">RaceLad</div>
                            <div className="px-2 text-left text-base font-bold"># 2222</div>
                          </div>

                          <div className="px-2 pb-12 pt-2">
                            <div className="flex items-center justify-between">
                              <div className="text-center">
                                <p className="text-center text-base">
                                  Price:
                                  <Image
                                    className="relative inline-block w-5 space-x-4 px-1"
                                    layout="intrinsic"
                                    width={50}
                                    height={50}
                                    src="/Logo/eth1.png"
                                    alt="eth"
                                  />
                                  0.001
                                </p>
                              </div>
                            </div>
                            <div className="text-left text-base font-thin">
                              {' '}
                              Last sale: 1000 WETH
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 h-[2.8rem] w-[15rem] translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-p2-white2 shadow-sm shadow-p1-green transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p1-deepdarkgreen">
                            <div
                              className="inline-flex h-[2.8rem] w-[15rem] justify-center text-sm"
                              role="group"
                            >
                              <Link
                                href="#"
                                className="grid w-4/5 place-content-center rounded-bl-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-base shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <div className="flex items-center justify-between space-x-4">
                                  <div className="text-base leading-4">Buy:</div>
                                  <p className="text-center text-base leading-3">
                                    <Image
                                      className="relative inline-block w-5 px-1"
                                      layout="intrinsic"
                                      width={50}
                                      height={50}
                                      src="/Logo/eth1.png"
                                      alt="eth"
                                    />
                                    0.001
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href={'#'}
                                className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <Image
                                  className="bg-p1-darkgreenе inline-block h-6 w-6 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
                                  width={480}
                                  height={480}
                                  src="/Logo/shopping-cart-white.png"
                                  alt="Bordered avatar"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="group relative h-[21.5rem] w-[15rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute right-1 top-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                            <Link
                              href={'#'}
                              className="z-50 grid w-8 place-content-center transition-all delay-75 duration-300 ease-in-out hover:scale-125"
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
                              src="/HeroNFT/RaceLads/RaceLads1.png"
                              alt="RaceLads"
                              className="h-[15rem] w-[15rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p2-white2 bg-opacity-100 p-1 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:bg-opacity-100 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
                          <div className="flex items-center justify-between pt-1">
                            <div className="px-2 text-left text-base font-bold">RaceLad</div>
                            <div className="px-2 text-left text-base font-bold"># 2222</div>
                          </div>

                          <div className="px-2 pb-12 pt-2">
                            <div className="flex items-center justify-between">
                              <div className="text-center">
                                <p className="text-center text-base">
                                  Price:
                                  <Image
                                    className="relative inline-block w-5 space-x-4 px-1"
                                    layout="intrinsic"
                                    width={50}
                                    height={50}
                                    src="/Logo/eth1.png"
                                    alt="eth"
                                  />
                                  0.001
                                </p>
                              </div>
                            </div>
                            <div className="text-left text-base font-thin">
                              {' '}
                              Last sale: 1000 WETH
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 h-[2.8rem] w-[15rem] translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-p2-white2 shadow-sm shadow-p1-green transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p1-deepdarkgreen">
                            <div
                              className="inline-flex h-[2.8rem] w-[15rem] justify-center text-sm"
                              role="group"
                            >
                              <Link
                                href="#"
                                className="grid w-4/5 place-content-center rounded-bl-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-base shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <div className="flex items-center justify-between space-x-4">
                                  <div className="text-base leading-4">Buy:</div>
                                  <p className="text-center text-base leading-3">
                                    <Image
                                      className="relative inline-block w-5 px-1"
                                      layout="intrinsic"
                                      width={50}
                                      height={50}
                                      src="/Logo/eth1.png"
                                      alt="eth"
                                    />
                                    0.001
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href={'#'}
                                className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <Image
                                  className="bg-p1-darkgreenе inline-block h-6 w-6 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
                                  width={480}
                                  height={480}
                                  src="/Logo/shopping-cart-white.png"
                                  alt="Bordered avatar"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="group relative h-[21.5rem] w-[15rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute right-1 top-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                            <Link
                              href={'#'}
                              className="z-50 grid w-8 place-content-center transition-all delay-75 duration-300 ease-in-out hover:scale-125"
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
                              src="/HeroNFT/RaceLads/RaceLads1.png"
                              alt="RaceLads"
                              className="h-[15rem] w-[15rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p2-white2 bg-opacity-100 p-1 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:bg-opacity-100 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
                          <div className="flex items-center justify-between pt-1">
                            <div className="px-2 text-left text-base font-bold">RaceLad</div>
                            <div className="px-2 text-left text-base font-bold"># 2222</div>
                          </div>

                          <div className="px-2 pb-12 pt-2">
                            <div className="flex items-center justify-between">
                              <div className="text-center">
                                <p className="text-center text-base">
                                  Price:
                                  <Image
                                    className="relative inline-block w-5 space-x-4 px-1"
                                    layout="intrinsic"
                                    width={50}
                                    height={50}
                                    src="/Logo/eth1.png"
                                    alt="eth"
                                  />
                                  0.001
                                </p>
                              </div>
                            </div>
                            <div className="text-left text-base font-thin">
                              {' '}
                              Last sale: 1000 WETH
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 h-[2.8rem] w-[15rem] translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-p2-white2 shadow-sm shadow-p1-green transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p1-deepdarkgreen">
                            <div
                              className="inline-flex h-[2.8rem] w-[15rem] justify-center text-sm"
                              role="group"
                            >
                              <Link
                                href="#"
                                className="grid w-4/5 place-content-center rounded-bl-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-base shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <div className="flex items-center justify-between space-x-4">
                                  <div className="text-base leading-4">Buy:</div>
                                  <p className="text-center text-base leading-3">
                                    <Image
                                      className="relative inline-block w-5 px-1"
                                      layout="intrinsic"
                                      width={50}
                                      height={50}
                                      src="/Logo/eth1.png"
                                      alt="eth"
                                    />
                                    0.001
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href={'#'}
                                className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <Image
                                  className="bg-p1-darkgreenе inline-block h-6 w-6 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
                                  width={480}
                                  height={480}
                                  src="/Logo/shopping-cart-white.png"
                                  alt="Bordered avatar"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="group relative h-[21.5rem] w-[15rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute right-1 top-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                            <Link
                              href={'#'}
                              className="z-50 grid w-8 place-content-center transition-all delay-75 duration-300 ease-in-out hover:scale-125"
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
                              src="/HeroNFT/RaceLads/RaceLads1.png"
                              alt="RaceLads"
                              className="h-[15rem] w-[15rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p2-white2 bg-opacity-100 p-1 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:bg-opacity-100 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
                          <div className="flex items-center justify-between pt-1">
                            <div className="px-2 text-left text-base font-bold">RaceLad</div>
                            <div className="px-2 text-left text-base font-bold"># 2222</div>
                          </div>

                          <div className="px-2 pb-12 pt-2">
                            <div className="flex items-center justify-between">
                              <div className="text-center">
                                <p className="text-center text-base">
                                  Price:
                                  <Image
                                    className="relative inline-block w-5 space-x-4 px-1"
                                    layout="intrinsic"
                                    width={50}
                                    height={50}
                                    src="/Logo/eth1.png"
                                    alt="eth"
                                  />
                                  0.001
                                </p>
                              </div>
                            </div>
                            <div className="text-left text-base font-thin">
                              {' '}
                              Last sale: 1000 WETH
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 h-[2.8rem] w-[15rem] translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-p2-white2 shadow-sm shadow-p1-green transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p1-deepdarkgreen">
                            <div
                              className="inline-flex h-[2.8rem] w-[15rem] justify-center text-sm"
                              role="group"
                            >
                              <Link
                                href="#"
                                className="grid w-4/5 place-content-center rounded-bl-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-base shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <div className="flex items-center justify-between space-x-4">
                                  <div className="text-base leading-4">Buy:</div>
                                  <p className="text-center text-base leading-3">
                                    <Image
                                      className="relative inline-block w-5 px-1"
                                      layout="intrinsic"
                                      width={50}
                                      height={50}
                                      src="/Logo/eth1.png"
                                      alt="eth"
                                    />
                                    0.001
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href={'#'}
                                className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <Image
                                  className="bg-p1-darkgreenе inline-block h-6 w-6 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
                                  width={480}
                                  height={480}
                                  src="/Logo/shopping-cart-white.png"
                                  alt="Bordered avatar"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="group relative h-[21.5rem] w-[15rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute right-1 top-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                            <Link
                              href={'#'}
                              className="z-50 grid w-8 place-content-center transition-all delay-75 duration-300 ease-in-out hover:scale-125"
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
                              src="/HeroNFT/RaceLads/RaceLads1.png"
                              alt="RaceLads"
                              className="h-[15rem] w-[15rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p2-white2 bg-opacity-100 p-1 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:bg-opacity-100 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
                          <div className="flex items-center justify-between pt-1">
                            <div className="px-2 text-left text-base font-bold">RaceLad</div>
                            <div className="px-2 text-left text-base font-bold"># 2222</div>
                          </div>

                          <div className="px-2 pb-12 pt-2">
                            <div className="flex items-center justify-between">
                              <div className="text-center">
                                <p className="text-center text-base">
                                  Price:
                                  <Image
                                    className="relative inline-block w-5 space-x-4 px-1"
                                    layout="intrinsic"
                                    width={50}
                                    height={50}
                                    src="/Logo/eth1.png"
                                    alt="eth"
                                  />
                                  0.001
                                </p>
                              </div>
                            </div>
                            <div className="text-left text-base font-thin">
                              {' '}
                              Last sale: 1000 WETH
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 h-[2.8rem] w-[15rem] translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-p2-white2 shadow-sm shadow-p1-green transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p1-deepdarkgreen">
                            <div
                              className="inline-flex h-[2.8rem] w-[15rem] justify-center text-sm"
                              role="group"
                            >
                              <Link
                                href="#"
                                className="grid w-4/5 place-content-center rounded-bl-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-base shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <div className="flex items-center justify-between space-x-4">
                                  <div className="text-base leading-4">Buy:</div>
                                  <p className="text-center text-base leading-3">
                                    <Image
                                      className="relative inline-block w-5 px-1"
                                      layout="intrinsic"
                                      width={50}
                                      height={50}
                                      src="/Logo/eth1.png"
                                      alt="eth"
                                    />
                                    0.001
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href={'#'}
                                className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <Image
                                  className="bg-p1-darkgreenе inline-block h-6 w-6 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
                                  width={480}
                                  height={480}
                                  src="/Logo/shopping-cart-white.png"
                                  alt="Bordered avatar"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="group relative h-[21.5rem] w-[15rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute right-1 top-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                            <Link
                              href={'#'}
                              className="z-50 grid w-8 place-content-center transition-all delay-75 duration-300 ease-in-out hover:scale-125"
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
                              src="/HeroNFT/RaceLads/RaceLads1.png"
                              alt="RaceLads"
                              className="h-[15rem] w-[15rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p2-white2 bg-opacity-100 p-1 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:bg-opacity-100 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
                          <div className="flex items-center justify-between pt-1">
                            <div className="px-2 text-left text-base font-bold">RaceLad</div>
                            <div className="px-2 text-left text-base font-bold"># 2222</div>
                          </div>

                          <div className="px-2 pb-12 pt-2">
                            <div className="flex items-center justify-between">
                              <div className="text-center">
                                <p className="text-center text-base">
                                  Price:
                                  <Image
                                    className="relative inline-block w-5 space-x-4 px-1"
                                    layout="intrinsic"
                                    width={50}
                                    height={50}
                                    src="/Logo/eth1.png"
                                    alt="eth"
                                  />
                                  0.001
                                </p>
                              </div>
                            </div>
                            <div className="text-left text-base font-thin">
                              {' '}
                              Last sale: 1000 WETH
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 h-[2.8rem] w-[15rem] translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-p2-white2 shadow-sm shadow-p1-green transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p1-deepdarkgreen">
                            <div
                              className="inline-flex h-[2.8rem] w-[15rem] justify-center text-sm"
                              role="group"
                            >
                              <Link
                                href="#"
                                className="grid w-4/5 place-content-center rounded-bl-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-base shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <div className="flex items-center justify-between space-x-4">
                                  <div className="text-base leading-4">Buy:</div>
                                  <p className="text-center text-base leading-3">
                                    <Image
                                      className="relative inline-block w-5 px-1"
                                      layout="intrinsic"
                                      width={50}
                                      height={50}
                                      src="/Logo/eth1.png"
                                      alt="eth"
                                    />
                                    0.001
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href={'#'}
                                className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <Image
                                  className="bg-p1-darkgreenе inline-block h-6 w-6 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
                                  width={480}
                                  height={480}
                                  src="/Logo/shopping-cart-white.png"
                                  alt="Bordered avatar"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="group relative h-[21.5rem] w-[15rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute right-1 top-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                            <Link
                              href={'#'}
                              className="z-50 grid w-8 place-content-center transition-all delay-75 duration-300 ease-in-out hover:scale-125"
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
                              src="/HeroNFT/RaceLads/RaceLads1.png"
                              alt="RaceLads"
                              className="h-[15rem] w-[15rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p2-white2 bg-opacity-100 p-1 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:bg-opacity-100 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
                          <div className="flex items-center justify-between pt-1">
                            <div className="px-2 text-left text-base font-bold">RaceLad</div>
                            <div className="px-2 text-left text-base font-bold"># 2222</div>
                          </div>

                          <div className="px-2 pb-12 pt-2">
                            <div className="flex items-center justify-between">
                              <div className="text-center">
                                <p className="text-center text-base">
                                  Price:
                                  <Image
                                    className="relative inline-block w-5 space-x-4 px-1"
                                    layout="intrinsic"
                                    width={50}
                                    height={50}
                                    src="/Logo/eth1.png"
                                    alt="eth"
                                  />
                                  0.001
                                </p>
                              </div>
                            </div>
                            <div className="text-left text-base font-thin">
                              {' '}
                              Last sale: 1000 WETH
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 h-[2.8rem] w-[15rem] translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-p2-white2 shadow-sm shadow-p1-green transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p1-deepdarkgreen">
                            <div
                              className="inline-flex h-[2.8rem] w-[15rem] justify-center text-sm"
                              role="group"
                            >
                              <Link
                                href="#"
                                className="grid w-4/5 place-content-center rounded-bl-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-base shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <div className="flex items-center justify-between space-x-4">
                                  <div className="text-base leading-4">Buy:</div>
                                  <p className="text-center text-base leading-3">
                                    <Image
                                      className="relative inline-block w-5 px-1"
                                      layout="intrinsic"
                                      width={50}
                                      height={50}
                                      src="/Logo/eth1.png"
                                      alt="eth"
                                    />
                                    0.001
                                  </p>
                                </div>
                              </Link>

                              <Link
                                href={'#'}
                                className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <Image
                                  className="bg-p1-darkgreenе inline-block h-6 w-6 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
                                  width={480}
                                  height={480}
                                  src="/Logo/shopping-cart-white.png"
                                  alt="Bordered avatar"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div className="pb-2"></div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>

      <div id="2"></div>
      <div className="m-2">
        <div className="text-darkgreen w-full rounded-2xl border border-p1-green bg-p1-white text-xl shadow-lg dark:bg-p1-deepdarkgreen">
          <details className="m-2">
            <summary className="relative flex cursor-pointer justify-start py-2">
              {' '}
              <div className="px-2">
                <Image
                  className="h-10 w-10 transition-all duration-300 ease-in-out hover:scale-125"
                  width={480}
                  height={480}
                  src="/icon/more.png"
                  alt="ph"
                />
              </div>{' '}
              <div className="place-content-center px-4 text-p1-darkgreen dark:text-p1-green">
                More Collections By GAA
              </div>
            </summary>
            <div className="pl-4 pt-1 text-p1-darkgreen dark:text-p1-green">
              {/* Карусель Карточки коллекции*/}
              <div className="w-full snap-x space-x-6 place-self-center overflow-x-auto rounded-3xl bg-p1-white bg-opacity-0 p-4 dark:bg-p1-green dark:bg-opacity-0">
                <Swiper
                  autoplay={{
                    delay: 9500,
                    pauseOnMouseEnter: true,
                  }}
                  direction={'horizontal'}
                  spaceBetween={1}
                  slidesPerView={Math.floor(width / cardWidth)}
                  mousewheel={true}
                  modules={[Autoplay, Mousewheel, Navigation]}
                  navigation={false}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}
                  className="mySwyper place-items-center"
                >
                  <SwiperSlide>
                    <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100 bg-opacity-50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:bg-opacity-80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                      <Link href="#" className="mx-auto justify-center">
                        <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-2">
                          <Image
                            width={480}
                            height={480}
                            src="/HeroNFT/RaceLads/RaceLads1.png"
                            alt="RaceLad"
                            className="w-full"
                          />
                          <div>
                            <h2 className="spacing-1 text-xl font-bold text-p1-darkgreen xl:text-2xl dark:text-p1-cyan">
                              RaceLads
                            </h2>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="w-full place-content-end rounded-md border border-p1-cyan bg-p1-green py-2 text-white hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-lg dark:hover:shadow-p1-darkgreen">
                              Explore Collection
                            </button>
                          </div>
                        </div>{' '}
                        <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Items</p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              10,000
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                              Floor Price
                            </p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              <Image
                                className="relative inline-block w-8 px-1"
                                layout="intrinsic"
                                width={50}
                                height={50}
                                src="/Logo/eth.png"
                                alt="eth"
                              />{' '}
                              15.2
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                              Total Volume
                            </p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              25K
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100 bg-opacity-50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:bg-opacity-80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                      <Link href="#" className="mx-auto justify-center">
                        <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-2">
                          <Image
                            width={480}
                            height={480}
                            src="/HeroNFT/Drivers/Driver4.png"
                            alt="RaceLad"
                            className="w-full"
                          />
                          <div>
                            <h2 className="spacing-1 text-xl font-bold text-p1-darkgreen xl:text-2xl dark:text-p1-cyan">
                              Drivers
                            </h2>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="w-full place-content-end rounded-md border border-p1-cyan bg-p1-green py-2 text-white hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-lg dark:hover:shadow-p1-darkgreen">
                              Explore Collection
                            </button>
                          </div>
                        </div>{' '}
                        <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Items</p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              10,000
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                              Floor Price
                            </p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              <Image
                                className="relative inline-block w-8 px-1"
                                layout="intrinsic"
                                width={50}
                                height={50}
                                src="/Logo/eth.png"
                                alt="eth"
                              />{' '}
                              15.2
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                              Total Volume
                            </p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              25K
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100 bg-opacity-50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:bg-opacity-80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                      <Link href="#" className="mx-auto justify-center">
                        <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-2">
                          <Image
                            width={480}
                            height={480}
                            src="/HeroNFT/Team's members/TeamMember1.png"
                            alt="Team's member1"
                            className="w-full"
                          />
                          <div>
                            <h2 className="spacing-1 text-xl font-bold text-p1-darkgreen xl:text-2xl dark:text-p1-cyan">
                              Team&apos;s Members
                            </h2>

                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="w-full place-content-end rounded-md border border-p1-cyan bg-p1-green py-2 text-white hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-lg dark:hover:shadow-p1-darkgreen">
                              Explore Collection
                            </button>
                          </div>
                        </div>{' '}
                        <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Items</p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              10,000
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                              Floor Price
                            </p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              <Image
                                className="relative inline-block w-8 px-1"
                                layout="intrinsic"
                                width={50}
                                height={50}
                                src="/Logo/eth.png"
                                alt="eth"
                              />{' '}
                              15.2
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                              Total Volume
                            </p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              25K
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100 bg-opacity-50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:bg-opacity-80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                      <Link href="#" className="mx-auto justify-center">
                        <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-2">
                          <Image
                            width={480}
                            height={480}
                            src="/HeroNFT/Collectors/Collector1.png"
                            alt="RaceLad"
                            className="w-full"
                          />
                          <div>
                            <h2 className="spacing-1 text-xl font-bold text-p1-darkgreen xl:text-2xl dark:text-p1-cyan">
                              Collectors
                            </h2>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="w-full place-content-end rounded-md border border-p1-cyan bg-p1-green py-2 text-white hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-lg dark:hover:shadow-p1-darkgreen">
                              Explore Collection
                            </button>
                          </div>
                        </div>{' '}
                        <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Items</p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              10,000
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                              Floor Price
                            </p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              <Image
                                className="relative inline-block w-8 px-1"
                                layout="intrinsic"
                                width={50}
                                height={50}
                                src="/Logo/eth.png"
                                alt="eth"
                              />{' '}
                              15.2
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                              Total Volume
                            </p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              25K
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100 bg-opacity-50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:bg-opacity-80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                      <Link href="#" className="mx-auto justify-center">
                        <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-2">
                          <Image
                            width={480}
                            height={480}
                            src="/Cars/Car.png"
                            alt="Car"
                            className="w-full"
                          />
                          <div>
                            <h2 className="spacing-1 text-xl font-bold text-p1-darkgreen xl:text-2xl dark:text-p1-cyan">
                              Cars
                            </h2>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="w-full place-content-end rounded-md border border-p1-cyan bg-p1-green py-2 text-white hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-lg dark:hover:shadow-p1-darkgreen">
                              Explore Collection
                            </button>
                          </div>
                        </div>{' '}
                        <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Items</p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              10,000
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                              Floor Price
                            </p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              <Image
                                className="relative inline-block w-8 px-1"
                                layout="intrinsic"
                                width={50}
                                height={50}
                                src="/Logo/eth.png"
                                alt="eth"
                              />{' '}
                              15.2
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                              Total Volume
                            </p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              25K
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100 bg-opacity-50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:bg-opacity-80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                      <Link href="#" className="mx-auto justify-center">
                        <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-2">
                          <Image
                            width={480}
                            height={480}
                            src="/HeroNFT/CustomLads/CustomLads1.png"
                            alt="CustomLad"
                            className="w-full"
                          />
                          <div>
                            <h2 className="spacing-1 text-xl font-bold text-p1-darkgreen xl:text-2xl dark:text-p1-cyan">
                              Custom Lads
                            </h2>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="w-full place-content-end rounded-md border border-p1-cyan bg-p1-green py-2 text-white hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-lg dark:hover:shadow-p1-darkgreen">
                              Explore Collection
                            </button>
                          </div>
                        </div>{' '}
                        <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Items</p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              10,000
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                              Floor Price
                            </p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              <Image
                                className="relative inline-block w-8 px-1"
                                layout="intrinsic"
                                width={50}
                                height={50}
                                src="/Logo/eth.png"
                                alt="eth"
                              />{' '}
                              15.2
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                              Total Volume
                            </p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              25K
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100 bg-opacity-50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:bg-opacity-80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                      <Link href="#" className="mx-auto justify-center">
                        <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-2">
                          <Image
                            width={480}
                            height={480}
                            src="/Hero/Rewards.png"
                            alt="Rewards"
                            className="w-full"
                          />
                          <div>
                            <h2 className="spacing-1 text-xl font-bold text-p1-darkgreen xl:text-2xl dark:text-p1-cyan">
                              Awards
                            </h2>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="w-full place-content-end rounded-md border border-p1-cyan bg-p1-green py-2 text-white hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-lg dark:hover:shadow-p1-darkgreen">
                              Explore Collection
                            </button>
                          </div>
                        </div>{' '}
                        <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Items</p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              10,000
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                              Floor Price
                            </p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              <Image
                                className="relative inline-block w-8 px-1"
                                layout="intrinsic"
                                width={50}
                                height={50}
                                src="/Logo/eth.png"
                                alt="eth"
                              />{' '}
                              15.2
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                              Total Volume
                            </p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              25K
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100 bg-opacity-50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:bg-opacity-80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                      <Link href="#" className="mx-auto justify-center">
                        <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-2">
                          <Image
                            width={480}
                            height={480}
                            src="/Licenses/Global Lic.png"
                            alt="GlobalLic"
                            className="w-full"
                          />
                          <div>
                            <h2 className="spacing-1 text-xl font-bold text-p1-darkgreen xl:text-2xl dark:text-p1-cyan">
                              Licenses
                            </h2>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="w-full place-content-end rounded-md border border-p1-cyan bg-p1-green py-2 text-white hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-lg dark:hover:shadow-p1-darkgreen">
                              Explore Collection
                            </button>
                          </div>
                        </div>{' '}
                        <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Items</p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              10,000
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                              Floor Price
                            </p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              <Image
                                className="relative inline-block w-8 px-1"
                                layout="intrinsic"
                                width={50}
                                height={50}
                                src="/Logo/eth.png"
                                alt="eth"
                              />{' '}
                              15.2
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">
                              Total Volume
                            </p>
                            <p className="text-lg font-semibold text-p1-deepdarkgreen dark:text-p1-cyan">
                              25K
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                </Swiper>

                <div className="pb-2"></div>
              </div>
            </div>
          </details>
        </div>
      </div>
      <div id="3"></div>
      <div className="pb-4"></div>
    </div>
  );
}
