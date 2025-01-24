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
                      My NFT
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
        <div className="">
          <div className="border-p1-green bg-p2-white2 bg-opacity-50 mx-auto flex w-72 overflow-hidden rounded-xl px-4 py-3 backdrop-blur-lg md:-my-10 lg:w-80 xl:w-96">
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
                  <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-2">
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
                  </div>
                  <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Items</p>
                      <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                        10,000
                      </p>
                    </div>
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Floor Price</p>
                      <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                        <Image
                          className="relative inline-block w-8 px-1"
                          layout="intrinsic"
                          width={50}
                          height={50}
                          src="/Logo/eth.png"
                          alt="eth"
                        />
                        15.2
                      </p>
                    </div>
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Total Volume</p>
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
                  <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-2">
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
                  </div>
                  <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Items</p>
                      <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                        10,000
                      </p>
                    </div>
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Floor Price</p>
                      <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                        <Image
                          className="relative inline-block w-8 px-1"
                          layout="intrinsic"
                          width={50}
                          height={50}
                          src="/Logo/eth.png"
                          alt="eth"
                        />
                        15.2
                      </p>
                    </div>
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Total Volume</p>
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
                  <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-2">
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
                  </div>
                  <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Items</p>
                      <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                        10,000
                      </p>
                    </div>
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Floor Price</p>
                      <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                        <Image
                          className="relative inline-block w-8 px-1"
                          layout="intrinsic"
                          width={50}
                          height={50}
                          src="/Logo/eth.png"
                          alt="eth"
                        />
                        15.2
                      </p>
                    </div>
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Total Volume</p>
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
                  <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-2">
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
                  </div>
                  <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Items</p>
                      <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                        10,000
                      </p>
                    </div>
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Floor Price</p>
                      <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                        <Image
                          className="relative inline-block w-8 px-1"
                          layout="intrinsic"
                          width={50}
                          height={50}
                          src="/Logo/eth.png"
                          alt="eth"
                        />
                        15.2
                      </p>
                    </div>
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Total Volume</p>
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
                  <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-2">
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
                  </div>
                  <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Items</p>
                      <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                        10,000
                      </p>
                    </div>
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Floor Price</p>
                      <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                        <Image
                          className="relative inline-block w-8 px-1"
                          layout="intrinsic"
                          width={50}
                          height={50}
                          src="/Logo/eth.png"
                          alt="eth"
                        />
                        15.2
                      </p>
                    </div>
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Total Volume</p>
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
                  <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-2">
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
                  </div>
                  <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Items</p>
                      <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                        10,000
                      </p>
                    </div>
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Floor Price</p>
                      <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                        <Image
                          className="relative inline-block w-8 px-1"
                          layout="intrinsic"
                          width={50}
                          height={50}
                          src="/Logo/eth.png"
                          alt="eth"
                        />
                        15.2
                      </p>
                    </div>
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Total Volume</p>
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
                  <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-2">
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
                  </div>
                  <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Items</p>
                      <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                        10,000
                      </p>
                    </div>
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Floor Price</p>
                      <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                        <Image
                          className="relative inline-block w-8 px-1"
                          layout="intrinsic"
                          width={50}
                          height={50}
                          src="/Logo/eth.png"
                          alt="eth"
                        />
                        15.2
                      </p>
                    </div>
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Total Volume</p>
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
                  <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-2">
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
                  </div>
                  <div className="mt-2 grid w-full grid-cols-3 items-center justify-between space-x-1 text-center md:mt-4 md:grid-cols-3">
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Items</p>
                      <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                        10,000
                      </p>
                    </div>
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Floor Price</p>
                      <p className="text-p1-deepdarkgreen dark:text-p1-cyan text-lg font-semibold">
                        <Image
                          className="relative inline-block w-8 px-1"
                          layout="intrinsic"
                          width={50}
                          height={50}
                          src="/Logo/eth.png"
                          alt="eth"
                        />
                        15.2
                      </p>
                    </div>
                    <div>
                      <p className="text-p1-darkgreen dark:text-p1-cyan text-sm">Total Volume</p>
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

        <div className="grid h-80 grid-cols-1 place-items-start p-1 md:grid-cols-1 xl:grid-cols-2">
          <div className="flex grid-flow-row auto-rows-max space-x-2 px-2 md:px-10">
            <Link href={'#'} className="mx-auto w-80">
              <Image
                className="dark:ring-p1-darkgreen rounded-3xl"
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

          <div className="flex grid-flow-row auto-rows-max justify-end space-x-4 pt-2 pb-4 md:space-x-8">
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
          <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan mx-auto flex max-w-2xl overflow-hidden rounded-2xl border-2 px-4 py-3 backdrop-blur-sm md:w-96">
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
              placeholder="Search Elementals..."
              className="text-p1-deepdarkgreen dark:text-p1-cyan w-full bg-transparent text-xl outline-none"
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
                className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center rounded-l-xl border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
              >
                Items
              </Link>
              <Link
                href="#"
                className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
              >
                Offers
              </Link>
              <Link
                href="#"
                className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
              >
                Analitics
              </Link>

              <Link
                href="#"
                className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
              >
                Activity
              </Link>

              <form className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-darkgreen focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center rounded-r-xl border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl">
                <label htmlFor="price" className="block w-full"></label>
                <select
                  id="price"
                  className="border-p1-darkgreen bg-opacity-50 dark:bg-p1-deepdarkgreen dark:text-p1-green dark:accent-p1-darkgreen dark:hover:text-p1-cyan mx-auto flex max-w-2xl overflow-hidden"
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
                className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-max place-content-center rounded-l-xl border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
              >
                All
              </Link>
              <Link
                href="#"
                className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-max place-content-center border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
              >
                Listed
              </Link>
              <Link
                href="#"
                className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-max place-content-center border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
              >
                On Auction
              </Link>

              <Link
                href="#"
                className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-max place-content-center rounded-r-xl border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
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
                className="ring-p1-gray hover:bg-p1-green hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-green h-10 w-10 rounded-sm p-1 transition-all delay-75 duration-300 ease-in-out dark:brightness-50"
                width={480}
                height={480}
                src="/icon/2.png"
                alt="bt2"
              />
            </Link>
          </div>
          <span className="relative flex h-3 w-3 pt-4">
            <span className="bg-p1-green absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-p1-green relative inline-flex h-3 w-3 rounded-full"></span>
          </span>
          <div className="text-p1-darkgreen dark:text-p1-green place-content-center text-sm md:text-xl">
            Live
          </div>
          <div className="flex grid-flow-row auto-rows-max justify-start space-x-2"></div>
          <div>
            <Link
              href="#"
              className="text-p1-darkgreen dark:text-p1-green place-content-center text-sm md:text-xl"
            >
              100 results
            </Link>
          </div>
        </div>

        <div className="flex justify-end md:px-10">
          <div className="inline-flex w-full justify-end rounded-md" role="group">
            <div className="w-10">
              <Link href={'#'} className="mx-auto justify-center">
                <Image
                  className="ring-p1-gray hover:bg-p1-darkgreen hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-green h-10 w-10 rounded-sm p-1 transition-all delay-75 duration-300 ease-in-out dark:brightness-50"
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
                  className="ring-p1-gray hover:bg-p1-green hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-green h-10 w-10 rounded-sm p-1 transition-all delay-75 duration-300 ease-in-out dark:brightness-50"
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
                  className="ring-p1-gray hover:bg-p1-green hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-green h-10 w-10 rounded-sm p-1 transition-all delay-75 duration-300 ease-in-out dark:brightness-50"
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
                  className="ring-p1-gray hover:bg-p1-green hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-green h-10 w-10 rounded-sm p-1 transition-all delay-75 duration-300 ease-in-out dark:brightness-50"
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
                  className="ring-p1-gray hover:bg-p1-green hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-green h-10 w-10 rounded-sm p-1 transition-all delay-75 duration-300 ease-in-out dark:brightness-50"
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

      <div className="pb-4"> </div>

      <div className="flex w-screen place-content-between gap-2 px-6">
        <div className="w-3/12 pt-2">
          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-start py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Price
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center lg:p-2">
                <form className="text-p1-darkgreen hover:text-p1-darkgreen focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center pb-2 text-center md:text-xl">
                  <label htmlFor="price" className="block w-full"></label>
                  <select
                    id="price"
                    className="border-p1-green bg-p1-white bg-opacity-50 hover:border-p1-green hover:bg-p2-white2 dark:bg-p1-deepdarkgreen dark:text-p1-green dark:accent-p1-darkgreen dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan mx-auto flex w-full overflow-hidden rounded-t-xl border p-4 text-center"
                    defaultValue={'DEFAULT'}
                  >
                    <option value="DEFAULT" disabled>
                      USD
                    </option>
                    <option value="Price_low_to_high">USD</option>
                    <option value="Price_high_to_low">ETH</option>
                    <option value="Recently_listedr">SOL</option>
                    <option value="Best_offer">POL</option>
                  </select>
                </form>
                <div className="inline-flex space-x-1 pb-2 md:space-x-2 xl:space-x-4 2xl:space-x-10">
                  <div className="">
                    <div>
                      <input
                        type="text"
                        id="price_min"
                        className="border-p1-green bg-p1-white text-p1-darkgreen hover:bg-p2-white2 focus:border-p1-darkgreen focus:ring-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan dark:focus:border-p1-green dark:focus:ring-p1-cyan block w-full border p-3 text-center text-sm lining-nums md:text-xl"
                        placeholder="Min"
                        required
                      />
                    </div>
                  </div>
                  <div className="place-content-center px-2">to</div>
                  <div className="">
                    <div>
                      <input
                        type="text"
                        id="price_max"
                        className="border-p1-green bg-p1-white text-p1-darkgreen hover:bg-p2-white2 focus:border-p1-darkgreen focus:ring-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan dark:focus:border-p1-green dark:focus:ring-p1-cyan block w-full border p-3 text-center text-sm lining-nums md:text-xl"
                        placeholder="Max"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <Link
                    href="#"
                    className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan relative flex place-content-center rounded-b-xl border px-4 py-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
                  >
                    <div className="px-4">Apply</div>
                  </Link>
                </div>
              </div>
            </details>
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-start py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Rarity rank
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center lg:p-2">
                <div className="inline-flex space-x-1 pb-2 md:space-x-2 xl:space-x-4 2xl:space-x-10">
                  <div>
                    <div>
                      <input
                        type="text"
                        id="price_min"
                        className="border-p1-green bg-p1-white text-p1-darkgreen hover:bg-p2-white2 focus:border-p1-darkgreen focus:ring-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan dark:focus:border-p1-green dark:focus:ring-p1-cyan block w-full rounded-tl-xl border p-3 text-center text-sm lining-nums md:text-xl"
                        placeholder="Min"
                        required
                      />
                    </div>
                  </div>
                  <div className="place-content-center px-2">-</div>
                  <div>
                    <div>
                      <input
                        type="text"
                        id="price_max"
                        className="border-p1-green bg-p1-white text-p1-darkgreen hover:bg-p2-white2 focus:border-p1-darkgreen focus:ring-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan dark:focus:border-p1-green dark:focus:ring-p1-cyan block w-full rounded-tr-xl border p-3 text-center text-sm lining-nums md:text-xl"
                        placeholder="Max"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <Link
                    href="#"
                    className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p2-white2 hover:text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan relative flex place-content-center rounded-b-xl border px-4 py-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
                  >
                    <div className="px-4">Apply</div>
                  </Link>
                </div>
              </div>
            </details>
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-start py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Currency
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                <div className="flex justify-center pb-2">
                  <div>
                    <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan flex overflow-hidden rounded-2xl border px-4 py-3">
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
                <div className="flex items-center p-4">
                  <input
                    checked={check}
                    id="checkbox_ETH"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_ETH"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    ETH
                  </label>
                </div>
                <div className="flex items-center p-4">
                  <input
                    checked={check}
                    id="checkbox_POL"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_POL"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    POL
                  </label>
                </div>
              </div>
            </details>
          </div>

          <div className="text-p1-darkgreen dark:text-p1-green w-full place-content-center px-6 pt-4 pb-4 text-xl">
            Traits
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Slogan
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  8
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                <div className="flex justify-center pb-2">
                  <div>
                    <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan flex overflow-hidden rounded-2xl border px-4 py-3">
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
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_ETH"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_ETH"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Always a champion
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">46</div>
                </div>

                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_POL"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_POL"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Drift till I die
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">46</div>
                </div>
              </div>
            </details>
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Background
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  46
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                <div className="flex justify-center pb-2">
                  <div>
                    <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan flex overflow-hidden rounded-2xl border px-4 py-3">
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
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_ETH"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_ETH"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Aquamarine
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">44</div>
                </div>
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_POL"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_POL"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Sky Blue
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">46</div>
                </div>
              </div>
            </details>
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Skin
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  8
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                <div className="flex justify-center pb-2">
                  <div>
                    <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan flex overflow-hidden rounded-2xl border px-4 py-3">
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
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_ETH"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_ETH"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Asian
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">2345</div>
                </div>
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_POL"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_POL"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Arab
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">1256</div>
                </div>
              </div>
            </details>
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Eyes
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  8
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                <div className="flex justify-center pb-2">
                  <div>
                    <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan flex overflow-hidden rounded-2xl border px-4 py-3">
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
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_ETH"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_ETH"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Normal
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">2345</div>
                </div>
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_POL"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_POL"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Kind
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">1256</div>
                </div>
              </div>
            </details>
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Mouth
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  16
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                <div className="flex justify-center pb-2">
                  <div>
                    <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan flex overflow-hidden rounded-2xl border px-4 py-3">
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
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_ETH"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_ETH"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Neutral
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">4564</div>
                </div>
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_POL"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_POL"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Sad
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">1256</div>
                </div>
              </div>
            </details>
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Nose
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  4
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                <div className="flex justify-center pb-2">
                  <div>
                    <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan flex overflow-hidden rounded-2xl border px-4 py-3">
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
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_ETH"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_ETH"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Normal
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">1234</div>
                </div>
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_POL"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_POL"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Bulbous
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">987</div>
                </div>
              </div>
            </details>
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Earring
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  7
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                <div className="flex justify-center pb-2">
                  <div>
                    <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan flex overflow-hidden rounded-2xl border px-4 py-3">
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
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_ETH"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_ETH"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    No Earring
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">7356</div>
                </div>
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_POL"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_POL"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Gold Earring
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">369</div>
                </div>
              </div>
            </details>
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Eye pads
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  3
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                <div className="flex justify-center pb-2">
                  <div>
                    <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan flex overflow-hidden rounded-2xl border px-4 py-3">
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
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_ETH"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_ETH"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    No Eye pads
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">9896</div>
                </div>
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_POL"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_POL"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Bitcoin Pads
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">369</div>
                </div>
              </div>
            </details>
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Shaving
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  5
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                <div className="flex justify-center pb-2">
                  <div>
                    <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan flex overflow-hidden rounded-2xl border px-4 py-3">
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
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_ETH"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_ETH"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Clean-Shaven
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">5678</div>
                </div>
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_POL"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_POL"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Mustache & Beard
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">789</div>
                </div>
              </div>
            </details>
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Face accessory
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  23
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                <div className="flex justify-center pb-2">
                  <div>
                    <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan flex overflow-hidden rounded-2xl border px-4 py-3">
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
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_ETH"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_ETH"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    No Face Accessory
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">6780</div>
                </div>
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_POL"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_POL"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Biege Balaclava
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">789</div>
                </div>
              </div>
            </details>
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Clothes
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  179
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                <div className="flex justify-center pb-2">
                  <div>
                    <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan flex overflow-hidden rounded-2xl border px-4 py-3">
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
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_ETH"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_ETH"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    No Clothes
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">55</div>
                </div>
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_POL"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_POL"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Brown & Flesh Bomber
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">54</div>
                </div>
              </div>
            </details>
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Head
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  215
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                <div className="flex justify-center pb-2">
                  <div>
                    <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan flex overflow-hidden rounded-2xl border px-4 py-3">
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
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_ETH"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_ETH"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Bald
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">125</div>
                </div>
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_POL"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_POL"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Biege Closed Tinted Racing Helmet
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">21</div>
                </div>
              </div>
            </details>
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Extra
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  5
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                <div className="flex justify-center pb-2">
                  <div>
                    <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan flex overflow-hidden rounded-2xl border px-4 py-3">
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
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_ETH"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_ETH"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    No Extra
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">9876</div>
                </div>
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_POL"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_POL"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Albatross 1
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">23</div>
                </div>
              </div>
            </details>
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Parrot
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  3
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                <div className="flex justify-center pb-2">
                  <div>
                    <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan flex overflow-hidden rounded-2xl border px-4 py-3">
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
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_ETH"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_ETH"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    No Parrot
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">9956</div>
                </div>
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_POL"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_POL"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Green Parrot
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">56</div>
                </div>
              </div>
            </details>
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Cupid&apos;s arrow
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  2
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                <div className="flex justify-center pb-2">
                  <div>
                    <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan flex overflow-hidden rounded-2xl border px-4 py-3">
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
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_ETH"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_ETH"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    No Cupid&apos;s arrow
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">9986</div>
                </div>
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_POL"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_POL"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Cupid&apos;s arrow
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">14</div>
                </div>
              </div>
            </details>
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Tatoo
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  2
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                <div className="flex justify-center pb-2">
                  <div>
                    <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan flex overflow-hidden rounded-2xl border px-4 py-3">
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
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_ETH"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_ETH"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    No Tatoo
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">9986</div>
                </div>
                <div className="flex place-content-between p-4">
                  <input
                    checked={check}
                    id="checkbox_POL"
                    onChange={() => {
                      setCheck(!check);
                    }}
                    type="checkbox"
                    value=""
                    className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-5 w-5 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                  />
                  <label
                    id="3"
                    htmlFor="checkbox_POL"
                    className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                  >
                    Tatoo
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">14</div>
                </div>
              </div>
            </details>
          </div>
        </div>
        <div className="flex w-9/12 grid-flow-row flex-wrap place-content-start gap-2 pt-2">
          {/* ... карточка 1 ...15x10 */}

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Карточки
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  4
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                <div className="flex justify-center pb-2">
                  <div>
                    <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan flex overflow-hidden rounded-2xl border px-4 py-3">
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
                {/* ... карточка 1 ...15x10 */}
                <div className="flex gap-4">
                  <div className="group hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen relative h-[14.5rem] w-[10rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-sm hover:shadow-lg">
                    <div>
                      <path
                        d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                        fill="white"
                      ></path>

                      <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
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

                    <div className="bg-p2-white2 bg-opacity-100 text-p1-darkgreen group-hover:bg-opacity-100 group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green w-full transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl">
                      <div className="flex items-center justify-between">
                        <div className="px-1 pt-1 text-left text-sm font-bold">RaceLad</div>
                        <div className="px-1 pt-1 text-left text-sm font-bold"># 8888</div>
                      </div>

                      <div className="px-1 pt-1 pb-12">
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
                        <div className="space-x-4 text-left text-xs font-thin">
                          Last sale: 1000 WETH
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="bg-p1-darkgreen bg-opacity-100 text-p2-white2 shadow-p1-green hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen absolute bottom-0 left-0 h-[2rem] w-[10rem] translate-y-full text-center shadow-sm transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                        <div
                          className="inline-flex h-[2rem] w-[10rem] justify-center text-sm"
                          role="group"
                        >
                          <Link
                            href="#"
                            className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-4/5 place-content-center rounded-bl-xl border text-center text-sm shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl md:text-3xl"
                          >
                            <div className="grid grid-cols-2 items-center justify-between gap-2">
                              <div className="text-xs leading-2">Buy:</div>
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
                            className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan hover:ring-p1-cyan focus:border-p1-cyan focus:ring-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-1/5 place-content-center rounded-br-xl border text-center text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-75 hover:shadow-2xl focus:scale-75 md:text-3xl"
                          >
                            <Image
                              className="bg-p1-darkgreenе dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen inline-block h-5 w-5"
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
                        <div className="text-left text-base font-thin"> Last sale: 1000 WETH</div>
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
                  <div className="pb-10"> </div>
                  {/* ...карточка 3 ...28x20 */}
                  <div className="group hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen relative h-[28rem] w-[20rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-sm hover:shadow-lg">
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
                          className="h-[20rem] w-[20rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                        />
                      </Link>
                    </div>

                    <div className="bg-p2-white2 bg-opacity-100 text-p1-darkgreen group-hover:bg-opacity-100 group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green w-full p-1 transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl">
                      <div className="flex items-center justify-between">
                        <div className="px-4 text-left text-xl font-bold">RaceLad</div>
                        <div className="px-4 text-left text-xl font-bold"># 3333</div>
                      </div>

                      <div className="px-4 pt-4 pb-12">
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
                      <div className="bg-p1-darkgreen bg-opacity-100 text-p2-white2 shadow-p1-green hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen absolute bottom-0 left-0 w-full translate-y-full text-center shadow-sm transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                        <div
                          className="inline-flex h-[3rem] w-[20rem] justify-center text-sm"
                          role="group"
                        >
                          <Link
                            href="#"
                            className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-4/5 place-content-center rounded-bl-xl border text-center text-base shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl md:text-3xl"
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
                            className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan hover:ring-p1-cyan focus:border-p1-cyan focus:ring-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-1/5 place-content-center rounded-br-xl border text-center text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-75 hover:shadow-2xl focus:scale-75 md:text-3xl"
                          >
                            <Image
                              className="bg-p1-darkgreenе dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen inline-block h-7 w-7"
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
                  <div className="group hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen relative h-[39rem] w-[28rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 group-hover:shadow-sm hover:shadow-lg">
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

                    <div className="bg-p2-white2 bg-opacity-100 text-p1-darkgreen group-hover:bg-opacity-100 group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green w-full p-1 transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl">
                      <div className="flex items-center justify-between">
                        <div className="px-4 pt-2 text-left text-3xl font-bold">RaceLad</div>
                        <div className="px-4 pt-2 text-left text-3xl font-bold"># 8888</div>
                      </div>

                      <div className="px-4 pt-6 pb-12">
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
                        <div className="pt-3 text-left text-xl font-thin">Last sale: 1000 WETH</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="bg-p1-darkgreen bg-opacity-100 text-p2-white2 shadow-p1-green hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen absolute bottom-0 left-0 w-full translate-y-full text-center shadow-sm transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                        <div
                          className="inline-flex h-[4rem] w-[28rem] justify-center text-sm"
                          role="group"
                        >
                          <Link
                            href="#"
                            className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-4/5 place-content-center rounded-bl-xl border text-center text-base shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl md:text-3xl"
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
                            className="border-p1-darkgreen bg-p1-darkgreen shadow-p1-cyan hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-p1-cyan hover:ring-p1-cyan focus:border-p1-cyan focus:ring-p1-cyan dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan grid w-1/5 place-content-center rounded-br-xl border text-center text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-75 hover:shadow-2xl focus:scale-75 md:text-3xl"
                          >
                            <Image
                              className="bg-p1-darkgreenе dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen inline-block h-9 w-9"
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
                </div>
              </div>
            </details>
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Таблица 1
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  11 столбцов
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                <div className="flex justify-center pb-2">
                  <div>
                    <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan flex overflow-hidden rounded-2xl border px-4 py-3">
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
                {/* Таблица 1*/}

                <div className="inline-block place-self-center p-1">
                  <div className="shadow-md sm:rounded-lg">
                    <table className="text-p1-darkgreen dark:text-p1-green relative overflow-hidden text-left text-xl">
                      <thead className="text-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green bg-gray-50 text-xs uppercase">
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
                        <tr className="dark:border-p1-green dark:bg-p1-deepdarkgreen border-b bg-white">
                          <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                            <div className="flex items-center">
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
                                htmlFor="checkbox "
                                className="text-p1-darkgreen dark:text-p1-green ms-2 text-sm font-medium"
                              ></label>
                            </div>
                          </th>
                          <td className="px-6 py-4">
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
                          <td className="px-6 py-4">Joan</td>
                          <td className="px-6 py-4 text-right"> 8888</td>
                          <td className="px-6 py-4 text-right"> 15 ETH</td>
                          <td className="px-6 py-4 text-right"> 0.25 ETH</td>
                          <td className="px-6 py-4 text-right"> 0.15 ETH</td>
                          <td className="px-6 py-4 text-right"> #77</td>
                          <td className="px-6 py-4 text-right"> Jon </td>
                          <td className="px-6 py-4 text-right"> 2h ago</td>
                          <td className="px-6 py-4 text-right"> Сделать предложение</td>
                        </tr>
                        <tr className="dark:border-p1-green dark:bg-p1-deepdarkgreen border-b bg-white">
                          <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                            <div className="flex items-center">
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
                                htmlFor="checkbox "
                                className="text-p1-darkgreen dark:text-p1-green ms-2 text-sm font-medium"
                              ></label>
                            </div>
                          </th>
                          <td className="px-6 py-4">
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
              </div>
            </details>
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Таблица 2
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  5 слолбцов
                </div>
              </summary>
              <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                <div className="flex justify-center pb-2">
                  <div>
                    <div className="border-p1-green bg-p2-white2 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan flex overflow-hidden rounded-2xl border px-4 py-3">
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

                {/* Таблица 2*/}
                <div className="justify-center place-self-center p-1 md:visible">
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="text-p1-darkgreen dark:text-p1-green w-full text-left text-xl">
                      <thead className="text-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green bg-gray-50 text-xs uppercase">
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
                        <tr className="dark:border-p1-green dark:bg-p1-deepdarkgreen border-b bg-white">
                          <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                            1
                          </th>
                          <td className="px-6 py-4">
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
                        <tr className="dark:border-p1-green dark:bg-p1-deepdarkgreen border-b bg-white">
                          <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                            2
                          </th>
                          <td className="px-6 py-4">
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
                        <tr className="dark:border-p1-green dark:bg-p1-deepdarkgreen border-b bg-white">
                          <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                            2
                          </th>
                          <td className="px-6 py-4">
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
              </div>
            </details>
          </div>
        </div>
      </div>

      <div id="3" className="pb-10"></div>
    </div>
  );
}
