'use client';

import { JumpButton } from '@/components/jumpButton';

export default function Page() {
  const jumpPoints = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      <div className="p-2 text-center text-xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-4xl dark:text-p1-green dark:hover:text-p1-cyan">
        Participant benefit
      </div>
      <div className="flex flex-wrap object-center px-2 md:flex-nowrap md:space-x-2">
        <div className="flex w-full min-w-96 flex-wrap object-center p-2 md:mb-2 md:flex-nowrap md:space-x-2">
          <div>
            <div className="md:pt-2" id="1"></div>

            <div className="my-1 rounded-3xl border-2 border-p1-darkgreen p-6 text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-2 md:border-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="pb-3 text-center font-bold">Unique privileges:</p>
              <p className="pb-5">Events: Participation in events, concerts, exhibitions.</p>
              <p className="pb-5">Access to Priority Club</p>
              <p className="pb-5">
                We provide our members with exclusive bonuses - tickets to events, autograph
                sessions, photo sessions, lectures, tours, NFT giveaways and much more.
              </p>
            </div>
            <div className="md:pt-2" id="2"></div>

            <div className="my-1 rounded-3xl border-2 border-p1-darkgreen p-6 text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-2 md:border-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="pb-3 text-center font-bold">Social privileges:</p>
              <p className="pb-5">
                Communities: Access to exclusive chats, forums or social media groups.
              </p>
              <p className="pb-5">
                Networking Events: Participate in private networking events and meetings.
              </p>
            </div>
            <div className="md:pt-2" id="3"></div>

            <div className="my-1 rounded-3xl border-2 border-p1-darkgreen p-6 text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-2 md:border-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="pb-3 text-center font-bold">Personalization:</p>
              <p className="pb-5">
                Custom services: Possibility to order unique works of art or personalized products.
              </p>
              <p className="pb-5">
                Avatars and Identity: Personalized avatars or identities in online spaces.
              </p>
            </div>
          </div>
          <div className="md:pt-2" id="4"></div>

          <div>
            <div className="my-1 rounded-3xl border-2 border-p1-darkgreen p-6 text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-2 md:border-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="pb-3 text-center font-bold">Discounts and offers:</p>
              <p className="pb-5">
                Shopping: Discounts on goods and services offered by the project or its partners.
              </p>
              <p className="pb-5">VIP services: Access to premium services and services.</p>
            </div>
            <div className="md:pt-2" id="5"></div>

            <div className="my-1 rounded-3xl border-2 border-p1-darkgreen p-6 text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-2 md:border-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="pb-3 text-center font-bold">Rewards and bonuses:</p>
              <p className="pb-5">Airdrop: Receive additional tokens or NFTs for free.</p>
            </div>
            <div className="md:pt-2" id="6"></div>

            <div className="my-1 rounded-3xl border-2 border-p1-darkgreen p-6 text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-2 md:border-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="pb-3 text-center font-bold">Physical goods:</p>
              <p className="pb-5">
                Collectibles: Receiving a physical version of a piece of art or collectible item.
              </p>
              <p className="pb-5">Merchandising: Clothing, accessories and other branded goods. </p>
            </div>
            <div className="md:pt-2" id="7"></div>

            <div className="my-1 rounded-3xl border-2 border-p1-darkgreen p-6 text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-2 md:border-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="pb-3 text-center font-bold">Educational Resources:</p>
              <p className="pb-5">
                Courses and seminars: Access to training materials, webinars and master classes.
              </p>
              <p className="pb-5">Master classes with leading pilots.</p>
            </div>
          </div>
          <div className="md:pt-2" id="8"></div>

          <div>
            <div className="my-1 rounded-3xl border-2 border-p1-darkgreen p-6 text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-2 md:border-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="pb-3 text-center font-bold">Voting rights:</p>
              <p className="pb-5">DAO (Decentralized Autonomous Organizations):</p>
              <p className="pb-5">
                Members of our community will be able to submit applications and take part in voting
                on choice of event format, judges, participants and other issues
              </p>
            </div>
            <div className="md:pt-2" id="9"></div>

            <div className="my-1 rounded-3xl border-2 border-p1-darkgreen p-6 text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-2 md:border-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="pb-3 text-center font-bold">Decentralized portal:</p>
              <p className="pb-5">
                We are launching a platform with current motorsport news, photo and video reports,
                statistics recorded in the blockchain, as well as announcements and voting for
                members communities.
              </p>
              <p className="pb-5">Access to the international portal.</p>
              <p className="pb-5">
                We are expanding our presence in the international arena to unite car enthusiasts
                across around the world, erasing borders and distances.
              </p>
            </div>
            <div className="md:pt-2" id="10"></div>

            <div className="my-1 rounded-3xl border-2 border-p1-darkgreen p-6 text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-2 md:border-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="pb-3 text-center font-bold">Investment opportunities:</p>
              <p className="pb-5">
                Access to early investments: Opportunity to invest in projects at early stages or
                participate in closed financing rounds.
              </p>
            </div>
          </div>
        </div>

        <div className="pb-5"></div>
      </div>
    </div>
  );
}
