'use client';
import Image from 'next/image';
import Link from 'next/link';

import { JumpButton } from '@/components/jumpButton';

export default function Home() {
  const jumpPoints = ['1', '2', '3'];
  return (
    <div className="mx-auto w-full font-serif">
      <JumpButton points={jumpPoints} />

      <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <Image
              width={480}
              height={480}
              src="/HeroNFT/RaceLads/RaceLads1.png"
              alt="RaceLad"
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-100"
            />{' '}
            <span className="text-lg font-semibold text-gray-800">MarketRace</span>
          </div>
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Explore
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Stats
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Resources
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Create
            </a>
          </nav>
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Connect Wallet
          </button>
        </div>
      </header>

      <section className="relative h-[450px] bg-cover bg-center">
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

      <section className="container mx-auto px-6 py-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Items</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="overflow-hidden rounded-lg bg-white shadow-md">
            <Image
              width={480}
              height={480}
              src="/HeroNFT/RaceLads/RaceLads1.png"
              alt="RaceLad"
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-100"
            />{' '}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Item #1</h3>
              <p className="text-sm text-gray-500">Ξ 2.0</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-white shadow-md">
            <Image
              width={480}
              height={480}
              src="/HeroNFT/RaceLads/RaceLads1.png"
              alt="RaceLad"
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-100"
            />{' '}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Item #2</h3>
              <p className="text-sm text-gray-500">Ξ 3.5</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-white shadow-md">
            <Image
              width={480}
              height={480}
              src="/HeroNFT/RaceLads/RaceLads1.png"
              alt="RaceLad"
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-100"
            />{' '}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Item #3</h3>
              <p className="text-sm text-gray-500">Ξ 1.8</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-white shadow-md">
            <Image
              width={480}
              height={480}
              src="/HeroNFT/RaceLads/RaceLads1.png"
              alt="RaceLad"
              className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-100"
            />{' '}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Item #4</h3>
              <p className="text-sm text-gray-500">Ξ 2.2</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-8 max-w-4xl rounded-lg bg-gray-100 p-6 shadow-md">
        <div className="flex items-center space-x-4">
          <Image
            width={480}
            height={480}
            src="/HeroNFT/RaceLads/RaceLads1.png"
            alt="RaceLad"
            className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-100"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Azuki Elementals</h2>
            <p className="text-gray-600">
              Discover the magic of Azuki Elementals, blending art and creativity in a stunning NFT
              collection.
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
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

      <div className="group relative w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
        <div className="relative">
          <Image
            width={480}
            height={480}
            src="/HeroNFT/RaceLads/RaceLads1.png"
            alt="RaceLad"
            className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-100"
          />

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
                width={480}
                height={480}
                src="/HeroNFT/RaceLads/RaceLads1.png"
                alt="Bordered avatar"
              />
            </div>
            <div className="absolute left-2 top-2 rounded-full bg-p1-darkgreen px-3 py-1 text-sm text-white">
              Rare{' '}
            </div>
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

      <div className="flex flex-wrap object-left md:flex-nowrap md:space-x-2 md:pt-5">
        <div className="mb-4 rounded-3xl border-p1-darkgreen bg-p1-white shadow-lg md:border-4 dark:border-p1-green dark:bg-p1-deepdarkgreen">
          <div className="scale-95 duration-500">
            <Link href={'#'} className="mx-auto justify-center">
              <div className="relative h-96 w-full justify-self-center overflow-hidden rounded-xl border border-gray-300">
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
                      width={480}
                      height={480}
                      src="/HeroNFT/RaceLads/RaceLads1.png"
                      alt="Bordered avatar"
                    />
                  </div>
                </div>
                <Image
                  width={480}
                  height={480}
                  src="/background/bgroad.png"
                  alt="bgroad"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 flex -translate-y-28 transform items-end justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
              </div>
            </Link>
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

                  <div className="mt-2 grid grid-cols-8 place-items-center gap-2 space-x-2 p-4 text-base md:text-xl">
                    <div className="basis-3/5 scale-95 duration-500">
                      <Link href={'#'} className="mx-auto justify-center">
                        <div className="group relative h-52 w-52 justify-self-center overflow-hidden rounded-3xl border border-gray-300">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-p1-green">
                            RaceLads
                          </h5>
                          <Image
                            width={480}
                            height={480}
                            src="/HeroNFT/RaceLads/RaceLads1.png"
                            alt="RaceLads1"
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
                          />

                          <div className="absolute inset-0 flex -translate-y-28 transform items-end justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
                        </div>
                      </Link>
                    </div>
                    <div className="basis-3/5 scale-95 duration-500">
                      <Link href={'#'} className="mx-auto justify-center">
                        <div className="group relative h-52 w-52 justify-self-center overflow-hidden rounded-3xl border border-gray-300">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-p1-green">
                            Drivers
                          </h5>
                          <Image
                            width={480}
                            height={480}
                            src="/HeroNFT/Drivers/Driver4.png"
                            alt="Driver4"
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
                          />

                          <div className="absolute inset-0 flex -translate-y-28 transform items-end justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
                        </div>
                      </Link>
                    </div>
                    <div className="basis-3/5 scale-95 duration-500">
                      <Link href={'#'} className="mx-auto justify-center">
                        <div className="group relative h-52 w-52 justify-self-center overflow-hidden rounded-3xl border border-gray-300">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-p1-green">
                            Team&apos;s Members
                          </h5>
                          <Image
                            width={480}
                            height={480}
                            src="/HeroNFT/Team's members/TeamMember1.png"
                            alt="TeamMember1"
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
                          />

                          <div className="absolute inset-0 flex -translate-y-28 transform items-end justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
                        </div>
                      </Link>
                    </div>
                    <div className="basis-3/5 scale-95 duration-500">
                      <Link href={'#'} className="mx-auto justify-center">
                        <div className="group relative h-52 w-52 justify-self-center overflow-hidden rounded-3xl border border-gray-300">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-p1-green">
                            Collectors
                          </h5>
                          <Image
                            width={480}
                            height={480}
                            src="/HeroNFT/Collectors/Collector1.png"
                            alt="Collector1"
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
                          />

                          <div className="absolute inset-0 flex -translate-y-28 transform items-end justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
                        </div>
                      </Link>
                    </div>
                    <div className="basis-3/5 scale-95 duration-500">
                      <Link href={'#'} className="mx-auto justify-center">
                        <div className="group relative h-52 w-52 justify-self-center overflow-hidden rounded-3xl border border-gray-300">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-p1-green">
                            Cars
                          </h5>
                          <Image
                            width={480}
                            height={480}
                            src="/Cars/Car.png"
                            alt="Car"
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
                          />

                          <div className="absolute inset-0 flex -translate-y-28 transform items-end justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
                        </div>
                      </Link>
                    </div>
                    <div className="basis-3/5 scale-95 duration-500">
                      <Link href={'#'} className="mx-auto justify-center">
                        <div className="group relative h-52 w-52 justify-self-center overflow-hidden rounded-3xl border border-gray-300">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-p1-green">
                            CustomLads
                          </h5>
                          <Image
                            width={480}
                            height={480}
                            src="/HeroNFT/CustomLads/CustomLads1.png"
                            alt="CustomLads1"
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
                          />

                          <div className="absolute inset-0 flex -translate-y-28 transform items-end justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
                        </div>
                      </Link>
                    </div>
                    <div className="basis-3/5 scale-95 duration-500">
                      <Link href={'#'} className="mx-auto justify-center">
                        <div className="group relative h-52 w-52 justify-self-center overflow-hidden rounded-3xl border border-gray-300">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-p1-green">
                            Awards NFT
                          </h5>
                          <Image
                            width={480}
                            height={480}
                            src="/Hero/Rewards.png"
                            alt="Rewards"
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
                          />

                          <div className="absolute inset-0 flex -translate-y-28 transform items-end justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
                        </div>
                      </Link>
                    </div>
                    <div className="basis-3/5 scale-95 duration-500">
                      <Link href={'#'} className="mx-auto justify-center">
                        <div className="group relative h-52 w-52 justify-self-center overflow-hidden rounded-3xl border border-gray-300">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-p1-green">
                            Лицензии
                          </h5>
                          <Image
                            width={480}
                            height={480}
                            src="/Licenses/Promoter Lic.png"
                            alt="PromoterLic"
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
                          />

                          <div className="absolute inset-0 flex -translate-y-28 transform items-end justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="mt-2 grid grid-cols-1 gap-2 space-x-2 p-4 text-base text-gray-900 sm:grid-cols-2 md:text-xl lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    <div className="group relative h-52 w-52 justify-self-center overflow-hidden rounded-3xl border border-gray-300">
                      <Image
                        width={480}
                        height={480}
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
                        <Image
                          width={480}
                          height={480}
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
                        <Image
                          width={480}
                          height={480}
                          src="/HeroNFT/RaceLads/RaceLads1.png"
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
                  <div className="pt-2 text-left">
                    <p>Личный кабинет пользователя</p>
                    <p>Мои NFT___ Total NFTs:____ GAA_NFTs:_____</p>
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
                  <div className="pt-2 text-left">RaceLads</div>
                  <div className="mt-2 grid grid-cols-5 place-items-center gap-2 space-x-2 p-4 text-base md:text-xl">
                    <div className="group relative w-80 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl">
                      <div>
                        <button className="absolute left-2 top-2 z-50 rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
                          Rare
                        </button>
                      </div>

                      <div className="relative">
                        <Link
                          href={'/rucard'}
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

                      <div className="w-full bg-p1-white p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12">
                        <div className="flex items-center justify-between">
                          <div className="text-left text-xl font-bold text-gray-800">RaceLad</div>
                          <div className="text-left text-lg font-bold text-gray-800"># 8888</div>
                        </div>
                        <p className="mt-1 text-left text-xl text-gray-600">Total: 10.000</p>
                        <div className="">
                          <div className="mt-2 flex items-center justify-between">
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600 md:text-xl">
                                Price:
                                <Image
                                  className="relative mt-1 inline-block w-max"
                                  layout="intrinsic"
                                  width={24}
                                  height={24}
                                  src="/Logo/eth.png"
                                  alt="eth"
                                />
                                10
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600">
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
                        <button className="absolute bottom-0 left-0 w-full translate-y-full border bg-p1-darkgreen bg-opacity-90 py-3 text-center text-xl text-p1-white transition-transform duration-500 ease-in-out hover:bg-p1-green group-hover:translate-y-0">
                          Buy
                        </button>
                      </div>
                    </div>

                    <div className="group relative w-80 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl">
                      <div>
                        <button className="absolute left-2 top-2 z-50 rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
                          Rare
                        </button>
                      </div>

                      <div className="relative">
                        <Link
                          href={'/rucard'}
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

                      <div className="w-full bg-p1-white p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12">
                        <div className="flex items-center justify-between">
                          <div className="text-left text-xl font-bold text-gray-800">RaceLad</div>
                          <div className="text-left text-lg font-bold text-gray-800"># 8888</div>
                        </div>
                        <p className="mt-1 text-left text-xl text-gray-600">Total: 10.000</p>
                        <div className="">
                          <div className="mt-2 flex items-center justify-between">
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600 md:text-xl">
                                Price:
                                <Image
                                  className="relative mt-1 inline-block w-max"
                                  layout="intrinsic"
                                  width={24}
                                  height={24}
                                  src="/Logo/eth.png"
                                  alt="eth"
                                />
                                10
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600">
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
                        <button className="absolute bottom-0 left-0 w-full translate-y-full border bg-p1-darkgreen bg-opacity-90 py-3 text-center text-xl text-p1-white transition-transform duration-500 ease-in-out hover:bg-p1-green group-hover:translate-y-0">
                          Buy
                        </button>
                      </div>
                    </div>

                    <div className="group relative inline-block">
                      <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none">
                        Наведи на меня
                      </button>

                      <div className="invisible absolute left-1/2 mt-2 w-64 -translate-x-1/2 transform rounded bg-white p-4 text-gray-800 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                        <p>Это всплывающая панель с дополнительной информацией!</p>
                      </div>
                    </div>

                    <div className="flex h-10 items-center justify-center bg-gray-100 font-sans">
                      <div className="group relative">
                        <button className="rounded-lg bg-indigo-600 px-6 py-3 text-white shadow-lg hover:bg-indigo-700">
                          Hover over me
                        </button>

                        <div className="absolute bottom-full left-1/2 mb-3 -translate-x-1/2 translate-y-2 transform rounded-md bg-black px-4 py-2 text-sm text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          I&apos;m a tooltip with animation!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2 rounded-3xl border-2 bg-p2-white2 p-2 text-p1-darkgreen dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                <div className="px-2 text-xl font-semibold md:pt-2 md:text-3xl">
                  <div className="pt-2 text-left">Витрина Showcase</div>
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
                    <div className="group relative w-80 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl">
                      <div>
                        <button className="absolute left-2 top-2 z-50 rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
                          Rare
                        </button>
                      </div>

                      <div className="relative">
                        <Link
                          href={'/rucard'}
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

                      <div className="w-full bg-p1-white p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12">
                        <div className="flex items-center justify-between">
                          <div className="text-left text-xl font-bold text-gray-800">RaceLad</div>
                          <div className="text-left text-lg font-bold text-gray-800"># 8888</div>
                        </div>
                        <p className="mt-1 text-left text-xl text-gray-600">Total: 10.000</p>
                        <div className="">
                          <div className="mt-2 flex items-center justify-between">
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600 md:text-xl">
                                Price:
                                <Image
                                  className="relative mt-1 inline-block w-max"
                                  layout="intrinsic"
                                  width={24}
                                  height={24}
                                  src="/Logo/eth.png"
                                  alt="eth"
                                />
                                10
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600">
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
                        <button className="absolute bottom-0 left-0 w-full translate-y-full border bg-p1-darkgreen bg-opacity-90 py-3 text-center text-xl text-p1-white transition-transform duration-500 ease-in-out hover:bg-p1-green group-hover:translate-y-0">
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2 rounded-3xl border-2 bg-p2-white2 p-2 text-p1-darkgreen dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                <div className="px-2 text-xl font-semibold md:pt-2 md:text-3xl">
                  <div className="pt-2 text-left">Для продажи For Sale</div>
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
                    <div className="group relative w-80 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl">
                      <div>
                        <button className="absolute left-2 top-2 z-50 rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
                          Rare
                        </button>
                      </div>

                      <div className="relative">
                        <Link
                          href={'/rucard'}
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

                      <div className="w-full bg-p1-white p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12">
                        <div className="flex items-center justify-between">
                          <div className="text-left text-xl font-bold text-gray-800">RaceLad</div>
                          <div className="text-left text-lg font-bold text-gray-800"># 8888</div>
                        </div>
                        <p className="mt-1 text-left text-xl text-gray-600">Total: 10.000</p>
                        <div className="">
                          <div className="mt-2 flex items-center justify-between">
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600 md:text-xl">
                                Price:
                                <Image
                                  className="relative mt-1 inline-block w-max"
                                  layout="intrinsic"
                                  width={24}
                                  height={24}
                                  src="/Logo/eth.png"
                                  alt="eth"
                                />
                                10
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600">
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
                        <button className="absolute bottom-0 left-0 w-full translate-y-full border bg-p1-darkgreen bg-opacity-90 py-3 text-center text-xl text-p1-white transition-transform duration-500 ease-in-out hover:bg-p1-green group-hover:translate-y-0">
                          Buy
                        </button>
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
                            </form>{' '}
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
                            </form>{' '}
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
                            </form>{' '}
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
                            </form>{' '}
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
                            </form>{' '}
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
                            </form>{' '}
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
                            </form>{' '}
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
                            </form>{' '}
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
                            </form>{' '}
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
                            </form>{' '}
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
                    <div className="group relative w-80 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl">
                      <div>
                        <button className="absolute left-2 top-2 z-50 rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
                          Rare
                        </button>
                      </div>

                      <div className="relative">
                        <Link
                          href={'/rucard'}
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

                      <div className="w-full bg-p1-white p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12">
                        <div className="flex items-center justify-between">
                          <div className="text-left text-xl font-bold text-gray-800">RaceLad</div>
                          <div className="text-left text-lg font-bold text-gray-800"># 8888</div>
                        </div>
                        <p className="mt-1 text-left text-xl text-gray-600">Total: 10.000</p>
                        <div className="">
                          <div className="mt-2 flex items-center justify-between">
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600 md:text-xl">
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
                              <p className="mt-1 text-left text-base text-gray-600">
                                <Image
                                  className="mt-1 inline-block w-max"
                                  width={18}
                                  height={18}
                                  src="/Logo/usd.png"
                                  alt="usd"
                                />
                                ===
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <button className="absolute bottom-0 left-0 w-full translate-y-full border bg-p1-darkgreen bg-opacity-90 py-3 text-center text-xl text-p1-white transition-transform duration-500 ease-in-out hover:bg-p1-green group-hover:translate-y-0">
                          Discover
                        </button>
                      </div>
                    </div>
                    <div></div>
                  </div>

                  <div className="pt-2 text-left">Награды</div>
                  <div className="mt-2 grid grid-cols-5 place-items-center gap-2 space-x-2 p-4 text-base md:text-xl">
                    <div className="group relative w-80 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl">
                      <div>
                        <button className="absolute left-2 top-2 z-50 rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
                          Rare
                        </button>
                      </div>

                      <div className="relative">
                        <Link
                          href={'/rucard'}
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

                      <div className="w-full bg-p1-white p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12">
                        <div className="flex items-center justify-between">
                          <div className="text-left text-xl font-bold text-gray-800">Award</div>
                          <div className="text-left text-lg font-bold text-gray-800"># 1</div>
                        </div>
                        <p className="mt-1 text-left text-xl text-gray-600">Total: 36899</p>
                        <div className="">
                          <div className="mt-2 flex items-center justify-between">
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600 md:text-xl">
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
                              <p className="mt-1 text-left text-base text-gray-600">
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
                        <button className="absolute bottom-0 left-0 w-full translate-y-full border bg-p1-darkgreen bg-opacity-90 py-3 text-center text-xl text-p1-white transition-transform duration-500 ease-in-out hover:bg-p1-green group-hover:translate-y-0">
                          Discover
                        </button>
                      </div>
                    </div>

                    <div className="group relative w-80 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl">
                      <div>
                        <button className="absolute left-2 top-2 z-50 rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
                          Rare
                        </button>
                      </div>

                      <div className="relative">
                        <Link
                          href={'/rucard'}
                          className="mx-auto justify-center hover:drop-shadow-2xl"
                        >
                          <Image
                            width={480}
                            height={480}
                            src="/Hero/cup2.png"
                            alt="cup2"
                            className="h-full w-full scale-50 object-cover transition-transform duration-500 ease-in-out group-hover:scale-75"
                          />
                        </Link>
                      </div>

                      <div className="w-full bg-p1-white p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12">
                        <div className="flex items-center justify-between">
                          <div className="text-left text-xl font-bold text-gray-800">Award</div>
                          <div className="text-left text-lg font-bold text-gray-800"># 1</div>
                        </div>
                        <p className="mt-1 text-left text-xl text-gray-600">Total: 36899</p>
                        <div className="">
                          <div className="mt-2 flex items-center justify-between">
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600 md:text-xl">
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
                              <p className="mt-1 text-left text-base text-gray-600">
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
                        <button className="absolute bottom-0 left-0 w-full translate-y-full border bg-p1-darkgreen bg-opacity-90 py-3 text-center text-xl text-p1-white transition-transform duration-500 ease-in-out hover:bg-p1-green group-hover:translate-y-0">
                          Discover
                        </button>
                      </div>
                    </div>
                    <div className="group relative w-80 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl">
                      <div>
                        <button className="absolute left-2 top-2 z-50 rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
                          Rare
                        </button>
                      </div>

                      <div className="relative">
                        <Link
                          href={'/rucard'}
                          className="mx-auto justify-center hover:drop-shadow-2xl"
                        >
                          <Image
                            width={480}
                            height={480}
                            src="/Hero/cup3.png"
                            alt="cup3"
                            className="h-full w-full scale-50 object-cover transition-transform duration-500 ease-in-out group-hover:scale-75"
                          />
                        </Link>
                      </div>

                      <div className="w-full bg-p1-white p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12">
                        <div className="flex items-center justify-between">
                          <div className="text-left text-xl font-bold text-gray-800">Award</div>
                          <div className="text-left text-lg font-bold text-gray-800"># 1</div>
                        </div>
                        <p className="mt-1 text-left text-xl text-gray-600">Total: 36899</p>
                        <div className="">
                          <div className="mt-2 flex items-center justify-between">
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600 md:text-xl">
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
                              <p className="mt-1 text-left text-base text-gray-600">
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
                        <button className="absolute bottom-0 left-0 w-full translate-y-full border bg-p1-darkgreen bg-opacity-90 py-3 text-center text-xl text-p1-white transition-transform duration-500 ease-in-out hover:bg-p1-green group-hover:translate-y-0">
                          Discover
                        </button>
                      </div>
                    </div>
                    <div>1</div>
                  </div>

                  <div className="pt-2 text-left">Награды</div>
                  <div className="mt-2 grid grid-cols-5 place-items-center gap-2 space-x-2 p-4 text-base md:text-xl">
                    <div className="group relative w-80 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl">
                      <div>
                        <button className="absolute left-2 top-2 z-50 rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
                          Rare
                        </button>
                      </div>

                      <div className="relative">
                        <Link
                          href={'/rucard'}
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

                      <div className="w-full bg-p1-white p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12">
                        <div className="flex items-center justify-between">
                          <div className="text-left text-xl font-bold text-gray-800">Award</div>
                          <div className="text-left text-lg font-bold text-gray-800"># 1</div>
                        </div>
                        <p className="mt-1 text-left text-xl text-gray-600">Total: 36899</p>
                        <div className="">
                          <div className="mt-2 flex items-center justify-between">
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600 md:text-xl">
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
                              <p className="mt-1 text-left text-base text-gray-600">
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
                        <button className="absolute bottom-0 left-0 w-full translate-y-full border bg-p1-darkgreen bg-opacity-90 py-3 text-center text-xl text-p1-white transition-transform duration-500 ease-in-out hover:bg-p1-green group-hover:translate-y-0">
                          Discover
                        </button>
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

                    <div className="group relative w-80 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl">
                      <div>
                        <button className="absolute left-2 top-2 z-50 rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
                          Rare
                        </button>
                      </div>

                      <div className="relative">
                        <Link
                          href={'/rucard'}
                          className="mx-auto justify-center hover:drop-shadow-2xl"
                        >
                          <Image
                            width={480}
                            height={480}
                            src="/HeroNFT/Drivers/Driver4.png"
                            alt="Driver4"
                            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-150"
                          />
                        </Link>
                      </div>

                      <div className="w-full bg-p1-white p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12">
                        <div className="flex items-center justify-between">
                          <div className="text-left text-xl font-bold text-gray-800">Driver</div>
                          <div className="text-left text-lg font-bold text-gray-800"># 88</div>
                        </div>
                        <p className="mt-1 text-left text-xl text-gray-600">Total: 15.000</p>
                        <p className="text-regular mt-1 text-center text-base text-gray-600">
                          Цареградцев Аркадий Петрович
                        </p>
                        <div className="">
                          <div className="mt-2 flex items-center justify-between">
                            <div className="text-center">
                              <p className="mt-1 text-left text-sm text-gray-600 md:text-xl">
                                Одержимые
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="mt-1 text-left text-base text-gray-600">Царь</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <button className="absolute bottom-0 left-0 w-full translate-y-full border bg-p1-darkgreen bg-opacity-90 py-3 text-center text-xl text-p1-white transition-transform duration-500 ease-in-out hover:bg-p1-green group-hover:translate-y-0">
                          Buy
                        </button>
                      </div>
                    </div>

                    <div className="mt-2 grid grid-cols-2 place-items-center gap-2 space-x-2 p-4 text-base md:text-xl">
                      <div>
                        <div className="w-30 group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl">
                          <div>
                            <button className="absolute left-2 top-2 z-50 rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
                              Rare
                            </button>
                          </div>

                          <div className="relative">
                            <Link
                              href={'/rucard'}
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

                          <div className="w-full bg-p1-white p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12">
                            <div className="flex items-center justify-between">
                              <div className="text-left text-xl font-bold text-gray-800">Award</div>
                              <div className="text-left text-lg font-bold text-gray-800"># 1</div>
                            </div>
                            <p className="mt-1 text-left text-xl text-gray-600">Total: 36899</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <button className="absolute bottom-0 left-0 w-full translate-y-full border bg-p1-darkgreen bg-opacity-90 py-3 text-center text-xl text-p1-white transition-transform duration-500 ease-in-out hover:bg-p1-green group-hover:translate-y-0">
                              Discover
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="w-30 group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl">
                          <div>
                            <button className="absolute left-2 top-2 z-50 rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
                              Rare
                            </button>
                          </div>

                          <div className="relative">
                            <Link
                              href={'/rucard'}
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

                          <div className="w-full bg-p1-white p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12">
                            <div className="flex items-center justify-between">
                              <div className="text-left text-xl font-bold text-gray-800">Award</div>
                              <div className="text-left text-lg font-bold text-gray-800"># 1</div>
                            </div>
                            <p className="mt-1 text-left text-xl text-gray-600">Total: 36899</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <button className="absolute bottom-0 left-0 w-full translate-y-full border bg-p1-darkgreen bg-opacity-90 py-3 text-center text-xl text-p1-white transition-transform duration-500 ease-in-out hover:bg-p1-green group-hover:translate-y-0">
                              Discover
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="w-30 group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl">
                          <div>
                            <button className="absolute left-2 top-2 z-50 rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
                              Rare
                            </button>
                          </div>

                          <div className="relative">
                            <Link
                              href={'/rucard'}
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

                          <div className="w-full bg-p1-white p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12">
                            <div className="flex items-center justify-between">
                              <div className="text-left text-xl font-bold text-gray-800">Award</div>
                              <div className="text-left text-lg font-bold text-gray-800"># 1</div>
                            </div>
                            <p className="mt-1 text-left text-xl text-gray-600">Total: 36899</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <button className="absolute bottom-0 left-0 w-full translate-y-full border bg-p1-darkgreen bg-opacity-90 py-3 text-center text-xl text-p1-white transition-transform duration-500 ease-in-out hover:bg-p1-green group-hover:translate-y-0">
                              Discover
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="w-30 group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-2xl">
                          <div>
                            <button className="absolute left-2 top-2 z-50 rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
                              Rare
                            </button>
                          </div>

                          <div className="relative">
                            <Link
                              href={'/rucard'}
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

                          <div className="w-full bg-p1-white p-4 text-p1-darkgreen transition-transform duration-500 ease-in-out group-hover:-translate-y-12">
                            <div className="flex items-center justify-between">
                              <div className="text-left text-xl font-bold text-gray-800">Award</div>
                              <div className="text-left text-lg font-bold text-gray-800"># 1</div>
                            </div>
                            <p className="mt-1 text-left text-xl text-gray-600">Total: 36899</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <button className="absolute bottom-0 left-0 w-full translate-y-full border bg-p1-darkgreen bg-opacity-90 py-3 text-center text-xl text-p1-white transition-transform duration-500 ease-in-out hover:bg-p1-green group-hover:translate-y-0">
                              Discover
                            </button>
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
