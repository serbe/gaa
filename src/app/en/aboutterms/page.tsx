'use client';
import { useFavicon } from '@/utils/hooks';
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
  useFavicon('/icon/terms.png ');

  return (
    <div className="mx-auto flex max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      <div className="p-2 text-xl md:p-2">
        <div className="p-2 text-center text-xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-4xl dark:text-p1-green dark:hover:text-p1-cyan">
          Terms & Definitions
        </div>
        <div className="my-5 rounded-3xl border-p1-darkgreen px-2 text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:p-6 md:text-xl dark:hover:border-p1-green">
          <div className="md:pt-2" id="1"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">NFT</span>, also known as Non-Fungible Tokens are best
            understood as digital assets that exist on the blockchain. Once they are brought onto
            the blockchain, they can never be removed and you are able to see every person that has
            ever owned that NFT as all sales are stored on the blockchain. NFTs can be in the form
            of digital art, music, virtual real estate, all the way through to collectibles and
            gaming assets! Any digital asset can be minted or tokenized and turned into an NFT. Once
            minted or tokenized, these assets can be bought, sold and traded using cryptocurrency.
          </div>
          <div className="md:pt-2" id="2"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">Assets</span> this is just an industry term for a
            digital collectible – it could be a model, piece of art, music, a tweet or anything else
            you can buy as an NFT. Not everyone will call items assets, most people call them NFTs
            but it’s useful to know in case it does pop up in conversation.
          </div>
          <div className="md:pt-2" id="3"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">Blockchain </span> – This is the basis of all
            cryptocurrencies and NFTs. It was conceived by Satoshi Nakamoto in 2008 as a
            decentralized (i.e. not controlled by one person, company, or entity) and it is a ledger
            of transactions. It’s a way of keeping track of all transactions that occur within the
            blockchain, and there are also protocols set up to validate these transactions. That way
            you know that what you’re buying, sending, or receiving is authentic. Nothing can be
            changed on the blockchain!
          </div>
          <div className="md:pt-2" id="4"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">Mint </span> This is the process of adding an NFT to the
            blockchain for the first time. This is a core part of NFTs and what makes them so
            valuable because once an item or asset is minted, this is proof that it’s authentic.
            Minting guide can be found in ⁠📋┃nft-minting-guide.
          </div>
          <div className="md:pt-2" id="5"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">DAO (Decentralized Autonomous Organization)</span>-
            Stands for Decentralized Autonomous Organization and it is an organization that has
            established its own rules based on smart contracts on the blockchain.
          </div>
          <div className="md:pt-2" id="6"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">DeFi (Decentralised Finance)</span>- This is shorthand
            for Decentralised Finance, which is a catch-all term for any kind of financial activity
            that uses cryptocurrency and blockchain principles. You probably won’t come across this
            one a lot but again, it’s useful to know as it’s a growing field and will be popping up
            more and more in everyday discussions.
          </div>
          <div className="md:pt-2" id="7"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">Floor</span> (Floor ) - The &quot;floor&quot; or
            &quot;floor price&quot; of a project is simply the lowest price at which you can buy an
            NFT from that project on the secondary market.
          </div>
          <div className="md:pt-2" id="8"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">Gas </span> – this is the &quot;fee&quot; you have to
            pay to transact something on the Ethereum blockchain. The price of gas is set by the
            miners on the blockchain, and can rise and fall depending on supply and demand. This
            affects you if you are minting items for sale or buying items using the Ethereum
            network.
          </div>
          <div className="md:pt-2" id="9"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">Generative Art</span> - All the NFTs in each of these
            collections have certain traits in common: Clothes, skin color, headwear, background,
            etc. it&quot;s possible to mix and match these traits to create a collection of NFTs
            that are all unique. While the initial traits are hand-made, each NFT is automatically
            created by a computer with a random combination of all the available traits.
          </div>
          <div className="md:pt-2" id="10"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">Metadata</span> The metadata of an NFT is essentially
            all the necessary and unique data making that NFT exactly what it is. Perhaps most
            interestingly, the metadata defines how a piece of art or a collectible looks.
          </div>
          <div className="md:pt-2" id="11"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">Metamask</span> the most popular NFT wallet in the
            Ethereum ecosystem.
          </div>
          <div className="md:pt-2" id="12"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">OpenSea</span> - the leading marketplace for buying and
            selling NFT&quot;s
          </div>
          <div className="md:pt-2" id="13"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">PFP (Profile Picture) </span> - &quot;PFP&quot; is
            shorthand for &quot;profile picture&quot;.
          </div>
          <div className="md:pt-2" id="14"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">Rarity </span> As the term implies this is all about how
            rare an NFT is. Most NFT collections have different rarity throughout the collection
            which in turn makes some more valuable than others.
          </div>
          <div className="md:pt-2" id="15"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">Reveal </span> - For new generative projects, the
            artwork won&quot;t actually be created until the NFT is minted, and you won&quot;t know
            exactly what you get until after you buy it. It&quot;s up to the creators behind the
            collection whether the reveal happens immediately, when the collection sells out, or
            with a delay
          </div>
        </div>
        <div className="pb-5"></div>
      </div>
    </div>
  );
}
