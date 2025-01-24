'use client';

import { useGaaStore } from '@/context/gaa-store-provider';
import Image from 'next/image';
import { JumpButton } from '@/components/jumpButton';
import { Link } from '@/i18n/routing';

const Buttons = ({
  license,
  setter,
}: {
  license: number;
  setter: (licenseNumber: number) => void;
}) => {
  return (
    <div className="inline-flex space-x-1 rounded-md pt-5 font-serif shadow-sm" role="group">
      <button
        className={
          'w-full rounded-l-lg border border-gray-200 ' +
          (license == 0
            ? 'bg-p2-orange focus:bg-p1-green dark:bg-p1-darkgreen dark:text-p1-white dark:focus:border-p1-cyan'
            : 'bg-white') +
          ' px-4 py-2 text-sm font-medium' +
          (license == 0
            ? 'text-p1-white ring-p2-orange dark:ring-p1-cyan z-10 ring-2'
            : 'text-p1-darkgreen') +
          ' text-p1-darkgreen hover:text-p1-darkgreen hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white'
        }
        onClick={() => {
          setter(0);
        }}
      >
        Promoter License
      </button>
      <button
        className={
          'w-full border border-gray-200 ' +
          (license == 1
            ? 'bg-p2-orange focus:bg-p1-green dark:bg-p1-darkgreen dark:text-p1-white dark:focus:border-p1-cyan'
            : 'bg-white') +
          ' px-4 py-2 text-sm font-medium' +
          (license == 1
            ? 'text-p1-white ring-p2-orange dark:ring-p1-cyan z-10 ring-2'
            : 'text-p1-darkgreen') +
          ' text-p1-darkgreen hover:text-p1-darkgreen hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white'
        }
        onClick={() => {
          setter(1);
        }}
      >
        National License
      </button>
      <button
        className={
          'w-full rounded-r-lg border border-gray-200 ' +
          (license == 2
            ? 'bg-p2-orange focus:bg-p1-green dark:bg-p1-darkgreen dark:text-p1-white dark:focus:border-p1-cyan'
            : 'bg-white') +
          ' px-4 py-2 text-sm font-medium' +
          (license == 2
            ? 'text-p1-white ring-p2-orange dark:ring-p1-cyan z-10 ring-2'
            : 'text-p1-darkgreen') +
          ' text-p1-darkgreen hover:text-p1-darkgreen hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white'
        }
        onClick={() => {
          setter(2);
        }}
      >
        Global License
      </button>
    </div>
  );
};

