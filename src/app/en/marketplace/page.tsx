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
  const [visibleArea1, setVisibleArea1] = useState(true);
  const [currentVisibleArea, setCurrentVisibleArea] = useState(2);
  const jumpPoints = ['1', '2', '3'];
  const { width } = useWindowDimensions();
  const cardWidth = 288;

  return (
    <div className="mx-auto w-full font-serif">
      <JumpButton points={jumpPoints} />

      <div>
        <div id="1"></div>
        <div className="h-1/6 bg-[url('/background/bgsky.png')] bg-cover bg-center p-2 dark:brightness-75">
          <div className="flex justify-center space-x-2"></div>
          <div className="grid grid-cols-2 justify-center p-1 md:justify-between">
            <div className="flex justify-start space-x-6"></div>

            {/* кошелек, профиль, корзина */}
            <div className="flex justify-end space-x-6 px-2 md:px-10">
              <div className="group relative inline-block">
                <div className="mx-auto justify-center">
                  <Image
                    className="size-10 rounded-lg p-1 ring-p1-green transition-all delay-75 duration-100 ease-in-out hover:bg-p1-white/50 hover:ring-2 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-deepdarkgreen"
                    width={480}
                    height={480}
                    src="/Logo/wallet-nft.png"
                    alt="Bordered avatar"
                  />

                  <div className="invisible absolute left-9 z-10 m-0.5 mt-2 w-72 -translate-x-1/2 rounded-xl bg-p1-white/30 bg-center p-4 text-gray-800 opacity-0 shadow-xl backdrop-blur-lg transition-all duration-100 group-hover:visible group-hover:border-opacity-70 group-hover:bg-opacity-30 group-hover:opacity-100 md:w-80">
                    <div className="rounded-md border-2 border-p1-darkgreen/50 bg-p1-cyan/100">
                      <div className="border-b border-p1-darkgreen p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-100 ease-in-out hover:bg-p1-white/50 hover:pl-6 hover:text-p1-deepdarkgreen md:px-3 dark:border-p1-deepdarkgreen">
                        <Link href="#" className="mx-auto flex flex-row justify-start">
                          <Image
                            className="size-6 self-center"
                            width={480}
                            height={480}
                            src="/Icon/wallet_connect.png"
                            alt="Bordered avatar"
                          />

                          <div className="self-center px-2">Connect Wallet </div>
                        </Link>
                      </div>
                      <div className="border-b border-p1-darkgreen p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-100 ease-in-out hover:bg-p1-white/50 hover:pl-6 hover:text-p1-deepdarkgreen md:px-3 dark:border-p1-deepdarkgreen">
                        <Link href="#" className="mx-auto flex flex-row justify-start">
                          <Image
                            className="size-6 self-center"
                            width={480}
                            height={480}
                            src="/Icon/wallet_disconnect_red.png"
                            alt="Bordered avatar"
                          />
                          <div className="self-center px-2"> Disconnect Wallet </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative inline-block">
                <div className="mx-auto justify-center">
                  <Image
                    className="size-10 rounded-full p-1 ring-p1-green transition-all delay-75 duration-100 ease-in-out hover:bg-p1-white/50 hover:ring-2 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-deepdarkgreen"
                    width={480}
                    height={480}
                    src="/Logo/user.png"
                    alt="Bordered avatar"
                  />

                  <div className="invisible absolute left-9 z-10 m-0.5 mt-2 w-72 -translate-x-1/2 rounded-xl bg-p1-white/30 bg-center p-4 text-gray-800 opacity-0 shadow-xl backdrop-blur-lg transition-all duration-100 group-hover:visible group-hover:border-opacity-70 group-hover:bg-opacity-30 group-hover:opacity-100 md:w-80">
                    <div className="rounded-md border-2 border-p1-darkgreen/50 bg-p1-cyan/100">
                      <div className="border-b border-p1-darkgreen p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-100 ease-in-out hover:bg-p1-white/50 hover:pl-6 hover:text-p1-deepdarkgreen md:px-3 dark:border-p1-deepdarkgreen">
                        <Link href="/profile" className="mx-auto flex flex-row justify-start">
                          <Image
                            className="size-6 self-center"
                            width={480}
                            height={480}
                            src="/Icon/NFT_user_green.png"
                            alt="Bordered avatar"
                          />

                          <div className="self-center px-2">Profile </div>
                        </Link>
                      </div>
                      <div className="border-b border-p1-darkgreen p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-100 ease-in-out hover:bg-p1-white/50 hover:pl-6 hover:text-p1-deepdarkgreen md:px-3 dark:border-p1-deepdarkgreen">
                        <Link href="/mynfts" className="mx-auto flex flex-row justify-start">
                          <Image
                            className="size-6 self-center"
                            width={480}
                            height={480}
                            src="/Icon/NFT-col.png"
                            alt="Bordered avatar"
                          />
                          <div className="self-center px-2"> My NFT </div>
                        </Link>
                      </div>
                      <div className="border-b border-p1-darkgreen p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-100 ease-in-out hover:bg-p1-white/50 hover:pl-6 hover:text-p1-deepdarkgreen md:px-3 dark:border-p1-deepdarkgreen">
                        <Link href="#" className="mx-auto flex flex-row justify-start">
                          <Image
                            className="size-6 self-center"
                            width={480}
                            height={480}
                            src="/Icon/heart_green.png"
                            alt="heart"
                          />
                          <div className="self-center px-2"> Watchlist</div>
                        </Link>
                      </div>
                      <div className="border-b border-p1-darkgreen p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-100 ease-in-out hover:bg-p1-white/50 hover:pl-6 hover:text-p1-deepdarkgreen md:px-3 dark:border-p1-deepdarkgreen">
                        <Link href="#" className="mx-auto flex flex-row justify-start">
                          <Image
                            className="size-6 self-center"
                            width={480}
                            height={480}
                            src="/Icon/hand_shake_green.png"
                            alt="Bordered avatar"
                          />
                          <div className="self-center px-2"> Deals</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-10">
                <div className="group relative inline-block">
                  <Link href="#" className="mx-auto">
                    <Image
                      className="size-10 rounded-lg p-1 ring-p1-green transition-all delay-75 duration-100 ease-in-out hover:bg-p1-white/50 hover:ring-2 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-deepdarkgreen"
                      width={480}
                      height={480}
                      src="/Icon/share_green.png"
                      alt="bt16"
                    />
                  </Link>
                </div>
              </div>
              <div>
                <Link href="#" className="mx-auto justify-center">
                  <Image
                    className="size-10 rounded-lg p-1 ring-p1-green transition-all delay-75 duration-100 ease-in-out hover:bg-p1-white/50 hover:ring-2 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-deepdarkgreen"
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
          <div>
            <div className="mx-auto flex w-72 overflow-hidden rounded-xl border-p1-green bg-p2-white2/50 px-4 py-3 backdrop-blur-lg md:-my-10 lg:w-80 xl:w-96">
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
                placeholder="Search"
                className="w-full bg-transparent text-xl text-gray-600 outline-none"
              />
            </div>
          </div>
          <div className="pb-6"> </div>

          {/* Слайдер коллекции 1 */}
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
                <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100/50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen/80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
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
                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Floor Price</p>
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
                <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100/50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen/80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
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
                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Floor Price</p>
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
                <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100/50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen/80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
                  <Link href="#" className="mx-auto justify-center">
                    <div className="grid w-full grid-cols-1 items-center gap-2 overflow-hidden rounded-lg xl:grid-cols-2">
                      <Image
                        width={480}
                        height={480}
                        src="/HeroNFT/TeamsMembers/TeamMember1.png"
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
                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Floor Price</p>
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
                <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100/50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen/80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
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
                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Floor Price</p>
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
                <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100/50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen/80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
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
                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Floor Price</p>
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
                <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100/50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen/80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
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
                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Floor Price</p>
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
                <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100/50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen/80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
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
                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Floor Price</p>
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
                <div className="group mx-auto mt-1 w-full scale-95 space-x-3 rounded-2xl border-2 border-p1-green bg-gray-100/50 object-cover p-1 transition-transform duration-300 hover:scale-100 md:p-2 dark:border-p1-cyan dark:bg-p1-deepdarkgreen/80 dark:text-p1-green dark:hover:border-p1-cyan dark:hover:text-p1-cyan dark:group-hover:border-p1-cyan">
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
                        <p className="text-sm text-p1-darkgreen dark:text-p1-cyan">Floor Price</p>
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
              <Link href="#" className="mx-auto w-80">
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
                  <p className="text-2xl font-thin md:px-10">Polygon</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid h-1/5 grid-cols-1 p-1 2xl:grid-cols-2">
            <div className="flex grid-flow-row auto-rows-max justify-start space-x-2 pt-2 md:space-x-2">
              <div>
                <p className="pt-1 text-xl font-thin md:px-10 md:text-2xl">Items: 10.000 </p>
              </div>
              <p className="pt-1 text-xl font-thin md:px-2 md:text-2xl">Created: Feb 2025 </p>
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
                <p className="text-xs font-semibold sm:text-sm md:text-2xl">3 690</p>
                <p>Owners</p>
              </div>
            </div>
          </div>
        </div>

        <div id="2"></div>
        <div className="flex justify-center space-x-2 pt-2">
          <div>
            <div className="mx-auto flex max-w-2xl overflow-hidden rounded-2xl border-2 border-p1-green bg-p2-white2 px-4 py-3 backdrop-blur-sm hover:border-p1-cyan focus:border-p1-cyan md:w-96 dark:bg-p1-deepdarkgreen dark:text-p1-cyan">
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
                placeholder="Search"
                className="w-full bg-transparent text-xl text-p1-deepdarkgreen outline-none dark:text-p1-cyan"
              />
            </div>
          </div>
        </div>
        {/* Items, Offers ... */}

        <div className="grid h-1/5 grid-cols-1 place-content-center p-1 text-sm sm:px-2 md:px-4 lg:grid-cols-2 lg:px-6 lg:text-base xl:px-2 xl:text-lg 2xl:px-10 2xl:text-xl">
          <div className="flex grid-flow-row auto-rows-max justify-center space-x-2 lg:justify-start xl:-my-16">
            <div>
              <div
                className="inline-flex w-full justify-center rounded-md pt-1 shadow-sm"
                role="group"
              >
                <button
                  data-target="area4"
                  className="inline-block w-max place-content-center rounded-l-xl border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  id="toggleButton4"
                  onClick={() => {
                    setCurrentVisibleArea(4);
                  }}
                >
                  Items
                </button>
                <Link
                  href="#"
                  className="inline-block w-max place-content-center border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                >
                  Offers
                </Link>
                <button
                  data-target="area7"
                  className="inline-block w-max place-content-center border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  id="toggleButton7"
                  onClick={() => {
                    setCurrentVisibleArea(7);
                  }}
                >
                  Analitics
                </button>

                <button
                  data-target="area9"
                  className="inline-block w-max place-content-center border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  id="toggleButton9"
                  onClick={() => {
                    setCurrentVisibleArea(9);
                  }}
                >
                  Activity
                </button>

                <form className="inline-block w-max place-content-center rounded-r-xl border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan">
                  <label htmlFor="price" className="block"></label>
                  <select
                    id="price"
                    className="mx-auto flex overflow-hidden rounded-r-xl bg-p1-white hover:border-opacity-15 hover:bg-p1-green/25 hover:text-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green dark:accent-p1-darkgreen dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan"
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

          <div className="flex flex-auto grid-flow-row auto-rows-max justify-center space-x-8 lg:justify-end xl:-my-16">
            <div>
              <div
                className="inline-flex w-full flex-auto justify-center rounded-md pt-1 shadow-sm"
                role="group"
              >
                <Link
                  href="#"
                  className="inline-block w-max place-content-center rounded-l-xl border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                >
                  All
                </Link>
                <Link
                  href="#"
                  className="inline-block w-max place-content-center border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                >
                  Listed
                </Link>
                <Link
                  href="#"
                  className="inline-block w-max place-content-center border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                >
                  On Auction
                </Link>

                <Link
                  href="#"
                  className="inline-block w-max place-content-center rounded-r-xl border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                >
                  Has Offers
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* иконки ... */}

        <div className="grid grid-cols-2 justify-between p-1 md:grid-cols-2 2xl:grid-cols-2">
          <div className="flex justify-start space-x-1 md:px-10">
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
                  src="/Icon/i2.png"
                  alt="bt2"
                />
              </button>
            </div>
            <span className="relative flex size-3 pt-4">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-p1-green opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-p1-green"></span>
            </span>
            <div className="place-content-center text-sm text-p1-darkgreen md:text-xl dark:text-p1-green">
              Live
            </div>
            <div className="flex grid-flow-row auto-rows-max justify-start space-x-2"></div>
            <div className="place-content-center">
              <Link href="#" className="text-sm text-p1-darkgreen md:text-xl dark:text-p1-green">
                100 results
              </Link>
            </div>
          </div>

          <div className="flex justify-end md:px-10">
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
                    src="/Icon/line.png"
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
                    src="/Icon/i16.png"
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
                    src="/Icon/i9.png"
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
                    src="/Icon/i4.png"
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
                    src="/Icon/i3.png"
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
                    src="/Icon/i1.png"
                    alt="bt1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-4"> </div>

        <div className="flex max-w-full place-content-center gap-2 px-6">
          {/* ... левый блок */}
          <div id="area1" className={`w-3/12  gap-2 pt-2 ${visibleArea1 == true ? '' : 'hidden'}`}>
            <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
              <details className="transition-all delay-75 duration-300 ease-in-out">
                <summary className="relative flex cursor-pointer justify-start py-2 text-p1-darkgreen transition-all delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan">
                  <div className="place-content-center px-4">Price</div>
                </summary>
                <div className="pt-1 text-center text-p1-darkgreen lg:p-2 dark:text-p1-green">
                  <form className="inline-block w-full place-content-center pb-2 text-center text-p1-darkgreen hover:text-p1-darkgreen focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan">
                    <label htmlFor="price" className="block w-full"></label>
                    <select
                      id="price"
                      className="mx-auto flex w-full overflow-hidden border-t border-p1-green bg-p1-white/50 p-1 text-center hover:border-p1-green hover:bg-p1-cyan/10 dark:bg-p1-deepdarkgreen dark:text-p1-green dark:accent-p1-darkgreen dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
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
                    <div>
                      <div>
                        <input
                          type="text"
                          id="price_min"
                          className="block w-full border-b border-p1-green bg-p1-white p-1 text-center text-sm lining-nums text-p1-darkgreen hover:bg-p2-white2 focus:border-p1-darkgreen focus:ring-p1-darkgreen md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan dark:focus:border-p1-green dark:focus:ring-p1-cyan"
                          placeholder="Min"
                          required
                        />
                      </div>
                    </div>
                    <div className="place-content-center px-2">to</div>
                    <div>
                      <div>
                        <input
                          type="text"
                          id="price_max"
                          className="block w-full border-b border-p1-green bg-p1-white p-1 text-center text-sm lining-nums text-p1-darkgreen hover:bg-p2-white2 focus:border-p1-darkgreen focus:ring-p1-darkgreen md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan dark:focus:border-p1-green dark:focus:ring-p1-cyan"
                          placeholder="Max"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="relative flex place-content-center rounded-b-xl border border-p1-green bg-p1-white p-2 text-p1-darkgreen transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-cyan/10 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                    >
                      <div className="px-4">Apply</div>
                    </Link>
                  </div>
                </div>
              </details>
            </div>

            <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen transition-all delay-75 duration-300 ease-in-out hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
              <details>
                <summary className="relative flex cursor-pointer justify-start py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan">
                  <div className="place-content-center px-4">Rarity rank</div>
                </summary>
                <div className="pt-1 text-center text-p1-darkgreen lg:p-2 dark:text-p1-green">
                  <div className="inline-flex space-x-1 pb-2 md:space-x-2 xl:space-x-4 2xl:space-x-10">
                    <div>
                      <div>
                        <input
                          type="text"
                          id="price_min"
                          className="block w-full border-b border-p1-green bg-p1-white p-1 text-center text-sm lining-nums text-p1-darkgreen hover:bg-p2-white2 focus:border-p1-darkgreen focus:ring-p1-darkgreen md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan dark:focus:border-p1-green dark:focus:ring-p1-cyan"
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
                          className="block w-full border-b border-p1-green bg-p1-white p-1 text-center text-sm lining-nums text-p1-darkgreen hover:bg-p2-white2 focus:border-p1-darkgreen focus:ring-p1-darkgreen md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan dark:focus:border-p1-green dark:focus:ring-p1-cyan"
                          placeholder="Max"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="relative flex place-content-center rounded-b-xl border border-p1-green bg-p1-white p-2 text-p1-darkgreen transition-all duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-cyan/10 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                    >
                      <div className="px-4">Apply</div>
                    </Link>
                  </div>
                </div>
              </details>
            </div>

            {/* Тraits*/}
            <div className="w-full place-content-center px-6 py-4 text-xl font-bold text-p1-darkgreen dark:text-p1-green">
              Traits
            </div>
            <div>
              <div className="h-96 w-full resize-y snap-y scroll-mt-4 place-self-start overflow-auto scroll-smooth">
                <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                  <details>
                    <summary className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan">
                      <div className="place-content-center px-4">Slogan</div>
                      <div className="place-content-center px-4">8</div>
                    </summary>
                    <div className="pt-1 text-center text-p1-darkgreen dark:text-p1-green">
                      <div className="flex justify-center pb-2">
                        <div>
                          <div className="flex overflow-hidden rounded-2xl border border-p1-green bg-p2-white2 px-4 py-3 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan">
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
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_ETH"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Always a champion
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">46</div>
                      </div>

                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_POL"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Drift till I die
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">46</div>
                      </div>
                    </div>
                  </details>
                </div>

                <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                  <details>
                    <summary className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan">
                      <div className="place-content-center px-4">Background</div>
                      <div className="place-content-center px-4">46</div>
                    </summary>
                    <div className="pt-1 text-center text-p1-darkgreen dark:text-p1-green">
                      <div className="flex justify-center pb-2">
                        <div>
                          <div className="flex overflow-hidden rounded-2xl border border-p1-green bg-p2-white2 px-4 py-3 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan">
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
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_ETH"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Aquamarine
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">44</div>
                      </div>
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_POL"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Sky Blue
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">46</div>
                      </div>
                    </div>
                  </details>
                </div>

                <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                  <details>
                    <summary className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan">
                      <div className="place-content-center px-4">Skin</div>
                      <div className="place-content-center px-4">8</div>
                    </summary>
                    <div className="pt-1 text-center text-p1-darkgreen dark:text-p1-green">
                      <div className="flex justify-center pb-2">
                        <div>
                          <div className="flex overflow-hidden rounded-2xl border border-p1-green bg-p2-white2 px-4 py-3 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan">
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
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_ETH"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Asian
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">2345</div>
                      </div>
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_POL"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Arab
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">1256</div>
                      </div>
                    </div>
                  </details>
                </div>

                <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                  <details>
                    <summary className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan">
                      <div className="place-content-center px-4">Eyes</div>
                      <div className="place-content-center px-4">8</div>
                    </summary>
                    <div className="pt-1 text-center text-p1-darkgreen dark:text-p1-green">
                      <div className="flex justify-center pb-2">
                        <div>
                          <div className="flex overflow-hidden rounded-2xl border border-p1-green bg-p2-white2 px-4 py-3 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan">
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
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_ETH"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Normal
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">2345</div>
                      </div>
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_POL"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Kind
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">1256</div>
                      </div>
                    </div>
                  </details>
                </div>

                <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                  <details>
                    <summary className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan">
                      <div className="place-content-center px-4">Mouth</div>
                      <div className="place-content-center px-4">16</div>
                    </summary>
                    <div className="pt-1 text-center text-p1-darkgreen dark:text-p1-green">
                      <div className="flex justify-center pb-2">
                        <div>
                          <div className="flex overflow-hidden rounded-2xl border border-p1-green bg-p2-white2 px-4 py-3 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan">
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
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_ETH"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Neutral
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">4564</div>
                      </div>
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_POL"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Sad
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">1256</div>
                      </div>
                    </div>
                  </details>
                </div>

                <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                  <details>
                    <summary className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan">
                      <div className="place-content-center px-4">Nose</div>
                      <div className="place-content-center px-4">4</div>
                    </summary>
                    <div className="pt-1 text-center text-p1-darkgreen dark:text-p1-green">
                      <div className="flex justify-center pb-2">
                        <div>
                          <div className="flex overflow-hidden rounded-2xl border border-p1-green bg-p2-white2 px-4 py-3 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan">
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
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_ETH"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Normal
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">1234</div>
                      </div>
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_POL"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Bulbous
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">987</div>
                      </div>
                    </div>
                  </details>
                </div>

                <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                  <details>
                    <summary className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan">
                      <div className="place-content-center px-4">Earring</div>
                      <div className="place-content-center px-4">7</div>
                    </summary>
                    <div className="pt-1 text-center text-p1-darkgreen dark:text-p1-green">
                      <div className="flex justify-center pb-2">
                        <div>
                          <div className="flex overflow-hidden rounded-2xl border border-p1-green bg-p2-white2 px-4 py-3 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan">
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
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_ETH"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          No Earring
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">7356</div>
                      </div>
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_POL"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Gold Earring
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">369</div>
                      </div>
                    </div>
                  </details>
                </div>

                <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                  <details>
                    <summary className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan">
                      <div className="place-content-center px-4">Eye pads</div>
                      <div className="place-content-center px-4">3</div>
                    </summary>
                    <div className="pt-1 text-center text-p1-darkgreen dark:text-p1-green">
                      <div className="flex justify-center pb-2">
                        <div>
                          <div className="flex overflow-hidden rounded-2xl border border-p1-green bg-p2-white2 px-4 py-3 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan">
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
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_ETH"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          No Eye pads
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">9896</div>
                      </div>
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_POL"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Bitcoin Pads
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">369</div>
                      </div>
                    </div>
                  </details>
                </div>

                <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                  <details>
                    <summary className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan">
                      <div className="place-content-center px-4">Shaving</div>
                      <div className="place-content-center px-4">5</div>
                    </summary>
                    <div className="pt-1 text-center text-p1-darkgreen dark:text-p1-green">
                      <div className="flex justify-center pb-2">
                        <div>
                          <div className="flex overflow-hidden rounded-2xl border border-p1-green bg-p2-white2 px-4 py-3 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan">
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
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_ETH"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Clean-Shaven
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">5678</div>
                      </div>
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_POL"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Mustache & Beard
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">789</div>
                      </div>
                    </div>
                  </details>
                </div>

                <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                  <details>
                    <summary className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan">
                      <div className="place-content-center px-4">Face accessory</div>
                      <div className="place-content-center px-4">23</div>
                    </summary>
                    <div className="pt-1 text-center text-p1-darkgreen dark:text-p1-green">
                      <div className="flex justify-center pb-2">
                        <div>
                          <div className="flex overflow-hidden rounded-2xl border border-p1-green bg-p2-white2 px-4 py-3 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan">
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
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_ETH"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          No Face Accessory
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">6780</div>
                      </div>
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_POL"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Biege Balaclava
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">789</div>
                      </div>
                    </div>
                  </details>
                </div>

                <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                  <details>
                    <summary className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan">
                      <div className="place-content-center px-4">Clothes</div>
                      <div className="place-content-center px-4">179</div>
                    </summary>
                    <div className="pt-1 text-center text-p1-darkgreen dark:text-p1-green">
                      <div className="flex justify-center pb-2">
                        <div>
                          <div className="flex overflow-hidden rounded-2xl border border-p1-green bg-p2-white2 px-4 py-3 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan">
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
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_ETH"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          No Clothes
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">55</div>
                      </div>
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_POL"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Brown & Flesh Bomber
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">54</div>
                      </div>
                    </div>
                  </details>
                </div>

                <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                  <details>
                    <summary className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan">
                      <div className="place-content-center px-4">Head</div>
                      <div className="place-content-center px-4">215</div>
                    </summary>
                    <div className="pt-1 text-center text-p1-darkgreen dark:text-p1-green">
                      <div className="flex justify-center pb-2">
                        <div>
                          <div className="flex overflow-hidden rounded-2xl border border-p1-green bg-p2-white2 px-4 py-3 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan">
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
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_ETH"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Bald
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">125</div>
                      </div>
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_POL"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Biege Closed Tinted Racing Helmet
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">21</div>
                      </div>
                    </div>
                  </details>
                </div>

                <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                  <details>
                    <summary className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan">
                      <div className="place-content-center px-4">Extra</div>
                      <div className="place-content-center px-4">5</div>
                    </summary>
                    <div className="pt-1 text-center text-p1-darkgreen dark:text-p1-green">
                      <div className="flex justify-center pb-2">
                        <div>
                          <div className="flex overflow-hidden rounded-2xl border border-p1-green bg-p2-white2 px-4 py-3 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan">
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
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_ETH"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          No Extra
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">9876</div>
                      </div>
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_POL"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Albatross 1
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">23</div>
                      </div>
                    </div>
                  </details>
                </div>

                <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                  <details>
                    <summary className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan">
                      <div className="place-content-center px-4">Parrot</div>
                      <div className="place-content-center px-4">3</div>
                    </summary>
                    <div className="pt-1 text-center text-p1-darkgreen dark:text-p1-green">
                      <div className="flex justify-center pb-2">
                        <div>
                          <div className="flex overflow-hidden rounded-2xl border border-p1-green bg-p2-white2 px-4 py-3 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan">
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
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_ETH"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          No Parrot
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">9956</div>
                      </div>
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_POL"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Green Parrot
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">56</div>
                      </div>
                    </div>
                  </details>
                </div>

                <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                  <details>
                    <summary className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan">
                      <div className="place-content-center px-4">Cupid&apos;s arrow</div>
                      <div className="place-content-center px-4">2</div>
                    </summary>
                    <div className="pt-1 text-center text-p1-darkgreen dark:text-p1-green">
                      <div className="flex justify-center pb-2">
                        <div>
                          <div className="flex overflow-hidden rounded-2xl border border-p1-green bg-p2-white2 px-4 py-3 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan">
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
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_ETH"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          No Cupid&apos;s arrow
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">9986</div>
                      </div>
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_POL"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Cupid&apos;s arrow
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">14</div>
                      </div>
                    </div>
                  </details>
                </div>

                <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                  <details>
                    <summary className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan">
                      <div className="place-content-center px-4">Tatoo</div>
                      <div className="place-content-center px-4">2</div>
                    </summary>
                    <div className="pt-1 text-center text-p1-darkgreen dark:text-p1-green">
                      <div className="flex justify-center pb-2">
                        <div>
                          <div className="flex overflow-hidden rounded-2xl border border-p1-green bg-p2-white2 px-4 py-3 hover:border-p1-cyan focus:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan">
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
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_ETH"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          No Tatoo
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">9986</div>
                      </div>
                      <div className="flex place-content-between p-4">
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
                          id="3"
                          htmlFor="checkbox_POL"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Tatoo
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">14</div>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          {/* ... правый блок */}
          <div className="relative flex w-full max-w-full grid-flow-row flex-wrap justify-center gap-2 overflow-hidden pt-2">
            {/* ...Строки  Items Таблица */}
            <div
              id="area2"
              className={`inline-block h-96 w-max resize-y snap-y  snap-start place-self-start overflow-auto rounded border ${currentVisibleArea == 2 ? '' : 'hidden'}`}
            >
              <div className="relative snap-start scroll-smooth">
                <table className="text-left text-xl text-p1-darkgreen dark:text-p1-green">
                  <thead className="sticky top-0 z-20 border-b border-p1-green/30 bg-p1-white/100 text-xs uppercase text-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                    <tr>
                      <th scope="col" className="p-2 text-center">
                        Add to cart
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">
                          Item
                          <Link href="#"></Link>
                        </div>
                      </th>
                      <th scope="col" className="p-2">
                        <div className="flex items-center">
                          Collection
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
                          Name
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
                          Number#
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
                          Current Price
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
                          Best Offer
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
                          Last Sale
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
                          Rarity
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
                          Owner
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
                          Time Listed
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
                          Make Offer
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
                      <td className="p-2">RaceLads</td>
                      <td className="p-2">Joan</td>
                      <td className="p-2">8888</td>
                      <td className="p-2">15 ETH</td>
                      <td className="p-2">0.25 ETH</td>
                      <td className="p-2">0.15 ETH</td>
                      <td className="p-2">#77</td>
                      <td className="p-2">Jon </td>
                      <td className="p-2">2h ago</td>
                      <td className="p-2">
                        <div>
                          <Link
                            href="#"
                            className="inline-block w-max place-content-start rounded-xl border bg-p1-white py-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white lg:px-1 xl:px-1 2xl:px-2 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                          >
                            Сделать предложение
                          </Link>
                        </div>
                      </td>
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
                      <td className="p-2">RaceLads</td>
                      <td className="p-2">Joan</td>
                      <td className="p-2">8888</td>
                      <td className="p-2">15 ETH</td>
                      <td className="p-2">0.25 ETH</td>
                      <td className="p-2">0.15 ETH</td>
                      <td className="p-2">#77</td>
                      <td className="p-2">Jon </td>
                      <td className="p-2">2h ago</td>
                      <td className="p-2">
                        <div>
                          <Link
                            href="#"
                            className="inline-block w-max place-content-start rounded-xl border bg-p1-white py-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white lg:px-1 xl:px-1 2xl:px-2 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                          >
                            Сделать предложение
                          </Link>
                        </div>
                      </td>
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
                      <td className="p-2">RaceLads</td>
                      <td className="p-2">Joan</td>
                      <td className="p-2">8888</td>
                      <td className="p-2">15 ETH</td>
                      <td className="p-2">0.25 ETH</td>
                      <td className="p-2">0.15 ETH</td>
                      <td className="p-2">#77</td>
                      <td className="p-2">Jon </td>
                      <td className="p-2">2h ago</td>
                      <td className="p-2">
                        <div>
                          <Link
                            href="#"
                            className="inline-block w-max place-content-start rounded-xl border bg-p1-white py-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white lg:px-1 xl:px-1 2xl:px-2 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                          >
                            Сделать предложение
                          </Link>
                        </div>
                      </td>
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
                      <td className="p-2">RaceLads</td>
                      <td className="p-2">Joan</td>
                      <td className="p-2">8888</td>
                      <td className="p-2">15 ETH</td>
                      <td className="p-2">0.25 ETH</td>
                      <td className="p-2">0.15 ETH</td>
                      <td className="p-2">#77</td>
                      <td className="p-2">Jon </td>
                      <td className="p-2">2h ago</td>
                      <td className="p-2">
                        <div>
                          <Link
                            href="#"
                            className="inline-block w-max place-content-start rounded-xl border bg-p1-white py-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white lg:px-1 xl:px-1 2xl:px-2 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                          >
                            Сделать предложение
                          </Link>
                        </div>
                      </td>
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
                      <td className="p-2">RaceLads</td>
                      <td className="p-2">Joan</td>
                      <td className="p-2"> 8888</td>
                      <td className="p-2">15 ETH</td>
                      <td className="p-2">0.25 ETH</td>
                      <td className="p-2">0.15 ETH</td>
                      <td className="p-2">#77</td>
                      <td className="p-2">Jon </td>
                      <td className="p-2">2h ago</td>
                      <td className="p-2">
                        <div>
                          <Link
                            href="#"
                            className="inline-block w-max place-content-start rounded-xl border bg-p1-white py-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white lg:px-1 xl:px-1 2xl:px-2 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                          >
                            Сделать предложение
                          </Link>
                        </div>
                      </td>
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
                      <td className="p-2">RaceLads</td>
                      <td className="p-2">Joan</td>
                      <td className="p-2">8888</td>
                      <td className="p-2">15 ETH</td>
                      <td className="p-2">0.25 ETH</td>
                      <td className="p-2">0.15 ETH</td>
                      <td className="p-2">#77</td>
                      <td className="p-2">Jon </td>
                      <td className="p-2">2h ago</td>
                      <td className="p-2">
                        <div>
                          <Link
                            href="#"
                            className="inline-block w-max place-content-start rounded-xl border bg-p1-white py-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white lg:px-1 xl:px-1 2xl:px-2 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                          >
                            Сделать предложение
                          </Link>
                        </div>
                      </td>
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
                      <td className="p-2">RaceLads</td>
                      <td className="p-2">Joan</td>
                      <td className="p-2">8888</td>
                      <td className="p-2">15 ETH</td>
                      <td className="p-2">0.25 ETH</td>
                      <td className="p-2">0.15 ETH</td>
                      <td className="p-2">#77</td>
                      <td className="p-2">Jon </td>
                      <td className="p-2">2h ago</td>
                      <td className="p-2">
                        <div>
                          <Link
                            href="#"
                            className="inline-block w-max place-content-start rounded-xl border bg-p1-white py-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white lg:px-1 xl:px-1 2xl:px-2 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                          >
                            Сделать предложение
                          </Link>
                        </div>
                      </td>
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
                      <td className="p-2">RaceLads</td>
                      <td className="p-2">Joan</td>
                      <td className="p-2">8888</td>
                      <td className="p-2">15 ETH</td>
                      <td className="p-2">0.25 ETH</td>
                      <td className="p-2">0.15 ETH</td>
                      <td className="p-2">#77</td>
                      <td className="p-2">Jon </td>
                      <td className="p-2">2h ago</td>
                      <td className="p-2">
                        <div>
                          <Link
                            href="#"
                            className="inline-block w-max place-content-start rounded-xl border bg-p1-white py-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white lg:px-1 xl:px-1 2xl:px-2 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                          >
                            Сделать предложение
                          </Link>
                        </div>
                      </td>
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
                      <td className="p-2">RaceLads</td>
                      <td className="p-2">Joan</td>
                      <td className="p-2">8888</td>
                      <td className="p-2">15 ETH</td>
                      <td className="p-2">0.25 ETH</td>
                      <td className="p-2">0.15 ETH</td>
                      <td className="p-2">#77</td>
                      <td className="p-2">Jon </td>
                      <td className="p-2">2h ago</td>
                      <td className="p-2">
                        <div>
                          <Link
                            href="#"
                            className="inline-block w-max place-content-start rounded-xl border bg-p1-white py-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white lg:px-1 xl:px-1 2xl:px-2 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                          >
                            Сделать предложение
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ...Строки  Таблица Activity*/}
            <div
              id="area9"
              className={`inline-block  size-max  place-self-start overflow-auto rounded border ${currentVisibleArea == 9 ? '' : 'hidden'}`}
            >
              <div className="columns-1 gap-24 md:columns-2 dark:border-p1-green">
                <div className="relative sm:rounded-lg">
                  <table className="text-left text-xl text-p1-darkgreen dark:text-p1-green">
                    <thead className="sticky top-0 z-10 border-b-2 border-p1-green/20 bg-p1-white text-xs uppercase text-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                      <tr>
                        <th scope="col" className="p-2">
                          Rank
                        </th>
                        <th scope="col" className="p-2">
                          <div className="flex w-32 items-center">Image</div>
                        </th>
                        <th scope="col" className="p-2">
                          <div className="flex items-center">
                            Collection
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
                            Floor price
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
                            Volume
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
                    <tbody>
                      <tr className="border-b-2 bg-p1-white hover:bg-p1-cyan/5 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:text-p1-cyan">
                        <td className="px-4 py-2 lining-nums">1</td>
                        <td className="p-2">
                          <div className="relative">
                            <Link href="/card" className="mx-auto justify-center">
                              <Image
                                width={500}
                                height={500}
                                src="/HeroNFT/RaceLads/RaceLads1.png"
                                alt="RaceLads"
                                className="size-16 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                              />
                            </Link>
                          </div>
                        </td>
                        <td className="px-6 py-4">RaceLads</td>
                        <td className="px-6 py-4 lining-nums">12.3</td>
                        <td className="px-6 py-4 text-right lining-nums"> 8888</td>
                      </tr>
                      <tr className="border-b-2 bg-p1-white hover:bg-p1-cyan/5 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:text-p1-cyan">
                        <td className="px-4 py-2 lining-nums">2</td>
                        <td className="p-2">
                          <div className="relative">
                            <Link href="/card" className="mx-auto justify-center">
                              <Image
                                width={500}
                                height={500}
                                src="/HeroNFT/Drivers/Driver4.png"
                                alt="Drivers"
                                className="size-16 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                              />
                            </Link>
                          </div>
                        </td>
                        <td className="px-6 py-4">Drivers</td>
                        <td className="px-6 py-4 lining-nums">12.3</td>
                        <td className="px-6 py-4 text-right lining-nums"> 8888</td>
                      </tr>
                      <tr className="border-b-2 bg-p1-white hover:bg-p1-cyan/5 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:text-p1-cyan">
                        <td className="px-4 py-2 lining-nums">3</td>
                        <td className="p-2">
                          <div className="relative">
                            <Link href="/card" className="mx-auto justify-center">
                              <Image
                                width={500}
                                height={500}
                                src="/HeroNFT/TeamsMembers/TeamMember1.png"
                                alt="RaceLads"
                                className="size-16 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                              />
                            </Link>
                          </div>
                        </td>
                        <td className="px-6 py-4">Team's members</td>
                        <td className="px-6 py-4 lining-nums">12.3</td>
                        <td className="px-6 py-4 text-right lining-nums"> 8888</td>
                      </tr>
                      <tr className="border-b-2 bg-p1-white hover:bg-p1-cyan/5 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:text-p1-cyan">
                        <td className="px-4 py-2 lining-nums">4</td>
                        <td className="p-2">
                          <div className="relative">
                            <Link href="/card" className="mx-auto justify-center">
                              <Image
                                width={500}
                                height={500}
                                src="/HeroNFT/Collectors/Collector1.png"
                                alt="Collectors"
                                className="size-16 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                              />
                            </Link>
                          </div>
                        </td>
                        <td className="px-6 py-4">Collectors</td>
                        <td className="px-6 py-4 lining-nums">12.3</td>
                        <td className="px-6 py-4 text-right lining-nums"> 8888</td>
                      </tr>
                      <tr className="border-b-2 bg-p1-white hover:bg-p1-cyan/5 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:text-p1-cyan">
                        <td className="px-4 py-2 lining-nums">5</td>
                        <td className="p-2">
                          <div className="relative">
                            <Link href="/card" className="mx-auto justify-center">
                              <Image
                                width={500}
                                height={500}
                                src="/Cars/Car.png"
                                alt="Cars"
                                className="size-16 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                              />
                            </Link>
                          </div>
                        </td>
                        <td className="px-6 py-4">Cars</td>
                        <td className="px-6 py-4 lining-nums">12.3</td>
                        <td className="px-6 py-4 text-right lining-nums"> 8888</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="relative sm:rounded-lg">
                  <table className="text-left text-xl text-p1-darkgreen dark:text-p1-green">
                    <thead className="sticky top-0 z-10 border-b-2 border-p1-green/20 bg-p1-white text-xs uppercase text-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                      <tr>
                        <th scope="col" className="p-2">
                          Rank
                        </th>
                        <th scope="col" className="p-2">
                          <div className="flex w-32 items-center">Image</div>
                        </th>
                        <th scope="col" className="p-2">
                          <div className="flex items-center">
                            Collection
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
                            Floor price
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
                            Volume
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
                    <tbody>
                      <tr className="border-b-2 bg-p1-white hover:bg-p1-cyan/5 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:text-p1-cyan">
                        <td className="px-4 py-2 lining-nums">1</td>
                        <td className="p-2">
                          <div className="relative">
                            <Link href="/card" className="mx-auto justify-center">
                              <Image
                                width={500}
                                height={500}
                                src="/HeroNFT/CustomLads/CustomLads1.png"
                                alt="RaceLads"
                                className="size-16 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                              />
                            </Link>
                          </div>
                        </td>
                        <td className="px-6 py-4">CustomLads</td>
                        <td className="px-6 py-4 lining-nums">12.3</td>
                        <td className="px-6 py-4 text-right lining-nums"> 8888</td>
                      </tr>
                      <tr className="border-b-2 bg-p1-white hover:bg-p1-cyan/5 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:text-p1-cyan">
                        <td className="px-4 py-2 lining-nums">2</td>
                        <td className="p-2">
                          <div className="relative">
                            <Link href="/card" className="mx-auto justify-center">
                              <Image
                                width={500}
                                height={500}
                                src="/Hero/Rewards.png"
                                alt="Rewards"
                                className="size-16 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                              />
                            </Link>
                          </div>
                        </td>
                        <td className="px-6 py-4">Drivers</td>
                        <td className="px-6 py-4 lining-nums">12.3</td>
                        <td className="px-6 py-4 text-right lining-nums"> 8888</td>
                      </tr>
                      <tr className="border-b-2 bg-p1-white hover:bg-p1-cyan/5 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:text-p1-cyan">
                        <td className="px-4 py-2 lining-nums">3</td>
                        <td className="p-2">
                          <div className="relative">
                            <Link href="/card" className="mx-auto justify-center">
                              <Image
                                width={500}
                                height={500}
                                src="/Licenses/Promoter Lic.png"
                                alt="Promoter Lic"
                                className="size-16 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                              />
                            </Link>
                          </div>
                        </td>
                        <td className="px-6 py-4">Promoter License</td>
                        <td className="px-6 py-4 lining-nums">12.3</td>
                        <td className="px-6 py-4 text-right lining-nums"> 8888</td>
                      </tr>
                      <tr className="border-b-2 bg-p1-white hover:bg-p1-cyan/5 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:text-p1-cyan">
                        <td className="px-4 py-2 lining-nums">4</td>
                        <td className="p-2">
                          <div className="relative">
                            <Link href="/card" className="mx-auto justify-center">
                              <Image
                                width={500}
                                height={500}
                                src="/Licenses/Local Lic.png"
                                alt="Local Lic"
                                className="size-16 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                              />
                            </Link>
                          </div>
                        </td>
                        <td className="px-6 py-4">Local License</td>
                        <td className="px-6 py-4 lining-nums">12.3</td>
                        <td className="px-6 py-4 text-right lining-nums"> 8888</td>
                      </tr>
                      <tr className="border-b-2 bg-p1-white hover:bg-p1-cyan/5 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:hover:text-p1-cyan">
                        <td className="px-4 py-2 lining-nums">5</td>
                        <td className="p-2">
                          <div className="relative">
                            <Link href="/card" className="mx-auto justify-center">
                              <Image
                                width={500}
                                height={500}
                                src="/Licenses/Global Lic.png"
                                alt="Global Lic"
                                className="size-16 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                              />
                            </Link>
                          </div>
                        </td>
                        <td className="px-6 py-4">Global License</td>
                        <td className="px-6 py-4 lining-nums">12.3</td>
                        <td className="px-6 py-4 text-right lining-nums"> 8888</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ... маленькие карточки  ... */}
            <div id="area3" className={`${currentVisibleArea == 3 ? '' : 'hidden'}`}>
              <div className="flex gap-4">
                <div className="group relative h-[14.5rem] w-40 place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                  <div>
                    <div className="group invisible absolute right-1 top-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
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
                        src="/HeroNFT/RaceLads/RaceLads1.png"
                        alt="RaceLads"
                        className="size-40 object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                      />
                    </Link>
                  </div>

                  <div className="w-full bg-p2-white2/100 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
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
                    <div className="absolute bottom-0 left-0 h-8 w-40 translate-y-full bg-p1-darkgreen/100 text-center text-p2-white2 shadow-sm shadow-p1-green transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p1-deepdarkgreen">
                      <div className="inline-flex h-8 w-40 justify-center text-sm" role="group">
                        <Link
                          href="#"
                          className="grid w-4/5 place-content-center rounded-bl-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-sm shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                        >
                          <div className="grid grid-cols-2 items-center justify-between gap-2">
                            <div className="text-xs leading-3">Buy:</div>
                            <div className="text-center text-xs leading-3">
                              <Image
                                className="relative inline-block w-3 px-0.5"
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
                          href="#"
                          className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                        >
                          <Image
                            className="inline-block size-5 bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
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

            {/* ... средние карточки  ... */}
            <div id="area4" className={`${currentVisibleArea == 4 ? '' : 'hidden'}`}>
              <div className="flex gap-4">
                <div className="group relative h-[21.5rem] w-60 place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                  <div>
                    <div className="group invisible absolute right-1 top-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
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

                    <div className="px-2 pb-12 pt-2">
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
                      <div className="text-left text-base font-thin"> Last sale: 1000 WETH</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="absolute bottom-0 left-0 h-[2.8rem] w-60 translate-y-full bg-p1-darkgreen/100 text-center text-p2-white2 shadow-sm shadow-p1-green transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p1-deepdarkgreen">
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
              </div>
            </div>

            {/* ... большие карточки  ... */}
            <div id="area5" className={`${currentVisibleArea == 5 ? '' : 'hidden'}`}>
              <div className="flex gap-4">
                <div className="group relative h-[28rem] w-80 place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                  <div>
                    <div className="group invisible absolute right-1 top-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
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
                        src="/HeroNFT/RaceLads/RaceLads1.png"
                        alt="RaceLads"
                        className="size-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                      />
                    </Link>
                  </div>

                  <div className="w-full bg-p2-white2/100 p-1 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
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
                    <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen/100 text-center text-p2-white2 shadow-sm shadow-p1-green transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p1-deepdarkgreen">
                      <div className="inline-flex h-12 w-80 justify-center text-sm" role="group">
                        <Link
                          href="#"
                          className="grid w-4/5 place-content-center rounded-bl-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-base shadow-lg shadow-p1-cyan transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                        >
                          <div className="flex items-center justify-between space-x-4">
                            <div className="text-xl leading-5">Buy:</div>
                            <p className="text-center text-lg leading-3">
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
                            className="inline-block size-7 bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
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

            {/* ... самые большие карточки  ... */}
            <div id="area6" className={`${currentVisibleArea == 6 ? '' : 'hidden'}`}>
              <div className="flex gap-4">
                <div className="group relative h-[39rem] w-[28rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                  <div>
                    <div className="group invisible absolute right-1 top-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
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
                        src="/HeroNFT/RaceLads/RaceLads1.png"
                        alt="RaceLads"
                        className="size-[28rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                      />
                    </Link>
                  </div>

                  <div className="w-full bg-p2-white2/100 p-1 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl group-hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green">
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
                    <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen/100 text-center text-p2-white2 shadow-sm shadow-p1-green transition-transform duration-500 ease-in-out hover:bg-p1-darkgreen group-hover:translate-y-0 dark:bg-p1-deepdarkgreen">
                      <div
                        className="inline-flex h-16 w-[28rem] justify-center text-sm"
                        role="group"
                      >
                        <Link
                          href="#"
                          className="grid w-4/5 place-content-center rounded-bl-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-base shadow-xl shadow-p1-cyan transition-all duration-300 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                        >
                          <div className="flex items-center justify-between space-x-4 pb-2">
                            <div className="text-2xl">Buy:</div>
                            <p className="text-center text-xl">
                              <Image
                                className="relative inline-block w-6 px-1"
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
                            className="inline-block size-9 bg-p1-darkgreen dark:bg-p1-deepdarkgreen dark:hover:bg-p1-deepdarkgreen"
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

            {/* ...  карточки ,без подписи  ... */}
            <div id="area8" className={`${currentVisibleArea == 8 ? '' : 'hidden'}`}>
              <div className="flex gap-4">
                <div className="group relative w-80 place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-300 hover:shadow-lg hover:shadow-p1-cyan group-hover:shadow-sm dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                  <div>
                    <div className="group invisible absolute right-1 top-1 z-10 inline-block duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
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
                        src="/HeroNFT/RaceLads/RaceLads1.png"
                        alt="RaceLads"
                        className="size-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ... Analitics  ... */}
            <div id="area7" className={`${currentVisibleArea == 7 ? '' : 'hidden'}`}>
              <div>
                <div className="grid h-1/5 grid-cols-1 place-content-center p-1 text-sm sm:px-2 md:px-4 lg:grid-cols-2 lg:px-6 lg:text-base xl:px-2 xl:text-lg 2xl:px-10 2xl:text-xl">
                  <div className="flex grid-flow-row auto-rows-max place-content-center space-x-2 lg:justify-start">
                    <div>
                      <div
                        className="inline-flex w-full justify-center rounded-md shadow-sm"
                        role="group"
                      >
                        <Link
                          href="#"
                          className="inline-block w-max place-content-center rounded-l-xl border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                        >
                          Все
                        </Link>
                        <Link
                          href="#"
                          className="inline-block w-max place-content-center border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                        >
                          RaceLads
                        </Link>

                        <Link
                          href="#"
                          className="inline-block w-max place-content-center border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                        >
                          Awards
                        </Link>
                        <Link
                          href="#"
                          className="inline-block w-max place-content-center border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                        >
                          Licenses
                        </Link>
                        <form className="inline-block w-max place-content-center rounded-r-xl border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan">
                          <label htmlFor="price" className="block w-full"></label>
                          <select
                            id="price"
                            className="mx-auto flex max-w-2xl overflow-hidden rounded-r-xl border-p1-darkgreen bg-p1-white hover:border-p1-darkgreen/15 hover:bg-p1-green/5 hover:text-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green dark:accent-p1-darkgreen dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan"
                            defaultValue={'DEFAULT'}
                          >
                            <option value="DEFAULT" disabled>
                              Все
                            </option>
                            <option value="Price_low_to_high">Все</option>
                            <option value="Price_high_to_low">RaceLads</option>
                            <option value="Recently_listedr">Drivers</option>
                            <option value="Best_offer">Team&apos;s Members</option>
                            <option value="Highest_last_sale">Collectors</option>
                            <option value="Recently_sold">Cars</option>

                            <option value="Most_viewed">CustomLads</option>

                            <option value="Most_favorited">Awards</option>
                            <option value="Ending_soon">Licenses</option>
                          </select>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-auto grid-flow-row auto-rows-max justify-center space-x-8 lg:justify-end">
                    <div>
                      <div
                        className="inline-flex w-full flex-auto justify-center rounded-md shadow-sm"
                        role="group"
                      >
                        <Link
                          href="#"
                          className="inline-block w-max place-content-center rounded-l-xl border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                        >
                          24H
                        </Link>

                        <Link
                          href="#"
                          className="inline-block w-max place-content-center border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                        >
                          7D
                        </Link>

                        <Link
                          href="#"
                          className="inline-block w-max place-content-center rounded-r-xl border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                        >
                          30D
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pb-4"></div>

              <div className="flex flex-wrap place-content-center object-left md:flex-nowrap md:space-x-2 md:pt-5">
                <div className="mb-4 bg-p1-white dark:bg-p1-deepdarkgreen">
                  <div className="flex flex-row place-content-around text-center">
                    <div className="grid grid-cols-1 gap-4 p-2 text-center text-p1-darkgreen md:text-xl lg:text-2xl xl:grid-cols-2 dark:text-p1-cyan">
                      <div className="mt-2 rounded-lg border-2 bg-p1-white p-2 text-p1-darkgreen dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                        <div className="flex flex-wrap md:flex-nowrap md:justify-between">
                          <div className="px-2 text-xl font-semibold md:pt-2 md:text-3xl">
                            Статистика
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

                      <div className="mt-2 rounded-lg border-2 bg-p1-white p-2 text-p1-darkgreen dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                        <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
                          <div className="px-2 text-xl font-semibold md:pt-2 md:text-3xl">
                            RaceLads
                          </div>
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
                            <div>Total</div>
                            <div>Owners</div>
                          </div>

                          <div className="m-2 aspect-video w-full rounded-3xl border border-p1-darkgreen">
                            <div className="grid h-48 grid-cols-2 place-content-center gap-4">
                              <div>RaceLads</div>
                              <div>RARITY</div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>

                              <div></div>
                              <div>FLOOR PRICE:</div>
                              <div>TOTAL RaceLads</div>
                            </div>
                          </div>
                          <div className="m-2 aspect-video w-full rounded-3xl border border-p1-darkgreen">
                            <div className="grid h-48 grid-cols-2 place-content-center gap-4">
                              <div>RaceLads</div>
                              <div>RARITY</div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>

                              <div></div>
                              <div>FLOOR PRICE:</div>
                              <div>TOTAL RaceLads</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-2 rounded-lg border-2 bg-p1-white p-2 text-p1-darkgreen dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                        <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
                          <div className="px-2 text-xl font-semibold md:pt-2 md:text-3xl">
                            Лучшие продажи
                          </div>
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

                      <div className="mt-2 rounded-lg border-2 bg-p1-white p-2 text-p1-darkgreen dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                        <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
                          <div className="px-2 text-xl font-semibold md:pt-2 md:text-3xl">
                            Последние объявления:
                          </div>
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

                      <div className="mt-2 rounded-lg border-2 bg-p1-white p-2 text-p1-darkgreen dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                        <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
                          <div className="px-2 text-xl font-semibold md:pt-2 md:text-3xl">
                            Последние продажи:
                          </div>
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

                      <div className="pb-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="3" className="pb-10"></div>
      </div>
    </div>
  );
}
