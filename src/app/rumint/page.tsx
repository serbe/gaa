"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [value, setValue] = useState("0");
  const [check, setCheck] = useState(false);

  return (
    <div>
      <div className="pt-5 text-center text-6xl font-bold text-p1-darkgreen">
        RaceLads
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        by Global Automotive Association
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 col-start-2 w-full rounded-3xl border-4 border-p1-darkgreen text-center text-p1-darkgreen shadow-lg">
          <div>
            <p className="p-2 text-2xl text-p1-darkgreen">
              Генеративная коллекция
            </p>
            <h2 className="pb-2 text-2xl text-p1-darkgreen">RaceLads NFT</h2>
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/RaceLads/RaceLads1.png"
              alt="RaceLads1"
            />
            <p className="pt-2 text-2xl text-p1-darkgreen">
              10.000 уникальных героев.
            </p>
            <p className="pb-2 text-2xl text-p1-darkgreen">
              Кто твой персонаж - решать тебе!
            </p>
            <button className="rounded-l-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white">
              Исследуй NFT
            </button>
            <button className="rounded-r-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Страница создания NFT
            </button>
            <div className="pb-8"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          RaceLads NFT
        </div>
        <div className="p-2 text-end text-4xl font-semibold text-p1-darkgreen">
          Страница исследователя
        </div>
      </div>
      <div className="m-5 flex rounded-3xl border-4 border-p1-darkgreen shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className="place-content-center p-4 text-left">
            <p className="p-2 text-xl text-p1-darkgreen">
              Невзаимозаменяемый токен, представляющий коллекцию из 10.000
              уникальных цифровых героев, вдохновленных любовью к автомобилям и
              запечатленных в Blockchain.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Коллекция, призванная внести свой вклад в развитие и популяризацию
              автокультуры и автоспорта.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Приобретая героя из коллекции ты становишься членом большого
              дружного сообщества!
            </p>
            <ul className="list-disc space-y-3 px-5 text-xl text-p1-darkgreen">
              <li>
                посещай автоспортивные мероприятия, выставки, лекции, вечеринки
              </li>
              <li>
                участвуй в виртуальных гонках и других захватывающих онлайн
                событиях
              </li>
              <li>
                принимай участие в ключевых голосованиях, определяющих развитие
                сообщества
              </li>
            </ul>
            <p className="p-2 text-xl text-p1-darkgreen">
              NFT коллекция RaceLads даст новый виток развития автокультурного
              сообщества и интеграции с Web3 и Blockchain.
            </p>

            <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Страница создания NFT
            </button>
          </div>
          <div className="m-1 p-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={130}
                  height={130}
                  src="/HeroNFT/RaceLads/RaceLads1.png"
                  alt="RaceLads1"
                />
              </div>
              <div>
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={130}
                  height={130}
                  src="/HeroNFT/RaceLads/RaceLads2.png"
                  alt="RaceLads2"
                />
              </div>
              <div>
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={130}
                  height={130}
                  src="/HeroNFT/RaceLads/RaceLads3.png"
                  alt="RaceLads3"
                />
              </div>
              <div>
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={150}
                  height={150}
                  src="/HeroNFT/RaceLads/RaceLads4.png"
                  alt="RaceLads4"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pb-8"></div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        Способы получения RaceLads NFT
      </div>
      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen p-6 shadow-lg">
        <div className="pb-5 text-center text-xl">
          Любой желающий может получить своего персонажа (RaceLad) в период
          публичного минта или приобрести на вторичном рынке позднее.
        </div>
        <Image
          className="relative inline-block w-max overflow-hidden"
          width={1000}
          height={1000}
          src="/scheme GAA/scheme RaceLads.png"
          alt="scheme RaceLads"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p2-orange">
          RaceLads NFT
        </div>
        <div className="p-2 text-end text-4xl font-semibold text-p2-orange">
          Страница создания NFT
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 col-start-2 w-full rounded-3xl border-4 border-p2-orange text-center text-p1-darkgreen shadow-lg">
          <div>
            <p className="text-2xl text-p1-darkgreen">Присоединяйтесь к нам</p>
            <p className="text-2xl text-p1-darkgreen">
              Получите своего героя RaceLad
            </p>
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/RaceLads/RaceLads1.png"
              alt="RaceLads1"
            />

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
              Максимальное количество: 10 RaceLads за транзакцию
            </p>

            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-48 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создать NFT
            </button>
            <div className="pb-8"></div>
          </div>
        </div>
      </div>

      {/* //Лидеры движений */}
      <div className="pt-5 text-center text-6xl font-bold text-p1-darkgreen">
        Лидеры движений
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        знаковые персоны
      </div>
      <div className="m-5 grid grid-cols-4 gap-4 rounded-3xl border-4 border-p1-darkgreen p-5 text-center text-p1-darkgreen shadow-lg">
        <div>
          <Image
            className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
            width={1000}
            height={1000}
            src="/HeroNFT/Drivers/Driver4.png"
            alt="Driver4"
          />
          <p className="text-2xl text-p1-darkgreen">Drivers</p>
          <p className="text-xm pb-2 text-p1-darkgreen">
            Пилоты гоночных автомобилей и болидов, присоединившиеся к Web3
          </p>
        </div>
        <div>
          <Image
            className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
            width={1000}
            height={1000}
            src="/HeroNFT/Team's members/TeamMember1.png"
            alt="TeamMember1"
          />
          <p className="text-2xl text-p1-darkgreen">Team&apos;s Members</p>
          <p className="text-xm pb-2 text-p1-darkgreen">
            Участники команд, присоединившиеся к Web3
          </p>
        </div>

        <div>
          <Image
            className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
            width={1000}
            height={1000}
            src="/HeroNFT/Collectors/Collector1.png"
            alt="Collector1"
          />
          <p className="text-2xl text-p1-darkgreen">Collectors</p>
          <p className="text-xm pb-2 text-p1-darkgreen">
            Владельцы редких, спортивных и уникальных автомобилей,
            присоединившиеся к Web3
          </p>
        </div>
        <div>
          <Image
            className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
            width={1000}
            height={1000}
            src="/Cars/Car.png"
            alt="Car"
          />
          <p className="text-2xl text-p1-darkgreen">Cars</p>
          <p className="text-xm pb-2 text-p1-darkgreen">
            Раритетные, уникальные и спортивные автомобили из частных коллекций
          </p>
        </div>
        <div>
          <button className="rounded-l-lg border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white">
            Исследуй NFT
          </button>
          <button className="rounded-r-lg border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
            Создай NFT
          </button>
        </div>
        <div>
          <button className="rounded-l-lg border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white">
            Исследуй NFT
          </button>
          <button className="rounded-r-lg border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
            Создай NFT
          </button>
        </div>
        <div>
          <button className="rounded-l-lg border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white">
            Исследуй NFT
          </button>
          <button className="rounded-r-lg border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
            Создай NFT
          </button>
        </div>
        <div>
          <button className="rounded-l-lg border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white">
            Исследуй NFT
          </button>
          <button className="rounded-r-lg border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
            Создай NFT
          </button>
        </div>
      </div>

      {/* //Drivers */}

      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          Drivers NFT
        </div>
        <div className="p-2 text-end text-4xl font-semibold text-p1-darkgreen">
          Страница исследователя
        </div>
      </div>
      <div className="m-5 flex rounded-3xl border-4 border-p1-darkgreen shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className="place-content-center p-4 text-left">
            <p className="p-2 text-xl text-p1-darkgreen">
              Невзаимозаменяемый токен, отражающий пилота спортивного
              автомобиля.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Каждый NFT содержит метаданные, хранящие информацию о гонщике.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              По согласованию мы можем полностью скопировать внешность персоны.
            </p>

            <p className="p-2 text-xl text-p1-darkgreen">
              Мы очень ценим вклад пилотов в развитие автоспорта и хотели бы
              запечатлеть каждого в единой коллекции, будь то представитель
              кольцевых гонок или дисциплины дрифта.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Предполагается, что первоначальным владельцем NFT будет сам пилот.
              Позже по желанию владельца токен может быть передан/продан любому
              человеку.
            </p>

            <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Страница создания NFT
            </button>
          </div>
          <div className="m-1 p-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={130}
                  height={130}
                  src="/HeroNFT/Drivers/Driver4.png"
                  alt="Driver4"
                />
              </div>
              <div>
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={130}
                  height={130}
                  src="/HeroNFT/Drivers/Driver3.png"
                  alt="Driver3"
                />
              </div>
              <div>
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={130}
                  height={130}
                  src="/HeroNFT/Drivers/Driver2.png"
                  alt="Driver2"
                />
              </div>
              <div>
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={150}
                  height={150}
                  src="/HeroNFT/Drivers/Driver1.png"
                  alt="Driver1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pb-8"></div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        Способы получения Drivers NFT
      </div>
      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen p-6">
        <div className="pb-5 text-center text-xl text-p1-darkgreen">
          Только верифицированные пользователи смогут получить NFT из коллекции
          Drivers!
        </div>
        <div className="pb-5 text-left text-xl text-p1-darkgreen">
          Верификацию статуса пилота можно запросить у любого из лиц, владеющих
          хотя бы одной из NFT лицензий: Management National License Promoter
          License
        </div>

        <Image
          className="relative inline-block w-max overflow-hidden"
          width={1000}
          height={1000}
          src="/scheme GAA/scheme liders.png"
          alt="scheme Liders"
        />
        <div className="pb-5 text-right text-xl text-p1-darkgreen">
          Так мы планируем обеспечить прозрачность процесса.
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p2-orange">
          Drivers NFT
        </div>
        <div className="p-2 text-end text-4xl font-semibold text-p2-orange">
          Страница создания NFT
        </div>
      </div>
      <div className="m-5 rounded-3xl border-4 border-p2-orange text-center text-p1-darkgreen shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-x-5 p-2 text-2xl font-semibold text-p2-orange">
            Drivers NFT
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/Drivers/Driver4.png"
              alt="Driver4"
            />
          </div>
          <div className="space-x-5 p-2 text-2xl font-semibold text-p2-orange">
            Реальное Фото
            <div className="flex w-full items-center justify-center p-5">
              <label
                htmlFor="dropzone-file"
                className="flex h-96 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg
                    className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Фото Гонщика</span>
                  </p>

                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>

          <div>
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-8 py-8 text-xl font-normal text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Сгенерировать изображение NFT
            </button>

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
                max="100"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-2 w-3/5 cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
              />
            </div>

            <p className="p2 pt-8 text-2xl font-normal text-p1-darkgreen">
              Максимальное количество: 100 Drivers NFT за транзакцию
            </p>

            <p className="p-2 text-2xl font-semibold text-p1-darkgreen">
              Созданные вами NFT автоматически попадут в глобальную коллекцию
              GAA
            </p>
            <p className="p-2 text-2xl font-semibold text-p1-darkgreen">
              это единый сборник мирового сообщества
            </p>
            <p className="p-5 text-2xl font-semibold text-p1-darkgreen">
              Если вы планируете раздать или продать свои NFT, вы можете сделать
              несколько NFT одновременно
            </p>
            <p className="p-5 text-2xl font-semibold text-p1-darkgreen">
              Это Ваш способ привлечения инвестиций
            </p>
          </div>
          <div className="p-2 text-4xl text-p2-orange">
            <p className="text-left text-2xl font-semibold text-p1-darkgreen">
              Присоединяйтесь к нам
            </p>
            <p className="pb-5 text-left text-2xl font-semibold text-p1-darkgreen">
              Создай NFT Гонщика
            </p>

            <p className="pt-5 text-left text-2xl text-p1-darkgreen">
              Заполни все поля - эти метаданные будут храниться в блокчейне
            </p>
            <div className="pb-5"></div>
            <div>
              <label
                htmlFor="discipline"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Дисциплина
              </label>
              <input
                type="text"
                id="discipline"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Дисциплина"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="team"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Название команды
              </label>
              <input
                type="text"
                id="team"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Название команды"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="full_name"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Полное имя
              </label>
              <input
                type="text"
                id="full_name"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Иванов Иван Иванович"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="nic_name"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Ник-Имя
              </label>
              <input
                type="text"
                id="nic_name"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Ник-Имя"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="birthday"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Дата рождения
              </label>
              <input
                type="date"
                id="birthday"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Дата рождения"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="contry"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Страна
              </label>
              <input
                type="text"
                id="contry"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Страна"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="city"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Город
              </label>
              <input
                type="text"
                id="city"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Город"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-left text-sm font-medium text-p1-darkgreen dark:text-white"
              >
                Описание{" "}
              </label>
              <textarea
                id="message"
                rows={4}
                className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Описание"
              ></textarea>
            </div>
            <div className="pb-5"></div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-sm font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я согласен на обработку персональных данных.
              </label>
            </div>
            <div className="pb-8"></div>

            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-20 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создать NFT Гонщика
            </button>
            <div className="pb-8"></div>
          </div>
        </div>
      </div>

      {/* //Team&apos;s Members */}

      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          Team&apos;s Members NFT
        </div>
        <div className="p-2 text-end text-4xl font-semibold text-p1-darkgreen">
          Страница исследователя
        </div>
      </div>

      <div className="m-5 flex rounded-3xl border-4 border-p1-darkgreen">
        <div className="grid grid-cols-2 gap-4">
          <div className="place-content-center p-4 text-left">
            <p className="p-2 text-xl text-p1-darkgreen">
              Невзаимозаменяемый токен, отражающий члена автоспортивной команды.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Каждый NFT содержит метаданные, хранящие информацию о персоне.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              По согласованию мы можем полностью скопировать внешность персоны.
            </p>

            <p className="p-2 text-xl text-p1-darkgreen">
              Участники автоспортивных команд вносят огромный вклад в развитие
              автоспорта, поэтому мы бы хотели запечатлеть каждого из них в
              единой коллекции.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Предполагается, что первоначальным владельцем NFT будет сам член
              команды. Позже по желанию владельца токен может быть
              передан/продан любому человеку.
            </p>
            <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Страница создания NFT
            </button>
          </div>
          <div className="m-1 p-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={130}
                  height={130}
                  src="/HeroNFT/Team's members/TeamMember1.png"
                  alt="TeamMember1"
                />
              </div>
              <div>
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={130}
                  height={130}
                  src="/HeroNFT/Team's members/TeamMember2.png"
                  alt="TeamMember2"
                />
              </div>
              <div>
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={130}
                  height={130}
                  src="/HeroNFT/Team's members/TeamMember3.png"
                  alt="TeamMember3"
                />
              </div>
              <div>
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={150}
                  height={150}
                  src="/HeroNFT/Team's members/TeamMember4.png"
                  alt="TeamMember4"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pb-8"></div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        Способы получения Team&apos;s members NFT
      </div>
      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen p-6">
        <div className="pb-5 text-center text-xl text-p1-darkgreen">
          Только верифицированные пользователи смогут получить NFT из коллекции
          Team&apos;s members!
        </div>
        <div className="pb-5 text-left text-xl text-p1-darkgreen">
          Верификацию статуса пилота можно запросить у любого из лиц, владеющих
          хотя бы одной из NFT лицензий: Management National License Promoter
          License
        </div>

        <Image
          className="relative inline-block w-max overflow-hidden"
          width={1000}
          height={1000}
          src="/scheme GAA/scheme liders.png"
          alt="scheme Liders"
        />
        <div className="pb-5 text-right text-xl text-p1-darkgreen">
          Так мы планируем обеспечить прозрачность процесса.
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p2-orange">
          Team&apos;s members NFT
        </div>
        <div className="p-2 text-end text-4xl font-semibold text-p2-orange">
          Страница создания NFT
        </div>
      </div>
      <div className="m-5 rounded-3xl border-4 border-p2-orange text-center text-p1-darkgreen shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-x-5 p-2 text-2xl font-semibold text-p2-orange">
            Team&apos;s member NFT
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/Team's members/TeamMember1.png"
              alt="TeamMember1"
            />
          </div>

          <div className="space-x-5 p-2 text-2xl font-semibold text-p2-orange">
            Реальное Фото
            <div className="flex w-full items-center justify-center p-5">
              <label
                htmlFor="dropzone-file"
                className="flex h-96 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg
                    className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Фото Гонщика</span>
                  </p>

                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>

          <div className="space-x-5 p-2 text-2xl font-semibold text-p2-orange">
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-8 py-8 text-xl font-normal text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Сгенерировать изображение NFT
            </button>
            <div className="pb-5"></div>
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
                max="100"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-2 w-3/5 cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
              />
            </div>

            <p className="p2 pt-8 text-2xl font-normal text-p1-darkgreen">
              Максимальное количество: 100 Team&apos;s members NFT за транзакцию
            </p>

            <p className="p-2 text-2xl font-semibold text-p1-darkgreen">
              Созданные вами NFT автоматически попадут в глобальную коллекцию
              GAA
            </p>
            <p className="p-2 text-2xl font-semibold text-p1-darkgreen">
              это единый сборник мирового сообщества
            </p>
            <p className="p-5 text-2xl font-semibold text-p1-darkgreen">
              Если вы планируете раздать или продать свои NFT, вы можете сделать
              несколько NFT одновременно
            </p>
            <p className="p-5 text-2xl font-semibold text-p1-darkgreen">
              Это Ваш способ привлечения инвестиций
            </p>
          </div>
          <div className="p-2 text-4xl text-p2-orange">
            <p className="text-left text-2xl font-semibold text-p1-darkgreen">
              Присоединяйтесь к нам
            </p>
            <p className="pb-5 text-left text-2xl font-semibold text-p1-darkgreen">
              Создай NFT Участника команды
            </p>

            <p className="pt-5 text-left text-2xl text-p1-darkgreen">
              Заполни все поля - эти метаданные будут храниться в блокчейне
            </p>
            <div className="pb-5"></div>
            <div>
              <label
                htmlFor="discipline"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Дисциплина
              </label>
              <input
                type="text"
                id="discipline"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Дисциплина"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="team"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Название команды
              </label>
              <input
                type="text"
                id="team"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Название команды"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="full_name"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Полное имя
              </label>
              <input
                type="text"
                id="full_name"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Иванов Иван Иванович"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="nic_name"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Ник-Имя
              </label>
              <input
                type="text"
                id="nic_name"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Ник-Имя"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="birthday"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Дата рождения
              </label>
              <input
                type="date"
                id="birthday"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Дата рождения"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="contry"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Страна
              </label>
              <input
                type="text"
                id="contry"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Страна"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="city"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Город
              </label>
              <input
                type="text"
                id="city"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Город"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-left text-sm font-medium text-p1-darkgreen dark:text-white"
              >
                Описание{" "}
              </label>
              <textarea
                id="message"
                rows={4}
                className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Описание"
              ></textarea>
            </div>

            <div className="pb-5"></div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-sm font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я согласен на обработку персональных данных.
              </label>
            </div>
            <div className="pb-8"></div>

            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-20 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создать NFT Участника команды
            </button>
            <div className="pb-8"></div>
          </div>
        </div>
      </div>

      {/* //Collectors */}

      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          Collectors NFT
        </div>
        <div className="p-2 text-end text-4xl font-semibold text-p1-darkgreen">
          Страница исследователя
        </div>
      </div>

      <div className="m-5 flex rounded-3xl border-4 border-p1-darkgreen">
        <div className="grid grid-cols-2 gap-4">
          <div className="place-content-center p-4 text-left">
            <p className="p-2 text-xl text-p1-darkgreen">
              Невзаимозаменяемый токен, отражающий коллекционера спортивных,
              раритетных и редких автомобилей.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Каждый NFT содержит метаданные, хранящие информацию о персоне.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Мы очень ценим вклад коллекционеров в историю автокультуры и
              автоспорта и хотели бы запечатлеть историю каждого в единой
              коллекции.
            </p>

            <p className="p-2 text-xl text-p1-darkgreen">
              Предполагается, что первоначальным владельцем NFT будет сам
              автоколлекционер. Позже по желанию владельца токен может быть
              передан/продан любому человеку.
            </p>

            <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Страница создания NFT
            </button>
          </div>
          <div className="m-1 p-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={130}
                  height={130}
                  src="/HeroNFT/Collectors/Collector1.png"
                  alt="Collector1"
                />
              </div>
              <div>
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={130}
                  height={130}
                  src="/HeroNFT/Collectors/Collector2.png"
                  alt="Collector2"
                />
              </div>
              <div>
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={130}
                  height={130}
                  src="/HeroNFT/Collectors/Collector3.png"
                  alt="Collector3"
                />
              </div>
              <div>
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={150}
                  height={150}
                  src="/HeroNFT/Collectors/Collector4.png"
                  alt="Collector4"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pb-8"></div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        Способы получения Collectors NFT
      </div>
      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen p-6">
        <div className="pb-5 text-center text-xl text-p1-darkgreen">
          Только верифицированные пользователи смогут получить NFT из коллекции
          Collectors!
        </div>
        <div className="pb-5 text-left text-xl text-p1-darkgreen">
          Верификацию статуса пилота можно запросить у любого из лиц, владеющих
          хотя бы одной из NFT лицензий: Management National License Promoter
          License
        </div>

        <Image
          className="relative inline-block w-max overflow-hidden"
          width={1000}
          height={1000}
          src="/scheme GAA/scheme liders.png"
          alt="scheme Liders"
        />
        <div className="pb-5 text-right text-xl text-p1-darkgreen">
          Так мы планируем обеспечить прозрачность процесса.
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p2-orange">
          Collectors NFT
        </div>
        <div className="p-2 text-end text-4xl font-semibold text-p2-orange">
          Страница создания NFT
        </div>
      </div>
      <div className="m-5 rounded-3xl border-4 border-p2-orange text-center text-p1-darkgreen shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-x-5 p-2 text-2xl font-semibold text-p2-orange">
            Collectors NFT + Реальное Фото
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/Collectors/Collector1.png"
              alt="Collector1"
            />
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-8 py-8 text-xl font-normal text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Сгенерировать изображение NFT
            </button>
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
                max="100"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-2 w-3/5 cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
              />
            </div>
            <p className="p2 pt-8 text-2xl font-normal text-p1-darkgreen">
              Максимальное количество: 100 Collectors NFT за транзакцию
            </p>
            <p className="p-2 text-2xl font-semibold text-p1-darkgreen">
              Созданные вами NFT автоматически попадут в глобальную коллекцию
              GAA
            </p>
            <p className="p-2 text-2xl font-semibold text-p1-darkgreen">
              это единый сборник мирового сообщества
            </p>
            <p className="p-5 text-2xl font-semibold text-p1-darkgreen">
              Если вы планируете раздать или продать свои NFT, вы можете сделать
              несколько NFT одновременно
            </p>
            <p className="p-5 text-2xl font-semibold text-p1-darkgreen">
              Это Ваш способ привлечения инвестиций
            </p>
          </div>
          <div className="p-2 text-4xl text-p2-orange">
            <p className="text-left text-2xl font-semibold text-p1-darkgreen">
              Присоединяйтесь к нам
            </p>
            <p className="pb-5 text-left text-2xl font-semibold text-p1-darkgreen">
              Создай NFT Коллекционера
            </p>
            <div className="flex w-full items-center justify-center p-5">
              <label
                htmlFor="dropzone-file"
                className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg
                    className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Фото Коллекционера</span>
                  </p>

                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>

            <p className="p-5 text-left text-2xl text-p1-darkgreen">
              Заполни все поля - эти метаданные будут храниться в блокчейне
            </p>

            <div>
              <label
                htmlFor="full_name"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Полное имя
              </label>
              <input
                type="text"
                id="full_name"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Иванов Иван Иванович"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="nic_name"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Ник-Имя
              </label>
              <input
                type="text"
                id="nic_name"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Ник-Имя"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="birthday"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Дата рождения
              </label>
              <input
                type="date"
                id="birthday"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Дата рождения"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="contry"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Страна
              </label>
              <input
                type="text"
                id="contry"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Страна"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="city"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Город
              </label>
              <input
                type="text"
                id="city"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Город"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-left text-sm font-medium text-p1-darkgreen dark:text-white"
              >
                Описание{" "}
              </label>
              <textarea
                id="message"
                rows={4}
                className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Описание"
              ></textarea>
            </div>

            <div className="pb-5"></div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-sm font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я согласен на обработку персональных данных.
              </label>
            </div>
            <div className="pb-8"></div>
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-6 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создать NFT Коллекционера
            </button>
            <div className="pb-8"></div>
          </div>
        </div>
      </div>

      {/* //Cars */}

      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          Cars NFT
        </div>
        <div className="p-2 text-end text-4xl font-semibold text-p1-darkgreen">
          Страница исследователя
        </div>
      </div>
      <div className="m-5 flex rounded-3xl border-4 border-p1-darkgreen">
        <div>
          <div className="float-right m-1 p-5">
            <Image
              className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/Cars/Car.png"
              alt="Car"
            />
          </div>
          <div className="place-content-center p-4 text-left">
            <p className="p-2 text-xl text-p1-darkgreen">
              Невзаимозаменяемый токен, отражающий реальный коллекционный
              спортивный, кастомизированный или раритетный автомобиль из частной
              коллекции.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Каждый NFT содержит метаданные, хранящие информацию о
              коллекционном экземпляре, его описание и характеристики.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              При желании владельца можно добавить медиаконтент.
            </p>

            <p className="p-2 text-xl text-p1-darkgreen">
              Позже по желанию владельца токен может быть передан/продан любому
              человеку. Например новому владельцу автомобиля.
            </p>
            <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Страница создания NFT
            </button>
          </div>
        </div>

        <div className="pb-8"></div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        Способы получения Car NFT
      </div>
      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen p-6">
        <div className="pb-5 text-center text-xl text-p1-darkgreen">
          Только владельцы NFT коллекций Drivers, Team&apos;s members,
          Collectors смогут оцифровать свои автомобили и создать Car NFT
        </div>

        <Image
          className="relative inline-block w-max overflow-hidden"
          width={1000}
          height={1000}
          src="/scheme GAA/scheme Сars.png"
          alt="scheme Сars"
        />
        <div className="pb-5 text-right text-xl text-p1-darkgreen">
          Так мы планируем обеспечить прозрачность процесса.
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p2-orange">
          Cars NFT
        </div>
        <div className="p-2 text-end text-4xl font-semibold text-p2-orange">
          Страница создания NFT
        </div>
      </div>
      <div className="m-5 rounded-3xl border-4 border-p2-orange text-center text-p1-darkgreen shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-x-5 p-2 text-2xl font-semibold text-p2-orange">
            Car NFT + Реальное Фото
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/Cars/Car.png"
              alt="Car"
            />
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-8 py-8 text-xl font-normal text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Сгенерировать изображение NFT
            </button>
            <div className="pb-5"></div>
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
                max="100"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-2 w-3/5 cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
              />
            </div>
            <p className="p2 pt-8 text-2xl font-normal text-p1-darkgreen">
              Максимальное количество: 100 Cars NFT за транзакцию
            </p>
            <p className="p-2 text-2xl font-semibold text-p1-darkgreen">
              Созданные вами NFT автоматически попадут в глобальную коллекцию
              GAA
            </p>
            <p className="p-2 text-2xl font-semibold text-p1-darkgreen">
              это единый сборник мирового сообщества
            </p>
            <p className="p-5 text-2xl font-semibold text-p1-darkgreen">
              Если вы планируете раздать или продать свои NFT, вы можете сделать
              несколько NFT одновременно
            </p>
            <p className="p-5 text-2xl font-semibold text-p1-darkgreen">
              Это Ваш способ привлечения инвестиций
            </p>
          </div>
          <div className="p-2 text-4xl text-p2-orange">
            <p className="text-left text-2xl font-semibold text-p1-darkgreen">
              Присоединяйтесь к нам
            </p>
            <p className="pb-5 text-left text-2xl font-semibold text-p1-darkgreen">
              Создай NFT спортивного/раритетного автомобиля
            </p>
            <div className="flex w-full items-center justify-center p-5">
              <label
                htmlFor="dropzone-file"
                className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg
                    className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Фото Автомобиля</span>
                  </p>

                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <p className="pt-5 text-left text-2xl text-p1-darkgreen">
              Заполни все поля - эти метаданные будут храниться в блокчейне
            </p>
            <div className="pb-5"></div>

            <div>
              <label
                htmlFor="car_category"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Категория Авто
              </label>
              <input
                type="text"
                id="car_category"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Дрифт/Dragster/Oldtimer/Stance/Sport/Rarity"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="first_name"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Самодельный или Оригональный
              </label>
              <input
                type="text"
                id="custom_orig"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Самодельный или Оригональный"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="full_name"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Полное имя
              </label>
              <input
                type="text"
                id="full_name"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Полное имя создателя/владельца"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="nic_name"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Ник-Имя
              </label>
              <input
                type="text"
                id="nic_name"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Ник-Имя"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="birthday"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Дата рождения
              </label>
              <input
                type="date"
                id="birthday"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Дата рождения"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="brand"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Марка авто
              </label>
              <input
                type="text"
                id="Brand"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Марка авто"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="model"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Модель авто
              </label>
              <input
                type="text"
                id="model"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Модель авто"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="year_made"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Год создания
              </label>
              <input
                type="text"
                id="contry"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Год создания"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="engine"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Двигатель
              </label>
              <input
                type="text"
                id="engine"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Двигатель"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="hp"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Лошадиных сил
              </label>
              <input
                type="text"
                id="contry"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Лошадиных сил"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="contry"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Страна
              </label>
              <input
                type="text"
                id="contry"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Страна"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="first_name"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Город
              </label>
              <input
                type="text"
                id="city"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Город"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-left text-sm font-medium text-p1-darkgreen dark:text-white"
              >
                Описание{" "}
              </label>
              <textarea
                id="message"
                rows={4}
                className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Описание"
              ></textarea>
            </div>

            <div className="pb-5"></div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-sm font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я согласен на обработку персональных данных.
              </label>
            </div>
            <div className="pb-8"></div>
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-20 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создать NFT Автомобиля
            </button>
            <div className="pb-8"></div>
          </div>
        </div>
      </div>

      {/* // CustomLads */}

      <div className="pt-5 text-center text-6xl font-bold text-p1-darkgreen">
        CustomLads
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        Собери своего героя!
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 col-start-2 w-full rounded-3xl border-4 border-p1-darkgreen text-center text-p1-darkgreen shadow-lg">
          <div>
            <p className="p-2 text-2xl text-p1-darkgreen">
              Собери своего героя из готовых элементов коллекции
            </p>
            <h2 className="pb-2 text-2xl text-p1-darkgreen">RaceLads </h2>
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/RaceLads/RaceLads1.png"
              alt="RaceLads1"
            />
            <p className="pt-2 text-2xl text-p1-darkgreen">
              Только для держателей NFT коллекции RaceLads
            </p>
            <p className="pb-2 text-2xl text-p1-darkgreen">
              Кто твой персонаж - решать тебе!
            </p>
            <button className="rounded-l-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white">
              Исследуй NFT
            </button>
            <button className="rounded-r-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Страница создания NFT
            </button>
            <div className="pb-8"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          CustomLads NFT
        </div>
        <div className="p-2 text-end text-4xl font-semibold text-p1-darkgreen">
          Страница исследователя
        </div>
      </div>
      <div className="m-5 flex rounded-3xl border-4 border-p1-darkgreen shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className="place-content-center p-4 text-left">
            <p className="p-2 text-xl text-p1-darkgreen">
              Невзаимозаменяемый токен, представляющий кастомизированного героя
              из элементов первой генеративной коллекции RaceLads, который
              собран его владельцем.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Мы очень ценим вклад каждого неравнодушного к проекту и готовы
              предоставить возможность формирования героя по своим
              предпочтениям.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Мы стали свидетелями дублирования (воровства) существующих
              коллекций и выступаем против подобных деяний, поэтому хотим дать
              каждому возможность собрать своего героя легальным способом.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Данная коллекция будет доступна только для держателей NFT из
              коллекции RaceLads.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              10 уровней доступа к редким элементам определяется наличием
              соответствующего количества NFT из коллекции RaceLads
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Любой CustomLad по желанию держателя может быть передан/продан
              любому участнику сообщества.
            </p>

            <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Страница создания NFT
            </button>
          </div>
          <div className="m-1 p-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={130}
                  height={130}
                  src="/HeroNFT/CustomLads/CustomLads1.png"
                  alt="CustomLads1"
                />
              </div>
              <div>
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={130}
                  height={130}
                  src="/HeroNFT/CustomLads/CustomLads2.png"
                  alt="CustomLads2"
                />
              </div>
              <div>
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={130}
                  height={130}
                  src="/HeroNFT/CustomLads/CustomLads3.png"
                  alt="CustomLads3"
                />
              </div>
              <div>
                <Image
                  className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={150}
                  height={150}
                  src="/HeroNFT/CustomLads/CustomLads4.png"
                  alt="CustomLads4"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pb-8"></div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        Способы получения CustomLads NFT
      </div>
      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen p-6 shadow-lg">
        <div className="pb-5 text-center text-xl">
          Любой владелец NFT из коллекции RaceLads может собрать персонажа из
          коллекции CustomLads
        </div>
        <Image
          className="relative inline-block w-max overflow-hidden"
          width={1000}
          height={1000}
          src="/scheme GAA/scheme CustomLads.png"
          alt="scheme CustomLad"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p2-orange">
          CustomLads NFT
        </div>
        <div className="p-2 text-end text-4xl font-semibold text-p2-orange">
          Страница создания NFT
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 col-start-2 w-full rounded-3xl border-4 border-p2-orange text-center text-p1-darkgreen shadow-lg">
          <div>
            <p className="pt-5 text-2xl text-p1-darkgreen">
              Присоединяйтесь к нам
            </p>
            <p className="pb-5 text-2xl text-p1-darkgreen">
              Получите своего героя CustomLad
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className="w-12 rounded-s-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    Х
                  </button>
                  <button
                    type="button"
                    className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {"<"}
                  </button>
                  <button
                    type="button"
                    className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    фон
                  </button>

                  <button
                    type="button"
                    className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {">"}
                  </button>
                </div>
                <div>
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="w-12 rounded-s-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      Х
                    </button>
                    <button
                      type="button"
                      className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      тело
                    </button>

                    <button
                      type="button"
                      className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {">"}
                    </button>
                  </div>
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="w-12 rounded-s-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      Х
                    </button>
                    <button
                      type="button"
                      className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      глаза
                    </button>

                    <button
                      type="button"
                      className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {">"}
                    </button>
                  </div>
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="w-12 rounded-s-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      Х
                    </button>
                    <button
                      type="button"
                      className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      рот
                    </button>

                    <button
                      type="button"
                      className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {">"}
                    </button>
                  </div>
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="w-12 rounded-s-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      Х
                    </button>
                    <button
                      type="button"
                      className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      нос
                    </button>

                    <button
                      type="button"
                      className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {">"}
                    </button>
                  </div>
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="w-12 rounded-s-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      Х
                    </button>
                    <button
                      type="button"
                      className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      усы борода
                    </button>

                    <button
                      type="button"
                      className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {">"}
                    </button>
                  </div>
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="w-12 rounded-s-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      Х
                    </button>
                    <button
                      type="button"
                      className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      серьга в ухо
                    </button>

                    <button
                      type="button"
                      className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {">"}
                    </button>
                  </div>
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="w-12 rounded-s-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      Х
                    </button>
                    <button
                      type="button"
                      className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      монеты на глаза
                    </button>

                    <button
                      type="button"
                      className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {">"}
                    </button>
                  </div>
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="w-12 rounded-s-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      Х
                    </button>
                    <button
                      type="button"
                      className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      балаклава, маски, очки...
                    </button>

                    <button
                      type="button"
                      className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {">"}
                    </button>
                  </div>
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="w-12 rounded-s-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      Х
                    </button>
                    <button
                      type="button"
                      className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      броне жилет
                    </button>

                    <button
                      type="button"
                      className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {">"}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={1000}
                  height={1000}
                  src="/HeroNFT/CustomLads/CustomLads1.png"
                  alt="CustomLads1"
                />
                <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-5 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
                  Случайное изображения NFT
                </button>
                <div className="pb-5"></div>
                <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-5 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
                  Сброс
                </button>
              </div>

              <div>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {"<"}
                  </button>
                  <button
                    type="button"
                    className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    верхняя одежда
                  </button>

                  <button
                    type="button"
                    className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {">"}
                  </button>
                  <button
                    type="button"
                    className="w-12 rounded-e-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    Х
                  </button>
                </div>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {"<"}
                  </button>
                  <button
                    type="button"
                    className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    прическа головной убор
                  </button>

                  <button
                    type="button"
                    className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {">"}
                  </button>
                  <button
                    type="button"
                    className="w-12 rounded-e-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    Х
                  </button>
                </div>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {"<"}
                  </button>
                  <button
                    type="button"
                    className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    нимб и альбатрос
                  </button>

                  <button
                    type="button"
                    className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {">"}
                  </button>
                  <button
                    type="button"
                    className="w-12 rounded-e-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    Х
                  </button>
                </div>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {"<"}
                  </button>
                  <button
                    type="button"
                    className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    попугай
                  </button>

                  <button
                    type="button"
                    className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {">"}
                  </button>
                  <button
                    type="button"
                    className="w-12 rounded-e-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    Х
                  </button>
                </div>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {"<"}
                  </button>
                  <button
                    type="button"
                    className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    стрела с сердцем
                  </button>

                  <button
                    type="button"
                    className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {">"}
                  </button>
                  <button
                    type="button"
                    className="w-12 rounded-e-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    Х
                  </button>
                </div>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {"<"}
                  </button>
                  <button
                    type="button"
                    className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    надписи
                  </button>

                  <button
                    type="button"
                    className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {">"}
                  </button>
                  <button
                    type="button"
                    className="w-12 rounded-e-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    Х
                  </button>
                </div>
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
                min="1"
                max="10"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-2 w-3/5 cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
              />
            </div>

            <p className="pb-8 pt-8 text-2xl text-p1-darkgreen">
              Максимальное количество: 10 CustomLads за транзакцию
            </p>
            <p className="pb-8 pt-8 text-2xl text-p1-darkgreen">
              стрелки - перебор доступных элементов, Х-фиксация пустого слоя, по
              центру нажатие названия элемента - фиксация выбранного элемента,
              сброс - сброс всех настроек, случайное изображение - рандомайзер
              из доступных элементов, на странице должна быть проверка
              количества NFT в кошельке и открытие доступных элементов
            </p>

            <div className="pb-5"></div>
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-48 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создать NFT
            </button>
            <div className="pb-8"></div>
          </div>
        </div>
      </div>

      {/* //Награды */}

      <div className="pt-5 text-center text-6xl font-bold text-p1-darkgreen">
        Награды
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        Кубки и Медали
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 col-start-2 w-full rounded-3xl border-4 border-p1-darkgreen text-center text-p1-darkgreen shadow-lg">
          <div>
            <Image
              className="relative m-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/Hero/Rewards.png"
              alt="Rewards"
            />
            <p className="p-2 text-2xl text-p1-darkgreen">
              NFT награды, содержащие метаданные о мероприятии, награжденном
              спортсмене, а также медиаконтент
            </p>
            <p className="p-4 text-2xl text-p1-darkgreen">
              Когда присоединиться - решать тебе!
            </p>
            <button className="rounded-l-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white">
              Исследуй NFT
            </button>
            <button className="rounded-r-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Страница создания NFT
            </button>
            <div className="pb-8"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-5 text-4xl font-semibold text-p1-darkgreen">
          Rewards NFT
        </div>
        <div className="p-5 text-end text-4xl font-semibold text-p1-darkgreen">
          Страница исследователя
        </div>
      </div>
      <div className="m-5 flex rounded-3xl border-4 border-p1-darkgreen shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className="place-content-center p-4 text-left">
            <p className="p-2 text-xl text-p1-darkgreen">
              Невзаимозаменяемый токен (NFT награда), вручаемая Промоутером
              (Организатором) в рамках мероприятия (соревнования).
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Rewards NFT можно коллекционировать, продавать, передавать.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Каждый NFT включен в единую коллекцию Rewards GAA, что является
              уникальным для всех наград GAA
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Токен содержит ссылки на официальные документы: Итоговый протокол
              конкурса, соревнования Фото награждения Видео победы
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Все данные хранятся в IPFS сети и защищены от несанкционированного
              уничтожения.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Доступ к минту токена у держателей NFT Promoter license, National
              license, Global license, Management
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Данный токен Burnebal, то есть собственник контракта может
              уничтожить любой токен из коллекции, эта мера необходима для
              формирования чистоты коллекции.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              То есть категорически запрещено присоединять к NFT медиаконтент
              политического содержания, экстремистской направленности, а также
              любой иной медиаконтент не отвечающий вектору развития Проекта.
              Также запрещено присоединять данные не соответствующие
              действительности.
            </p>

            <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Страница создания NFT
            </button>
          </div>
          <div className="m-1 p-5">
            <Image
              className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/Hero/Rewards.png"
              alt="Rewards"
            />
          </div>
        </div>

        <div className="pb-8"></div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        Способы получения Rewards NFT
      </div>
      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen p-6 shadow-lg">
        <div className="pb-5 text-center text-xl">
          Награды могут создавать и вручать держатели NFT Promoter license,
          National license, Global license, Management GAA
        </div>
        <Image
          className="relative inline-block w-max overflow-hidden"
          width={1000}
          height={1000}
          src="/scheme GAA/scheme Rewards.png"
          alt="scheme Rewards"
        />

        <div className="p-5 text-center text-xl">
          Награды могут получать Drivers, Team&apos;s members, Collectors, Cars
          и т.п. даже если нет соответствующей NFT
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p2-orange">
          Rewards NFT
        </div>
        <div className="p-2 text-end text-4xl font-semibold text-p2-orange">
          Страница создания NFT
        </div>
      </div>

      <div className="m-5 rounded-3xl border-4 border-p2-orange text-center text-p1-darkgreen shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-x-5 p-5 text-2xl font-semibold text-p2-orange">
            <div>
              <Image
                className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                width={1000}
                height={1000}
                src="/Hero/Rewards.png"
                alt="Rewards"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex w-full items-center justify-center">
                <label
                  htmlFor="dropzone-file"
                  className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">
                        Добавь медиаконтент момента победы
                      </span>
                    </p>

                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
              <div></div>
              <div>
                <div className="flex w-full items-center justify-center">
                  <label
                    htmlFor="dropzone-file"
                    className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800"
                  >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                      <svg
                        className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">
                          Добавь медиаконтент Победитель на подиуме награждения
                          с наградой
                        </span>
                      </p>

                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
              <div>
                <div className="flex w-full items-center justify-center">
                  <label
                    htmlFor="dropzone-file"
                    className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800"
                  >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                      <svg
                        className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">
                          Добавь файл финального отчета / Протокол соревнования
                        </span>
                      </p>

                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>
            <p className="text-centre p-5 text-2xl text-p1-darkgreen">
              Добавьте медиаконтент о победителе
            </p>
            <p className="p-2 text-2xl font-semibold text-p1-darkgreen">
              Созданные вами NFT автоматически попадут в глобальную коллекцию
              GAA
            </p>
            <p className="p-2 text-2xl font-semibold text-p1-darkgreen">
              это единый сборник мирового сообщества
            </p>
            <p className="p-5 text-2xl font-semibold text-p1-darkgreen">
              Доступно для держателей NFT Promoter license, National license,
              Global license, Management GAA
            </p>
            <p className="p-5 text-2xl font-semibold text-p2-red">
              Добавить вывод изображения в зависимости от выбранных и
              заполненных полей
            </p>
          </div>
          <div className="p-2 text-4xl text-p2-orange">
            <p className="text-left text-2xl font-semibold text-p1-darkgreen">
              Присоединяйтесь к нам
            </p>
            <p className="pb-5 text-left text-2xl font-semibold text-p1-darkgreen">
              Создай NFT награду
            </p>

            <p className="pt-5 text-left text-2xl text-p1-darkgreen">
              Заполни все поля - эти метаданные будут храниться в блокчейне
            </p>

            <div className="pb-5"></div>
            <div>
              <div>
                <label
                  htmlFor="contry"
                  className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                >
                  Страна
                </label>
                <input
                  type="text"
                  id="contry"
                  className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                  placeholder="Страна"
                  required
                />
              </div>
              <div className="pb-2"></div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                >
                  Город
                </label>
                <input
                  type="text"
                  id="city"
                  className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                  placeholder="Город"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="event"
                  className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                >
                  Официаллное название мероприятия
                </label>
                <input
                  type="text"
                  id="event"
                  className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                  placeholder="Официальное название мероприятия"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="event_category"
                  className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                >
                  Официальное название соревнования/конкурса
                </label>
                <input
                  type="text"
                  id="competition"
                  className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                  placeholder="Официальное название соревнования/конкурса"
                  required
                />
              </div>
              <div className="pb-2"></div>

              <form className="mx-auto max-w-2xl">
                <label
                  htmlFor="license"
                  className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                >
                  Категория: Соревнование/Конкурс
                </label>
                <select
                  id="license"
                  className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Выберите категорию
                  </option>
                  <option value="Competition">Соревнование</option>
                  <option value="Contest">Конкурс</option>
                </select>
              </form>
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="nomination"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Номинация
              </label>
              <input
                type="text"
                id="nomination"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Номинация"
                required
              />
            </div>
            <div className="pb-2"></div>
            <form className="mx-auto max-w-2xl">
              <label
                htmlFor="Reward_Category"
                className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Категория награды
              </label>
              <select
                id="Reward"
                className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                defaultValue={"DEFAULT"}
              >
                <option value="DEFAULT" disabled>
                  Выберите категорию награды
                </option>
                <option value="Cup">Кубок</option>
                <option value="Medal">Медаль</option>
                <option value="Diploma">Грамота участника</option>
              </select>
            </form>

            <div className="pb-2"></div>
            <form className="mx-auto max-w-2xl">
              <label
                htmlFor="license"
                className="block w-full text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Занятое место
              </label>
              <select
                id="Place_Victory"
                className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                defaultValue={"DEFAULT"}
              >
                <option value="DEFAULT" disabled>
                  Выберите занятое место
                </option>
                <option value="First_Place">1 место</option>
                <option value="Second_Place">2 место</option>
                <option value="Third_Place">3 место</option>
                <option value="Member">Участник</option>
              </select>
            </form>

            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="Victory_day"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                День Победы
              </label>
              <input
                type="date"
                id="victory_day"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="День Победы"
                required
              />
            </div>
            <div className="pb-2"></div>

            <p className="pt-5 text-left text-xl text-p1-darkgreen">
              Сведения о победителе:
            </p>

            <div>
              <label
                htmlFor="full_name"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Полное имя
              </label>
              <input
                type="text"
                id="full_name"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Иванов Иван Иванович"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="nic_name"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Ник-Имя
              </label>
              <input
                type="text"
                id="nic_name"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Ник-Имя"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div>
              <label
                htmlFor="birthday"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Дата рождения
              </label>
              <input
                type="date"
                id="birthday"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Дата рождения"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="team"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Название команды
              </label>
              <input
                type="text"
                id="team"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Название команды"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="tag"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Хэш-Тэг
              </label>
              <input
                type="text"
                id="tag"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Хэш-Тэг"
                required
              />
            </div>
            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="geolocation"
                className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
              >
                Геолокация
              </label>
              <input
                type="text"
                id="geolocation"
                className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p2-orange focus:ring-p2-orange dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p2-orange dark:focus:ring-p2-orange"
                placeholder="Геолокация"
                required
              />
            </div>
            <div className="pb-2"></div>

            <div className="pb-2"></div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-left text-sm font-medium text-p1-darkgreen dark:text-white"
              >
                Описание{" "}
              </label>
              <textarea
                id="message"
                rows={4}
                className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Описание"
              ></textarea>
            </div>
            <div className="pb-5"></div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-sm font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я согласен на обработку персональных данных.
              </label>
            </div>
            <div className="pb-8"></div>

            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-20 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создать NFT Награды
            </button>
            <div className="pb-8"></div>
          </div>
        </div>
      </div>
      {/* //Лицензии */}
      <div className="pt-5 text-center text-6xl font-bold text-p1-darkgreen">
        Лицензии
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        NFT, дающие преференции своим держателям
      </div>
      <div className="m-5 grid grid-cols-3 gap-4 rounded-3xl border-4 border-p1-darkgreen p-5 text-center text-p1-darkgreen shadow-lg">
        <div>
          <Image
            className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
            width={1000}
            height={1000}
            src="/Licenses/Promoter Lic.png"
            alt="PromoterLic"
          />
          <p className="text-2xl text-p1-darkgreen">Лицензия Промоутера</p>
          <p className="text-xm pb-2 text-p1-darkgreen">
            Предоставляет доступ на страницу создания NFT наград
          </p>
        </div>
        <div>
          <Image
            className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
            width={1000}
            height={1000}
            src="/Licenses/National Lic.png"
            alt="NationalLic"
          />
          <p className="text-2xl text-p1-darkgreen">Национальная лицензия</p>
          <p className="text-xm pb-2 text-p1-darkgreen">
            Предоставляет право голоса по развитию GAA на национальном и
            локальном уровнях
          </p>
        </div>

        <div>
          <Image
            className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
            width={1000}
            height={1000}
            src="/Licenses/Global Lic.png"
            alt="GlobalLic"
          />
          <p className="text-2xl text-p1-darkgreen">Глобальная лицензия</p>
          <p className="text-xm pb-2 text-p1-darkgreen">
            Предоставляет право голоса по развитию GAA на международном уровне
          </p>
        </div>

        <div>
          <button className="rounded-l-lg border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white">
            Исследуй NFT
          </button>
          <button className="rounded-r-lg border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
            Создай NFT
          </button>
        </div>
        <div>
          <button className="rounded-l-lg border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white">
            Исследуй NFT
          </button>
          <button className="rounded-r-lg border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
            Создай NFT
          </button>
        </div>
        <div>
          <button className="rounded-l-lg border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white">
            Исследуй NFT
          </button>
          <button className="rounded-r-lg border-2 border-p1-darkgreen bg-p2-white2 p-2 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
            Создай NFT
          </button>
        </div>
      </div>
      {/* //Promoter License */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          Promoter License NFT
        </div>
        <div className="p-2 text-end text-4xl font-semibold text-p1-darkgreen">
          Страница исследователя
        </div>
      </div>
      <div className="m-5 flex rounded-3xl border-4 border-p1-darkgreen shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className="place-content-center p-4 text-left">
            <p className="p-2 text-xl text-p1-darkgreen">
              Promoter License NFT невзаимозаменяемый токен, предоставляется
              Промоутеру (Организатору) мероприятия.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Promouter License NFT предоставляет доступ к странице сайта для
              минта Reward NFT (NFT Наград)
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Для получения NFT Promouter License NFT Промоутер (Организатор)
              заполняет регистрационную форму на странице регистрации и
              направляет заявку на предоставление доступа к созданию NFT.
            </p>
            <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Регистрационная форма заявки
            </button>

            <p className="p-2 text-xl text-p1-darkgreen">
              При положительном решении Промоутеру (Организатору)
              предоставляется возможность минта Promouter License NFT.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Данный токен Burnebal, то есть собственник смарт-контракта может
              уничтожить любой токен из коллекции, эта мера необходима для
              формирования чистоты коллекции.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              То есть собственник смарт-контракта вправе уничтожить NFT в случае
              нарушения держателем Promouter License NFT правил, создания NFT не
              соответствующих целям Проекта.
            </p>

            <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Страница создания NFT
            </button>
          </div>
          <div className="m-1 p-5">
            <Image
              className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/Licenses/Promoter Lic.png"
              alt="PromoterLic"
            />
          </div>
        </div>
        <div className="pb-8"></div>
      </div>

      {/* //National License */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          National License NFT
        </div>
        <div className="p-2 text-end text-4xl font-semibold text-p1-darkgreen">
          Страница исследователя
        </div>
      </div>
      <div className="m-5 flex rounded-3xl border-4 border-p1-darkgreen shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className="place-content-center p-4 text-left">
            <p className="p-2 text-xl text-p1-darkgreen">
              National License NFT невзаимозаменяемый токен, предоставляется
              лидерам направлений
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Держателю National License NFT будет доступна страница минта
              Promouter NFT и Rewards NFT для минта и передачи организаторам и
              участникам мероприятия.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              То еcть держатель National License NFT решает вопросы связанные с
              организацией и проведением награждения конкурсантов и спортсменов
              мероприятий, а именно решает кто будет создавать NFT и кто будет
              награждать конкурсантов и спортсменов.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Мы благодарны активным участникам сообщества стремящихся идти в
              ногу со временем и популяризирующие новые технологии и их
              продвижение, делающие мир лучше.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Для получения NFT необходимо зарегистрироваться и заполнить заявку
              для рассмотрения
            </p>
            <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Регистрационная форма заявки
            </button>

            <p className="p-2 text-xl text-p1-darkgreen">
              При положительном решении лидеру направления предоставляется
              возможность создания National License NFT.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Держатель National License NFT принимает решения о векторе
              развития сообщества локального уровня, организует проведение
              голосований, а также сам принимает участие в голосовании по
              вопросам развития сообщества на локальной территории национального
              уровна.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Данный токен Burnebal, то есть собственник смарт-контракта может
              уничтожить любой токен из коллекции, эта мера необходима для
              формирования чистоты коллекции.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              То есть собственник смарт-контракта вправе уничтожить NFT в случае
              нарушения держателем National License NFT правил, создания NFT не
              соответствующих целям Проекта.
            </p>
            <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Страница создания NFT
            </button>
          </div>
          <div className="m-1 p-5">
            <Image
              className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/Licenses/National Lic.png"
              alt="NationalLic"
            />
          </div>
        </div>
        <div className="pb-8"></div>
      </div>
      {/* //Global License */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          Global License NFT
        </div>
        <div className="p-2 text-end text-4xl font-semibold text-p1-darkgreen">
          Страница исследователя
        </div>
      </div>
      <div className="m-5 flex rounded-3xl border-4 border-p1-darkgreen shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className="place-content-center p-4 text-left">
            <p className="p-2 text-xl text-p1-darkgreen">
              Global License NFT невзаимозаменяемый токен, предоставляется
              лидерам направлений
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Держателю Global License NFT будет доступна страница минта
              Promouter NFT и Rewards NFT для минта и передачи организаторам и
              участникам мероприятия.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Держатель Global License NFT принимает решения о векторе развития
              сообщества и организации проведения голосований, а также сам
              принимает участие в голосовании по вопросам развития сообщества.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Мы благодарны активным участникам сообщества стремящихся идти в
              ногу со временем и популяризирующие новые технологии и их
              продвижение, делающие мир лучше.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Для получения NFT необходимо зарегистрироваться и заполнить заявку
              для рассмотрения
            </p>
            <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Регистрационная форма заявки
            </button>

            <p className="p-2 text-xl text-p1-darkgreen">
              При положительном решении лидеру направления предоставляется
              возможность создания Global License NFT.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Держатель Global License NFT принимает решения о векторе развития
              сообщества на международном уровне, организует проведение
              голосований, а также сам принимает участие в голосовании по
              вопросам развития сообщества на Глобальном уровне, может решать
              вопросы, связанные с организацией и проведением награждения
              конкурсантов и спортсменов мероприятий, а именно решает кто будет
              создавать NFT и кто будет награждать конкурсантов и спортсменов.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              Данный токен Burnebal, то есть собственник смарт-контракта может
              уничтожить любой токен из коллекции, эта мера необходима для
              формирования чистоты коллекции.
            </p>
            <p className="p-2 text-xl text-p1-darkgreen">
              То есть собственник смарт-контракта вправе уничтожить NFT в случае
              нарушения держателем National License NFT правил, создания NFT не
              соответствующих целям Проекта.
            </p>
            <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Страница создания NFT
            </button>
          </div>
          <div className="m-1 p-5">
            <Image
              className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/Licenses/Global Lic.png"
              alt="GlobalLic"
            />
          </div>
        </div>
        <div className="pb-8"></div>
      </div>

      <div className="pt-5 text-center text-4xl font-bold text-p1-darkgreen">
        Способы получения
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        Promoter, National, Global Licenses NFT
      </div>
      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen p-6 shadow-lg">
        <div className="pb-5 text-center text-xl">
          Management GAA и Global License организует обшее развитие и управление
          GAA
        </div>
        <div className="pb-5 text-center text-xl">
          Верификацию и удостоверение статуса National License, Promouter
          License Global License могут осуществить Management GAA
        </div>

        <div className="grid grid-cols-7 gap-4">
          <div>1</div>
          <div>1</div>
          <div>
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p1-white p-2 text-xl text-p1-darkgreen shadow-lg shadow-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white">
              Форма подачи заявки
            </button>
          </div>

          <div>1</div>
          <div>1</div>
          <div className="col-span-1 col-start-1 row-span-2">
            {" "}
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/Hero/13.png"
              alt="13"
            />
          </div>
          <div className="col-span-3 col-start-2 row-span-2">
            {" "}
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/scheme GAA/Schem_Licenses-1.png"
              alt="schem Licenses"
            />
          </div>

          <div>
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/Licenses/Management.png"
              alt="Management"
            />
          </div>

          <div>11</div>
          <div>12</div>

          <div>
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/Licenses/Promoter.png"
              alt="Promoter"
            />
          </div>
          <div>
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/Licenses/National.png"
              alt="national"
            />
          </div>
          <div>
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/Licenses/Global.png"
              alt="Global"
            />
          </div>
          <div>111</div>
          <div>112</div>
          <div>
            <Image
              className="relative inline-block w-max overflow-hidden"
              width={1000}
              height={1000}
              src="/Logo/MetaMask.png"
              alt="Metamask"
            />
          </div>
          <div>114</div>
        </div>

        <Image
          className="relative inline-block w-max overflow-hidden"
          width={1000}
          height={1000}
          src="/scheme GAA/scheme License.png"
          alt="scheme License"
        />

        <div className="p-5 text-center text-xl">
          Вектор развития направления решает Management GAA, Global License,
          National License
        </div>
        <div className="p-5 text-center text-xl">
          Promoter License организует локальное мероприятие, может включать
          разные направления
        </div>
        <div className="p-5 text-center text-xl">
          National License организует развитие направлений на национальном
          внутреннем уровне
        </div>
      </div>

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
            <p className="text-2xl text-p1-darkgreen">Присоединяйтесь к нам</p>
            <p className="pb-5 text-2xl text-p1-darkgreen">
              Получите NFT лицензию Промоутера
            </p>
            <div className="grid grid-cols-4 gap-4">
              <div className="pt-5">
                Созданные вами NFT автоматически попадут в глобальную коллекцию
                GAA
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
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <Link
                    href={{
                      pathname: "/rulicense",
                      query: { license: "promouter" },
                    }}
                    className="w-full rounded-l-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
                  >
                    Promouter License
                  </Link>
                  <Link
                    href={{
                      pathname: "/rulicense",
                      query: { license: "national" },
                    }}
                    className="w-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
                  >
                    National License
                  </Link>
                  <Link
                    href={{
                      pathname: "/rulicense",
                      query: { license: "global" },
                    }}
                    className="w-full rounded-r-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
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
                min="1"
                max="10"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-2 w-3/5 cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
              />
            </div>
            <p className="pb-8 pt-8 text-2xl text-p1-darkgreen">
              Максимум: 10 Promoter License NFT за транзакцию
            </p>
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-48 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создать NFT
            </button>
            <div className="pb-8"></div>
          </div>
        </div>
      </div>

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
            <p className="text-2xl text-p1-darkgreen">Присоединяйтесь к нам</p>
            <p className="pb-5 text-2xl text-p1-darkgreen">
              Получите NFT Национальную лицензию
            </p>
            <div className="grid grid-cols-4 gap-4">
              <div className="pt-5">
                Созданные вами NFT автоматически попадут в глобальную коллекцию
                GAA
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
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <Link
                    href={{
                      pathname: "/rulicense",
                      query: { license: "promouter" },
                    }}
                    className="w-full rounded-l-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
                  >
                    Promouter License
                  </Link>
                  <Link
                    href={{
                      pathname: "/rulicense",
                      query: { license: "national" },
                    }}
                    className="w-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
                  >
                    National License
                  </Link>
                  <Link
                    href={{
                      pathname: "/rulicense",
                      query: { license: "global" },
                    }}
                    className="w-full rounded-r-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
                  >
                    Global License
                  </Link>
                </div>
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
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-48 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создать NFT
            </button>
            <div className="pb-8"></div>
          </div>
        </div>
      </div>

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
          <div>
            <p className="text-2xl text-p1-darkgreen">Присоединяйтесь к нам</p>
            <p className="pb-5 text-2xl text-p1-darkgreen">
              Получите NFT Глобальную лицензию
            </p>
            <div className="grid grid-cols-4 gap-4">
              <div className="pt-5">
                Созданные вами NFT автоматически попадут в глобальную коллекцию
                GAA
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

                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <Link
                    href={{
                      pathname: "/rulicense",
                      query: { license: "promouter" },
                    }}
                    className="w-full rounded-l-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
                  >
                    Promouter License
                  </Link>
                  <Link
                    href={{
                      pathname: "/rulicense",
                      query: { license: "national" },
                    }}
                    className="w-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
                  >
                    National License
                  </Link>
                  <Link
                    href={{
                      pathname: "/rulicense",
                      query: { license: "global" },
                    }}
                    className="w-full rounded-r-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p1-darkgreen hover:bg-gray-100 hover:text-p1-darkgreen focus:z-10 focus:bg-p2-orange focus:text-p1-white focus:ring-2 focus:ring-p2-orange dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-p2-orange"
                  >
                    Global License
                  </Link>
                </div>
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
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-48 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создать NFT
            </button>
            <div className="pb-8"></div>
          </div>
        </div>
        <div className="pb-8"></div>
      </div>
    </div>
  );
}
