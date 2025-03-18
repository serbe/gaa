'use client';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { JumpButton } from '@/components/jumpButton';

export default function Page() {
  const jumpPoints = ['1', '2', '3', '4'];

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      {/* //Rewards*/}
      <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
        <div className="px-2 text-xl font-semibold text-p1-darkgreen md:pt-2 md:text-3xl dark:text-p1-green">
          Awards NFT
        </div>
        <div className="px-2 text-xl font-semibold text-p1-darkgreen md:pt-2 md:text-3xl dark:text-p1-green">
          Discoverer page
        </div>
      </div>
      <div id="1"></div>
      <div className="rounded-3xl border-p1-darkgreen hover:border-p1-gray md:border-4 md:shadow-lg dark:border-p1-green dark:hover:border-p1-darkgreen">
        <div className="flex flex-wrap justify-center px-2 pt-2 md:flex-nowrap">
          <div>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
              Non-fungible token (NFT reward), awarded by the Promoter (Organizer) as part of events
              (competitions).
            </p>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
              Awards NFTs can be collected, sold, transferred.
            </p>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
              When an NFT is created, media content is attached.
            </p>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
              The token contains links to official documents: Final protocol of the event, photos
              and video content.
            </p>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
              All data is stored in an IPFS network and is protected from unauthorized destruction.
            </p>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
              Promoter license, Local license, token holders have access to token creation. Global
              license and Management GAA.
            </p>

            <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
              This token has the characteristic &quot;Burnable&quot; - owner of the smart contract
              can destroy any token from the collection. This measure is necessary to maintain
              relevance of the collection.
            </p>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
              The owner of the smart contract has the right to destroy the NFT if the NFT is
              created, not complying with the project rules.
            </p>
          </div>
          <div id="2"></div>
          <div className="object-center p-2">
            <div className="">
              <Image
                className="relative inline-block rounded-3xl border-2 border-p2-orange object-center shadow-lg dark:border-p1-green"
                width={2000}
                height={2000}
                src="/Hero/Rewards.png"
                alt="Rewards"
              />
              <div
                className="inline-flex w-full justify-center rounded-md pt-5 shadow-sm"
                role="group"
              >
                <Link
                  href="/discoveryrewards"
                  className="w-full rounded-l-xl border border-gray-200 bg-white p-5 text-center text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-yellow-800 focus:text-p1-white focus:ring-2 focus:ring-yellow-800 md:text-xl dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-gray-300 dark:hover:bg-amber-700 dark:hover:text-gray-100 dark:focus:bg-amber-700 dark:focus:text-p1-white dark:focus:ring-amber-900"
                >
                  3 место
                </Link>
                <Link
                  href="/discoveryrewards"
                  className="w-full border border-gray-200 bg-white p-5 text-center text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange md:text-xl dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-gray-300 dark:hover:bg-amber-600 dark:hover:text-amber-100 dark:focus:bg-amber-600 dark:focus:text-amber-100 dark:focus:ring-amber-600"
                >
                  1 место
                </Link>

                <Link
                  href="/discoveryrewards"
                  className="w-full rounded-r-xl border border-gray-200 bg-white p-5 text-center text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p1-gray focus:text-p1-white focus:ring-2 focus:ring-p1-gray md:text-xl dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-gray-300 dark:hover:bg-gray-500 dark:hover:text-white dark:focus:bg-stone-600 dark:focus:text-stone-100 dark:focus:ring-stone-600"
                >
                  2 место
                </Link>
              </div>
              <div className="pb-2"></div>

              <form className="mx-auto max-w-2xl">
                <label
                  htmlFor="license"
                  className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                ></label>
                <select
                  id="license"
                  className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder:text-p1-deepdarkgreen dark:focus:border-p1-green dark:focus:ring-p1-green"
                  defaultValue={'DEFAULT'}
                >
                  <option value="DEFAULT" disabled>
                    Select directions
                  </option>
                  <option value="Drift">Drift</option>
                  <option value="Dragracing">Drag Racing</option>
                  <option value="Rally">Rally</option>
                  <option value="OpenWheels">Open wheels</option>
                  <option value="TCR">TCR</option>
                  <option value="Oldtimer">Oldtimer</option>
                  <option value="Stance">Stans</option>
                  <option value="AutoSound">Auto Sound</option>
                  <option value="Simracing">Sim Racing</option>
                </select>
              </form>

              <div className="m-1 p-5">
                <div className="justify-self-center">
                  <Link
                    href="/mintrewards"
                    className="inline-block w-full rounded-3xl border-2 border-p2-orange bg-p2-white2 px-10 py-8 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p2-orange dark:hover:bg-amber-600 dark:hover:text-amber-100"
                  >
                    Mint NFT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8"></div>

      {/* //Способы получения Rewards*/}
      <div id="3"></div>
      <div className="px-2 text-center text-xl font-semibold text-p1-darkgreen md:pt-2 md:text-3xl dark:text-p1-green dark:hover:text-p1-cyan">
        Ways to get Awards NFT
      </div>

      <div className="m-2 rounded-3xl border-p1-darkgreen p-2 md:border-4 md:shadow-lg dark:border-p1-green dark:hover:border-p1-darkgreen">
        <div className="pt-2 text-center text-base text-p1-darkgreen md:text-2xl dark:text-p1-green dark:hover:text-p1-cyan">
          Rewards can be created and awarded by NFT holders
          <p className="pb-2 text-center text-base md:text-2xl">
            Promoter license, Local license, Global license, Management GAA
          </p>
        </div>

        <div className="grid grid-cols-9 gap-1">
          <div className="col-span-1 col-start-1 row-span-2 place-self-start">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/Hero/13.png"
              alt="13"
            />
          </div>
          <div className="place-self-center">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/arrows/1.png"
              alt="1"
            />
          </div>
          <div className="place-self-end">
            <button className="hover:drop-shadow-2xl">
              <Image
                className="relative inline-block w-max md:p-4"
                width={1000}
                height={1000}
                src="/Logo/wallet-nft.png"
                alt="wallet"
              />
            </button>
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
          <div className="place-self-center">
            <Image
              className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
              width={4000}
              height={4000}
              src="/Hero/Rewards.png"
              alt="Rewards"
            />
          </div>
          <div className="place-self-center">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/arrows/33.png"
              alt="33"
            />
          </div>
          <div className="place-self-end">
            <button className="hover:drop-shadow-2xl">
              <Image
                className="relative inline-block w-max md:p-4"
                width={1000}
                height={1000}
                src="/Logo/wallet-nft.png"
                alt="wallet"
              />
            </button>
          </div>
          <div className="place-self-center">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/arrows/44.png"
              alt="44"
            />
          </div>
          <div className="col-span-1 col-start-9 row-span-2 place-self-start">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/Hero/3place.png"
              alt="3place"
            />
          </div>
          <div></div>
          <div className="relative place-self-center text-center text-3xl font-bold text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
            +
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div className="relative place-self-center text-center text-3xl font-bold text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
            +
          </div>

          <div></div>

          <div className="col-span-1 col-start-1 row-span-2 place-self-center">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/Licenses/Management.png"
              alt="Management"
            />
          </div>
          <div className="col-span-1 col-start-2 row-span-2 place-self-center">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/Licenses/Global.png"
              alt="Global"
            />
          </div>

          <div className="col-span-1 col-start-3 row-span-2 place-self-center">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/Licenses/Local.png"
              alt="Local"
            />
          </div>
          <div className="col-span-1 col-start-4 row-span-2 place-self-center">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/Licenses/Promoter.png"
              alt="Promoter"
            />
          </div>
          <div></div>
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
          <div>
            <Image
              className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg dark:border-p1-green"
              width={1000}
              height={1000}
              src="/Cars/car.png"
              alt="car"
            />
          </div>
        </div>
      </div>
      <div id="4"></div>
      <div className="pb-5"></div>
    </div>
  );
}
