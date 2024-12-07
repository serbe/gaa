'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [value, setValue] = useState('0');

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <section className="flex flex-wrap object-center px-2 md:flex-nowrap md:space-x-2 md:pt-4">
        <div className="mb-4 w-full rounded-3xl border-p1-darkgreen bg-p1-white shadow-lg md:border-4 dark:border-p1-green dark:bg-p1-deepdarkgreen">
          <div className="flex flex-row">
            <div className="mx-auto text-center md:p-2 md:text-xl lg:text-2xl">
              <div className="flex flex-row justify-center md:pb-2">
                <div className="md:basis-3/5">
                  <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-2 md:text-4xl dark:text-p1-cyan">
                    Партнеры
                  </div>
                  <div className="px-2 pt-2 text-center text-base text-p1-darkgreen drop-shadow-2xl md:text-2xl dark:text-p1-green">
                    Если Вы заинтересованы в том, чтобы стать партнером или спонсором, пожалуйста,
                    свяжитесь с нами.
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
                              href="/rucontacts"
                              className="inline-block rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                            >
                              Наши контакты
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
                  href="/"
                  className="inline-block w-11/12 rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                >
                  Наши Партнеры
                </Link>
              </div>
              <div className="my-5">
                <Link
                  href="/"
                  className="inline-block w-11/12 rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                >
                  Наши Спонсоры
                </Link>
              </div>

              <div className="my-5"></div>
            </div>
          </div>
        </div>

        <div className="w-full rounded-3xl border-p2-orange bg-p1-white shadow-lg md:mb-4 md:min-w-96 md:border-4 dark:border-amber-600 dark:bg-p1-deepdarkgreen">
          <div className="flex flex-row">
            <div className="mx-auto text-center md:p-2 md:text-xl lg:text-2xl">
              <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-4xl dark:text-amber-600">
                Для тех кто верит в Проект
              </div>
              <div className="px-2 pt-4 text-center text-base text-p1-darkgreen drop-shadow-2xl md:text-xl dark:text-p1-green">
                <p>объявляем сбор средств на развитие Проекта, </p>
                <p className="p-2">
                  данные средства пойдут на вовлечение лидеров мнений и распоространение Лицензий,
                  создание NFT, маркетинг, аренду хостинга и серверов
                </p>
                <p className="p-2"> планируем предоставить AirDrop</p>
                <p>первым 10 участникам по сумме внесенных средств </p>
                <p>10, 9, 8... NFTs</p>
                <p> и последующим 45 участникам по 1 NFT </p>
                <p className="p-4">
                  так мы планируем привлечь первоначальный капитал и поблагодарть 100 неравнодушных
                  сторонников Проекта.
                </p>
              </div>
              <div className="p-2 pb-6 text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-4xl dark:text-amber-600">
                RaceLads
              </div>

              <div className="my-5">
                <Link
                  href="/"
                  className="inline-block w-11/12 rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-amber-400 dark:hover:bg-amber-800 dark:hover:text-amber-200"
                >
                  Принять участие в развитии Проекта
                </Link>
              </div>
              <div className="my-5">
                <Link
                  href="/"
                  className="inline-block w-11/12 rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-amber-400 dark:hover:bg-amber-800 dark:hover:text-amber-200"
                >
                  Таблица участников
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-row justify-center md:pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-4xl dark:text-p1-green">
            Партнеры
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center md:pb-5">
        <div className="basis-1/6 p-2">
          <Image width={200} height={500} src="/Hero/9.png" alt="Hero9" />
        </div>
      </div>

      <div className="flex flex-row justify-center md:pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-4xl dark:text-p1-green">
            Спонсоры
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center md:pb-5">
        <div className="basis-1/6 p-2">
          <Image width={200} height={600} src="/Hero/3.png" alt="Hero5" />
        </div>
      </div>

      <div className="flex flex-row justify-center md:pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-4xl dark:text-p1-green">
            Таблица участников
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center md:pb-5">
        <div className="basis-1/6 p-2">
          <Image width={200} height={600} src="/Hero/10.png" alt="Hero19" />
        </div>
      </div>

      <div className="flex flex-row justify-center md:pb-5">
        <div className="md:basis-3/5"></div>
      </div>
    </div>
  );
}
