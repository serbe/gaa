'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Autoplay, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { JumpButton } from '@/components/jumpButton';
import { useWindowDimensions } from '@/utils/hooks';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

export default function Home() {
  const [check, setCheck] = useState(false);
  const jumpPoints = ['1', '2', '3'];
  const { width } = useWindowDimensions();
  const cardWidth = 288;

  return (
    <div className="mx-auto w-full font-serif">
      <JumpButton points={jumpPoints} />

      <div id="1"></div>
      <div className="h-1/6 bg-[url('/background/bgsky.png')] bg-cover bg-center p-2 dark:brightness-75">
        <div className="flex justify-center space-x-2"></div>
        <div className="grid grid-cols-2 justify-center p-1 md:justify-between">
          <div className="flex justify-start space-x-6"></div>

          {/* кошелек, профиль, корзина */}
          <div className="flex justify-end space-x-6 px-2 md:px-10">
            <div>
              <Link href={'#'} className="mx-auto justify-center">
                <Image
                  className="h-10 w-10 rounded-sm p-1 ring-p1-green transition-all delay-75 duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:ring-2 hover:ring-p1-cyan dark:ring-p1-darkgreen"
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
                  className="h-10 w-10 rounded-full p-1 ring-2 ring-p1-gray transition-all delay-75 duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen"
                  width={480}
                  height={480}
                  src="/Logo/user.png"
                  alt="Bordered avatar"
                />

                <div className="invisible absolute left-1/2 z-10 mt-2 w-40 -translate-x-1/2 transform rounded-xl bg-p1-cyan bg-opacity-80 bg-center p-4 text-gray-800 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:visible group-hover:opacity-100 md:w-52">
                  <div className="rounded-lg p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen md:px-3">
                    <Link href={'/profile'} className="mx-auto justify-center">
                      Profile
                    </Link>
                  </div>
                  <div className="rounded-lg p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen md:px-3">
                    <Link href={'/dashboard'} className="mx-auto justify-center">
                      Dashboard
                    </Link>
                  </div>
                  <div className="rounded-lg p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen md:px-3">
                    <Link href={'/marketplace'} className="mx-auto justify-center">
                      Marketplace
                    </Link>
                  </div>
                  <div className="rounded-lg p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen md:px-3">
                    <Link href={'/user'} className="mx-auto justify-center">
                      My NFT{' '}
                    </Link>
                  </div>

                  <div className="rounded-lg p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen md:px-3">
                    <Link href={'#'} className="mx-auto justify-center">
                      Watchlist
                    </Link>
                  </div>

                  <div className="rounded-lg p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen md:px-3">
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
                  className="h-10 w-10 rounded-sm p-1 ring-p1-green transition-all delay-75 duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50"
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
        <div className="">
          <div className="mx-auto flex w-72 overflow-hidden rounded-xl border-p1-green bg-p2-white2 bg-opacity-50 px-4 py-3 backdrop-blur-lg md:-my-10 lg:w-80 xl:w-96">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="mr-3 rotate-90 fill-gray-600"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
            <input
              type="email"
              placeholder="Search Something..."
              className="w-full bg-transparent text-xl text-gray-600 outline-none"
            />
          </div>
        </div>
        <div className="pb-6"> </div>

        {/* Слайдер коллекции 1 */}
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
                      <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Floor Price</p>
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
                      <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Total Volume</p>
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
                      <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Floor Price</p>
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
                      <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Total Volume</p>
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
                      <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Floor Price</p>
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
                      <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Total Volume</p>
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
                      <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Floor Price</p>
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
                      <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Total Volume</p>
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
                      <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Floor Price</p>
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
                      <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Total Volume</p>
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
                      <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Floor Price</p>
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
                      <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Total Volume</p>
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
                      <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Floor Price</p>
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
                      <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Total Volume</p>
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
                      <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Floor Price</p>
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
                      <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Total Volume</p>
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

        <div className="grid h-80 grid-cols-1 place-items-start p-1 md:grid-cols-1 xl:grid-cols-2">
          <div className="flex grid-flow-row auto-rows-max space-x-2 px-2 md:px-10">
            <Link href={'#'} className="mx-auto w-80">
              <Image
                className="rounded-3xl dark:ring-p1-darkgreen"
                width={1000}
                height={1000}
                src="/HeroNFT/RaceLads/RaceLads1.png"
                alt="Bordered avatar"
              />
            </Link>
          </div>
        </div>
        <div className="grid h-1/5 grid-cols-1 p-1 md:grid-cols-2">
          <div className="flex grid-flow-row auto-rows-max justify-start space-x-2">
            <div>
              <div>
                <p className="text-3xl font-semibold md:px-10">RaceLads</p>
                <p className="font-thing text-2xl md:px-10">Polygon zkEVM </p>
                <p className="font-thing text-2xl md:px-10">Designed by GAA </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid h-1/5 grid-cols-1 p-1 2xl:grid-cols-2">
          <div className="flex grid-flow-row auto-rows-max justify-start space-x-2 pt-2 md:space-x-2">
            <div>
              <p className="font-thing pt-1 text-xl md:px-10 md:text-2xl">Items: 10.000 </p>
            </div>
            <p className="font-thing pt-1 text-xl md:px-2 md:text-2xl">Created: Feb 2025 </p>

            <p className="font-thing pt-1 text-xl md:px-2 md:text-2xl">Creator earnings: 7.5%</p>
            <p className="font-thing pt-1 text-xl md:px-2 md:text-2xl">Chain: Ethereum</p>
          </div>

          <div className="flex grid-flow-row auto-rows-max justify-end space-x-4 pb-4 pt-2 md:space-x-8">
            <div>
              <p className="text-xs font-semibold sm:text-sm md:text-2xl">9 ETH</p>
              <p>Total volume</p>
            </div>
            <div>
              <p className="text-xs font-semibold sm:text-sm md:text-2xl">0,013 ETH</p>
              <p>Floor price</p>
            </div>
            <div>
              <p className="text-xs font-semibold sm:text-sm md:text-2xl">0,009 WETH</p>
              <p>Best offer</p>
            </div>
            <div>
              <p className="text-xs font-semibold sm:text-sm md:text-2xl">29%</p>
              <p>Listed</p>
            </div>
            <div>
              <p className="text-xs font-semibold sm:text-sm md:text-2xl">3 690 (85%)</p>
              <p>Owners (Unique)</p>
            </div>
          </div>
        </div>
      </div>

      <div id="2"></div>
      <div className="flex justify-center space-x-2 pt-2">
        <div>
          <div className="mx-auto flex max-w-2xl overflow-hidden rounded-2xl border-2 border-p1-green bg-p2-white2 px-4 py-3 backdrop-blur-sm hover:border-p1-cyan focus:border-p1-cyan md:w-96 dark:bg-p1-darkgreen dark:text-p1-cyan">
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
              placeholder="Search Elementals..."
              className="w-full bg-transparent text-xl text-p1-deepdarkgreen outline-none dark:text-p1-cyan"
            />
          </div>
        </div>
      </div>
      {/* Items, Offers ... */}

      <div className="grid h-1/5 grid-cols-1 place-content-center p-1 text-sm sm:px-2 md:px-4 lg:grid-cols-2 lg:px-6 lg:text-base xl:px-2 xl:text-lg 2xl:-mt-16 2xl:px-10 2xl:text-xl">
        <div className="flex grid-flow-row auto-rows-max justify-center space-x-2 lg:justify-start">
          <div>
            <div
              className="inline-flex w-full justify-center rounded-md pt-1 shadow-sm"
              role="group"
            >
              <Link
                href="#"
                className="inline-block w-full place-content-center rounded-l-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                Items
              </Link>
              <Link
                href="#"
                className="inline-block w-full place-content-center border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                Offers
              </Link>
              <Link
                href="#"
                className="inline-block w-full place-content-center border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                Analitics
              </Link>

              <Link
                href="#"
                className="inline-block w-full place-content-center border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                Activity
              </Link>

              <form className="inline-block w-full place-content-center rounded-r-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-darkgreen focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan">
                <label htmlFor="price" className="block w-full"></label>
                <select
                  id="price"
                  className="mx-auto flex max-w-2xl overflow-hidden border-p1-darkgreen bg-opacity-50 dark:bg-p1-deepdarkgreen dark:text-p1-green dark:accent-p1-darkgreen dark:hover:text-p1-cyan"
                  defaultValue={'DEFAULT'}
                >
                  <option value="DEFAULT" disabled>
                    Price low to high
                  </option>
                  <option value="Price_low_to_high">Price low to high</option>
                  <option value="Price_high_to_low">Price high to low</option>
                  <option value="Recently_listedr">Recently listed</option>
                  <option value="Best_offer">Best offer</option>
                  <option value="Highest_last_sale">Highest last sale</option>
                  <option value="Recently_sold">Recently sold</option>

                  <option value="Most_viewed">Most viewed</option>

                  <option value="Most_favorited">Most favorited</option>
                  <option value="Ending_soon">Ending soon</option>
                </select>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-auto grid-flow-row auto-rows-max justify-center space-x-8 lg:justify-end">
          <div className="">
            <div
              className="inline-flex w-full flex-auto justify-center rounded-md pt-1 shadow-sm"
              role="group"
            >
              <Link
                href="#"
                className="inline-block w-max place-content-center rounded-l-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                All
              </Link>
              <Link
                href="#"
                className="inline-block w-max place-content-center border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                Listed
              </Link>
              <Link
                href="#"
                className="inline-block w-max place-content-center border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                On Auction
              </Link>

              <Link
                href="#"
                className="inline-block w-max place-content-center rounded-r-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                Has Offers
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* иконки ... */}

      <div className="pb-4"></div>
      <div className="grid grid-cols-2 justify-between p-1 md:grid-cols-2 2xl:grid-cols-2">
        <div className="flex justify-start space-x-1 md:px-10">
          <div>
            <Link href={'#'} className="mx-auto justify-start">
              <Image
                className="h-10 w-10 rounded-sm p-1 ring-p1-gray transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:brightness-50 dark:hover:bg-p1-green"
                width={480}
                height={480}
                src="/icon/2.png"
                alt="bt2"
              />
            </Link>
          </div>
          <span className="relative flex h-3 w-3 pt-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-p1-green opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-p1-green"></span>
          </span>
          <div className="place-content-center text-sm text-p1-darkgreen md:text-xl dark:text-p1-green">
            Live
          </div>
          <div className="flex grid-flow-row auto-rows-max justify-start space-x-2"></div>
          <div>
            <Link
              href="#"
              className="place-content-center text-sm text-p1-darkgreen md:text-xl dark:text-p1-green"
            >
              100 results{' '}
            </Link>
          </div>
        </div>

        <div className="flex justify-end md:px-10">
          <div className="inline-flex w-full justify-end rounded-md" role="group">
            <div className="w-10">
              <Link href={'#'} className="mx-auto justify-center">
                <Image
                  className="h-10 w-10 rounded-sm p-1 ring-p1-gray transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:brightness-50 dark:hover:bg-p1-green"
                  width={480}
                  height={480}
                  src="/icon/line.png"
                  alt="line"
                />
              </Link>
            </div>
            <div className="w-10">
              <Link href={'#'} className="mx-auto justify-center">
                <Image
                  className="h-10 w-10 rounded-sm p-1 ring-p1-gray transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:brightness-50 dark:hover:bg-p1-green"
                  width={480}
                  height={480}
                  src="/icon/16.png"
                  alt="bt16"
                />
              </Link>
            </div>
            <div className="w-10">
              <Link href={'#'} className="mx-auto justify-center">
                <Image
                  className="h-10 w-10 rounded-sm p-1 ring-p1-gray transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:brightness-50 dark:hover:bg-p1-green"
                  width={480}
                  height={480}
                  src="/icon/9.png"
                  alt="bt9"
                />
              </Link>
            </div>
            <div className="w-10">
              <Link href={'#'} className="mx-auto justify-center">
                <Image
                  className="h-10 w-10 rounded-sm p-1 ring-p1-gray transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:brightness-50 dark:hover:bg-p1-green"
                  width={480}
                  height={480}
                  src="/icon/4.png"
                  alt="bt4"
                />
              </Link>
            </div>
            <div className="w-10">
              <Link href={'#'} className="mx-auto justify-center">
                <Image
                  className="h-10 w-10 rounded-sm p-1 ring-p1-gray transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:brightness-50 dark:hover:bg-p1-green"
                  width={480}
                  height={480}
                  src="/icon/3.png"
                  alt="bt3"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-10"> </div>

      {/* ... карточка 1 ...15x10 */}

      <div className="group relative h-[14.5rem] w-[10rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
        <div>
          <path
            d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
            fill="white"
          ></path>

          <div className="group invisible absolute right-1 top-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
            <Link
              href={'#'}
              className="z-50 grid w-6 place-content-center transition-all delay-75 duration-300 ease-in-out hover:scale-125"
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
              className="h-[10rem] w-[10rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
            />
          </Link>
        </div>

        <div className="w-full bg-p2-white2 bg-opacity-100 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:bg-opacity-100 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
          <div className="flex items-center justify-between">
            <div className="px-1 pt-1 text-left text-sm font-bold">RaceLad</div>
            <div className="px-1 pt-1 text-left text-sm font-bold"># 8888</div>
          </div>

          <div className="px-1 pb-12 pt-1">
            <div className="flex items-center justify-between">
              <div className="text-center">
                <p className="text-center text-xs">
                  Price:
                  <Image
                    className="relative inline-block w-4 space-x-4 px-1"
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
            <div className="space-x-4 text-left text-xs font-thin"> Last sale: 1000 WETH</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="absolute bottom-0 left-0 h-[2rem] w-[10rem] translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-p2-white2 shadow-sm shadow-p1-green transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p1-deepdarkgreen">
            <div className="inline-flex h-[2rem] w-[10rem] justify-center text-sm" role="group">
              <Link
                href="#"
                className="grid w-4/5 place-content-center rounded-bl-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-sm shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                <div className="grid grid-cols-2 items-center justify-between gap-2">
                  <div className="leading-2 text-xs">Buy:</div>
                  <div className="text-center text-xs leading-3">
                    <Image
                      className="relative inline-block w-3 px-0.5"
                      layout="intrinsic"
                      width={50}
                      height={50}
                      src="/Logo/eth1.png"
                      alt="eth"
                    />
                    0.001
                  </div>
                </div>
              </Link>

              <Link
                href={'#'}
                className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                <Image
                  className="bg-p1-darkgreenе inline-block h-5 w-5 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
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

      <div className="pb-10"> </div>

      {/* ...карточка 2 ...21.5x15 */}
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
            <div className="text-left text-base font-thin"> Last sale: 1000 WETH</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="absolute bottom-0 left-0 h-[2.8rem] w-[15rem] translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-p2-white2 shadow-sm shadow-p1-green transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p1-deepdarkgreen">
            <div className="inline-flex h-[2.8rem] w-[15rem] justify-center text-sm" role="group">
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

      <div className="pb-10"> </div>

      {/* ...карточка 3 ...28x20 */}
      <div className="group relative h-[28rem] w-[20rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
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
              className="h-[20rem] w-[20rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
            />
          </Link>
        </div>

        <div className="w-full bg-p2-white2 bg-opacity-100 p-1 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:bg-opacity-100 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
          <div className="flex items-center justify-between">
            <div className="px-4 text-left text-xl font-bold">RaceLad</div>
            <div className="px-4 text-left text-xl font-bold"># 3333</div>
          </div>

          <div className="px-4 pb-12 pt-4">
            <div className="flex items-center justify-between">
              <div className="text-center">
                <p className="text-center text-lg">
                  Price:
                  <Image
                    className="relative inline-block w-6 px-1"
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
            <div className="text-left text-lg font-thin"> Last sale: 1000 WETH</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-p2-white2 shadow-sm shadow-p1-green transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p1-deepdarkgreen">
            <div className="inline-flex h-[3rem] w-[20rem] justify-center text-sm" role="group">
              <Link
                href="#"
                className="grid w-4/5 place-content-center rounded-bl-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-base shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                <div className="flex items-center justify-between space-x-4">
                  <div className="text-xl leading-5">Buy:</div>
                  <p className="text-center text-lg leading-3">
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
                  className="bg-p1-darkgreenе inline-block h-7 w-7 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
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

      <div className="pb-10"> </div>

      {/* ...карточка 4...39x28 */}
      <div className="group relative h-[39rem] w-[28rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
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
              src="/HeroNFT/RaceLads/RaceLads1.png"
              alt="RaceLads"
              className="h-[28rem] w-[28rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
            />
          </Link>
        </div>

        <div className="w-full bg-p2-white2 bg-opacity-100 p-1 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:bg-opacity-100 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
          <div className="flex items-center justify-between">
            <div className="px-4 pt-2 text-left text-3xl font-bold">RaceLad</div>
            <div className="px-4 pt-2 text-left text-3xl font-bold"># 8888</div>
          </div>

          <div className="px-4 pb-12 pt-6">
            <div className="flex items-center justify-between">
              <div className="text-center">
                <p className="text-center text-3xl">
                  Price:
                  <Image
                    className="relative inline-block w-7 px-1"
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
            <div className="pt-3 text-left text-xl font-thin"> Last sale: 1000 WETH</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-p2-white2 shadow-sm shadow-p1-green transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p1-deepdarkgreen">
            <div className="inline-flex h-[4rem] w-[28rem] justify-center text-sm" role="group">
              <Link
                href="#"
                className="grid w-4/5 place-content-center rounded-bl-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-base shadow-xl shadow-p1-cyan transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                <div className="flex items-center justify-between space-x-4 pb-2">
                  <div className="text-2xl">Buy:</div>
                  <p className="text-center text-xl">
                    <Image
                      className="relative inline-block w-6 px-1"
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
                  className="bg-p1-darkgreenе inline-block h-9 w-9 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
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

      <div className="pb-10"> </div>

      {/* Таблица 1*/}

      <div className="place-self-center p-1">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-xl text-p1-darkgreen dark:text-p1-green">
            <thead className="bg-gray-50 text-xs uppercase text-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Add to cart
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Item
                    <Link href="#">
                      <svg
                        className="ms-1.5 h-3 w-3"
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
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Collection
                    <Link href="#">
                      <svg
                        className="ms-1.5 h-3 w-3"
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
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Name
                    <Link href="#">
                      <svg
                        className="ms-1.5 h-3 w-3"
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
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Number #
                    <Link href="#">
                      <svg
                        className="ms-1.5 h-3 w-3"
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
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Current Price
                    <Link href="#">
                      <svg
                        className="ms-1.5 h-3 w-3"
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

                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Best Offer
                    <Link href="#">
                      <svg
                        className="ms-1.5 h-3 w-3"
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
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Last Sale
                    <Link href="#">
                      <svg
                        className="ms-1.5 h-3 w-3"
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
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Rarity
                    <Link href="#">
                      <svg
                        className="ms-1.5 h-3 w-3"
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
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Owner
                    <Link href="#">
                      <svg
                        className="ms-1.5 h-3 w-3"
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
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Time Listed
                    <Link href="#">
                      <svg
                        className="ms-1.5 h-3 w-3"
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
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Make Offer
                    <Link href="#">
                      <svg
                        className="ms-1.5 h-3 w-3"
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
            <tbody>
              <tr className="border-b bg-white dark:border-p1-green dark:bg-p1-deepdarkgreen">
                <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium">
                  <div className="flex items-center">
                    <input
                      checked={check}
                      id="checkbox"
                      onChange={() => setCheck(!check)}
                      type="checkbox"
                      value=""
                      className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                    />
                    <label
                      htmlFor="checkbox "
                      className="ms-2 text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                    ></label>
                  </div>
                </th>
                <td className="px-6 py-4">
                  {' '}
                  <div className="relative">
                    <Link href="/card" className="mx-auto justify-center">
                      <Image
                        width={500}
                        height={500}
                        src="/HeroNFT/RaceLads/RaceLads1.png"
                        alt="RaceLads"
                        className="h-[8rem] w-[8rem] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                      />
                    </Link>
                  </div>
                </td>
                <td className="px-6 py-4">RaceLads</td>
                <td className="px-6 py-4">3 ETH</td>
                <td className="px-6 py-4 text-right"> 8888</td>
                <td className="px-6 py-4 text-right"> 15 ETH</td>
                <td className="px-6 py-4 text-right"> 0.25 ETH</td>
                <td className="px-6 py-4 text-right"> 0.15 ETH</td>
                <td className="px-6 py-4 text-right"> #77</td>
                <td className="px-6 py-4 text-right"> Jon </td>
                <td className="px-6 py-4 text-right"> 2h ago</td>
                <td className="px-6 py-4 text-right"> Сделать предложение</td>
              </tr>
              <tr className="border-b bg-white dark:border-p1-green dark:bg-p1-deepdarkgreen">
                <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium">
                  <div className="flex items-center">
                    <input
                      checked={check}
                      id="checkbox"
                      onChange={() => setCheck(!check)}
                      type="checkbox"
                      value=""
                      className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                    />
                    <label
                      htmlFor="checkbox "
                      className="ms-2 text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                    ></label>
                  </div>
                </th>
                <td className="px-6 py-4">
                  {' '}
                  <div className="relative">
                    <Link href="/card" className="mx-auto justify-center">
                      <Image
                        width={500}
                        height={500}
                        src="/HeroNFT/Drivers/Driver4.png"
                        alt="Drivers"
                        className="h-[8rem] w-[8rem] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                      />
                    </Link>
                  </div>
                </td>
                <td className="px-6 py-4">RaceLads</td>
                <td className="px-6 py-4">3 ETH</td>
                <td className="px-6 py-4 text-right"> 8888</td>
                <td className="px-6 py-4 text-right"> 15 ETH</td>
                <td className="px-6 py-4 text-right"> 0.25 ETH</td>
                <td className="px-6 py-4 text-right"> 0.15 ETH</td>
                <td className="px-6 py-4 text-right"> #88</td>
                <td className="px-6 py-4 text-right"> Tsar </td>
                <td className="px-6 py-4 text-right"> 2h ago</td>
                <td className="px-6 py-4 text-right"> Сделать предложение</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="pb-10"> </div>

      {/* Таблица 2*/}
      <div className="justify-center place-self-center p-1 md:visible">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-xl text-p1-darkgreen dark:text-p1-green">
            <thead className="bg-gray-50 text-xs uppercase text-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Rank
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Image Collection
                    <Link href="#">
                      <svg
                        className="ms-1.5 h-3 w-3"
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
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Collection
                    <Link href="#">
                      <svg
                        className="ms-1.5 h-3 w-3"
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
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Floor price
                    <Link href="#">
                      <svg
                        className="ms-1.5 h-3 w-3"
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
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Volume
                    <Link href="#">
                      <svg
                        className="ms-1.5 h-3 w-3"
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
            <tbody>
              <tr className="border-b bg-white dark:border-p1-green dark:bg-p1-deepdarkgreen">
                <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium">
                  1
                </th>
                <td className="px-6 py-4">
                  {' '}
                  <div className="relative">
                    <Link href="/card" className="mx-auto justify-center">
                      <Image
                        width={500}
                        height={500}
                        src="/HeroNFT/RaceLads/RaceLads1.png"
                        alt="RaceLads"
                        className="h-[8rem] w-[8rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                      />
                    </Link>
                  </div>
                </td>
                <td className="px-6 py-4">RaceLads</td>
                <td className="px-6 py-4">3 ETH</td>
                <td className="px-6 py-4 text-right"> 125 ETH</td>
              </tr>
              <tr className="border-b bg-white dark:border-p1-green dark:bg-p1-deepdarkgreen">
                <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium">
                  2
                </th>
                <td className="px-6 py-4">
                  {' '}
                  <div className="relative">
                    <Link href="/card" className="mx-auto justify-center">
                      <Image
                        width={500}
                        height={500}
                        src="/HeroNFT/Drivers/Driver4.png"
                        alt="Drivers"
                        className="h-[8rem] w-[8rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                      />
                    </Link>
                  </div>
                </td>
                <td className="px-6 py-4">Drivers</td>
                <td className="px-6 py-4">3 ETH</td>
                <td className="px-6 py-4 text-right"> 125 ETH</td>
              </tr>
              <tr className="border-b bg-white dark:border-p1-green dark:bg-p1-deepdarkgreen">
                <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium">
                  2
                </th>
                <td className="px-6 py-4">
                  {' '}
                  <div className="relative">
                    <Link href="/card" className="mx-auto justify-center">
                      <Image
                        width={500}
                        height={500}
                        src="/HeroNFT/Drivers/Driver4.png"
                        alt="Drivers"
                        className="h-[8rem] w-[8rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                      />
                    </Link>
                  </div>
                </td>
                <td className="px-6 py-4">Drivers</td>
                <td className="px-6 py-4">3 ETH</td>
                <td className="px-6 py-4 text-right"> 125 ETH</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Items */}

      <section className="mx-auto px-6 py-12">
        <h2 className="mb-6 text-2xl font-bold text-p1-darkgreen dark:text-p1-green">Items</h2>
      </section>

      <div className="pb-20"></div>

      <section className="relative h-[450px] bg-cover bg-center pt-8">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold">RaceLads Elementals</h1>
          <p className="mb-6 max-w-2xl text-lg">
            Discover the magic of RaceLads Elementals, a collection that blends art and creativity.
          </p>
          <button className="rounded-md bg-blue-600 px-6 py-3 text-lg text-white hover:bg-blue-700">
            Explore Collection
          </button>
        </div>
      </section>
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
          <div>
            <p className="text-sm text-gray-500">Floor Price</p>
            <p className="text-2xl font-semibold text-gray-800">Ξ 1.2</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Volume</p>
            <p className="text-2xl font-semibold text-gray-800">Ξ 25K</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Items</p>
            <p className="text-2xl font-semibold text-gray-800">10,000</p>
          </div>
        </div>
      </section>

      {/* Коллекции */}

      <div className="px-6 pt-2 text-left text-3xl font-semibold text-p1-darkgreen dark:text-p1-green">
        Коллекции
      </div>
      <div className="flex flex-row space-x-4 overflow-x-auto px-4">
        <div className="mx-auto mt-8 w-max space-x-4 rounded-lg bg-gray-100 p-6 shadow-md">
          <div className="flex w-full items-center space-x-4">
            <Image
              width={480}
              height={480}
              src="/HeroNFT/RaceLads/RaceLads1.png"
              alt="RaceLad"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-100"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">RaceLads Elementals</h2>
              <p className="text-gray-600">
                Discover the magic of RaceLads Elementals, blending art and creativity in a stunning
                NFT collection.
              </p>
            </div>
          </div>
          <div className="mt-4 flex w-max items-center justify-between space-x-6">
            <div>
              <p className="text-sm text-gray-500">Floor Price</p>
              <p className="text-lg font-semibold text-gray-800">Ξ 1.2</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Volume</p>
              <p className="text-lg font-semibold text-gray-800">Ξ 25K</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Items</p>
              <p className="text-lg font-semibold text-gray-800">10,000</p>
            </div>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Explore Collection
            </button>
          </div>
        </div>
        <div className="mx-auto mt-8 w-max space-x-4 rounded-lg bg-gray-100 p-6 shadow-md">
          <div className="flex w-full items-center space-x-4">
            <Image
              width={480}
              height={480}
              src="/HeroNFT/Drivers/Driver4.png"
              alt="Driver4"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-100"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Drivers Elementals</h2>
              <p className="text-gray-600">
                Discover the magic of RaceLads Elementals, blending art and creativity in a stunning
                NFT collection.
              </p>
            </div>
          </div>
          <div className="mt-4 flex w-max items-center justify-between space-x-6">
            <div>
              <p className="text-sm text-gray-500">Floor Price</p>
              <p className="text-lg font-semibold text-gray-800">Ξ 1.2</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Volume</p>
              <p className="text-lg font-semibold text-gray-800">Ξ 25K</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Items</p>
              <p className="text-lg font-semibold text-gray-800">10,000</p>
            </div>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Explore Collection
            </button>
          </div>
        </div>
        <div className="mx-auto mt-8 w-max space-x-4 rounded-lg bg-gray-100 p-6 shadow-md">
          <div className="flex w-full items-center space-x-4">
            <Image
              width={480}
              height={480}
              src="/HeroNFT/Collectors/Collector1.png"
              alt="Collector1"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-100"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Collectors Elementals</h2>
              <p className="text-gray-600">
                Discover the magic of RaceLads Elementals, blending art and creativity in a stunning
                NFT collection.
              </p>
            </div>
          </div>
          <div className="mt-4 flex w-max items-center justify-between space-x-6">
            <div>
              <p className="text-sm text-gray-500">Floor Price</p>
              <p className="text-lg font-semibold text-gray-800">Ξ 1.2</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Volume</p>
              <p className="text-lg font-semibold text-gray-800">Ξ 25K</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Items</p>
              <p className="text-lg font-semibold text-gray-800">10,000</p>
            </div>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Explore Collection
            </button>
          </div>
        </div>
        <div className="mx-auto mt-8 w-max space-x-4 rounded-lg bg-gray-100 p-6 shadow-md">
          <div className="flex w-full items-center space-x-4">
            <Image
              width={480}
              height={480}
              src="/Cars/Car.png"
              alt="Car"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-100"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Cars Elementals</h2>
              <p className="text-gray-600">
                Discover the magic of RaceLads Elementals, blending art and creativity in a stunning
                NFT collection.
              </p>
            </div>
          </div>
          <div className="mt-4 flex w-max items-center justify-between space-x-6">
            <div>
              <p className="text-sm text-gray-500">Floor Price</p>
              <p className="text-lg font-semibold text-gray-800">Ξ 1.2</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Volume</p>
              <p className="text-lg font-semibold text-gray-800">Ξ 25K</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Items</p>
              <p className="text-lg font-semibold text-gray-800">10,000</p>
            </div>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Explore Collection
            </button>
          </div>
        </div>
        <div className="mx-auto mt-8 w-max space-x-4 rounded-lg bg-gray-100 p-6 shadow-md">
          <div className="flex w-full items-center space-x-4">
            <Image
              width={480}
              height={480}
              src="/HeroNFT/CustomLads/CustomLads1.png"
              alt="CustomLads1"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-100"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">CustomLads Elementals</h2>
              <p className="text-gray-600">
                Discover the magic of RaceLads Elementals, blending art and creativity in a stunning
                NFT collection.
              </p>
            </div>
          </div>
          <div className="mt-4 flex w-max items-center justify-between space-x-6">
            <div>
              <p className="text-sm text-gray-500">Floor Price</p>
              <p className="text-lg font-semibold text-gray-800">Ξ 1.2</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Volume</p>
              <p className="text-lg font-semibold text-gray-800">Ξ 25K</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Items</p>
              <p className="text-lg font-semibold text-gray-800">10,000</p>
            </div>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Explore Collection
            </button>
          </div>
        </div>
        <div className="mx-auto mt-8 w-max space-x-4 rounded-lg bg-gray-100 p-6 shadow-md">
          <div className="flex w-full items-center space-x-4">
            <Image
              width={480}
              height={480}
              src="/Hero/Rewards.png"
              alt="Rewards"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-100"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Awards Elementals</h2>
              <p className="text-gray-600">
                Discover the magic of RaceLads Elementals, blending art and creativity in a stunning
                NFT collection.
              </p>
            </div>
          </div>
          <div className="mt-4 flex w-max items-center justify-between space-x-6">
            <div>
              <p className="text-sm text-gray-500">Floor Price</p>
              <p className="text-lg font-semibold text-gray-800">Ξ 1.2</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Volume</p>
              <p className="text-lg font-semibold text-gray-800">Ξ 25K</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Items</p>
              <p className="text-lg font-semibold text-gray-800">10,000</p>
            </div>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Explore Collection
            </button>
          </div>
        </div>
        <div className="mx-auto mt-8 w-max space-x-4 rounded-lg bg-gray-100 p-6 shadow-md">
          <div className="flex w-full items-center space-x-4">
            <Image
              width={480}
              height={480}
              src="/Licenses/Global Lic.png"
              alt="GlobalLic"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-100"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Licenses Elementals</h2>
              <p className="text-gray-600">
                Discover the magic of RaceLads Elementals, blending art and creativity in a stunning
                NFT collection.
              </p>
            </div>
          </div>
          <div className="mt-4 flex w-max items-center justify-between space-x-6">
            <div>
              <p className="text-sm text-gray-500">Floor Price</p>
              <p className="text-lg font-semibold text-gray-800">Ξ 1.2</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Volume</p>
              <p className="text-lg font-semibold text-gray-800">Ξ 25K</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Items</p>
              <p className="text-lg font-semibold text-gray-800">10,000</p>
            </div>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Explore Collection
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap object-left md:flex-nowrap md:space-x-2 md:pt-5">
        <div className="mb-4 bg-p1-white shadow-lg dark:bg-p1-deepdarkgreen">
          <div className="text-centre flex flex-row">
            <div className="place-content-center p-2 text-center text-p1-darkgreen md:text-xl lg:text-2xl dark:text-p1-cyan">
              <div className="mt-2 rounded-3xl border-2 bg-p2-white2 p-2 text-p1-darkgreen dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
                  <div className="px-2 text-xl font-semibold md:pt-2 md:text-3xl">Статистика</div>
                  <div className="space-x-2 px-2 text-xl font-semibold text-p1-darkgreen md:pt-2 md:text-3xl">
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      24H
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      7D
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      30D
                    </Link>
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
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      24H
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      7D
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      30D
                    </Link>
                  </div>
                </div>
                <div className="font-regular space-x-2 px-2 text-xl text-p1-darkgreen md:pt-2 md:text-3xl">
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Все
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    RaceLads
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Drivers
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Team&apos;s Members
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Collectors
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Cars
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    CustomLads
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Награды
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Лицензии
                  </Link>
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
                    Последние объявления:
                  </div>
                  <div className="space-x-2 px-2 text-xl font-semibold text-p1-darkgreen md:pt-2 md:text-3xl">
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      24H
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      7D
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      30D
                    </Link>
                  </div>
                </div>
                <div className="font-regular space-x-2 px-2 text-xl text-p1-darkgreen md:pt-2 md:text-3xl">
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Все
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    RaceLads
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Drivers
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Team&apos;s Members
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Collectors
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Cars
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    CustomLads
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Награды
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Лицензии
                  </Link>
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
                    Последние продажи:
                  </div>
                </div>
                <div className="font-regular space-x-2 px-2 text-xl text-p1-darkgreen md:pt-2 md:text-3xl">
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Все
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    RaceLads
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Drivers
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Team&apos;s Members
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Collectors
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Cars
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    CustomLads
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Награды
                  </Link>
                  <Link
                    href="#"
                    className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    Лицензии
                  </Link>
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
                  <div className="pt-2 text-left">
                    <p>Личный кабинет пользователя</p>
                    <p>Мои NFT___ Total NFTs:____ GAA_NFTs:_____</p>
                  </div>
                  <div className="font-regular space-x-2 px-2 text-xl text-p1-darkgreen md:pt-2 md:text-3xl">
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Все
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      RaceLads
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Drivers
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Team&apos;s Members
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Collectors
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Cars
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      CustomLads
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Награды
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Лицензии
                    </Link>
                  </div>
                  <div className="pt-2 text-left">RaceLads</div>

                  <section className="mx-auto py-12">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                      <div className="group relative w-full overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-2xl">
                        <div>
                          <button className="absolute left-2 top-2 z-50 rounded-br-lg rounded-tl-lg bg-blue-500 px-3 py-1 text-sm text-white">
                            Rare
                          </button>
                        </div>
                        <div className="relative">
                          <Link
                            href="/card"
                            className="mx-auto justify-center hover:drop-shadow-2xl"
                          >
                            <Image
                              width={480}
                              height={480}
                              src="/HeroNFT/RaceLads/RaceLads1.png"
                              alt="RaceLads"
                              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p1-white bg-opacity-10 p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:bg-opacity-50 dark:bg-p1-green dark:text-p1-white">
                          <div className="flex items-center justify-between">
                            <div className="text-left text-xl font-bold text-gray-800 dark:text-p1-white">
                              RaceLad
                            </div>
                            <div className="text-left text-lg font-bold text-gray-800 dark:text-p1-white">
                              # 8888
                            </div>
                          </div>
                          <p className="mt-1 text-left text-xl text-gray-600 dark:text-p1-white">
                            Total: 10.000
                          </p>
                          <div className="">
                            <div className="mt-2 flex items-center justify-between">
                              <div className="text-center">
                                <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                  Price:
                                  <Image
                                    className="relative mt-1 inline-block w-max"
                                    layout="intrinsic"
                                    width={24}
                                    height={24}
                                    src="/Logo/eth.png"
                                    alt="eth"
                                  />
                                  0.001
                                </p>
                              </div>
                              <div className="text-center">
                                <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                  <Image
                                    className="mt-1 inline-block w-max"
                                    width={18}
                                    height={18}
                                    src="/Logo/usd.png"
                                    alt="usd"
                                  />
                                  25.000
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-xl text-p2-white2 transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0">
                            <div className="inline-flex w-full justify-center" role="group">
                              <Link
                                href="#"
                                className="inline-block w-4/5 place-content-center rounded-bl-xl border-2 border-p1-darkgreen bg-p1-darkgreen text-center text-xl font-semibold text-p1-white shadow-lg transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-2xl hover:text-p1-white focus:border-p1-cyan focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Buy
                              </Link>

                              <Link
                                href={'#'}
                                className="mx-auto w-1/5 justify-center rounded-br-xl border-2 border-p1-green p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-p1-darkgreen hover:bg-opacity-50 focus:scale-90 focus:border-p1-cyan hover:focus:bg-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen dark:hover:focus:bg-p1-deepdarkgreen"
                              >
                                <Image
                                  className="inline-block h-10 w-10 place-content-center bg-p1-darkgreen p-1 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
                                  width={480}
                                  height={480}
                                  src="/Logo/cart_white.png"
                                  alt="Bordered avatar"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group relative w-full overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-2xl">
                        <div>
                          <button className="absolute left-2 top-2 z-50 rounded-br-lg rounded-tl-lg bg-blue-500 px-3 py-1 text-sm text-white">
                            Rare
                          </button>
                        </div>
                        <div className="relative">
                          <Link
                            href="/card"
                            className="mx-auto justify-center hover:drop-shadow-2xl"
                          >
                            <Image
                              width={480}
                              height={480}
                              src="/HeroNFT/RaceLads/RaceLads2.png"
                              alt="RaceLads"
                              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p1-white bg-opacity-10 p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:bg-opacity-50 dark:bg-p1-green dark:text-p1-white">
                          <div className="flex items-center justify-between">
                            <div className="text-left text-xl font-bold text-gray-800 dark:text-p1-white">
                              RaceLad
                            </div>
                            <div className="text-left text-lg font-bold text-gray-800 dark:text-p1-white">
                              # 8888
                            </div>
                          </div>
                          <p className="mt-1 text-left text-xl text-gray-600 dark:text-p1-white">
                            Total: 10.000
                          </p>
                          <div className="">
                            <div className="mt-2 flex items-center justify-between">
                              <div className="text-center">
                                <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                  Price:
                                  <Image
                                    className="relative mt-1 inline-block w-max"
                                    layout="intrinsic"
                                    width={24}
                                    height={24}
                                    src="/Logo/eth.png"
                                    alt="eth"
                                  />
                                  0.001
                                </p>
                              </div>
                              <div className="text-center">
                                <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                  <Image
                                    className="mt-1 inline-block w-max"
                                    width={18}
                                    height={18}
                                    src="/Logo/usd.png"
                                    alt="usd"
                                  />
                                  25.000
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-xl text-p2-white2 transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0">
                            <div className="inline-flex w-full justify-center" role="group">
                              <Link
                                href="#"
                                className="inline-block w-4/5 place-content-center rounded-bl-xl border-2 border-p1-darkgreen bg-p1-darkgreen text-center text-xl font-semibold text-p1-white shadow-lg transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-2xl hover:text-p1-white focus:border-p1-cyan focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Buy
                              </Link>

                              <Link
                                href={'#'}
                                className="mx-auto w-1/5 justify-center rounded-br-xl border-2 border-p1-green p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-p1-darkgreen hover:bg-opacity-50 focus:scale-90 focus:border-p1-cyan hover:focus:bg-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen dark:hover:focus:bg-p1-deepdarkgreen"
                              >
                                <Image
                                  className="inline-block h-10 w-10 place-content-center bg-p1-darkgreen p-1 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
                                  width={480}
                                  height={480}
                                  src="/Logo/cart_white.png"
                                  alt="Bordered avatar"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group relative w-full overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-2xl">
                        <div>
                          <button className="absolute left-2 top-2 z-50 rounded-br-lg rounded-tl-lg bg-blue-500 px-3 py-1 text-sm text-white">
                            Rare
                          </button>
                        </div>
                        <div className="relative">
                          <Link
                            href="/card"
                            className="mx-auto justify-center hover:drop-shadow-2xl"
                          >
                            <Image
                              width={480}
                              height={480}
                              src="/HeroNFT/RaceLads/RaceLads3.png"
                              alt="RaceLads"
                              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p1-white bg-opacity-10 p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:bg-opacity-50 dark:bg-p1-green dark:text-p1-white">
                          <div className="flex items-center justify-between">
                            <div className="text-left text-xl font-bold text-gray-800 dark:text-p1-white">
                              RaceLad
                            </div>
                            <div className="text-left text-lg font-bold text-gray-800 dark:text-p1-white">
                              # 8888
                            </div>
                          </div>
                          <p className="mt-1 text-left text-xl text-gray-600 dark:text-p1-white">
                            Total: 10.000
                          </p>
                          <div className="">
                            <div className="mt-2 flex items-center justify-between">
                              <div className="text-center">
                                <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                  Price:
                                  <Image
                                    className="relative mt-1 inline-block w-max"
                                    layout="intrinsic"
                                    width={24}
                                    height={24}
                                    src="/Logo/eth.png"
                                    alt="eth"
                                  />
                                  0.001
                                </p>
                              </div>
                              <div className="text-center">
                                <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                  <Image
                                    className="mt-1 inline-block w-max"
                                    width={18}
                                    height={18}
                                    src="/Logo/usd.png"
                                    alt="usd"
                                  />
                                  25.000
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-xl text-p2-white2 transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0">
                            <div className="inline-flex w-full justify-center" role="group">
                              <Link
                                href="#"
                                className="inline-block w-4/5 place-content-center rounded-bl-xl border-2 border-p1-darkgreen bg-p1-darkgreen text-center text-xl font-semibold text-p1-white shadow-lg transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-2xl hover:text-p1-white focus:border-p1-cyan focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Buy
                              </Link>

                              <Link
                                href={'#'}
                                className="mx-auto w-1/5 justify-center rounded-br-xl border-2 border-p1-green p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-p1-darkgreen hover:bg-opacity-50 focus:scale-90 focus:border-p1-cyan hover:focus:bg-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen dark:hover:focus:bg-p1-deepdarkgreen"
                              >
                                <Image
                                  className="inline-block h-10 w-10 place-content-center bg-p1-darkgreen p-1 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
                                  width={480}
                                  height={480}
                                  src="/Logo/cart_white.png"
                                  alt="Bordered avatar"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group relative w-full overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-2xl">
                        <div>
                          <button className="absolute left-2 top-2 z-50 rounded-br-lg rounded-tl-lg bg-blue-500 px-3 py-1 text-sm text-white">
                            Rare
                          </button>
                        </div>
                        <div className="relative">
                          <Link
                            href="/card"
                            className="mx-auto justify-center hover:drop-shadow-2xl"
                          >
                            <Image
                              width={480}
                              height={480}
                              src="/HeroNFT/RaceLads/RaceLads4.png"
                              alt="RaceLads"
                              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p1-white bg-opacity-10 p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:bg-opacity-50 dark:bg-p1-green dark:text-p1-white">
                          <div className="flex items-center justify-between">
                            <div className="text-left text-xl font-bold text-gray-800 dark:text-p1-white">
                              RaceLad
                            </div>
                            <div className="text-left text-lg font-bold text-gray-800 dark:text-p1-white">
                              # 8888
                            </div>
                          </div>
                          <p className="mt-1 text-left text-xl text-gray-600 dark:text-p1-white">
                            Total: 10.000
                          </p>
                          <div className="">
                            <div className="mt-2 flex items-center justify-between">
                              <div className="text-center">
                                <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                  Price:
                                  <Image
                                    className="relative mt-1 inline-block w-max"
                                    layout="intrinsic"
                                    width={24}
                                    height={24}
                                    src="/Logo/eth.png"
                                    alt="eth"
                                  />
                                  0.001
                                </p>
                              </div>
                              <div className="text-center">
                                <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                  <Image
                                    className="mt-1 inline-block w-max"
                                    width={18}
                                    height={18}
                                    src="/Logo/usd.png"
                                    alt="usd"
                                  />
                                  25.000
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-xl text-p2-white2 transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0">
                            <div className="inline-flex w-full justify-center" role="group">
                              <Link
                                href="#"
                                className="inline-block w-4/5 place-content-center rounded-bl-xl border-2 border-p1-darkgreen bg-p1-darkgreen text-center text-xl font-semibold text-p1-white shadow-lg transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-2xl hover:text-p1-white focus:border-p1-cyan focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Buy
                              </Link>

                              <Link
                                href={'#'}
                                className="mx-auto w-1/5 justify-center rounded-br-xl border-2 border-p1-green p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-p1-darkgreen hover:bg-opacity-50 focus:scale-90 focus:border-p1-cyan hover:focus:bg-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen dark:hover:focus:bg-p1-deepdarkgreen"
                              >
                                <Image
                                  className="inline-block h-10 w-10 place-content-center bg-p1-darkgreen p-1 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
                                  width={480}
                                  height={480}
                                  src="/Logo/cart_white.png"
                                  alt="Bordered avatar"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group relative w-full overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-2xl">
                        <div>
                          <button className="absolute left-2 top-2 z-50 rounded-br-lg rounded-tl-lg bg-blue-500 px-3 py-1 text-sm text-white">
                            Rare
                          </button>
                        </div>
                        <div className="relative">
                          <Link
                            href="/card"
                            className="mx-auto justify-center hover:drop-shadow-2xl"
                          >
                            <Image
                              width={480}
                              height={480}
                              src="/HeroNFT/Drivers/Driver4.png"
                              alt="Drivers"
                              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p1-white bg-opacity-10 p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:bg-opacity-50 dark:bg-p1-green dark:text-p1-white">
                          <div className="flex items-center justify-between">
                            <div className="text-left text-xl font-bold text-gray-800 dark:text-p1-white">
                              Drivers
                            </div>
                            <div className="text-left text-lg font-bold text-gray-800 dark:text-p1-white">
                              # 8888
                            </div>
                          </div>
                          <p className="mt-1 text-left text-xl text-gray-600 dark:text-p1-white">
                            Total: 10.000
                          </p>
                          <div className="">
                            <div className="mt-2 flex items-center justify-between">
                              <div className="text-center">
                                <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                  Price:
                                  <Image
                                    className="relative mt-1 inline-block w-max"
                                    layout="intrinsic"
                                    width={24}
                                    height={24}
                                    src="/Logo/eth.png"
                                    alt="eth"
                                  />
                                  0.001
                                </p>
                              </div>
                              <div className="text-center">
                                <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                  <Image
                                    className="mt-1 inline-block w-max"
                                    width={18}
                                    height={18}
                                    src="/Logo/usd.png"
                                    alt="usd"
                                  />
                                  25.000
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-xl text-p2-white2 transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0">
                            <div className="inline-flex w-full justify-center" role="group">
                              <Link
                                href="#"
                                className="inline-block w-4/5 place-content-center rounded-bl-xl border-2 border-p1-darkgreen bg-p1-darkgreen text-center text-xl font-semibold text-p1-white shadow-lg transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-2xl hover:text-p1-white focus:border-p1-cyan focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Buy
                              </Link>

                              <Link
                                href={'#'}
                                className="mx-auto w-1/5 justify-center rounded-br-xl border-2 border-p1-green p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-p1-darkgreen hover:bg-opacity-50 focus:scale-90 focus:border-p1-cyan hover:focus:bg-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen dark:hover:focus:bg-p1-deepdarkgreen"
                              >
                                <Image
                                  className="inline-block h-10 w-10 place-content-center bg-p1-darkgreen p-1 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
                                  width={480}
                                  height={480}
                                  src="/Logo/cart_white.png"
                                  alt="Bordered avatar"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group relative w-full overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-2xl">
                        <div>
                          <button className="absolute left-2 top-2 z-50 rounded-br-lg rounded-tl-lg bg-blue-500 px-3 py-1 text-sm text-white">
                            Rare
                          </button>
                        </div>
                        <div className="relative">
                          <Link
                            href="/card"
                            className="mx-auto justify-center hover:drop-shadow-2xl"
                          >
                            <Image
                              width={480}
                              height={480}
                              src="/HeroNFT/Drivers/Driver3.png"
                              alt="Drivers"
                              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p1-white bg-opacity-10 p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:bg-opacity-50 dark:bg-p1-green dark:text-p1-white">
                          <div className="flex items-center justify-between">
                            <div className="text-left text-xl font-bold text-gray-800 dark:text-p1-white">
                              Drivers
                            </div>
                            <div className="text-left text-lg font-bold text-gray-800 dark:text-p1-white">
                              # 8888
                            </div>
                          </div>
                          <p className="mt-1 text-left text-xl text-gray-600 dark:text-p1-white">
                            Total: 10.000
                          </p>
                          <div className="">
                            <div className="mt-2 flex items-center justify-between">
                              <div className="text-center">
                                <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                  Price:
                                  <Image
                                    className="relative mt-1 inline-block w-max"
                                    layout="intrinsic"
                                    width={24}
                                    height={24}
                                    src="/Logo/eth.png"
                                    alt="eth"
                                  />
                                  0.001
                                </p>
                              </div>
                              <div className="text-center">
                                <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                  <Image
                                    className="mt-1 inline-block w-max"
                                    width={18}
                                    height={18}
                                    src="/Logo/usd.png"
                                    alt="usd"
                                  />
                                  25.000
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-xl text-p2-white2 transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0">
                            <div className="inline-flex w-full justify-center" role="group">
                              <Link
                                href="#"
                                className="inline-block w-4/5 place-content-center rounded-bl-xl border-2 border-p1-darkgreen bg-p1-darkgreen text-center text-xl font-semibold text-p1-white shadow-lg transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-2xl hover:text-p1-white focus:border-p1-cyan focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Buy
                              </Link>

                              <Link
                                href={'#'}
                                className="mx-auto w-1/5 justify-center rounded-br-xl border-2 border-p1-green p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-p1-darkgreen hover:bg-opacity-50 focus:scale-90 focus:border-p1-cyan hover:focus:bg-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen dark:hover:focus:bg-p1-deepdarkgreen"
                              >
                                <Image
                                  className="inline-block h-10 w-10 place-content-center bg-p1-darkgreen p-1 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
                                  width={480}
                                  height={480}
                                  src="/Logo/cart_white.png"
                                  alt="Bordered avatar"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group relative w-full overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-2xl">
                        <div>
                          <button className="absolute left-2 top-2 z-50 rounded-br-lg rounded-tl-lg bg-blue-500 px-3 py-1 text-sm text-white">
                            Rare
                          </button>
                        </div>
                        <div className="relative">
                          <Link
                            href="/card"
                            className="mx-auto justify-center hover:drop-shadow-2xl"
                          >
                            <Image
                              width={480}
                              height={480}
                              src="/HeroNFT/Drivers/Driver2.png"
                              alt="Drivers"
                              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p1-white bg-opacity-10 p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:bg-opacity-50 dark:bg-p1-green dark:text-p1-white">
                          <div className="flex items-center justify-between">
                            <div className="text-left text-xl font-bold text-gray-800 dark:text-p1-white">
                              Drivers
                            </div>
                            <div className="text-left text-lg font-bold text-gray-800 dark:text-p1-white">
                              # 8888
                            </div>
                          </div>
                          <p className="mt-1 text-left text-xl text-gray-600 dark:text-p1-white">
                            Total: 10.000
                          </p>
                          <div className="">
                            <div className="mt-2 flex items-center justify-between">
                              <div className="text-center">
                                <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                  Price:
                                  <Image
                                    className="relative mt-1 inline-block w-max"
                                    layout="intrinsic"
                                    width={24}
                                    height={24}
                                    src="/Logo/eth.png"
                                    alt="eth"
                                  />
                                  0.001
                                </p>
                              </div>
                              <div className="text-center">
                                <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                  <Image
                                    className="mt-1 inline-block w-max"
                                    width={18}
                                    height={18}
                                    src="/Logo/usd.png"
                                    alt="usd"
                                  />
                                  25.000
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-xl text-p2-white2 transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0">
                            <div className="inline-flex w-full justify-center" role="group">
                              <Link
                                href="#"
                                className="inline-block w-4/5 place-content-center rounded-bl-xl border-2 border-p1-darkgreen bg-p1-darkgreen text-center text-xl font-semibold text-p1-white shadow-lg transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-2xl hover:text-p1-white focus:border-p1-cyan focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Buy
                              </Link>

                              <Link
                                href={'#'}
                                className="mx-auto w-1/5 justify-center rounded-br-xl border-2 border-p1-green p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-p1-darkgreen hover:bg-opacity-50 focus:scale-90 focus:border-p1-cyan hover:focus:bg-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen dark:hover:focus:bg-p1-deepdarkgreen"
                              >
                                <Image
                                  className="inline-block h-10 w-10 place-content-center bg-p1-darkgreen p-1 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
                                  width={480}
                                  height={480}
                                  src="/Logo/cart_white.png"
                                  alt="Bordered avatar"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group relative w-full overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-2xl">
                        <div>
                          <button className="absolute left-2 top-2 z-50 rounded-br-lg rounded-tl-lg bg-blue-500 px-3 py-1 text-sm text-white">
                            Rare
                          </button>
                        </div>
                        <div className="relative">
                          <Link
                            href="/card"
                            className="mx-auto justify-center hover:drop-shadow-2xl"
                          >
                            <Image
                              width={480}
                              height={480}
                              src="/HeroNFT/Drivers/Driver1.png"
                              alt="Drivers"
                              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                            />
                          </Link>
                        </div>

                        <div className="w-full bg-p1-white bg-opacity-10 p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:bg-opacity-50 dark:bg-p1-green dark:text-p1-white">
                          <div className="flex items-center justify-between">
                            <div className="text-left text-xl font-bold text-gray-800 dark:text-p1-white">
                              Drivers
                            </div>
                            <div className="text-left text-lg font-bold text-gray-800 dark:text-p1-white">
                              # 8888
                            </div>
                          </div>
                          <p className="mt-1 text-left text-xl text-gray-600 dark:text-p1-white">
                            Total: 10.000
                          </p>
                          <div className="">
                            <div className="mt-2 flex items-center justify-between">
                              <div className="text-center">
                                <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                  Price:
                                  <Image
                                    className="relative mt-1 inline-block w-max"
                                    layout="intrinsic"
                                    width={24}
                                    height={24}
                                    src="/Logo/eth.png"
                                    alt="eth"
                                  />
                                  0.001
                                </p>
                              </div>
                              <div className="text-center">
                                <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                  <Image
                                    className="mt-1 inline-block w-max"
                                    width={18}
                                    height={18}
                                    src="/Logo/usd.png"
                                    alt="usd"
                                  />
                                  25.000
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-xl text-p2-white2 transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0">
                            <div className="inline-flex w-full justify-center" role="group">
                              <Link
                                href="#"
                                className="inline-block w-4/5 place-content-center rounded-bl-xl border-2 border-p1-darkgreen bg-p1-darkgreen text-center text-xl font-semibold text-p1-white shadow-lg transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-2xl hover:text-p1-white focus:border-p1-cyan focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Buy
                              </Link>

                              <Link
                                href={'#'}
                                className="mx-auto w-1/5 justify-center rounded-br-xl border-2 border-p1-green p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-p1-darkgreen hover:bg-opacity-50 focus:scale-90 focus:border-p1-cyan hover:focus:bg-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen dark:hover:focus:bg-p1-deepdarkgreen"
                              >
                                <Image
                                  className="inline-block h-10 w-10 place-content-center bg-p1-darkgreen p-1 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
                                  width={480}
                                  height={480}
                                  src="/Logo/cart_white.png"
                                  alt="Bordered avatar"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <div className="mt-2 rounded-3xl border-2 bg-p2-white2 p-2 text-p1-darkgreen dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                <div className="px-2 text-xl font-semibold md:pt-2 md:text-3xl">
                  <div className="pt-2 text-left">Витрина Showcase</div>
                  <div className="font-regular space-x-2 px-2 text-xl text-p1-darkgreen md:pt-2 md:text-3xl">
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Все
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      RaceLads
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Drivers
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Team&apos;s Members
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Collectors
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Cars
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      CustomLads
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Награды
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Лицензии
                    </Link>
                  </div>
                  <div className="pt-2 text-left">RaceLads</div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    <div className="group relative w-full overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-2xl">
                      <div>
                        <button className="absolute left-2 top-2 z-50 rounded-br-lg rounded-tl-lg bg-blue-500 px-3 py-1 text-sm text-white">
                          Rare
                        </button>
                      </div>
                      <div className="relative">
                        <Link href="/card" className="mx-auto justify-center hover:drop-shadow-2xl">
                          <Image
                            width={480}
                            height={480}
                            src="/HeroNFT/RaceLads/RaceLads1.png"
                            alt="RaceLads"
                            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                          />
                        </Link>
                      </div>

                      <div className="w-full bg-p1-white bg-opacity-10 p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:bg-opacity-50 dark:bg-p1-green dark:text-p1-white">
                        <div className="flex items-center justify-between">
                          <div className="text-left text-xl font-bold text-gray-800 dark:text-p1-white">
                            RaceLad
                          </div>
                          <div className="text-left text-lg font-bold text-gray-800 dark:text-p1-white">
                            # 8888
                          </div>
                        </div>
                        <p className="mt-1 text-left text-xl text-gray-600 dark:text-p1-white">
                          Total: 10.000
                        </p>
                        <div className="">
                          <div className="mt-2 flex items-center justify-between">
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                Price:
                                <Image
                                  className="relative mt-1 inline-block w-max"
                                  layout="intrinsic"
                                  width={24}
                                  height={24}
                                  src="/Logo/eth.png"
                                  alt="eth"
                                />
                                0.001
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                <Image
                                  className="mt-1 inline-block w-max"
                                  width={18}
                                  height={18}
                                  src="/Logo/usd.png"
                                  alt="usd"
                                />
                                25.000
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-xl text-p2-white2 transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0">
                          <div className="inline-flex w-full justify-center" role="group">
                            <Link
                              href="#"
                              className="inline-block w-4/5 place-content-center rounded-bl-xl border-2 border-p1-darkgreen bg-p1-darkgreen text-center text-xl font-semibold text-p1-white shadow-lg transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-2xl hover:text-p1-white focus:border-p1-cyan focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                            >
                              Buy
                            </Link>

                            <Link
                              href={'#'}
                              className="mx-auto w-1/5 justify-center rounded-br-xl border-2 border-p1-green p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-p1-darkgreen hover:bg-opacity-50 focus:scale-90 focus:border-p1-cyan hover:focus:bg-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen dark:hover:focus:bg-p1-deepdarkgreen"
                            >
                              <Image
                                className="inline-block h-10 w-10 place-content-center bg-p1-darkgreen p-1 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
                                width={480}
                                height={480}
                                src="/Logo/cart_white.png"
                                alt="Bordered avatar"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2 rounded-3xl border-2 bg-p2-white2 p-2 text-p1-darkgreen dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                <div className="px-2 text-xl font-semibold md:pt-2 md:text-3xl">
                  <div className="pt-2 text-left">Для продажи For Sale</div>
                  <div className="font-regular space-x-2 px-2 text-xl text-p1-darkgreen md:pt-2 md:text-3xl">
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Все
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      RaceLads
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Drivers
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Team&apos;s Members
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Collectors
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Cars
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      CustomLads
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Награды
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Лицензии
                    </Link>
                  </div>
                  <div className="pt-2 text-left">RaceLads</div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    <div className="group relative w-full overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-2xl">
                      <div>
                        <button className="absolute left-2 top-2 z-50 rounded-br-lg rounded-tl-lg bg-blue-500 px-3 py-1 text-sm text-white">
                          Rare
                        </button>
                      </div>
                      <div className="relative">
                        <Link href="/card" className="mx-auto justify-center hover:drop-shadow-2xl">
                          <Image
                            width={480}
                            height={480}
                            src="/HeroNFT/RaceLads/RaceLads1.png"
                            alt="RaceLads"
                            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                          />
                        </Link>
                      </div>

                      <div className="w-full bg-p1-white bg-opacity-10 p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:bg-opacity-50 dark:bg-p1-green dark:text-p1-white">
                        <div className="flex items-center justify-between">
                          <div className="text-left text-xl font-bold text-gray-800 dark:text-p1-white">
                            RaceLad
                          </div>
                          <div className="text-left text-lg font-bold text-gray-800 dark:text-p1-white">
                            # 8888
                          </div>
                        </div>
                        <p className="mt-1 text-left text-xl text-gray-600 dark:text-p1-white">
                          Total: 10.000
                        </p>
                        <div className="">
                          <div className="mt-2 flex items-center justify-between">
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                Price:
                                <Image
                                  className="relative mt-1 inline-block w-max"
                                  layout="intrinsic"
                                  width={24}
                                  height={24}
                                  src="/Logo/eth.png"
                                  alt="eth"
                                />
                                0.001
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                <Image
                                  className="mt-1 inline-block w-max"
                                  width={18}
                                  height={18}
                                  src="/Logo/usd.png"
                                  alt="usd"
                                />
                                25.000
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-xl text-p2-white2 transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0">
                          <div className="inline-flex w-full justify-center" role="group">
                            <Link
                              href="#"
                              className="inline-block w-4/5 place-content-center rounded-bl-xl border-2 border-p1-darkgreen bg-p1-darkgreen text-center text-xl font-semibold text-p1-white shadow-lg transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-2xl hover:text-p1-white focus:border-p1-cyan focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                            >
                              Buy
                            </Link>

                            <Link
                              href={'#'}
                              className="mx-auto w-1/5 justify-center rounded-br-xl border-2 border-p1-green p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-p1-darkgreen hover:bg-opacity-50 focus:scale-90 focus:border-p1-cyan hover:focus:bg-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen dark:hover:focus:bg-p1-deepdarkgreen"
                            >
                              <Image
                                className="inline-block h-10 w-10 place-content-center bg-p1-darkgreen p-1 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
                                width={480}
                                height={480}
                                src="/Logo/cart_white.png"
                                alt="Bordered avatar"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pb-28"></div>

              <div className="mt-2 rounded-3xl border-2 bg-p2-white2 p-2 text-p1-darkgreen dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                <div className="px-2 text-xl font-semibold md:pt-2 md:text-3xl">
                  <div className="pt-2 text-left">Личный кабинет Promoter/National/Global</div>
                  <div className="flex flex-row justify-center pb-5">
                    <div className="md:basis-5/5">
                      <div className="pt-2 text-left">
                        Лицензии, дающие право на создание, награждение NFT Наградами
                        <div className="place-items-centre mt-5 grid grid-cols-12 gap-2 p-4">
                          <Image
                            width={480}
                            height={480}
                            src="/Licenses/Promoter.png"
                            alt="Promoter"
                          />

                          <Image
                            width={480}
                            height={480}
                            src="/Licenses/National.png"
                            alt="National"
                          />

                          <Image width={480} height={480} src="/Licenses/Global.png" alt="Global" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 text-left">
                    Информация о спонсорах мероприятия для размещения на Наградах
                  </div>

                  <div className="flex flex-row justify-center pb-5">
                    <div className="md:basis-5/5">
                      <div className="pt-2 text-left">
                        Эмблемы и категории спонсоров
                        <div className="place-items-centre mt-5 grid grid-cols-7 gap-2 p-4">
                          <div className="col-span-2 row-span-2">
                            <div>
                              <label
                                htmlFor="year"
                                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                              >
                                Год
                              </label>
                              <input
                                type="text"
                                id="year"
                                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
                                placeholder="Год"
                                required
                              />
                            </div>
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
                                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
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
                                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
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
                                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
                                placeholder="Официальное название мероприятия"
                                required
                              />
                            </div>
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
                                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
                                placeholder="Официальное название соревнования/конкурса"
                                required
                              />
                            </div>
                          </div>
                          <div className="text-base">
                            <form className="mx-auto max-w-2xl">
                              <label
                                htmlFor="license"
                                className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                              >
                                Категория спонсора
                              </label>
                              <select
                                id="license"
                                className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
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
                            <div className="place-items-center p-2">
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
                                    <span className="font-regular">
                                      &quot;Логотип спонсора&quot;
                                    </span>
                                  </p>

                                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span> or drag
                                    and drop
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                  </p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                              </label>
                            </div>
                          </div>
                          <div className="text-base">
                            <form className="mx-auto max-w-2xl">
                              <label
                                htmlFor="license"
                                className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                              >
                                Категория спонсора
                              </label>
                              <select
                                id="license"
                                className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
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
                            <div className="place-items-center p-2">
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
                                    <span className="font-regular">
                                      &quot;Логотип спонсора&quot;
                                    </span>
                                  </p>

                                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span> or drag
                                    and drop
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                  </p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                              </label>
                            </div>
                          </div>
                          <div className="text-base">
                            <form className="mx-auto max-w-2xl">
                              <label
                                htmlFor="license"
                                className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                              >
                                Категория спонсора
                              </label>
                              <select
                                id="license"
                                className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
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
                            <div className="place-items-center p-2">
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
                                    <span className="font-regular">
                                      &quot;Логотип спонсора&quot;
                                    </span>
                                  </p>

                                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span> or drag
                                    and drop
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                  </p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                              </label>
                            </div>
                          </div>
                          <div className="text-base">
                            <form className="mx-auto max-w-2xl">
                              <label
                                htmlFor="license"
                                className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                              >
                                Категория спонсора
                              </label>
                              <select
                                id="license"
                                className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
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
                            <div className="place-items-center p-2">
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
                                    <span className="font-regular">
                                      &quot;Логотип спонсора&quot;
                                    </span>
                                  </p>

                                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span> or drag
                                    and drop
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                  </p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                              </label>
                            </div>
                          </div>
                          <div className="text-base">
                            <form className="mx-auto max-w-2xl">
                              <label
                                htmlFor="license"
                                className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                              >
                                Категория спонсора
                              </label>
                              <select
                                id="license"
                                className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
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
                            <div className="place-items-center p-2">
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
                                    <span className="font-regular">
                                      &quot;Логотип спонсора&quot;
                                    </span>
                                  </p>

                                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span> or drag
                                    and drop
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                  </p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                              </label>
                            </div>
                          </div>
                          <div className="text-base">
                            <form className="mx-auto max-w-2xl">
                              <label
                                htmlFor="license"
                                className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                              >
                                Категория спонсора
                              </label>
                              <select
                                id="license"
                                className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
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
                            <div className="place-items-center p-2">
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
                                    <span className="font-regular">
                                      &quot;Логотип спонсора&quot;
                                    </span>
                                  </p>

                                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span> or drag
                                    and drop
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                  </p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                              </label>
                            </div>
                          </div>
                          <div className="text-base">
                            <form className="mx-auto max-w-2xl">
                              <label
                                htmlFor="license"
                                className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                              >
                                Категория спонсора
                              </label>
                              <select
                                id="license"
                                className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
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
                            <div className="place-items-center p-2">
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
                                    <span className="font-regular">
                                      &quot;Логотип спонсора&quot;
                                    </span>
                                  </p>

                                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span> or drag
                                    and drop
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                  </p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                              </label>
                            </div>
                          </div>
                          <div className="text-base">
                            <form className="mx-auto max-w-2xl">
                              <label
                                htmlFor="license"
                                className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                              >
                                Категория спонсора
                              </label>
                              <select
                                id="license"
                                className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
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
                            <div className="place-items-center p-2">
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
                                    <span className="font-regular">
                                      &quot;Логотип спонсора&quot;
                                    </span>
                                  </p>

                                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span> or drag
                                    and drop
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                  </p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                              </label>
                            </div>
                          </div>
                          <div className="text-base">
                            <form className="mx-auto max-w-2xl">
                              <label
                                htmlFor="license"
                                className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                              >
                                Категория спонсора
                              </label>
                              <select
                                id="license"
                                className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
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
                            <div className="place-items-center p-2">
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
                                    <span className="font-regular">
                                      &quot;Логотип спонсора&quot;
                                    </span>
                                  </p>

                                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span> or drag
                                    and drop
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                  </p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                              </label>
                            </div>
                          </div>
                          <div className="text-base">
                            <form className="mx-auto max-w-2xl">
                              <label
                                htmlFor="license"
                                className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                              >
                                Категория спонсора
                              </label>
                              <select
                                id="license"
                                className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
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
                            <div className="place-items-center p-2">
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
                                    <span className="font-regular">
                                      &quot;Логотип спонсора&quot;
                                    </span>
                                  </p>

                                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span> or drag
                                    and drop
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
                    </div>
                  </div>

                  <div className="font-regular space-x-2 px-2 text-xl text-p1-darkgreen md:pt-2 md:text-3xl">
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Все
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      RaceLads
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Drivers
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Team&apos;s Members
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Collectors
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Cars
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      CustomLads
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Награды
                    </Link>
                    <Link
                      href="#"
                      className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    >
                      Лицензии
                    </Link>
                  </div>
                  <div className="pt-12 text-left">RaceLads</div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    <div className="group relative w-full overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-2xl">
                      <div>
                        <button className="absolute left-2 top-2 z-50 rounded-br-lg rounded-tl-lg bg-blue-500 px-3 py-1 text-sm text-white">
                          Rare
                        </button>
                      </div>
                      <div className="relative">
                        <Link href="/card" className="mx-auto justify-center hover:drop-shadow-2xl">
                          <Image
                            width={480}
                            height={480}
                            src="/HeroNFT/RaceLads/RaceLads1.png"
                            alt="RaceLads"
                            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                          />
                        </Link>
                      </div>

                      <div className="w-full bg-p1-white bg-opacity-10 p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:bg-opacity-50 dark:bg-p1-green dark:text-p1-white">
                        <div className="flex items-center justify-between">
                          <div className="text-left text-xl font-bold text-gray-800 dark:text-p1-white">
                            RaceLad
                          </div>
                          <div className="text-left text-lg font-bold text-gray-800 dark:text-p1-white">
                            # 8888
                          </div>
                        </div>
                        <p className="mt-1 text-left text-xl text-gray-600 dark:text-p1-white">
                          Total: 10.000
                        </p>
                        <div className="">
                          <div className="mt-2 flex items-center justify-between">
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                Price:
                                <Image
                                  className="relative mt-1 inline-block w-max"
                                  layout="intrinsic"
                                  width={24}
                                  height={24}
                                  src="/Logo/eth.png"
                                  alt="eth"
                                />
                                0.001
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                <Image
                                  className="mt-1 inline-block w-max"
                                  width={18}
                                  height={18}
                                  src="/Logo/usd.png"
                                  alt="usd"
                                />
                                25.000
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-xl text-p2-white2 transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0">
                          <div className="inline-flex w-full justify-center" role="group">
                            <Link
                              href="#"
                              className="inline-block w-4/5 place-content-center rounded-bl-xl border-2 border-p1-darkgreen bg-p1-darkgreen text-center text-xl font-semibold text-p1-white shadow-lg transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-2xl hover:text-p1-white focus:border-p1-cyan focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                            >
                              Buy
                            </Link>

                            <Link
                              href={'#'}
                              className="mx-auto w-1/5 justify-center rounded-br-xl border-2 border-p1-green p-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-p1-darkgreen hover:bg-opacity-50 focus:scale-90 focus:border-p1-cyan hover:focus:bg-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen dark:hover:focus:bg-p1-deepdarkgreen"
                            >
                              <Image
                                className="inline-block h-10 w-10 place-content-center bg-p1-darkgreen p-1 dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
                                width={480}
                                height={480}
                                src="/Logo/cart_white.png"
                                alt="Bordered avatar"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-12 text-left">Награды1</div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    <div className="group relative w-full overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-2xl">
                      <div>
                        <button className="absolute left-2 top-2 z-50 rounded-br-lg rounded-tl-lg bg-blue-500 px-3 py-1 text-sm text-white">
                          Rare
                        </button>
                      </div>
                      <div className="relative">
                        <Link href="/card" className="mx-auto justify-center hover:drop-shadow-2xl">
                          <Image
                            width={480}
                            height={480}
                            src="/Hero/cup1.png"
                            alt="cup1"
                            className="h-full w-full scale-50 object-cover transition-transform duration-500 ease-in-out group-hover:scale-75"
                          />
                        </Link>
                      </div>

                      <div className="w-full bg-p1-white bg-opacity-10 p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:bg-opacity-50 dark:bg-p1-green dark:text-p1-white">
                        <div className="flex items-center justify-between">
                          <div className="text-left text-xl font-bold text-gray-800 dark:text-p1-white">
                            Award
                          </div>
                          <div className="text-left text-lg font-bold text-gray-800 dark:text-p1-white">
                            # 1
                          </div>
                        </div>
                        <p className="mt-1 text-left text-xl text-gray-600 dark:text-p1-white">
                          Total: 10.000
                        </p>
                        <div className="">
                          <div className="mt-2 flex items-center justify-between">
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                Price:
                                <Image
                                  className="relative mt-1 inline-block w-max"
                                  layout="intrinsic"
                                  width={24}
                                  height={24}
                                  src="/Logo/eth.png"
                                  alt="eth"
                                />
                                ---
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                <Image
                                  className="mt-1 inline-block w-max"
                                  width={18}
                                  height={18}
                                  src="/Logo/usd.png"
                                  alt="usd"
                                />
                                ---
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-xl text-p2-white2 transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0">
                          <div className="inline-flex w-full justify-center" role="group">
                            <Link
                              href="#"
                              className="inline-block w-full place-content-center rounded-b-xl border-2 border-p1-darkgreen bg-p1-darkgreen text-center text-xl font-semibold text-p1-white shadow-lg transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-2xl hover:text-p1-white focus:border-p1-cyan focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                            >
                              Discovery
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-12 text-left">Награды</div>
                  <div className="mt-2 grid grid-cols-5 place-items-center gap-2 space-x-2 p-4 text-base md:text-xl">
                    <div className="group relative w-full overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-2xl">
                      <div>
                        <button className="absolute left-2 top-2 z-50 rounded-br-lg rounded-tl-lg bg-blue-500 px-3 py-1 text-sm text-white">
                          Rare
                        </button>
                      </div>
                      <div className="relative">
                        <Link href="/card" className="mx-auto justify-center hover:drop-shadow-2xl">
                          <Image
                            width={480}
                            height={480}
                            src="/Hero/cup1.png"
                            alt="cup1"
                            className="h-full w-full scale-50 object-cover transition-transform duration-500 ease-in-out group-hover:scale-75"
                          />
                        </Link>
                      </div>

                      <div className="w-full bg-p1-white bg-opacity-10 p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:bg-opacity-50 dark:bg-p1-green dark:text-p1-white">
                        <div className="flex items-center justify-between">
                          <div className="text-left text-xl font-bold text-gray-800 dark:text-p1-white">
                            Award
                          </div>
                          <div className="text-left text-lg font-bold text-gray-800 dark:text-p1-white">
                            # 1
                          </div>
                        </div>
                        <p className="mt-1 text-left text-xl text-gray-600 dark:text-p1-white">
                          Total: 10.000
                        </p>
                        <div className="">
                          <div className="mt-2 flex items-center justify-between">
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                Price:
                                <Image
                                  className="relative mt-1 inline-block w-max"
                                  layout="intrinsic"
                                  width={24}
                                  height={24}
                                  src="/Logo/eth.png"
                                  alt="eth"
                                />
                                ---
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600 md:text-xl dark:text-p1-white">
                                <Image
                                  className="mt-1 inline-block w-max"
                                  width={18}
                                  height={18}
                                  src="/Logo/usd.png"
                                  alt="usd"
                                />
                                ---
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-xl text-p2-white2 transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0">
                          <div className="inline-flex w-full justify-center" role="group">
                            <Link
                              href="#"
                              className="inline-block w-full place-content-center rounded-b-xl border-2 border-p1-darkgreen bg-p1-darkgreen text-center text-xl font-semibold text-p1-white shadow-lg transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-2xl hover:text-p1-white focus:border-p1-cyan focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                            >
                              Discovery
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 w-full">
                      <div className="mx-auto flex max-w-md overflow-hidden rounded-md border-2 border-p1-green font-[sans-serif]">
                        <input
                          type="email"
                          placeholder="Search Something..."
                          className="w-full bg-white px-4 py-3 text-sm text-gray-600 outline-none"
                        />
                        <button
                          type="button"
                          className="flex items-center justify-center bg-p1-green px-5"
                        >
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

                      <div>
                        <label
                          htmlFor="team"
                          className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                        >
                          номер кошелька
                        </label>
                        <input
                          type="text"
                          id="wallet"
                          className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                          placeholder="Название команды"
                          required
                        />
                      </div>
                      <div className="pb-2"></div>
                      <div>
                        <label
                          htmlFor="team"
                          className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                        >
                          email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                          placeholder="Название команды"
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
                          className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                          placeholder="Название команды"
                          required
                        />
                      </div>
                      <div className="pb-2"></div>
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
                          className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
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
                          className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
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
                          className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                          placeholder="Дата рождения"
                          required
                        />
                      </div>
                      <div className="pb-2"></div>

                      <div className="my-5">
                        <Link
                          href="/"
                          className="inline-block rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p2-orange dark:hover:bg-amber-600 dark:hover:text-amber-100"
                        >
                          Отправить
                        </Link>
                      </div>

                      <div className="pb-2"></div>
                    </div>

                    <div className="group relative w-full overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-2xl">
                      <div>
                        <button className="absolute left-2 top-2 z-50 rounded-br-lg rounded-tl-lg bg-blue-500 px-3 py-1 text-sm text-white">
                          Rare
                        </button>
                      </div>
                      <div className="relative">
                        <Link href="/card" className="mx-auto justify-center hover:drop-shadow-2xl">
                          <Image
                            width={480}
                            height={480}
                            src="/HeroNFT/Drivers/Driver4.png"
                            alt="Drivers"
                            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                          />
                        </Link>
                      </div>

                      <div className="w-full bg-p1-white bg-opacity-10 p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:bg-opacity-50 dark:bg-p1-green dark:text-p1-white">
                        <div className="flex items-center justify-between">
                          <div className="text-left text-xl font-bold text-gray-800 dark:text-p1-white">
                            Driver
                          </div>
                          <div className="text-left text-lg font-bold text-gray-800 dark:text-p1-white">
                            # 88
                          </div>
                        </div>
                        <p className="mt-1 text-left text-base text-gray-600 group-hover:text-p1-deepdarkgreen dark:text-p1-white">
                          Цареградцев Аркадий Петрович
                        </p>
                        <div className="">
                          <div className="mt-2 flex items-center justify-between">
                            <div className="text-center">
                              <p className="mt-1 text-left text-xl text-gray-600 group-hover:text-p1-deepdarkgreen md:text-xl dark:text-p1-white">
                                Команда: Одержимые
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600 group-hover:text-p1-deepdarkgreen md:text-xl dark:text-p1-white">
                                Царь
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-xl text-p2-white2 transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0">
                          <div className="inline-flex w-full justify-center" role="group">
                            <Link
                              href="#"
                              className="inline-block w-full place-content-center rounded-bl-xl border-2 border-p1-darkgreen bg-p1-darkgreen text-center text-xl font-semibold text-p1-white shadow-lg transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-2xl hover:text-p1-white focus:border-p1-cyan focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                            >
                              Discover
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 grid grid-cols-2 place-items-center gap-2 space-x-2 p-4 text-base md:text-xl">
                      <div>
                        <div className="group relative w-full overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-2xl">
                          <div>
                            <button className="absolute left-2 top-2 z-50 rounded-br-lg rounded-tl-lg bg-blue-500 px-3 py-1 text-sm text-white">
                              Rare
                            </button>
                          </div>
                          <div className="relative">
                            <Link
                              href="/card"
                              className="mx-auto justify-center hover:drop-shadow-2xl"
                            >
                              <Image
                                width={480}
                                height={480}
                                src="/Hero/cup1.png"
                                alt="cup1"
                                className="h-full w-full scale-50 object-cover transition-transform duration-500 ease-in-out group-hover:scale-75"
                              />
                            </Link>
                          </div>

                          <div className="w-full bg-p1-white bg-opacity-10 p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:bg-opacity-50 dark:bg-p1-green dark:text-p1-white">
                            <div className="flex items-center justify-between">
                              <div className="text-left text-xl font-bold text-gray-800 dark:text-p1-white">
                                Award
                              </div>
                              <div className="text-left text-lg font-bold text-gray-800 dark:text-p1-white">
                                # 1
                              </div>
                            </div>
                            <p className="mt-1 text-left text-xl text-gray-600 dark:text-p1-white">
                              Total: 10.000
                            </p>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-xl text-p2-white2 transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0">
                              <div className="inline-flex w-full justify-center" role="group">
                                <Link
                                  href="#"
                                  className="inline-block w-full place-content-center rounded-b-xl border-2 border-p1-darkgreen bg-p1-darkgreen text-center text-xl font-semibold text-p1-white shadow-lg transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-2xl hover:text-p1-white focus:border-p1-cyan focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                                >
                                  Discovery
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="group relative w-full overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-2xl">
                          <div>
                            <button className="absolute left-2 top-2 z-50 rounded-br-lg rounded-tl-lg bg-blue-500 px-3 py-1 text-sm text-white">
                              Rare
                            </button>
                          </div>
                          <div className="relative">
                            <Link
                              href="/card"
                              className="mx-auto justify-center hover:drop-shadow-2xl"
                            >
                              <Image
                                width={480}
                                height={480}
                                src="/Hero/cup1.png"
                                alt="cup1"
                                className="h-full w-full scale-50 object-cover transition-transform duration-500 ease-in-out group-hover:scale-75"
                              />
                            </Link>
                          </div>

                          <div className="w-full bg-p1-white bg-opacity-10 p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:bg-opacity-50 dark:bg-p1-green dark:text-p1-white">
                            <div className="flex items-center justify-between">
                              <div className="text-left text-xl font-bold text-gray-800 dark:text-p1-white">
                                Award
                              </div>
                              <div className="text-left text-lg font-bold text-gray-800 dark:text-p1-white">
                                # 1
                              </div>
                            </div>
                            <p className="mt-1 text-left text-xl text-gray-600 dark:text-p1-white">
                              Total: 10.000
                            </p>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-xl text-p2-white2 transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0">
                              <div className="inline-flex w-full justify-center" role="group">
                                <Link
                                  href="#"
                                  className="inline-block w-full place-content-center rounded-b-xl border-2 border-p1-darkgreen bg-p1-darkgreen text-center text-xl font-semibold text-p1-white shadow-lg transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-2xl hover:text-p1-white focus:border-p1-cyan focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                                >
                                  Discovery
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="group relative w-full overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-2xl">
                          <div>
                            <button className="absolute left-2 top-2 z-50 rounded-br-lg rounded-tl-lg bg-blue-500 px-3 py-1 text-sm text-white">
                              Rare
                            </button>
                          </div>
                          <div className="relative">
                            <Link
                              href="/card"
                              className="mx-auto justify-center hover:drop-shadow-2xl"
                            >
                              <Image
                                width={480}
                                height={480}
                                src="/Hero/cup1.png"
                                alt="cup1"
                                className="h-full w-full scale-50 object-cover transition-transform duration-500 ease-in-out group-hover:scale-75"
                              />
                            </Link>
                          </div>

                          <div className="w-full bg-p1-white bg-opacity-10 p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:bg-opacity-50 dark:bg-p1-green dark:text-p1-white">
                            <div className="flex items-center justify-between">
                              <div className="text-left text-xl font-bold text-gray-800 dark:text-p1-white">
                                Award
                              </div>
                              <div className="text-left text-lg font-bold text-gray-800 dark:text-p1-white">
                                # 1
                              </div>
                            </div>
                            <p className="mt-1 text-left text-xl text-gray-600 dark:text-p1-white">
                              Total: 10.000
                            </p>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-xl text-p2-white2 transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0">
                              <div className="inline-flex w-full justify-center" role="group">
                                <Link
                                  href="#"
                                  className="inline-block w-full place-content-center rounded-b-xl border-2 border-p1-darkgreen bg-p1-darkgreen text-center text-xl font-semibold text-p1-white shadow-lg transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-2xl hover:text-p1-white focus:border-p1-cyan focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                                >
                                  Discovery
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="group relative w-full overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-2xl">
                          <div>
                            <button className="absolute left-2 top-2 z-50 rounded-br-lg rounded-tl-lg bg-blue-500 px-3 py-1 text-sm text-white">
                              Rare
                            </button>
                          </div>
                          <div className="relative">
                            <Link
                              href="/card"
                              className="mx-auto justify-center hover:drop-shadow-2xl"
                            >
                              <Image
                                width={480}
                                height={480}
                                src="/Hero/cup1.png"
                                alt="cup1"
                                className="h-full w-full scale-50 object-cover transition-transform duration-500 ease-in-out group-hover:scale-75"
                              />
                            </Link>
                          </div>

                          <div className="w-full bg-p1-white bg-opacity-10 p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12 group-hover:bg-opacity-50 dark:bg-p1-green dark:text-p1-white">
                            <div className="flex items-center justify-between">
                              <div className="text-left text-xl font-bold text-gray-800 dark:text-p1-white">
                                Award
                              </div>
                              <div className="text-left text-lg font-bold text-gray-800 dark:text-p1-white">
                                # 1
                              </div>
                            </div>
                            <p className="mt-1 text-left text-xl text-gray-600 dark:text-p1-white">
                              Total: 10.000
                            </p>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen bg-opacity-100 text-center text-xl text-p2-white2 transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0">
                              <div className="inline-flex w-full justify-center" role="group">
                                <Link
                                  href="#"
                                  className="inline-block w-full place-content-center rounded-b-xl border-2 border-p1-darkgreen bg-p1-darkgreen text-center text-xl font-semibold text-p1-white shadow-lg transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-2xl hover:text-p1-white focus:border-p1-cyan focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                                >
                                  Discovery
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
            </div>
          </div>
        </div>
      </div>
      <div id="3"></div>
    </div>
  );
}
