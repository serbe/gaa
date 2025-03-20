'use client';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { JumpButton } from '@/components/jumpButton';

export default function Page() {
  const jumpPoints = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      <div className="text-center text-4xl font-bold text-p2-orange md:pt-4 md:text-6xl">
        Racepoint
      </div>
      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="rounded-3xl border-p2-orange px-2 md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl dark:border-amber-600 dark:text-amber-600">
            <div className="pt-2 text-center text-xl text-p1-darkgreen md:pb-5 md:text-2xl dark:text-amber-600">
              Racepoints is our internal system for accumulating “points” on the account.
            </div>
            <div className="px-2 pt-4 text-center text-base text-p1-darkgreen md:pb-5 md:text-xl dark:text-amber-600">
              A rating system has been created by analogy with motorsport, information is displayed
              on the board honor on the website (more Racepoints = higher your place in the overall
              standings).
            </div>
            <div className="text-center text-lg font-bold text-p1-darkgreen md:text-2xl dark:text-amber-600">
              How to earn:
            </div>
            <ol className="list-decimal space-y-4 p-4 pb-5 text-base text-p1-darkgreen md:text-xl dark:text-amber-600">
              <li>
                Go to the site and solve quizzes that are updated once a week, 1 account = one quiz
                per week.
              </li>
              <li>
                Own NFTs from our collections and receive Racepoints with the click of a button on
                the site once per week. More NFTs = more Racepoints.
              </li>
              <li>
                Invite friends (referral link) to take quizzes and get paid for it Racepoints.
              </li>
              <li>Take part in online races (car simulators).</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5"></div>
      </div>
      <div id="1" className="md:pt-2"></div>
      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="rounded-3xl border-p2-orange p-2 md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl dark:border-amber-600">
            <div className="pt-2 text-center text-xl font-bold text-p1-darkgreen md:text-2xl dark:text-amber-600">
              Welcome Bonus:
            </div>
            <div className="text-center text-base text-p1-darkgreen md:text-xl dark:text-amber-600">
              Get 100 Welcome Racepoints for registering on the site!
            </div>
          </div>
        </div>
      </div>
      <div id="2" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="rounded-3xl border-p2-orange p-2 md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl dark:border-amber-600">
            <div className="text-center text-xl font-bold text-p1-darkgreen md:text-2xl dark:text-amber-600">
              We value privacy:
            </div>
            <div className="text-center text-base text-p1-darkgreen md:text-xl dark:text-amber-600">
              To register, a Web3 wallet (MetaMask, etc.) or e-mail is enough.
            </div>
            <div className="flex flex-row justify-center pb-5">
              <div className="basis-1/5 scale-95 duration-300 hover:scale-100">
                <Link href={'/wallet'} className="mx-auto">
                  <Image
                    className="relative mb-4 inline-block"
                    width={1000}
                    height={1000}
                    src="/Logo/wallet-nft.png"
                    alt="wallet"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="3" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-5">
        <div className="">
          <div className="rounded-3xl border-p2-orange p-2 md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl dark:border-amber-600">
            <div className="text-center text-xl font-bold text-p1-darkgreen md:text-2xl dark:text-amber-600">
              Daily reward
            </div>
            <div className="text-center text-base text-p1-darkgreen md:text-xl dark:text-amber-600">
              Earn Racepoints daily for visiting the site!
            </div>
            <div className="flex flex-row justify-center pb-5">
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href={'/rp50'} className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Rpdaily/rp50.png"
                    alt="rp50"
                  />
                </Link>
              </div>

              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href={'/rp100'} className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Rpdaily/rp100.png"
                    alt="rp100"
                  />
                </Link>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href={'/rp500'} className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Rpdaily/rp500.png"
                    alt="rp500"
                  />
                </Link>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href={'/rp1000'} className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Rpdaily/rp1000.png"
                    alt="rp1000"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="4" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="rounded-3xl border-p2-orange p-6 md:my-5 md:space-y-6 md:border-4 md:hover:shadow-2xl dark:border-amber-600">
            <div className="text-center text-xl font-bold text-p1-darkgreen md:text-2xl dark:text-amber-600">
              Referral program
            </div>
            <div className="text-center text-base text-p1-darkgreen md:text-xl dark:text-amber-600">
              Invite a friend using your referral link and get Racepoints.
            </div>
            <div className="flex flex-row justify-center pb-5">
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link
                  href={'/InviteFriend'}
                  className="mx-auto justify-center hover:drop-shadow-2xl"
                >
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/RacePointCards/CardInviteFriend.png"
                    alt="InviteFriend"
                  />
                </Link>
              </div>

              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href={'/CreateTeam'} className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/RacePointCards/CardCreateTeam.png"
                    alt="CardCreateTeam"
                  />
                </Link>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href={'/JoinTeam'} className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/RacePointCards/CardJoinTeam.png"
                    alt="CardJoinTeam"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-xl font-bold text-p2-orange md:pb-4 md:text-4xl dark:text-amber-600">
            Take part
          </div>
          <div className="text-center text-xl font-bold text-p2-orange md:pb-4 md:text-4xl dark:text-amber-600">
            in surveys and quizzes
          </div>
        </div>
      </div>
      <div id="5" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-5">
        <div className="w-full">
          <div className="rounded-3xl border-p2-orange p-2 md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl dark:border-amber-600">
            <div className="pb-2 text-center text-sm font-semibold text-p1-darkgreen md:text-2xl dark:text-amber-600">
              Take part in surveys and quizzes and earn Racepoints
            </div>

            <div className="flex flex-row justify-center pb-5">
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href="/quize1" className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Quizbuttons/QuizeButton1.png"
                    alt="Quizbutton1"
                  />
                </Link>
              </div>

              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href="/quize2" className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Quizbuttons/QuizeButton2.png"
                    alt="Quizbutton2"
                  />
                </Link>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href="/quize3" className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Quizbuttons/QuizeButton3.png"
                    alt="Quizbutton3"
                  />
                </Link>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href="/quize4" className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Quizbuttons/QuizeButton4.png"
                    alt="Quizbutton4"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="6" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-5">
        <div className="w-full">
          <div className="rounded-3xl border-p2-orange p-2 md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl dark:border-amber-600">
            <div className="pb-2 text-center text-sm font-semibold text-p1-darkgreen md:text-2xl dark:text-amber-600">
              Answer questions related to the world of motorsport and auto culture and earn money
              Racepoints
            </div>

            <div className="flex flex-row justify-center pb-5">
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link
                  href="/autoquestion1"
                  className="mx-auto justify-center hover:drop-shadow-2xl"
                >
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Autoquestionbuttons/RuQw1.png"
                    alt="RuQw1"
                  />
                </Link>
              </div>

              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link
                  href="/autoquestion2"
                  className="mx-auto justify-center hover:drop-shadow-2xl"
                >
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Autoquestionbuttons/RuQw2.png"
                    alt="RuQw2"
                  />
                </Link>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link
                  href="/autoquestion3"
                  className="mx-auto justify-center hover:drop-shadow-2xl"
                >
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Autoquestionbuttons/RuQw3.png"
                    alt="RuQw3"
                  />
                </Link>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link
                  href="/autoquestion4"
                  className="mx-auto justify-center hover:drop-shadow-2xl"
                >
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Autoquestionbuttons/RuQw4.png"
                    alt="RuQw4"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="7" className="md:pt-2"></div>

      <div className="flex flex-row place-self-center pb-5">
        <div className="w-full">
          <div className="rounded-3xl border-p2-orange md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl dark:border-amber-600">
            <div className="pb-2 text-center text-sm font-semibold text-p1-darkgreen md:text-2xl dark:text-amber-600">
              Get themed cards and earn Racepoints
            </div>

            <div className="flex flex-row place-content-center pb-5">
              <div className="basis-3/5 scale-95 duration-500 hover:scale-105">
                <Link href="/racepointcards" className="mx-auto hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max"
                    width={1000}
                    height={1000}
                    src="/Quizbuttons/CardsRacepoints.png"
                    alt="CardsRacepoints"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="8" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="rounded-3xl border-p2-orange p-2 md:my-5 md:space-y-3 md:border-4 md:p-6 md:hover:shadow-2xl dark:border-amber-600">
            <div className="pb-2 text-center text-2xl font-bold text-p1-darkgreen dark:text-amber-600">
              Racepoints are awarded for:
            </div>
            <ul className="list-disc pb-2 text-base text-p1-darkgreen md:px-5 md:text-xl dark:text-amber-600">
              <li>correct answers in quizzes</li>
              <li> completed surveys</li>
              <li> referral program </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="9" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-4xl font-bold text-p2-orange md:pt-4 md:text-4xl">
            WhiteList
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="rounded-3xl border-p2-orange p-6 md:my-5 md:space-y-6 md:border-4 md:hover:shadow-2xl dark:border-amber-600">
            <div className="text-center text-xl font-bold text-p1-darkgreen md:text-2xl dark:text-amber-600">
              We evaluate your activity with Racepoints!
            </div>
            <div className="text-center text-xl text-p1-darkgreen md:text-2xl dark:text-amber-600">
              The most active ones will receive benefits when creating NFTs:
            </div>

            <ol className="space-y-4 p-4 pb-5 text-center text-xl text-p1-darkgreen md:text-2xl dark:text-amber-600">
              <li>Level 1 = -10% </li>
              <li>Level 2 = -20% </li>
              <li>Level 3 = -30% </li>
            </ol>
          </div>
        </div>
      </div>
      <div id="10" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-4xl font-bold text-p2-orange md:pt-4 md:text-4xl">
            RaceLads NFT Giveaways
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="rounded-3xl border-p2-orange p-6 md:my-5 md:space-y-6 md:border-4 md:hover:shadow-2xl dark:border-amber-600">
            <ul className="list-disc space-y-3 px-5 text-base text-p1-darkgreen md:text-xl dark:text-amber-600">
              <li>among all registered on the site</li>
              <li>among the 10% of the most active users registered on the site</li>
              <li>among active users promoting the project</li>
              <li>among pilots and team members of the motorsports and autocultural community</li>
              <li>among promoters of motorsport and autocultural events</li>
              <li>among partners</li>
              <div className="pb-5"></div>
            </ul>
            <div className="pb-5 text-center text-xl text-p1-darkgreen md:text-2xl dark:text-amber-600">
              Your active position in the development of the Global Automotive Association increases
              your chances!
            </div>
          </div>
        </div>
      </div>
      <div id="11" className="md:pt-2"></div>

      <div id="12" className="md:pt-0"></div>

      <div id="13" className="md:pt-2"></div>

      <div className="w-20 basis-1/5 place-self-center md:w-40">
        <Image width={150} height={150} src="/Hero/i12.png" alt="Hero12" />
      </div>
    </div>
  );
}
