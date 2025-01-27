'use client';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { JumpButton } from '@/components/jumpButton';

export default function Page() {
  const jumpPoints = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />
      <div id="1"></div>
      <section className="flex flex-wrap object-center px-2 md:flex-nowrap md:space-x-2 md:pt-4">
        <div className="mb-4 w-full rounded-3xl border-p1-darkgreen bg-p1-white shadow-lg md:border-4 dark:border-p1-green dark:bg-p1-deepdarkgreen">
          <div className="flex flex-row">
            <div className="mx-auto text-center md:p-2 md:text-xl lg:text-2xl">
              <div className="flex flex-row justify-center md:pb-2">
                <div className="md:basis-3/5">
                  <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-2 md:text-4xl dark:text-p1-cyan">
                    Partners
                  </div>
                  <div className="px-2 pt-2 text-center text-base text-p1-darkgreen drop-shadow-2xl md:text-2xl dark:text-p1-green">
                    If you are interested in becoming a partner or a sponsor, please contact us.
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-center">
                <div className="basis-1/5">
                  <Image width={200} height={500} src="/Hero/77.png" alt="Hero77" />
                </div>
                <div className="basis-3/5">
                  <div className="rounded-3xl p-2 md:my-5">
                    <div className="text-center text-2xl text-p1-darkgreen md:pb-5">
                      <div className="place-content-center">
                        <div className="grid">
                          <div>
                            <Link
                              href="/contacts"
                              className="inline-block rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                            >
                              Feedback
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-1/5">
                  <Image width={200} height={600} src="/Hero/5.png" alt="Hero5" />
                </div>
              </div>
              <div className="my-5">
                <Link
                  href="#3"
                  className="inline-block w-11/12 rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                >
                  Our partners
                </Link>
              </div>
              <div className="my-5">
                <Link
                  href="#4"
                  className="inline-block w-11/12 rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                >
                  Our sponsors
                </Link>
              </div>

              <div className="my-5"></div>
            </div>
          </div>
        </div>
        <div id="2"></div>
        <div className="w-full rounded-3xl border-p2-orange bg-p1-white shadow-lg md:mb-4 md:min-w-96 md:border-4 dark:border-amber-600 dark:bg-p1-deepdarkgreen">
          <div className="flex flex-row">
            <div className="mx-auto text-center md:p-2 md:text-xl lg:text-2xl">
              <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-4xl dark:text-amber-600">
                If you want to support us,
              </div>
              <div className="px-2 pt-4 text-left text-base text-p1-darkgreen drop-shadow-2xl md:text-xl dark:text-p1-green">
                <p>
                  we invite you to take part in raising funds that will be used for the development
                  of project:
                </p>
                <p className="p-2"> - marketing (involving opinion leaders and audiences);</p>
                <p className="p-2"> - distribution of licenses;</p>
                <p className="p-2"> - creating new NFT collections;</p>
                <p className="p-2"> - hosting and server rental</p>
                <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-2xl dark:text-amber-600">
                  The first 100 participants in the collection will receive NFT rewards in an amount
                  depending on the size donations
                </div>
                <p className="p-4">
                  In this way we plan to attract initial capital and thank the first supporters of
                  the Project.
                </p>
              </div>

              <div className="my-5">
                <Link
                  href="#11"
                  className="inline-block w-11/12 rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-amber-400 dark:hover:bg-amber-800 dark:hover:text-amber-200"
                >
                  Donate
                </Link>
              </div>
              <div className="my-5">
                <Link
                  href="#12"
                  className="inline-block w-11/12 rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-amber-400 dark:hover:bg-amber-800 dark:hover:text-amber-200"
                >
                  Participants table
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="md:pb-96"></div>
      <div id="3" className="pt-10"></div>
      <div className="flex flex-row justify-center md:pb-5">
        <div className="md:basis-5">
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-4xl dark:text-p1-cyan">
            Partners
          </div>

          <div className="text-center text-xl text-p1-darkgreen md:pt-4 md:text-2xl dark:text-p1-green">
            <p>Partners are holders of NFT Promoter, National, Global licenses</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center md:pb-5">
        <div className="basis-1/6 p-2">
          <Image width={200} height={500} src="/Hero/9.png" alt="Hero9" />
        </div>
      </div>

      <div className="md:pb-96"></div>
      <div className="md:pb-48"></div>
      <div id="4" className="pt-10"></div>

      <div className="flex flex-row justify-center md:pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-4xl dark:text-p1-cyan">
            Sponsors
          </div>
        </div>
      </div>
      <div id="5"></div>
      <div className="flex flex-row justify-center md:pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-4xl dark:text-p1-green">
            Title Sponsor:
          </div>
          <div className="text-center text-xl text-p1-darkgreen md:pt-4 md:text-2xl dark:text-p1-green">
            <p>
              Since our organization is decentralized, this status is determined by the holders NFT
              Promoter, National, Global and limited time period to cover all expenses for
              organizing and holding a specific event
            </p>
            <p>
              The title sponsor covers one hundred percent of the cost with his monetary
              contribution events.
            </p>
            <p>placement cost - 1% sponsorship fee </p>

            <p>
              The logo of your brand with the status of &quot;Title Sponsor&quot; at the NFT award
              events
            </p>
          </div>
          <div id="6"></div>
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-8 md:text-4xl dark:text-p1-green">
            General Sponsor:
          </div>
          <div className="text-center text-xl text-p1-darkgreen md:pt-4 md:text-2xl dark:text-p1-green">
            <p>
              This status is determined by NFT Promoter, National, Global holders and is limited
              temporary period to cover 50% of the costs of organizing and conducting a specific
              events
            </p>
            <p>placement cost - 2% sponsorship fee</p>

            <p>
              The logo of your brand with the status of &quot;General Sponsor&quot; at the NFT award
              events
            </p>
          </div>
          <div id="7"></div>
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-8 md:text-4xl dark:text-p1-green">
            Official Sponsor:
          </div>
          <div className="text-center text-xl text-p1-darkgreen md:pt-4 md:text-2xl dark:text-p1-green">
            <p>
              This status is determined by NFT Promoter, National, Global holders and is limited
              temporary period to cover 25% of the costs of organizing and conducting a specific
              events
            </p>
            <p>placement cost - 2% sponsorship fee</p>

            <p>
              The logo of your brand with the status of &quot;Official Sponsor&quot; at the NFT
              award events
            </p>
          </div>
          <div id="8"></div>
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-8 md:text-4xl dark:text-p1-green">
            Sponsor participant:
          </div>
          <div className="text-center text-xl text-p1-darkgreen md:pt-4 md:text-2xl dark:text-p1-green">
            <p>
              This status is determined by NFT Promoter, National, Global holders and is limited
              temporary period to cover no more than 10% of the costs of organizing and conducting
              specific event
            </p>
            <p>placement cost - 10% sponsorship fee</p>

            <p>
              The logo of your brand with the status &quot;Sponsor&quot; at the NFT reward event
            </p>
            <p>The cost of placing a logo on the award is at least 1000 USDT</p>
          </div>
          <div id="9"></div>
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-8 md:text-4xl dark:text-p1-green">
            Information sponsor:
          </div>
          <div className="text-center text-xl text-p1-darkgreen md:pt-4 md:text-2xl dark:text-p1-green">
            <p>
              This status is determined by NFT Promoter, National, Global holders and is limited
              temporary period for organizing and holding a specific event
            </p>
            <p>Media: TV channels, radio stations, magazines, newspapers, Internet resources</p>

            <p>
              The logo of your information resource on the gaa.zone website in the information
              section sponsor and link to your resource
            </p>
          </div>
          <div id="10"></div>
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-8 md:text-4xl dark:text-p1-green">
            Barter Sponsor:
          </div>
          <div className="text-center text-xl text-p1-darkgreen md:pt-4 md:text-2xl dark:text-p1-green">
            <p>
              This status is determined by NFT Promoter, National, Global holders and is limited
              temporary period of cooperation
            </p>
            <p>not the deposit of funds, but the provision of products and services</p>

            <p>
              Your brand logo on the gaa.zone website in the Barter Sponsors section, with a link to
              your resource, as well as collaboration in joint projects
            </p>
          </div>
        </div>
      </div>

      <div className="md:pb-96"></div>
      <div className="md:pb-96"></div>

      <div id="11" className="pt-10"></div>
      <div className="flex flex-row justify-center md:pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-4xl dark:text-p1-cyan">
            QR code to support the Project
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center md:pb-5">
        <div className="basis-1/6 scale-95 p-2 transition-all delay-75 duration-300 ease-in-out hover:scale-100">
          <Link href="https://gaa.zone">
            <Image width={200} height={600} src="/QR/QR-gaa.zone.png" alt="QR-gaa.zone" />
          </Link>
        </div>
      </div>
      <div className="text-center text-xl text-p1-darkgreen md:pt-4 md:text-2xl dark:text-p1-green">
        <p>for now the link is to the site gaa.zone</p>
        <p>
          real support will be possible only after the deployment of smart contracts and the start
          of the Project
        </p>
      </div>

      <div className="flex flex-row justify-center md:pb-5">
        <div className="basis-1/6 p-2">
          <Image width={200} height={600} src="/Hero/3.png" alt="Hero5" />
        </div>
      </div>
      <div className="md:pb-96"></div>
      <div className="md:pb-48"></div>

      <div id="12" className="pt-10"></div>
      <div className="flex flex-row justify-center md:pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-4xl dark:text-p1-cyan">
            Participants table
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center md:pb-5">
        <div className="basis-5/6 p-2 text-p1-green">
          <div className="grid grid-cols-4 gap-4">
            <div>#</div>
            <div>Avatar</div>
            <div>Wallet</div>
            <div>USDT</div>
            <div>1</div>
            <div>
              <Image width={30} height={30} src="/HeroNFT/RaceLads/RaceLads1.png" alt="RaceLads1" />
            </div>

            <div>assdfgfgjfghk1235467455689</div>
            <div>10 000</div>
            <div>2</div>
            <div>
              <Image width={30} height={30} src="/HeroNFT/RaceLads/RaceLads2.png" alt="RaceLads2" />
            </div>

            <div>assdfgfgjfghk1235467455689</div>
            <div>8 000</div>
            <div>3</div>
            <div>
              <Image width={30} height={30} src="/HeroNFT/RaceLads/RaceLads3.png" alt="RaceLads3" />
            </div>

            <div>assdfgfgjfghk1235467455689</div>
            <div>5 000</div>
            <div>4</div>
            <div>
              <Image width={30} height={30} src="/HeroNFT/RaceLads/RaceLads4.png" alt="RaceLads4" />
            </div>

            <div>assdfgfgjfghk1235467455689</div>
            <div>3 000</div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center md:pb-5">
        <div className="md:basis-3/5"></div>
      </div>
      <div className="md:pb-96"></div>
      <div className="md:pb-36"></div>
      <div id="13"></div>
    </div>
  );
}
