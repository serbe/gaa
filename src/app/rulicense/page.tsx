'use client';

import Image from 'next/image';
import { useGaaStore } from '@/providers/gaa-store-provider';
import { Suspense, useState } from 'react';

const Buttons = ({
  license,
  setter,
}: {
  license: number;
  setter: (licenseNumber: number) => void;
}) => {
  return (
    <div className="inline-flex space-x-0 rounded-md font-serif shadow-sm" role="group">
      <button
        className={
          'w-full rounded-l-lg border border-gray-200 ' +
          (license == 0 ? 'bg-amber-600' : 'bg-white') +
          ' px-4 py-2 text-sm font-medium' +
          (license == 0 ? 'z-10 text-p1-white ring-2 ring-p2-orange' : 'text-p1-darkgreen') +
          ' hover:bg-gray-100 hover:text-p1-darkgreen dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange'
        }
        onClick={() => setter(0)}
      >
        Promoter License
      </button>
      <button
        className={
          'w-full border border-gray-200 ' +
          (license == 1 ? 'bg-p1-gray' : 'bg-white') +
          ' px-4 py-2 text-sm font-medium' +
          (license == 1 ? 'z-10 text-p1-white ring-2 ring-p1-gray' : 'text-p1-darkgreen') +
          ' hover:bg-gray-100 hover:text-p1-darkgreen dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange'
        }
        onClick={() => setter(1)}
      >
        National License
      </button>
      <button
        className={
          'w-full rounded-r-lg border border-gray-200 ' +
          (license == 2 ? 'bg-p2-orange' : 'bg-white') +
          ' px-4 py-2 text-sm font-medium' +
          (license == 2 ? 'z-10 text-p1-white ring-2 ring-p2-orange' : 'text-p1-darkgreen') +
          ' text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange'
        }
        onClick={() => setter(2)}
      >
        Global License
      </button>
    </div>
  );
};

