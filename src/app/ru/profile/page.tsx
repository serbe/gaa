'use client';
import Image from 'next/image';
import { JumpButton } from '@/components/jumpButton';
import { Link } from '@/i18n/routing';

export default function Page() {
  const jumpPoints = ['1', '2', '3'];

  return (
    <div className="mx-auto font-serif">
      <JumpButton points={jumpPoints} />

      <div id="1"></div>

      <div className="h-screen bg-[url('/background/bgsky.png')] bg-cover bg-center p-2 dark:brightness-75">
        <div className="flex justify-center space-x-2"></div>
        <div className="grid grid-cols-2 justify-center p-1 md:justify-between">
          <div className="flex justify-start space-x-6"></div>

          {/* кошелек, профиль, корзина */}
          <div className="flex justify-end space-x-6 px-2 md:px-32">
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

        {/* Навигация 2 */}

        <div className="flex justify-end space-x-6 px-2 pt-4 md:px-32">
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
        <div className="flex space-x-2 px-2 md:px-10">
          <div>
            <Link href={'#'} className="md: mx-auto">
              <Image
                className="border-p1-gray dark:ring-p1-darkgreen -mt-10 w-40 rounded-full border-4 md:w-80"
                width={1000}
                height={1000}
                src="/HeroNFT/RaceLads/RaceLads1.png"
                alt="Bordered avatar"
              />
            </Link>
            <div className="text-p1-darkgreen place-content-end">
              <p className="text-3xl font-semibold md:px-10">Unnamed</p>
              <p className="font-thing text-2xl md:px-10">0 x6918...a442 </p>
              <p className="font-thing text-2xl md:px-10">Joined May 2024 </p>
            </div>
          </div>
        </div>
        <div className="-my-4 place-items-start p-1">
          <div
            id="2"
            className="bg-p1-white bg-opacity-30 my-8 w-full place-self-center rounded-2xl md:w-4/6 xl:-my-96 xl:w-2/6"
          >
            <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between">
              <div className="dark:text-p1-darkgreen px-2 text-2xl font-semibold text-stone-400 md:pt-2 md:text-4xl">
                Profile
              </div>
              <div className="dark:text-p1-darkgreen px-2 text-2xl font-semibold text-stone-400 md:pt-2 md:text-4xl">
                Профиль
              </div>
            </div>
            <div className="bg-p1-white bg-opacity-75 dark:bg-p1-deepdarkgreen m-4 rounded-3xl border-stone-400 p-4 md:border-4 md:shadow-lg dark:border-stone-900">
              <div className="grid grid-cols-1 gap-4 md:w-full xl:grid-cols-2">
                <div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-p1-darkgreen dark:text-p1-green block text-left text-sm font-medium"
                    >
                      email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-p2-white2 text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder-p1-green dark:focus:border-p1-cyan dark:focus:ring-p1-cyan block w-full rounded-xl border-2 border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="e-mail"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="nic_name"
                      className="text-p1-darkgreen dark:text-p1-green block text-left text-sm font-medium"
                    >
                      Ник-Имя
                    </label>
                    <input
                      type="text"
                      id="nic_name"
                      className="bg-p2-white2 text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder-p1-green dark:focus:border-p1-cyan dark:focus:ring-p1-cyan block w-full rounded-xl border-2 border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Ник-Имя"
                      required
                    />
                  </div>
                </div>

                <div>
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
                      className="bg-p2-white2 text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder-p1-green dark:focus:border-p1-cyan dark:focus:ring-p1-cyan block w-full rounded-xl border-2 border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Страна"
                      required
                    />
                  </div>

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
                      className="bg-p2-white2 text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder-p1-green dark:focus:border-p1-cyan dark:focus:ring-p1-cyan block w-full rounded-xl border-2 border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Город"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-p1-darkgreen dark:text-p1-green mb-2 block text-left text-sm font-medium"
                  >
                    Описание
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="bg-p2-white2 text-p1-darkgreen dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder-p1-green dark:focus:border-p1-cyan dark:focus:ring-p1-cyan block w-full rounded-xl border-2 border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Описание"
                  ></textarea>
                </div>

                <button className="bg-p2-white2 text-p1-darkgreen hover:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan rounded-xl border-2 border-stone-400 px-4 py-2 shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-stone-400 md:mt-10">
                  Сохранить
                </button>
              </div>
            </div>

            <div className="pb-4"> </div>
          </div>

          <div className=""> </div>
        </div>
      </div>

      <div className="pb-5"></div>
    </div>
  );
}
