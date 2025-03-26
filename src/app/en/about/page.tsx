'use client';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { JumpButton } from '@/components/jumpButton';
import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useFavicon } from '@/utils/hooks';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

export default function Page() {
  const jumpPoints = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
  ];

  useFavicon('/Logo/GAA_Logo_1.png ');

  return (
    <div className="mx-auto max-w-7xl font-serif dark:bg-p1-deepdarkgreen">
      <JumpButton points={jumpPoints} />

      <div className="hidden 2xl:flex 2xl:flex-row">
        <div className="basis-1/6 text-center opacity-85 duration-500 ease-in-out hover:scale-105 hover:opacity-100">
          <Link
            href="/aboutmemberbenefit"
            className="mx-auto justify-center rounded-3xl hover:drop-shadow-2xl"
          >
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/AboutHero/enBenefit.png"
              alt="Benefit"
            />
          </Link>
        </div>
        <div className="basis-1/6 text-center opacity-85 duration-500 hover:scale-105 hover:opacity-100">
          <Link
            href="/aboutterms"
            className="mx-auto justify-center rounded-3xl hover:drop-shadow-2xl"
          >
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/AboutHero/enTerms.png"
              alt="Terms"
            />
          </Link>
        </div>
        <div className="basis-1/6 text-center opacity-85 duration-500 hover:scale-105 hover:opacity-100">
          <Link
            href="/aboutpolicy"
            className="mx-auto justify-center rounded-3xl hover:drop-shadow-2xl"
          >
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/AboutHero/enPolicy.png"
              alt="Policy"
            />
          </Link>
        </div>
        <div className="basis-1/6 text-center opacity-85 duration-500 hover:scale-105 hover:opacity-100">
          <Link
            href="/aboutweb3"
            className="mx-auto justify-center rounded-3xl hover:drop-shadow-2xl"
          >
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/AboutHero/enWeb3.png"
              alt="Web3"
            />
          </Link>
        </div>
        <div className="basis-1/6 text-center opacity-85 duration-500 hover:scale-105 hover:opacity-100">
          <Link href="/team" className="mx-auto justify-center rounded-3xl hover:drop-shadow-2xl">
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/AboutHero/enTeam.png"
              alt="Team"
            />
          </Link>
        </div>
        <div className="basis-1/6 text-center opacity-85 duration-500 hover:scale-105 hover:opacity-100">
          <Link
            href="/contacts"
            className="mx-auto justify-center rounded-3xl hover:drop-shadow-2xl"
          >
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/AboutHero/enContacts.png"
              alt="Contacts"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-row justify-center p-2">
        <div className="text-p1-darkgreen md:basis-4/6">
          <div className="rounded-3xl">
            <div className="px-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              Global Automotive Association (GAA) is a revolutionary blockchain project that unites
              all motorsport and car enthusiasts into a strong and active community aimed at
              promoting automotive culture.
            </div>
          </div>
        </div>
      </div>
      <div className="md:h-16"></div>

      <div className="text-p1-darkgreen  md:text-3xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
        <div>
          <div className="sticky top-16 flex flex-row justify-center bg-p1-white  dark:bg-p1-deepdarkgreen">
            <div className="md:basis-5">
              <div id="1" className="py-4 text-center  text-4xl font-bold">
                Our ambitious goals:
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center">
            <div className="my-5 text-p1-darkgreen md:basis-4/6">
              <div className="space-y-4 rounded-3xl border-p1-darkgreen p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
                <p className="pt-2 text-center text-xl font-bold md:text-2xl">
                  Creating an active community:
                </p>
                <p>
                  We unite fans of motorsport and automotive culture in social networks and
                  messengers for communication, new acquaintances and exchange of experience
                  (Telegram, Discord, X).
                </p>
                <p className="pt-2 text-center text-xl font-bold md:text-2xl">Partnerships:</p>
                <p>
                  We establish connections with organizers and participants of the largest
                  motorsport events (drift, circuit racing, drag racing, sim racing, auto
                  exhibitions) for joint projects and promotions.
                </p>
              </div>
            </div>
          </div>

          <div id="2" className="flex flex-row justify-center p-2 md:justify-start ">
            <div className="md:basis-1/6"></div>
            <div className="md:basis-2/6">
              <div>
                <div className=" rounded-3xl border-p1-darkgreen p-6 text-center text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
                  <p className="text-2xl font-bold">10,000</p>
                  <p>unique NFTs </p>
                  <p>in the RaceLads collection</p>
                  <p className="text-2xl font-bold">RaceLads</p>
                </div>
              </div>
            </div>
            <div className="md:basis-1/6"></div>
          </div>

          <div className="flex flex-row justify-center p-2 md:justify-end">
            <div className="md:basis-1/6"></div>
            <div className="md:basis-2/6"></div>
            <div className="basis-2/6 text-p1-darkgreen">
              <div>
                <div className="rounded-3xl border-p1-darkgreen p-6 text-center text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
                  <p>first collection</p>
                  <p className="text-2xl font-bold">of the Global Automobile Association</p>
                </div>
              </div>
            </div>
            <div className="md:basis-1/6"></div>
          </div>
        </div>
      </div>

      <div className="md:h-20"></div>
      <div>
        <div className="sticky top-16 flex flex-row  justify-center bg-p1-white p-2 dark:bg-p1-deepdarkgreen">
          <div className="md:basis-1/5"></div>
          <div className="md:basis-3/5">
            <div
              id="3"
              className="py-4 text-center text-4xl font-bold text-p1-darkgreen drop-shadow-2xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan"
            >
              RaceLads NFT
            </div>
          </div>
          <div className="md:basis-1/5"></div>
        </div>

        <div className="flex flex-row justify-center p-2">
          <div className="md:basis-1/6"></div>
          <div className="text-p1-darkgreen md:basis-4/6">
            <div>
              <div className="my-5 space-y-4 rounded-3xl border-p1-darkgreen p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
                <p className="text-left text-base md:text-xl">
                  Launching the first NFT collection of 10,000 exclusive and unique digital artworks
                  inspired by the most exciting disciplines of auto racing.
                </p>
                <p className="text-left text-base md:text-xl">
                  Each and every “RaceLad” in our collection is not just a digital image, but a
                  unique character with different features recorded on the blockchain.
                </p>
                <p className="text-left text-base md:text-xl">
                  Owning an NFT from our collection will give you access to a unique world of thrill
                  on Web3 in the future:
                </p>
                <ul className="list-disc space-y-3 px-5">
                  <li className="text-left text-base md:text-xl">
                    participate in virtual races and other exciting online events.
                  </li>
                  <li className="text-left text-base md:text-xl">
                    participate in key votes that influence the development of our community.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:basis-1/6"></div>
        </div>
      </div>

      <div className="md:pt-4"></div>
      <div className="w-full snap-x overflow-x-auto rounded-3xl md:w-4/5 md:place-self-center dark:border-p1-darkgreen dark:hover:border-p1-green">
        <Swiper
          autoplay={{
            delay: 5500,
            pauseOnMouseEnter: true,
          }}
          direction={'horizontal'}
          spaceBetween={0}
          slidesPerView={4}
          mousewheel={true}
          modules={[Autoplay, Mousewheel, Navigation]}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="mySwyper"
        >
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/Drivers/Driver4.png"
                alt="Driver4"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/Drivers/Driver3.png"
                alt="Driver3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/Drivers/Driver2.png"
                alt="Driver2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/Drivers/Driver1.png"
                alt="Driver1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/CustomLads/CustomLads11.png"
                alt="CustomLads11"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/CustomLads/CustomLads22.png"
                alt="CustomLads2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/CustomLads/CustomLads33.png"
                alt="CustomLads3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/CustomLads/CustomLads44.png"
                alt="CustomLads4"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/Collectors/Collector1.png"
                alt="Collector1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/Collectors/Collector2.png"
                alt="Collector2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/Collectors/Collector3.png"
                alt="Collector3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/Collectors/Collector4.png"
                alt="Collector4"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="pb-2 md:pb-5"></div>
      </div>

      <div className="md:h-20"></div>
      <div>
        <div className="sticky top-16 flex flex-row  justify-center bg-p1-white p-2 dark:bg-p1-deepdarkgreen">
          <div className="md:basis-1/5"></div>
          <div className="md:basis-3/5">
            <div
              id="4"
              className=" text-center text-2xl font-bold text-p1-darkgreen drop-shadow-2xl md:pt-8 md:text-3xl dark:text-p1-green dark:hover:text-p1-cyan"
            >
              <p>We are planning</p>
              <p>our future</p>
            </div>
          </div>
          <div className="md:basis-1/5"></div>
        </div>

        <div className="flex flex-row justify-center p-2">
          <div className="md:basis-1/6"></div>
          <div className="text-p1-darkgreen md:basis-4/6">
            <div>
              <div className="my-5 space-y-2 rounded-3xl border-p1-darkgreen p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
                <p className="text-center text-xl font-bold md:text-2xl">
                  We also plan to release other unique collections for:
                </p>
                <ul className="list-disc space-y-3 px-5">
                  <li className="text-left text-base md:text-xl">pilots</li>
                  <li className="text-left text-base md:text-xl">
                    motorsports (drifting, circuit racing, drag racing, etc.)
                  </li>
                  <li className="text-left text-base md:text-xl">
                    rare and vintage car collectors with the possibility of digitalization of their
                    fleet and creation of NFTs in a single global collection
                  </li>
                  <li className="text-left text-base md:text-xl">
                    awarding winners and runner-ups (cups, medals)
                  </li>
                  <li className="text-left text-base md:text-xl">issuing digital licenses</li>
                </ul>
                <p className="text-center text-2xl font-bold">
                  The uniqueness of the collections lies in
                </p>
                <ul className="list-disc space-y-3 px-5">
                  <li className="text-left text-base md:text-xl">
                    limited issue of unique objects of digital art
                  </li>
                  <li className="text-left text-base md:text-xl">
                    belonging of the collection to the Motorsport and Automotive Culture Community
                    Project
                  </li>
                  <li className="text-left text-base md:text-xl">
                    a limited list of digital art collections.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:basis-1/6"></div>
        </div>
      </div>

      <div className="md:h-20"></div>
      <div>
        <div className="sticky top-16 flex flex-row justify-center bg-p1-white py-4  dark:bg-p1-deepdarkgreen">
          <div className="md:basis-1/5"></div>
          <div className="md:basis-3/5">
            <div
              id="5"
              className="py-4 text-center text-3xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-3xl dark:text-p1-green dark:hover:text-p1-cyan"
            >
              <p>Services and Awards</p>
            </div>
          </div>
          <div className="md:basis-1/5"></div>
        </div>

        <div className="flex flex-row justify-center p-2 pt-4">
          <div className="md:basis-1/6"></div>
          <div className="text-p1-darkgreen md:basis-4/6">
            <div>
              <div className="mt-4 space-y-4 rounded-3xl border-p1-darkgreen p-4 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
                <p className="text-center text-xl font-bold md:text-2xl">NFT Services</p>
                <p className="text-left text-base md:text-xl">
                  Create a service to digitize physical objects into NFTs and compile NFTs into
                  unified digital art collections
                </p>
                <p className="text-left text-base md:text-xl">
                  Create, donate, sell NFTs by designation:
                </p>
                <ul className="list-disc space-y-3 px-5">
                  <li className="text-left text-base md:text-xl">Pilots</li>
                  <li className="text-left text-base md:text-xl">
                    Team members (drifting, drag racing, etc.)
                  </li>
                  <li className="text-left text-base md:text-xl">Collectors of rare cars</li>
                  <li className="text-left text-base md:text-xl">Rare, sports and custom cars</li>
                </ul>
                <p className="text-left text-base md:text-xl">
                  A single global collection of the motorsports and car culture community created by
                  the community itself.
                </p>
              </div>

              <div id="6" className="md:pb-32"></div>

              <div className=" space-y-4 rounded-3xl border-p1-darkgreen p-6 pt-4 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
                <p className="text-center  text-2xl font-bold">NFT Awards</p>
                <p className="text-left text-base md:text-xl">
                  On the site we give event organizers the opportunity to create unique NFT awards
                  for winners and participants of events and a new level of event organization
                </p>
                <p className="text-left text-base md:text-xl">
                  All awards will be in a single collection of motorsports and autocultural
                  community NFT Rewards
                </p>
                <p className="text-left text-base md:text-xl">
                  For the development of the Project we provide digital NFT licenses to the leaders
                  of the directions, expanding the possibilities and providing additional authority
                  to use the site.
                </p>
              </div>
            </div>
          </div>
          <div className="md:basis-1/6"></div>
        </div>
        <div className="md:pt-2"></div>
      </div>
      <div className="w-full snap-x overflow-x-auto rounded-3xl md:w-4/5 md:place-self-center dark:border-p1-darkgreen dark:hover:border-p1-green">
        <Swiper
          autoplay={{
            delay: 5500,
            pauseOnMouseEnter: true,
          }}
          direction={'horizontal'}
          spaceBetween={0}
          slidesPerView={4}
          mousewheel={true}
          modules={[Autoplay, Mousewheel, Navigation, Pagination]}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="mySwyper size-full md:w-4/5"
        >
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full scale-75 snap-center duration-500 hover:z-10 hover:scale-100"
                width={130}
                height={130}
                src="/RewardsSite/DragRacingRewardSite.png"
                alt="DragRacingRewardSite"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full scale-75 snap-center duration-500 hover:z-10 hover:scale-100"
                width={130}
                height={130}
                src="/RewardsSite/DriftRewardSite.png"
                alt="DriftRewardSite"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full scale-75 snap-center duration-500 hover:z-10 hover:scale-100"
                width={130}
                height={130}
                src="/RewardsSite/OldtimerRewardSite.png"
                alt="OldtimerRewardSite"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full scale-75 snap-center duration-500 hover:z-10 hover:scale-100"
                width={130}
                height={130}
                src="/RewardsSite/OpenWheelsRewardSite.png"
                alt="OpenWheelsRewardSite"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full scale-75 snap-center duration-500 hover:z-10 hover:scale-100"
                width={130}
                height={130}
                src="/RewardsSite/RallyRewardSite.png"
                alt="RallyRewardSite"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full scale-75 snap-center duration-500 hover:z-10 hover:scale-100"
                width={130}
                height={130}
                src="/RewardsSite/SimRacingRewardSite.png"
                alt="SimRacingRewardSite"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full scale-75 snap-center duration-500 hover:z-10 hover:scale-100"
                width={130}
                height={130}
                src="/RewardsSite/SoundCarRewardSite.png"
                alt="SoundCarRewardSite"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full scale-75 snap-center duration-500 hover:z-10 hover:scale-100"
                width={130}
                height={130}
                src="/RewardsSite/StanceRewardSite.png"
                alt="StanceRewardSite"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full scale-75 snap-center duration-500 hover:z-10 hover:scale-100"
                width={130}
                height={130}
                src="/RewardsSite/TCRRewardSite.png"
                alt="TCRRewardSite"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="pb-2 md:pb-5"></div>
      </div>

      <div className="md:h-20"></div>

      <div className="">
        <div className="sticky top-16 flex flex-row justify-center bg-p1-white py-4  dark:bg-p1-deepdarkgreen">
          <div className="md:basis-3/5">
            <div
              id="7"
              className="my-4 text-center text-xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-3xl dark:text-p1-green dark:hover:text-p1-cyan"
            >
              <p>Benefit to the owner</p>
              <p>NFT RaceLad</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center p-2">
          <div className="text-p1-darkgreen md:basis-4/6">
            <div>
              <div className=" my-5 mt-8 space-y-4 rounded-3xl border-p1-darkgreen p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
                <p className=" text-center text-2xl font-bold ">Unique privileges</p>
                <p className="text-left text-base md:text-xl">
                  Provide our members with exclusive perks:
                </p>
                <ul className="list-disc space-y-3 px-5">
                  <li className="text-left text-base md:text-xl">event tickets</li>
                  <li className="text-left text-base md:text-xl">
                    participation in autograph and photo sessions
                  </li>
                  <li className="text-left text-base md:text-xl">
                    participation in lectures and excursions
                  </li>
                  <li className="text-left text-base md:text-xl">NFT raffles</li>
                  <li className="text-left text-base md:text-xl">and muchh more</li>
                </ul>
              </div>

              <div className="my-10  space-y-4 rounded-3xl border-p1-darkgreen p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
                <p className="text-center  text-2xl  font-bold">Own events</p>
                <p className="text-left text-base md:text-xl">
                  We organize events such as drifting, races, car shows and parties under the GAA
                  brand with the participation of athletes and influencers (bloggers) with various
                  awards (including digital).
                </p>
                <p className="text-left text-base md:text-xl">
                  Our community members will be able to apply and vote on event format, judges,
                  participants and more.
                </p>
              </div>

              <div className="my-10  space-y-4 rounded-3xl border-p1-darkgreen p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
                <p className="text-center text-2xl font-bold">Decentralized portal</p>
                <p className="text-left text-base md:text-xl">
                  We are developing a site that will be a unique portal where everyone can:
                </p>
                <ul className="list-disc space-y-3 px-5">
                  <li className="text-left text-base md:text-xl">
                    keep up to date with the latest news
                  </li>
                  <li className="text-left text-base md:text-xl">
                    familiarize themselves with the results of events
                  </li>
                  <li className="text-left text-base md:text-xl">take part in voting</li>
                  <li className="text-left text-base md:text-xl">
                    purchase NFTs from our collections
                  </li>
                  <li className="text-left text-base md:text-xl">enjoy photos and videos </li>
                  <li className="text-left text-base md:text-xl">upload your content</li>
                  <li className="text-left text-base md:text-xl">realize your opportunities</li>
                  <li className="text-left text-base md:text-xl">much more</li>
                </ul>
              </div>

              <div className="my-10 space-y-4 rounded-3xl border-p1-darkgreen p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-5 md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
                <p className="text-center text-2xl font-bold">Going International</p>
                <p className="text-left text-base md:text-xl">
                  Expanding our presence on the international stage to unite car enthusiasts around
                  the world, erasing borders and distances.
                </p>
                <p className="text-left text-base md:text-xl">
                  Creating an annual year-round international series and standard of events for the
                  motorsports and car culture community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:h-16"></div>
      <div>
        <div className="px-2 text-xl">
          <div className="sticky top-16 flex flex-row  justify-center bg-p1-white dark:bg-p1-deepdarkgreen">
            <div className="md:basis-3/5">
              <div
                id="8"
                className="p-2 text-center text-3xl font-bold text-p1-darkgreen drop-shadow-2xl dark:text-p1-green dark:hover:text-p1-cyan"
              >
                Why Web 3?
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center px-2">
            <div className="text-p1-darkgreen md:basis-4/6">
              <div>
                <div className="space-y-4 rounded-3xl border-p1-darkgreen p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-5 md:border-4 md:p-6 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
                  <p className="text-left text-base md:text-xl">
                    The realization of the global idea of Web3 is still at an early stage and has
                    not yet received the attention it deserves in society.
                  </p>
                  <p className="text-left text-base md:text-xl">
                    We, in our turn, see the prospect of realizing a socially significant project
                    that allows to unite people by common interests using Blockchain and NFT
                    technologies.
                  </p>
                  <p className="text-left text-base md:text-xl">
                    It is Blockchain technology that is able to provide a decentralized community
                    managed by people themselves.
                  </p>
                  <p className="text-left text-base md:text-xl">
                    Blockchain and NFT are freedom technologies that open up limitless possibilities
                    and allow you to give power back to the people, erasing borders between cities
                    and countries and bringing like-minded people together.
                  </p>
                </div>

                <div
                  id="12"
                  className="space-y-4 rounded-3xl border-p1-darkgreen p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan"
                >
                  <p className="text-center">
                    Join GAA and be part of a global movement that creates new rules of fair play in
                    the world of motorsports and car culture!
                  </p>
                </div>

                <div className="flex flex-row justify-center">
                  <div className="basis-2/5">
                    <Image
                      className="relative mb-4 inline-block"
                      width={250}
                      height={250}
                      src="/Hero/cups.png"
                      alt="cups"
                    />
                  </div>
                  <div className="flex flex-row justify-end">
                    <div className="basis-5/5">
                      <Image
                        className="relative inline-block w-full items-end"
                        width={1000}
                        height={1000}
                        src="/Hero/Hero1.png"
                        alt="hero1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
