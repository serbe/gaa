'use client';

import { JumpButton } from '@/components/jumpButton';

import Image from 'next/image';
export default function Page() {
  const jumpPoints = ['1', '2', '3', '4', '5', '6'];
  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      <div className="text-lg">
        <div className="flex flex-row place-self-center">
          <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan text-center text-xl font-bold md:pt-5 md:text-4xl">
            Our Team
          </div>
        </div>

        <div className="flex flex-row place-content-center">
          <div className="text-p1-darkgreen grid grid-cols-1 gap-4 text-center md:grid-cols-2 md:p-2 xl:grid-cols-3">
            <div id="1" className="text-p1-darkgreen place-items-center">
              <Image
                className="rounded-full"
                width={200}
                height={200}
                src="/Team/Mike Starodub.png"
                alt="Mike Starodub"
              />

              <div className="mx-auto flex max-w-full flex-row justify-center space-y-2 p-2">
                <details className="dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:hover:border-p1-green dark:hover:text-p1-cyan rounded-3xl p-2 text-center open:ring-1 open:ring-black/5">
                  <summary className="text-lm text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan space-y-4 leading-6 font-semibold select-none">
                    Mikhail Starodub
                    <p>Founder & President</p>
                  </summary>
                  <div className="mt-3 text-base leading-6 md:text-xl">
                    <div className="pb-5 text-justify">
                      Mikhail is the founder of our company. He is the father of our main goals and
                      values. He found the key members of our team and helped them show their unique
                      talents in the work flow. He made the first key steps. He oragnized the start
                      of the Project, tactics and strategy of the company&apos;s development for the
                      next 5 years. He has international experience in organizing and conducting
                      official international sports competitions such as Formula-1, WTCR, national
                      RDS GP, RCRS, REC, SDC, as well as other motorsport and autocultural events at
                      Sochi Autodrom and Igora Drive.
                    </div>
                  </div>
                </details>
              </div>
            </div>

            <div id="2" className="text-p1-darkgreen place-items-center">
              <Image
                className="rounded-full"
                width={200}
                height={200}
                src="/Team/Andrey_Laus.png"
                alt="Andrey_Laus"
              />

              <div className="mx-auto flex max-w-full flex-row justify-center space-y-2 p-2">
                <details className="dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:hover:border-p1-green dark:hover:text-p1-cyan rounded-3xl p-2 text-center open:ring-1 open:ring-black/5">
                  <summary className="text-lm text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan space-y-4 leading-6 font-semibold select-none">
                    Andrew Laus
                    <p>Co-Founder & Vice President</p>
                  </summary>
                  <div className="mt-3 text-base leading-6 md:text-xl">
                    <div className="text-justify">
                      Strategic planning and company growth. Specializes in market analysis,
                      business strategy development and partner engagement. Has international
                      experience in organizing and conducting official international sports
                      competitions such as Formula-1, WTCR, national RDS GP, RCRS, REC, SDC, as well
                      as other motorsport and autocultural events at Sochi Autodrom and Igora Drive.
                    </div>
                  </div>
                </details>
              </div>
            </div>

            <div id="3" className="text-p1-darkgreen place-items-center">
              <Image
                className="rounded-full"
                width={200}
                height={200}
                src="/Team/David Agadjanian.png"
                alt="David Agadjanian."
              />

              <div className="mx-auto flex max-w-full flex-row justify-center space-y-2 p-2">
                <details className="dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:hover:border-p1-green dark:hover:text-p1-cyan rounded-3xl p-2 text-center open:ring-1 open:ring-black/5">
                  <summary className="text-lm text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan space-y-4 leading-6 font-semibold select-none">
                    David Aghajanyan
                    <p>Co-Founder, CFO & IRO</p>
                  </summary>
                  <div className="mt-3 text-base leading-6 md:text-xl">
                    <div className="text-justify">
                      Specializes in establishing and maintaining international business relations,
                      managing corporate reputation, developing and implementing PR strategies at
                      the global level. Possesses skills in crisis management and organization of
                      international events. Experience includes successful projects on brand
                      promotion and strengthening partnerships.
                    </div>
                  </div>
                </details>
              </div>

              <p className="pt-5 font-bold"></p>
              <p></p>
            </div>

            <div id="4" className="text-p1-darkgreen place-items-center">
              <Image
                className="rounded-full"
                width={200}
                height={200}
                src="/Team/Valerii_Kostikov.png"
                alt="Valerii Kostikov"
              />
              <div className="mx-auto flex max-w-full flex-row justify-center space-y-2 p-2">
                <details className="dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:hover:border-p1-green dark:hover:text-p1-cyan rounded-3xl p-2 text-center open:ring-1 open:ring-black/5">
                  <summary className="text-lm text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan space-y-4 leading-6 font-semibold select-none">
                    Valery Kostikov
                    <p>Co-Founder & Software developer</p>
                  </summary>
                  <div className="mt-3 text-base leading-6 md:text-xl">
                    <div className="text-justify">
                      Software developer specializing in frontend (React, Vue.js), backend (Node.js,
                      Django), Web3 and blockchain (Solidity, Ethereum). Leads service automation
                      design and development strategy. Experienced in creating and deploying smart
                      contracts and integrating blockchain networks.
                    </div>
                  </div>
                </details>
              </div>
            </div>

            <div id="5" className="text-p1-darkgreen place-items-center">
              <Image
                className="rounded-full"
                width={200}
                height={200}
                src="/Team/Lada.png"
                alt="Lada Leman"
              />

              <div className="mx-auto flex max-w-full flex-row justify-center space-y-2 p-2">
                <details className="dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:hover:border-p1-green dark:hover:text-p1-cyan rounded-3xl p-2 text-center open:ring-1 open:ring-black/5">
                  <summary className="text-lm text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan space-y-4 leading-6 font-semibold select-none">
                    Lada Lehman
                    <p>Artist</p>
                  </summary>
                  <div className="mt-3 text-base leading-6 md:text-xl">
                    <div className="text-justify">
                      Lada has a creative approach to getting things done and extensive experience
                      in creating and managing visual concepts. She specializes in developing brand
                      strategies and implementing innovative solutions in projects. Successfully
                      realized many projects in the field of graphic design, animation. Ensures high
                      standards of creativity and functionality. Possesses in-depth knowledge of
                      user experience and modern graphic design and animation.
                    </div>
                  </div>
                </details>
              </div>
            </div>

            <div id="6" className="text-p1-darkgreen place-items-center">
              <Image
                className="rounded-full"
                width={200}
                height={200}
                src="/Team/GermanBenkovsky.png"
                alt="German Benkovsky"
              />

              <div className="mx-auto flex max-w-full flex-row justify-center space-y-2 p-2">
                <details className="dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:hover:border-p1-green dark:hover:text-p1-cyan rounded-3xl p-2 text-center open:ring-1 open:ring-black/5">
                  <summary className="text-lm text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan space-y-4 leading-6 font-semibold select-none">
                    Herman Benkovsky
                    <p>Co-Founder & CMO</p>
                  </summary>
                  <div className="mt-3 text-base leading-6 md:text-xl">
                    <div className="text-justify">
                      Herman is by far the youngest member of our team. He is a student at MGIMO.
                      Herman has experience in creating successful socially significant media
                      products in the Web2 and Web3 spheres. In the Global Automotive Association
                      team German is responsible for the product promotion strategy and cooperation
                      with domestic and foreign partners.
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