export default function Page() {
  const [{ license, setLicense }] = useGaaStore((state) => state);
  const [value, setValue] = useState('0');

  return (
    <Suspense>
      <div className="mx-auto max-w-7xl font-serif">
        <div id="promouter" className={license == 0 ? '' : 'hidden'}>
          <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
            <div className="px-2 text-xl font-semibold text-amber-600 md:pt-2 md:text-3xl">
              Promoter License NFT
            </div>
            <div className="px-2 text-xl font-semibold text-amber-600 md:pt-2 md:text-3xl">
              Страница создания NFT
            </div>
          </div>
          <div className="flex flex-wrap justify-center space-x-2 px-2 md:flex-nowrap">
            <div className="rounded-3xl border-amber-600 md:border-4 md:shadow-lg">
              <div className="flex flex-row">
                <div className="mx-auto text-center md:text-xl lg:text-2xl">
                  <div className="flex flex-wrap justify-center md:flex-nowrap">
                    <div>
                      <div className="text-center text-base font-semibold text-p1-darkgreen md:mb-5 md:text-2xl">
                        <p>Присоединяйтесь к нам</p>
                        <p>Получите NFT лицензию Промоутера</p>
                      </div>

                      <div className="flex flex-wrap justify-center md:flex-nowrap">
                        <div className="w-full md:w-1/3">
                          <div className="place-self-center text-p1-darkgreen md:pb-5 md:pt-5">
                            <p>
                              Созданные вами NFT автоматически попадут в глобальную коллекцию GAA
                            </p>

                            <p>это объединенная коллекция мирового сообщества</p>
                          </div>
                        </div>
                        <div>
                          <div className="rounded-3xl text-center">
                            <Image
                              className="relative mb-4 inline-block w-4/5 rounded-3xl border-2 border-amber-600 shadow-lg"
                              width={2000}
                              height={2000}
                              src="/Licenses/Promoter Lic.png"
                              alt="PromoterLic"
                            />
                          </div>
                          <Buttons license={license} setter={setLicense} />
                        </div>
                        <div className="w-full pt-5 text-p1-darkgreen md:w-1/3">
                          <p>Доступно для:</p>
                          <p>Nacional Licence NFT</p>
                          <p>Global Licence NFT</p>
                          <p>Management GAA</p>
                          <p className="pt-5">
                            Подключите свой кошелек,чтобы подтвердить лицензию NFT
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label
                        htmlFor="default-range"
                        className="mb-2 block pt-5 text-2xl font-medium text-gray-900 dark:text-white"
                      >
                        {value}
                      </label>
                      <input
                        id="default-range"
                        type="range"
                        min="1"
                        max="10"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="h-2 w-3/5 cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                      />
                    </div>
                    <p className="p-2 text-center text-base text-p1-darkgreen md:pb-8 md:text-2xl">
                      Максимум: 10 Promoter License NFT за транзакцию
                    </p>
                    <div className="place-self-center">
                      <button className="rounded-3xl border-2 border-amber-600 bg-p2-white2 px-20 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-amber-600 hover:text-p1-white">
                        Создать NFT
                      </button>
                    </div>
                  </div>
                  <div className="pb-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="national" className={license == 1 ? '' : 'hidden'}>
          <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
            <div className="px-2 text-xl font-semibold text-p1-gray md:pt-2 md:text-3xl">
              National License NFT
            </div>
            <div className="px-2 text-xl font-semibold text-p1-gray md:pt-2 md:text-3xl">
              Страница создания NFT
            </div>
          </div>
          <div className="flex flex-wrap justify-center space-x-2 px-2 md:flex-nowrap">
            <div className="rounded-3xl border-p1-gray hover:shadow-lg md:border-4">
              <div className="flex flex-row">
                <div className="mx-auto text-center md:text-xl lg:text-2xl">
                  <div className="flex flex-wrap justify-center md:flex-nowrap">
                    <div>
                      <div className="text-center text-base font-semibold text-p1-darkgreen md:mb-5 md:text-2xl">
                        <p>Присоединяйтесь к нам</p>
                        <p>Получите NFT Национальную лицензию</p>
                      </div>

                      <div className="flex flex-wrap justify-center md:flex-nowrap">
                        <div className="w-full md:w-1/3">
                          <div className="place-self-center text-p1-darkgreen md:pb-5 md:pt-5">
                            <p>
                              Созданные вами NFT автоматически попадут в глобальную коллекцию GAA
                            </p>

                            <p>это объединенная коллекция мирового сообщества</p>
                          </div>
                        </div>
                        <div>
                          <div className="rounded-3xl text-center">
                            <Image
                              className="relative mb-4 inline-block w-4/5 rounded-3xl border-2 border-p1-gray shadow-lg"
                              width={2000}
                              height={2000}
                              src="/Licenses/National Lic.png"
                              alt="NationalLic"
                            />
                          </div>
                          <Buttons license={license} setter={setLicense} />
                        </div>
                        <div className="w-full pt-5 text-p1-darkgreen md:w-1/3">
                          <p>Доступно для:</p>
                          <p>Global Licence NFT</p>
                          <p>Management GAA</p>
                          <p className="pt-5">
                            Подключите свой кошелек,чтобы подтвердить лицензию NFT
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="p-2 text-center text-base text-p1-darkgreen md:pb-8 md:text-2xl">
                      Максимум: 1 National License NFT за транзакцию
                    </p>
                    <div className="place-self-center">
                      <button className="rounded-3xl border-2 border-p1-gray bg-p2-white2 px-20 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p1-gray hover:text-p1-white">
                        Создать NFT
                      </button>
                    </div>
                  </div>
                  <div className="pb-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="global" className={license == 2 ? '' : 'hidden'}>
          <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
            <div className="px-2 text-xl font-semibold text-p2-orange md:pt-2 md:text-3xl">
              Global License NFT
            </div>
            <div className="px-2 text-xl font-semibold text-p2-orange md:pt-2 md:text-3xl">
              Страница создания NFT
            </div>
          </div>
          <div className="flex flex-wrap justify-center space-x-2 px-2 md:flex-nowrap">
            <div className="rounded-3xl border-p2-orange md:border-4 md:shadow-lg">
              <div className="flex flex-row">
                <div className="mx-auto text-center md:text-xl lg:text-2xl">
                  <div className="flex flex-wrap justify-center md:flex-nowrap">
                    <div>
                      <div className="text-center text-base font-semibold text-p1-darkgreen md:mb-5 md:text-2xl">
                        <p>Присоединяйтесь к нам</p>
                        <p>Получите NFT Глобальную лицензию</p>
                      </div>

                      <div className="flex flex-wrap justify-center md:flex-nowrap">
                        <div className="w-full md:w-1/3">
                          <div className="place-self-center text-p1-darkgreen md:pb-5 md:pt-5">
                            <p>
                              Созданные вами NFT автоматически попадут в глобальную коллекцию GAA
                            </p>

                            <p>это объединенная коллекция мирового сообщества</p>
                          </div>
                        </div>
                        <div>
                          <div className="rounded-3xl text-center">
                            <Image
                              className="relative mb-4 inline-block w-4/5 rounded-3xl border-2 border-p2-orange shadow-lg"
                              width={2000}
                              height={2000}
                              src="/Licenses/Global Lic.png"
                              alt="GloballLic"
                            />
                          </div>
                          <Buttons license={license} setter={setLicense} />
                        </div>
                        <div className="w-full pt-5 text-p1-darkgreen md:w-1/3">
                          <p>Доступно для:</p>

                          <p>Management GAA</p>
                          <p className="pt-5">
                            Подключите свой кошелек,чтобы подтвердить лицензию NFT
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="p-2 text-center text-base text-p1-darkgreen md:pb-8 md:text-2xl">
                      Максимум: 1 Global License NFT за транзакцию
                    </p>
                    <div className="place-self-center">
                      <button className="rounded-3xl border-2 border-p2-orange bg-p2-white2 px-20 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white">
                        Создать NFT
                      </button>
                    </div>
                  </div>
                  <div className="pb-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
