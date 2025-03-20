'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { JumpButton } from '@/components/jumpButton';

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

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      <div className="p-2 text-center text-xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-3xl dark:text-p1-green dark:hover:text-p1-cyan">
        Roadmap
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-1/5"></div>
        <div className="md:basis-3/5">
          <div
            id="1"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-6 md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
          >
            Origin and discussion of the idea of connecting people into a community through
            Blockchain and NFT technologies
          </div>
        </div>
        <div className="md:basis-1/5"></div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="basis-1/5">
          <Image width={150} height={600} src="/Hero/h6.png" alt="Hero6" />
        </div>
        <div className="basis-4/5 md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <div className="pb-5">
              The realization of the global idea of Web3 is still at an early stage and has not yet
              received sufficient attention in society.
            </div>
            <div className="pb-5">
              We, in our turn, see the prospect of realization of a socially significant project
              that allows to unite people into a community of common interests using Blockchain and
              NFT technologies.
            </div>
            <div className="pb-5">
              It is Blockchain technology that can provide a decentralized community managed by
              people themselves.
            </div>
          </div>
        </div>
        <div className="basis-1/5">
          <Image width={150} height={600} src="/Hero/h9.png" alt="Hero9" />
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div
            id="2"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
          >
            Global Automotive Association
            <p>Project Startup </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
            Start of the development of a blockchain project capable of uniting people who are not
            indifferent to motorsports and automobile culture in general.
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div
            id="3"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
          >
            Creating social network accounts
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-4 border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:text-xl md:hover:shadow-xl dark:text-p1-green dark:hover:border-p1-green">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <button className="mx-auto justify-center rounded-3xl duration-500 hover:scale-105">
                  <Link href="https://discord.gg/gaa">
                    <Image width={200} height={600} src="/logo/discordlogomini.png" alt="discord" />
                  </Link>
                </button>
                <p className="dark:hover:text-p1-cyan">Discord</p>
              </div>

              <div className="text-center">
                <button className="mx-auto justify-center rounded-3xl duration-500 hover:scale-105">
                  <Link href="https://t.me/GlobalAutomotiveAssociation">
                    <Image
                      width={200}
                      height={600}
                      src="/logo/telegramlogomini.png"
                      alt="telegram_channel"
                    />
                  </Link>
                </button>
                <p>Telegram News Channel</p>
              </div>

              <div className="text-center">
                <button className="mx-auto justify-center rounded-3xl duration-500 hover:scale-105">
                  <Link href="https://x.com/RaceLads">
                    <Image width={200} height={600} src="/logo/twitterlogox.png" alt="twitter" />
                  </Link>
                </button>
                <p>X.com / Twitter</p>
              </div>

              <div className="text-center">
                <button className="mx-auto justify-center rounded-3xl duration-500 hover:scale-105">
                  <Link href="https://t.me/GAAChat">
                    <Image
                      width={200}
                      height={600}
                      src="/logo/telegramlogomini.png"
                      alt="telegram_chat"
                    />
                  </Link>
                </button>
                <p>Telegram Community</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div
            id="4"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
          >
            RaceLads NFT Collection
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center p-5">
        <div className="md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <div className="md:px-5">
              Development of the 1st generative NFT collection by GAA consisting of 10,000 digital
              heroes.
            </div>
            <div className="md:px-5">
              Each “RaceLad” is not just an image, but a unique character with different features
              and captured on the blockchain.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="basis-5 md:basis-3/5">
          <div
            id="5"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
          >
            Internet portal
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <div className="px-4 pb-2">
              Registration of the domain name gaa.zone.
              <p>
                Development of a website, which will be a unique portal where everyone will be able
                to:
              </p>
            </div>
            <ul className="list-disc px-4 md:px-5">
              <li>be informed about the latest news</li>
              <li>get acquainted with the results of events, realization through NFT</li>
              <li>take part in voting</li>

              <li>purchase NFTs from our collections</li>
              <li>enjoy photo and video materials attached to NFTs</li>
              <li>upload own content</li>
              <li>realize own opportunities</li>
              <div className="pb-5"></div>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="p-5">
          <Image width={700} height={600} src="/Cars/TCR.png" alt="TCR" />
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div
            id="6"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
          >
            Services and social relevance
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <div className="px-4 pb-2">Services for project participants:</div>
            <ul className="list-disc px-4">
              <li>promoters</li>
              <li>pilots</li>
              <li>collectors</li>
              <li>judges</li>
              <li>spectators</li>
            </ul>
            <div className="px-4 pb-5">
              Freedom of choice and communication, formation of NFT awards, digitalization of
              project participants, formation of a unified communication and decision-making
              environment.
            </div>
            <div className="px-4 pb-5">
              We create a free information environment, for the safety of information in which
              blockchain and Web3 technologies are responsible.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="basis-4/5 md:basis-3/5">
          <div
            id="7"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
          >
            Other collections
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <div className="px-4 pb-5">
              The project envisages the release of several categories of NFT collections:
            </div>
            <div className="px-4 pb-5">
              Rarity / sports cars - everyone will be able to digitize their car fleet.
            </div>
            <div className="px-4 pb-5">
              Pilots, collectors and team members will be able to create their own unique NFTs.
            </div>
            <div className="px-4 pb-5">
              Awards - NFTs with metadata about the event, digital award image, video content.
            </div>
            <div className="px-4 pb-5">
              Other collections that can bring closure to socially relevant community issues.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center pb-2">
        <div className="p-5 md:basis-3/5">
          <Image width={1000} height={600} src="/Cars/Stance.png" alt="Stance" />
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div
            id="8"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
          >
            Issuance of interchangeable tokens
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <div className="px-4 pb-5">
              Upon achievement of the primary goals, community participants (holders of NFTs from
              GAA collections) will decide on the need to issue a token in ERC20 format.
            </div>
            <div className="px-4 pb-5">
              In this way we plan to provide additional opportunities for investors.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="basis-5 md:basis-3/5">
          <div
            id="9"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
          >
            Creation of a decentralized autonomous organization (DAO)
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <div className="px-4 pb-5">
              Provide direction leaders with Global Automotive Association (GAA) rights.
            </div>
            <div className="px-4 pb-5">
              Finding leaders in different areas and offering to join their efforts to build and
              strengthen the community.
            </div>
            <div className="px-4 pb-5">
              Including leaders in the DAO by providing the appropriate NFT.
            </div>
            <div className="px-4 pb-5">
              If you are a leader in a certain area in your region and would like to become part of
              the DAO Global Automotive Association (GAA) please fill out the application form.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div
            id="10"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
          >
            Facilitating the development of young talents
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-1/5"></div>
        <div className="basis-4/5 md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <div className="pb-5">
              Create a comfortable social environment for the organization to promote and support
              young talents.
            </div>
          </div>
        </div>
        <div className="md:basis-1/5"></div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div
            id="11"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
          >
            Preservation of cultural values
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="basis-4/5 md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <div className="md:px-5">
              We help to preserve cultural values and monuments, support museums.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2 md:p-5">
        <div className="p-5 md:basis-3/5">
          <Image width={700} height={300} src="/Cars/Oldtimer.png" alt="Oldtimer" />
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div
            id="12"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
          >
            Organizing and holding national motorsport and autocultural events
          </div>
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <div className="px-4 pb-5">
              Organizing and holding national motorsport and autocultural events uniting different
              styles and directions.
            </div>
            <div className="px-4 pb-5">
              Creating a comfortable environment for the development of each of the directions.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div
            id="13"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
          >
            Organization and holding of international motorsport and autocultural events
          </div>
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <div className="px-4 pb-5">
              Organization and holding of international motorsport and autocultural events uniting
              different styles and directions and creating a comfortable environment for each
              direction
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div
            id="14"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl dark:text-p1-green dark:hover:text-p1-cyan"
          >
            Organization and holding of regular international motorsport and autocultural events
          </div>
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <div className="px-4 pb-5">
              Creating regular annual international motorsport and autocultural events, creating
              Granprix with high level of organization, creating a festival in autoculture and
              motorsport.
            </div>
            <div className="pb-5 text-center">A holiday of motorsport and car culture!</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center p-2 md:pt-5"></div>

      <div className="place-self-center">
        <Image width={700} height={600} src="/Cars/OpenWheels.png" alt="OpenWheels" />
      </div>
      <div className="h-screen/2 flex flex-row p-5">
        <div className="">
          <Image width={1900} height={200} src="/Hero/Compose1.png" alt="Compose1" />
        </div>
      </div>
      <div id="15" className="flex flex-row justify-center pb-2"></div>
    </div>
  );
}
