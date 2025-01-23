'use client';

import { useLayoutEffect } from 'react';
import { useGaaStore } from '@/context/gaa-store-provider';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { JumpButton } from '@/components/jumpButton';

export default function Page() {
  const jumpPoints = ['racelads', 'movement-leaders', 'custom-lads', 'awards', 'licenses'];
  const [{ setLicense, setLider }, gaaStore] = useGaaStore((state) => state);

  useLayoutEffect(() => {
    void gaaStore.persist.rehydrate();
  }, [gaaStore.persist]);

  return !gaaStore.persist.hasHydrated() ? (
    'Loading...'
  ) : (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />
      <div
        id="racelads"
        className="text-center text-4xl font-bold text-p1-darkgreen md:pt-4 md:text-6xl dark:text-p1-green dark:hover:text-p1-cyan"
      >
        RaceLads
        <p className="text-center text-xl md:pb-4 md:text-4xl">by Global Automotive Association</p>
      </div>
      <div className="w-full place-self-center rounded-3xl border-p1-darkgreen text-center text-p1-darkgreen md:w-3/5 md:border-4 md:shadow-lg dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
        <div>
          <div className="text-base md:pt-2 md:text-2xl">
          Generative collection
            <h2 className="text-base md:pb-2 md:text-2xl">RaceLads NFT</h2>
          </div>
          <Image
            className="relative mb-2 inline-block w-2/5 rounded-3xl border-2 border-p2-orange shadow-lg md:w-2/5 dark:border-p1-green"
            width={1000}
            height={1000}
            src="/HeroNFT/RaceLads/RaceLads1.png"
            alt="RaceLads1"
          />
          <p className="text-base md:text-2xl">10,000 unique heroes in the world of WEB3</p>

          <div className="inline-flex rounded-md pt-5 shadow-sm md:place-self-center">
            <Link
              href="/discoveryracelads"
              className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p1-darkgreen focus:text-p1-white focus:ring-2 focus:ring-p1-darkgreen md:p-5 dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p1-green dark:hover:bg-p1-green dark:hover:text-p1-deepdarkgreen"
            >
             Read more
            </Link>
            <Link
              href="/mintracelads"
              className="rounded-r-xl border-2 border-p2-orange bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white hover:ring-p2-orange focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange md:p-5 dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p2-orange dark:hover:bg-amber-600 dark:hover:text-amber-100"
            >
             Create NFT
            </Link>
          </div>
          <div className="pb-4 md:pt-4"></div>
        </div>
      </div>
      <div className="md:h-96"> </div>
      <div className="h-14"></div>

      {/* //Лидеры движений */}
      <div
        id="movement-leaders"
        className="p-2 text-center text-4xl font-bold text-p1-darkgreen md:pt-20 md:text-6xl dark:text-p1-green dark:hover:text-p1-cyan"
      >
        Leaders of Movements
      </div>
      <div className="mx-5 grid grid-cols-1 gap-2 rounded-3xl border-p1-darkgreen text-center text-p1-darkgreen md:grid-cols-2 md:border-4 md:p-5 md:shadow-lg xl:grid-cols-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
        <div>
          <p className="text-2xl">Drivers</p>
          <Image
            className="relative mb-4 inline-block w-3/5 rounded-3xl border-2 border-red-400 shadow-lg md:w-full dark:border-p1-green"
            width={1000}
            height={1000}
            src="/HeroNFT/Drivers/Driver4.png"
            alt="Driver4"
          />

          <p className="pb-2 pt-2 text-base">Racing car and racing drivers who have joined Web3</p>
          <div className="py-5">
            <Link
              href="/discoveryliders"
              className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p1-darkgreen focus:text-p1-white focus:ring-2 focus:ring-p1-darkgreen md:p-5 dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p1-green dark:hover:bg-p1-green dark:hover:text-p1-deepdarkgreen"
              onClick={() => {
                setLider(0);
              }}
            >
              Read more
            </Link>
            <Link
              href="/mintdrivers"
              className="rounded-r-xl border-2 border-red-400 bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-red-400 hover:text-p1-white focus:z-10 focus:bg-red-400 focus:text-p1-white focus:ring-2 focus:ring-red-400 md:p-5 dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:bg-red-900 dark:hover:text-red-100 dark:focus:text-p1-cyan dark:focus:ring-p1-green"
            >
              Create NFT
            </Link>
          </div>
        </div>
        <div>
          <p className="text-2xl">Team&apos;s Members</p>
          <Image
            className="relative mb-4 inline-block w-3/5 rounded-3xl border-2 border-p3-blue shadow-lg md:w-full dark:border-p1-green"
            width={1000}
            height={1000}
            src="/HeroNFT/Team's members/TeamMember1.png"
            alt="TeamMember1"
          />

          <p className="pt-2 text-base">Team members who joined</p>
          <p className="pb-2 text-base">Web3</p>
          <div className="py-5">
            <Link
              href="/discoveryliders"
              className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p1-darkgreen focus:text-p1-white focus:ring-2 focus:ring-p1-darkgreen md:p-5 dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p1-green dark:hover:bg-p1-green dark:hover:text-p1-deepdarkgreen"
              onClick={() => {
                setLider(1);
              }}
            >
              Read more
            </Link>
            <Link
              href="/mintteammembers"
              className="rounded-r-xl border-2 border-p3-blue bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p3-blue hover:text-p1-white focus:z-10 focus:bg-p3-blue focus:text-p1-white focus:ring-2 focus:ring-p3-blue md:p-5 dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:bg-p3-violet dark:hover:text-white dark:focus:text-white dark:focus:ring-p3-blue"
            >
             Create NFT
            </Link>
          </div>
        </div>
        <div>
          <p className="text-2xl">Collectors</p>
          <Image
            className="relative mb-4 inline-block w-3/5 rounded-3xl border-2 border-stone-500 shadow-lg md:w-full dark:border-p1-green"
            width={1000}
            height={1000}
            src="/HeroNFT/Collectors/Collector1.png"
            alt="Collector1"
          />

          <p className="p-2 text-base">
          Owners of rare, sports and unique cars who have joined Web3
          </p>
          <div className="py-5">
            <Link
              href="/discoveryliders"
              className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p1-darkgreen focus:text-p1-white focus:ring-2 focus:ring-p1-darkgreen md:p-5 dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p1-green dark:hover:bg-p1-green dark:hover:text-p1-deepdarkgreen"
              onClick={() => {
                setLider(2);
              }}
            >
              Read more
            </Link>
            <Link
              href="/mintcollectors"
              className="rounded-r-xl border-2 border-stone-500 bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-stone-500 hover:text-p1-white focus:z-10 focus:bg-stone-500 focus:text-p1-white focus:ring-2 focus:ring-stone-500 md:p-5 dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:bg-stone-700 dark:hover:text-stone-100 dark:focus:text-white dark:focus:ring-stone-500"
            >
             Create NFT
            </Link>
          </div>
        </div>
        <div>
          <p className="text-2xl">Cars</p>

          <Image
            className="relative mb-4 inline-block w-3/5 rounded-3xl border-2 border-p3-blue shadow-lg md:w-full dark:border-p1-green"
            width={1000}
            height={1000}
            src="/Cars/Car.png"
            alt="Car"
          />
          <p className="p-2 text-base">
          Rare, unique and sports cars from private collections
          </p>
          <div className="py-5">
            <Link
              href="/discoverycars"
              className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p1-darkgreen focus:text-p1-white focus:ring-2 focus:ring-p1-darkgreen md:p-5 dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p1-green dark:hover:bg-p1-green dark:hover:text-p1-deepdarkgreen"
            >
              Read more
            </Link>
            <Link
              href="/mintcars"
              className="rounded-r-xl border-2 border-cyan-700 bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-700 hover:text-p1-white focus:z-10 focus:bg-cyan-700 focus:text-p1-white focus:ring-2 focus:ring-cyan-700 md:p-5 dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:bg-cyan-900 dark:hover:text-white dark:focus:text-white dark:focus:ring-cyan-700"
            >
             Create NFT
            </Link>
          </div>
        </div>
      </div>
      <div className="md:h-96"> </div>
      <div className="h-14"></div>

      {/* // CustomLads */}

      <div
        id="custom-lads"
        className="p-2 text-center text-4xl font-bold text-p1-darkgreen md:pt-20 md:text-6xl dark:text-p1-green dark:hover:text-p1-cyan"
      >
        CustomLads
      </div>

      <div className="w-full place-self-center rounded-3xl border-p1-darkgreen text-center text-p1-darkgreen md:w-3/5 md:border-4 md:shadow-lg dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
        <div>
          <p className="text-base md:pt-2 md:text-2xl">
          Assemble your hero from ready-made elements of the collection          </p>
          <h2 className="pb-2 text-2xl">RaceLads </h2>

          <Image
            className="relative mb-2 inline-block w-2/5 rounded-3xl border-2 border-p2-orange shadow-lg md:w-2/5 dark:border-p1-green"
            width={1000}
            height={1000}
            src="/HeroNFT/CustomLads/CustomLads1.png"
            alt="CustomLads1"
          />
          <p className="pt-2 text-base md:pt-2 md:text-2xl">
          For RaceLads Collection NFT holders only          </p>
          <p className="pb-2 text-base md:text-2xl">Who is your character - it's up to you to decide!</p>
          <div className="inline-flex rounded-md shadow-sm md:place-self-center">
            <Link
              href="/discoverycustomlads"
              className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p1-darkgreen focus:text-p1-white focus:ring-2 focus:ring-p1-darkgreen md:p-5 dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p1-green dark:hover:bg-p1-green dark:hover:text-p1-deepdarkgreen"
            >
              Read more
            </Link>
            <Link
              href="/mintcustomlads"
              className="rounded-r-xl border-2 border-p2-orange bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white hover:ring-p2-orange focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange md:p-5 dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p2-orange dark:hover:bg-amber-600 dark:hover:text-amber-100"
            >
              Create NFT
            </Link>
          </div>
          <div className="pb-4 pt-4"></div>
        </div>
      </div>
      <div className="md:h-96"> </div>
      <div className="h-14"></div>
      {/* //Награды */}

      <div
        id="awards"
        className="pt-2 text-center text-4xl font-bold text-p1-darkgreen md:pt-20 md:text-6xl dark:text-p1-green dark:hover:text-p1-cyan"
      >
        Awards NFT
      </div>
      <div className="w-full place-self-center rounded-3xl border-p1-darkgreen text-center text-p1-darkgreen md:w-3/5 md:border-4 md:shadow-lg dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
        <p className="pt-2 text-base md:pt-2 md:text-2xl">Present awards to the winners!</p>
        <div>
          <Image
            className="relative mb-2 inline-block w-2/5 rounded-3xl border-2 border-p2-orange shadow-lg md:w-2/5"
            width={1000}
            height={1000}
            src="/Hero/Rewards.png"
            alt="Rewards"
          />
          <p className="pt-2 text-base md:px-10 md:text-2xl">
          NFT rewards contain metadata about the event, athlete and media content          </p>
          <div className="inline-flex rounded-md pt-5 shadow-sm md:place-self-center">
            <Link
              href="/discoveryrewards"
              className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p1-darkgreen focus:text-p1-white focus:ring-2 focus:ring-p1-darkgreen md:p-5 dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p1-green dark:hover:bg-p1-green dark:hover:text-p1-deepdarkgreen"
            >
              Read more
            </Link>
            <Link
              href="/mintrewards"
              className="rounded-r-xl border-2 border-p2-orange bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white hover:ring-p2-orange focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange md:p-5 dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p2-orange dark:hover:bg-amber-600 dark:hover:text-amber-100"
            >
              Create NFT
            </Link>
          </div>
          <div className="pb-4 pt-4"></div>
        </div>
      </div>
      <div className="md:h-96"> </div>
      <div className="h-14"></div>

      {/* //Лицензии */}
      <div
        id="licenses"
        className="pt-2 text-center text-4xl font-bold text-p1-darkgreen md:pt-20 md:text-6xl dark:text-p1-green dark:hover:text-p1-cyan"
      >
        Licenses
        <p className="pb-2 text-center text-xl font-bold md:pb-5 md:text-4xl">
        NFTs that give preferences to their holders        </p>
      </div>
      <div className="m-5 grid grid-cols-1 gap-2 place-self-center rounded-3xl border-p1-darkgreen p-5 text-center text-p1-darkgreen md:grid-cols-3 md:border-4 md:shadow-lg dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
        <div className="mb-4 mt-4">
          <p className="pb-2 text-2xl">Promoter License</p>
          <Image
            className="relative mb-4 inline-block w-3/5 rounded-3xl border-2 border-amber-600 shadow-lg md:w-4/5"
            width={1000}
            height={1000}
            src="/Licenses/Promoter Lic.png"
            alt="PromoterLic"
          />

          <p className="pb-8 text-xl">Provides access to the NFT reward creation page</p>
          <Link
            href="/discoverylicense"
            onClick={() => {
              setLicense(0);
            }}
            className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p1-darkgreen focus:text-p1-white focus:ring-2 focus:ring-p1-darkgreen md:p-5 dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p1-green dark:hover:bg-p1-green dark:hover:text-p1-deepdarkgreen"
          >
            Read more
          </Link>
          <Link
            href="/license"
            onClick={() => {
              setLicense(0);
            }}
            className="rounded-r-xl border-2 border-amber-600 bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-amber-600 hover:text-p1-white focus:z-10 focus:bg-amber-600 focus:text-p1-white focus:ring-2 focus:ring-amber-600 md:p-5 dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-amber-600 dark:hover:bg-amber-800 dark:hover:text-white dark:focus:text-white dark:focus:ring-amber-600"
          >
           Create NFT
          </Link>
        </div>
        <div className="mb-5 mt-5">
          <p className="pb-2 text-2xl">Local License</p>

          <Image
            className="relative mb-4 inline-block w-3/5 rounded-3xl border-2 border-p1-gray shadow-lg md:w-4/5"
            width={1000}
            height={1000}
            src="/Licenses/Local Lic.png"
            alt="NationalLic"
          />
          <p className="pb-8 text-xl">
          Provides a voice in the development of the GAA at local level          </p>
          <Link
            href="/discoverylicense"
            onClick={() => {
              setLicense(1);
            }}
            className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p1-darkgreen focus:text-p1-white focus:ring-2 focus:ring-p1-darkgreen md:p-5 dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p1-green dark:hover:bg-p1-green dark:hover:text-p1-deepdarkgreen"
          >
            Read more
          </Link>
          <Link
            href="/license"
            onClick={() => {
              setLicense(1);
            }}
            className="rounded-r-xl border-2 border-p1-gray bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-gray hover:text-p1-white focus:z-10 focus:bg-p1-gray focus:text-p1-white focus:ring-2 focus:ring-p1-gray md:p-5 dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-gray-300 dark:hover:bg-gray-500 dark:hover:text-white dark:focus:text-white dark:focus:ring-p1-gray"
          >
           Create NFT
          </Link>
        </div>

        <div className="mb-5 mt-5">
          <p className="pb-2 text-2xl">Global License</p>

          <Image
            className="relative mb-4 inline-block w-3/5 rounded-3xl border-2 border-p2-orange shadow-lg md:w-4/5"
            width={1000}
            height={1000}
            src="/Licenses/Global Lic.png"
            alt="GlobalLic"
          />

          <p className="pb-8 text-xl">
          Provides a voice in the development of the GAA at international level          </p>
          <Link
            href="/discoverylicense"
            onClick={() => {
              setLicense(2);
            }}
            className="rounded-l-xl border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-darkgreen hover:text-p1-white focus:z-10 focus:bg-p1-darkgreen focus:text-p1-white focus:ring-2 focus:ring-p1-darkgreen md:p-5 dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p1-green dark:hover:bg-p1-green dark:hover:text-p1-deepdarkgreen"
          >
            Read more
          </Link>
          <Link
            href="/license"
            onClick={() => {
              setLicense(2);
            }}
            className="rounded-r-xl border-2 border-p2-orange bg-p2-white2 p-2 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white hover:ring-p2-orange focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange md:p-5 dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p2-orange dark:hover:bg-amber-600 dark:hover:text-amber-100"
          >
           Create NFT
          </Link>
          <div className="pb-4"></div>
        </div>
      </div>
      <div className="md:pb-96"></div>
      <div className="md:pb-14"></div>
    </div>
  );
}
