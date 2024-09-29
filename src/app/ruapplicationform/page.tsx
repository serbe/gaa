import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="pt-5 text-center text-6xl font-bold text-p1-darkgreen">
        Форма заявки
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        by Global Automotive Association
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 col-start-2 w-full rounded-3xl border-4 border-p1-darkgreen text-center text-p1-darkgreen shadow-lg">
          <div className="pt-5">
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden p-2"
              width={100}
              height={150}
              src="/Licenses/Promoter.png"
              alt="Promoter"
            />
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden p-2"
              width={100}
              height={150}
              src="/Licenses/National.png"
              alt="National"
            />
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden p-2"
              width={100}
              height={150}
              src="/Licenses/Global.png"
              alt="National"
            />

            <p className="p-2 text-2xl font-semibold text-p1-darkgreen">
              Выберите лицензии, которые вы хотите получить
            </p>
            <form className="mx-auto max-w-2xl">
        <label
          htmlFor="license"
          className="mb-2 block w-full text-sm font-medium text-p1-darkgreen dark:text-p1-white"
        >
          Select an option
        </label>
        <select
          id="license"
          className="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-p1-darkgreen focus:border-p1-cyan focus:ring-p1-cyan dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p1-cyan dark:focus:ring-p1-cyan"
        >
          <option selected>Выберите лицензию</option>
          <option value="Promoter">Лицензия Промоутер</option>
          <option value="National">Национальная лицензия</option>
          <option value="Global">Глобальная лицензия</option>
        </select>
      </form>
            <p className="px-5 text-left text-xl text-p1-darkgreen">
              Лицензия Промоутера
            </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">
              Национальная Лицензия
            </p>

            <p className="px-5 text-left text-xl text-p1-darkgreen">
              Глобальная Лицензия
            </p>

            <div className="relative px-5 py-2">
              <input
                type="text"
                id="сountry"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Страна
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="city"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Город
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="organization"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Организация
              </label>
            </div>

            <p className="px-5 text-left text-xl font-semibold text-p1-darkgreen">
              Категория продвижения:
            </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">
              Открытые колеса
            </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">
              Драгрэйсинг
            </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">Дрифт </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">
              Кузовные гонки серийных автомобилей (TCR)
            </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">Ралли </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">
              Олдтаймер
            </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">Стэнс </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">
              Спортивные автомобили
            </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">
              Раритетные автомобили
            </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">Автозвук</p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">Картинг </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">
              Симрэйсинг
            </p>

            <div className="relative px-5 py-2">
              <input
                type="text"
                id="WhatPromoteAnswer"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Ваш ответ:
              </label>
            </div>

            <p className="px-5 text-left text-xl font-semibold text-p1-darkgreen">
              Чем Вы занимаетесь?
            </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">
              Я смотрю гонки по телевизору, в Интернете
            </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">
              Я участник команды
            </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">
              Я водитель, пилот
            </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">
              Я промоутер
            </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">
              Я коллекционер автомобилей
            </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">
              Я коллекционер NFT
            </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">
              Мои дети в автоспортивной команде
            </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">
              Я спонсор
            </p>
            <p className="px-5 text-left text-xl text-p1-darkgreen">
              У меня есть бизнес по аренде автомобилей
            </p>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="WhatDoYouDoAnswer"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Ваш ответ:
              </label>
            </div>

            <div className="relative px-5 py-2">
              <input
                type="text"
                id="FIO"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                ФИО
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="NicName"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Ник-Имя
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="Birthday"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Дата рождения
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="Tag"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Хэш-Тэг
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="Skils"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Навыки/Умения
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="Telefphone number"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Номер телефона
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="email"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Адрес электронной почты
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="Reasons"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Описание причин по которым Вы хотите присоединиться к GAA
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="Site"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Интернет сайт
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="Telegram"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Telegram
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="YouTube"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                YouTube
              </label>
            </div>
            <p className="p-2 text-2xl text-p1-darkgreen">
              Генеративная коллекция
            </p>
            <h2 className="pb-2 text-2xl text-p1-darkgreen">RaceLads NFT</h2>

            <p className="pt-2 text-2xl text-p1-darkgreen">
              10.000 уникальных героев.
            </p>
            <p className="pb-2 text-2xl text-p1-darkgreen">
              Кто твой персонаж - решать тебе!
            </p>
            <button className="rounded-l-lg border-2 border-p1-darkgreen bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white">
              Исследуй NFT
            </button>
            <button className="rounded-r-lg border-2 border-p1-darkgreen bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Страница создания NFT
            </button>
            <div className="pb-8"></div>
          </div>
        </div>
      </div>
      <form className="mx-auto max-w-sm">
        <label
          htmlFor="countries"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an option
        </label>
        <select
          id="countries"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </form>
      Форма заявки Выберите лицензии, которые вы хотите получить Promouter
      License NFT National License NFT Global License NFT Страна Город
      Организация Категория продвижения Open Wheels Dragracing Drift TCR Touring
      Car Racing Rally Oldtimer Stance car Sport car Rarity car Auto Sound Car
      Carting Simracing Your answer Обязательное поле Чем Вы занимаетесь? Я
      смотрю гонки по телевизору, в Интернете. Я участник команды Я водитель,
      пилот Я промоутер Я коллекционер автомобилей Я коллекционер NFT Мои дети в
      автоспортивной команде Я спонсор У меня есть бизнес по аренде автомобилей
      Your answer Обязательное поле ФИО Иванов Иван Иванович NicName Ваше Ник
      Имя Дата рождения Дата рождения Tag Tag Навыки/Умения Навыки/Умения Номер
      телефона Адрес электронной почты email@site.com Описание причин, по
      которым вы хотите присоединиться к GAA Описание причин, по которым вы
      хотите присоединиться к GAA Дополнительная информация и ваши медиаресурсы
      по желанию Media resourses Website Url:// Telegram @ YouTube URL:// Я
      соглашаюсь с Политикой приватности и на обработку персональных данных.
      Обязательное поле Upload your foto Загрузить файл Отправить в GAA
    </div>
  );
}
