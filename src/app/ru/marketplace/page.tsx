'use client';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

import { JumpButton } from '@/components/jumpButton';

export default function Home() {
  const jumpPoints = ['1', '2', '3'];
  return (
    <div className="mx-auto w-full font-serif">
      <JumpButton points={jumpPoints} />

      <div className="h-4/5 bg-[url('/background/bgsky.png')] bg-cover bg-center p-2">
        <div className="grid grid-cols-1 justify-center p-1 md:grid-cols-2 md:justify-between 2xl:grid-cols-3">
          <div className="flex justify-start space-x-6">
            <div className="">
              <Link href={'#'} className="">
                <Image
                  className="hover:bg:white-p1-white h-14 w-14 rounded-full text-base ring-2 ring-p1-green hover:bg-p1-white hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen"
                  width={480}
                  height={480}
                  src="/Logo/GAA_Logo_1.png"
                  alt="Bordered avatar"
                />
              </Link>
            </div>
            <div>
              <nav className="grid grid-cols-1 space-x-6 px-10 text-center font-bold text-p1-darkgreen md:grid-cols-4 md:text-xl">
                <Link
                  href="#"
                  className="rounded-sm p-1 transition-all delay-75 duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen"
                >
                  RaceLads
                </Link>
                <Link
                  href="#"
                  className="rounded-sm p-1 transition-all delay-75 duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen"
                >
                  Drops
                </Link>
                <Link
                  href="#"
                  className="rounded-sm p-1 transition-all delay-75 duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen"
                >
                  Stats
                </Link>
                <Link
                  href="#"
                  className="rounded-sm p-1 transition-all delay-75 duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen"
                >
                  Create
                </Link>
              </nav>
            </div>
          </div>

          <div className="flex justify-center space-x-2">
            <div>
              <div className="mx-auto flex max-w-md overflow-hidden rounded-md border-2 border-p1-green bg-p2-white2 px-4 py-3 font-[sans-serif] md:w-96">
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
          </div>

          <div className="flex justify-end space-x-6 px-10">
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
            <div>
              <Link href={'#'} className="mx-auto justify-center">
                <Image
                  className="h-10 w-10 rounded-full p-1 ring-2 ring-p1-green transition-all delay-75 duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen"
                  width={480}
                  height={480}
                  src="/HeroNFT/RaceLads/RaceLads1.png"
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

                <div className="invisible absolute left-1/2 mt-2 w-64 -translate-x-1/2 transform rounded bg-p1-cyan p-4 text-gray-800 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-xl p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen">
                    <Link href={'#'} className="mx-auto justify-center">
                      <Image
                        className="h-4 w-4"
                        width={480}
                        height={480}
                        src="/Logo/cart.png"
                        alt="Bordered avatar"
                      />
                      Profile
                    </Link>
                  </div>
                  <div className="rounded-xl p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen">
                    <Link href={'#'} className="mx-auto justify-center">
                      <Image
                        className="h-0 w-0"
                        width={480}
                        height={480}
                        src="/Logo/cart.png"
                        alt="Bordered avatar"
                      />
                      Watchlist
                    </Link>
                  </div>

                  <div className="rounded-xl p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen">
                    <Link href={'#'} className="mx-auto justify-center">
                      <Image
                        className="h-0 w-0"
                        width={480}
                        height={480}
                        src="/Logo/cart.png"
                        alt="Bordered avatar"
                      />
                      Deals
                    </Link>
                  </div>
                  <div className="rounded-xl p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen">
                    <Link href={'#'} className="mx-auto justify-center">
                      <Image
                        className="h-0 w-0"
                        width={480}
                        height={480}
                        src="/Logo/cart.png"
                        alt="Bordered avatar"
                      />
                      Settings
                    </Link>
                  </div>
                  <div className="rounded-xl p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen">
                    <Link href={'#'} className="mx-auto justify-center">
                      <Image
                        className="h-0 w-0"
                        width={480}
                        height={480}
                        src="/Logo/cart.png"
                        alt="Bordered avatar"
                      />
                      Dark mode
                    </Link>
                  </div>
                  <div className="rounded-xl p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen">
                    <Link href={'#'} className="mx-auto justify-center">
                      <Image
                        className="h-0 w-0"
                        width={480}
                        height={480}
                        src="/Logo/cart.png"
                        alt="Bordered avatar"
                      />
                      Language
                    </Link>
                  </div>
                  <div className="rounded-xl p-1 text-xl font-semibold text-p1-darkgreen transition-all duration-300 ease-in-out hover:bg-p1-white hover:bg-opacity-50 hover:text-p1-deepdarkgreen">
                    <Link href={'#'} className="mx-auto justify-center">
                      <Image
                        className="h-0 w-0"
                        width={480}
                        height={480}
                        src="/Logo/cart.png"
                        alt="Bordered avatar"
                      />
                      Settings
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
                  src="/Logo/cart.png"
                  alt="Bordered avatar"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid h-80 grid-cols-1 p-1 pt-6 md:grid-cols-3">
          <div className="flex grid-flow-row auto-rows-max justify-start space-x-2 md:px-10">
            <div>
              <div>
                <Link href={'#'} className="mx-auto justify-center">
                  <Image
                    className="h-full w-full rounded-3xl p-1 dark:ring-p1-darkgreen"
                    width={1000}
                    height={1000}
                    src="/HeroNFT/RaceLads/RaceLads1.png"
                    alt="Bordered avatar"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid h-1/5 grid-cols-1 p-1 md:grid-cols-2">
          <div className="flex grid-flow-row auto-rows-max justify-start space-x-2">
            <div>
              <div>
                <p className="text-3xl font-semibold md:px-10">RaceLads</p>
                <p className="font-thing text-2xl md:px-10">Polygon zkEVM </p>
                <p className="font-thing text-2xl md:px-10">Design by GAA </p>
              </div>
            </div>
            <Link href={'#'} className="mx-auto justify-center">
              <Image
                className="h-10 w-10 rounded-sm p-1 dark:ring-p1-darkgreen"
                width={480}
                height={480}
                src="/Logo/globe.png"
                alt="Bordered avatar"
              />
            </Link>
            <Link
              href="#"
              className="text-3xl font-bold text-gray-600 hover:text-gray-900 md:px-10"
            >
              ...
            </Link>
          </div>
        </div>
        <div className="grid h-1/5 grid-cols-1 p-1 md:grid-cols-2">
          <div className="flex grid-flow-row auto-rows-max justify-start space-x-2 pt-2">
            <div>
              <p className="font-thing pt-1 text-xl md:px-10 md:text-2xl">Items: 10.000 </p>
            </div>
            <p className="font-thing pt-1 text-xl md:px-2 md:text-2xl">Created: Feb 2025 </p>

            <p className="font-thing pt-1 text-xl md:px-2 md:text-2xl">Creator earnings: 7.5%</p>
            <p className="font-thing pt-1 text-xl md:px-2 md:text-2xl">Chain: Ethereum</p>
          </div>

          <div className="flex grid-flow-row auto-rows-max justify-end space-x-8 pb-4 pt-2">
            <div>
              <p className="text-sm font-semibold md:text-2xl">9 ETH</p>
              <p>Total volume</p>
            </div>
            <div>
              <p className="text-sm font-semibold md:text-2xl">0,013 ETH</p>
              <p>Floor price</p>
            </div>
            <div>
              <p className="text-sm font-semibold md:text-2xl">0,009 WETH</p>
              <p>Best offer</p>
            </div>
            <div>
              <p className="text-sm font-semibold md:text-2xl">29%</p>
              <p>Listed</p>
            </div>
            <div>
              <p className="text-sm font-semibold md:text-2xl">3 690 (85%)</p>
              <p>Owners (Unique)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid h-1/5 grid-cols-1 p-1 md:grid-cols-4 md:px-10">
        <div className="flex grid-flow-row auto-rows-max justify-start space-x-2">
          <div>
            <div
              className="inline-flex w-full justify-center rounded-md pt-5 shadow-sm"
              role="group"
            >
              <Link
                href="#"
                className="inline-block w-full place-content-center rounded-l-xl border-2 bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                Items
              </Link>
              <Link
                href="#"
                className="inline-block w-full place-content-center border-2 bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                Offers
              </Link>
              <Link
                href="#"
                className="inline-block w-full place-content-center border-2 bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                Analitics
              </Link>

              <Link
                href="#"
                className="inline-block w-full place-content-center rounded-r-xl border-2 bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                Activity
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-2 pt-5">
          <div>
            <div className="mx-auto flex max-w-md overflow-hidden rounded-md border-2 border-p1-green bg-p2-white2 px-4 py-3 font-[sans-serif] md:w-96">
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
        </div>
        <form className="md:w-30 mx-4 max-w-2xl pt-5 lg:w-60">
          <label
            htmlFor="price"
            className="block w-full text-left text-sm font-medium text-p1-darkgreen md:text-xl dark:text-p1-green"
          ></label>
          <select
            id="price"
            className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange md:text-xl dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
            defaultValue={'DEFAULT'}
          >
            <option value="DEFAULT" disabled>
              Price low to high
            </option>
            <option value="Title_Sponsor">Price low to high</option>
            <option value="General_Sponsor">Price high to low</option>
            <option value="Official_Sponsor">Recently listed</option>
            <option value="Sponsor_participant">Best offer</option>
            <option value="Information_Sponsor">Highest last sale</option>
            <option value="Barter_sponsor ">Recently sold</option>
            <option value="Barter_sponsor ">Recently created</option>
            <option value="Barter_sponsor ">Most viewed</option>
            <option value="Barter_sponsor ">Oldest</option>
            <option value="Barter_sponsor ">Most favorited</option>
            <option value="Barter_sponsor ">Ending soon</option>
            <option value="Barter_sponsor ">Recently received</option>
          </select>
        </form>
        <div className="flex flex-auto grid-flow-row auto-rows-max justify-end space-x-8 pb-4">
          <div>
            <div
              className="inline-flex w-full flex-auto justify-center rounded-md pt-5 shadow-sm"
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
                className="inline-block w-max place-content-center border-2 bg-p1-white p-2 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:border-p1-darkgreen hover:bg-p1-green hover:text-p1-white focus:border-p1-darkgreen focus:bg-p1-green focus:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-deepdarkgreen dark:hover:text-p1-cyan dark:focus:border-p1-cyan dark:focus:bg-p1-deepdarkgreen dark:focus:text-p1-cyan"
              >
                New
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

      <div className="pb-10"></div>
      <div className="grid grid-cols-1 justify-between p-1 md:grid-cols-2 2xl:grid-cols-2">
        <div className="flex justify-start space-x-6 px-10">
          <div>
            <Link href={'#'} className="mx-auto justify-start">
              <Image
                className="h-10 w-10 rounded-sm p-1 ring-p1-gray transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-green"
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
          <div className="place-content-center text-xl text-p1-darkgreen dark:text-p1-green">
            Live
          </div>
          <div className="flex grid-flow-row auto-rows-max justify-start space-x-2"></div>
          <div>
            <Link
              href="#"
              className="place-self-center text-2xl text-p1-darkgreen dark:text-p1-green"
            >
              100 results{' '}
            </Link>
          </div>
        </div>

        <div className="flex justify-end px-10">
          <div className="inline-flex w-full justify-end rounded-md" role="group">
            <div className="w-10">
              <Link href={'#'} className="mx-auto justify-center">
                <Image
                  className="h-10 w-10 rounded-sm p-1 ring-p1-gray transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-green"
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
                  className="h-10 w-10 rounded-sm p-1 ring-p1-gray transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-green"
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
                  className="h-10 w-10 rounded-sm p-1 ring-p1-gray transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-green"
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
                  className="h-10 w-10 rounded-sm p-1 ring-p1-gray transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-green"
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
                  className="h-10 w-10 rounded-sm p-1 ring-p1-gray transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:bg-opacity-50 hover:ring-p1-cyan dark:ring-p1-darkgreen dark:hover:bg-p1-green"
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

      <section className="mx-auto px-6 py-12">
        <h2 className="mb-6 text-2xl font-bold text-p1-darkgreen dark:text-p1-green">Items</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
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
            <div></div>
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
              <Link href="/card" className="mx-auto justify-center hover:drop-shadow-2xl">
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
              <Link href="/card" className="mx-auto justify-center hover:drop-shadow-2xl">
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
              <Link href="/card" className="mx-auto justify-center hover:drop-shadow-2xl">
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
              <Link href="/card" className="mx-auto justify-center hover:drop-shadow-2xl">
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
              <Link href="/card" className="mx-auto justify-center hover:drop-shadow-2xl">
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