export default function Page() {
  const [{ license, setLicense }] = useGaaStore((state) => state);
  const jumpPoints = ['1', '2'];
  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      {/* //Promoter License */}
      <div id="promoter" className={license == 0 ? '' : 'hidden'}>
        <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
          <div className="px-2 text-xl font-semibold text-amber-600 md:pt-2 md:text-3xl dark:text-amber-700">
            Promoter License NFT
          </div>
          <div className="px-2 text-xl font-semibold text-amber-600 md:pt-2 md:text-3xl dark:text-amber-700">
            Страница исследователя
          </div>
        </div>
        <div className="dark:hover:border-p1-darkgreen rounded-3xl border-amber-600 md:border-4 md:shadow-lg dark:border-amber-700">
          <div className="flex flex-wrap justify-center px-2 pt-2 md:flex-nowrap">
            <div>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Promoter License NFT - невзаимозаменяемый токен, предоставляемый Промоутеру
                (организатору) мероприятия.
              </p>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Promoter License NFT предоставляет доступ к странице создания наград (Awards NFT).
              </p>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Промоутер создает и передает NFT награды победителям.
              </p>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Для получения Promoter License NFT необходимо зарегистрироваться и заполнить заявку:
              </p>

              <div className="my-2 justify-self-center">
                <Link
                  href="/applicationform"
                  className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-darkgreen hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-green dark:hover:bg-p1-green dark:hover:text-p1-deepdarkgreen inline-block place-content-center rounded-xl border-2 px-10 py-8 shadow-lg transition-all delay-75 duration-300 ease-in-out"
                >
                  Форма заявки
                </Link>
              </div>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                При положительном решении Промоутеру (организатору) предоставляется возможность
                создания Promoter License NFT.
              </p>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Данный токен имеет характеристику &quot;Burnable&quot; - собственник смарт-контракта
                может уничтожить любой токен из коллекции.
              </p>

              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Собственник смарт-контракта вправе уничтожить NFT в случае создания NFT, не
                соответствующих правилам проекта.
              </p>
              <div className="pb-5"></div>
            </div>
            <div className="m-1 place-items-center p-2">
              <div className="md:w-96">
                <Image
                  className="border-p2-orange dark:border-p1-green relative inline-block w-max rounded-3xl border-2 shadow-lg md:w-full"
                  width={4000}
                  height={4000}
                  src="/Licenses/Promoter Lic.png"
                  alt="PromoterLic"
                />
                <Buttons license={license} setter={setLicense} />
                <div className="m-1 p-5">
                  <div className="justify-self-center">
                    <Link
                      href="/license?license=promoter"
                      className="border-p2-orange bg-p1-white text-p1-darkgreen hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p2-orange inline-block rounded-xl border-2 px-10 py-8 shadow-lg transition-all delay-75 duration-300 ease-in-out dark:hover:bg-amber-600 dark:hover:text-amber-100"
                    >
                      Создай NFT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //National License */}
      <div id="national" className={license == 1 ? '' : 'hidden'}>
        <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
          <div className="text-p1-gray px-2 text-xl font-semibold md:pt-2 md:text-3xl dark:text-stone-500">
            National License NFT
          </div>
          <div className="text-p1-gray px-2 text-xl font-semibold md:pt-2 md:text-3xl dark:text-stone-500">
            Страница исследователя
          </div>
        </div>
        <div className="border-p1-gray dark:hover:border-p1-darkgreen rounded-3xl hover:shadow-lg md:border-4 dark:border-stone-500">
          <div className="flex flex-wrap justify-center px-2 pt-2 md:flex-nowrap">
            <div>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                National License NFT - невзаимозаменяемый токен, предоставляемый лидерам
                направлений.
              </p>
              <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                National License NFT предоставляет доступ к:
                <ul className="list-disc px-5">
                  <li>странице создания наград (Awards NFT)</li>
                  <li>странице создания Promoter License NFT</li>
                  <li>голосованию по вопросам развития сообщества на локальном уровне</li>
                </ul>
              </div>

              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                National License NFT дает право принимать решения, связанные с организацией
                мероприятий и проведением награждения спортсменов.
              </p>

              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Для получения National License NFT необходимо зарегистрироваться и заполнить заявку:
              </p>

              <div className="my-2 justify-self-center">
                <Link
                  href="/applicationform"
                  className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-darkgreen hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-green dark:hover:bg-p1-green dark:hover:text-p1-deepdarkgreen inline-block place-content-center rounded-xl border-2 px-10 py-8 shadow-lg transition-all delay-75 duration-300 ease-in-out"
                >
                  Форма заявки
                </Link>
              </div>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                При положительном решении лидеру направления предоставляется возможность создания
                National License NFT.
              </p>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Данный токен имеет характеристику &quot;Burnable&quot; - собственник смарт-контракта
                может уничтожить любой токен из коллекции.
              </p>

              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Собственник смарт-контракта вправе уничтожить NFT в случае создания NFT, не
                соответствующих правилам проекта.
              </p>
              <div className="pb-5"></div>
            </div>
            <div className="m-1 place-items-center p-2">
              <div className="md:w-96">
                <Image
                  className="border-p2-orange dark:border-p1-green relative inline-block rounded-3xl border-2 shadow-lg md:w-full"
                  width={4000}
                  height={4000}
                  src="/Licenses/National Lic.png"
                  alt="NationalLic"
                />
                <Buttons license={license} setter={setLicense} />
                <div className="m-1 p-5">
                  <div className="justify-self-center">
                    <Link
                      href="/license?license=national"
                      className="border-p2-orange bg-p1-white text-p1-darkgreen hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p2-orange inline-block rounded-xl border-2 px-10 py-8 shadow-lg transition-all delay-75 duration-300 ease-in-out dark:hover:bg-amber-600 dark:hover:text-amber-100"
                    >
                      Создай NFT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //Global License */}
      <div id="global" className={license == 2 ? '' : 'hidden'}>
        <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
          <div className="text-p2-orange px-2 text-xl font-semibold md:pt-2 md:text-3xl">
            Global License NFT
          </div>
          <div className="text-p2-orange px-2 text-xl font-semibold md:pt-2 md:text-3xl">
            Страница исследователя
          </div>
        </div>
        <div className="border-p2-orange dark:hover:border-p1-darkgreen rounded-3xl md:border-4 md:shadow-lg">
          <div className="flex flex-wrap justify-center px-2 pt-2 md:flex-nowrap">
            <div>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Global License NFT - невзаимозаменяемый токен, предоставляемый лидерам направлений и
                организаторам мероприятий международного уровня.
              </p>
              <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Global License NFT предоставляет доступ к:
                <ul className="list-disc px-5">
                  <li>странице создания наград (Awards NFT)</li>
                  <li>странице создания Promoter License NFT</li>
                  <li>странице создания National License NFT</li>
                  <li>голосованию по вопросам развития сообщества на локальном уровне</li>
                  <li>голосованию по вопросам развития сообщества на международном уровне</li>
                </ul>
              </div>

              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Global License NFT дает право принимать решения, связанные с организацией
                мероприятий и проведением награждения спортсменов.
              </p>

              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Для получения Global License NFT необходимо зарегистрироваться и заполнить заявку:
              </p>

              <div className="my-2 justify-self-center">
                <Link
                  href="/applicationform"
                  className="border-p1-green bg-p1-white text-p1-darkgreen hover:border-p1-darkgreen hover:bg-p1-darkgreen hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-green dark:hover:bg-p1-green dark:hover:text-p1-deepdarkgreen inline-block place-content-center rounded-xl border-2 px-10 py-8 shadow-lg transition-all delay-75 duration-300 ease-in-out"
                >
                  Форма заявки
                </Link>
              </div>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                При положительном решении лидеру направления предоставляется возможность создания
                Global License NFT.
              </p>
              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Данный токен имеет характеристику &quot;Burnable&quot; - собственник смарт-контракта
                может уничтожить любой токен из коллекции.
              </p>

              <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
                Собственник смарт-контракта вправе уничтожить NFT в случае создания NFT, не
                соответствующих правилам проекта.
              </p>
              <div className="pb-5"></div>
            </div>
            <div className="m-1 place-items-center p-2">
              <div className="md:w-96">
                <Image
                  className="border-p2-orange dark:border-p1-green relative inline-block rounded-3xl border-2 shadow-lg md:w-full"
                  width={2000}
                  height={2000}
                  src="/Licenses/Global Lic.png"
                  alt="GlobalLic"
                />
                <Buttons license={license} setter={setLicense} />
                <div className="m-1 p-5">
                  <div className="justify-self-center">
                    <Link
                      href="/license?license=national"
                      className="border-p2-orange bg-p1-white text-p1-darkgreen hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p2-orange inline-block rounded-xl border-2 px-10 py-8 shadow-lg transition-all delay-75 duration-300 ease-in-out dark:hover:bg-amber-600 dark:hover:text-amber-100"
                    >
                      Создай NFT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8 md:pb-36"></div>

      <div
        id="1"
        className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan px-2 text-center text-xl font-semibold md:pt-2 md:text-3xl"
      >
        Способы получения
        <p className="px-2 text-center text-xl font-semibold md:pt-2 md:text-3xl">
          Promoter, National, Global License NFT
        </p>
      </div>
      <div className="border-p1-darkgreen dark:border-p1-green dark:hover:border-p1-darkgreen m-2 rounded-3xl p-2 md:border-4 md:shadow-lg">
        <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan pt-2 text-center text-base md:text-2xl">
          Management GAA проводит верификацию и удостоверяет статус National License, Promoter
          License и Global License
        </div>

        <div className="grid grid-cols-7 gap-1">
          <div className="col-span-1 col-start-1 row-span-4 place-self-center">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/Hero/13.png"
              alt="13"
            />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div className="col-span-1 col-start-5 row-span-3 place-self-center">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/Licenses/Management.png"
              alt="Management"
            />
          </div>
          <div></div>
          <div></div>
          <div className="z-50 place-self-end">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/arrows/11.png"
              alt="11"
            />
          </div>

          <div className="relative place-self-center">
            <div>
              <Link
                href="/applicationform"
                className="border-p1-darkgreen bg-p1-white text-p1-darkgreen hover:bg-p1-green hover:text-p1-white dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:bg-p1-green dark:hover:text-p1-deepdarkgreen inline-block place-content-center rounded-xl border-2 p-2 text-center text-base shadow-lg transition-all delay-75 duration-300 ease-in-out md:text-xl"
              >
                Форма заявки
              </Link>
            </div>
          </div>

          <div className="place-self-center">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/arrows/2.png"
              alt="2"
            />
          </div>
          <div></div>
          <div></div>

          <div className="col-span-3 col-start-14 row-span-1">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/arrows/3.png"
              alt="3"
            />
          </div>
          <div></div>
          <div></div>

          <div>
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/arrows/4.png"
              alt="4"
            />
          </div>
          <div>
            <button className="hover:drop-shadow-2xl">
              <Image
                className="relative inline-block w-max"
                width={1000}
                height={1000}
                src="/Logo/MetaMask.png"
                alt="Metamask"
              />
            </button>
          </div>
          <div>
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/arrows/5.png"
              alt="5"
            />
          </div>
          <div>
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/Licenses/Promoter.png"
              alt="Promoter"
            />
          </div>
          <div>
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/Licenses/National.png"
              alt="national"
            />
          </div>
          <div>
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/Licenses/Global.png"
              alt="global"
            />
          </div>
        </div>

        <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan pt-2 text-center text-base md:text-2xl">
          Вектор развития направления определяют Management GAA, Global License и National License
        </div>
        <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan pt-2 text-center text-base md:text-2xl">
          Promoter License организует локальные мероприятия по разным направлениям
        </div>
        <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan pt-2 text-center text-base md:text-2xl">
          National License организует развитие направлений на локальном уровне
        </div>
      </div>
      <div id="1" className="pb-8"></div>
    </div>
  );
}
