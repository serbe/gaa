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
      <div className="h-1/6 bg-p1-white bg-cover bg-center p-2 dark:bg-p1-deepdarkgreen dark:brightness-75">
        <div className="flex justify-center space-x-2"></div>
        <div className="grid grid-cols-2 justify-center p-1 md:justify-between">
          <div className="flex justify-start space-x-6"></div>
        </div>

        {/* Карточка */}

        <div className="grid grid-cols-1 place-content-between pt-2 md:grid-cols-[500px_1fr] lg:grid-cols-[500px_1fr] xl:grid-cols-[500px_1fr] 2xl:grid-cols-[900px_1fr]">
          <div className="grid grid-cols-1 place-content-start">
            <div className="grid grid-cols-2 justify-between md:grid-cols-2 2xl:grid-cols-2">
              <div className="flex justify-start space-x-1 md:px-10">
                <div className="w-10 transition-all delay-75 duration-300 ease-in-out hover:scale-125">
                  <Link href="#">
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
                  <div className="flex justify-start">
                    <div className="relative">
                      <div className="justify-start text-xl text-p1-darkgreen dark:text-p1-green">
                        <Image
                          className="size-8 p-0 transition-all delay-75 duration-300 ease-in-out hover:scale-125"
                          width={480}
                          height={480}
                          src="/icon/view_green.png"
                          alt="view"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="mx-auto justify-start px-2 text-xl text-p1-green">
                        569 views
                      </div>
                    </div>
                    <div className="px-4"> </div>
                  </div>

                  <div className="w-7 text-xl text-p1-green">10</div>
                  <div className="w-10">
                    <div className="transition-all delay-75 duration-300 ease-in-out hover:scale-125">
                      <Link href="#" className="">
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
              <Link href="#" className="mx-auto w-full">
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
              <div className="w-full rounded-2xl border border-p1-green bg-p1-white text-xl text-p1-darkgreen shadow-lg dark:bg-p1-deepdarkgreen">
                <details className="m-2">
                  <summary className="relative flex cursor-pointer justify-start py-2">
                    <div className="px-2">
                      <Image
                        className="size-10 transition-all duration-300 ease-in-out hover:scale-125"
                        width={480}
                        height={480}
                        src="/icon/description_green.png"
                        alt="ph"
                      />
                    </div>
                    <div className="place-content-center px-4 text-p1-darkgreen dark:text-p1-green">
                      Description
                    </div>
                  </summary>
                  <div className="pt-1 pl-4 text-p1-darkgreen dark:text-p1-green">
                    <div className="group relative">
                      <div>
                        <Link
                          href="#"
                          className="mx-auto justify-start text-2xl text-p1-green hover:text-p1-cyan"
                        >
                          by Global Automotive Association
                        </Link>
                      </div>
                      <div className="invisible absolute left-1/2 z-10 -translate-x-1/2 place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                        <div className="w-64 rounded-xl text-xl shadow-lg">
                          <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                  GAA
                                  <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                    0x010a...0369
                                  </div>
                                </div>
                              </div>
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
                      популяризацию автомобильной культуры.
                    </p>
                  </div>
                </details>
              </div>
            </div>
            <div className="place-content-start px-2 py-1">
              <div className="w-full rounded-2xl border border-p1-green bg-p1-white text-xl text-p1-darkgreen shadow-lg dark:bg-p1-deepdarkgreen">
                <details className="m-2" open>
                  <summary className="relative flex cursor-pointer justify-start py-2">
                    <div className="px-2">
                      <Image
                        className="size-10 transition-all duration-300 ease-in-out hover:scale-125"
                        width={480}
                        height={480}
                        src="/icon/traits_green.png"
                        alt="ph"
                      />
                    </div>
                    <div className="place-content-center px-4 text-p1-darkgreen dark:text-p1-green">
                      Traits
                    </div>
                  </summary>
                  <div className="pt-1 text-center text-p1-darkgreen lining-nums sm:px-2 dark:text-p1-green">
                    <div className="group">
                      <div className="grid grid-cols-2 place-content-center gap-1 text-sm sm:grid-cols-2 sm:gap-2 sm:text-xl 2xl:grid-cols-3">
                        <div className="">
                          <div className="grid">
                            <Link
                              href="#"
                              className="rounded-xl border-2 border-p1-green bg-p1-white p-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                            >
                              <div>
                                <Image
                                  className="size-7 transition-all duration-300 ease-in-out hover:scale-125"
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
                              className="rounded-xl border-2 border-p1-green bg-p1-white p-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                            >
                              <div>
                                <Image
                                  className="size-7 transition-all duration-300 ease-in-out hover:scale-125"
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
                              className="rounded-xl border-2 border-p1-green bg-p1-white p-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                            >
                              <div>
                                <Image
                                  className="size-7 transition-all duration-300 ease-in-out hover:scale-125"
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
                              className="rounded-xl border-2 border-p1-green bg-p1-white p-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                            >
                              <div>
                                <Image
                                  className="size-7 transition-all duration-300 ease-in-out hover:scale-125"
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
                              className="rounded-xl border-2 border-p1-green bg-p1-white p-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                            >
                              <div>
                                <Image
                                  className="size-7 transition-all duration-300 ease-in-out hover:scale-125"
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
                              className="rounded-xl border-2 border-p1-green bg-p1-white p-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                            >
                              <div>
                                <Image
                                  className="size-7 transition-all duration-300 ease-in-out hover:scale-125"
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
                              className="rounded-xl border-2 border-p1-green bg-p1-white p-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                            >
                              <div>
                                <Image
                                  className="size-7 transition-all duration-300 ease-in-out hover:scale-125"
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
              <div className="w-full rounded-2xl border border-p1-green bg-p1-white text-xl text-p1-darkgreen shadow-lg dark:bg-p1-deepdarkgreen">
                <details className="m-2">
                  <summary className="relative flex cursor-pointer justify-start py-2">
                    <div className="px-2">
                      <Image
                        className="size-10 transition-all duration-300 ease-in-out hover:scale-125"
                        width={480}
                        height={480}
                        src="/icon/detail_green.png"
                        alt="ph"
                      />
                    </div>
                    <div className="place-content-center px-4 text-p1-darkgreen dark:text-p1-green">
                      Detail
                    </div>
                  </summary>
                  <div className="pt-1 pl-4 text-p1-darkgreen dark:text-p1-green">
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
                        href="#"
                        className="mx-auto justify-start text-2xl text-p1-green hover:text-p1-cyan"
                      >
                        RaceLads
                      </Link>
                    </div>
                    <div className="invisible absolute top-full left-1/2 z-10 -translate-x-1/2 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                      <div className="w-96 text-base shadow-lg">
                        <div className="group mx-auto mt-1 w-full space-x-3 rounded-2xl border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                <h2 className="text-xl font-bold text-p1-darkgreen xl:text-2xl dark:text-p1-cyan">
                                  RaceLads
                                </h2>
                                <p className="text-p1-darkgreen dark:text-p1-cyan"></p>
                                <p className="text-p1-darkgreen dark:text-p1-cyan"></p>
                                <button className="w-full place-content-end rounded-md border border-p1-cyan bg-p1-green py-2 text-white hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-lg dark:hover:shadow-p1-darkgreen">
                                  Explore Collection
                                </button>
                              </div>
                            </div>
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
                                    width={50}
                                    height={50}
                                    src="/Logo/eth.png"
                                    alt="eth"
                                  />
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
                </div>

                <div className="flex justify-end md:px-10"></div>
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
                        JohnDoe
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
                          href="#"
                          className="mx-auto justify-start text-2xl text-p1-green hover:text-p1-cyan"
                        >
                          JeamBeam
                        </Link>
                      </div>
                      <div className="invisible absolute left-1/2 z-10 -translate-x-1/2 place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                        <div className="w-64 rounded-xl text-xl shadow-lg">
                          <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                  JeamBeam
                                  <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                    0x010a...0369
                                  </div>
                                </div>
                              </div>
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

            <div className="pb-2"> </div>
            <div className="rounded-2xl border-2 bg-p1-white p-2 shadow-xs md:px-10 dark:border-p1-green dark:bg-p1-deepdarkgreen">
              <div className="flex justify-start space-x-1">
                <div className="relative">
                  <div className="mx-auto text-xl text-p1-darkgreen dark:text-p1-green">
                    Best offer
                  </div>

                  <div>
                    <div className="">
                      <div className="grid grid-cols-1 justify-between lg:grid-cols-2">
                        <div className="flex justify-start">
                          <div className="">
                            <div className="mx-auto justify-start px-2 text-4xl text-p1-darkgreen dark:text-p1-green">
                              2,72
                            </div>
                          </div>
                          <div className="relative place-self-center">
                            <div className="mx-auto text-2xl text-p1-darkgreen dark:text-p1-green">
                              <form className="">
                                <label htmlFor="price" className="block w-full"></label>
                                <select
                                  id="price"
                                  className="mx-auto flex w-full overflow-hidden border-p1-green bg-p1-white/50 text-center hover:border-p1-green hover:bg-p1-cyan/10 dark:bg-p1-deepdarkgreen dark:text-p1-green dark:accent-p1-darkgreen dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                                  defaultValue={'DEFAULT'}
                                >
                                  <option value="DEFAULT" disabled>
                                    USD
                                  </option>
                                  <option value="USD">USD</option>
                                  <option value="USD">USDT</option>
                                  <option value="ETH">ETH</option>
                                  <option value="SOL">SOL</option>
                                  <option value="POL">POL</option>
                                  <option value="POL">WETH</option>
                                </select>
                              </form>
                            </div>
                          </div>

                          <div className="px-4"> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-5 grid grid-cols-1 place-content-around gap-4 2xl:grid-cols-3">
                <div className="basis-1/2">
                  <div className="relative flex place-content-center">
                    <div className="inline-flex h-20 w-full place-content-center rounded-l-xl xl:text-xl">
                      <Link
                        href="#"
                        className="relative flex w-4/5 place-content-center rounded-l-xl border-2 border-p1-green bg-p1-white p-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                      >
                        <div className="place-self-center text-center text-xl leading-3">Buy:</div>
                      </Link>

                      <Link
                        href="#"
                        className="grid w-1/5 place-content-center rounded-r-xl border-y-2 border-r-2 border-p1-green bg-p1-white text-center text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:shadow-xl hover:ring-p1-cyan focus:scale-95 focus:border-l-2 focus:border-p1-darkgreen focus:bg-p1-darkgreen focus:shadow-lg focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-darkgreen dark:focus:text-p1-cyan"
                      >
                        <Image
                          className="inline-block size-7 focus:bg-p1-darkgreen dark:hover:bg-p1-deepdarkgreen"
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
                  <div className="relative place-content-center">
                    <div className="inline-block w-full place-content-center rounded-l-xl xl:text-xl">
                      <Link
                        href="#"
                        className="relative flex h-20 place-content-center rounded-xl border-2 border-p1-green bg-p1-white p-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                      >
                        <div>
                          <Image
                            className="size-7 place-self-center transition-all duration-300 ease-in-out hover:scale-125"
                            width={480}
                            height={480}
                            src="/icon/offer_green.png"
                            alt="offer"
                          />
                        </div>
                        <div className="place-self-center px-4">Sale</div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="basis-1/2">
                  <div>
                    <Link
                      href="#"
                      className="relative flex h-20 place-content-center rounded-xl border-2 border-p1-green bg-p1-white p-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                    >
                      <div>
                        <Image
                          className="size-7 transition-all duration-300 ease-in-out hover:scale-125"
                          width={480}
                          height={480}
                          src="/icon/offer_green.png"
                          alt="offer"
                        />
                      </div>
                      <div className="place-self-center px-4">Сделать предложение</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <div className="w-full rounded-2xl border border-p1-green bg-p1-white text-xl text-p1-darkgreen shadow-lg dark:bg-p1-deepdarkgreen">
                <details className="m-2" open>
                  <summary className="relative flex cursor-pointer justify-start py-2">
                    <div className="px-2">
                      <Image
                        className="size-10 transition-all duration-300 ease-in-out hover:scale-125"
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
                  <div className="pt-1 pl-4 text-p1-darkgreen dark:text-p1-green">
                    This collection belongs to a verified account and has significant interest or
                    sales. Learn more This token was minted on the smart contract at the address
                    below:
                  </div>
                </details>
              </div>
            </div>
            <div className="pt-2">
              <div className="w-full rounded-2xl border border-p1-green bg-p1-white text-xl text-p1-darkgreen shadow-lg dark:bg-p1-deepdarkgreen">
                <details className="m-2" open>
                  <summary className="relative flex cursor-pointer justify-start py-2">
                    <div className="px-2">
                      <Image
                        className="size-10 transition-all duration-300 ease-in-out hover:scale-125"
                        width={480}
                        height={480}
                        src="/icon/listings_green.png"
                        alt="ph"
                      />
                    </div>
                    <div className="place-content-center px-4 text-p1-darkgreen dark:text-p1-green">
                      Listings
                    </div>
                  </summary>
                  {/* Таблица Listings*/}
                  <div className="relative h-80 place-content-center overflow-auto md:visible">
                    <div className="relative shadow-md sm:rounded-lg">
                      <table className="w-full pb-2 text-left text-xl text-p1-darkgreen dark:text-p1-green">
                        <thead className="sticky top-0 z-10 bg-gray-50 text-xs text-p1-darkgreen uppercase dark:bg-p1-deepdarkgreen dark:text-p1-green">
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
                              className="place-content-center p-2 text-center font-medium whitespace-nowrap"
                            >
                              2,7475 ETH
                            </th>
                            <td className="p-2">
                              <div className="relative text-right">$ 9 012,43</div>
                            </td>
                            <td className="p-2 text-center">1</td>
                            <td className="p-2 text-center">2 minute ago</td>
                            <td className="p-2 text-left">
                              <div className="group relative">
                                <div>
                                  <Link
                                    href="#"
                                    className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                  >
                                    JeamBeam
                                  </Link>
                                </div>
                                <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                  <div className="w-64 rounded-xl text-xl shadow-lg">
                                    <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                            JeamBeam
                                            <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                              0x010a...0369
                                            </div>
                                          </div>
                                        </div>
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
                            <td className="p-2 text-right">
                              <Link
                                href="#"
                                className="relative flex place-content-center rounded-xl border-2 border-p1-green bg-p1-white p-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                              >
                                <div></div>
                                <div className="px-2">Buy</div>
                              </Link>
                            </td>
                          </tr>
                          <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                            <th
                              scope="row"
                              className="place-content-center p-2 text-center font-medium whitespace-nowrap"
                            >
                              2,7475 ETH
                            </th>
                            <td className="p-2">
                              <div className="relative text-right">$ 9 012,43</div>
                            </td>
                            <td className="p-2 text-center">1</td>
                            <td className="p-2 text-center">2 minute ago</td>
                            <td className="p-2 text-left">
                              <div className="group relative">
                                <div>
                                  <Link
                                    href="#"
                                    className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                  >
                                    JeamBeam
                                  </Link>
                                </div>
                                <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                  <div className="w-64 rounded-xl text-xl shadow-lg">
                                    <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                            JeamBeam
                                            <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                              0x010a...0369
                                            </div>
                                          </div>
                                        </div>
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
                            <td className="p-2 text-right">
                              <Link
                                href="#"
                                className="relative flex place-content-center rounded-xl border-2 border-p1-green bg-p1-white p-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                              >
                                <div></div>
                                <div className="px-2">Buy</div>
                              </Link>
                            </td>
                          </tr>
                          <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                            <th
                              scope="row"
                              className="place-content-center p-2 text-center font-medium whitespace-nowrap"
                            >
                              2,7475 ETH
                            </th>
                            <td className="p-2">
                              <div className="relative text-right">$ 9 012,43</div>
                            </td>
                            <td className="p-2 text-center">1</td>
                            <td className="p-2 text-center">2 minute ago</td>
                            <td className="p-2 text-left">
                              <div className="group relative">
                                <div>
                                  <Link
                                    href="#"
                                    className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                  >
                                    JeamBeam
                                  </Link>
                                </div>
                                <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                  <div className="w-64 rounded-xl text-xl shadow-lg">
                                    <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                            JeamBeam
                                            <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                              0x010a...0369
                                            </div>
                                          </div>
                                        </div>
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
                            <td className="p-2 text-right">
                              <Link
                                href="#"
                                className="relative flex place-content-center rounded-xl border-2 border-p1-green bg-p1-white p-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                              >
                                <div></div>
                                <div className="px-2">Buy</div>
                              </Link>
                            </td>
                          </tr>
                          <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                            <th
                              scope="row"
                              className="place-content-center p-2 text-center font-medium whitespace-nowrap"
                            >
                              2,7475 ETH
                            </th>
                            <td className="p-2">
                              <div className="relative text-right">$ 9 012,43</div>
                            </td>
                            <td className="p-2 text-center">1</td>
                            <td className="p-2 text-center">2 minute ago</td>
                            <td className="p-2 text-left">
                              <div className="group relative">
                                <div>
                                  <Link
                                    href="#"
                                    className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                  >
                                    JeamBeam
                                  </Link>
                                </div>
                                <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                  <div className="w-64 rounded-xl text-xl shadow-lg">
                                    <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                            JeamBeam
                                            <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                              0x010a...0369
                                            </div>
                                          </div>
                                        </div>
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
                            <td className="p-2 text-right">
                              <Link
                                href="#"
                                className="relative flex place-content-center rounded-xl border-2 border-p1-green bg-p1-white p-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                              >
                                <div></div>
                                <div className="px-2">Buy</div>
                              </Link>
                            </td>
                          </tr>
                          <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                            <th
                              scope="row"
                              className="place-content-center p-2 text-center font-medium whitespace-nowrap"
                            >
                              2,7475 ETH
                            </th>
                            <td className="p-2">
                              <div className="relative text-right">$ 9 012,43</div>
                            </td>
                            <td className="p-2 text-center">1</td>
                            <td className="p-2 text-center">2 minute ago</td>
                            <td className="p-2 text-left">
                              <div className="group relative">
                                <div>
                                  <Link
                                    href="#"
                                    className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                  >
                                    JeamBeam
                                  </Link>
                                </div>
                                <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                  <div className="w-64 rounded-xl text-xl shadow-lg">
                                    <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                            JeamBeam
                                            <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                              0x010a...0369
                                            </div>
                                          </div>
                                        </div>
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
                            <td className="p-2 text-right">
                              <Link
                                href="#"
                                className="relative flex place-content-center rounded-xl border-2 border-p1-green bg-p1-white p-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                              >
                                <div></div>
                                <div className="px-2">Buy</div>
                              </Link>
                            </td>
                          </tr>
                          <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                            <th
                              scope="row"
                              className="place-content-center p-2 text-center font-medium whitespace-nowrap"
                            >
                              2,7475 ETH
                            </th>
                            <td className="p-2">
                              <div className="relative text-right">$ 9 012,43</div>
                            </td>
                            <td className="p-2 text-center">1</td>
                            <td className="p-2 text-center">2 minute ago</td>
                            <td className="p-2 text-left">
                              <div className="group relative">
                                <div>
                                  <Link
                                    href="#"
                                    className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                  >
                                    JeamBeam
                                  </Link>
                                </div>
                                <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                  <div className="w-64 rounded-xl text-xl shadow-lg">
                                    <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                            JeamBeam
                                            <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                              0x010a...0369
                                            </div>
                                          </div>
                                        </div>
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
                            <td className="p-2 text-right">
                              <Link
                                href="#"
                                className="relative flex place-content-center rounded-xl border-2 border-p1-green bg-p1-white p-4 text-p1-darkgreen shadow-lg transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
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
              <div className="w-full rounded-2xl border border-p1-green bg-p1-white text-xl text-p1-darkgreen shadow-lg dark:bg-p1-deepdarkgreen">
                <details className="m-2" open>
                  <summary className="relative flex cursor-pointer justify-start py-2">
                    <div className="px-2">
                      <Image
                        className="size-10 transition-all duration-300 ease-in-out hover:scale-125"
                        width={480}
                        height={480}
                        src="/icon/offers_green.png"
                        alt="ph"
                      />
                    </div>
                    <div className="place-content-center px-4 text-p1-darkgreen dark:text-p1-green">
                      Offers
                    </div>
                  </summary>
                  <div className="pt-1 pl-4 text-p1-darkgreen dark:text-p1-green">
                    {/* Таблица Offers*/}
                    <div className="h-72 place-content-center overflow-auto md:visible">
                      <div className="relative shadow-md sm:rounded-lg">
                        <table className="w-full pb-2 text-left text-xl text-p1-darkgreen dark:text-p1-green">
                          <thead className="sticky top-0 z-10 bg-gray-50 text-xs text-p1-darkgreen uppercase dark:bg-p1-deepdarkgreen dark:text-p1-green">
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
                                className="place-content-center p-2 text-right font-medium whitespace-nowrap"
                              >
                                2,7475 ETH
                              </th>
                              <td className="p-2">
                                <div className="relative text-right">$ 9 012,43</div>
                              </td>
                              <td className="p-2 text-center">8</td>
                              <td className="p-2 text-center">100% below</td>

                              <td className="p-2 text-center">in 17 days</td>
                              <td className="p-2 text-left">
                                <div className="group relative">
                                  <div>
                                    <Link
                                      href="#"
                                      className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                    >
                                      JeamBeam
                                    </Link>
                                  </div>
                                  <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                    <div className="w-64 rounded-xl text-xl shadow-lg">
                                      <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                              JeamBeam
                                              <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                                0x010a...0369
                                              </div>
                                            </div>
                                          </div>
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
                            <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                              <th
                                scope="row"
                                className="place-content-center p-2 text-right font-medium whitespace-nowrap"
                              >
                                2,7475 ETH
                              </th>
                              <td className="p-2">
                                <div className="relative text-right">$ 9 012,43</div>
                              </td>
                              <td className="p-2 text-center">8</td>
                              <td className="p-2 text-center">100% below</td>

                              <td className="p-2 text-center">in 17 days</td>
                              <td className="p-2 text-left">
                                <div className="group relative">
                                  <div>
                                    <Link
                                      href="#"
                                      className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                    >
                                      JeamBeam
                                    </Link>
                                  </div>
                                  <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                    <div className="w-64 rounded-xl text-xl shadow-lg">
                                      <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                              JeamBeam
                                              <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                                0x010a...0369
                                              </div>
                                            </div>
                                          </div>
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
                            <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                              <th
                                scope="row"
                                className="place-content-center p-2 text-right font-medium whitespace-nowrap"
                              >
                                2,7475 ETH
                              </th>
                              <td className="p-2">
                                <div className="relative text-right">$ 9 012,43</div>
                              </td>
                              <td className="p-2 text-center">8</td>
                              <td className="p-2 text-center">100% below</td>

                              <td className="p-2 text-center">in 17 days</td>
                              <td className="p-2 text-left">
                                <div className="group relative">
                                  <div>
                                    <Link
                                      href="#"
                                      className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                    >
                                      JeamBeam
                                    </Link>
                                  </div>
                                  <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                    <div className="w-64 rounded-xl text-xl shadow-lg">
                                      <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                              JeamBeam
                                              <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                                0x010a...0369
                                              </div>
                                            </div>
                                          </div>
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
                            <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                              <th
                                scope="row"
                                className="place-content-center p-2 text-right font-medium whitespace-nowrap"
                              >
                                2,7475 ETH
                              </th>
                              <td className="p-2">
                                <div className="relative text-right">$ 9 012,43</div>
                              </td>
                              <td className="p-2 text-center">8</td>
                              <td className="p-2 text-center">100% below</td>

                              <td className="p-2 text-center">in 17 days</td>
                              <td className="p-2 text-left">
                                <div className="group relative">
                                  <div>
                                    <Link
                                      href="#"
                                      className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                    >
                                      JeamBeam
                                    </Link>
                                  </div>
                                  <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                    <div className="w-64 rounded-xl text-xl shadow-lg">
                                      <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                              JeamBeam
                                              <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                                0x010a...0369
                                              </div>
                                            </div>
                                          </div>
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
                            <tr className="border-b bg-white text-base lining-nums dark:border-p1-green dark:bg-p1-deepdarkgreen">
                              <th
                                scope="row"
                                className="place-content-center p-2 text-right font-medium whitespace-nowrap"
                              >
                                2,7475 ETH
                              </th>
                              <td className="p-2">
                                <div className="relative text-right">$ 9 012,43</div>
                              </td>
                              <td className="p-2 text-center">8</td>
                              <td className="p-2 text-center">100% below</td>

                              <td className="p-2 text-center">in 17 days</td>
                              <td className="p-2 text-left">
                                <div className="group relative">
                                  <div>
                                    <Link
                                      href="#"
                                      className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                    >
                                      JeamBeam
                                    </Link>
                                  </div>
                                  <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                    <div className="w-64 rounded-xl text-xl shadow-lg">
                                      <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                              JeamBeam
                                              <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                                0x010a...0369
                                              </div>
                                            </div>
                                          </div>
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
          <div className="w-full rounded-2xl border border-p1-green bg-p1-white text-xl text-p1-darkgreen shadow-lg dark:bg-p1-deepdarkgreen">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-start py-2">
                <div className="px-2">
                  <Image
                    className="size-10 transition-all duration-300 ease-in-out hover:scale-125"
                    width={480}
                    height={480}
                    src="/icon/top_down-arrow_green.png"
                    alt="ph"
                  />
                </div>
                <div className="place-content-center px-4 text-p1-darkgreen dark:text-p1-green">
                  Item Activity
                </div>
              </summary>
              <div className="pt-1 pl-4 text-p1-darkgreen dark:text-p1-green">
                <div className="flex grid-flow-row auto-rows-max justify-center space-x-2 lg:justify-start">
                  <div>
                    <div
                      className="inline-flex w-full justify-center rounded-md pt-1 text-sm shadow-xs"
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
                <div className="h-72 place-content-center overflow-auto md:visible">
                  <div className="relative shadow-md sm:rounded-lg">
                    <table className="w-full pb-2 text-left text-xl text-p1-darkgreen dark:text-p1-green">
                      <thead className="sticky top-0 z-10 h-full bg-gray-100 text-xs text-p1-darkgreen uppercase dark:bg-p1-deepdarkgreen dark:text-p1-green">
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
                            className="place-content-center p-2 text-right font-medium whitespace-nowrap"
                          >
                            <Image
                              width={480}
                              height={480}
                              src="/icon/Transfer_green.png"
                              alt="Transfer_green"
                              className="w-6 rounded-lg"
                            />
                          </th>
                          <td className="p-2">
                            <div className="relative text-left">Transfer</div>
                          </td>
                          <td className="p-2 text-left"> ...</td>
                          <td className="p-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href="#"
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  JeamBeam
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                          JeamBeam
                                          <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>
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

                          <td className="p-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href="#"
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  JeamBeam
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                          JeamBeam
                                          <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>
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
                          <td className="p-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href="#"
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  4d ago
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <div className="font-semibold text-p1-darkgreen">
                                          на страницу Etherscan
                                          <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                            Transaction Details
                                          </div>
                                        </div>
                                      </div>
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
                            className="place-content-center p-2 text-right font-medium whitespace-nowrap"
                          >
                            <Image
                              width={480}
                              height={480}
                              src="/logo/shopping-cart.png"
                              alt="shopping-cart"
                              className="w-6 rounded-lg"
                            />
                          </th>
                          <td className="p-2">
                            <div className="relative text-left">Sale</div>
                          </td>
                          <td className="p-2 text-left">2,8413 WETH</td>
                          <td className="p-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href="#"
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  JeamBeam
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                          JeamBeam
                                          <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>
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

                          <td className="p-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href="#"
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  JeamBeam
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                          JeamBeam
                                          <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>
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
                          <td className="p-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href="#"
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  4d ago
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <div className="font-semibold text-p1-darkgreen">
                                          на страницу Etherscan
                                          <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                            Transaction Details
                                          </div>
                                        </div>
                                      </div>
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
                            className="place-content-center p-2 text-right font-medium whitespace-nowrap"
                          >
                            <Image
                              width={480}
                              height={480}
                              src="/icon/mint_green.png"
                              alt="mint"
                              className="w-8 rounded-lg"
                            />
                          </th>
                          <td className="p-2">
                            <div className="relative text-left">Mint</div>
                          </td>
                          <td className="p-2 text-left">0,03 ETH</td>
                          <td className="p-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href="#"
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  NulAdress
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                          JeamBeam
                                          <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>
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

                          <td className="p-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href="#"
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  JeamBeam
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                          JeamBeam
                                          <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>
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
                          <td className="p-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href="#"
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  4d ago
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <div className="font-semibold text-p1-darkgreen">
                                          на страницу Etherscan
                                          <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                            Transaction Details
                                          </div>
                                        </div>
                                      </div>
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
                            className="place-content-center p-2 text-right font-medium whitespace-nowrap"
                          >
                            <Image
                              width={480}
                              height={480}
                              src="/icon/airdrop.png"
                              alt="mint"
                              className="w-8 rounded-lg"
                            />
                          </th>
                          <td className="p-2">
                            <div className="relative text-left">Airdrop</div>
                          </td>
                          <td className="p-2 text-left">...</td>
                          <td className="p-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href="#"
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  NulAdress
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                          JeamBeam
                                          <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>
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

                          <td className="p-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href="#"
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  JeamBeam
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                                          JeamBeam
                                          <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                            0x010a...0369
                                          </div>
                                        </div>
                                      </div>
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
                          <td className="p-2 text-left">
                            <div className="group relative">
                              <div>
                                <Link
                                  href="#"
                                  className="mx-auto justify-start text-left text-p1-green hover:text-p1-cyan"
                                >
                                  4d ago
                                </Link>
                              </div>
                              <div className="invisible absolute top-0 -left-1.5 z-50 -translate-x-full place-content-start opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                <div className="w-64 rounded-xl text-xl shadow-lg">
                                  <div className="group mx-auto mt-1 w-full place-self-start rounded-lg border-2 border-p1-green bg-p2-white2/100 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
                                    <Link href="#" className="mx-auto">
                                      <div className="inline-flex place-content-start space-x-2">
                                        <div className="font-semibold text-p1-darkgreen">
                                          на страницу Etherscan
                                          <div className="text-base font-thin text-p1-darkgreen lining-nums">
                                            Transaction Details
                                          </div>
                                        </div>
                                      </div>
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
          <div className="w-full rounded-2xl border border-p1-green bg-p1-white text-xl text-p1-darkgreen shadow-lg dark:bg-p1-deepdarkgreen">
            <details className="m-2" open>
              <summary className="relative flex cursor-pointer justify-start py-2">
                <div className="px-2">
                  <Image
                    className="size-10 transition-all duration-300 ease-in-out hover:scale-125"
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
              <div className="pt-1 pl-4 text-p1-darkgreen dark:text-p1-green">
                {/* Карусель Карточки коллекции*/}
                <div className="w-full snap-x space-x-6 place-self-center overflow-x-auto rounded-3xl bg-p1-white/0 p-4 dark:bg-p1-green/0">
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
                      <div className="group relative h-[21.5rem] w-60 place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-xs hover:shadow-lg hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                            <Link
                              href="#"
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
                              className="size-60 object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p2-white2/100 p-1 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
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
                              Last sale: 1000 WETH
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 h-[2.8rem] w-60 translate-y-full bg-p1-darkgreen/100 text-center text-p2-white2 shadow-xs shadow-p1-green transition-transform duration-500 ease-in-out group-hover:translate-y-0 hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen">
                            <div
                              className="inline-flex h-[2.8rem] w-60 justify-center text-sm"
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
                                href="#"
                                className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <Image
                                  className="inline-block size-6 bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
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
                      <div className="group relative h-[21.5rem] w-60 place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-xs hover:shadow-lg hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                            <Link
                              href="#"
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
                              className="size-60 object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p2-white2/100 p-1 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
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
                              Last sale: 1000 WETH
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 h-[2.8rem] w-60 translate-y-full bg-p1-darkgreen/100 text-center text-p2-white2 shadow-xs shadow-p1-green transition-transform duration-500 ease-in-out group-hover:translate-y-0 hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen">
                            <div
                              className="inline-flex h-[2.8rem] w-60 justify-center text-sm"
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
                                href="#"
                                className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <Image
                                  className="inline-block size-6 bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
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
                      <div className="group relative h-[21.5rem] w-60 place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-xs hover:shadow-lg hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                            <Link
                              href="#"
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
                              className="size-60 object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p2-white2/100 p-1 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
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
                              Last sale: 1000 WETH
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 h-[2.8rem] w-60 translate-y-full bg-p1-darkgreen/100 text-center text-p2-white2 shadow-xs shadow-p1-green transition-transform duration-500 ease-in-out group-hover:translate-y-0 hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen">
                            <div
                              className="inline-flex h-[2.8rem] w-60 justify-center text-sm"
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
                                href="#"
                                className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <Image
                                  className="inline-block size-6 bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
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
                      <div className="group relative h-[21.5rem] w-60 place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-xs hover:shadow-lg hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                            <Link
                              href="#"
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
                              className="size-60 object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p2-white2/100 p-1 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
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
                              Last sale: 1000 WETH
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 h-[2.8rem] w-60 translate-y-full bg-p1-darkgreen/100 text-center text-p2-white2 shadow-xs shadow-p1-green transition-transform duration-500 ease-in-out group-hover:translate-y-0 hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen">
                            <div
                              className="inline-flex h-[2.8rem] w-60 justify-center text-sm"
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
                                href="#"
                                className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <Image
                                  className="inline-block size-6 bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
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
                      <div className="group relative h-[21.5rem] w-60 place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-xs hover:shadow-lg hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                            <Link
                              href="#"
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
                              className="size-60 object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p2-white2/100 p-1 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
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
                              Last sale: 1000 WETH
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 h-[2.8rem] w-60 translate-y-full bg-p1-darkgreen/100 text-center text-p2-white2 shadow-xs shadow-p1-green transition-transform duration-500 ease-in-out group-hover:translate-y-0 hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen">
                            <div
                              className="inline-flex h-[2.8rem] w-60 justify-center text-sm"
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
                                href="#"
                                className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <Image
                                  className="inline-block size-6 bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
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
                      <div className="group relative h-[21.5rem] w-60 place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-xs hover:shadow-lg hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                            <Link
                              href="#"
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
                              className="size-60 object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p2-white2/100 p-1 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
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
                              Last sale: 1000 WETH
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 h-[2.8rem] w-60 translate-y-full bg-p1-darkgreen/100 text-center text-p2-white2 shadow-xs shadow-p1-green transition-transform duration-500 ease-in-out group-hover:translate-y-0 hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen">
                            <div
                              className="inline-flex h-[2.8rem] w-60 justify-center text-sm"
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
                                href="#"
                                className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <Image
                                  className="inline-block size-6 bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
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
                      <div className="group relative h-[21.5rem] w-60 place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-xs hover:shadow-lg hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                            <Link
                              href="#"
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
                              className="size-60 object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p2-white2/100 p-1 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
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
                              Last sale: 1000 WETH
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 h-[2.8rem] w-60 translate-y-full bg-p1-darkgreen/100 text-center text-p2-white2 shadow-xs shadow-p1-green transition-transform duration-500 ease-in-out group-hover:translate-y-0 hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen">
                            <div
                              className="inline-flex h-[2.8rem] w-60 justify-center text-sm"
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
                                href="#"
                                className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <Image
                                  className="inline-block size-6 bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
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
                      <div className="group relative h-[21.5rem] w-60 place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-xs hover:shadow-lg hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                        <div>
                          <path
                            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                            fill="white"
                          ></path>

                          <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                            <Link
                              href="#"
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
                              className="size-60 object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p2-white2/100 p-1 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
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
                              Last sale: 1000 WETH
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 h-[2.8rem] w-60 translate-y-full bg-p1-darkgreen/100 text-center text-p2-white2 shadow-xs shadow-p1-green transition-transform duration-500 ease-in-out group-hover:translate-y-0 hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen">
                            <div
                              className="inline-flex h-[2.8rem] w-60 justify-center text-sm"
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
                                href="#"
                                className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                <Image
                                  className="inline-block size-6 bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
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
        <div className="w-full rounded-2xl border border-p1-green bg-p1-white text-xl text-p1-darkgreen shadow-lg dark:bg-p1-deepdarkgreen">
          <details className="m-2" open>
            <summary className="relative flex cursor-pointer justify-start py-2">
              <div className="px-2">
                <Image
                  className="size-10 transition-all duration-300 ease-in-out hover:scale-125"
                  width={480}
                  height={480}
                  src="/icon/more.png"
                  alt="ph"
                />
              </div>
              <div className="place-content-center px-4 text-p1-darkgreen dark:text-p1-green">
                More Collections By GAA
              </div>
            </summary>
            <div className="pt-1 pl-4 text-p1-darkgreen dark:text-p1-green">
              {/* Карусель Карточки коллекции*/}
              <div className="w-full snap-x space-x-6 place-self-center overflow-x-auto rounded-3xl bg-p1-white/0 p-4 dark:bg-p1-green/0">
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
                    <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100/50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen/80 dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                            <h2 className="text-xl font-bold text-p1-darkgreen xl:text-2xl dark:text-p1-cyan">
                              RaceLads
                            </h2>
                            <p className="text-p1-darkgreen dark:text-p1-cyan"></p>
                            <p className="text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="w-full place-content-end rounded-md border border-p1-cyan bg-p1-green py-2 text-white hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-lg dark:hover:shadow-p1-darkgreen">
                              Explore Collection
                            </button>
                          </div>
                        </div>
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
                                width={50}
                                height={50}
                                src="/Logo/eth.png"
                                alt="eth"
                              />
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
                    <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100/50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen/80 dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                            <h2 className="text-xl font-bold text-p1-darkgreen xl:text-2xl dark:text-p1-cyan">
                              Drivers
                            </h2>
                            <p className="text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="w-full place-content-end rounded-md border border-p1-cyan bg-p1-green py-2 text-white hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-lg dark:hover:shadow-p1-darkgreen">
                              Explore Collection
                            </button>
                          </div>
                        </div>
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
                                width={50}
                                height={50}
                                src="/Logo/eth.png"
                                alt="eth"
                              />
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
                    <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100/50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen/80 dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                            <h2 className="text-xl font-bold text-p1-darkgreen xl:text-2xl dark:text-p1-cyan">
                              Team&apos;s Members
                            </h2>

                            <p className="text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="w-full place-content-end rounded-md border border-p1-cyan bg-p1-green py-2 text-white hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-lg dark:hover:shadow-p1-darkgreen">
                              Explore Collection
                            </button>
                          </div>
                        </div>
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
                                width={50}
                                height={50}
                                src="/Logo/eth.png"
                                alt="eth"
                              />
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
                    <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100/50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen/80 dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                            <h2 className="text-xl font-bold text-p1-darkgreen xl:text-2xl dark:text-p1-cyan">
                              Collectors
                            </h2>
                            <p className="text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="w-full place-content-end rounded-md border border-p1-cyan bg-p1-green py-2 text-white hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-lg dark:hover:shadow-p1-darkgreen">
                              Explore Collection
                            </button>
                          </div>
                        </div>
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
                                width={50}
                                height={50}
                                src="/Logo/eth.png"
                                alt="eth"
                              />
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
                    <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100/50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen/80 dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                            <h2 className="text-xl font-bold text-p1-darkgreen xl:text-2xl dark:text-p1-cyan">
                              Cars
                            </h2>
                            <p className="text-p1-darkgreen dark:text-p1-cyan"></p>
                            <p className="text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="w-full place-content-end rounded-md border border-p1-cyan bg-p1-green py-2 text-white hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-lg dark:hover:shadow-p1-darkgreen">
                              Explore Collection
                            </button>
                          </div>
                        </div>
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
                                width={50}
                                height={50}
                                src="/Logo/eth.png"
                                alt="eth"
                              />
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
                    <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100/50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen/80 dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                            <h2 className="text-xl font-bold text-p1-darkgreen xl:text-2xl dark:text-p1-cyan">
                              Custom Lads
                            </h2>
                            <p className="text-p1-darkgreen dark:text-p1-cyan"></p>
                            <p className="text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="w-full place-content-end rounded-md border border-p1-cyan bg-p1-green py-2 text-white hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-lg dark:hover:shadow-p1-darkgreen">
                              Explore Collection
                            </button>
                          </div>
                        </div>
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
                                width={50}
                                height={50}
                                src="/Logo/eth.png"
                                alt="eth"
                              />
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
                    <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100/50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen/80 dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                            <h2 className="text-xl font-bold text-p1-darkgreen xl:text-2xl dark:text-p1-cyan">
                              Awards
                            </h2>
                            <p className="text-p1-darkgreen dark:text-p1-cyan"></p>
                            <p className="text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="w-full place-content-end rounded-md border border-p1-cyan bg-p1-green py-2 text-white hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-lg dark:hover:shadow-p1-darkgreen">
                              Explore Collection
                            </button>
                          </div>
                        </div>
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
                                width={50}
                                height={50}
                                src="/Logo/eth.png"
                                alt="eth"
                              />
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
                    <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100/50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen/80 dark:text-p1-green dark:group-hover:border-p1-cyan dark:hover:border-p1-cyan dark:hover:text-p1-cyan">
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
                            <h2 className="text-xl font-bold text-p1-darkgreen xl:text-2xl dark:text-p1-cyan">
                              Licenses
                            </h2>
                            <p className="text-p1-darkgreen dark:text-p1-cyan"></p>
                            <p className="text-p1-darkgreen dark:text-p1-cyan"></p>
                            <button className="w-full place-content-end rounded-md border border-p1-cyan bg-p1-green py-2 text-white hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:shadow-lg dark:hover:shadow-p1-darkgreen">
                              Explore Collection
                            </button>
                          </div>
                        </div>
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
                                width={50}
                                height={50}
                                src="/Logo/eth.png"
                                alt="eth"
                              />
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
