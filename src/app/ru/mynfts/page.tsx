'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useState } from 'react';
import { JumpButton } from '@/components/jumpButton';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

export default function Home() {
  const [check, setCheck] = useState(false);
  const jumpPoints = ['1', '2', '3'];

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

        {/* Навигация 2 */}

        <div className="flex justify-end space-x-6 px-2 pt-4 md:px-10">
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

        <div className="grid h-80 grid-cols-1 place-items-start p-1 md:grid-cols-1 xl:grid-cols-2">
          <div className="flex grid-flow-row auto-rows-max space-x-2 px-2 md:px-10">
            <Link href={'#'} className="mx-auto w-80">
              <Image
                className="border-p1-gray dark:ring-p1-darkgreen rounded-full border-4"
                width={1000}
                height={1000}
                src="/HeroNFT/RaceLads/RaceLads1.png"
                alt="Bordered avatar"
              />
            </Link>
          </div>
        </div>

        <div>
          <p className="text-3xl font-semibold md:px-10">Unnamed</p>
        </div>
        <div className="grid h-1/5 grid-cols-1 space-x-2 p-1 md:grid-cols-2">
          <div className="grid h-1/5 grid-cols-1 space-x-2 p-1 md:grid-cols-2">
            <div>
              <p className="font-thing text-2xl md:px-10">0 x6918...a442 </p>
            </div>

            <div>
              <p className="font-thing text-2xl md:px-10">Joined May 2024 </p>
            </div>
          </div>
        </div>

        <div className="grid h-1/5 grid-cols-1 p-1 2xl:grid-cols-2">
          <div className="flex grid-flow-row auto-rows-max justify-start space-x-2 pt-2 pb-4 text-center md:space-x-4">
            <div className="hover:bg-p1-green hover:bg-opacity-20 rounded-2xl">
              <Link href="#" className="">
                <p className="font-thing pt-1 text-xl lining-nums md:px-2 md:text-2xl">
                  Collected:
                </p>
                <p className="font-thing pt-1 text-xl lining-nums md:px-2 md:text-2xl">10.000 </p>
              </Link>
            </div>
            <div className="hover:bg-p1-green hover:bg-opacity-20 rounded-2xl">
              <Link href="#" className="">
                <p className="font-thing pt-1 text-xl lining-nums md:px-2 md:text-2xl">
                  Offers_made:
                </p>
                <p className="font-thing pt-1 text-xl lining-nums md:px-2 md:text-2xl">55 </p>
              </Link>
            </div>
            <div className="hover:bg-p1-green hover:bg-opacity-20 rounded-2xl">
              <Link href="#" className="">
                <p className="font-thing pt-1 text-xl lining-nums md:px-2 md:text-2xl">Deals: </p>
                <p className="font-thing pt-1 text-xl lining-nums md:px-2 md:text-2xl">23 </p>
              </Link>
            </div>
            <div className="hover:bg-p1-green hover:bg-opacity-20 rounded-2xl">
              <Link href="#" className="">
                <p className="font-thing pt-1 text-xl lining-nums md:px-2 md:text-2xl">Created: </p>
                <p className="font-thing pt-1 text-xl lining-nums md:px-2 md:text-2xl">9988 </p>
              </Link>
            </div>
            <div className="hover:bg-p1-green hover:bg-opacity-20 rounded-2xl">
              <Link href="#" className="">
                <p className="font-thing pt-1 text-xl lining-nums md:px-2 md:text-2xl">
                  Favorited:
                </p>
                <p className="font-thing pt-1 text-xl lining-nums md:px-2 md:text-2xl">77 </p>
              </Link>
            </div>
            <div className="hover:bg-p1-green hover:bg-opacity-20 rounded-2xl">
              <Link href="#" className="">
                <p className="font-thing pt-1 text-xl lining-nums md:px-2 md:text-2xl">Activity:</p>
                <p className="font-thing pt-1 text-xl lining-nums md:px-2 md:text-2xl">888 </p>
              </Link>
            </div>
          </div>

          <div className="flex grid-flow-row auto-rows-max justify-end space-x-2 pt-2 pb-4 text-center md:space-x-4">
            <div className="hover:bg-p1-green hover:bg-opacity-20 rounded-2xl">
              <Link href="#" className="">
                <p className="font-thing pt-1 text-xl lining-nums md:px-2 md:text-2xl">
                  Offers_received:
                </p>
                <p className="font-thing pt-1 text-xl lining-nums md:px-2 md:text-2xl">88 </p>
              </Link>
            </div>
            <div className="hover:bg-p1-green hover:bg-opacity-20 rounded-2xl">
              <Link href="#" className="">
                <p className="font-thing pt-1 text-xl lining-nums md:px-2 md:text-2xl">
                  Active_listings:
                </p>
                <p className="font-thing pt-1 text-xl lining-nums md:px-2 md:text-2xl">78 </p>
              </Link>
            </div>
            <div className="hover:bg-p1-green hover:bg-opacity-20 rounded-2xl">
              <Link href="#" className="">
                <p className="font-thing pt-1 text-xl lining-nums md:px-2 md:text-2xl">
                  Inactive_listings:
                </p>
                <p className="font-thing pt-1 text-xl lining-nums md:px-2 md:text-2xl">369 </p>
              </Link>
            </div>
            <div className="hover:bg-p1-green hover:bg-opacity-20 rounded-2xl">
              <Link href="#" className="">
                <p className="font-thing pt-1 text-xl lining-nums md:px-2 md:text-2xl">Hidden: </p>
                <p className="font-thing pt-1 text-xl lining-nums md:px-2 md:text-2xl">45 </p>
              </Link>
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
                Все
              </Link>
              <Link
                href="#"
                className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
              >
                RaceLads
              </Link>

              <Link
                href="#"
                className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
              >
                Awards
              </Link>
              <Link
                href="#"
                className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
              >
                Licenses
              </Link>
              <form className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-darkgreen focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center rounded-xl border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl">
                <label htmlFor="price" className="block w-full"></label>
                <select
                  id="price"
                  className="border-p1-darkgreen bg-opacity-50 dark:bg-p1-deepdarkgreen dark:text-p1-green dark:accent-p1-darkgreen dark:hover:text-p1-cyan mx-auto flex max-w-2xl overflow-hidden"
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
          <div className="">
            <div
              className="inline-flex w-full flex-auto justify-center rounded-md pt-1 shadow-sm"
              role="group"
            >
              <Link
                href="#"
                className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-max place-content-center rounded-l-xl border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
              >
                24H
              </Link>

              <Link
                href="#"
                className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-max place-content-center border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
              >
                7D
              </Link>

              <Link
                href="#"
                className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-max place-content-center rounded-r-xl border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
              >
                30D
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
                  Витрина Showcase
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
                    RaceLads
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
                    Awards
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
                  Для продажи For Sale
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
                    NFT1
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
                    NFT2
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
                  Awards
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  88
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
                    Gold
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
                    Silver
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">1256</div>
                </div>
              </div>
            </details>
          </div>

          <div className="text-p1-darkgreen dark:text-p1-green w-full place-content-center px-6 pt-4 pb-4 text-xl">
            For Promoter/Local/Global licenses
          </div>

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Logo спонсоров
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
                  Стараница награждения
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
                    RaceLads
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
                    Awards
                  </label>
                  <div className="text-p1-darkgreen dark:text-p1-green px-4">46</div>
                </div>
              </div>
            </details>
          </div>
        </div>

        <div className="flex w-9/12 grid-flow-row flex-wrap place-content-start gap-2 pt-2">
          {/* ... карточка 1 ...15x10 */}

          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
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

          {/* ...Таблица 1... */}
          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
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
                          <td className="px-6 py-4 text-right">
                            <Link
                              href="#"
                              className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-max place-content-center rounded-xl border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
                            >
                              Сделать предложение
                            </Link>
                          </td>
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
                          <td className="px-6 py-4 text-right">
                            <Link
                              href="#"
                              className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-max place-content-center rounded-xl border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
                            >
                              Сделать предложение
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </details>
          </div>

          {/* ...Таблица 2... */}
          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
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

          {/* ....Promoter/Local/Global Licenses ... Добавить лого спонсора.. */}
          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Promoter/Local/Global Licenses Добавить лого спонсора
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  111
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

                {/* Добавить лого спорсора 2*/}
                <div className="pt-2 text-left">
                  Информация о спонсорах мероприятия для размещения на Наградах
                </div>

                <div className="flex flex-row justify-start pb-5">
                  <div className="md:basis-5/5">
                    <div className="pt-2 text-left">
                      Эмблемы и категории спонсоров
                      <div className="place-items-centre mt-5 grid grid-cols-2 gap-2 p-4 md:grid-cols-1 xl:grid-cols-4">
                        <div className="row-span-2 md:col-span-2">
                          <div>
                            <label
                              htmlFor="year"
                              className="text-p1-darkgreen dark:text-p1-green block text-left text-sm font-medium"
                            >
                              Год
                            </label>
                            <input
                              type="text"
                              id="year"
                              className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
                              placeholder="Год"
                              required
                            />
                          </div>
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
                        </div>
                        <div className="text-base">
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
                                  <span className="font-regular">&quot;Логотип спонсора&quot;</span>
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
                          <Link
                            href="#"
                            className="border-p1-darkgreen bg-p1-white text-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center rounded-xl border-2 p-2 text-center text-base shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
                          >
                            Добавить
                          </Link>
                        </div>

                        <Link
                          href="#"
                          className="border-p1-darkgreen bg-p1-white text-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center rounded-xl border-2 p-2 text-center text-base shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
                        >
                          +
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex grid-flow-row gap-4">
                  <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                    {/* ... карточка 1 ...15x10 */}
                    <div className="group hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen relative h-[14.5rem] w-[10rem] place-self-center overflow-hidden rounded-xl bg-white object-cover lining-nums shadow-lg transition-transform duration-300 group-hover:shadow-sm hover:shadow-lg">
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
                            src="/Hero/Rewards.png"
                            alt="Cup1"
                            className="h-[10rem] w-[10rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                          />
                        </Link>
                      </div>

                      <div className="bg-p2-white2 bg-opacity-100 text-p1-darkgreen group-hover:bg-opacity-100 group-hover:shadow-p2-red dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green w-full transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl">
                        <div className="flex items-center justify-between">
                          <div className="px-1 pt-1 text-left text-sm font-bold">Award</div>
                          <div className="px-1 pt-1 text-left text-sm font-bold"># 12345</div>
                        </div>

                        <div className="px-1 pt-1 pb-12">
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
                        <div className="bg-p2-red text-p2-white2 shadow-p2-red hover:bg-p1-darkgreen dark:bg-p2-red absolute bottom-0 left-0 h-[2rem] w-[10rem] translate-y-full text-center opacity-100 shadow-lg transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                          <div
                            className="inline-flex h-[2rem] w-[10rem] justify-center text-sm"
                            role="group"
                          >
                            <Link
                              href="#"
                              className="border-p1-darkgreen bg-p2-orange shadow-p2-red hover:border-p1-cyan hover:bg-p2-red hover:text-p1-white hover:shadow-p2-red dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red dark:focus:text-p1-cyan grid w-full place-content-center rounded-bl-xl border text-center text-sm shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl md:text-3xl"
                            >
                              <div className="grid grid-cols-2 items-center justify-between gap-2">
                                <div className="text-base leading-2">Delite</div>
                                <div className="text-center text-xs leading-3">
                                  <Image
                                    className="relative inline-block w-5 px-0.5"
                                    layout="intrinsic"
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
                  <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                    {/* ... карточка 1 ...15x10 */}
                    <div className="group hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen relative h-[14.5rem] w-[10rem] place-self-center overflow-hidden rounded-xl bg-white object-cover lining-nums shadow-lg transition-transform duration-300 group-hover:shadow-sm hover:shadow-lg">
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
                            src="/Hero/Rewards.png"
                            alt="Cup1"
                            className="h-[10rem] w-[10rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                          />
                        </Link>
                      </div>

                      <div className="bg-p2-white2 bg-opacity-100 text-p1-darkgreen group-hover:bg-opacity-100 group-hover:shadow-p2-red dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green w-full transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl">
                        <div className="flex items-center justify-between">
                          <div className="px-1 pt-1 text-left text-sm font-bold">Award</div>
                          <div className="px-1 pt-1 text-left text-sm font-bold"># 12345</div>
                        </div>

                        <div className="px-1 pt-1 pb-12">
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
                        <div className="bg-p2-red text-p2-white2 shadow-p2-red hover:bg-p1-darkgreen dark:bg-p2-red absolute bottom-0 left-0 h-[2rem] w-[10rem] translate-y-full text-center opacity-100 shadow-lg transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                          <div
                            className="inline-flex h-[2rem] w-[10rem] justify-center text-sm"
                            role="group"
                          >
                            <Link
                              href="#"
                              className="border-p1-darkgreen bg-p2-orange shadow-p2-red hover:border-p1-cyan hover:bg-p2-red hover:text-p1-white hover:shadow-p2-red dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red dark:focus:text-p1-cyan grid w-full place-content-center rounded-bl-xl border text-center text-sm shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl md:text-3xl"
                            >
                              <div className="grid grid-cols-2 items-center justify-between gap-2">
                                <div className="text-base leading-2">Delite</div>
                                <div className="text-center text-xs leading-3">
                                  <Image
                                    className="relative inline-block w-5 px-0.5"
                                    layout="intrinsic"
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
            </details>
          </div>
          <div></div>

          {/* ..Страница награждения... */}
          <div className="text-darkgreen border-p1-green bg-p1-white dark:bg-p1-deepdarkgreen mb-2 w-full rounded-2xl border text-xl shadow-lg">
            <details className="m-2">
              <summary className="relative flex cursor-pointer justify-between py-2">
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  Страница награждения
                </div>
                <div className="text-p1-darkgreen dark:text-p1-green place-content-center px-4">
                  12 столбцов
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
                          Все
                        </Link>
                        <Link
                          href="#"
                          className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
                        >
                          RaceLads
                        </Link>

                        <Link
                          href="#"
                          className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
                        >
                          Awards
                        </Link>
                        <Link
                          href="#"
                          className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
                        >
                          Licenses
                        </Link>
                        <form className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-darkgreen focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-full place-content-center rounded-xl border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl">
                          <label htmlFor="price" className="block w-full"></label>
                          <select
                            id="price"
                            className="border-p1-darkgreen bg-opacity-50 dark:bg-p1-deepdarkgreen dark:text-p1-green dark:accent-p1-darkgreen dark:hover:text-p1-cyan mx-auto flex max-w-2xl overflow-hidden"
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
                    <div className="">
                      <div
                        className="inline-flex w-full flex-auto justify-center rounded-md pt-1 shadow-sm"
                        role="group"
                      >
                        <Link
                          href="#"
                          className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-max place-content-center rounded-l-xl border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
                        >
                          Select_all
                        </Link>

                        <Link
                          href="#"
                          className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-max place-content-center border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
                        >
                          Send_all_selected
                        </Link>

                        <Link
                          href="#"
                          className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-max place-content-center rounded-r-xl border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
                        >
                          30D
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Таблица награждения*/}

                <div className="inline-block place-self-center p-1">
                  <div className="shadow-md sm:rounded-lg">
                    <table className="text-p1-darkgreen dark:text-p1-green relative overflow-hidden text-left text-xl">
                      <thead className="text-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green bg-gray-50 text-xs uppercase">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            Add to cart
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
                              Number
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
                              Мероприятие
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
                              Номинация
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
                              Название команды
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
                              Награждаемый ФИО/Ник-имя
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
                              e-mail
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
                              Кошелек
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
                              Отправить
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
                              Delete
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
                          <td className="">
                            <div className="relative">
                              <Link href="/card" className="mx-auto justify-center">
                                <Image
                                  width={500}
                                  height={500}
                                  src="/Hero/Rewards.png"
                                  alt="Award"
                                  className="h-[8rem] w-[8rem] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                />
                              </Link>
                            </div>
                          </td>
                          <td className="px-6 py-4">Award</td>
                          <td className="px-6 py-4">8888</td>
                          <td className="px-6 py-4 text-right"> 1 этап РДС ГП 2025</td>
                          <td className="px-6 py-4 text-right"> Абсолютный зачет</td>
                          <td className="px-6 py-4 text-right"> Название команды</td>
                          <td className="">
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
                          <td className="px-6 py-4 text-right"> Иванов Иван Иванович</td>
                          <td className="px-6 py-4 text-right"> mail@mail.com</td>

                          <td className="px-6 py-4 text-right"> 0х1234...5678</td>
                          <td className="px-6 py-4 text-right">
                            <Link
                              href="#"
                              className="bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-max place-content-center rounded-xl border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
                            >
                              Отправить
                            </Link>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <Link
                              href="#"
                              className="bg-p1-white text-p1-darkgreen hover:border-p2-red hover:bg-p2-red hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan inline-block w-max place-content-center rounded-xl border-2 p-2 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
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
              <div className="flex grid-flow-row gap-4">
                <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                  {/* ... карточка 1 ...15x10 */}
                  <div className="group hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen relative h-[14.5rem] w-[10rem] place-self-center overflow-hidden rounded-xl bg-white object-cover lining-nums shadow-lg transition-transform duration-300 group-hover:shadow-sm hover:shadow-lg">
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
                          src="/Hero/Rewards.png"
                          alt="Cup1"
                          className="h-[10rem] w-[10rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                        />
                      </Link>
                    </div>

                    <div className="bg-p2-white2 bg-opacity-100 text-p1-darkgreen group-hover:bg-opacity-100 group-hover:shadow-p2-red dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green w-full transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl">
                      <div className="flex items-center justify-between">
                        <div className="px-1 pt-1 text-left text-sm font-bold">Award</div>
                        <div className="px-1 pt-1 text-left text-sm font-bold"># 12345</div>
                      </div>

                      <div className="px-1 pt-1 pb-12">
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
                      <div className="bg-p2-red text-p2-white2 shadow-p2-red hover:bg-p1-darkgreen dark:bg-p2-red absolute bottom-0 left-0 h-[2rem] w-[10rem] translate-y-full text-center opacity-100 shadow-lg transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                        <div
                          className="inline-flex h-[2rem] w-[10rem] justify-center text-sm"
                          role="group"
                        >
                          <Link
                            href="#"
                            className="border-p1-darkgreen bg-p2-orange shadow-p2-red hover:border-p1-cyan hover:bg-p2-red hover:text-p1-white hover:shadow-p2-red dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red dark:focus:text-p1-cyan grid w-full place-content-center rounded-bl-xl border text-center text-sm shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl md:text-3xl"
                          >
                            <div className="grid grid-cols-2 items-center justify-between gap-2">
                              <div className="text-base leading-2">Delite</div>
                              <div className="text-center text-xs leading-3">
                                <Image
                                  className="relative inline-block w-5 px-0.5"
                                  layout="intrinsic"
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
                <div className="text-p1-darkgreen dark:text-p1-green pt-1 text-center">
                  {/* ... карточка 1 ...15x10 */}
                  <div className="group hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen relative h-[14.5rem] w-[10rem] place-self-center overflow-hidden rounded-xl bg-white object-cover lining-nums shadow-lg transition-transform duration-300 group-hover:shadow-sm hover:shadow-lg">
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
                          src="/Hero/Rewards.png"
                          alt="Cup1"
                          className="h-[10rem] w-[10rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                        />
                      </Link>
                    </div>

                    <div className="bg-p2-white2 bg-opacity-100 text-p1-darkgreen group-hover:bg-opacity-100 group-hover:shadow-p2-red dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:group-hover:text-p1-cyan dark:group-hover:shadow-p1-green w-full transition-transform duration-500 ease-in-out group-hover:translate-y-28 group-hover:shadow-xl">
                      <div className="flex items-center justify-between">
                        <div className="px-1 pt-1 text-left text-sm font-bold">Award</div>
                        <div className="px-1 pt-1 text-left text-sm font-bold"># 12345</div>
                      </div>

                      <div className="px-1 pt-1 pb-12">
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
                      <div className="bg-p2-red text-p2-white2 shadow-p2-red hover:bg-p1-darkgreen dark:bg-p2-red absolute bottom-0 left-0 h-[2rem] w-[10rem] translate-y-full text-center opacity-100 shadow-lg transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                        <div
                          className="inline-flex h-[2rem] w-[10rem] justify-center text-sm"
                          role="group"
                        >
                          <Link
                            href="#"
                            className="border-p1-darkgreen bg-p2-orange shadow-p2-red hover:border-p1-cyan hover:bg-p2-red hover:text-p1-white hover:shadow-p2-red dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red dark:focus:text-p1-cyan grid w-full place-content-center rounded-bl-xl border text-center text-sm shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl md:text-3xl"
                          >
                            <div className="grid grid-cols-2 items-center justify-between gap-2">
                              <div className="text-base leading-2">Delite</div>
                              <div className="text-center text-xs leading-3">
                                <Image
                                  className="relative inline-block w-5 px-0.5"
                                  layout="intrinsic"
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
            </details>
          </div>
        </div>
      </div>

      <div id="3" className="pb-32"></div>
    </div>
  );
}
