'use client';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useState } from 'react';

export default function Page() {
  const [value, setValue] = useState('0');

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-p2-orange p-2 text-4xl font-semibold">Promoter License NFT</div>
        <div className="text-p2-orange p-2 text-end text-4xl font-semibold">
          Страница создания NFT
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="border-p2-orange text-p1-darkgreen col-span-4 col-start-2 w-full rounded-3xl border-4 text-center shadow-lg">
          <div>
            <p className="text-p1-darkgreen text-2xl">Присоединяйтесь к нам</p>
            <p className="text-p1-darkgreen pb-5 text-2xl">Получите NFT лицензию Промоутера</p>
            <div className="grid grid-cols-4 gap-4">
              <div className="pt-5">
                Созданные вами NFT автоматически попадут в глобальную коллекцию GAA
                <p className="pt-5">это объединенная коллекция мирового сообщества</p>
              </div>
              <div className="col-span-2 col-start-2 w-full rounded-3xl text-center">
                <Image
                  className="border-p2-orange relative mb-4 inline-block w-max rounded-3xl border-2 shadow-lg"
                  width={1000}
                  height={1000}
                  src="/Licenses/Promoter Lic.png"
                  alt="PromoterLic"
                />
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <Link
                    href={'/promouterlicense'}
                    className="text-p1-darkgreen hover:text-p1-darkgreen focus:bg-p2-orange focus:text-p1-white focus:ring-p2-orange dark:focus:ring-p2-orange w-full rounded-l-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-100 focus:z-10 focus:ring-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white"
                  >
                    Promoter License
                  </Link>
                  <Link
                    href={'/nationallicense'}
                    className="text-p1-darkgreen hover:text-p1-darkgreen focus:bg-p2-orange focus:text-p1-white focus:ring-p2-orange dark:focus:ring-p2-orange w-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-100 focus:z-10 focus:ring-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white"
                  >
                    National License
                  </Link>
                  <Link
                    href={'/globallicense'}
                    className="text-p1-darkgreen hover:text-p1-darkgreen focus:bg-p2-orange focus:text-p1-white focus:ring-p2-orange dark:focus:ring-p2-orange w-full rounded-r-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-100 focus:z-10 focus:ring-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white"
                  >
                    Global License
                  </Link>
                </div>
              </div>

              <div>
                <p className="pt-5">Доступно для</p>
                <p>Nacional Licence NFT</p>
                <p>Global Licence NFT</p>
                <p>Management GAA</p>
                <p className="pt-5">Подключите</p>
                <p>свой кошелек,</p>
                <p>чтобы подтвердить</p>
                <p>лицензию NFT</p>
              </div>
            </div>

            <div>
              <label
                htmlFor="default-range"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {value}
              </label>
              <input
                id="default-range"
                type="range"
                min="0"
                max="10"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                className="h-2 w-3/5 cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
              />
            </div>
            <p className="text-p1-darkgreen pt-8 pb-8 text-2xl">
              Максимум: 10 Promoter License NFT за транзакцию
            </p>
            <button className="border-p1-darkgreen bg-p1-white text-p1-darkgreen hover:bg-p2-orange hover:text-p1-white rounded-3xl border-2 px-48 py-8 shadow-lg">
              Создать NFT
            </button>
            <div className="pb-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
