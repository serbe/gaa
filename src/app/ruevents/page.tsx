'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-row p-2">
        <div className="basis-1/6 text-center"></div>
        <div className="basis-1/6 text-center opacity-85 duration-500 hover:scale-105 hover:opacity-100">
          <button className="mx-auto justify-center rounded-3xl hover:drop-shadow-2xl">
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/EventHero/ruNews.png"
              alt="runews"
            />
          </button>
        </div>
        <div className="basis-1/6 text-center opacity-85 duration-500 hover:scale-105 hover:opacity-100">
          <button className="mx-auto justify-center rounded-3xl hover:drop-shadow-2xl">
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/EventHero/ruSchedule.png"
              alt="ruSchedule"
            />
          </button>
        </div>
        <div className="basis-1/6 text-center opacity-85 duration-500 hover:scale-105 hover:opacity-100">
          <button className="mx-auto justify-center rounded-3xl hover:drop-shadow-2xl">
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/EventHero/ruResults.png"
              alt="ruresults"
            />
          </button>
        </div>

        <div className="basis-1/6 text-center opacity-85 duration-500 hover:scale-105 hover:opacity-100">
          <Link
            href={{
              pathname: '/ruapplicationform',
              query: { ruevent: 'ruapplicationform' },
            }}
            className="mx-auto justify-center rounded-3xl hover:drop-shadow-2xl"
          >
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/EventHero/ruForm.png"
              alt="ruform"
            />
          </Link>
        </div>

        <div></div>
      </div>

      <div></div>
    </div>
  );
}
