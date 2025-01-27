'use client';
import { useState } from 'react';
import { JumpButton } from '@/components/jumpButton';
import { Link } from '@/i18n/routing';

export default function Page() {
  const [check, setCheck] = useState(false);
  const jumpPoints = ['1', '2', '3'];
  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      <div className="p-2 text-base md:p-4 md:text-2xl">
        <div className="text-center font-bold text-p1-darkgreen drop-shadow-2xl md:text-4xl dark:text-p1-green dark:hover:text-p1-cyan">
          Our Contacts
        </div>
        <div className="text-center text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
          Feel free to write and call us. <p> We really love communicating with our partners.</p>
        </div>

        <div className="rounded-3xl border-p1-darkgreen p-2 text-xl hover:border-p1-green md:m-5 md:border-4 md:p-6 md:hover:shadow-xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div id="1">
              <div className="pb-3 text-center text-sm text-p1-darkgreen md:px-5 md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
                If you would like to promote your event using Web3, create NFT rewards or be a GAA
                representative in your area, please fill out the application form and we will
                contact you.
                <p>Click the button below</p>
              </div>
              <div className="grid">
                <Link
                  href="/applicationform"
                  className="inline-block w-full rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                >
                  Application form
                </Link>
              </div>
            </div>
            <div>
              <div id="2">
                <label
                  htmlFor="full_name"
                  className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="full_name"
                  className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p1-green focus:ring-p1-green md:p-2 md:text-lg dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder:text-p1-gray dark:focus:border-p1-green dark:focus:ring-p1-green"
                  placeholder="Ted Fox"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="nic_name"
                  className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
                >
                  Nickname
                </label>
                <input
                  type="text"
                  id="nic_name"
                  className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p1-green focus:ring-p1-green md:p-2 md:text-lg dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder:text-p1-gray dark:focus:border-p1-green dark:focus:ring-p1-green"
                  placeholder="Nickname"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="organization"
                  className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
                >
                  Name of the organization/team
                </label>
                <input
                  type="text"
                  id="organization"
                  className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p1-green focus:ring-p1-green md:p-2 md:text-lg dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder:text-p1-gray dark:focus:border-p1-green dark:focus:ring-p1-green"
                  placeholder="Name of the organization/team"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p1-green focus:ring-p1-green md:p-2 md:text-lg dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder:text-p1-gray dark:focus:border-p1-green dark:focus:ring-p1-green"
                  placeholder="E-mail"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-p1-darkgreen dark:text-p1-cyan"
                >
                  {'Your questions, comments, suggestions...'}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Your questions, comments, suggestions..."
                ></textarea>
              </div>
              <div className="pb-2"></div>
              <div className="flex items-center">
                <input
                  checked={check}
                  id="checkbox"
                  onChange={() => {
                    setCheck(!check);
                  }}
                  type="checkbox"
                  value=""
                  className="size-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-darkgreen focus:ring-2 focus:ring-p1-cyan dark:border-gray-600 dark:bg-p1-green dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                />
                <label
                  id="3"
                  htmlFor="checkbox"
                  className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-p1-cyan"
                >
                  I agree to the processing of personal data.
                </label>
              </div>

              <div className="pb-2"></div>
              <div className="grid">
                <button className="inline-block w-full rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan">
                  Send to GAA
                </button>
              </div>
            </div>

            <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
              Our e-mail: info@gaa.zone
            </div>
          </div>
          <div></div>

          <div></div>

          <div></div>
        </div>
        <div className="pb-5"></div>
      </div>
    </div>
  );
}
