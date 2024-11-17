'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [check, setCheck] = useState(false);

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <div className="flex flex-row justify-center md:pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-4xl font-bold text-p1-darkgreen md:pt-4 md:text-6xl">
            Партнеры
          </div>
          <div className="px-2 text-center text-p1-darkgreen drop-shadow-2xl md:text-4xl">
            Если Вы заинтересованы в том, чтобы стать партнером или спонсором, пожалуйста, свяжитесь
            с нами.
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center md:pb-5">
        <div className="basis-1/5 p-2">
          <Image width={500} height={600} src="/Hero/77.png" alt="Hero77" />
        </div>
        <div className="basis-3/5">
          <div className="rounded-3xl p-6 md:my-5">
            <div className="text-center text-2xl text-p1-darkgreen md:pb-5">
              <div className="place-content-center pt-8">
                <div className="grid">
                  <button className="mx-auto justify-center rounded-3xl hover:bg-p2-white2 hover:drop-shadow-2xl">
                    <a href="/rucontacts">
                      <Image width={200} height={600} src="/logo/letter.png" alt="letter" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/5 p-2">
          <Image width={200} height={600} src="/Hero/5.png" alt="Hero5" />
        </div>
      </div>
    </div>
  );
}
