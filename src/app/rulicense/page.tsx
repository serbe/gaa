"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const num_license = (value: String | null) => {
  let num = 0;
  if (value == "national") {
    num = 1;
  } else if (value == "global") {
    num = 2;
  }
  return num;
};

const Buttons = ({
  license,
  setter,
}: {
  license: number;
  setter: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="inline-flex rounded-md font-serif shadow-sm" role="group">
      <button
        className={
          "w-full rounded-l-lg border border-gray-200 " +
          (license == 0 ? "bg-p2-orange" : "bg-white") +
          " px-4 py-2 text-sm font-medium " +
          (license == 0
            ? "z-10 text-p1-white ring-2 ring-p2-orange"
            : "text-p1-darkgreen") +
          " hover:bg-gray-100 hover:text-p1-darkgreen dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
        }
        onClick={() => setter(0)}
      >
        Promoter License
      </button>
      <button
        className={
          "w-full border border-gray-200 " +
          (license == 1 ? "bg-p2-orange" : "bg-white") +
          " px-4 py-2 text-sm font-medium " +
          (license == 1 ? "z-10 text-p1-white ring-2" : "text-p1-darkgreen") +
          " hover:bg-gray-100 hover:text-p1-darkgreen dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
        }
        onClick={() => setter(1)}
      >
        National License
      </button>
      <button
        className={
          "w-full rounded-r-lg border border-gray-200 " +
          (license == 2 ? "bg-p2-orange" : "bg-white") +
          " px-4 py-2 text-sm font-medium " +
          (license == 2
            ? "z-10 text-p1-white ring-2 ring-p2-orange"
            : "text-p1-darkgreen") +
          " text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
        }
        onClick={() => setter(2)}
      >
        Global License
      </button>
    </div>
  );
};

export default function Page() {
  const searchParams = useSearchParams();
  const [license, setLicense] = useState(0);
  const [value, setValue] = useState("0");

  useEffect(() => {
    setLicense(num_license(searchParams.get("license")));
  }, [searchParams]);

  return (
    <div className="font-serif">
      <div id="promouter" className={license == 0 ? "" : "hidden"}>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-2 text-4xl font-semibold text-p2-orange">
            Promoter License NFT
          </div>
          <div className="p-2 text-end text-4xl font-semibold text-p2-orange">
            Страница создания NFT
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-4 col-start-2 w-full rounded-3xl border-4 border-p2-orange text-center text-p1-darkgreen shadow-lg">
            <div>
              <p className="text-2xl text-p1-darkgreen">
                Присоединяйтесь к нам
              </p>
              <p className="pb-5 text-2xl text-p1-darkgreen">
                Получите NFT лицензию Промоутера
              </p>
              <div className="grid grid-cols-4 gap-4">
                <div className="pt-5">
                  Созданные вами NFT автоматически попадут в глобальную
                  коллекцию GAA
                  <p className="pt-5">
                    это объединенная коллекция мирового сообщества
                  </p>
                </div>
                <div className="col-span-2 col-start-2 w-full rounded-3xl text-center">
                  <Image
                    className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={1000}
                    height={1000}
                    src="/Licenses/Promoter Lic.png"
                    alt="PromoterLic"
                  />
                  <Buttons license={license} setter={setLicense} />
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
                  onChange={(e) => setValue(e.target.value)}
                  className="h-2 w-3/5 cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                />
              </div>
              <p className="pb-8 pt-8 text-2xl text-p1-darkgreen">
                Максимум: 10 Promoter License NFT за транзакцию
              </p>
              <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-48 py-8 text-p1-darkgreen shadow-lg hover:border-p2-orange hover:bg-p2-orange hover:text-p1-white">
                Создать NFT
              </button>
              <div className="pb-8"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="national" className={license == 1 ? "" : "hidden"}>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-2 text-4xl font-semibold text-p2-orange">
            National License NFT
          </div>
          <div className="p-2 text-end text-4xl font-semibold text-p2-orange">
            Страница создания NFT
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-4 col-start-2 w-full rounded-3xl border-4 border-p2-orange text-center text-p1-darkgreen shadow-lg">
            <div>
              <p className="text-2xl text-p1-darkgreen">
                Присоединяйтесь к нам
              </p>
              <p className="pb-5 text-2xl text-p1-darkgreen">
                Получите NFT Национальную лицензию
              </p>
              <div className="grid grid-cols-4 gap-4">
                <div className="pt-5">
                  Созданные вами NFT автоматически попадут в глобальную
                  коллекцию GAA
                  <p className="pt-5">
                    это объединенная коллекция мирового сообщества
                  </p>
                </div>
                <div className="col-span-2 col-start-2 w-full rounded-3xl text-center">
                  <Image
                    className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={1000}
                    height={1000}
                    src="/Licenses/National Lic.png"
                    alt="NationalLic"
                  />
                  <Buttons license={license} setter={setLicense} />
                </div>

                <div>
                  <p className="pt-5">Доступно для</p>
                  <p>Global Licence NFT</p>
                  <p>Management GAA</p>
                  <p className="pt-5">Подключите</p>
                  <p>свой кошелек,</p>
                  <p>чтобы подтвердить</p>
                  <p>лицензию NFT</p>
                </div>
              </div>

              <p className="pb-8 pt-8 text-2xl text-p1-darkgreen">
                Максимум: 1 National License NFT за транзакцию
              </p>
              <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-48 py-8 text-p1-darkgreen shadow-lg hover:border-p2-orange hover:bg-p2-orange hover:text-p1-white">
                Создать NFT
              </button>
              <div className="pb-8"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="global" className={license == 2 ? "" : "hidden"}>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-2 text-4xl font-semibold text-p2-orange">
            Global License NFT
          </div>
          <div className="p-2 text-end text-4xl font-semibold text-p2-orange">
            Страница создания NFT
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-4 col-start-2 w-full rounded-3xl border-4 border-p2-orange text-center text-p1-darkgreen shadow-lg">
            <div className="pb-8">
              <p className="text-2xl text-p1-darkgreen">
                Присоединяйтесь к нам
              </p>
              <p className="pb-5 text-2xl text-p1-darkgreen">
                Получите NFT Глобальную лицензию
              </p>
              <div className="grid grid-cols-4 gap-4">
                <div className="pt-5">
                  Созданные вами NFT автоматически попадут в глобальную
                  коллекцию GAA
                  <p className="pt-5">
                    это объединенная коллекция мирового сообщества
                  </p>
                </div>
                <div className="col-span-2 col-start-2 w-full rounded-3xl text-center">
                  <Image
                    className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={1000}
                    height={1000}
                    src="/Licenses/Global Lic.png"
                    alt="GlobalLic"
                  />

                  <Buttons license={license} setter={setLicense} />
                </div>

                <div>
                  <p className="pt-5">Доступно для</p>
                  <p>Management GAA</p>
                  <p className="pt-5">Подключите</p>
                  <p>свой кошелек,</p>
                  <p>чтобы подтвердить</p>
                  <p>лицензию NFT</p>
                </div>
              </div>

              <p className="pb-8 pt-8 text-2xl text-p1-darkgreen">
                Максимум: 1 Global License NFT за транзакцию
              </p>
              <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-48 py-8 text-p1-darkgreen shadow-lg hover:border-p2-orange hover:bg-p2-orange hover:text-p1-white">
                Создать NFT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
