'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [check, setCheck] = useState(false);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-row p-2">
        <div className="basis-1/6 text-center"></div>
        <div className="basis-1/6 text-center">
          <button className="mx-auto justify-center rounded-3xl drop-shadow-2xl hover:drop-shadow-none">
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/EventHero/ruNews.png"
              alt="runews"
            />
          </button>
        </div>
        <div className="basis-1/6 text-center">
          <button className="mx-auto justify-center rounded-3xl drop-shadow-2xl hover:drop-shadow-none">
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/EventHero/ruSchedule.png"
              alt="ruSchedule"
            />
          </button>
        </div>
        <div className="basis-1/6 text-center">
          <button className="mx-auto justify-center rounded-3xl drop-shadow-2xl hover:drop-shadow-none">
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/EventHero/ruResults.png"
              alt="ruresults"
            />
          </button>
        </div>
        <div className="basis-1/6 text-center">
          <button className="mx-auto justify-center rounded-3xl drop-shadow-2xl hover:drop-shadow-none">
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/EventHero/ruForm.png"
              alt="ruform"
            />
          </button>
        </div>
        <div className="basis-1/6 text-center"></div>
      </div>

      <div></div>
    </div>
  );
}
