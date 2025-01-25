'use client';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { JumpButton } from '@/components/jumpButton';

export default function Page() {
  const jumpPoints = ['1', '2', '3', '4'];

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      {/* //Rewards*/}
      <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
        <div className="text-p1-darkgreen dark:text-p1-green px-2 text-xl font-semibold md:pt-2 md:text-3xl">
          Awards NFT
        </div>
        <div className="text-p1-darkgreen dark:text-p1-green px-2 text-xl font-semibold md:pt-2 md:text-3xl">
          Страница исследователя
        </div>
      </div>
      <div id="1"></div>
      <div className="border-p1-darkgreen hover:border-p1-gray dark:border-p1-green dark:hover:border-p1-darkgreen rounded-3xl md:border-4 md:shadow-lg">
        <div className="flex flex-wrap justify-center px-2 pt-2 md:flex-nowrap">
          <div>
            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
              Невзаимозаменяемый токен (NFT награда), вручаемый Промоутером (Организатором) в рамках
              мероприятия (соревнования).
            </p>
            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
              Awards NFT можно коллекционировать, продавать, передавать.
            </p>
            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
              При создании NFT прикрепляется медиаконтент.
            </p>
            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
              Токен содержит ссылки на официальные документы: Итоговый протокол мероприятия, фото и
              видео контент.
            </p>
            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
              Все данные хранятся в IPFS сети и защищены от несанкционированного уничтожения.
            </p>
            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
              Доступ к созданию токена имеют держатели токенов Promoter license, National license,
              Global license и Management GAA.
            </p>

            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
              Данный токен имеет характеристику &quot;Burnable&quot; - собственник смарт-контракта
              может уничтожить любой токен из коллекции. Эта мера необходима для поддержания
              актуальности коллекции.
            </p>
            <p className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan p-2 text-base md:text-xl">
              Собственник смарт-контракта вправе уничтожить NFT в случае создания NFT, не
              соответствующих правилам проекта.
            </p>
          </div>
          <div id="2"></div>
          <div className="object-center p-2">
            <div className="">
              <Image
                className="border-p2-orange dark:border-p1-green relative inline-block rounded-3xl border-2 object-center shadow-lg"
                width={2000}
                height={2000}
                src="/Hero/Rewards.png"
                alt="Rewards"
              />
              <div
                className="inline-flex w-full justify-center rounded-md pt-5 shadow-sm"
                role="group"
              >
                <Link
                  href="/discoveryrewards"
                  className="text-p1-darkgreen hover:text-p1-darkgreen focus:text-p1-white dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan dark:focus:text-p1-white w-full rounded-l-xl border border-gray-200 bg-white p-5 text-center text-sm font-medium hover:bg-gray-100 focus:z-10 focus:bg-yellow-800 focus:ring-2 focus:ring-yellow-800 md:text-xl dark:hover:border-gray-300 dark:hover:bg-amber-700 dark:hover:text-gray-100 dark:focus:bg-amber-700 dark:focus:ring-amber-900"
                >
                  3 место
                </Link>
                <Link
                  href="/discoveryrewards"
                  className="text-p1-darkgreen hover:text-p1-darkgreen focus:bg-p2-orange focus:text-p1-white focus:ring-p2-orange dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan w-full border border-gray-200 bg-white p-5 text-center text-sm font-medium hover:bg-gray-100 focus:z-10 focus:ring-2 md:text-xl dark:hover:border-gray-300 dark:hover:bg-amber-600 dark:hover:text-amber-100 dark:focus:bg-amber-600 dark:focus:text-amber-100 dark:focus:ring-amber-600"
                >
                  1 место
                </Link>

                <Link
                  href="/discoveryrewards"
                  className="text-p1-darkgreen hover:text-p1-darkgreen focus:bg-p1-gray focus:text-p1-white focus:ring-p1-gray dark:border-p1-green dark:bg-p1-darkgreen dark:text-p1-cyan w-full rounded-r-xl border border-gray-200 bg-white p-5 text-center text-sm font-medium hover:bg-gray-100 focus:z-10 focus:ring-2 md:text-xl dark:hover:border-gray-300 dark:hover:bg-gray-500 dark:hover:text-white dark:focus:bg-stone-600 dark:focus:text-stone-100 dark:focus:ring-stone-600"
                >
                  2 место
                </Link>
              </div>
              <div className="pb-2"></div>

              <form className="mx-auto max-w-2xl">
                <label
                  htmlFor="license"
                  className="text-p1-darkgreen dark:text-p1-white block w-full text-left text-sm font-medium"
                ></label>
                <select
                  id="license"
                  className="bg-p2-white2 text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-p1-green dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:placeholder-p1-deepdarkgreen dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border-2 border-gray-300 p-2.5 text-sm"
                  defaultValue={'DEFAULT'}
                >
                  <option value="DEFAULT" disabled>
                    Выберите направления
                  </option>
                  <option value="Drift">Дрифт</option>
                  <option value="Dragracing">Драгрэйсинг</option>
                  <option value="Rally">Ралли</option>
                  <option value="OpenWheels">Открытые колеса</option>
                  <option value="TCR">Кузовные гонки</option>
                  <option value="Oldtimer">Олдтаймер</option>
                  <option value="Stance">Стэнс</option>
                  <option value="AutoSound">Авто Звук</option>
                  <option value="Simracing">Симрэйсинг</option>
                </select>
              </form>

              <div className="m-1 p-5">
                <div className="justify-self-center">
                  <Link
                    href="/mintrewards"
                    className="border-p2-orange bg-p2-white2 text-p1-darkgreen hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p2-orange inline-block w-full rounded-3xl border-2 px-10 py-8 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out dark:hover:bg-amber-600 dark:hover:text-amber-100"
                  >
                    Создай NFT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8"></div>

      {/* //Способы получения Rewards*/}
      <div id="3"></div>
      <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan px-2 text-center text-xl font-semibold md:pt-2 md:text-3xl">
        Способы получения Awards NFT
      </div>

      <div className="border-p1-darkgreen dark:border-p1-green dark:hover:border-p1-darkgreen m-2 rounded-3xl p-2 md:border-4 md:shadow-lg">
        <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan pt-2 text-center text-base md:text-2xl">
          Награды могут создавать и вручать держатели NFT
          <p className="pb-2 text-center text-base md:text-2xl">
            Promoter license, National license, Global license, Management GAA
          </p>
        </div>

        <div className="grid grid-cols-9 gap-1">
          <div className="col-span-1 col-start-1 row-span-2 place-self-start">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/Hero/13.png"
              alt="13"
            />
          </div>
          <div className="place-self-center">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/arrows/1.png"
              alt="1"
            />
          </div>
          <div className="place-self-end">
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
          <div className="place-self-center">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/arrows/2.png"
              alt="2"
            />
          </div>
          <div className="place-self-center">
            <Image
              className="border-p2-orange relative inline-block w-max rounded-3xl border-2 shadow-lg"
              width={4000}
              height={4000}
              src="/Hero/Rewards.png"
              alt="Rewards"
            />
          </div>
          <div className="place-self-center">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/arrows/33.png"
              alt="33"
            />
          </div>
          <div className="place-self-end">
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
          <div className="place-self-center">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/arrows/44.png"
              alt="44"
            />
          </div>
          <div className="col-span-1 col-start-9 row-span-2 place-self-start">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/Hero/3place.png"
              alt="3place"
            />
          </div>
          <div></div>
          <div className="text-centre text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan relative place-self-center text-3xl font-bold">
            +
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div className="text-centre text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan relative place-self-center text-3xl font-bold">
            +
          </div>

          <div></div>

          <div className="col-span-1 col-start-1 row-span-2 place-self-center">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/Licenses/Management.png"
              alt="Management"
            />
          </div>
          <div className="col-span-1 col-start-2 row-span-2 place-self-center">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/Licenses/Global.png"
              alt="Global"
            />
          </div>

          <div className="col-span-1 col-start-3 row-span-2 place-self-center">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/Licenses/National.png"
              alt="National"
            />
          </div>
          <div className="col-span-1 col-start-4 row-span-2 place-self-center">
            <Image
              className="relative inline-block w-max"
              width={1000}
              height={1000}
              src="/Licenses/Promoter.png"
              alt="Promoter"
            />
          </div>
          <div></div>
          <div>
            <Image
              className="border-p2-orange dark:border-p1-green relative inline-block w-max rounded-3xl border-2 shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/Drivers/Driver4.png"
              alt="Driver4"
            />
          </div>
          <div>
            <Image
              className="border-p2-orange dark:border-p1-green relative inline-block w-max rounded-3xl border-2 shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/Team's members/TeamMember1.png"
              alt="TeamMember1"
            />
          </div>
          <div>
            <Image
              className="border-p2-orange dark:border-p1-green relative inline-block w-max rounded-3xl border-2 shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/Collectors/Collector1.png"
              alt="Collector1"
            />
          </div>
          <div>
            <Image
              className="border-p2-orange dark:border-p1-green relative inline-block w-max rounded-3xl border-2 shadow-lg"
              width={1000}
              height={1000}
              src="/Cars/car.png"
              alt="car"
            />
          </div>
        </div>
      </div>
      <div id="4"></div>
      <div className="pb-5"></div>
    </div>
  );
}
