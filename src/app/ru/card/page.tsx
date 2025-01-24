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
    <div className="mx-auto w-full font-serif md:px-6 lg:px-10 xl:px-14 2xl:px-16">
      <JumpButton points={jumpPoints} />

      <div id="1"></div>
      <div className="bg-p1-white dark:bg-p1-deepdarkgreen h-1/6 bg-cover bg-center p-2 dark:brightness-75">
        <div className="flex justify-center space-x-2"></div>
        <div className="grid grid-cols-2 justify-center p-1 md:justify-between">
          <div className="flex justify-start space-x-6"></div>

          {/* кошелек, профиль, корзина */}
          <div className="flex justify-end space-x-6 px-2 md:px-10">
            <div>
              <Link href={'#'} className="mx-auto justify-center">
                <Image
                  className="ring-p1-green hover:bg-p1-white hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-deepdarkgreen h-10 w-10 rounded-lg p-1 transition-all delay-75 duration-300 ease-in-out hover:ring-2"
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
                  className="ring-p1-green hover:bg-p1-white hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-deepdarkgreen h-10 w-10 rounded-full p-1 transition-all delay-75 duration-300 ease-in-out hover:ring-2"
                  width={480}
                  height={480}
                  src="/Logo/user.png"
                  alt="Bordered avatar"
                />

                <div className="bg-p1-cyan invisible absolute left-1/2 z-10 mt-2 w-40 -translate-x-1/2 transform rounded-xl bg-center p-4 text-gray-800 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100 md:w-52">
                  <div className="border-p1-darkgreen text-p1-darkgreen hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen dark:border-p1-deepdarkgreen rounded-lg border-b p-1 text-xl font-semibold transition-all duration-300 ease-in-out md:px-3">
                    <Link href={'/profile'} className="mx-auto justify-center">
                      <Image
                        className="h-10 w-10"
                        width={480}
                        height={480}
                        src="/icon/NFT_user_green.png"
                        alt="Bordered avatar"
                      />
                      Profile
                    </Link>
                  </div>
                  <div className="border-p1-darkgreen text-p1-darkgreen hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen dark:border-p1-deepdarkgreen rounded-lg border-b p-1 text-xl font-semibold transition-all duration-300 ease-in-out md:px-3">
                    <Link href={'/dashboard'} className="mx-auto justify-center">
                      <Image
                        className="h-10 w-10"
                        width={480}
                        height={480}
                        src="/icon/more.png"
                        alt="Bordered avatar"
                      />
                      Dashboard
                    </Link>
                  </div>
                  <div className="border-p1-darkgreen text-p1-darkgreen hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen dark:border-p1-deepdarkgreen rounded-lg border-b p-1 text-xl font-semibold transition-all duration-300 ease-in-out md:px-3">
                    <Link href={'/marketplace'} className="mx-auto justify-center">
                      <Image
                        className="h-10 w-10"
                        width={480}
                        height={480}
                        src="/Logo/shopping-cart.png"
                        alt="Bordered avatar"
                      />
                      Marketplace
                    </Link>
                  </div>
                  <div className="border-p1-darkgreen text-p1-darkgreen hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen dark:border-p1-deepdarkgreen rounded-lg border-b p-1 text-xl font-semibold transition-all duration-300 ease-in-out md:px-3">
                    <Link href={'/mynfts'} className="mx-auto justify-center">
                      <Image
                        className="h-10 w-10"
                        width={480}
                        height={480}
                        src="/icon/NFT-col.png"
                        alt="Bordered avatar"
                      />
                      My NFT{' '}
                    </Link>
                  </div>

                  <div className="border-p1-darkgreen text-p1-darkgreen hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen dark:border-p1-deepdarkgreen rounded-lg border-b p-1 text-xl font-semibold transition-all duration-300 ease-in-out md:px-3">
                    <Link href={'#'} className="mx-auto justify-center">
                      <Image
                        className="h-10 w-10"
                        width={480}
                        height={480}
                        src="/icon/view_green.png"
                        alt="Bordered avatar"
                      />
                      Watchlist
                    </Link>
                  </div>

                  <div className="border-p1-darkgreen text-p1-darkgreen hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen dark:border-p1-deepdarkgreen rounded-lg border-b p-1 text-xl font-semibold transition-all duration-300 ease-in-out md:px-3">
                    <Link href={'#'} className="mx-auto justify-center">
                      <Image
                        className="h-10 w-10"
                        width={480}
                        height={480}
                        src="/icon/hand_shake_green.png"
                        alt="Bordered avatar"
                      />
                      Deals
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href={'#'} className="mx-auto justify-center">
                <Image
                  className="ring-p1-green hover:bg-p1-white hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-deepdarkgreen h-10 w-10 rounded-lg p-1 transition-all delay-75 duration-300 ease-in-out hover:ring-2"
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
            <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-darkgreen dark:text-p1-cyan mx-auto flex max-w-2xl overflow-hidden rounded-2xl border-2 px-4 py-3 md:w-80 xl:w-96">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                className="dark:fill-p1-cyan mr-3 rotate-90 fill-gray-800"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
              <input
                type="email"
                placeholder="Search ..."
                className="text-p1-deepdarkgreen dark:text-p1-cyan w-full bg-transparent text-xl outline-none"
              />
            </div>
          </div>
        </div>

        {/* Карточка */}

        <div className="grid grid-cols-1 place-content-between pt-2 md:grid-cols-[500px_1fr] lg:grid-cols-[500px_1fr] xl:grid-cols-[500px_1fr] 2xl:grid-cols-[900px_1fr]">
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

                <div className="text-p1-green dark:text-p1-green place-content-start text-2xl md:text-xl">
                  Polygon zkEVM
                </div>
                <div className="flex grid-flow-row auto-rows-max justify-start space-x-2"></div>
                <div></div>
              </div>

              <div className="flex justify-end">
                <div className="inline-flex w-full justify-end rounded-md md:px-10" role="group">
                  <div className="text-p1-green w-7 text-xl">10</div>
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
                  className="dark:ring-p1-darkgreen rounded-3xl"
                  width={1000}
                  height={1000}
                  src="/HeroNFT/RaceLads/RaceLads1.png"
                  alt="Bordered avatar"
                />
              </Link>
            </div>
            <div className="place-content-start px-2 py-1">
              <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen w-full rounded-2xl border text-xl shadow-lg">
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
                    <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                      Description
                    </div>
                  </summary>
                  <div className="text-p1-darkgreen dark:text-p1-green pt-1 pl-4">
                    <div className="group relative">
                      <div>
                        <Link
                          href={'#'}
                          className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-2xl"
                        >
                          by Global Automotive Association
                        </Link>
                      </div>
                      <div className="invisible absolute left-1/2 z-10 -translate-x-1/2 transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                        <div className="w-64 rounded-xl text-xl shadow-lg">
                          <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                            <Link href="#" className="mx-auto">
                              <div className="inline-flex place-content-start space-x-2">
                                <Image
                                  width={480}
                                  height={480}
                                  src="/HeroNFT/RaceLads/RaceLads1.png"
                                  alt="RaceLad"
                                  className="w-12 rounded-lg"
                                />
                                <div className="text-p1-darkgreen font-semibold">
                                  {' '}
                                  GAA
                                  <div className="text-p1-darkgreen text-base font-thin lining-nums">
                                    {' '}
                                    0x010a...0369
                                  </div>
                                </div>
                              </div>{' '}
                            </Link>

                            <div className="grid w-full grid-cols-3 items-center text-center lining-nums">
                              <div>
                                <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                  collected
                                </p>
                                <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                  1258
                                </p>
                              </div>
                              <div>
                                <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                  created
                                </p>
                                <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                  10.000
                                </p>
                              </div>
                              <div>
                                <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">sold</p>
                                <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
              <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen w-full rounded-2xl border text-xl shadow-lg">
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
                    <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                      Traits
                    </div>
                  </summary>
                  <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center lining-nums sm:px-2">
                    <div className="group">
                      <div className="grid grid-cols-2 place-content-center gap-1 text-sm sm:grid-cols-2 sm:gap-2 sm:text-xl 2xl:grid-cols-3">
                        <div className="">
                          <div className="grid">
                            <Link
                              href="#"
                              className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan rounded-xl border-2 px-4 py-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
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
                              <div className="">Background</div>
                              <div className="font-semibold">Sky 13%</div>
                              <div className="">Floor: 2,99%</div>
                            </Link>
                          </div>
                        </div>

                        <div className="">
                          <div className="grid">
                            <Link
                              href="#"
                              className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan rounded-xl border-2 px-4 py-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
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
                              <div className="">Body</div>
                              <div className="font-semibold">Asia 17%</div>
                              <div className="">Floor: 3,99%</div>
                            </Link>
                          </div>
                        </div>
                        <div className="">
                          <div className="grid">
                            <Link
                              href="#"
                              className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan rounded-xl border-2 px-4 py-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
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
                              <div className="">Background</div>
                              <div className="font-semibold">Sky 13%</div>
                              <div className="">Floor: 2,99%</div>
                            </Link>
                          </div>
                        </div>
                        <div className="">
                          <div className="grid">
                            <Link
                              href="#"
                              className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan rounded-xl border-2 px-4 py-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
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
                              <div className="">Нос</div>
                              <div className="font-semibold">Прямой 13%</div>
                              <div className="">Floor: 1,99%</div>
                            </Link>
                          </div>
                        </div>
                        <div className="">
                          <div className="grid">
                            <Link
                              href="#"
                              className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan rounded-xl border-2 px-4 py-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
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
                              <div className="">Рот</div>
                              <div className="font-semibold">Улыбается 12%</div>
                              <div className="">Floor: 2,99%</div>
                            </Link>
                          </div>
                        </div>
                        <div className="">
                          <div className="grid">
                            <Link
                              href="#"
                              className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan rounded-xl border-2 px-4 py-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
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
                              <div className="">Одежда</div>
                              <div className="font-semibold">Куртка 18%</div>
                              <div className="">Floor: 2,99%</div>
                            </Link>
                          </div>
                        </div>
                        <div className="">
                          <div className="grid">
                            <Link
                              href="#"
                              className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan rounded-xl border-2 px-4 py-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
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
                              <div className="">Головной убор</div>
                              <div className="font-semibold">Шлем 60-х 25%</div>
                              <div className="">Floor: 2,99%</div>
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
              <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen w-full rounded-2xl border text-xl shadow-lg">
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
                    <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                      Description
                    </div>
                  </summary>
                  <div className="text-p1-darkgreen dark:text-p1-green pt-1 pl-4">
                    <div className="group relative">
                      <div>
                        <Link
                          href={'#'}
                          className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-2xl"
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
              <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen w-full rounded-2xl border text-xl shadow-lg">
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
                    <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                      Detail
                    </div>
                  </summary>
                  <div className="text-p1-darkgreen dark:text-p1-green pt-1 pl-4">
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
                        className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-2xl"
                      >
                        RaceLads
                      </Link>
                    </div>
                    <div className="invisible absolute top-full left-1/2 z-10 -translate-x-1/2 transform opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                      <div className="w-96 text-base shadow-lg">
                        <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full space-x-3 rounded-2xl border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
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
                                <h2 className="spacing-1 text-p1-darkgreen dark:text-p1-cyan text-xl font-bold xl:text-2xl">
                                  RaceLads
                                </h2>
                                <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                                <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                                <button className="border-p1-cyan bg-p1-green hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-p1-darkgreen w-full place-content-end rounded-md border py-2 text-white dark:hover:shadow-lg">
                                  Explore Collection
                                </button>
                              </div>
                            </div>{' '}
                            <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                              <div>
                                <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Items</p>
                                <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                  10,000
                                </p>
                              </div>
                              <div>
                                <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                  Floor Price
                                </p>
                                <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                                <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                  Total Volume
                                </p>
                                <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                      <div className="bg-p2-white2 dark:bg-p1-darkgreen invisible absolute top-full left-1/2 z-10 mt-2 w-80 -translate-x-1/2 transform rounded-xl bg-center p-4 text-gray-800 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
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
                            <div className="text-p1-darkgreen dark:text-p1-cyan pt-1">
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
                            <div className="text-p1-darkgreen dark:text-p1-cyan pt-1">
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
                          className="hover:bg-opacity-50 hover:ring-p1-green dark:ring-p1-green dark:hover:ring-p1-cyan h-10 w-10 rounded-xl p-0 transition-all delay-75 duration-300 ease-in-out hover:ring-1"
                          width={480}
                          height={480}
                          src="/icon/hand_shake_green.png"
                          alt="line"
                        />
                      </Link>
                    </div>
                    <div className="w-10">
                      <div className="group relative inline-block">
                        <Link href={'#'} className="mx-auto justify-center">
                          <Image
                            className="hover:bg-opacity-50 hover:ring-p1-green dark:ring-p1-green dark:hover:ring-p1-cyan h-10 w-10 rounded-xl p-1 transition-all delay-75 duration-300 ease-in-out hover:ring-1"
                            width={480}
                            height={480}
                            src="/icon/share_green.png"
                            alt="bt16"
                          />

                          <div className="bg-p1-cyan invisible absolute left-1/2 z-10 mt-2 w-60 -translate-x-1/2 transform rounded-xl bg-center p-4 text-gray-800 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100 md:w-60">
                            <div className="border-p1-darkgreen text-p1-darkgreen hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen dark:border-p1-deepdarkgreen rounded-lg border-b p-1 text-xl font-semibold transition-all duration-300 ease-in-out md:px-3">
                              <Link href={'#'} className="mx-auto justify-center">
                                <Image
                                  className="h-10 w-10"
                                  width={480}
                                  height={480}
                                  src="/icon/copy_link_green.png"
                                  alt="bt9"
                                />
                                Copy Link
                              </Link>
                            </div>
                            <div className="border-p1-darkgreen text-p1-darkgreen hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen dark:border-p1-deepdarkgreen rounded-lg border-b p-1 text-xl font-semibold transition-all duration-300 ease-in-out md:px-3">
                              <Link href={'#'} className="mx-auto justify-center">
                                <Image
                                  className="h-10 w-10"
                                  width={480}
                                  height={480}
                                  src="/logo/twitterlogobird_green.png"
                                  alt="bt9"
                                />
                                Share on Twitter
                              </Link>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="w-10">
                      <div className="w-10">
                        <div className="group relative inline-block">
                          <Link href={'#'} className="mx-auto justify-center">
                            <Image
                              className="hover:bg-opacity-50 hover:ring-p1-green dark:ring-p1-green dark:hover:ring-p1-cyan h-10 w-10 rounded-xl p-1 transition-all delay-75 duration-300 ease-in-out hover:ring-1"
                              width={480}
                              height={480}
                              src="/icon/points_green.png"
                              alt="bt9"
                            />

                            <div className="bg-p1-cyan invisible absolute left-1/2 z-10 mt-2 w-60 -translate-x-1/2 transform rounded-xl bg-center p-4 text-gray-800 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100 md:w-60">
                              <div className="border-p1-darkgreen text-p1-darkgreen hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen dark:border-p1-deepdarkgreen rounded-lg border-b p-1 text-xl font-semibold transition-all duration-300 ease-in-out md:px-3">
                                <Link href={'#'} className="mx-auto justify-center">
                                  <Image
                                    className="h-10 w-10"
                                    width={480}
                                    height={480}
                                    src="/icon/refresh_green.png"
                                    alt="bt9"
                                  />
                                  Refresh Metadata
                                </Link>
                              </div>
                              <div className="border-p1-darkgreen text-p1-darkgreen hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen dark:border-p1-deepdarkgreen rounded-lg border-b p-1 text-xl font-semibold transition-all duration-300 ease-in-out md:px-3">
                                <Link href={'#'} className="mx-auto justify-center">
                                  <Image
                                    className="h-10 w-10"
                                    width={480}
                                    height={480}
                                    src="/icon/description_green.png"
                                    alt="bt9"
                                  />
                                  Report
                                </Link>
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

            <div>
              <div className="">
                <div className="grid grid-cols-2 justify-between md:grid-cols-2 2xl:grid-cols-2">
                  <div className="flex justify-start space-x-1 md:px-10">
                    <div className="relative">
                      <div className="text-p1-darkgreen dark:text-p1-green mx-auto justify-start text-2xl">
                        RaceLad
                      </div>
                    </div>
                    <div className="">
                      <div className="text-p1-darkgreen dark:text-p1-green mx-auto justify-start px-3 text-2xl">
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
                      <div className="text-p1-darkgreen mx-auto justify-start text-2xl"></div>
                    </div>
                    <div className="">
                      <div className="text-p1-darkgreen dark:text-p1-green mx-auto justify-start text-xl">
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
                      <div className="text-p1-darkgreen dark:text-p1-green mx-auto justify-start text-xl">
                        Owned by:
                      </div>
                    </div>
                    <div className="group relative">
                      <div>
                        <Link
                          href={'#'}
                          className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-2xl"
                        >
                          JeamBeam
                        </Link>
                      </div>
                      <div className="invisible absolute left-1/2 z-10 -translate-x-1/2 transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                        <div className="w-64 rounded-xl text-xl shadow-lg">
                          <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                            <Link href="#" className="mx-auto">
                              <div className="inline-flex place-content-start space-x-2">
                                <Image
                                  width={480}
                                  height={480}
                                  src="/HeroNFT/RaceLads/RaceLads1.png"
                                  alt="RaceLad"
                                  className="w-12 rounded-lg"
                                />
                                <div className="text-p1-darkgreen font-semibold">
                                  {' '}
                                  JeamBeam
                                  <div className="text-p1-darkgreen text-base font-thin lining-nums">
                                    {' '}
                                    0x010a...0369
                                  </div>
                                </div>
                              </div>{' '}
                            </Link>

                            <div className="grid w-full grid-cols-3 items-center text-center">
                              <div>
                                <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                  collected
                                </p>
                                <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                  105
                                </p>
                              </div>
                              <div>
                                <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                  created
                                </p>
                                <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                  15
                                </p>
                              </div>
                              <div>
                                <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">sold</p>
                                <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                <div className="grid grid-cols-2 lg:grid-cols-3">
                  <div className="flex justify-start">
                    <div className="relative">
                      <div className="text-p1-darkgreen dark:text-p1-green justify-start text-xl">
                        <Image
                          className="h-8 w-8 p-0 transition-all delay-75 duration-300 ease-in-out hover:scale-125"
                          width={480}
                          height={480}
                          src="/icon/view_green.png"
                          alt="view"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="text-p1-darkgreen dark:text-p1-green mx-auto justify-start px-2 text-xl">
                        569 views
                      </div>
                    </div>
                    <div className="px-4"> </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="group relative">
                      <Link
                        href={'#'}
                        className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-2xl"
                      >
                        <div className="inline-flex space-x-2">
                          <Image
                            className="h-7 w-7 p-0 transition-all delay-75 duration-300 ease-in-out hover:scale-125"
                            width={480}
                            height={480}
                            src="/icon/heart_green.png"
                            alt="heart"
                          />

                          <div> 10 </div>
                          <div>favorits</div>
                        </div>
                      </Link>
                      <div className="invisible absolute top-full left-1/2 z-10 -translate-x-1/2 transform opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                        <div className="w-56 text-base shadow-lg">
                          <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full space-x-3 rounded-2xl border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                            <table className="table-auto">
                              <thead>
                                <tr>
                                  <th>Favorited by</th>
                                  <th></th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    {' '}
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads1.png"
                                          alt="RaceLad"
                                          className="w-12 rounded-full"
                                        />
                                        <div className="text-p1-darkgreen font-semibold">
                                          {' '}
                                          JeamBeam
                                          <div className="text-p1-darkgreen text-base font-thin lining-nums">
                                            {' '}
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>{' '}
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    {' '}
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads1.png"
                                          alt="RaceLad"
                                          className="w-12 rounded-full"
                                        />
                                        <div className="text-p1-darkgreen font-semibold">
                                          {' '}
                                          JeamBeam
                                          <div className="text-p1-darkgreen text-base font-thin lining-nums">
                                            {' '}
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>{' '}
                                    </Link>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    {' '}
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads1.png"
                                          alt="RaceLad"
                                          className="w-12 rounded-full"
                                        />
                                        <div className="text-p1-darkgreen font-semibold">
                                          {' '}
                                          JeamBeam
                                          <div className="text-p1-darkgreen text-base font-thin lining-nums">
                                            {' '}
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>{' '}
                                    </Link>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="text-p1-darkgreen dark:text-p1-green justify-start text-xl">
                      <div className="">
                        <Image
                          className="h-7 w-7 p-0 transition-all delay-75 duration-300 ease-in-out hover:scale-125"
                          width={480}
                          height={480}
                          src="/icon/pfps.png"
                          alt="pfps"
                        />
                      </div>
                    </div>
                    <div className="text-p1-darkgreen dark:text-p1-green justify-start px-2 text-xl">
                      <div className=""> PFPs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-2"> </div>
            <div className="bg-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen rounded-2xl border-2 p-2 shadow-sm md:px-10">
              <div className="flex justify-start space-x-1">
                <div className="relative">
                  <div className="text-p1-darkgreen dark:text-p1-green mx-auto text-xl">
                    Best offer
                  </div>

                  <div>
                    <div className="">
                      <div className="grid grid-cols-1 justify-between lg:grid-cols-2">
                        <div className="flex justify-start">
                          <div className="relative">
                            <div className="text-p1-darkgreen dark:text-p1-green mx-auto justify-start text-4xl">
                              2,72
                            </div>
                          </div>
                          <div className="">
                            <div className="text-p1-darkgreen dark:text-p1-green mx-auto justify-start text-4xl">
                              WETH
                            </div>
                          </div>
                          <div className="px-4"> </div>
                        </div>
                        <div className="flex justify-start">
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
                          <div className="text-p1-darkgreen dark:text-p1-green self-end text-xl">
                            <div className="">10.000</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-5 grid grid-cols-1 place-content-around gap-4 2xl:grid-cols-3">
                <div className="basis-1/2">
                  {' '}
                  <div className="relative flex place-content-center">
                    <div className="apace-x-4 inline-flex w-full justify-center rounded-l-xl xl:text-xl">
                      <Link
                        href="#"
                        className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan grid w-4/5 place-content-center rounded-l-xl border-2 px-4 py-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
                      >
                        <div className="text-xl leading-2">Buy:</div>
                      </Link>

                      <Link
                        href={'#'}
                        className="hover:bg-p2-white border-p1-darkgreen bg-p1-white hover:border-p1-darkgreen hover:bg-p2-white2 hover:ring-p1-cyan focus:border-p1-darkgreen focus:shadow-p1-green focus:ring-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-darkgreen dark:focus:text-p1-cyan grid w-1/5 place-content-center rounded-r-xl border-t-2 border-r-2 border-b-2 text-center text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl focus:scale-95 focus:border-l-2 focus:shadow-lg md:text-3xl"
                      >
                        <Image
                          className="bg-p1-darkgreenе dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen inline-block h-7 w-7"
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
                      className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan relative flex place-content-center rounded-xl border-2 px-4 py-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
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
                      <div className="px-4">Sale</div>
                    </Link>
                  </div>
                </div>
                <div className="basis-1/2">
                  {' '}
                  <div>
                    <Link
                      href="#"
                      className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan relative flex place-content-center rounded-xl border-2 px-4 py-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
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
              <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen w-full rounded-2xl border text-xl shadow-lg">
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
                    <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                      Price History
                    </div>
                  </summary>
                  <div className="text-p1-darkgreen dark:text-p1-green pt-1 pl-4">
                    This collection belongs to a verified account and has significant interest or
                    sales. Learn more This token was minted on the smart contract at the address
                    below:
                  </div>
                </details>
              </div>
            </div>
            <div className="pt-2">
              <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen w-full rounded-2xl border text-xl shadow-lg">
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
                    <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                      Listings
                    </div>
                  </summary>
                  {/* Таблица Listings*/}
                  <div className="h-80 place-content-center overflow-x-auto overflow-y-auto p-1 md:visible">
                    <div className="relative shadow-md sm:rounded-lg">
                      <table className="text-p1-darkgreen dark:text-p1-green w-full pb-2 text-left text-xl">
                        <thead className="text-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green bg-gray-50 text-xs uppercase">
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
                          <tr className="dark:border-p1-green dark:bg-p1-deepdarkgreen border-b bg-white text-base lining-nums">
                            <th
                              scope="row"
                              className="place-content-center px-2 py-2 text-center font-medium whitespace-nowrap"
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
                                    className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-left"
                                  >
                                    JeamBeam
                                  </Link>
                                </div>
                                <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                  <div className="w-64 rounded-xl text-xl shadow-lg">
                                    <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                                      <Link href="#" className="mx-auto">
                                        <div className="inline-flex place-content-start space-x-2">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads1.png"
                                            alt="RaceLad"
                                            className="w-12 rounded-lg"
                                          />
                                          <div className="text-p1-darkgreen font-semibold">
                                            {' '}
                                            JeamBeam
                                            <div className="text-p1-darkgreen text-base font-thin lining-nums">
                                              {' '}
                                              0x010a...0369
                                            </div>
                                          </div>
                                        </div>{' '}
                                      </Link>

                                      <div className="grid w-full grid-cols-3 items-center text-center">
                                        <div>
                                          <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                            collected
                                          </p>
                                          <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                            105
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                            created
                                          </p>
                                          <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                            15
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                            sold
                                          </p>
                                          <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                                className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan relative flex place-content-center rounded-xl border-2 px-4 py-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
                              >
                                <div></div>
                                <div className="px-2">Buy</div>
                              </Link>
                            </td>
                          </tr>
                          <tr className="dark:border-p1-green dark:bg-p1-deepdarkgreen border-b bg-white text-base lining-nums">
                            <th
                              scope="row"
                              className="place-content-center px-2 py-2 text-center font-medium whitespace-nowrap"
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
                                    className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-left"
                                  >
                                    JeamBeam
                                  </Link>
                                </div>
                                <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                  <div className="w-64 rounded-xl text-xl shadow-lg">
                                    <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                                      <Link href="#" className="mx-auto">
                                        <div className="inline-flex place-content-start space-x-2">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads1.png"
                                            alt="RaceLad"
                                            className="w-12 rounded-lg"
                                          />
                                          <div className="text-p1-darkgreen font-semibold">
                                            {' '}
                                            JeamBeam
                                            <div className="text-p1-darkgreen text-base font-thin lining-nums">
                                              {' '}
                                              0x010a...0369
                                            </div>
                                          </div>
                                        </div>{' '}
                                      </Link>

                                      <div className="grid w-full grid-cols-3 items-center text-center">
                                        <div>
                                          <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                            collected
                                          </p>
                                          <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                            105
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                            created
                                          </p>
                                          <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                            15
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                            sold
                                          </p>
                                          <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                                className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan relative flex place-content-center rounded-xl border-2 px-4 py-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
                              >
                                <div></div>
                                <div className="px-2">Buy</div>
                              </Link>
                            </td>
                          </tr>
                          <tr className="dark:border-p1-green dark:bg-p1-deepdarkgreen border-b bg-white text-base lining-nums">
                            <th
                              scope="row"
                              className="place-content-center px-2 py-2 text-center font-medium whitespace-nowrap"
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
                                    className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-left"
                                  >
                                    JeamBeam
                                  </Link>
                                </div>
                                <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                  <div className="w-64 rounded-xl text-xl shadow-lg">
                                    <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                                      <Link href="#" className="mx-auto">
                                        <div className="inline-flex place-content-start space-x-2">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads1.png"
                                            alt="RaceLad"
                                            className="w-12 rounded-lg"
                                          />
                                          <div className="text-p1-darkgreen font-semibold">
                                            {' '}
                                            JeamBeam
                                            <div className="text-p1-darkgreen text-base font-thin lining-nums">
                                              {' '}
                                              0x010a...0369
                                            </div>
                                          </div>
                                        </div>{' '}
                                      </Link>

                                      <div className="grid w-full grid-cols-3 items-center text-center">
                                        <div>
                                          <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                            collected
                                          </p>
                                          <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                            105
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                            created
                                          </p>
                                          <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                            15
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                            sold
                                          </p>
                                          <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                                className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan relative flex place-content-center rounded-xl border-2 px-4 py-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
                              >
                                <div></div>
                                <div className="px-2">Buy</div>
                              </Link>
                            </td>
                          </tr>
                          <tr className="dark:border-p1-green dark:bg-p1-deepdarkgreen border-b bg-white text-base lining-nums">
                            <th
                              scope="row"
                              className="place-content-center px-2 py-2 text-center font-medium whitespace-nowrap"
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
                                    className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-left"
                                  >
                                    JeamBeam
                                  </Link>
                                </div>
                                <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                  <div className="w-64 rounded-xl text-xl shadow-lg">
                                    <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                                      <Link href="#" className="mx-auto">
                                        <div className="inline-flex place-content-start space-x-2">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads1.png"
                                            alt="RaceLad"
                                            className="w-12 rounded-lg"
                                          />
                                          <div className="text-p1-darkgreen font-semibold">
                                            {' '}
                                            JeamBeam
                                            <div className="text-p1-darkgreen text-base font-thin lining-nums">
                                              {' '}
                                              0x010a...0369
                                            </div>
                                          </div>
                                        </div>{' '}
                                      </Link>

                                      <div className="grid w-full grid-cols-3 items-center text-center">
                                        <div>
                                          <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                            collected
                                          </p>
                                          <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                            105
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                            created
                                          </p>
                                          <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                            15
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                            sold
                                          </p>
                                          <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                                className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan relative flex place-content-center rounded-xl border-2 px-4 py-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
                              >
                                <div></div>
                                <div className="px-2">Buy</div>
                              </Link>
                            </td>
                          </tr>
                          <tr className="dark:border-p1-green dark:bg-p1-deepdarkgreen border-b bg-white text-base lining-nums">
                            <th
                              scope="row"
                              className="place-content-center px-2 py-2 text-center font-medium whitespace-nowrap"
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
                                    className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-left"
                                  >
                                    JeamBeam
                                  </Link>
                                </div>
                                <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                  <div className="w-64 rounded-xl text-xl shadow-lg">
                                    <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                                      <Link href="#" className="mx-auto">
                                        <div className="inline-flex place-content-start space-x-2">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads1.png"
                                            alt="RaceLad"
                                            className="w-12 rounded-lg"
                                          />
                                          <div className="text-p1-darkgreen font-semibold">
                                            {' '}
                                            JeamBeam
                                            <div className="text-p1-darkgreen text-base font-thin lining-nums">
                                              {' '}
                                              0x010a...0369
                                            </div>
                                          </div>
                                        </div>{' '}
                                      </Link>

                                      <div className="grid w-full grid-cols-3 items-center text-center">
                                        <div>
                                          <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                            collected
                                          </p>
                                          <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                            105
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                            created
                                          </p>
                                          <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                            15
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                            sold
                                          </p>
                                          <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                                className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan relative flex place-content-center rounded-xl border-2 px-4 py-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
                              >
                                <div></div>
                                <div className="px-2">Buy</div>
                              </Link>
                            </td>
                          </tr>
                          <tr className="dark:border-p1-green dark:bg-p1-deepdarkgreen border-b bg-white text-base lining-nums">
                            <th
                              scope="row"
                              className="place-content-center px-2 py-2 text-center font-medium whitespace-nowrap"
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
                                    className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-left"
                                  >
                                    JeamBeam
                                  </Link>
                                </div>
                                <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                  <div className="w-64 rounded-xl text-xl shadow-lg">
                                    <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                                      <Link href="#" className="mx-auto">
                                        <div className="inline-flex place-content-start space-x-2">
                                          <Image
                                            width={480}
                                            height={480}
                                            src="/HeroNFT/RaceLads/RaceLads1.png"
                                            alt="RaceLad"
                                            className="w-12 rounded-lg"
                                          />
                                          <div className="text-p1-darkgreen font-semibold">
                                            {' '}
                                            JeamBeam
                                            <div className="text-p1-darkgreen text-base font-thin lining-nums">
                                              {' '}
                                              0x010a...0369
                                            </div>
                                          </div>
                                        </div>{' '}
                                      </Link>

                                      <div className="grid w-full grid-cols-3 items-center text-center">
                                        <div>
                                          <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                            collected
                                          </p>
                                          <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                            105
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                            created
                                          </p>
                                          <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                            15
                                          </p>
                                        </div>
                                        <div>
                                          <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                            sold
                                          </p>
                                          <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                                className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan relative flex place-content-center rounded-xl border-2 px-4 py-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
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
              <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen w-full rounded-2xl border text-xl shadow-lg">
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
                    <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                      Offers
                    </div>
                  </summary>
                  <div className="text-p1-darkgreen dark:text-p1-green pt-1 pl-4">
                    {/* Таблица Offers*/}
                    <div className="h-72 place-content-center overflow-x-auto overflow-y-auto p-1 md:visible">
                      <div className="relative shadow-md sm:rounded-lg">
                        <table className="text-p1-darkgreen dark:text-p1-green w-full pb-2 text-left text-xl">
                          <thead className="text-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green bg-gray-50 text-xs uppercase">
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
                            <tr className="dark:border-p1-green dark:bg-p1-deepdarkgreen border-b bg-white text-base lining-nums">
                              <th
                                scope="row"
                                className="place-content-center px-2 py-2 text-right font-medium whitespace-nowrap"
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
                                      className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-left"
                                    >
                                      JeamBeam
                                    </Link>
                                  </div>
                                  <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                    <div className="w-64 rounded-xl text-xl shadow-lg">
                                      <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                                        <Link href="#" className="mx-auto">
                                          <div className="inline-flex place-content-start space-x-2">
                                            <Image
                                              width={480}
                                              height={480}
                                              src="/HeroNFT/RaceLads/RaceLads1.png"
                                              alt="RaceLad"
                                              className="w-12 rounded-lg"
                                            />
                                            <div className="text-p1-darkgreen font-semibold">
                                              {' '}
                                              JeamBeam
                                              <div className="text-p1-darkgreen text-base font-thin lining-nums">
                                                {' '}
                                                0x010a...0369
                                              </div>
                                            </div>
                                          </div>{' '}
                                        </Link>

                                        <div className="grid w-full grid-cols-3 items-center text-center">
                                          <div>
                                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                              collected
                                            </p>
                                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                              105
                                            </p>
                                          </div>
                                          <div>
                                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                              created
                                            </p>
                                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                              15
                                            </p>
                                          </div>
                                          <div>
                                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                              sold
                                            </p>
                                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen w-full rounded-2xl border text-xl shadow-lg">
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
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Item Activity
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 pl-4">
                <div className="flex grid-flow-row auto-rows-max justify-center space-x-2 lg:justify-start">
                  <div>
                    <div
                      className="inline-flex w-full justify-center rounded-md pt-1 text-sm shadow-sm"
                      role="group"
                    >
                      <Link
                        href="#"
                        className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center rounded-l-xl border-2 p-2 text-center shadow-lg transition-all duration-300 ease-in-out md:text-lg"
                      >
                        Sales
                      </Link>
                      <Link
                        href="#"
                        className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-lg"
                      >
                        Deals_accepted
                      </Link>
                      <Link
                        href="#"
                        className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-lg"
                      >
                        Listings
                      </Link>

                      <Link
                        href="#"
                        className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-lg"
                      >
                        Offers
                      </Link>
                      <Link
                        href="#"
                        className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-lg"
                      >
                        Deal_Offers
                      </Link>
                      <Link
                        href="#"
                        className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-lg"
                      >
                        Transfers
                      </Link>
                      <Link
                        href="#"
                        className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center rounded-r-lg border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-lg"
                      >
                        Clear_All
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Item Activity*/}
                <div className="h-72 place-content-center overflow-x-auto overflow-y-auto p-1 md:visible">
                  <div className="relative shadow-md sm:rounded-lg">
                    <table className="text-p1-darkgreen dark:text-p1-green w-full pb-2 text-left text-xl">
                      <thead className="text-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green bg-gray-50 text-xs uppercase">
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
                        <tr className="dark:border-p1-green dark:bg-p1-deepdarkgreen border-b bg-white text-base lining-nums">
                          <th
                            scope="row"
                            className="place-content-center px-2 py-2 text-right font-medium whitespace-nowrap"
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
                                  className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-left"
                                >
                                  JeamBeam
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads1.png"
                                          alt="RaceLad"
                                          className="w-12 rounded-lg"
                                        />
                                        <div className="text-p1-darkgreen font-semibold">
                                          {' '}
                                          JeamBeam
                                          <div className="text-p1-darkgreen text-base font-thin lining-nums">
                                            {' '}
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>{' '}
                                    </Link>

                                    <div className="grid w-full grid-cols-3 items-center text-center">
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          collected
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                          105
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          created
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                          15
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          sold
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                                  className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-left"
                                >
                                  JeamBeam
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads1.png"
                                          alt="RaceLad"
                                          className="w-12 rounded-lg"
                                        />
                                        <div className="text-p1-darkgreen font-semibold">
                                          {' '}
                                          JeamBeam
                                          <div className="text-p1-darkgreen text-base font-thin lining-nums">
                                            {' '}
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>{' '}
                                    </Link>

                                    <div className="grid w-full grid-cols-3 items-center text-center">
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          collected
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                          105
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          created
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                          15
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          sold
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                                  className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-left"
                                >
                                  4d ago
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <div className="text-p1-darkgreen font-semibold">
                                          {' '}
                                          на страницу Etherscan
                                          <div className="text-p1-darkgreen text-base font-thin lining-nums">
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
                        <tr className="dark:border-p1-green dark:bg-p1-deepdarkgreen border-b bg-white text-base lining-nums">
                          <th
                            scope="row"
                            className="place-content-center px-2 py-2 text-right font-medium whitespace-nowrap"
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
                                  className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-left"
                                >
                                  JeamBeam
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads1.png"
                                          alt="RaceLad"
                                          className="w-12 rounded-lg"
                                        />
                                        <div className="text-p1-darkgreen font-semibold">
                                          {' '}
                                          JeamBeam
                                          <div className="text-p1-darkgreen text-base font-thin lining-nums">
                                            {' '}
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>{' '}
                                    </Link>

                                    <div className="grid w-full grid-cols-3 items-center text-center">
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          collected
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                          105
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          created
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                          15
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          sold
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                                  className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-left"
                                >
                                  JeamBeam
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads1.png"
                                          alt="RaceLad"
                                          className="w-12 rounded-lg"
                                        />
                                        <div className="text-p1-darkgreen font-semibold">
                                          {' '}
                                          JeamBeam
                                          <div className="text-p1-darkgreen text-base font-thin lining-nums">
                                            {' '}
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>{' '}
                                    </Link>

                                    <div className="grid w-full grid-cols-3 items-center text-center">
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          collected
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                          105
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          created
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                          15
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          sold
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                                  className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-left"
                                >
                                  4d ago
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <div className="text-p1-darkgreen font-semibold">
                                          {' '}
                                          на страницу Etherscan
                                          <div className="text-p1-darkgreen text-base font-thin lining-nums">
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
                        <tr className="dark:border-p1-green dark:bg-p1-deepdarkgreen border-b bg-white text-base lining-nums">
                          <th
                            scope="row"
                            className="place-content-center px-2 py-2 text-right font-medium whitespace-nowrap"
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
                                  className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-left"
                                >
                                  NulAdress
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads1.png"
                                          alt="RaceLad"
                                          className="w-12 rounded-lg"
                                        />
                                        <div className="text-p1-darkgreen font-semibold">
                                          {' '}
                                          JeamBeam
                                          <div className="text-p1-darkgreen text-base font-thin lining-nums">
                                            {' '}
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>{' '}
                                    </Link>

                                    <div className="grid w-full grid-cols-3 items-center text-center">
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          collected
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                          105
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          created
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                          15
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          sold
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                                  className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-left"
                                >
                                  JeamBeam
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads1.png"
                                          alt="RaceLad"
                                          className="w-12 rounded-lg"
                                        />
                                        <div className="text-p1-darkgreen font-semibold">
                                          {' '}
                                          JeamBeam
                                          <div className="text-p1-darkgreen text-base font-thin lining-nums">
                                            {' '}
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>{' '}
                                    </Link>

                                    <div className="grid w-full grid-cols-3 items-center text-center">
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          collected
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                          105
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          created
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                          15
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          sold
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                                  className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-left"
                                >
                                  4d ago
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <div className="text-p1-darkgreen font-semibold">
                                          {' '}
                                          на страницу Etherscan
                                          <div className="text-p1-darkgreen text-base font-thin lining-nums">
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
                        <tr className="dark:border-p1-green dark:bg-p1-deepdarkgreen border-b bg-white text-base lining-nums">
                          <th
                            scope="row"
                            className="place-content-center px-2 py-2 text-right font-medium whitespace-nowrap"
                          >
                            <Image
                              width={480}
                              height={480}
                              src="/icon/airdrop.png"
                              alt="mint"
                              className="w-8 rounded-lg"
                            />
                          </th>
                          <td className="px-2 py-2">
                            {' '}
                            <div className="relative text-left">Airdrop</div>
                          </td>
                          <td className="px-2 py-2 text-left">...</td>
                          <td className="px-2 py-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href={'#'}
                                  className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-left"
                                >
                                  NulAdress
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads1.png"
                                          alt="RaceLad"
                                          className="w-12 rounded-lg"
                                        />
                                        <div className="text-p1-darkgreen font-semibold">
                                          {' '}
                                          JeamBeam
                                          <div className="text-p1-darkgreen text-base font-thin lining-nums">
                                            {' '}
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>{' '}
                                    </Link>

                                    <div className="grid w-full grid-cols-3 items-center text-center">
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          collected
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                          105
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          created
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                          15
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          sold
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                                  className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-left"
                                >
                                  JeamBeam
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <Image
                                          width={480}
                                          height={480}
                                          src="/HeroNFT/RaceLads/RaceLads1.png"
                                          alt="RaceLad"
                                          className="w-12 rounded-lg"
                                        />
                                        <div className="text-p1-darkgreen font-semibold">
                                          {' '}
                                          JeamBeam
                                          <div className="text-p1-darkgreen text-base font-thin lining-nums">
                                            {' '}
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>{' '}
                                    </Link>

                                    <div className="grid w-full grid-cols-3 items-center text-center">
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          collected
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                          105
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          created
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                                          15
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                                          sold
                                        </p>
                                        <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                                  className="text-p1-green hover:text-p1-cyan mx-auto justify-start text-left"
                                >
                                  4d ago
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full transform place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group border-p1-green bg-p2-white2 bg-opacity-100 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full place-self-start rounded-lg border-2 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <div className="text-p1-darkgreen font-semibold">
                                          {' '}
                                          на страницу Etherscan
                                          <div className="text-p1-darkgreen text-base font-thin lining-nums">
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
          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen w-full rounded-2xl border text-xl shadow-lg">
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
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  More From This Collection
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 pl-4">
                {/* Карусель Карточки коллекции*/}
                <div className="bg-p1-white bg-opacity-0 dark:bg-p1-green dark:bg-opacity-0 w-full snap-x space-x-6 place-self-center overflow-x-auto rounded-3xl p-4">
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
                      <div className="group hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen relative h-[21.5rem] w-[15rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-sm hover:shadow-lg">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
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

                        <div className="bg-p2-white2 bg-opacity-100 text-p1-darkgreen group-hover:bg-opacity-100 group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green w-full p-1 transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl">
                          <div className="flex items-center justify-between pt-1">
                            <div className="px-2 text-left text-base font-bold">RaceLad</div>
                            <div className="px-2 text-left text-base font-bold"># 2222</div>
                          </div>

                          <div className="px-2 pt-2 pb-12">
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
                          <div className="bg-p1-darkgreen bg-opacity-100 text-p2-white2 shadow-p1-green hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen absolute bottom-0 left-0 h-[2.8rem] w-[15rem] translate-y-full text-center shadow-sm transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                            <div
                              className="inline-flex h-[2.8rem] w-[15rem] justify-center text-sm"
                              role="group"
                            >
                              <Link
                                href="#"
                                className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-4/5 place-content-center rounded-bl-xl border text-center text-base shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl md:text-3xl"
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
                                className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan hover:ring-p1-cyan focus:border-p1-cyan focus:ring-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-1/5 place-content-center rounded-br-xl border text-center text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-75 hover:shadow-2xl focus:scale-75 md:text-3xl"
                              >
                                <Image
                                  className="bg-p1-darkgreenе dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen inline-block h-6 w-6"
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
                      <div className="group hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen relative h-[21.5rem] w-[15rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-sm hover:shadow-lg">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
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

                        <div className="bg-p2-white2 bg-opacity-100 text-p1-darkgreen group-hover:bg-opacity-100 group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green w-full p-1 transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl">
                          <div className="flex items-center justify-between pt-1">
                            <div className="px-2 text-left text-base font-bold">RaceLad</div>
                            <div className="px-2 text-left text-base font-bold"># 2222</div>
                          </div>

                          <div className="px-2 pt-2 pb-12">
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
                          <div className="bg-p1-darkgreen bg-opacity-100 text-p2-white2 shadow-p1-green hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen absolute bottom-0 left-0 h-[2.8rem] w-[15rem] translate-y-full text-center shadow-sm transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                            <div
                              className="inline-flex h-[2.8rem] w-[15rem] justify-center text-sm"
                              role="group"
                            >
                              <Link
                                href="#"
                                className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-4/5 place-content-center rounded-bl-xl border text-center text-base shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl md:text-3xl"
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
                                className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan hover:ring-p1-cyan focus:border-p1-cyan focus:ring-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-1/5 place-content-center rounded-br-xl border text-center text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-75 hover:shadow-2xl focus:scale-75 md:text-3xl"
                              >
                                <Image
                                  className="bg-p1-darkgreenе dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen inline-block h-6 w-6"
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
                      <div className="group hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen relative h-[21.5rem] w-[15rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-sm hover:shadow-lg">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
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

                        <div className="bg-p2-white2 bg-opacity-100 text-p1-darkgreen group-hover:bg-opacity-100 group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green w-full p-1 transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl">
                          <div className="flex items-center justify-between pt-1">
                            <div className="px-2 text-left text-base font-bold">RaceLad</div>
                            <div className="px-2 text-left text-base font-bold"># 2222</div>
                          </div>

                          <div className="px-2 pt-2 pb-12">
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
                          <div className="bg-p1-darkgreen bg-opacity-100 text-p2-white2 shadow-p1-green hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen absolute bottom-0 left-0 h-[2.8rem] w-[15rem] translate-y-full text-center shadow-sm transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                            <div
                              className="inline-flex h-[2.8rem] w-[15rem] justify-center text-sm"
                              role="group"
                            >
                              <Link
                                href="#"
                                className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-4/5 place-content-center rounded-bl-xl border text-center text-base shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl md:text-3xl"
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
                                className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan hover:ring-p1-cyan focus:border-p1-cyan focus:ring-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-1/5 place-content-center rounded-br-xl border text-center text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-75 hover:shadow-2xl focus:scale-75 md:text-3xl"
                              >
                                <Image
                                  className="bg-p1-darkgreenе dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen inline-block h-6 w-6"
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
                      <div className="group hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen relative h-[21.5rem] w-[15rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-sm hover:shadow-lg">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
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

                        <div className="bg-p2-white2 bg-opacity-100 text-p1-darkgreen group-hover:bg-opacity-100 group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green w-full p-1 transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl">
                          <div className="flex items-center justify-between pt-1">
                            <div className="px-2 text-left text-base font-bold">RaceLad</div>
                            <div className="px-2 text-left text-base font-bold"># 2222</div>
                          </div>

                          <div className="px-2 pt-2 pb-12">
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
                          <div className="bg-p1-darkgreen bg-opacity-100 text-p2-white2 shadow-p1-green hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen absolute bottom-0 left-0 h-[2.8rem] w-[15rem] translate-y-full text-center shadow-sm transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                            <div
                              className="inline-flex h-[2.8rem] w-[15rem] justify-center text-sm"
                              role="group"
                            >
                              <Link
                                href="#"
                                className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-4/5 place-content-center rounded-bl-xl border text-center text-base shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl md:text-3xl"
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
                                className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan hover:ring-p1-cyan focus:border-p1-cyan focus:ring-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-1/5 place-content-center rounded-br-xl border text-center text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-75 hover:shadow-2xl focus:scale-75 md:text-3xl"
                              >
                                <Image
                                  className="bg-p1-darkgreenе dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen inline-block h-6 w-6"
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
                      <div className="group hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen relative h-[21.5rem] w-[15rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-sm hover:shadow-lg">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
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

                        <div className="bg-p2-white2 bg-opacity-100 text-p1-darkgreen group-hover:bg-opacity-100 group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green w-full p-1 transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl">
                          <div className="flex items-center justify-between pt-1">
                            <div className="px-2 text-left text-base font-bold">RaceLad</div>
                            <div className="px-2 text-left text-base font-bold"># 2222</div>
                          </div>

                          <div className="px-2 pt-2 pb-12">
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
                          <div className="bg-p1-darkgreen bg-opacity-100 text-p2-white2 shadow-p1-green hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen absolute bottom-0 left-0 h-[2.8rem] w-[15rem] translate-y-full text-center shadow-sm transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                            <div
                              className="inline-flex h-[2.8rem] w-[15rem] justify-center text-sm"
                              role="group"
                            >
                              <Link
                                href="#"
                                className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-4/5 place-content-center rounded-bl-xl border text-center text-base shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl md:text-3xl"
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
                                className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan hover:ring-p1-cyan focus:border-p1-cyan focus:ring-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-1/5 place-content-center rounded-br-xl border text-center text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-75 hover:shadow-2xl focus:scale-75 md:text-3xl"
                              >
                                <Image
                                  className="bg-p1-darkgreenе dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen inline-block h-6 w-6"
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
                      <div className="group hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen relative h-[21.5rem] w-[15rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-sm hover:shadow-lg">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
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

                        <div className="bg-p2-white2 bg-opacity-100 text-p1-darkgreen group-hover:bg-opacity-100 group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green w-full p-1 transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl">
                          <div className="flex items-center justify-between pt-1">
                            <div className="px-2 text-left text-base font-bold">RaceLad</div>
                            <div className="px-2 text-left text-base font-bold"># 2222</div>
                          </div>

                          <div className="px-2 pt-2 pb-12">
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
                          <div className="bg-p1-darkgreen bg-opacity-100 text-p2-white2 shadow-p1-green hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen absolute bottom-0 left-0 h-[2.8rem] w-[15rem] translate-y-full text-center shadow-sm transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                            <div
                              className="inline-flex h-[2.8rem] w-[15rem] justify-center text-sm"
                              role="group"
                            >
                              <Link
                                href="#"
                                className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-4/5 place-content-center rounded-bl-xl border text-center text-base shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl md:text-3xl"
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
                                className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan hover:ring-p1-cyan focus:border-p1-cyan focus:ring-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-1/5 place-content-center rounded-br-xl border text-center text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-75 hover:shadow-2xl focus:scale-75 md:text-3xl"
                              >
                                <Image
                                  className="bg-p1-darkgreenе dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen inline-block h-6 w-6"
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
                      <div className="group hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen relative h-[21.5rem] w-[15rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-sm hover:shadow-lg">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
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

                        <div className="bg-p2-white2 bg-opacity-100 text-p1-darkgreen group-hover:bg-opacity-100 group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green w-full p-1 transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl">
                          <div className="flex items-center justify-between pt-1">
                            <div className="px-2 text-left text-base font-bold">RaceLad</div>
                            <div className="px-2 text-left text-base font-bold"># 2222</div>
                          </div>

                          <div className="px-2 pt-2 pb-12">
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
                          <div className="bg-p1-darkgreen bg-opacity-100 text-p2-white2 shadow-p1-green hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen absolute bottom-0 left-0 h-[2.8rem] w-[15rem] translate-y-full text-center shadow-sm transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                            <div
                              className="inline-flex h-[2.8rem] w-[15rem] justify-center text-sm"
                              role="group"
                            >
                              <Link
                                href="#"
                                className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-4/5 place-content-center rounded-bl-xl border text-center text-base shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl md:text-3xl"
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
                                className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan hover:ring-p1-cyan focus:border-p1-cyan focus:ring-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-1/5 place-content-center rounded-br-xl border text-center text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-75 hover:shadow-2xl focus:scale-75 md:text-3xl"
                              >
                                <Image
                                  className="bg-p1-darkgreenе dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen inline-block h-6 w-6"
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
                      <div className="group hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen relative h-[21.5rem] w-[15rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-sm hover:shadow-lg">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
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

                        <div className="bg-p2-white2 bg-opacity-100 text-p1-darkgreen group-hover:bg-opacity-100 group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green w-full p-1 transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl">
                          <div className="flex items-center justify-between pt-1">
                            <div className="px-2 text-left text-base font-bold">RaceLad</div>
                            <div className="px-2 text-left text-base font-bold"># 2222</div>
                          </div>

                          <div className="px-2 pt-2 pb-12">
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
                          <div className="bg-p1-darkgreen bg-opacity-100 text-p2-white2 shadow-p1-green hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen absolute bottom-0 left-0 h-[2.8rem] w-[15rem] translate-y-full text-center shadow-sm transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                            <div
                              className="inline-flex h-[2.8rem] w-[15rem] justify-center text-sm"
                              role="group"
                            >
                              <Link
                                href="#"
                                className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-4/5 place-content-center rounded-bl-xl border text-center text-base shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl md:text-3xl"
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
                                className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan hover:ring-p1-cyan focus:border-p1-cyan focus:ring-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-1/5 place-content-center rounded-br-xl border text-center text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-75 hover:shadow-2xl focus:scale-75 md:text-3xl"
                              >
                                <Image
                                  className="bg-p1-darkgreenе dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen inline-block h-6 w-6"
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
      <div className="mx-2">
        <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen w-full rounded-2xl border text-xl shadow-lg">
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
              <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                More Collections By GAA
              </div>
            </summary>
            <div className="text-p1-darkgreen dark:text-p1-green pt-1 pl-4">
              {/* Карусель Карточки коллекции*/}
              <div className="bg-p1-white bg-opacity-0 dark:bg-p1-green dark:bg-opacity-0 w-full snap-x space-x-6 place-self-center overflow-x-auto rounded-3xl p-4">
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
                    <div className="group border-p1-green bg-opacity-50 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:bg-opacity-80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 bg-gray-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                      <Link href="#" className="mx-auto justify-center">
                        <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-1">
                          <Image
                            width={480}
                            height={480}
                            src="/HeroNFT/RaceLads/RaceLads1.png"
                            alt="RaceLad"
                            className="w-full"
                          />
                          <div>
                            <h2 className="spacing-1 text-p1-darkgreen dark:text-p1-cyan text-xl font-bold xl:text-2xl">
                              RaceLads
                            </h2>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="border-p1-cyan bg-p1-green hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-p1-darkgreen w-full place-content-end rounded-md border py-2 text-white dark:hover:shadow-lg">
                              Explore Collection
                            </button>
                          </div>
                        </div>{' '}
                        <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                          <div>
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Items</p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                              10,000
                            </p>
                          </div>
                          <div>
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                              Floor Price
                            </p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                              Total Volume
                            </p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                              25K
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="group border-p1-green bg-opacity-50 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:bg-opacity-80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 bg-gray-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                      <Link href="#" className="mx-auto justify-center">
                        <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-1">
                          <Image
                            width={480}
                            height={480}
                            src="/HeroNFT/Drivers/Driver4.png"
                            alt="RaceLad"
                            className="w-full"
                          />
                          <div>
                            <h2 className="spacing-1 text-p1-darkgreen dark:text-p1-cyan text-xl font-bold xl:text-2xl">
                              Drivers
                            </h2>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="border-p1-cyan bg-p1-green hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-p1-darkgreen w-full place-content-end rounded-md border py-2 text-white dark:hover:shadow-lg">
                              Explore Collection
                            </button>
                          </div>
                        </div>{' '}
                        <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                          <div>
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Items</p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                              10,000
                            </p>
                          </div>
                          <div>
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                              Floor Price
                            </p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                              Total Volume
                            </p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                              25K
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="group border-p1-green bg-opacity-50 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:bg-opacity-80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 bg-gray-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                      <Link href="#" className="mx-auto justify-center">
                        <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-1">
                          <Image
                            width={480}
                            height={480}
                            src="/HeroNFT/Team's members/TeamMember1.png"
                            alt="Team's member1"
                            className="w-full"
                          />
                          <div>
                            <h2 className="spacing-1 text-p1-darkgreen dark:text-p1-cyan text-xl font-bold xl:text-2xl">
                              Team&apos;s Members
                            </h2>

                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="border-p1-cyan bg-p1-green hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-p1-darkgreen w-full place-content-end rounded-md border py-2 text-white dark:hover:shadow-lg">
                              Explore Collection
                            </button>
                          </div>
                        </div>{' '}
                        <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                          <div>
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Items</p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                              10,000
                            </p>
                          </div>
                          <div>
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                              Floor Price
                            </p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                              Total Volume
                            </p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                              25K
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="group border-p1-green bg-opacity-50 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:bg-opacity-80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 bg-gray-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                      <Link href="#" className="mx-auto justify-center">
                        <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-1">
                          <Image
                            width={480}
                            height={480}
                            src="/HeroNFT/Collectors/Collector1.png"
                            alt="RaceLad"
                            className="w-full"
                          />
                          <div>
                            <h2 className="spacing-1 text-p1-darkgreen dark:text-p1-cyan text-xl font-bold xl:text-2xl">
                              Collectors
                            </h2>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="border-p1-cyan bg-p1-green hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-p1-darkgreen w-full place-content-end rounded-md border py-2 text-white dark:hover:shadow-lg">
                              Explore Collection
                            </button>
                          </div>
                        </div>{' '}
                        <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                          <div>
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Items</p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                              10,000
                            </p>
                          </div>
                          <div>
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                              Floor Price
                            </p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                              Total Volume
                            </p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                              25K
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="group border-p1-green bg-opacity-50 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:bg-opacity-80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 bg-gray-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                      <Link href="#" className="mx-auto justify-center">
                        <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-1">
                          <Image
                            width={480}
                            height={480}
                            src="/Cars/Car.png"
                            alt="Car"
                            className="w-full"
                          />
                          <div>
                            <h2 className="spacing-1 text-p1-darkgreen dark:text-p1-cyan text-xl font-bold xl:text-2xl">
                              Cars
                            </h2>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="border-p1-cyan bg-p1-green hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-p1-darkgreen w-full place-content-end rounded-md border py-2 text-white dark:hover:shadow-lg">
                              Explore Collection
                            </button>
                          </div>
                        </div>{' '}
                        <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                          <div>
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Items</p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                              10,000
                            </p>
                          </div>
                          <div>
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                              Floor Price
                            </p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                              Total Volume
                            </p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                              25K
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="group border-p1-green bg-opacity-50 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:bg-opacity-80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 bg-gray-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                      <Link href="#" className="mx-auto justify-center">
                        <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-1">
                          <Image
                            width={480}
                            height={480}
                            src="/HeroNFT/CustomLads/CustomLads1.png"
                            alt="CustomLad"
                            className="w-full"
                          />
                          <div>
                            <h2 className="spacing-1 text-p1-darkgreen dark:text-p1-cyan text-xl font-bold xl:text-2xl">
                              Custom Lads
                            </h2>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="border-p1-cyan bg-p1-green hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-p1-darkgreen w-full place-content-end rounded-md border py-2 text-white dark:hover:shadow-lg">
                              Explore Collection
                            </button>
                          </div>
                        </div>{' '}
                        <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                          <div>
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Items</p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                              10,000
                            </p>
                          </div>
                          <div>
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                              Floor Price
                            </p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                              Total Volume
                            </p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                              25K
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="group border-p1-green bg-opacity-50 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:bg-opacity-80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 bg-gray-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                      <Link href="#" className="mx-auto justify-center">
                        <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-1">
                          <Image
                            width={480}
                            height={480}
                            src="/Hero/Rewards.png"
                            alt="Rewards"
                            className="w-full"
                          />
                          <div>
                            <h2 className="spacing-1 text-p1-darkgreen dark:text-p1-cyan text-xl font-bold xl:text-2xl">
                              Awards
                            </h2>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="border-p1-cyan bg-p1-green hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-p1-darkgreen w-full place-content-end rounded-md border py-2 text-white dark:hover:shadow-lg">
                              Explore Collection
                            </button>
                          </div>
                        </div>{' '}
                        <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                          <div>
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Items</p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                              10,000
                            </p>
                          </div>
                          <div>
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                              Floor Price
                            </p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                              Total Volume
                            </p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                              25K
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="group border-p1-green bg-opacity-50 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:bg-opacity-80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 bg-gray-100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2">
                      <Link href="#" className="mx-auto justify-center">
                        <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-1">
                          <Image
                            width={480}
                            height={480}
                            src="/Licenses/Global Lic.png"
                            alt="GlobalLic"
                            className="w-full"
                          />
                          <div>
                            <h2 className="spacing-1 text-p1-darkgreen dark:text-p1-cyan text-xl font-bold xl:text-2xl">
                              Licenses
                            </h2>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <p className="spacing-1 text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="border-p1-cyan bg-p1-green hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-p1-darkgreen w-full place-content-end rounded-md border py-2 text-white dark:hover:shadow-lg">
                              Explore Collection
                            </button>
                          </div>
                        </div>{' '}
                        <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                          <div>
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Items</p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                              10,000
                            </p>
                          </div>
                          <div>
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                              Floor Price
                            </p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
                            <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">
                              Total Volume
                            </p>
                            <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
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
