'use client';

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
      <div className="text-base md:text-xl">
        <div className="flex flex-row justify-center">
          <div className="basis-3/5 text-center text-p1-darkgreen">
            <div className="p-2 text-xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-4xl dark:text-p1-green dark:hover:text-p1-cyan">
              Lern Web 3
            </div>
          </div>
        </div>
        <div className="flex flex-row place-content-center p-2">
          <div className="text-center text-p1-darkgreen md:basis-4/12">
            <div className="space-y-6 rounded-3xl p-2 md:my-5">
              <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
                The collected information contains the key fundamentals of the direction of
                development of the global community in the digital industry.
              </div>
              <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
                This information is not new, but for someone it will be a discovery and an
                understanding of how it works will appear.
              </div>
            </div>
          </div>
        </div>
        <div className="" id="1"></div>

        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-3xl border-p1-darkgreen p-2 open:bg-p1-white open:ring-1 open:ring-p1-green hover:border-p1-green open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="select-none space-y-4 text-lg font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              What is Web3?
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
              <p>
                Web3 (or Web 3.0) is a concept for the next generation of the internet, focused on
                decentralization and the use of blockchain technologies to create a more open and
                secure network. Unlike Web 2.0, which is characterized by centralized platforms and
                services, Web3 envisions the use of decentralized applications (dApps), smart
                contracts, and cryptocurrencies to perform various functions on the internet.
              </p>
              <div className="space-y-4 pb-5"></div>
              <div className="pb-5">Key Characteristics of Web3:</div>
              <ul className="list-disc space-y-4 px-5">
                <li>
                  Decentralization: Management and data are stored on distributed networks rather
                  than on servers owned by a single company.
                </li>
                <li>
                  Blockchain: The use of blockchain technologies ensures transparency and security
                  in transactions.
                </li>
                <li>
                  Smart Contracts: Automated contracts that execute automatically when certain
                  conditions are met.
                </li>
                <li>
                  Cryptocurrencies and Tokens: The use of digital currencies for transactions and
                  tokens for governance and asset ownership.
                </li>
                <li>
                  Identity and Privacy: Users have greater control over their digital identity and
                  personal data.
                </li>
              </ul>
            </div>
          </details>
        </div>
        <div className="" id="2"></div>

        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-3xl border-p1-darkgreen p-2 open:bg-p1-white open:ring-1 open:ring-p1-green hover:border-p1-green open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="select-none space-y-4 text-lg font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              In order to better understand what Web3 is, you need to know what Web 1 and Web 2 are.
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>Web-1</p>
              <div className="space-y-4 pb-5"></div>
              <div className="pb-5">
                Web 1 (or Web 1.0) refers to the first era of internet development, covering the
                period from approximately 1990 to the early 2000s. During this time, the internet
                primarily consisted of static web pages that users could view but not interact with
                as they can in later versions of the web. The main characteristics of Web1 include:
                Key Characteristics of Web1:
              </div>
              <ul className="list-disc space-y-4 px-5">
                <li>
                  Static Content: Most websites were composed of static HTML pages that were rarely
                  updated. Content was created and published by webmasters, and users could not
                  interact with it or make changes.
                </li>
                <li>
                  Basic Web Technologies: The primary technologies were HTML (HyperText Markup
                  Language) for page structure and HTTP (HyperText Transfer Protocol) for data
                  transmission over the network. CSS (Cascading Style Sheets) was used for styling
                  pages, but its capabilities were limited.
                </li>
                <li>
                  One-Way Communication: Websites mainly provided information to users without
                  offering interactivity. Users could only consume content but could not contribute
                  to it or interact with others through the site.
                </li>
                <li>
                  Absence of Social Media: During this period, there were no social networks or
                  other platforms for user interaction and content creation. Most websites were
                  personal pages, company sites, or information databases.
                </li>
                <li>
                  Navigation Through Portals and Directories: Sites like Yahoo! provided directories
                  of web pages, making it easier for users to find information. Search engines like
                  AltaVista and Lycos began to emerge, but their capabilities were limited compared
                  to modern search engines.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5"> Examples of Typical Web1 Sites:</div>
            <ul className="list-disc space-y-2 px-5">
              <li> Information Portals: Yahoo!, AOL.</li>
              <li>Early Search Engines: AltaVista, Lycos.</li>
              <li>Early Commercial Sites: Amazon, eBay (в ранние годы).</li>
              <li>Personal Pages and Blogs: Geocities, Angelfire.</li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5">
              Web1 was an important stage in the development of the internet, laying the foundation
              for the subsequent transition to Web 2.0 and the further evolution of an interactive
              and socially oriented web.
            </div>
          </details>
        </div>
        <div className="" id="3"></div>

        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-3xl border-p1-darkgreen p-2 open:bg-p1-white open:ring-1 open:ring-p1-green hover:border-p1-green open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="select-none space-y-4 text-lg font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              Web 2
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                Web 2 (or Web 2.0) is the second era of internet development, which began in the
                early 2000s. Web2 represents a transition from static web pages and one-way
                interaction (typical of Web1) to more dynamic and interactive web applications.
              </p>
              <div className="space-y-4 pb-5"></div>
              <div className="pb-5">Key Characteristics of Web2:</div>
              <ul className="list-disc space-y-4 px-5">
                <li>
                  Dynamic Content and Interactivity: Unlike the static pages of Web1, Web2 sites
                  feature dynamic content that can change in real-time. Users can interact with
                  websites and with each other through comments, likes, forums, and other
                  mechanisms.
                </li>
                <li>
                  Social Networks and User-Generated Content: Web2 is characterized by the growth of
                  social media platforms like Facebook, Twitter, Instagram, and YouTube. These
                  platforms allow users to create and share content, as well as interact with one
                  another.
                </li>
                <li>
                  Web Applications: Web2 includes the development of complex web applications, such
                  as Google Docs, which offer functionality comparable to desktop software but run
                  within a browser.
                </li>
                <li>
                  Ajax and JavaScript: Technologies like Ajax (Asynchronous JavaScript and XML),
                  JavaScript, and more modern frameworks (e.g., React, Angular) enable the creation
                  of more responsive and interactive user interfaces.
                </li>
                <li>
                  APIs and Mashups: Web2 heavily utilizes APIs (Application Programming Interfaces)
                  for integrating various services and data. This allows for the creation of mashup
                  applications that combine data and functionality from different sources.
                </li>
                <li>
                  Collaboration and Sharing: Platforms like Wikipedia and various online editors
                  enable users to collaborate on content, making changes and additions in real-time.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5">Examples of Typical Web2 Sites and Applications:</div>
            <ul className="list-disc space-y-2 px-5">
              <li>Social Networks: Facebook, Twitter, LinkedIn, Instagram.</li>
              <li>Video Sharing Platforms: YouTube, Vimeo.</li>
              <li>Blogging and Publishing Platforms: WordPress, Medium.</li>
              <li>Collaborative Online Tools: Google Docs, Trello, Slack.</li>
              <li>E-commerce: Amazon, eBay.</li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5">
              Web2 brought significant changes to how users interact with the internet, making it
              more interactive, social, and focused on user-generated content. This stage of
              internet development laid the groundwork for the further advancements we see in the
              concept of Web3.
            </div>
          </details>
        </div>
        <div className="" id="4"></div>

        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-3xl border-p1-darkgreen p-2 open:bg-p1-white open:ring-1 open:ring-p1-green hover:border-p1-green open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="select-none space-y-4 text-lg font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              Decentralization
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                Decentralization is the process of distributing power, management, and
                decision-making away from a central authority or single point of control to a more
                distributed system or network. In the context of information technology and
                blockchain technologies, decentralization has several key aspects:
              </p>
              <div className="space-y-4 pb-5"></div>
              <div className="pb-5">Key Aspects of Decentralization:</div>
              <ul className="list-disc space-y-4 px-5">
                <li>
                  Technological Decentralization: In this model, data and computational resources
                  are distributed across multiple nodes or servers rather than being stored and
                  processed on a single central server. An example is blockchain, where information
                  is distributed across a network of nodes, each of which stores a copy of the
                  entire blockchain.
                </li>
                <li>
                  Organizational Decentralization: In this model, decision-making and management are
                  distributed among many participants or organizations rather than being
                  concentrated in a single company or group. An example is a Decentralized
                  Autonomous Organization (DAO), where participants collectively make decisions
                  through smart contracts.
                </li>
                <li>
                  Decentralization of Power: This is the process of distributing authority and
                  responsibility across different levels of governance or groups. In the context of
                  states, this might mean transferring power from the central government to regional
                  or local authorities.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Advantages of Decentralization:
              <ul className="list-disc space-y-2 px-5 pt-3">
                <li>
                  Increased Security: Distributing data and processes reduces the risk of hacking or
                  system failure, as there is no single point of failure.
                </li>
                <li>
                  Transparency and Trust: In decentralized systems, transactions and processes are
                  often open and verifiable by all participants, which increases trust.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>
          </details>
        </div>
        <div className="" id="5"></div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-3xl border-p1-darkgreen p-2 open:bg-p1-white open:ring-1 open:ring-p1-green hover:border-p1-green open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="select-none space-y-4 text-lg font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              What is blockchain?
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                Blockchain is a distributed and secure data storage technology that consists of a
                chain of blocks, each containing information. This information can include
                transaction data, smart contracts, or any other events that need to be recorded and
                protected from modification. The main features of blockchain include
                decentralization, immutability, and security.
              </p>
              <div className="space-y-4 pb-5"></div>
              <p>Key Characteristics of Blockchain:</p>
              <div className="pb-5"></div>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Decentralization: Data in a blockchain is stored across multiple nodes (computers)
                  that form a network. All nodes have a copy of the entire blockchain, eliminating
                  the need for a central authority and increasing the system&apos;s resilience.
                </li>
                <li>
                  Immutability: Each block contains the hash of the previous block, making it
                  impossible to alter information in a block without changing all subsequent blocks.
                  This ensures the integrity and reliability of the data recorded in the blockchain.
                </li>
                <li>
                  Transparency and Verifiability: In public blockchains, data is accessible to all
                  network participants, ensuring transparency. Anyone can verify transactions and
                  confirm their authenticity.
                </li>
                <li>
                  Security: Blockchain uses cryptographic methods to protect data and ensure its
                  authenticity. Complex mathematical algorithms safeguard the data from unauthorized
                  access and alterations.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              How Blockchain Works:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Transaction Creation: A user initiates a transaction, which includes information
                  such as cryptocurrency transfer, smart contract data, or any other event.
                </li>
                <li>
                  Transaction Verification: The transaction is broadcast to the network, where it is
                  verified by nodes for correctness and compliance with consensus rules (e.g., Proof
                  of Work or Proof of Stake).
                </li>
                <li>
                  Block Formation: Verified transactions are grouped into blocks. Each block
                  contains the hash of the previous block, forming a chain.
                </li>
                <li>
                  Block Confirmation: Once a block is created and confirmed by the nodes, it is
                  added to the blockchain, and the information becomes immutable.
                </li>
                <li>
                  Distribution and Synchronization: The updated blockchain is distributed to all
                  nodes in the network, which then update their copies of the blockchain.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Examples of Blockchain Use Cases:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Cryptocurrencies: The most well-known application of blockchain is in
                  cryptocurrencies such as Bitcoin and Ethereum, which use blockchain for
                  decentralized and secure transaction accounting.
                </li>
                <li>
                  Smart Contracts: Platforms like Ethereum use blockchain to execute smart contracts
                  that automatically perform actions when predefined conditions are met.
                </li>
                <li>
                  Supply Chain Management: Blockchain can be used to track the movement of goods in
                  supply chains, ensuring transparency and data authenticity.
                </li>
                <li>
                  Decentralized Applications (dApps): Applications running on blockchain provide
                  decentralized execution of various functions without the need for a central
                  server.
                </li>
                <li>
                  Voting: Blockchain can be used to conduct secure and transparent voting,
                  eliminating the possibility of fraud.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Advantages of Blockchain:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Resilience to Hacking: The decentralized nature of blockchain makes it resistant
                  to attacks, as there is no single point of failure.
                </li>
                <li>
                  Transparency: All network participants can view data and verify its authenticity.
                </li>
                <li>
                  Cost Reduction: Blockchain eliminates the need for intermediaries, which can
                  reduce operational costs.
                </li>
                <li>
                  Automation: Smart contracts and decentralized applications can automate many
                  processes, making them faster and more reliable.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>
            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Blockchain is a powerful technology that opens up new possibilities for secure and
              decentralized data storage and processing, finding applications in various industries,
              from finance to supply chain management.
            </div>
          </details>
        </div>
        <div className="" id="6"></div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-3xl border-p1-darkgreen p-2 open:bg-p1-white open:ring-1 open:ring-p1-green hover:border-p1-green open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="select-none space-y-4 text-lg font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              Smart contracts
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                Smart contracts are self-executing contracts with the terms of the agreement between
                buyer and seller directly written into lines of code. These contracts exist on a
                blockchain and are automatically executed when predefined conditions are met. Smart
                contracts provide transparency, security, and automation of processes, eliminating
                the need for intermediaries.
              </p>
              <div className="space-y-4 pb-5"></div>
              <p> Key Characteristics of Smart Contracts:</p>
              <div className="pb-5"></div>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Autonomy: Smart contracts execute automatically without the need for human
                  intervention once predefined conditions are met.
                </li>
                <li>
                  Decentralization: They operate on a blockchain, meaning they are not controlled by
                  a single central organization or server.
                </li>
                <li>
                  Transparency: All network participants can verify the contract terms and its
                  execution, increasing trust and reducing the risk of fraud.
                </li>
                <li>
                  Immutability: Once deployed on the blockchain, a smart contract cannot be altered,
                  ensuring the reliability and constancy of the contract terms.
                </li>
                <li>
                  Security: The code and transactions are protected by cryptography, making them
                  resistant to hacking and manipulation.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              How Smart Contracts Work:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Creation and Deployment: A smart contract is created by a developer using a
                  programming language such as Solidity for Ethereum. It is then deployed on the
                  blockchain.
                </li>
                <li>
                  Condition Execution: The smart contract contains logical conditions (e.g.,
                  &quot;if this, then that&quot;) that are automatically checked and executed when
                  certain conditions are met.
                </li>
                <li>
                  Automatic Execution: If the conditions are fulfilled, the smart contract performs
                  programmed actions, such as transferring funds, recording data, or triggering
                  other smart contracts.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Examples of Smart Contract Uses:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Financial Services: Smart contracts can automate processes such as lending,
                  insurance, and asset trading. For example, decentralized finance (DeFi) uses smart
                  contracts to create financial products without the need for traditional financial
                  institutions.
                </li>
                <li>
                  Logistics and Supply Chain Management: Smart contracts can track the movement of
                  goods, automate payments, and manage supplies based on predefined conditions.
                </li>
                <li>
                  Digital Asset Management: Smart contracts can be used to create and manage tokens,
                  including NFTs (non-fungible tokens), which represent unique digital objects like
                  artwork, collectibles, and virtual real estate.
                </li>
                <li>
                  Organizational Governance: Decentralized Autonomous Organizations (DAOs) use smart
                  contracts to make collective decisions and manage organizational resources based
                  on member voting.
                </li>
                <li>
                  Legal Agreements: Smart contracts can automate the execution of legal agreements
                  such as real estate leases or service contracts. услуг.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Examples of Smart Contract Platforms:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Ethereum: The most well-known and widely used platform for creating smart
                  contracts. It uses the Solidity programming language.
                </li>
                <li>
                  EOS: A platform focused on high performance and scalability for smart contracts.
                </li>
                <li>
                  Tron: A platform designed for creating decentralized applications and smart
                  contracts with an emphasis on multimedia applications.
                </li>
                <li>
                  Cardano: A platform known for its scientific approach to development and smart
                  contract security.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Smart contracts are revolutionizing various industries by automating processes and
              creating new opportunities for interaction without intermediaries.
            </div>
          </details>
        </div>
        <div className="" id="7"></div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-3xl border-p1-darkgreen p-2 open:bg-p1-white open:ring-1 open:ring-p1-green hover:border-p1-green open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="select-none space-y-4 text-lg font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              DAO Decentralized Autonomous Organization
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                A Decentralized Autonomous Organization (DAO) is an organization managed through
                blockchain technology and smart contracts, operating without central control. In a
                DAO, decisions are made collectively by the organization’s participants, often
                through voting using tokens.
              </p>
              <div className="space-y-4 pb-5"></div>
              <p>Key Characteristics and Principles of DAOs:</p>
              <div className="pb-5"></div>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Decentralized Management: A DAO does not have a single governing body or
                  centralized control. All organizational activities are managed collectively by
                  participants through smart contracts.
                </li>
                <li>
                  Transparency and Openness: All actions and transactions of a DAO are recorded on
                  the blockchain, making them transparent and verifiable for all participants. This
                  increases trust among members, as all activities can be audited.
                </li>
                <li>
                  Smart Contracts: The core of a DAO’s functionality is its smart
                  contracts—automated programs that execute when certain conditions are met. These
                  contracts define the rules and procedures for the DAO and ensure compliance
                  without the need for a central intermediary.
                </li>
                <li>
                  Voting and Participation: DAO members typically have voting rights proportional to
                  the number of tokens they hold. Voting can be used to make decisions about project
                  development, resource allocation, and other significant issues.
                </li>
                <li>
                  Autonomy: DAOs operate autonomously by adhering to the rules encoded in smart
                  contracts. This minimizes the need for human intervention and reduces the risk of
                  human error or misuse.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Examples of DAO Use Cases:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Financial Projects: DAOs can manage funds and investments, allocating resources to
                  projects based on collective voting.
                </li>
                <li>
                  Social and Charitable Projects: Members can jointly manage charitable funds and
                  distribute aid through voting mechanisms.
                </li>
                <li>
                  Decentralized Platforms: Management of decentralized applications and services,
                  such as content-sharing platforms or social networks, can be conducted through
                  DAOs.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Notable Examples of DAOs:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  The DAO: One of the first and most well-known examples, created in 2016 on the
                  Ethereum platform. It raised significant funds through crowdfunding but soon faced
                  a vulnerability that led to a hacker attack and substantial losses.
                </li>
                <li>
                  MakerDAO: A platform managing the stablecoin DAI. Participants can vote on changes
                  to the protocol and system parameters, such as interest rates.
                </li>
                <li>
                  Aragon: A platform providing tools for creating and managing DAOs, including
                  interfaces for voting and asset management.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              DAOs represent an innovative approach to organization and management, leveraging
              blockchain technology to ensure transparency, security, and decentralization.
            </div>
          </details>
        </div>
        <div className="" id="8"></div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-3xl border-p1-darkgreen p-2 open:bg-p1-white open:ring-1 open:ring-p1-green hover:border-p1-green open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="select-none space-y-4 text-lg font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              Organization of data storage in a decentralized network using IPFS technology
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                IPFS (InterPlanetary File System) is a decentralized file storage and sharing system
                designed to create a more resilient and accessible internet. IPFS uses peer-to-peer
                (P2P) technology for distributed data storage, which ensures reliability, speed, and
                resistance to censorship.
              </p>
              <div className="space-y-4 pb-5"></div>
              <p>Key Features and Principles of IPFS:</p>
              <div className="pb-5"></div>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Decentralized Storage: Unlike traditional centralized servers, IPFS employs a
                  distributed network of nodes where each node can store and transmit data. This
                  makes the system more resilient to failures and attacks.
                </li>
                <li>
                  Content Addressing: In IPFS, files are identified and retrieved by their content
                  rather than their location. Each file or data fragment is assigned a unique hash
                  used to search for and retrieve it. If the content of the file changes, its hash
                  changes as well.
                </li>
                <li>
                  P2P Network: IPFS utilizes a P2P network to exchange data between nodes. Nodes can
                  request, store, and transfer files to one another, enhancing the overall speed and
                  efficiency of the network.
                </li>
                <li>
                  Versioning and Immutability: IPFS supports data versioning, allowing files to be
                  stored and tracked over time. Data in IPFS is immutable, ensuring its integrity.
                </li>
                <li>
                  Reduced Server Load: By distributing storage and caching data across nodes, IPFS
                  reduces the load on central servers and increases content availability.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Advantages of IPFS:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Fault Tolerance: Data is duplicated and distributed across multiple nodes, making
                  the system resilient to failures and data loss.
                </li>
                <li>
                  Speed and Efficiency: Content can be retrieved from the nearest nodes, reducing
                  latency and increasing download speed.
                </li>
                <li>
                  Censorship Resistance: The decentralized nature of IPFS makes it difficult to
                  control or block access to information.
                </li>
                <li>
                  Resource Efficiency: Distributed storage and data exchange in IPFS can lower
                  infrastructure costs.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Examples of IPFS Use Cases:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Decentralized Applications (dApps): Many blockchain applications use IPFS to store
                  data such as smart contracts, metadata, and user content.
                </li>
                <li>
                  Large File Storage and Transfer: IPFS is suitable for storing and transmitting
                  large volumes of data, including multimedia files, scientific data, and archives.
                </li>
                <li>
                  Website Resilience: Websites can be deployed on IPFS to enhance their availability
                  and protect against attacks.
                </li>
                <li>
                  Data Storage in Blockchain Projects: Projects like Filecoin use IPFS to provide
                  decentralized data storage with economic incentives.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              IPFS is a powerful tool for creating a more decentralized, secure, and efficient
              internet, allowing users to store and share data without relying on trusted
              intermediaries or central servers.
            </div>
          </details>
        </div>
        <div className="" id="9"></div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-3xl border-p1-darkgreen p-2 open:bg-p1-white open:ring-1 open:ring-p1-green hover:border-p1-green open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="select-none space-y-4 text-lg font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              Organization of data storage in a decentralized network using Blockweave technology
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                Blockweave is a unique data storage structure used in the Arweave network. It
                differs from traditional blockchains in that each block in the network not only
                references the previous block but also references random older blocks. This
                &quot;weaving&quot; of blocks ensures more efficient and long-term data storage.
                This approach reduces the storage requirements for network nodes and provides
                resilience against data loss, making the network more reliable and scalable.
              </p>
            </div>
          </details>
        </div>
        <div className="" id="10"></div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-3xl border-p1-darkgreen p-2 open:bg-p1-white open:ring-1 open:ring-p1-green hover:border-p1-green open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="select-none space-y-4 text-lg font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              What is a token?
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                A token is a digital asset representing a unit of value or a right, created and
                managed using blockchain technology. Tokens can have various functions and
                applications, ranging from financial instruments to representing ownership rights or
                access to services.
              </p>
              <div className="space-y-4 pb-5"></div>
              <p>Main Types of Tokens:</p>
              <div className="pb-5"></div>
              <p>Fungible Tokens:</p>
              <div className="pb-5"></div>
              <ul className="list-disc px-5">
                <li>
                  Cryptocurrencies: Examples include Bitcoin (BTC) and Ethereum (ETH), which are
                  interchangeable and can be used for exchanges and payments.
                </li>
                <li>
                  Stablecoins: Tokens pegged to the value of traditional currencies, such as USDT
                  (Tether), USDC, and DAI, providing price stability.
                </li>
              </ul>
              <div className="pb-5"></div>
              <div className="pb-5">Non-Fungible Tokens (NFTs):</div>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Collectibles and Digital Art: Each token is unique and cannot be replaced with
                  another on an equal basis. Examples include digital artworks, virtual gaming
                  items, and collectible cards.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5">Utility Tokens:</div>

            <ul className="list-disc space-y-4 px-5">
              <li>
                Access to Services and Products: These tokens grant access to specific services or
                products on a platform. For example, tokens used to pay transaction fees or access
                additional features in decentralized applications (dApps).
              </li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5">Security Tokens:</div>

            <ul className="list-disc space-y-4 px-5">
              <li>
                Investment Instruments: Represent shares in real assets like company stock, real
                estate, or other financial instruments. These tokens are subject to regulation
                similar to traditional securities.
              </li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Examples of Token Usage:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Financial Transactions: Cryptocurrencies enable fast and low-cost transactions
                  globally without the need for banks or intermediaries.
                </li>
                <li>
                  Collecting and Art: NFTs allow artists and collectors to trade unique digital
                  artworks and collectible items.
                </li>
                <li>
                  Voting and Governance: In decentralized autonomous organizations (DAOs), tokens
                  can be used for voting and collective decision-making.
                </li>
                <li>
                  Access to Services: Utility tokens can provide access to premium features on a
                  platform or specific services like cloud storage or software.
                </li>
                <li>
                  Investments and Asset Ownership: Security tokens allow investors to buy and trade
                  shares in real assets, such as real estate or business equity, via blockchain.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Advantages of Tokens:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Fast and Low-Cost Transactions: Tokens enable quick transactions with lower costs
                  compared to traditional financial systems.
                </li>
                <li>
                  Transparency and Security: Tokens and their transactions are recorded on the
                  blockchain, ensuring transparency and protection against fraud and counterfeiting.
                </li>
                <li>
                  Decentralization: The use of tokens removes intermediaries and centralized
                  control, making systems more resilient and independent.
                </li>
                <li>
                  Global Access: Tokens can be used anywhere in the world, simplifying international
                  transactions and access to services.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Tokens play a crucial role in the blockchain and decentralized technology ecosystem,
              offering new opportunities for financial operations, asset management, and the
              creation of innovative business models.
            </div>
          </details>
        </div>
        <div className="" id="11"></div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-3xl border-p1-darkgreen p-2 open:bg-p1-white open:ring-1 open:ring-p1-green hover:border-p1-green open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="select-none space-y-4 text-lg font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              What is NFT?
            </summary>
            <div className="mt-3 text-base leading-6 md:text-xl">
              <p className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
                NFT (Non-Fungible Token) is a digital asset that represents a unique ownership of a
                specific object or content that uses blockchain to confirm its uniqueness and
                authenticity. Unlike fungible tokens such as cryptocurrencies, each NFT has unique
                characteristics and cannot be replaced by another NFT on equal terms.
              </p>
              <div className="space-y-4 pt-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
                <p>Main Characteristics of NFTs:</p>

                <ul className="list-disc space-y-4 px-5">
                  <li>
                    Uniqueness: Each NFT has a unique identifier and metadata that distinguishes it
                    from other tokens. This metadata may contain information about the creator,
                    owner, sales history, and other attributes.
                  </li>
                  <li>
                    Non-fungibility: NFTs cannot be exchanged for other NFTs based on equality. This
                    makes them ideal for presenting unique items, such as artwork, collectibles,
                    gaming items and etc.
                  </li>

                  <li>
                    Digital Property: The NFT owner has ownership of the associated a digital asset
                    that can be verified and verified via the blockchain.
                  </li>
                  <li>
                    Transparency and Verifiability: Entire transaction and change history of the NFT
                    owner recorded on the blockchain, making their authenticity and provenance easy
                    verifiable.
                  </li>
                </ul>
              </div>
              <div className="pb-5"></div>
              <div className="space-y-4 pt-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
                Examples of using NFTs:
                <ul className="list-disc space-y-4 px-5 pt-4">
                  <li>
                    Digital Art: Artists create and sell their works as NFTs, giving buyers unique
                    and verifiable rights to digital art.
                  </li>
                  <li>
                    Collectibles: NFTs are used to create and trade digital collectibles such as
                    cards, memes and other unique digital objects.
                  </li>
                  <li>
                    In-Game Items: In video games, NFTs can represent unique in-game items. items,
                    characters or virtual real estate that can be sold or exchanged between players.
                  </li>
                  <li>
                    Music and Video: Musicians and filmmakers can release their works in as an NFT,
                    providing exclusive access or ownership of the content.
                  </li>
                  <li>
                    Virtual worlds and metaverses: Virtual objects, real estate and others items in
                    metaverses can be represented as NFTs, allowing users to own and trade virtual
                    assets.
                  </li>
                </ul>
              </div>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              NFT benefits:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Authenticity and Ownership: NFTs make it easy to verify authenticity and ownership
                  of digital assets.
                </li>
                <li>
                  Digital Content Monetization: Content Creators Can Earn Rewards for their work by
                  selling their creations as NFTs.
                </li>
                <li>
                  Transparency and Trust: Blockchain ensures transparency and security for everyone
                  NFT transactions.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>
            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Technologies and platforms:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Ethereum: The most popular platform for creating and trading NFTs thanks to
                  standard ERC-721 and ERC-1155, which supports unique and interchangeable tokens.
                </li>
                <li>
                  Solana: A fast and scalable blockchain platform also used for creating NFTs.
                </li>
                <li>Flow: A blockchain specifically designed for NFT-enabled apps and games. </li>
              </ul>
            </div>

            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              NFTs open up new possibilities for the digital world by providing a way to digitize,
              verify and trade unique digital assets, changing the way ownership and monetization of
              content on the Internet.
            </div>
          </details>
        </div>
        <div className="" id="12"></div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-3xl border-p1-darkgreen p-2 open:bg-p1-white open:ring-1 open:ring-p1-green hover:border-p1-green open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="select-none space-y-4 text-lg font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              How is the NFT and ownership information stored?
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                NFTs (non-fungible tokens) are unique digital assets which are stored on the
                blockchain. However, unlike cryptocurrencies such as Bitcoin or ether, NFTs
                typically do not contain the digital painting, video, or other content itself, with
                with which they are connected. Instead, they contain links and metadata that
                indicate the location of this content, as well as ownership and other data.
              </p>
            </div>
            <div className="space-y-4 pt-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              <p>How the NFT is stored:</p>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Blockchain storage: An NFT consists of a blockchain record containing a unique
                  token identifier, metadata and link to the digital asset. Metadata can include
                  information about the creator, creation date, description, characteristics and
                  link on the content itself.
                </li>
                <li>
                  Storing content off-chain: The digital content itself (e.g. image, video, audio)
                  are often stored off-chain due to large file sizes and restrictions on storing
                  data on the blockchain. Most often, content is stored in decentralized storage,
                  such as IPFS (InterPlanetary File System), or on centralized servers.
                </li>
              </ul>
            </div>
            <div className="pb-5"></div>
            <div className="space-y-4 pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Property details:
              <ul className="list-disc space-y-4 px-5 pt-2">
                <li>
                  Record of ownership: The owner of the NFT is recorded in the blockchain, which
                  ensures immutability and verifiability of property records. Purchasing NFTs
                  carried out through a transaction on the blockchain that registers the change of
                  ownership token
                </li>
                <li>
                  Ownership Verification: Any user can verify the owner of an NFT. viewing
                  information on the blockchain through public blockchain explorers such as like
                  Etherscan for Ethereum.NFT contains a unique identifier and address of the current
                  owner, making it easy to verify the authenticity and current owner of the token.
                </li>
              </ul>
            </div>

            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Example Process:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  NFT creation: An artist or content creator creates a digital piece art. It uploads
                  content to decentralized storage such as IPFS, and gets a unique hash (identifier)
                  ​​of the file. He then creates the NFT on the platform, such as OpenSea or
                  Rarible, and includes a link to the IPFS hash in the token metadata and other
                  necessary information.
                </li>
                <li>
                  Purchase and transfer of NFTs: The buyer finds the NFT he is interested in on the
                  marketplace and buys it. The transaction is recorded on the blockchain and the
                  ownership record is updated to indicate the new owner. The new owner can store the
                  NFT in your cryptocurrency wallet, such as MetaMask, and manage it through
                  compatible platforms.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>
            <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Safety and durability:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Property information and transactions are securely protected and immutable thanks
                  to cryptographic mechanisms
                </li>
              </ul>
              <div className="pb-5"> </div>
              <div className="">Problems with off-chain storage:</div>
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Storing content off-chain can create risks if the central server will fail or if
                  links to content stop working.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Decentralized storage systems such as IPFS are more resilient to these risks. since
              the content is decentralized across many network nodes.
            </div>
            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              NFTs and blockchain provide a reliable way to prove ownership of unique digital
              assets, and decentralized storage helps store content safe and accessible.
            </div>
          </details>
        </div>
        <div className="" id="13"></div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-3xl border-p1-darkgreen p-2 open:bg-p1-white open:ring-1 open:ring-p1-green hover:border-p1-green open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="select-none space-y-4 text-lg font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              What is metadata?
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                Metadata refers to data that describes and provides information about other data. In
                the context of digital assets like NFTs, metadata plays a crucial role by providing
                details about the asset itself, such as its title, description, creator, creation
                date, and links to associated content (e.g., images, videos, audio).
              </p>
            </div>
            <div className="pt-3 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              <p>Metadata in the Context of NFTs:</p>
              <div className="space-y-4 pb-5"></div>
              <p>
                For NFTs, metadata is often stored in JSON format and can include the following
                elements:
              </p>
              <div className="pb-5"></div>

              <ul className="list-disc space-y-4 px-5">
                <li>Name: The title of the digital asset or artwork.</li>
                <li>Description: A brief description or story about the asset.</li>
                <li>
                  Image: A link to an image or video representing the asset. This link often points
                  to a resource stored in a decentralized network, such as IPFS.
                </li>
                <li>
                  Attributes: Additional characteristics or properties of the asset, which can be
                  used, for example, in gaming NFTs to describe levels, abilities, etc.
                </li>
                <li>Creator: Information about the creator or author of the asset.</li>
                <li>Creation Date: The date and time when the asset was created.</li>
              </ul>
            </div>
            <div className="pb-5"></div>
            <div className="space-y-4 pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Storage of Metadata:
              <p>
                Metadata for NFTs can be stored both on and off the blockchain, depending on the
                platform and requirements:
              </p>
              <ul className="list-disc space-y-4 px-5">
                <li>
                  On-Chain: Including metadata directly in the smart contract can be costly due to
                  data size limitations and high transaction fees.
                </li>
                <li>
                  Off-Chain: Metadata is often stored in decentralized storage systems, such as
                  IPFS, Arweave, or other platforms. The blockchain typically stores a link (URI) to
                  the metadata, which ensures access to it.
                </li>
              </ul>
            </div>

            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Use of Metadata:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Metadata is used to display information about NFTs on various platforms and
                  wallets. When viewing an NFT, the platform or application retrieves metadata via
                  the URI and displays the information and associated content to the user.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>
            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Benefits of Using Metadata:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Additional Information: Metadata provides detailed information about the digital
                  asset, making it more understandable and attractive to potential buyers and
                  collectors.
                </li>
                <li>
                  Structured Format: Metadata organizes information in a structured format, making
                  it easier to process and display data.
                </li>
                <li>
                  Flexibility: The ability to add various attributes and characteristics makes NFTs
                  more versatile and suitable for different applications, such as gaming,
                  collecting, and art.
                </li>
                <li>
                  Compatibility: Metadata standards, such as the JSON format, ensure compatibility
                  with different platforms and services.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>
            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Metadata plays a key role in the NFT ecosystem by providing rich and structured
              information about digital assets, which helps users and platforms interact with these
              assets more effectively.
            </div>
          </details>
        </div>
        <div className="" id="14"></div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-3xl border-p1-darkgreen p-2 open:bg-p1-white open:ring-1 open:ring-p1-green hover:border-p1-green open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="select-none space-y-4 text-lg font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              What is MetaMask?
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                MetaMask is a popular cryptocurrency wallet and tool for interacting with the
                Ethereum blockchain. It allows users to manage their Ether (ETH) and tokens, as well
                as interact with decentralized applications (dApps). MetaMask is available as a
                browser extension (e.g., Chrome, Firefox, Brave) and as a mobile app (for iOS and
                Android).
              </p>
            </div>
            <div className="pt-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              <p>Main Features of MetaMask:</p>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Cryptocurrency management: Storage and management of Ethereum (ETH) and tokens
                  ERC-20 and ERC-721 standards. Sending and receiving cryptocurrency. Support
                  several addresses (accounts).
                </li>
                <li>
                  Interaction with dApps: Integration with decentralized applications, which allows
                  It’s easy for users to interact with DeFi protocols, NFT platforms, games and
                  other services on the Ethereum blockchain. Ability to connect to dApps directly
                  through a browser extension or mobile application.
                </li>
                <li>
                  Security:Private keys are stored locally on the user&apos;s device and password
                  protected. Ability to create backups and restore wallets from using a seed phrase
                  (seed Supports hardware wallets such as Ledger and Trezor, for for additional
                  security.
                </li>
                <li>
                  User Interface: User-friendly and intuitive interface for control assets and
                  interaction with dApps. Customization and addition support user tokens.
                </li>
              </ul>
            </div>
            <div className="pb-5"></div>
            <div className="space-y-4 pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Multi-browser and mobile support: Extensions for popular browsers that make Using
              MetaMask is convenient on desktop devices. Mobile application for manage
              cryptocurrencies and interact with dApps on the go.
            </div>
            <div className="space-y-4 pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              How to use MetaMask:
              <ul className="list-disc space-y-4 px-5">
                <li>
                  Installation and configuration: Download and install the browser or mobile
                  extension MetaMask application. Create a new wallet following the instructions and
                  save seed phrase in a safe place. Set a password to protect your wallet.
                </li>
                <li>
                  Wallet replenishment: Get your wallet address and use it to receiving ETH or other
                  tokens. Top up your wallet by sending cryptocurrency to this addr
                </li>
                <li>
                  Interaction with dApps: Connect MetaMask to a supported dApp by clicking a button
                  &quot;Connect&quot; or similar in the dApp interface. Authorize MetaMask for
                  interact with the dApp and confirm transactions using the wallet.
                </li>
                <li>
                  Sending and receiving cryptocurrency: To send cryptocurrency, select
                  &quot;Send&quot;, indicate the recipient&apos;s address and amount, then confirm
                  the transaction. To receive cryptocurrency, use your wallet address and transfer
                  it to the sender.
                </li>
              </ul>
            </div>

            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              MetaMask is a powerful tool for anyone who wants to participate in the ecosystem
              Ethereum. It provides secure storage of cryptocurrency, convenient interaction with
              decentralized applications and an easy way to manage digital assets.
            </div>
          </details>
        </div>
        <div className="" id="15"></div>
        <div className="pb-5"></div>
      </div>
    </div>
  );
}
