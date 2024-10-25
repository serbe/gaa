import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="font-serif">
      {/* //Rewards*/}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p1-darkgreen">Rewards NFT</div>
        <div className="p-2 text-end text-4xl font-semibold text-p1-darkgreen">
          Страница исследователя
        </div>
      </div>
      <div className="flex">
        <div className="m-5 rounded-3xl border-4 border-p1-darkgreen shadow-lg hover:border-p1-green">
          <div className="grid grid-cols-2 place-items-start justify-center gap-4 p-5">
            <div className="grid">
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Невзаимозаменяемый токен (NFT награда), вручаемая Промоутером (Организатором) в
                рамках мероприятия (соревнования)
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Rewards NFT можно коллекционировать, продавать, передавать
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                При создании NFT прикрепляется медиаконтент
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Токен содержит ссылки на официальные документы: Итоговый протокол конкурса,
                соревнования Фото награждения Видео победы
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Все данные хранятся в IPFS сети и защищены от несанкционированного уничтожения.
              </p>
              <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Доступ к минту токена у держателей NFT Promoter license, National license, Global
                license, Management GAA
              </p>

              <p className="rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                Данный токен Burnebal, то есть собственник смарт-контракта может уничтожить любой
                токен из коллекции, эта мера необходима для формирования чистоты коллекции.
              </p>
              <p className="rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
                То есть собственник смарт-контракта вправе уничтожить NFT в случае нарушения правил
                создания NFT не соответствующих целям Проекта. То есть категорически запрещено
                присоединять к NFT медиаконтент политического содержания, экстремистской
                направленности, а также любой иной медиаконтент не отвечающий вектору развития
                Проекта. Также запрещено присоединять данные не соответствующие действительности
              </p>
            </div>
            <div className="justify-self-end">
              <Image
                className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                width={4000}
                height={4000}
                src="/Hero/Rewards.png"
                alt="Rewards"
              />
              <div
                className="inline-flex w-full justify-self-center rounded-md pt-5 shadow-sm"
                role="group"
              >
                <Link
                  href={{
                    pathname: '/rudiscoveryrewards',
                    query: { rewarddiscover: '3place' },
                  }}
                  className="w-full rounded-l-2xl border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-yellow-800 focus:text-p1-white focus:ring-2 focus:ring-yellow-800 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
                >
                  3 место
                </Link>
                <Link
                  href={{
                    pathname: '/rudiscoveryrewards',
                    query: { rewarddiscover: '1place' },
                  }}
                  className="w-full border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-stone-500"
                >
                  1 место
                </Link>

                <Link
                  href={{
                    pathname: '/rudiscoveryrewards',
                    query: { rewarddiscover: '2place' },
                  }}
                  className="w-full rounded-r-2xl border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p1-gray focus:text-p1-white focus:ring-2 focus:ring-p1-gray dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p1-green"
                >
                  2 место
                </Link>
              </div>
              <div
                className="grid w-full grid-cols-3 gap-1 justify-self-center rounded-md pt-5 shadow-sm"
                role="group"
              >
                <Link
                  href={{
                    pathname: '/rudiscoveryrewards',
                    query: { rewarddiscover: 'drift' },
                  }}
                  className="w-full rounded-tl-2xl border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p1-gray focus:text-p1-white focus:ring-2 focus:ring-p1-gray dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
                >
                  Дрифт
                </Link>
                <Link
                  href={{
                    pathname: '/rudiscoveryrewards',
                    query: { rewarddiscover: 'rally' },
                  }}
                  className="w-full border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p1-gray focus:text-p1-white focus:ring-2 focus:ring-p1-gray dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-stone-500"
                >
                  Ралли
                </Link>

                <Link
                  href={{
                    pathname: '/rudiscoveryrewards',
                    query: { rewarddiscover: 'tcr' },
                  }}
                  className="w-full rounded-tr-2xl border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p1-gray focus:text-p1-white focus:ring-2 focus:ring-p1-gray dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p1-green"
                >
                  Кузовные гонки
                </Link>

                <Link
                  href={{
                    pathname: '/rudiscoveryrewards',
                    query: { rewarddiscover: 'dragracing' },
                  }}
                  className="2xl w-full border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p1-gray focus:text-p1-white focus:ring-2 focus:ring-p1-gray dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
                >
                  Драгрэйсинг
                </Link>
                <Link
                  href={{
                    pathname: '/rudiscoveryrewards',
                    query: { rewarddiscover: 'openwheels' },
                  }}
                  className="w-full border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p1-gray focus:text-p1-white focus:ring-2 focus:ring-p1-gray dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-stone-500"
                >
                  Открытые колеса
                </Link>

                <Link
                  href={{
                    pathname: '/rudiscoveryrewards',
                    query: { rewarddiscover: 'stance' },
                  }}
                  className="w-full border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p1-gray focus:text-p1-white focus:ring-2 focus:ring-p1-gray dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p1-green"
                >
                  Стэнс
                </Link>

                <Link
                  href={{
                    pathname: '/rudiscoveryrewards',
                    query: { rewarddiscover: 'oldtimer' },
                  }}
                  className="w-full rounded-bl-2xl border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p1-gray focus:text-p1-white focus:ring-2 focus:ring-p1-gray dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
                >
                  Олдтаймер
                </Link>
                <Link
                  href={{
                    pathname: '/rudiscoveryrewards',
                    query: { rewarddiscover: 'simracing' },
                  }}
                  className="w-full border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p1-gray focus:text-p1-white focus:ring-2 focus:ring-p1-gray dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-stone-500"
                >
                  Симрэйсинг
                </Link>

                <Link
                  href={{
                    pathname: '/rudiscoveryrewards',
                    query: { rewarddiscover: 'sound cars' },
                  }}
                  className="w-full rounded-br-2xl border border-gray-200 bg-white p-5 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p1-gray focus:text-p1-white focus:ring-2 focus:ring-p1-gray dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p1-green"
                >
                  Авто Звук
                </Link>
              </div>
              <div className="m-1 p-5">
                <div className="justify-self-center">
                  <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
                    Страница создания NFT
                  </button>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="pb-8"></div>

      {/* //Способы получения Rewards*/}

      <div className="pt-5 text-center text-4xl font-bold text-p1-darkgreen">
        Способы получения Rewards NFT
      </div>

      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen p-6 shadow-lg">
        <div className="pt-5 text-center text-2xl text-p1-darkgreen">
          Награды могут создавать и вручать держатели NFT
        </div>
        <div className="pb-5 text-center text-2xl text-p1-darkgreen">
          Promoter license, National license, Global license, Management GAA
        </div>

        <div className="grid grid-cols-9 gap-1">
          <div className="col-span-1 col-start-1 row-span-2 place-self-start">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/Hero/13.png"
              alt="13"
            />
          </div>
          <div className="place-self-center">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/arrows/1.png"
              alt="1"
            />
          </div>
          <div className="place-self-end">
            <button className="hover:drop-shadow-2xl">
              <Image
                className="relative inline-block w-max overflow-hidden"
                width={1000}
                height={1000}
                src="/Logo/MetaMask.png"
                alt="Metamask"
              />
            </button>
          </div>
          <div className="place-self-center">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/arrows/2.png"
              alt="2"
            />
          </div>
          <div className="place-self-center">
            <Image
              className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={4000}
              height={4000}
              src="/Hero/Rewards.png"
              alt="Rewards"
            />
          </div>
          <div className="place-self-center">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/arrows/33.png"
              alt="33"
            />
          </div>
          <div className="place-self-end">
            <button className="hover:drop-shadow-2xl">
              <Image
                className="relative inline-block w-max overflow-hidden"
                width={1000}
                height={1000}
                src="/Logo/MetaMask.png"
                alt="Metamask"
              />
            </button>
          </div>
          <div className="place-self-center">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/arrows/44.png"
              alt="44"
            />
          </div>
          <div className="col-span-1 col-start-9 row-span-2 place-self-start">
            <Image
              className="relative inline-block w-max overflow-hidden"
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
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/Licenses/Management.png"
              alt="Management"
            />
          </div>
          <div className="col-span-1 col-start-2 row-span-2 place-self-center">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/Licenses/Global.png"
              alt="Global"
            />
          </div>

          <div className="col-span-1 col-start-3 row-span-2 place-self-center">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/Licenses/National.png"
              alt="National"
            />
          </div>
          <div className="col-span-1 col-start-4 row-span-2 place-self-center">
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/Licenses/Promoter.png"
              alt="Promoter"
            />
          </div>
          <div></div>
          <div>
            <Image
              className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/Drivers/Driver4.png"
              alt="Driver4"
            />
          </div>
          <div>
            <Image
              className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/Team's members/TeamMember1.png"
              alt="TeamMember1"
            />
          </div>
          <div>
            <Image
              className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/Collectors/Collector1.png"
              alt="Collector1"
            />
          </div>
          <div>
            <Image
              className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/Cars/car.png"
              alt="car"
            />
          </div>
        </div>
        <div className="pt-5 text-center text-xl">
          Награды могут получать Drivers, Team&apos;s Members, Collectors, Cars
        </div>
        <div className="pb-5 text-center text-xl">даже если нет соответствующей NFT</div>
      </div>
    </div>
  );
}
