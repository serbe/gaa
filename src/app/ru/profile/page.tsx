'use client';
import Image from 'next/image';
import { JumpButton } from '@/components/jumpButton';
import { Link } from '@/i18n/routing';
import { useFavicon } from '@/utils/hooks';

export default function Page() {
  const jumpPoints = ['1', '2', '3'];
  useFavicon('/Logo/user.png ');

  return (
    <div className="mx-auto font-serif">
      <JumpButton points={jumpPoints} />

      <div id="1"></div>

      <div className="h-screen bg-[url('/background/bgsky.png')] bg-cover bg-center p-2 dark:brightness-75">
        <div className="flex justify-center space-x-2"></div>
        <div className="grid grid-cols-2 justify-center p-1 md:justify-between">
          <div className="flex justify-start space-x-6"></div>
        </div>

        <div className="flex space-x-2 px-2 md:px-10 md:pt-10">
          <div>
            <Link href="#" className="md: mx-auto">
              <Image
                className="-mt-10 w-40 rounded-full border-4 border-p1-gray md:w-80 dark:ring-p1-darkgreen"
                width={1000}
                height={1000}
                src="/HeroNFT/RaceLads/RaceLads1.png"
                alt="Bordered avatar"
              />
            </Link>

            <div className="place-content-end text-p1-darkgreen">
              <p className="text-3xl font-semibold md:px-10">Unnamed</p>
              <p className="text-2xl font-thin md:px-10">0 x6918...a442 </p>
              <p className="text-2xl font-thin md:px-10">Joined May 2024 </p>
            </div>
          </div>
        </div>
        <div className="-my-4 place-items-start p-1">
          <div
            id="2"
            className="my-8 max-w-screen-sm place-self-center rounded-2xl bg-p1-white/30 md:w-4/6 xl:-my-96 xl:w-2/6"
          >
            <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between">
              <div className="px-2 text-2xl font-semibold text-stone-400 md:pt-2 md:text-4xl dark:text-p1-darkgreen">
                Profile
              </div>
              <div className="px-2 text-2xl font-semibold text-stone-400 md:pt-2 md:text-4xl dark:text-p1-darkgreen">
                Профиль
              </div>
            </div>
            <div className="m-4 rounded-3xl border-stone-400 bg-p1-white/75 p-4 md:border-4 md:shadow-lg dark:border-stone-900 dark:bg-p1-deepdarkgreen">
              <div className="grid grid-cols-1 gap-4 md:w-full xl:grid-cols-2">
                <div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                    >
                      email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full rounded-xl border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-blue-500 focus:ring-blue-500 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder:text-p1-green dark:focus:border-p1-cyan dark:focus:ring-p1-cyan"
                      placeholder="e-mail"
                      required
                    />
                  </div>

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
                      className="block w-full rounded-xl border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-blue-500 focus:ring-blue-500 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder:text-p1-green dark:focus:border-p1-cyan dark:focus:ring-p1-cyan"
                      placeholder="Ник-Имя"
                      required
                    />
                  </div>
                </div>

                <div>
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
                      className="block w-full rounded-xl border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-blue-500 focus:ring-blue-500 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder:text-p1-green dark:focus:border-p1-cyan dark:focus:ring-p1-cyan"
                      placeholder="Страна"
                      required
                    />
                  </div>

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
                      className="block w-full rounded-xl border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-blue-500 focus:ring-blue-500 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder:text-p1-green dark:focus:border-p1-cyan dark:focus:ring-p1-cyan"
                      placeholder="Город"
                      required
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-green"
                  >
                    Описание
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="block w-full rounded-xl border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-blue-500 focus:ring-blue-500 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder:text-p1-green dark:focus:border-p1-cyan dark:focus:ring-p1-cyan"
                    placeholder="Описание"
                  ></textarea>
                </div>
                <div> </div>

                <button className="rounded-xl border-2 border-stone-400 bg-p2-white2 px-4 py-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-stone-400 hover:text-p1-white md:mt-10 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-green dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan">
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
