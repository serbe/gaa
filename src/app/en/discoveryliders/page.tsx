'use client';

import { useLayoutEffect } from 'react';
import { useGaaStore } from '@/context/gaa-store-provider';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { JumpButton } from '@/components/jumpButton';

const Buttons = ({ lider, setter }: { lider: number; setter: (liderNumber: number) => void }) => {
  const jumpPoints = ['1', '2'];

  return (
    <div className="inline-flex w-full justify-self-center rounded-md pt-5 shadow-sm" role="group">
      <JumpButton points={jumpPoints} />

      <button
        id="button-drivers"
        className={
          'w-full rounded-l-2xl border ' +
          (lider == 0 ? 'bg-red-400 text-p1-white dark:bg-red-900' : 'bg-white') +
          ' rounded-l-xl border-red-400 bg-p2-white2 p-5 text-center text-sm font-medium text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-red-400 hover:text-p1-white focus:z-10 focus:bg-red-400 focus:text-p1-white focus:ring-2 focus:ring-red-400 md:p-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-red-900 dark:hover:text-red-100 dark:focus:text-p1-cyan dark:focus:ring-p1-green'
        }
        onClick={() => {
          setter(0);
        }}
      >
        Drivers
      </button>
      <button
        id="button-team-members"
        className={
          'w-full border ' +
          (lider == 1 ? 'bg-p3-blue text-p1-white dark:bg-p3-violet' : 'bg-white') +
          ' border-p3-blue bg-p2-white2 p-5 text-center text-sm font-medium text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p3-blue hover:text-p1-white focus:z-10 focus:bg-p3-blue focus:text-p1-white focus:ring-2 focus:ring-p3-blue md:p-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-p3-violet dark:hover:text-white dark:focus:text-white dark:focus:ring-p3-blue'
        }
        onClick={() => {
          setter(1);
        }}
      >
        Team&apos;s Members
      </button>
      <button
        id="button-collectors"
        className={
          'w-full border ' +
          (lider == 2 ? 'bg-stone-500 text-p1-white dark:bg-stone-700' : 'bg-white') +
          ' border-stone-500 bg-p2-white2 p-5 text-center text-sm font-medium text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-stone-500 hover:text-p1-white focus:z-10 focus:bg-stone-500 focus:text-p1-white focus:ring-2 focus:ring-stone-500 md:p-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-stone-700 dark:hover:text-stone-100 dark:focus:text-white dark:focus:ring-stone-500'
        }
        onClick={() => {
          setter(2);
        }}
      >
        Collectors
      </button>
      <Link
        href="/discoverycars"
        className={
          'w-full rounded-r-2xl border ' +
          (lider == 3 ? 'bg-cyan-700 text-p1-white dark:bg-cyan-900' : 'bg-white') +
          ' rounded-r-xl border border-cyan-700 bg-p2-white2 p-5 text-center text-sm font-medium text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-700 hover:text-p1-white focus:z-10 focus:bg-cyan-700 focus:text-p1-white focus:ring-2 focus:ring-cyan-700 md:p-4 dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-cyan-900 dark:hover:text-white dark:focus:text-white dark:focus:ring-cyan-700'
        }
      >
        Cars
      </Link>
    </div>
  );
};

