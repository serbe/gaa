'use client';
import { JumpButton } from '@/components/jumpButton';
import { Link } from '@/i18n/routing';
import { useFavicon } from '@/utils/hooks';
import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home() {
  const [check, setCheck] = useState(false);
  const [visibleArea1, setVisibleArea1] = useState(true);
  const [currentVisibleArea, setCurrentVisibleArea] = useState(2);
  const jumpPoints = ['1', '2', '3'];
  useFavicon('/background/bgsky.png ');

  return (
    <div className="mx-auto w-full font-serif">
      <JumpButton points={jumpPoints} />

      <div className="">
        <div id="1"></div>
        <div className="h-1/6 bg-[url('/background/bgsky.png')] bg-cover bg-center p-2 dark:brightness-75">
          <div className="flex justify-center space-x-2"></div>
          <div className="grid grid-cols-2 justify-center p-1 md:justify-between">
            <div className="flex justify-start space-x-6"></div>
          </div>

          {/* Поиск 1 */}
          <div className="">
            <div className="mx-auto flex w-72 overflow-hidden rounded-xl border-p1-green bg-p2-white2/50 px-4 py-3 backdrop-blur-lg lg:w-80 xl:w-96">
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
                className="w-full bg-transparent text-xl text-gray-600 outline-hidden"
              />
            </div>
          </div>
          <div className="pb-6"> </div>

          <div className="grid h-80 grid-cols-1 place-items-start p-1 md:grid-cols-1 xl:grid-cols-2">
            <div className="flex grid-flow-row auto-rows-max space-x-2 px-2 md:px-10">
              <Link href="#" className="mx-auto w-80">
                <Image
                  className="rounded-full border-4 border-p1-gray dark:ring-p1-darkgreen"
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
                <p className="text-2xl font-thin md:px-10">0 x6918...a442 </p>
              </div>

              <div>
                <p className="text-2xl font-thin md:px-10">Joined May 2024 </p>
              </div>
            </div>
          </div>

          <div className="grid h-1/5 grid-cols-1 p-1 2xl:grid-cols-2">
            <div className="flex grid-flow-row auto-rows-max justify-start space-x-2 pt-2 pb-4 text-center md:space-x-4">
              <div className="rounded-2xl hover:bg-p1-green/20">
                <Link href="#" className="">
                  <p className="pt-1 text-xl font-thin lining-nums md:px-2 md:text-2xl">
                    Collected:
                  </p>
                  <p className="pt-1 text-xl font-thin lining-nums md:px-2 md:text-2xl">10.000 </p>
                </Link>
              </div>
              <div className="rounded-2xl hover:bg-p1-green/20">
                <Link href="#" className="">
                  <p className="pt-1 text-xl font-thin lining-nums md:px-2 md:text-2xl">
                    Offers_made:
                  </p>
                  <p className="pt-1 text-xl font-thin lining-nums md:px-2 md:text-2xl">55 </p>
                </Link>
              </div>
              <div className="rounded-2xl hover:bg-p1-green/20">
                <Link href="#" className="">
                  <p className="pt-1 text-xl font-thin lining-nums md:px-2 md:text-2xl">Deals: </p>
                  <p className="pt-1 text-xl font-thin lining-nums md:px-2 md:text-2xl">23 </p>
                </Link>
              </div>
              <div className="rounded-2xl hover:bg-p1-green/20">
                <Link href="#" className="">
                  <p className="pt-1 text-xl font-thin lining-nums md:px-2 md:text-2xl">Created:</p>
                  <p className="pt-1 text-xl font-thin lining-nums md:px-2 md:text-2xl">9988 </p>
                </Link>
              </div>
              <div className="rounded-2xl hover:bg-p1-green/20">
                <Link href="#" className="">
                  <p className="pt-1 text-xl font-thin lining-nums md:px-2 md:text-2xl">
                    Favorited:
                  </p>
                  <p className="pt-1 text-xl font-thin lining-nums md:px-2 md:text-2xl">77 </p>
                </Link>
              </div>
              <div className="rounded-2xl hover:bg-p1-green/20">
                <Link href="#" className="">
                  <p className="pt-1 text-xl font-thin lining-nums md:px-2 md:text-2xl">
                    Activity:
                  </p>
                  <p className="pt-1 text-xl font-thin lining-nums md:px-2 md:text-2xl">888 </p>
                </Link>
              </div>
            </div>

            <div className="flex grid-flow-row auto-rows-max justify-end space-x-2 pt-2 pb-4 text-center md:space-x-4">
              <div className="rounded-2xl hover:bg-p1-green/20">
                <Link href="#" className="">
                  <p className="pt-1 text-xl font-thin lining-nums md:px-2 md:text-2xl">
                    Offers_received:
                  </p>
                  <p className="pt-1 text-xl font-thin lining-nums md:px-2 md:text-2xl">88 </p>
                </Link>
              </div>
              <div className="rounded-2xl hover:bg-p1-green/20">
                <Link href="#" className="">
                  <p className="pt-1 text-xl font-thin lining-nums md:px-2 md:text-2xl">
                    Active_listings:
                  </p>
                  <p className="pt-1 text-xl font-thin lining-nums md:px-2 md:text-2xl">78 </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div id="2"></div>
        <div className="sticky top-16 z-30 bg-p1-white shadow-md">
          <div className="flex justify-center space-x-2 pt-2">
            <div>
              <div className="mx-auto flex max-w-2xl overflow-hidden rounded-2xl border-2 border-p1-green bg-p2-white2 px-4 py-3 backdrop-blur-xs hover:border-p1-cyan focus:border-p1-cyan md:w-96 dark:bg-p1-deepdarkgreen dark:text-p1-cyan">
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
                  className="w-full bg-transparent text-xl text-p1-deepdarkgreen outline-hidden dark:text-p1-cyan"
                />
              </div>
            </div>
          </div>
          {/* Items, Offers ... */}

          <div className="grid h-1/5 grid-cols-1 place-content-center p-1 text-sm sm:px-2 md:px-4 lg:grid-cols-2 lg:px-6 lg:text-base xl:px-2 xl:text-lg 2xl:px-10 2xl:text-xl">
            <div className="flex grid-flow-row auto-rows-max justify-center space-x-2 lg:justify-start xl:-my-16">
              <div>
                <div
                  className="inline-flex w-full justify-center rounded-md pt-1 shadow-xs"
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
                    Все
                  </button>
                  <Link
                    href="#"
                    className="inline-block w-max place-content-center border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                  >
                    RaceLads
                  </Link>
                  <button
                    data-target="area7"
                    className="inline-block w-max place-content-center border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    id="toggleButton7"
                    onClick={() => {
                      setCurrentVisibleArea(7);
                    }}
                  >
                    Avards
                  </button>

                  <button
                    data-target="area9"
                    className="inline-block w-max place-content-center border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                    id="toggleButton9"
                    onClick={() => {
                      setCurrentVisibleArea(9);
                    }}
                  >
                    Licenses
                  </button>

                  <form className="inline-block w-max place-content-center rounded-r-xl border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan">
                    <label htmlFor="price" className="block"></label>
                    <select
                      id="price"
                      className="hover:border-opacity-15 mx-auto flex overflow-hidden rounded-r-xl bg-p1-white hover:bg-p1-white/25 hover:text-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green dark:accent-p1-darkgreen dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan"
                      defaultValue={'DEFAULT'}
                    >
                      <option value="DEFAULT" disabled>
                        ...
                      </option>
                      <option value="Price_low_to_high">Drivers</option>
                      <option value="Price_high_to_low">Team&apos;s Members</option>
                      <option value="Recently_listedr">Collectors</option>
                      <option value="Best_offer">Cars</option>
                      <option value="Highest_last_sale">CustomLads</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>

            <div className="flex flex-auto grid-flow-row auto-rows-max justify-center space-x-8 lg:justify-end xl:-my-16">
              <div className="">
                <div
                  className="inline-flex w-full flex-auto justify-center rounded-md pt-1 shadow-xs"
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

          {/* иконки ... */}
          <div className="grid grid-cols-2 justify-between p-1 md:grid-cols-2 2xl:grid-cols-2">
            <div className="flex justify-start space-x-1 md:px-10">
              <div>
                <button
                  data-target="area1"
                  className="mx-auto justify-start rounded-sm transition-all delay-75 duration-100 ease-in-out hover:bg-p1-cyan/50 hover:shadow-lg focus:shadow-lg dark:shadow-p1-cyan dark:ring-p1-darkgreen dark:brightness-50 dark:hover:brightness-90"
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
                    className="mx-auto justify-start rounded-sm transition-all delay-75 duration-100 ease-in-out hover:bg-p1-cyan/50 hover:shadow-lg focus:bg-p1-cyan/50 focus:shadow-lg focus:hover:shadow-lg dark:shadow-p1-cyan dark:ring-p1-darkgreen dark:brightness-50 dark:hover:brightness-90 dark:focus:brightness-90"
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
                    className="mx-auto justify-start rounded-sm transition-all delay-75 duration-100 ease-in-out hover:bg-p1-cyan/50 hover:shadow-lg focus:bg-p1-cyan/50 focus:shadow-lg focus:hover:shadow-lg dark:shadow-p1-cyan dark:ring-p1-darkgreen dark:brightness-50 dark:hover:brightness-90 dark:focus:brightness-90"
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
                    className="mx-auto justify-start rounded-sm transition-all delay-75 duration-100 ease-in-out hover:bg-p1-cyan/50 hover:shadow-lg focus:bg-p1-cyan/50 focus:shadow-lg focus:hover:shadow-lg dark:shadow-p1-cyan dark:ring-p1-darkgreen dark:brightness-50 dark:hover:brightness-90 dark:focus:brightness-90"
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
                    className="mx-auto justify-start rounded-sm transition-all delay-75 duration-100 ease-in-out hover:bg-p1-cyan/50 hover:shadow-lg focus:bg-p1-cyan/50 focus:shadow-lg focus:hover:shadow-lg dark:shadow-p1-cyan dark:ring-p1-darkgreen dark:brightness-50 dark:hover:brightness-90 dark:focus:brightness-90"
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
                    className="mx-auto justify-start rounded-sm transition-all delay-75 duration-100 ease-in-out hover:bg-p1-cyan/50 hover:shadow-lg focus:bg-p1-cyan/50 focus:shadow-lg focus:hover:shadow-lg dark:shadow-p1-cyan dark:ring-p1-darkgreen dark:brightness-50 dark:hover:brightness-90 dark:focus:brightness-90"
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
                    className="mx-auto justify-start rounded-sm transition-all delay-75 duration-100 ease-in-out hover:bg-p1-cyan/50 hover:shadow-lg focus:bg-p1-cyan/50 focus:shadow-lg focus:hover:shadow-lg dark:shadow-p1-cyan dark:ring-p1-darkgreen dark:brightness-50 dark:hover:brightness-90 dark:focus:brightness-90"
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
                  <div className="pt-1 text-center text-p1-darkgreen dark:text-p1-green">
                    <div className="inline-flex space-x-1">
                      <div>
                        <div>
                          <input
                            type="text"
                            id="price_min"
                            className="block w-full border-b border-p1-green bg-p1-white p-1 text-center text-sm text-p1-darkgreen lining-nums hover:bg-p2-white2 focus:border-p1-darkgreen focus:ring-p1-darkgreen md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan dark:focus:border-p1-green dark:focus:ring-p1-cyan"
                            placeholder="Min"
                            required
                          />
                        </div>
                      </div>
                      <div className="place-content-center">to</div>
                      <div>
                        <div>
                          <input
                            type="text"
                            id="price_max"
                            className="block w-full border-b border-p1-green bg-p1-white p-1 text-center text-sm text-p1-darkgreen lining-nums hover:bg-p2-white2 focus:border-p1-darkgreen focus:ring-p1-darkgreen md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan dark:focus:border-p1-green dark:focus:ring-p1-cyan"
                            placeholder="Max"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Link
                        href="#"
                        className="relative flex place-content-center rounded-b-xl border border-p1-green bg-p1-white p-2 text-p1-darkgreen transition-all duration-100 ease-in-out hover:border-p1-darkgreen hover:bg-p1-cyan/10 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                      >
                        <div className="px-4">Apply</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen transition-all delay-75 duration-300 ease-in-out hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
              <details className="">
                <summary className="relative flex cursor-pointer justify-start py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan">
                  <div className="place-content-center px-4">Rarity rank</div>
                </summary>
                <div className="pt-1 text-center text-p1-darkgreen lg:p-2 dark:text-p1-green">
                  <div className="inline-flex space-x-1">
                    <div>
                      <div>
                        <input
                          type="text"
                          id="price_min"
                          className="block w-full border-b border-p1-green bg-p1-white p-1 text-center text-sm text-p1-darkgreen lining-nums hover:bg-p2-white2 focus:border-p1-darkgreen focus:ring-p1-darkgreen md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan dark:focus:border-p1-green dark:focus:ring-p1-cyan"
                          placeholder="Min"
                          required
                        />
                      </div>
                    </div>
                    <div className="place-content-center">to</div>
                    <div>
                      <div>
                        <input
                          type="text"
                          id="price_max"
                          className="block w-full border-b border-p1-green bg-p1-white p-1 text-center text-sm text-p1-darkgreen lining-nums hover:bg-p2-white2 focus:border-p1-darkgreen focus:ring-p1-darkgreen md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan dark:focus:border-p1-green dark:focus:ring-p1-cyan"
                          placeholder="Max"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Link
                      href="#"
                      className="relative flex place-content-center rounded-b-xl border border-p1-green bg-p1-white p-2 text-p1-darkgreen transition-all duration-100 ease-in-out hover:border-p1-darkgreen hover:bg-p1-cyan/10 hover:text-p1-darkgreen hover:shadow-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                    >
                      <div className="px-4">Apply</div>
                    </Link>
                  </div>
                </div>
              </details>
            </div>

            {/* Тraits*/}
            <div className="w-full place-content-center p-2 text-xl font-bold text-p1-darkgreen dark:text-p1-green">
              Traits
            </div>
            <div className="">
              <div className="w-full resize-y snap-y scroll-mt-4 place-self-start overflow-auto scroll-smooth">
                <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                  <details className="">
                    <summary
                      data-target="area4"
                      id="toggleButton4"
                      onClick={() => {
                        setCurrentVisibleArea(4);
                      }}
                      className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan"
                    >
                      <div className="place-content-center px-4">Витрина Showcase</div>
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
                              className="w-full bg-transparent text-xl text-p1-deepdarkgreen outline-hidden dark:text-p1-cyan"
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
                          className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                        />
                        <label
                          id="3"
                          htmlFor="checkbox_ETH"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          RaceLads
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">26</div>
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
                          className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                        />
                        <label
                          id="3"
                          htmlFor="checkbox_POL"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Awards
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">98</div>
                      </div>
                    </div>
                  </details>
                </div>

                <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                  <details className="">
                    <summary
                      data-target="area4"
                      id="toggleButton4"
                      onClick={() => {
                        setCurrentVisibleArea(4);
                      }}
                      className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan"
                    >
                      <div className="place-content-center px-4">Для продажи For sale</div>
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
                              className="w-full bg-transparent text-xl text-p1-deepdarkgreen outline-hidden dark:text-p1-cyan"
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
                          className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                        />
                        <label
                          id="3"
                          htmlFor="checkbox_ETH"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          RaceLad #1234
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
                          className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                        />
                        <label
                          id="3"
                          htmlFor="checkbox_POL"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          RaceLad #4567
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">46</div>
                      </div>
                    </div>
                  </details>
                </div>

                <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                  <details className="">
                    <summary
                      data-target="area4"
                      id="toggleButton4"
                      onClick={() => {
                        setCurrentVisibleArea(4);
                      }}
                      className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan"
                    >
                      <div className="place-content-center px-4">Awards</div>
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
                              className="w-full bg-transparent text-xl text-p1-deepdarkgreen outline-hidden dark:text-p1-cyan"
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
                          className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                        />
                        <label
                          id="3"
                          htmlFor="checkbox_ETH"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Gold
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
                          className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                        />
                        <label
                          id="3"
                          htmlFor="checkbox_POL"
                          className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                        >
                          Silver
                        </label>
                        <div className="px-4 text-p1-darkgreen dark:text-p1-green">1256</div>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
            {/* For Promoter/Local/Global licenses*/}
            <div className="w-full place-content-center p-2 text-xl font-bold text-p1-darkgreen dark:text-p1-green">
              For Promoter/Local/Global licenses
            </div>

            <div className="w-full resize-y snap-y scroll-mt-4 place-self-start overflow-auto scroll-smooth">
              <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                <details className="">
                  <summary
                    data-target="area11"
                    id="toggleButton11"
                    onClick={() => {
                      setCurrentVisibleArea(11);
                    }}
                    className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan"
                  >
                    <div className="place-content-center px-4">Logo спонсоров</div>
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
                            className="w-full bg-transparent text-xl text-p1-deepdarkgreen outline-hidden dark:text-p1-cyan"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="justify-center">
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
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
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
                      <div
                        className="inline-flex w-full justify-center rounded-md pt-1 shadow-xs"
                        role="group"
                      >
                        <Link
                          href="#"
                          className="my-4 inline-block w-max place-content-center rounded-lg border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                        >
                          Добавить спонсора +
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center text-p1-white"></div>
                    <div className="flex place-content-between p-4">
                      <input
                        checked={check}
                        id="checkbox"
                        onChange={() => {
                          setCheck(!check);
                        }}
                        type="checkbox"
                        value=""
                        className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                      />
                      <label
                        id="3"
                        htmlFor="checkbox_ETH"
                        className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                      >
                        ВТБ
                      </label>
                      <div className="px-4 text-p1-darkgreen dark:text-p1-green">26</div>
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
                        className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                      />
                      <label
                        id="3"
                        htmlFor="checkbox_POL"
                        className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                      >
                        Сбер
                      </label>
                      <div className="px-4 text-p1-darkgreen dark:text-p1-green">98</div>
                    </div>
                  </div>
                </details>
              </div>

              <div className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                <details className="">
                  <summary
                    data-target="area12"
                    id="toggleButton12"
                    onClick={() => {
                      setCurrentVisibleArea(12);
                    }}
                    className="relative flex cursor-pointer justify-between py-2 text-p1-darkgreen delay-75 duration-300 ease-in-out hover:pl-2 dark:text-p1-green dark:hover:text-p1-cyan"
                  >
                    <div className="place-content-center px-4">Страница награждения</div>
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
                            className="w-full bg-transparent text-xl text-p1-deepdarkgreen outline-hidden dark:text-p1-cyan"
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
                        className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                      />
                      <label
                        id="3"
                        htmlFor="checkbox_ETH"
                        className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                      >
                        RaceLads
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
                        className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                      />
                      <label
                        id="3"
                        htmlFor="checkbox_POL"
                        className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                      >
                        Awards
                      </label>
                      <div className="px-4 text-p1-darkgreen dark:text-p1-green">46</div>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* ... правый блок */}
          <div className="relative flex w-full max-w-full grid-flow-row flex-wrap justify-center gap-2 overflow-hidden pt-2">
            {/* ...Строки  Items Таблица */}
            <div
              id="area2"
              className={`inline-block h-96 w-max resize-y snap-y  snap-start place-self-start overflow-auto rounded-sm border ${currentVisibleArea == 2 ? '' : 'hidden'}`}
            >
              <div className="relative snap-start scroll-smooth">
                <table className="text-left text-xl text-p1-darkgreen dark:text-p1-green">
                  <thead className="sticky top-0 z-20 border-b border-p1-green/30 bg-p1-white/100 text-xs text-p1-darkgreen uppercase dark:bg-p1-deepdarkgreen dark:text-p1-green">
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
                      <th scope="row" className="p-2 font-medium whitespace-nowrap">
                        <div className="flex items-center">
                          <input
                            checked={check}
                            id="checkbox"
                            onChange={() => {
                              setCheck(!check);
                            }}
                            type="checkbox"
                            value=""
                            className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
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
                      <td className="p-2"> 15 ETH</td>
                      <td className="p-2"> 0.25 ETH</td>
                      <td className="p-2"> 0.15 ETH</td>
                      <td className="p-2"> #77</td>
                      <td className="p-2"> Jon </td>
                      <td className="p-2"> 2h ago</td>
                      <td className="p-2">
                        <div className="">
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
                      <th scope="row" className="p-2 font-medium whitespace-nowrap">
                        <div className="flex items-center">
                          <input
                            checked={check}
                            id="checkbox"
                            onChange={() => {
                              setCheck(!check);
                            }}
                            type="checkbox"
                            value=""
                            className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
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
                      <td className="p-2"> 15 ETH</td>
                      <td className="p-2"> 0.25 ETH</td>
                      <td className="p-2"> 0.15 ETH</td>
                      <td className="p-2"> #77</td>
                      <td className="p-2"> Jon </td>
                      <td className="p-2"> 2h ago</td>
                      <td className="p-2">
                        <div className="">
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
                      <th scope="row" className="p-2 font-medium whitespace-nowrap">
                        <div className="flex items-center">
                          <input
                            checked={check}
                            id="checkbox"
                            onChange={() => {
                              setCheck(!check);
                            }}
                            type="checkbox"
                            value=""
                            className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
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
                      <td className="p-2"> 15 ETH</td>
                      <td className="p-2"> 0.25 ETH</td>
                      <td className="p-2"> 0.15 ETH</td>
                      <td className="p-2"> #77</td>
                      <td className="p-2"> Jon </td>
                      <td className="p-2"> 2h ago</td>
                      <td className="p-2">
                        <div className="">
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
                      <th scope="row" className="p-2 font-medium whitespace-nowrap">
                        <div className="flex items-center">
                          <input
                            checked={check}
                            id="checkbox"
                            onChange={() => {
                              setCheck(!check);
                            }}
                            type="checkbox"
                            value=""
                            className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
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
                      <td className="p-2"> 15 ETH</td>
                      <td className="p-2"> 0.25 ETH</td>
                      <td className="p-2"> 0.15 ETH</td>
                      <td className="p-2"> #77</td>
                      <td className="p-2"> Jon </td>
                      <td className="p-2"> 2h ago</td>
                      <td className="p-2">
                        <div className="">
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
                      <th scope="row" className="p-2 font-medium whitespace-nowrap">
                        <div className="flex items-center">
                          <input
                            checked={check}
                            id="checkbox"
                            onChange={() => {
                              setCheck(!check);
                            }}
                            type="checkbox"
                            value=""
                            className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
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
                      <td className="p-2"> 15 ETH</td>
                      <td className="p-2"> 0.25 ETH</td>
                      <td className="p-2"> 0.15 ETH</td>
                      <td className="p-2"> #77</td>
                      <td className="p-2"> Jon </td>
                      <td className="p-2"> 2h ago</td>
                      <td className="p-2">
                        <div className="">
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
                      <th scope="row" className="p-2 font-medium whitespace-nowrap">
                        <div className="flex items-center">
                          <input
                            checked={check}
                            id="checkbox"
                            onChange={() => {
                              setCheck(!check);
                            }}
                            type="checkbox"
                            value=""
                            className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
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
                      <td className="p-2"> 15 ETH</td>
                      <td className="p-2"> 0.25 ETH</td>
                      <td className="p-2"> 0.15 ETH</td>
                      <td className="p-2"> #77</td>
                      <td className="p-2"> Jon </td>
                      <td className="p-2"> 2h ago</td>
                      <td className="p-2">
                        <div className="">
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
                      <th scope="row" className="p-2 font-medium whitespace-nowrap">
                        <div className="flex items-center">
                          <input
                            checked={check}
                            id="checkbox"
                            onChange={() => {
                              setCheck(!check);
                            }}
                            type="checkbox"
                            value=""
                            className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
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
                      <td className="p-2"> 15 ETH</td>
                      <td className="p-2"> 0.25 ETH</td>
                      <td className="p-2"> 0.15 ETH</td>
                      <td className="p-2"> #77</td>
                      <td className="p-2"> Jon </td>
                      <td className="p-2"> 2h ago</td>
                      <td className="p-2">
                        <div className="">
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
                      <th scope="row" className="p-2 font-medium whitespace-nowrap">
                        <div className="flex items-center">
                          <input
                            checked={check}
                            id="checkbox"
                            onChange={() => {
                              setCheck(!check);
                            }}
                            type="checkbox"
                            value=""
                            className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
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
                      <td className="p-2"> 15 ETH</td>
                      <td className="p-2"> 0.25 ETH</td>
                      <td className="p-2"> 0.15 ETH</td>
                      <td className="p-2"> #77</td>
                      <td className="p-2"> Jon </td>
                      <td className="p-2"> 2h ago</td>
                      <td className="p-2">
                        <div className="">
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
                      <th scope="row" className="p-2 font-medium whitespace-nowrap">
                        <div className="flex items-center">
                          <input
                            checked={check}
                            id="checkbox"
                            onChange={() => {
                              setCheck(!check);
                            }}
                            type="checkbox"
                            value=""
                            className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
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
                      <td className="p-2"> 15 ETH</td>
                      <td className="p-2"> 0.25 ETH</td>
                      <td className="p-2"> 0.15 ETH</td>
                      <td className="p-2"> #77</td>
                      <td className="p-2"> Jon </td>
                      <td className="p-2"> 2h ago</td>
                      <td className="p-2">
                        <div className="">
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
              className={`inline-block  size-max  place-self-start overflow-auto rounded-sm border ${currentVisibleArea == 9 ? '' : 'hidden'}`}
            >
              <div className="columns-1 gap-24 md:columns-2 dark:border-p1-green">
                <div className="relative sm:rounded-lg">
                  <table className="text-left text-xl text-p1-darkgreen dark:text-p1-green">
                    <thead className="sticky top-0 z-10 border-b-2 border-p1-green/20 bg-p1-white text-xs text-p1-darkgreen uppercase dark:bg-p1-deepdarkgreen dark:text-p1-green">
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
                        <td className="p-2">RaceLads</td>
                        <td className="p-2 lining-nums">12.3</td>
                        <td className="p-2 text-right lining-nums"> 8888</td>
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
                        <td className="p-2">Drivers</td>
                        <td className="p-2 lining-nums">12.3</td>
                        <td className="p-2 text-right lining-nums"> 8888</td>
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
                        <td className="p-2">Team's members</td>
                        <td className="p-2 lining-nums">12.3</td>
                        <td className="p-2 text-right lining-nums"> 8888</td>
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
                        <td className="p-2">Collectors</td>
                        <td className="p-2 lining-nums">12.3</td>
                        <td className="p-2 text-right lining-nums"> 8888</td>
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
                        <td className="p-2">Cars</td>
                        <td className="p-2 lining-nums">12.3</td>
                        <td className="p-2 text-right lining-nums"> 8888</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="relative sm:rounded-lg">
                  <table className="text-left text-xl text-p1-darkgreen dark:text-p1-green">
                    <thead className="sticky top-0 z-10 border-b-2 border-p1-green/20 bg-p1-white text-xs text-p1-darkgreen uppercase dark:bg-p1-deepdarkgreen dark:text-p1-green">
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
                        <td className="p-2">CustomLads</td>
                        <td className="p-2 lining-nums">12.3</td>
                        <td className="p-2 text-right lining-nums"> 8888</td>
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
                        <td className="p-2">Drivers</td>
                        <td className="p-2 lining-nums">12.3</td>
                        <td className="p-2 text-right lining-nums"> 8888</td>
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
                        <td className="p-2">Promoter License</td>
                        <td className="p-2 lining-nums">12.3</td>
                        <td className="p-2 text-right lining-nums"> 8888</td>
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
                        <td className="p-2">Local License</td>
                        <td className="p-2 lining-nums">12.3</td>
                        <td className="p-2 text-right lining-nums"> 8888</td>
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
                        <td className="p-2">Global License</td>
                        <td className="p-2 lining-nums">12.3</td>
                        <td className="p-2 text-right lining-nums"> 8888</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ... маленькие карточки  ... */}
            <div id="area3" className={`${currentVisibleArea == 3 ? '' : 'hidden'}`}>
              <div className="flex gap-4">
                <div className="group relative h-[14.5rem] w-40 place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-100 group-hover:shadow-xs hover:shadow-lg hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                  <div>
                    <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-100 ease-in-out group-hover:visible group-hover:opacity-100">
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

                    <div className="px-1 pt-1 pb-12">
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
                    <div className="absolute bottom-0 left-0 h-8 w-40 translate-y-full bg-p1-darkgreen/100 text-center text-p2-white2 shadow-xs shadow-p1-green transition-transform duration-500 ease-in-out group-hover:translate-y-0 hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen">
                      <div className="inline-flex h-8 w-40 justify-center text-sm" role="group">
                        <Link
                          href="#"
                          className="grid w-4/5 place-content-center rounded-bl-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-sm shadow-lg shadow-p1-cyan transition-all duration-100 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
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
                          className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-100 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
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
                <div className="group relative h-[21.5rem] w-60 place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-100 group-hover:shadow-xs hover:shadow-lg hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                  <div>
                    <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-100 ease-in-out group-hover:visible group-hover:opacity-100">
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
                      <div className="text-left text-base font-thin"> Last sale: 1000 WETH</div>
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
                          className="grid w-4/5 place-content-center rounded-bl-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-base shadow-lg shadow-p1-cyan transition-all duration-100 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
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
                          className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-100 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
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
                <div className="group relative h-[28rem] w-80 place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-100 group-hover:shadow-xs hover:shadow-lg hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                  <div>
                    <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-100 ease-in-out group-hover:visible group-hover:opacity-100">
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

                    <div className="px-4 pt-4 pb-12">
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
                    <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen/100 text-center text-p2-white2 shadow-xs shadow-p1-green transition-transform duration-500 ease-in-out group-hover:translate-y-0 hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen">
                      <div className="inline-flex h-12 w-80 justify-center text-sm" role="group">
                        <Link
                          href="#"
                          className="grid w-4/5 place-content-center rounded-bl-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-base shadow-lg shadow-p1-cyan transition-all duration-100 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
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
                          className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-100 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
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
                <div className="group relative h-[39rem] w-[28rem] place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-100 group-hover:shadow-xs hover:shadow-lg hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                  <div>
                    <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-100 ease-in-out group-hover:visible group-hover:opacity-100">
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

                    <div className="px-4 pt-6 pb-12">
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
                    <div className="absolute bottom-0 left-0 w-full translate-y-full bg-p1-darkgreen/100 text-center text-p2-white2 shadow-xs shadow-p1-green transition-transform duration-500 ease-in-out group-hover:translate-y-0 hover:bg-p1-darkgreen dark:bg-p1-deepdarkgreen">
                      <div
                        className="inline-flex h-16 w-[28rem] justify-center text-sm"
                        role="group"
                      >
                        <Link
                          href="#"
                          className="grid w-4/5 place-content-center rounded-bl-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-base shadow-xl shadow-p1-cyan transition-all duration-100 ease-in-out hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
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
                          className="grid w-1/5 place-content-center rounded-br-xl border border-p1-darkgreen bg-p1-darkgreen text-center text-lg font-semibold shadow-lg shadow-p1-cyan transition-all duration-100 ease-in-out hover:scale-75 hover:border-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white hover:shadow-2xl hover:shadow-p1-cyan hover:ring-p1-cyan focus:scale-75 focus:border-p1-cyan focus:ring-p1-cyan md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
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
                <div className="group relative w-80 place-self-center overflow-hidden rounded-xl bg-white object-cover shadow-lg transition-transform duration-100 group-hover:shadow-xs hover:shadow-lg hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                  <div>
                    <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-100 ease-in-out group-hover:visible group-hover:opacity-100">
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

            {/* ...Добавить Лого Спонсора*/}
            <div
              id="area11"
              className={`inline-block h-96 w-max  place-self-start ${currentVisibleArea == 11 ? '' : 'hidden'}`}
            >
              <div className="pt-1 text-center text-p1-darkgreen dark:text-p1-green">
                {/* Добавить лого спорсора 2*/}
                <div className="pt-2 text-left">
                  Информация о спонсорах мероприятия для размещения на Наградах
                </div>

                <div className="inline-block pb-5">
                  <div className="place-items-start md:basis-5">
                    <div className="pt-2 text-left">Эмблемы и категории спонсоров</div>
                  </div>
                </div>
                <div className="flex grid-flow-row gap-4">
                  <div className="pt-1 text-center text-p1-darkgreen dark:text-p1-green">
                    {/* ... карточка 1 ...15x10 */}
                    <div className="group relative h-[14.5rem] w-40 place-self-center overflow-hidden rounded-xl bg-white object-cover lining-nums shadow-lg transition-transform duration-100 group-hover:shadow-xs hover:shadow-lg hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                      <div>
                        <path
                          d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                          fill="white"
                        ></path>

                        <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-100 ease-in-out group-hover:visible group-hover:opacity-100">
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
                        <div className="absolute bottom-0 left-0 h-8 w-40 translate-y-full bg-p2-red text-center text-p2-white2 opacity-100 shadow-lg shadow-p2-red transition-transform duration-500 ease-in-out group-hover:translate-y-0 hover:bg-p1-darkgreen dark:bg-p2-red">
                          <div className="inline-flex h-8 w-40 justify-center text-sm" role="group">
                            <Link
                              href="#"
                              className="grid w-full place-content-center rounded-bl-xl border border-p1-darkgreen bg-p2-orange text-center text-sm shadow-lg shadow-p2-red transition-all duration-100 ease-in-out hover:border-p1-cyan hover:bg-p2-red hover:text-p1-white hover:shadow-2xl hover:shadow-p2-red md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red dark:focus:text-p1-cyan"
                            >
                              <div className="grid grid-cols-2 items-center justify-between gap-2">
                                <div className="text-base leading-3">Delite</div>
                                <div className="text-center text-xs leading-3">
                                  <Image
                                    className="relative inline-block w-5 px-0.5"
                                    width={50}
                                    height={50}
                                    src="/Icon/del.png"
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
                  <div className="pt-1 text-center text-p1-darkgreen dark:text-p1-green">
                    {/* ... карточка 1 ...15x10 */}
                    <div className="group relative h-[14.5rem] w-40 place-self-center overflow-hidden rounded-xl bg-white object-cover lining-nums shadow-lg transition-transform duration-100 group-hover:shadow-xs hover:shadow-lg hover:shadow-p1-cyan dark:bg-p1-deepdarkgreen dark:shadow-p1-darkgreen dark:hover:shadow-p1-darkgreen">
                      <div>
                        <path
                          d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z"
                          fill="white"
                        ></path>

                        <div className="group invisible absolute top-1 right-1 z-10 inline-block duration-100 ease-in-out group-hover:visible group-hover:opacity-100">
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
                        <div className="absolute bottom-0 left-0 h-8 w-40 translate-y-full bg-p2-red text-center text-p2-white2 opacity-100 shadow-lg shadow-p2-red transition-transform duration-500 ease-in-out group-hover:translate-y-0 hover:bg-p1-darkgreen dark:bg-p2-red">
                          <div className="inline-flex h-8 w-40 justify-center text-sm" role="group">
                            <Link
                              href="#"
                              className="grid w-full place-content-center rounded-bl-xl border border-p1-darkgreen bg-p2-orange text-center text-sm shadow-lg shadow-p2-red transition-all duration-100 ease-in-out hover:border-p1-cyan hover:bg-p2-red hover:text-p1-white hover:shadow-2xl hover:shadow-p2-red md:text-3xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-cyan dark:focus:border-p2-red dark:focus:bg-p2-red dark:focus:text-p1-cyan"
                            >
                              <div className="grid grid-cols-2 items-center justify-between gap-2">
                                <div className="text-base leading-3">Delite</div>
                                <div className="text-center text-xs leading-3">
                                  <Image
                                    className="relative inline-block w-5 px-0.5"
                                    width={50}
                                    height={50}
                                    src="/Icon/del.png"
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

            {/* ...Страница награждения*/}

            <div
              id="area12"
              className={`inline-block  size-max  place-self-start overflow-auto rounded-sm border    ${currentVisibleArea == 12 ? '' : 'hidden'}`}
            >
              <div className="sticky top-0 grid h-1/5 grid-cols-1 place-content-center p-1 text-sm sm:px-2 md:px-4 lg:grid-cols-2 lg:px-6 lg:text-base xl:px-2 xl:text-lg 2xl:px-10 2xl:text-xl">
                <div className="flex grid-flow-row auto-rows-max justify-center space-x-2 lg:justify-start">
                  <div>
                    <div
                      className="inline-flex w-full justify-center rounded-md pt-1 shadow-xs"
                      role="group"
                    >
                      <button
                        data-target="area12"
                        className="inline-block w-max place-content-center rounded-l-xl border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                        id="toggleButton21"
                        onClick={() => {
                          setCurrentVisibleArea(12);
                        }}
                      >
                        Выбрать все
                      </button>
                      <Link
                        href="#"
                        className="inline-block w-max place-content-center border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                      >
                        Отправить/Наградить
                      </Link>

                      <button
                        data-target="area12"
                        className="inline-block w-max place-content-center rounded-r-xl border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                        id="toggleButton23"
                        onClick={() => {
                          setCurrentVisibleArea(12);
                        }}
                      >
                        Licenses
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-auto grid-flow-row auto-rows-max justify-center space-x-8 lg:justify-end">
                  <div className="">
                    <div
                      className="inline-flex w-full flex-auto justify-center rounded-md pt-1 shadow-xs"
                      role="group"
                    >
                      <Link
                        href="/mintrewards"
                        className="inline-block w-max place-content-center rounded-xl border bg-p1-white px-1 py-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen/15 hover:bg-p1-cyan/25 hover:text-p1-darkgreen focus:border-p1-darkgreen/20 focus:bg-p1-cyan focus:text-p1-white md:text-xl lg:px-2 xl:px-3 2xl:px-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                      >
                        Ready to be NFT
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-p1-green bg-p1-white text-xl text-p1-darkgreen dark:bg-p1-deepdarkgreen">
                <div className="text-center text-p1-darkgreen dark:text-p1-green">
                  {/* Таблица награждения*/}

                  <div className="dark:border-p1-green">
                    <div className="relative h-96 resize-y overflow-auto scroll-smooth">
                      <table className="text-left text-xl text-p1-darkgreen dark:text-p1-green">
                        <thead className="sticky top-0 z-10 border-b border-p1-green/30 bg-p1-white/100 text-xs text-p1-darkgreen uppercase dark:bg-p1-deepdarkgreen dark:text-p1-green">
                          <tr>
                            <th scope="col" className="p-2 text-center">
                              choose
                            </th>
                            <th scope="col" className="px-6 py-3">
                              <div className="flex items-center">
                                Item
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
                            <th scope="col" className="px-6 py-3">
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

                            <th scope="col" className="px-6 py-3">
                              <div className="flex items-center">
                                Number
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
                            <th scope="col" className="px-6 py-3">
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

                            <th scope="col" className="px-6 py-3">
                              <div className="flex items-center">
                                Номинация
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
                            <th scope="col" className="px-6 py-3">
                              <div className="flex items-center">
                                Название команды
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
                            <th scope="col" className="px-6 py-3">
                              <div className="flex items-center">
                                Item
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
                            <th scope="col" className="px-6 py-3">
                              <div className="flex items-center">
                                Награждаемый ФИО/Ник-имя
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
                            <th scope="col" className="px-6 py-3">
                              <div className="flex items-center">
                                e-mail
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
                            <th scope="col" className="px-6 py-3">
                              <div className="flex items-center">
                                Кошелек
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

                            <th scope="col" className="px-6 py-3">
                              <div className="flex items-center">
                                Отправить
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
                            <th scope="col" className="px-6 py-3">
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
                        <tbody className="z-10 w-full snap-y scroll-mt-4 place-self-start overflow-auto scroll-smooth text-lg">
                          <tr className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                            <th scope="row" className="p-2 font-medium whitespace-nowrap">
                              <div className="flex items-center">
                                <input
                                  checked={check}
                                  id="checkbox"
                                  onChange={() => {
                                    setCheck(!check);
                                  }}
                                  type="checkbox"
                                  value=""
                                  className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                                />
                                <label
                                  htmlFor="checkbox "
                                  className="ms-2 font-medium text-p1-darkgreen dark:text-p1-green"
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
                                    className="size-32 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                  />
                                </Link>
                              </div>
                            </td>
                            <td className="p-2 text-center">Award</td>
                            <td className="p-2 text-center">8888</td>
                            <td className="p-2 text-center"> 1 этап РДС ГП 2025</td>
                            <td className="p-2 text-center"> Абсолютный зачет</td>
                            <td className="p-2 text-center"> Название команды</td>
                            <td className="">
                              <div className="relative">
                                <Link href="/card" className="mx-auto justify-center">
                                  <Image
                                    width={500}
                                    height={500}
                                    src="/HeroNFT/RaceLads/RaceLads1.png"
                                    alt="RaceLads"
                                    className="size-32 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                  />
                                </Link>
                              </div>
                            </td>
                            <td className="p-2 text-center"> Иванов Иван Иванович</td>
                            <td className="p-2 text-center"> mail@mail.com</td>

                            <td className="p-2 text-center"> 0х1234...5678</td>
                            <td className="p-2 text-center">
                              <Link
                                href="#"
                                className="inline-block w-max place-content-center rounded-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Отправить
                              </Link>
                            </td>
                            <td className="p-2 text-center">
                              <Link
                                href="#"
                                className="inline-block w-max place-content-center rounded-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p2-red hover:bg-p2-red hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Delete
                              </Link>
                            </td>
                          </tr>
                          <tr className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                            <th scope="row" className="p-2 font-medium whitespace-nowrap">
                              <div className="flex items-center">
                                <input
                                  checked={check}
                                  id="checkbox"
                                  onChange={() => {
                                    setCheck(!check);
                                  }}
                                  type="checkbox"
                                  value=""
                                  className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                                />
                                <label
                                  htmlFor="checkbox "
                                  className="ms-2 font-medium text-p1-darkgreen dark:text-p1-green"
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
                                    className="size-32 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                  />
                                </Link>
                              </div>
                            </td>
                            <td className="p-2 text-center">Award</td>
                            <td className="p-2 text-center">8888</td>
                            <td className="p-2 text-center"> 1 этап РДС ГП 2025</td>
                            <td className="p-2 text-center"> Абсолютный зачет</td>
                            <td className="p-2 text-center"> Название команды</td>
                            <td className="">
                              <div className="relative">
                                <Link href="/card" className="mx-auto justify-center">
                                  <Image
                                    width={500}
                                    height={500}
                                    src="/HeroNFT/RaceLads/RaceLads1.png"
                                    alt="RaceLads"
                                    className="size-32 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                  />
                                </Link>
                              </div>
                            </td>
                            <td className="p-2 text-center"> Иванов Иван Иванович</td>
                            <td className="p-2 text-center"> mail@mail.com</td>

                            <td className="p-2 text-center"> 0х1234...5678</td>
                            <td className="p-2 text-center">
                              <Link
                                href="#"
                                className="inline-block w-max place-content-center rounded-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Отправить
                              </Link>
                            </td>
                            <td className="p-2 text-center">
                              <Link
                                href="#"
                                className="inline-block w-max place-content-center rounded-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p2-red hover:bg-p2-red hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Delete
                              </Link>
                            </td>
                          </tr>
                          <tr className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                            <th scope="row" className="p-2 font-medium whitespace-nowrap">
                              <div className="flex items-center">
                                <input
                                  checked={check}
                                  id="checkbox"
                                  onChange={() => {
                                    setCheck(!check);
                                  }}
                                  type="checkbox"
                                  value=""
                                  className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                                />
                                <label
                                  htmlFor="checkbox "
                                  className="ms-2 font-medium text-p1-darkgreen dark:text-p1-green"
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
                                    className="size-32 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                  />
                                </Link>
                              </div>
                            </td>
                            <td className="p-2 text-center">Award</td>
                            <td className="p-2 text-center">8888</td>
                            <td className="p-2 text-center"> 1 этап РДС ГП 2025</td>
                            <td className="p-2 text-center"> Абсолютный зачет</td>
                            <td className="p-2 text-center"> Название команды</td>
                            <td className="">
                              <div className="relative">
                                <Link href="/card" className="mx-auto justify-center">
                                  <Image
                                    width={500}
                                    height={500}
                                    src="/HeroNFT/RaceLads/RaceLads1.png"
                                    alt="RaceLads"
                                    className="size-32 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                  />
                                </Link>
                              </div>
                            </td>
                            <td className="p-2 text-center"> Иванов Иван Иванович</td>
                            <td className="p-2 text-center"> mail@mail.com</td>

                            <td className="p-2 text-center"> 0х1234...5678</td>
                            <td className="p-2 text-center">
                              <Link
                                href="#"
                                className="inline-block w-max place-content-center rounded-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Отправить
                              </Link>
                            </td>
                            <td className="p-2 text-center">
                              <Link
                                href="#"
                                className="inline-block w-max place-content-center rounded-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p2-red hover:bg-p2-red hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Delete
                              </Link>
                            </td>
                          </tr>
                          <tr className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                            <th scope="row" className="p-2 font-medium whitespace-nowrap">
                              <div className="flex items-center">
                                <input
                                  checked={check}
                                  id="checkbox"
                                  onChange={() => {
                                    setCheck(!check);
                                  }}
                                  type="checkbox"
                                  value=""
                                  className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                                />
                                <label
                                  htmlFor="checkbox "
                                  className="ms-2 font-medium text-p1-darkgreen dark:text-p1-green"
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
                                    className="size-32 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                  />
                                </Link>
                              </div>
                            </td>
                            <td className="p-2 text-center">Award</td>
                            <td className="p-2 text-center">8888</td>
                            <td className="p-2 text-center"> 1 этап РДС ГП 2025</td>
                            <td className="p-2 text-center"> Абсолютный зачет</td>
                            <td className="p-2 text-center"> Название команды</td>
                            <td className="">
                              <div className="relative">
                                <Link href="/card" className="mx-auto justify-center">
                                  <Image
                                    width={500}
                                    height={500}
                                    src="/HeroNFT/RaceLads/RaceLads1.png"
                                    alt="RaceLads"
                                    className="size-32 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                  />
                                </Link>
                              </div>
                            </td>
                            <td className="p-2 text-center"> Иванов Иван Иванович</td>
                            <td className="p-2 text-center"> mail@mail.com</td>

                            <td className="p-2 text-center"> 0х1234...5678</td>
                            <td className="p-2 text-center">
                              <Link
                                href="#"
                                className="inline-block w-max place-content-center rounded-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Отправить
                              </Link>
                            </td>
                            <td className="p-2 text-center">
                              <Link
                                href="#"
                                className="inline-block w-max place-content-center rounded-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p2-red hover:bg-p2-red hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Delete
                              </Link>
                            </td>
                          </tr>
                          <tr className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                            <th scope="row" className="p-2 font-medium whitespace-nowrap">
                              <div className="flex items-center">
                                <input
                                  checked={check}
                                  id="checkbox"
                                  onChange={() => {
                                    setCheck(!check);
                                  }}
                                  type="checkbox"
                                  value=""
                                  className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                                />
                                <label
                                  htmlFor="checkbox "
                                  className="ms-2 font-medium text-p1-darkgreen dark:text-p1-green"
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
                                    className="size-32 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                  />
                                </Link>
                              </div>
                            </td>
                            <td className="p-2 text-center">Award</td>
                            <td className="p-2 text-center">8888</td>
                            <td className="p-2 text-center"> 1 этап РДС ГП 2025</td>
                            <td className="p-2 text-center"> Абсолютный зачет</td>
                            <td className="p-2 text-center"> Название команды</td>
                            <td className="">
                              <div className="relative">
                                <Link href="/card" className="mx-auto justify-center">
                                  <Image
                                    width={500}
                                    height={500}
                                    src="/HeroNFT/RaceLads/RaceLads1.png"
                                    alt="RaceLads"
                                    className="size-32 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                  />
                                </Link>
                              </div>
                            </td>
                            <td className="p-2 text-center"> Иванов Иван Иванович</td>
                            <td className="p-2 text-center"> mail@mail.com</td>

                            <td className="p-2 text-center"> 0х1234...5678</td>
                            <td className="p-2 text-center">
                              <Link
                                href="#"
                                className="inline-block w-max place-content-center rounded-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Отправить
                              </Link>
                            </td>
                            <td className="p-2 text-center">
                              <Link
                                href="#"
                                className="inline-block w-max place-content-center rounded-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p2-red hover:bg-p2-red hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Delete
                              </Link>
                            </td>
                          </tr>
                          <tr className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                            <th scope="row" className="p-2 font-medium whitespace-nowrap">
                              <div className="flex items-center">
                                <input
                                  checked={check}
                                  id="checkbox"
                                  onChange={() => {
                                    setCheck(!check);
                                  }}
                                  type="checkbox"
                                  value=""
                                  className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                                />
                                <label
                                  htmlFor="checkbox "
                                  className="ms-2 font-medium text-p1-darkgreen dark:text-p1-green"
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
                                    className="size-32 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                  />
                                </Link>
                              </div>
                            </td>
                            <td className="p-2 text-center">Award</td>
                            <td className="p-2 text-center">8888</td>
                            <td className="p-2 text-center"> 1 этап РДС ГП 2025</td>
                            <td className="p-2 text-center"> Абсолютный зачет</td>
                            <td className="p-2 text-center"> Название команды</td>
                            <td className="">
                              <div className="relative">
                                <Link href="/card" className="mx-auto justify-center">
                                  <Image
                                    width={500}
                                    height={500}
                                    src="/HeroNFT/RaceLads/RaceLads1.png"
                                    alt="RaceLads"
                                    className="size-32 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                  />
                                </Link>
                              </div>
                            </td>
                            <td className="p-2 text-center"> Иванов Иван Иванович</td>
                            <td className="p-2 text-center"> mail@mail.com</td>

                            <td className="p-2 text-center"> 0х1234...5678</td>
                            <td className="p-2 text-center">
                              <Link
                                href="#"
                                className="inline-block w-max place-content-center rounded-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Отправить
                              </Link>
                            </td>
                            <td className="p-2 text-center">
                              <Link
                                href="#"
                                className="inline-block w-max place-content-center rounded-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p2-red hover:bg-p2-red hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Delete
                              </Link>
                            </td>
                          </tr>
                          <tr className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                            <th scope="row" className="p-2 font-medium whitespace-nowrap">
                              <div className="flex items-center">
                                <input
                                  checked={check}
                                  id="checkbox"
                                  onChange={() => {
                                    setCheck(!check);
                                  }}
                                  type="checkbox"
                                  value=""
                                  className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                                />
                                <label
                                  htmlFor="checkbox "
                                  className="ms-2 font-medium text-p1-darkgreen dark:text-p1-green"
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
                                    className="size-32 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                  />
                                </Link>
                              </div>
                            </td>
                            <td className="p-2 text-center">Award</td>
                            <td className="p-2 text-center">8888</td>
                            <td className="p-2 text-center"> 1 этап РДС ГП 2025</td>
                            <td className="p-2 text-center"> Абсолютный зачет</td>
                            <td className="p-2 text-center"> Название команды</td>
                            <td className="">
                              <div className="relative">
                                <Link href="/card" className="mx-auto justify-center">
                                  <Image
                                    width={500}
                                    height={500}
                                    src="/HeroNFT/RaceLads/RaceLads1.png"
                                    alt="RaceLads"
                                    className="size-32 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                  />
                                </Link>
                              </div>
                            </td>
                            <td className="p-2 text-center"> Иванов Иван Иванович</td>
                            <td className="p-2 text-center"> mail@mail.com</td>

                            <td className="p-2 text-center"> 0х1234...5678</td>
                            <td className="p-2 text-center">
                              <Link
                                href="#"
                                className="inline-block w-max place-content-center rounded-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Отправить
                              </Link>
                            </td>
                            <td className="p-2 text-center">
                              <Link
                                href="#"
                                className="inline-block w-max place-content-center rounded-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p2-red hover:bg-p2-red hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p2-red dark:hover:text-p1-white dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Delete
                              </Link>
                            </td>
                          </tr>
                          <tr className="w-full snap-start border-b border-p1-green/30 bg-p1-white text-xl text-p1-darkgreen hover:border-p1-green hover:bg-p1-green/5 dark:bg-p1-deepdarkgreen">
                            <th scope="row" className="p-2 font-medium whitespace-nowrap">
                              <div className="flex items-center">
                                <input
                                  checked={check}
                                  id="checkbox"
                                  onChange={() => {
                                    setCheck(!check);
                                  }}
                                  type="checkbox"
                                  value=""
                                  className="size-6 rounded-sm border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-white focus:ring-2 focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:accent-p1-deepdarkgreen dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                                />
                                <label
                                  htmlFor="checkbox "
                                  className="ms-2 font-medium text-p1-darkgreen dark:text-p1-green"
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
                                    className="size-32 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                  />
                                </Link>
                              </div>
                            </td>
                            <td className="p-2 text-center">Award</td>
                            <td className="p-2 text-center">8888</td>
                            <td className="p-2 text-center"> 1 этап РДС ГП 2025</td>
                            <td className="p-2 text-center"> Абсолютный зачет</td>
                            <td className="p-2 text-center"> Название команды</td>
                            <td className="">
                              <div className="relative">
                                <Link href="/card" className="mx-auto justify-center">
                                  <Image
                                    width={500}
                                    height={500}
                                    src="/HeroNFT/RaceLads/RaceLads1.png"
                                    alt="RaceLads"
                                    className="size-32 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                  />
                                </Link>
                              </div>
                            </td>
                            <td className="p-2 text-center"> Иванов Иван Иванович</td>
                            <td className="p-2 text-center"> mail@mail.com</td>

                            <td className="p-2 text-center"> 0х1234...5678</td>
                            <td className="p-2 text-center">
                              <Link
                                href="#"
                                className="inline-block w-max place-content-center rounded-xl border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-100 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
                              >
                                Отправить
                              </Link>
                            </td>
                            <td className="p-2 text-center">
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

                <div className="flex grid-flow-row gap-4 pt-10"></div>
              </div>
            </div>
          </div>
        </div>

        <div id="3" className="pb-10"></div>
      </div>
    </div>
  );
}
