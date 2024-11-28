import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl font-serif">
      {/* //Rewards*/}
      <div className="flex flex-wrap justify-center self-center md:flex-nowrap md:justify-between">
        <div className="px-2 text-xl font-semibold text-p1-darkgreen md:pt-2 md:text-3xl">
          Awards NFT
        </div>
        <div className="px-2 text-xl font-semibold text-p1-darkgreen md:pt-2 md:text-3xl">
          Страница исследователя
        </div>
      </div>
      <div className="rounded-3xl border-p1-darkgreen hover:border-p1-gray md:border-4 md:shadow-lg">
        <div className="flex flex-wrap justify-center px-2 pt-2 md:flex-nowrap">
          <div>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl">
              Невзаимозаменяемый токен (NFT награда), вручаемая Промоутером (Организатором) в рамках
              мероприятия (соревнования)
            </p>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl">
              Awards NFT можно коллекционировать, продавать, передавать
            </p>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl">
              При создании NFT прикрепляется медиаконтент
            </p>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl">
              Токен содержит ссылки на официальные документы: Итоговый протокол конкурса,
              соревнования Фото награждения Видео победы
            </p>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl">
              Все данные хранятся в IPFS сети и защищены от несанкционированного уничтожения.
            </p>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl">
              Доступ к минту токена у держателей NFT Promoter license, National license, Global
              license, Management GAA
            </p>

            <p className="p-2 text-base text-p1-darkgreen md:text-xl">
              Данный токен Burnebal, то есть собственник смарт-контракта может уничтожить любой
              токен из коллекции, эта мера необходима для формирования чистоты коллекции.
            </p>
            <p className="p-2 text-base text-p1-darkgreen md:text-xl">
              То есть собственник смарт-контракта вправе уничтожить NFT в случае нарушения правил
              создания NFT не соответствующих целям Проекта. То есть категорически запрещено
              присоединять к NFT медиаконтент политического содержания, экстремистской
              направленности, а также любой иной медиаконтент не отвечающий вектору развития
              Проекта. Также запрещено присоединять данные не соответствующие действительности
            </p>
          </div>
          <div className="object-center p-2">
            <div className="">
              <Image
                className="relative inline-block rounded-3xl border-2 border-p2-orange object-center shadow-lg"
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
                  href={{
                    pathname: '/rudiscoveryrewards',
                    query: { rewarddiscover: '3place' },
                  }}
                  className="w-full rounded-l-xl border border-gray-200 bg-white p-5 text-center text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-yellow-800 focus:text-p1-white focus:ring-2 focus:ring-yellow-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
                >
                  3 место
                </Link>
                <Link
                  href={{
                    pathname: '/rudiscoveryrewards',
                    query: { rewarddiscover: '1place' },
                  }}
                  className="w-full border border-gray-200 bg-white p-5 text-center text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-stone-500"
                >
                  1 место
                </Link>

                <Link
                  href={{
                    pathname: '/rudiscoveryrewards',
                    query: { rewarddiscover: '2place' },
                  }}
                  className="w-full rounded-r-xl border border-gray-200 bg-white p-5 text-center text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p1-gray focus:text-p1-white focus:ring-2 focus:ring-p1-gray dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p1-green"
                >
                  2 место
                </Link>
              </div>
              <div className="pb-2"></div>

              <form className="mx-auto max-w-2xl">
                <label
                  htmlFor="license"
                  className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                ></label>
                <select
                  id="license"
                  className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
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
                  <a
                    href="/rumintrewards"
                    className="inline-block w-full place-content-center rounded-3xl border-2 border-p2-orange bg-p2-white2 px-10 py-8 text-center text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white"
                  >
                    Страница создания NFT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8"></div>

      {/* //Способы получения Rewards*/}

      <div className="px-2 text-center text-xl font-semibold text-p1-darkgreen md:pt-2 md:text-3xl">
        Способы получения Awards NFT
      </div>

      <div className="m-2 rounded-3xl border-p1-darkgreen p-2 md:border-4 md:shadow-lg">
        <div className="pt-2 text-center text-base text-p1-darkgreen md:text-2xl">
          Награды могут создавать и вручать держатели NFT
        </div>
        <div className="pb-2 text-center text-base text-p1-darkgreen md:text-2xl">
          Promoter license, National license, Global license, Management GAA
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
              className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
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
          <div className="text-centre relative place-self-center text-3xl font-bold text-p1-darkgreen">
            +
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div className="text-centre relative place-self-center text-3xl font-bold text-p1-darkgreen">
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
              className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/Drivers/Driver4.png"
              alt="Driver4"
            />
          </div>
          <div>
            <Image
              className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/Team's members/TeamMember1.png"
              alt="TeamMember1"
            />
          </div>
          <div>
            <Image
              className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/Collectors/Collector1.png"
              alt="Collector1"
            />
          </div>
          <div>
            <Image
              className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/Cars/car.png"
              alt="car"
            />
          </div>
        </div>
        <div className="pt-2 text-center text-base text-p1-darkgreen md:text-2xl">
          Награды могут получать Drivers, Team&apos;s Members, Collectors, Cars
        </div>
        <div className="pb-2 text-center text-base text-p1-darkgreen md:text-2xl">
          даже если нет соответствующей NFT
        </div>
      </div>
    </div>
  );
}
