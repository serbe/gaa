import Image from 'next/image';

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl font-serif">
      {/* //CustomLads discovery*/}
      <div className="flex flex-wrap justify-between space-x-2 object-center px-2 pt-5 md:flex-nowrap">
        <div className="p-2 text-4xl font-semibold text-p1-darkgreen">CustomLads NFT</div>
        <div className="p-2 text-4xl font-semibold text-p1-darkgreen">Страница исследователя</div>
      </div>
      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen shadow-lg hover:border-p1-green">
        <div className="flex flex-wrap justify-center space-x-2 px-2 pt-5 md:flex-nowrap">
          <div>
            <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
              Невзаимозаменяемый токен, представляющий кастомизированного героя из элементов первой
              генеративной коллекции RaceLads, который собран его владельцем.
            </p>
            <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
              Мы очень ценим вклад каждого неравнодушного к проекту и готовы предоставить
              возможность формирования героя по своим предпочтениям.
            </p>
            <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
              Мы стали свидетелями дублирования (воровства) существующих коллекций и выступаем
              против подобных деяний, поэтому хотим дать каждому возможность собрать своего героя
              легальным способом
            </p>
            <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
              Данная коллекция будет доступна только для держателей NFT из коллекции RaceLads.
            </p>
            <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
              10 уровней доступа к редким элементам определяется наличием соответствующего
              количества NFT из коллекции RaceLads
            </p>
            <p className="my-2 rounded-3xl border-4 border-p1-white p-2 text-xl text-p1-darkgreen hover:border-p1-cyan hover:shadow-2xl">
              Любой CustomLad по желанию держателя может быть передан/продан любому участнику
              сообщества.
            </p>
          </div>

          <div className="m-1 place-items-center p-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Image
                  className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={4000}
                  height={4000}
                  src="/HeroNFT/CustomLads/CustomLads1.png"
                  alt="CustomLads1"
                />
              </div>
              <div className="justify-self-end">
                <Image
                  className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={4000}
                  height={4000}
                  src="/HeroNFT/CustomLads/CustomLads2.png"
                  alt="CustomLads2"
                />
              </div>
              <div className="justify-self-end">
                <Image
                  className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={4000}
                  height={4000}
                  src="/HeroNFT/CustomLads/CustomLads3.png"
                  alt="CustomLads3"
                />
              </div>
              <div className="justify-self-end">
                <Image
                  className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={4000}
                  height={4000}
                  src="/HeroNFT/CustomLads/CustomLads4.png"
                  alt="CustomLads4"
                />
              </div>
            </div>

            <div className="m-1 justify-self-center p-5">
              <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
                Страница создания NFT
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8"></div>

      <div className="pt-5 text-center text-4xl font-bold text-p1-darkgreen">
        Способы получения CustomLads NFT
      </div>

      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen p-6 shadow-lg">
        <div className="pb-5 text-center text-2xl text-p1-darkgreen">
          Любой владелец NFT из коллекции RaceLads может собрать персонажа из коллекции CustomLads
        </div>

        <div className="grid grid-cols-6 gap-1">
          <div className="col-span-1 col-start-1 row-span-3 place-self-start">
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
              src="/arrows/22.png"
              alt="22"
            />
          </div>
          <div className="place-self-end">
            <Image
              className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/CustomLads/Customlads1.png"
              alt="Customlads1"
            />
          </div>
          <div></div>
          <div></div>
          <div className="text-centre relative place-self-center text-3xl font-bold text-p1-darkgreen">
            +
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div>
            <Image
              className="relative inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/RaceLads/RaceLads1.png"
              alt="RaceLad1"
            />
          </div>
          <div></div>
          <div></div>
          <div>
            <Image
              className="relative -mt-40 inline-block w-max rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/CustomLads/Customlads2.png"
              alt="Customlads2"
            />
          </div>
          <div></div>
          <div></div>
        </div>

        <div className="pt-5 text-center text-xl">
          Страница создания CustomLads NFT станет доступна через некоторое время после официального
          выпуска коллекции RaceLads
        </div>
        <div className="text-center text-xl">
          Так мы планируем создать инвестиционную привлекательность и стабильность коллекцию
          RaceLads
        </div>
      </div>
      <div className="pb-8"></div>
    </div>
  );
}