export default function Page() {
  const [{ lider, setLider }, gaaStore] = useGaaStore((state) => state);

  useLayoutEffect(() => {
    void gaaStore.persist.rehydrate();
  }, [gaaStore.persist]);

  return !gaaStore.persist.hasHydrated() ? (
    'Loading...'
  ) : (
    <div className="mx-auto max-w-7xl font-serif">
      {/* //Лидеры движений */}
      {/* //Drivers */}
      <div id="drivers" className={lider == 0 ? '' : 'hidden'}>
        <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
          <div className="px-2 text-xl font-semibold text-red-400 md:pt-2 md:text-3xl dark:text-red-800">
            Drivers NFT
          </div>
          <div className="px-2 text-xl font-semibold text-red-400 md:pt-2 md:text-3xl dark:text-red-800">
            Discoverer page
          </div>
        </div>
        <div className="rounded-3xl border-red-400 hover:border-p1-gray md:border-4 md:shadow-lg dark:border-red-900 dark:hover:border-p1-green">
          <div className="flex flex-wrap justify-center px-2 pt-2 md:flex-nowrap">
            <div>
              <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
                A non-fungible token representing the driver of a sports car.
              </p>
              <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
                Each NFT contains metadata that stores information about the racer.
              </p>
              <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
                By agreement, we can completely copy a person’s appearance.
              </p>
              <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
                We really appreciate the contribution of pilots to the development of motorsport and
                would like to capture everyone in a single collection, be it a representative of
                circuit racing or the drift discipline.
              </p>

              <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
                It is assumed that the initial owner of the NFT will be the pilot himself. Later
                upon request owner, the token can be transferred/sold to any person.
              </p>
              <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
                This is your way of attracting investments, in one transaction you can create up to
                100 NFT - this is how we plan to organize support for pilots and team members.
              </p>
            </div>

            <div className="m-1 place-items-center p-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Drivers/Driver4.png"
                    alt="Driver4"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Drivers/Driver3.png"
                    alt="Driver3"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Drivers/Driver2.png"
                    alt="Driver2"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={150}
                    height={150}
                    src="/HeroNFT/Drivers/Driver1.png"
                    alt="Driver1"
                  />
                </div>
              </div>
              <Buttons lider={lider} setter={setLider} />
              <div className="m-1 justify-self-center p-5">
                <Link
                  href="/mintdrivers"
                  className="inline-block w-full place-content-center rounded-3xl border-2 border-red-400 bg-p2-white2 px-10 py-8 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-red-400 hover:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-red-900 dark:hover:text-p1-white"
                >
                  Create NFT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //Участники команд */}
      <div id="teammembers" className={lider == 1 ? '' : 'hidden'}>
        <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
          <div className="px-2 text-xl font-semibold text-p3-blue md:pt-2 md:text-3xl dark:text-blue-800">
            Team&apos;s Members NFT
          </div>
          <div className="px-2 text-xl font-semibold text-p3-blue md:pt-2 md:text-3xl dark:text-blue-800">
            Discoverer page
          </div>
        </div>
        <div className="rounded-3xl border-p3-blue hover:border-p1-gray md:border-4 md:shadow-lg dark:border-blue-800 dark:hover:border-p1-green">
          <div className="flex flex-wrap justify-center px-2 pt-2 md:flex-nowrap">
            <div>
              <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
                A non-fungible token representing a member of a motorsports team.
              </p>
              <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
                Each NFT contains metadata that stores information about a person.
              </p>
              <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
                By agreement, we can completely copy a person’s appearance.
              </p>
              <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
                Members of motorsport teams make a huge contribution to the development of
                motorsport, therefore we would like to capture each of them in a single collection.
              </p>

              <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
                It is assumed that the initial owner of the NFT will be the team member himself.
                Later on If the owner wishes, the token can be transferred/sold to any person.
              </p>
              <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
                This is your way of attracting investments, in one transaction you can create up to
                100 NFT - this is how we plan to organize support for pilots and team members.
              </p>
            </div>

            <div className="m-1 place-items-center p-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Team's members/TeamMember1.png"
                    alt="TeamMember1"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Team's members/TeamMember2.png"
                    alt="TeamMember2"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Team's members/TeamMember3.png"
                    alt="TeamMember3"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={150}
                    height={150}
                    src="/HeroNFT/Team's members/TeamMember4.png"
                    alt="TeamMember4"
                  />
                </div>
              </div>
              <Buttons lider={lider} setter={setLider} />
              <div className="m-1 p-5">
                <div className="justify-self-center">
                  <Link
                    href="/mintteammembers"
                    className="inline-block w-full place-content-center rounded-3xl border-2 border-p3-blue bg-p2-white2 px-10 py-8 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p3-blue hover:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-p3-violet dark:hover:text-p1-white"
                  >
                    Create NFT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //Коллекционеры */}
      <div id="collectors" className={lider == 2 ? '' : 'hidden'}>
        <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
          <div className="px-2 text-xl font-semibold text-stone-500 md:pt-2 md:text-3xl">
            Collectors NFT
          </div>
          <div className="px-2 text-xl font-semibold text-stone-500 md:pt-2 md:text-3xl">
            Discoverer page
          </div>
        </div>
        <div className="rounded-3xl border-stone-500 hover:border-p1-gray md:border-4 md:shadow-lg dark:hover:border-p1-green">
          <div className="flex flex-wrap justify-center px-2 pt-2 md:flex-nowrap">
            <div>
              <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
                A non-fungible token representing a collector of sports, vintage and rare cars.
              </p>
              <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
                Each NFT contains metadata that stores information about a person.
              </p>
              <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
                By agreement, we can completely copy a person’s appearance.
              </p>
              <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
                We really appreciate the contribution of collectors to the history of auto culture
                and motorsport and would like capture everyone&apos;s story in a single collection.
              </p>

              <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
                It is assumed that the original owner of the NFT will be the collector himself.
                Later on If the owner wishes, the token can be transferred/sold to any person.
              </p>
              <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
                This is your way of attracting investments, in one transaction you can create up to
                100 NFT, this is how we plan to organize support for collectors and development of
                the direction.
              </p>
            </div>

            <div className="m-1 place-items-center p-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Collectors/Collector1.png"
                    alt="Collector1"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Collectors/Collector2.png"
                    alt="Collector2"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Collectors/Collector3.png"
                    alt="Collector3"
                  />
                </div>
                <div>
                  <Image
                    className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={150}
                    height={150}
                    src="/HeroNFT/Collectors/Collector4.png"
                    alt="Collector4"
                  />
                </div>
              </div>
              <Buttons lider={lider} setter={setLider} />
              <div className="m-1 p-5">
                <div className="justify-self-center">
                  <Link
                    href="/mintcollectors"
                    className="inline-block w-full place-content-center rounded-3xl border-2 border-stone-500 bg-p2-white2 px-10 py-8 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-stone-500 hover:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-stone-700 dark:hover:text-p1-white"
                  >
                    Create NFT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pb-8"></div>
      {/* //Лидеры движений */}
      <div id="1"></div>
      <div>
        <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
          <div className="px-2 text-center text-xl font-semibold text-p1-darkgreen md:pt-2 md:text-3xl dark:text-p1-green dark:hover:text-p1-cyan">
            Ways to get
          </div>
          <div className="px-2 text-center text-xl font-semibold text-p1-darkgreen md:pt-2 md:text-3xl dark:text-p1-green dark:hover:text-p1-cyan">
            Drivers, Team&apos;s Members, Collectors NFT
          </div>
        </div>
        <div className="rounded-3xl border-p1-darkgreen p-2 md:border-4 md:shadow-lg dark:hover:border-p1-green">
          <div className="px-2 pt-2 text-center text-base md:text-2xl dark:text-p1-green dark:hover:text-p1-cyan">
            Only verified users will be able to create NFTs in collections
          </div>
          <div className="text-center text-base md:text-2xl dark:text-p1-green dark:hover:text-p1-cyan">
            Drivers, Team&apos;s Members, Collectors
          </div>

          <div className="pb-5 text-center text-base md:text-2xl dark:text-p1-green dark:hover:text-p1-cyan">
            The user&apos;s status can be verified by holders of a Promoter License, Local License,
            Global License, or Management GAA.
          </div>

          <div className="grid grid-cols-8 gap-1">
            <div className="col-span-1 col-start-1 row-span-4 place-self-center">
              <Image
                className="relative inline-block w-max"
                width={1000}
                height={1000}
                src="/Hero/13.png"
                alt="13"
              />
            </div>
            <div></div>
            <div></div>
            <div></div>

            <div className="col-span-1 col-start-5 row-span-3 place-self-center">
              <Image
                className="relative inline-block w-max"
                width={1000}
                height={1000}
                src="/Licenses/Promoter.png"
                alt="Promoter"
              />
            </div>
            <div className="col-span-1 col-start-6 row-span-3 place-self-center">
              <Image
                className="relative inline-block w-max"
                width={1000}
                height={1000}
                src="/Licenses/National.png"
                alt="national"
              />
            </div>
            <div className="col-span-1 col-start-7 row-span-3 place-self-center">
              <Image
                className="relative inline-block w-max"
                width={1000}
                height={1000}
                src="/Licenses/Global.png"
                alt="global"
              />
            </div>
            <div className="col-span-1 col-start-8 row-span-3 place-self-center">
              <Image
                className="relative inline-block w-max"
                width={1000}
                height={1000}
                src="/Licenses/Management.png"
                alt="Management"
              />
            </div>
            <div className="place-self-end">
              <Image
                className="relative z-50 inline-block w-max"
                width={1000}
                height={1000}
                src="/arrows/11.png"
                alt="11"
              />
            </div>
            <div className="relative place-self-center">
              <div>
                <Link
                  href="/applicationform"
                  className="inline-block place-content-center rounded-xl border-2 border-p1-darkgreen bg-p1-white p-2 text-center text-base text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-green hover:text-p1-white md:text-xl dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-p1-green dark:hover:text-p1-deepdarkgreen"
                >
                  Application form
                </Link>
              </div>
            </div>
            <div className="place-self-center">
              <Image
                className="relative inline-block w-max"
                width={1000}
                height={1000}
                src="/arrows/2.png"
                alt="2"
              />
            </div>

            <div className="col-start-15 col-span-3 row-span-1">
              <Image
                className="relative inline-block w-max"
                width={1000}
                height={1000}
                src="/arrows/3.png"
                alt="3"
              />
            </div>
            <div className="place-self-center">
              <Image
                className="relative inline-block w-max"
                width={1000}
                height={1000}
                src="/arrows/4.png"
                alt="4"
              />
            </div>
            <div>
              <button className="hover:drop-shadow-2xl">
                <Image
                  className="relative inline-block w-max"
                  width={1000}
                  height={1000}
                  src="/Logo/MetaMask.png"
                  alt="Metamask"
                />
              </button>
            </div>
            <div className="place-self-center">
              <Image
                className="relative inline-block w-max"
                width={1000}
                height={1000}
                src="/arrows/5.png"
                alt="5"
              />
            </div>
            <div>
              <Image
                className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg dark:border-p1-green"
                width={1000}
                height={1000}
                src="/HeroNFT/Drivers/Driver4.png"
                alt="Driver4"
              />
            </div>
            <div>
              <Image
                className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg dark:border-p1-green"
                width={1000}
                height={1000}
                src="/HeroNFT/Team's members/TeamMember1.png"
                alt="TeamMember1"
              />
            </div>
            <div>
              <Image
                className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg dark:border-p1-green"
                width={1000}
                height={1000}
                src="/HeroNFT/Collectors/Collector1.png"
                alt="Collector1"
              />
            </div>
          </div>

          <div className="p-2 text-center text-base md:text-2xl dark:text-p1-green dark:hover:text-p1-cyan">
            Anyone can purchase NFTs from collections on the secondary market - that&apos;s how we
            We support active participants in areas and their development
          </div>
          <div className="p-2 text-center text-base md:text-2xl dark:text-p1-green dark:hover:text-p1-cyan">
            This is your way of identifying and attracting additional investments for your
            development
          </div>
        </div>
      </div>
      <div id="2"></div>
      <div className="pb-8"></div>
    </div>
  );
}
