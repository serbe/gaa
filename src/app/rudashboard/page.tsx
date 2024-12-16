'use client';
import Image from 'next/image';
import { JumpButton } from '@/components/jumpButton';

export default function Home() {
  const jumpPoints = ['1', '2', '3'];
  return (
    <div className="mx-auto max-w-full font-serif">
      <JumpButton points={jumpPoints} />

      <section className="flex flex-wrap object-left px-2 md:flex-nowrap md:space-x-2 md:pt-5">
        <div className="rounded-3xl border-p2-orange bg-p1-white shadow-lg md:mb-4 md:w-10 md:min-w-52 md:border-4 dark:bg-p1-deepdarkgreen">
          <div className="flex flex-row">
            <div id="1" className="mx-auto text-left md:pt-2 md:text-xl lg:text-2xl">
              <Image
                className="h-10 w-10 rounded-full p-1 ring-2 ring-p1-green dark:ring-p1-darkgreen"
                width={1000}
                height={1000}
                src="/HeroNFT/RaceLads/RaceLads1.png"
                alt="Bordered avatar"
              />
            </div>
          </div>
        </div>

        <div className="mb-4 rounded-3xl border-p1-darkgreen bg-p1-white shadow-lg md:border-4 dark:border-p1-green dark:bg-p1-deepdarkgreen">
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
                width={1000}
                height={1000}
                src="/HeroNFT/RaceLads/RaceLads1.png"
                alt="Bordered avatar"
              />
            </div>
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

              <div className="mt-2 rounded-3xl border-2 bg-p2-white2 p-2 text-p1-darkgreen dark:border-p1-darkgreen dark:bg-p1-deepdarkgreen dark:text-p1-green">
                <div className="px-2 text-xl font-semibold md:pt-2 md:text-3xl">
                  <div className="pt-2 text-left">Коллекции</div>
                  <div className="mt-2 grid grid-cols-7 gap-2 space-x-2 p-4 text-base md:text-xl">
                    <a
                      href="#"
                      className="block max-w-sm rounded-3xl border border-gray-200 bg-white bg-[url('/HeroNFT/RaceLads/RaceLads1.png')] bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        RaceLads{' '}
                      </h5>
                      <p className="pt-32 font-normal text-gray-700 dark:text-gray-400">
                        10000 RaceLads
                      </p>
                    </a>

                    <a
                      href="#"
                      className="block max-w-sm rounded-3xl border border-gray-200 bg-white bg-[url('/HeroNFT/Drivers/Driver4.png')] bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        Drivers{' '}
                      </h5>
                      <p className="pt-32 font-normal text-gray-700 dark:text-gray-400">
                        5000 Drivers
                      </p>
                    </a>
                    <a
                      href="#"
                      className="bg-[src='/HeroNFT/Team's members/TeamMember1.png')] block max-w-sm rounded-3xl border border-gray-200 bg-white bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        Team&apos;s Members{' '}
                      </h5>
                      <p className="pt-24 font-normal text-gray-700 dark:text-gray-400">
                        50000 Team&apos;s Members
                      </p>
                    </a>
                    <a
                      href="#"
                      className="block max-w-sm rounded-3xl border border-gray-200 bg-white bg-[url('/HeroNFT/Collectors/Collector1.png')] bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        Сollectors{' '}
                      </h5>
                      <p className="pt-32 font-normal text-gray-700 dark:text-gray-400">
                        5000 Сollectors
                      </p>
                    </a>
                    <a
                      href="#"
                      className="block max-w-sm rounded-3xl border border-gray-200 bg-white bg-[url('/HeroNFT/CustomLads/CustomLads1.png')] bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        CustomLads{' '}
                      </h5>
                      <p className="pt-32 font-normal text-gray-700 dark:text-gray-400">
                        35000 CustomLads
                      </p>
                    </a>
                    <a
                      href="#"
                      className="block max-w-sm rounded-3xl border border-gray-200 bg-white bg-[url('/Hero/Rewards.png')] bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        Награды{' '}
                      </h5>
                      <p className="pt-32 font-normal text-gray-700 dark:text-gray-400">
                        23500000 Наград
                      </p>
                    </a>
                    <a
                      href="#"
                      className="bg-[url('/Licenses/Promoter Lic.png')] block max-w-sm rounded-3xl border border-gray-200 bg-white bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        Лицензии{' '}
                      </h5>
                      <p className="pt-32 font-normal text-gray-700 dark:text-gray-400">
                        15000 Лицензий
                      </p>
                    </a>
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
                  <div className="pt-2 text-left">Мои NFT___ Total NFTs:____ GAA_NFTs:_____</div>
                  <div className="pt-2 text-left">RaceLads</div>

                  <div className="mt-2 grid grid-cols-7 gap-2 space-x-2 p-4 text-base md:text-base">
                    <a
                      href="/rucard"
                      className="block max-w-sm rounded-3xl border border-gray-200 bg-white bg-[url('/HeroNFT/RaceLads/RaceLads1.png')] bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        RaceLad #1{' '}
                      </h5>
                      <p className="pt-32 font-normal text-gray-700 dark:text-gray-400">
                        10000 RaceLads
                      </p>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Floor Price: ETH:15
                      </p>
                    </a>
                    <a
                      href="#"
                      className="block max-w-sm rounded-3xl border border-gray-200 bg-white bg-[url('/HeroNFT/RaceLads/RaceLads2.png')] bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        RaceLad #2{' '}
                      </h5>
                      <p className="pt-32 font-normal text-gray-700 dark:text-gray-400">
                        10000 RaceLads
                      </p>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Floor Price: ETH:15
                      </p>
                    </a>
                    <a
                      href="#"
                      className="block max-w-sm rounded-3xl border border-gray-200 bg-white bg-[url('/HeroNFT/RaceLads/RaceLads3.png')] bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        RaceLad #3{' '}
                      </h5>
                      <p className="pt-32 font-normal text-gray-700 dark:text-gray-400">
                        10000 RaceLads
                      </p>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Floor Price: ETH:15
                      </p>
                    </a>

                    <a
                      href="#"
                      className="block max-w-sm rounded-3xl border border-gray-200 bg-white bg-[url('/HeroNFT/RaceLads/RaceLads4.png')] bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        RaceLad #4{' '}
                      </h5>
                      <p className="pt-32 font-normal text-gray-700 dark:text-gray-400">
                        10000 RaceLads
                      </p>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Floor Price: ETH:15
                      </p>
                    </a>
                  </div>
                  <div className="pt-2 text-left">Drivers</div>

                  <div className="mt-2 grid grid-cols-7 gap-2 space-x-2 p-4 text-base md:text-base">
                    <a
                      href="#"
                      className="block max-w-sm rounded-3xl border border-gray-200 bg-white bg-[url('/HeroNFT/Drivers/Driver3.png')] bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        Driver #1{' '}
                      </h5>

                      <p className="pt-32 font-normal text-gray-700 dark:text-gray-400">
                        10000 Drivers
                      </p>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Floor Price: ETH:15
                      </p>
                    </a>

                    <a
                      href="#"
                      className="block max-w-sm rounded-3xl border border-gray-200 bg-white bg-[url('/HeroNFT/Drivers/Driver4.png')] bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        Driver #2{' '}
                      </h5>

                      <p className="pt-32 font-normal text-gray-700 dark:text-gray-400">
                        10000 Drivers
                      </p>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Floor Price: ETH:15
                      </p>
                    </a>
                    <a
                      href="#"
                      className="block max-w-sm rounded-3xl border border-gray-200 bg-white bg-[url('/HeroNFT/Drivers/Driver2.png')] bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        Driver #3{' '}
                      </h5>

                      <p className="pt-32 font-normal text-gray-700 dark:text-gray-400">
                        10000 Drivers
                      </p>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Floor Price: ETH:15
                      </p>
                    </a>
                    <a
                      href="#"
                      className="block max-w-sm rounded-3xl border border-gray-200 bg-white bg-[url('/HeroNFT/Drivers/Driver1.png')] bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        Driver #4{' '}
                      </h5>

                      <p className="pt-32 font-normal text-gray-700 dark:text-gray-400">
                        10000 Drivers
                      </p>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Floor Price: ETH:15
                      </p>
                    </a>
                  </div>
                  <div className="pt-2 text-left">Team&apos;s Members</div>

                  <div className="mt-2 grid grid-cols-7 gap-2 space-x-2 p-4 text-base">
                    <a
                      href="#"
                      className="block max-w-sm rounded-3xl border border-gray-200 bg-white bg-[url('/HeroNFT/RaceLads/RaceLads1.png')] bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        Team&apos;s Members #1{' '}
                      </h5>
                      <p className="pt-32 font-normal text-gray-700 dark:text-gray-400">
                        10000 Team&apos;s Members
                      </p>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Floor Price: ETH:15
                      </p>
                    </a>

                    <a
                      href="#"
                      className="block max-w-sm rounded-3xl border border-gray-200 bg-white bg-[url('/HeroNFT/Drivers/Driver4.png')] bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        Team&apos;s Members #2{' '}
                      </h5>
                      <p className="pt-32 font-normal text-gray-700 dark:text-gray-400">
                        10000 Team&apos;s Members
                      </p>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Floor Price: ETH:15
                      </p>
                    </a>
                  </div>
                  <div className="pt-2 text-left">Collectors</div>

                  <div className="mt-2 grid grid-cols-7 gap-2 space-x-2 p-4 text-base">
                    <a
                      href="#"
                      className="block max-w-sm rounded-3xl border border-gray-200 bg-white bg-[url('/HeroNFT/Collectors/Collector1.png')] bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        Сollectors{' '}
                      </h5>
                      <p className="pt-32 font-normal text-gray-700 dark:text-gray-400">
                        5000 Сollectors
                      </p>
                    </a>
                  </div>

                  <div className="pt-2 text-left">CustomLads</div>

                  <div className="mt-2 grid grid-cols-7 gap-2 space-x-2 p-4 text-base md:text-xl"></div>

                  <div className="pt-2 text-left">Награды</div>

                  <div className="mt-2 grid grid-cols-7 gap-2 space-x-2 p-4 text-base md:text-xl">
                    <a
                      href="#"
                      className="block max-w-sm rounded-3xl border border-gray-200 bg-white bg-[url('/HeroNFT/RaceLads/RaceLads1.png')] bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        RaceLads{' '}
                      </h5>
                      <p className="pt-32 font-normal text-gray-700 dark:text-gray-400">
                        10000 RaceLads
                      </p>
                    </a>

                    <a
                      href="#"
                      className="block max-w-sm rounded-3xl border border-gray-200 bg-white bg-[url('/HeroNFT/Drivers/Driver4.png')] bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        Drivers{' '}
                      </h5>
                      <p className="pt-32 font-normal text-gray-700 dark:text-gray-400">
                        5000 Drivers
                      </p>
                    </a>
                  </div>
                  <div className="pt-2 text-left">Лицензии</div>

                  <div className="mt-2 grid grid-cols-7 gap-2 space-x-2 p-4 text-base md:text-xl">
                    <a
                      href="#"
                      className="block max-w-sm rounded-3xl border border-gray-200 bg-white bg-[url('/HeroNFT/RaceLads/RaceLads1.png')] bg-contain bg-no-repeat p-1 shadow duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-p1-green">
                        RaceLads{' '}
                      </h5>
                      <p className="pt-32 font-normal text-gray-700 dark:text-gray-400">
                        10000 RaceLads
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="3"></div>
    </div>
  );
}
