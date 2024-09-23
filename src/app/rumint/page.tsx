"use client";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState("0");

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
              Кто твой персонаж - решать тебе!{" "}
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
      
      
     
      <div className="grid grid-cols-2 gap-4">
          <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          RaceLads NFT          </div>
            <div className="p-2 text-end text-4xl font-semibold text-p1-darkgreen">
            Страница исследователя
            </div>
      </div>
      <div className="m-5 flex rounded-3xl border-4 border-p1-darkgreen shadow-lg">
        
     
        <div className="grid grid-cols-2 gap-4">
          <div className="place-content-center p-4 text-left">
                    <p className="p-2 text-xl text-p1-darkgreen">
                    Невзаимозаменяемый токен, представляющий коллекцию из 10.000 уникальных цифровых героев, вдохновленных любовью к автомобилям и запечатленных в Blockchain.
                    </p>
                    <p className="p-2 text-xl text-p1-darkgreen">
                    Коллекция, призванная внести свой вклад в развитие и популяризацию автокультуры и автоспорта.
                    </p>
                    <p className="p-2 text-xl text-p1-darkgreen">
                    Приобретая героя из коллекции ты становишься членом большого дружного сообщества!
                    </p>
                    <ul className="list-disc space-y-3 px-5 text-xl text-p1-darkgreen">
                      <li>
                      посещай автоспортивные мероприятия, выставки, лекции, вечеринки
                      </li>
                      <li>
                      участвуй в виртуальных гонках и других захватывающих онлайн событиях
                      </li>
                      <li>
                      принимай участие в ключевых голосованиях, определяющих развитие сообщества
                      </li>
                    </ul>
                    <p className="p-2 text-xl text-p1-darkgreen">
                    NFT коллекция RaceLads даст новый виток развития автокультурного сообщества и интеграции с Web3 и Blockchain.                    </p>
                  
                    <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
                    Страница создания NFT
                  </button> 
                  </div>
                  <div className="m-1 p-5">
                  <Image
                      className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                      width={130}
                      height={130}
                      src="/HeroNFT/RaceLads/RaceLads1.png"
                      alt="RaceLads1"
                    />
  
                    <Image
                      className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                      width={130}
                      height={130}
                       src="/HeroNFT/RaceLads/RaceLads2.png"
                      alt="RaceLads2"
                    />
                     <Image
                      className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                      width={130}
                      height={130}
                        src="/HeroNFT/RaceLads/RaceLads3.png"
                      alt="RaceLads3"
                    />
  
                    <Image
                      className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                      width={150}
                      height={150}
                      src="/HeroNFT/RaceLads/RaceLads4.png"
                      alt="RaceLads4"
                    />
                  
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
          RaceLads NFT          </div>
            <div className="p-2 text-end text-4xl font-semibold text-p2-orange">
          Страница создания NFT
          </div>
      </div>
      <div className="flex grid grid-cols-6 gap-4">
        <div className="col-span-4 col-start-2 w-full rounded-3xl border-4 border-p2-orange text-center text-p1-darkgreen shadow-lg">
          <div>
            <p className="text-2xl text-p1-darkgreen">
            Присоединяйтесь к нам
            </p>
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
          
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-48 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
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
             <p className="text-2xl text-p1-darkgreen">
             Drivers
             </p>
            <p className="text-xm pb-2 text-p1-darkgreen">
            Пилоты гоночных автомобилей и болидов, присоединившиеся к Web3
            </p>
              <button className="rounded-l-lg border-2 border-p1-darkgreen bg-p1-white p-2 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white">
              Исследуй NFT
            </button>
            <button className="rounded-r-lg border-2 border-p1-darkgreen bg-p1-white p-2 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создай NFT
            </button>
            </div>
            <div>
             <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/Team's members/TeamMember1.png"
              alt="TeamMember1"
            />
    <p className="text-2xl text-p1-darkgreen">
    Team's Members
             </p>
            <p className="text-xm pb-2 text-p1-darkgreen">
            Участники команд, присоединившиеся к Web3
                        </p>
                       
              <button className="rounded-l-lg border-2 border-p1-darkgreen bg-p1-white p-2 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white">
              Исследуй NFT
            </button>
            <button className="rounded-r-lg border-2 border-p1-darkgreen bg-p1-white p-2 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создай NFT
            </button>
          
            </div>

<div> 
             <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/Collectors/Collector1.png"
              alt="Collector1"
            />
             <p className="text-2xl text-p1-darkgreen">
             Collectors
                          </p>
            <p className="text-xm pb-2 text-p1-darkgreen">
            Владельцы редких, спортивных и уникальных автомобилей, присоединившиеся к Web3
                                    </p>
                        <button className="rounded-l-lg border-2 border-p1-darkgreen bg-p1-white p-2 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white">
              Исследуй NFT
            </button>
            <button className="rounded-r-lg border-2 border-p1-darkgreen bg-p1-white p-2 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создай NFT
            </button>
                        
            </div>
            <div> 
             <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/Cars/Car.png"
              alt="Car"
            />
             <p className="text-2xl text-p1-darkgreen">
             Cars
                          </p>
            <p className="text-xm pb-2 text-p1-darkgreen">
            Раритетные, уникальные и спортивные автомобили из частных коллекций                        </p>
                        <button className="rounded-l-lg border-2 border-p1-darkgreen bg-p1-white p-2 text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white">
              Исследуй NFT
            </button>
            <button className="rounded-r-lg border-2 border-p1-darkgreen bg-p1-white p-2 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создай NFT
            </button>
     </div>
      </div>


   
      {/* //Drivers */}

      <div className="grid grid-cols-2 gap-4">
          <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          Drivers NFT          </div>
            <div className="p-2 text-end text-4xl font-semibold text-p1-darkgreen">
            Страница исследователя
            </div>
      </div>
      <div className="m-5 flex rounded-3xl border-4 border-p1-darkgreen shadow-lg">
        
     
      <div className="grid grid-cols-2 gap-4">
        <div className="place-content-center p-4 text-left">
                  <p className="p-2 text-xl text-p1-darkgreen">
                  Невзаимозаменяемый токен, отражающий пилота спортивного автомобиля.
                  </p>
                  <p className="p-2 text-xl text-p1-darkgreen">
                  Каждый NFT содержит метаданные, хранящие информацию о гонщике.
                  </p>
                  <p className="p-2 text-xl text-p1-darkgreen">
                  По согласованию мы можем полностью скопировать внешность персоны.
                  </p>

                  <p className="p-2 text-xl text-p1-darkgreen">
                  Мы очень ценим вклад пилотов в развитие автоспорта и хотели бы запечатлеть каждого в единой коллекции, будь то представитель кольцевых гонок или дисциплины дрифта.
                  </p>
                  <p className="p-2 text-xl text-p1-darkgreen">
                  Предполагается, что первоначальным владельцем NFT будет сам пилот. Позже по желанию владельца токен может быть передан/продан любому человеку.                  </p>
                  
                  
                  <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
                  Страница создания NFT
                </button> 
                </div>
                <div className="m-1 p-5">
                <Image
                    className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                    src="/HeroNFT/Drivers/Driver4.png"
                    alt="Driver4"
                  />

                  <Image
                    className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                     src="/HeroNFT/Drivers/Driver3.png"
                    alt="Driver3"
                  />
                   <Image
                    className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={130}
                    height={130}
                     src="/HeroNFT/Drivers/Driver2.png"
                    alt="Driver2"
                  />

                  <Image
                    className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                    width={150}
                    height={150}
                   src="/HeroNFT/Drivers/Driver1.png"
                    alt="Driver1"
                  />
                
                </div>
               
      </div>
   
        
      

        <div className="pb-8"></div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        Способы получения Drivers NFT
      </div>
      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen p-6">
        <div className="pb-5 text-center text-xl text-p1-darkgreen">
        Только верифицированные пользователи смогут получить NFT из коллекции Drivers!
        </div>
        <div className="pb-5 text-left text-xl text-p1-darkgreen">
        Верификацию статуса пилота можно запросить у любого из лиц, владеющих хотя бы одной из NFT лицензий:
Management
National License
Promoter License        </div>

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
          Drivers NFT          </div>
            <div className="p-2 text-end text-4xl font-semibold text-p2-orange">
          Страница создания NFT
          </div>
      </div>
      <div className="m-5 rounded-3xl border-4 border-p2-orange text-center text-p1-darkgreen shadow-lg"> 
      <div className="grid grid-cols-2 gap-4">
          <div className="space-x-5 p-2 text-2xl font-semibold text-p2-orange">
         Drivers NFT  +  Реальное Фото         
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={200}
              height={200}
              src="/HeroNFT/Drivers/Driver4.png"
              alt="Driver4"
            />
                  <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={200}
              height={200}
              src="/HeroNFT/Drivers/Driver4.png"
              alt="Driver4"
            />
           
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-8 py-8 text-xl font-normal text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
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
            Созданные вами NFT автоматически попадут в глобальную коллекцию GAA
            </p>
            <p className="p-2 text-2xl font-normal font-semibold text-p1-darkgreen">
            это единый сборник мирового сообщества
            </p>
            <p className="p-5 text-2xl font-normal font-semibold text-p1-darkgreen">
            Если вы планируете раздать или продать свои NFT, вы можете сделать несколько NFT одновременно            
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
          <button className="rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-8 py-8 text-xl text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Загрузить фото Гонщика
            </button>
            <p className="pt-5 text-left text-2xl text-p1-darkgreen">
            Заполни все поля - эти метаданные будут храниться в блокчейне
            </p>
 <div className="relative px-5 py-2">
              <input
                type="text"
                id="discipline"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Дисциплина
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="organization"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="Team"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Название команды
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="full-name"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Полное Имя
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="nic-name"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Ник-Имя
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="birthday"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Дата рождения
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="Country"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Страна
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="city"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Город
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="description"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Описание
              </label>
            </div>
          <div className="pb-5"></div>
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-20 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создать NFT Гонщика
            </button>
            <div className="pb-8"></div>
          </div>
      </div>
      </div>


      {/* //Team's Members */}

      <div className="grid grid-cols-2 gap-4">
          <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          Team's Members NFT          </div>
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
                    Участники автоспортивных команд вносят огромный вклад в развитие автоспорта, поэтому мы бы хотели запечатлеть каждого из них в единой коллекции.
                    </p>
                    <p className="p-2 text-xl text-p1-darkgreen">
                    Предполагается, что первоначальным владельцем NFT будет сам член команды. Позже по желанию владельца токен может быть передан/продан любому человеку.                    
                    </p>
                    <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
                    Страница создания NFT
                  </button> 
                  </div>
                  <div className="m-1 p-5">
                  <Image
                      className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                      width={130}
                      height={130}
                      src="/HeroNFT/Team's members/TeamMember1.png"
                      alt="TeamMember1"
                    />
  
                    <Image
                      className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                      width={130}
                      height={130}
                         src="/HeroNFT/Team's members/TeamMember2.png"
                      alt="TeamMember2"
                    />
                     <Image
                      className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                      width={130}
                      height={130}
                         src="/HeroNFT/Team's members/TeamMember3.png"
                      alt="TeamMember3"
                    />
  
                    <Image
                      className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                      width={150}
                      height={150}
                       src="/HeroNFT/Team's members/TeamMember4.png"
                      alt="TeamMember4"
                    />
                  
                  </div>
                 
        </div>
     

        <div className="pb-8"></div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        Способы получения Team's members NFT
      </div>
      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen p-6">
        <div className="pb-5 text-center text-xl text-p1-darkgreen">
        Только верифицированные пользователи смогут получить NFT из коллекции Team's members!
        </div>
        <div className="pb-5 text-left text-xl text-p1-darkgreen">
        Верификацию статуса пилота можно запросить у любого из лиц, владеющих хотя бы одной из NFT лицензий:
Management
National License
Promoter License        </div>

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
          Team's members  NFT          </div>
            <div className="p-2 text-end text-4xl font-semibold text-p2-orange">
          Страница создания NFT
          </div>
      </div>
      <div className="m-5 rounded-3xl border-4 border-p2-orange text-center text-p1-darkgreen shadow-lg"> 
      <div className="grid grid-cols-2 gap-4">
          <div className="space-x-5 p-2 text-2xl font-semibold text-p2-orange">
          Team's members NFT  +  Реальное Фото         
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={200}
              height={200}
              src="/HeroNFT/Team's members/TeamMember1.png"
              alt="TeamMember1"
            />
                  <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={200}
              height={200}
              src="/HeroNFT/Team's members/TeamMember1.png"
              alt="TeamMember1"
            />
           
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-8 py-8 text-xl font-normal text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
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
            Максимальное количество: 100 Team's members NFT за транзакцию
            </p>

            <p className="p-2 text-2xl font-semibold text-p1-darkgreen">
            Созданные вами NFT автоматически попадут в глобальную коллекцию GAA
            </p>
            <p className="p-2 text-2xl font-normal font-semibold text-p1-darkgreen">
            это единый сборник мирового сообщества
            </p>
            <p className="p-5 text-2xl font-normal font-semibold text-p1-darkgreen">
            Если вы планируете раздать или продать свои NFT, вы можете сделать несколько NFT одновременно            
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
          <button className="rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-8 py-8 text-xl text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Загрузить фото Участника команды
            </button>
            <p className="pt-5 text-left text-2xl text-p1-darkgreen">
            Заполни все поля - эти метаданные будут храниться в блокчейне
            </p>
 <div className="relative px-5 py-2">
              <input
                type="text"
                id="discipline"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Дисциплина
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="organization"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="Team"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Название команды
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="full-name"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Полное Имя
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="nic-name"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Ник-Имя
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="birthday"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Дата рождения
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="Country"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Страна
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="city"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Город
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="description"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Описание
              </label>
            </div>
          <div className="pb-5"></div>
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-20 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создать NFT Участника команды
            </button>
            <div className="pb-8"></div>
          </div>
      </div>
      </div>


 
      {/* //Collectors */}

      <div className="grid grid-cols-2 gap-4">
          <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          Collectors NFT          </div>
            <div className="p-2 text-end text-4xl font-semibold text-p1-darkgreen">
            Страница исследователя
            </div>
      </div>
   
   
      <div className="m-5 flex rounded-3xl border-4 border-p1-darkgreen">
        
     
        <div className="grid grid-cols-2 gap-4">
          <div className="place-content-center p-4 text-left">
                    <p className="p-2 text-xl text-p1-darkgreen">
                    Невзаимозаменяемый токен, отражающий коллекционера спортивных, раритетных и редких автомобилей.
                    </p>
                    <p className="p-2 text-xl text-p1-darkgreen">
                    Каждый NFT содержит метаданные, хранящие информацию о персоне.
                    </p>
                    <p className="p-2 text-xl text-p1-darkgreen">
                    Мы очень ценим вклад коллекционеров в историю автокультуры и автоспорта и хотели бы запечатлеть историю каждого в единой коллекции.
                    </p>
  
                    <p className="p-2 text-xl text-p1-darkgreen">
                    Предполагается, что первоначальным владельцем NFT будет сам автоколлекционер. Позже по желанию владельца токен может быть передан/продан любому человеку.                    </p>
                 
                    <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
                    Страница создания NFT
                  </button> 
                  </div>
                  <div className="m-1 p-5">
                  <Image
                      className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                      width={130}
                      height={130}
                      src="/HeroNFT/Collectors/Collector1.png"
                      alt="Collector1"
                    />
  
                    <Image
                      className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                      width={130}
                      height={130}
                        src="/HeroNFT/Collectors/Collector2.png"
                      alt="Collector2"
                    />
                     <Image
                      className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                      width={130}
                      height={130}
                       src="/HeroNFT/Collectors/Collector3.png"
                      alt="Collector3"
                    />
  
                    <Image
                      className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                      width={150}
                      height={150}
                       src="/HeroNFT/Collectors/Collector4.png"
                      alt="Collector4"
                    />
                  
                  </div>
                 
        </div>
     

        <div className="pb-8"></div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        Способы получения Collectors NFT
      </div>
      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen p-6">
        <div className="pb-5 text-center text-xl text-p1-darkgreen">
        Только верифицированные пользователи смогут получить NFT из коллекции Collectors!
        </div>
        <div className="pb-5 text-left text-xl text-p1-darkgreen">
        Верификацию статуса пилота можно запросить у любого из лиц, владеющих хотя бы одной из NFT лицензий:
Management
National License
Promoter License        </div>

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
          Collectors NFT          </div>
            <div className="p-2 text-end text-4xl font-semibold text-p2-orange">
          Страница создания NFT
          </div>
      </div>
      <div className="m-5 rounded-3xl border-4 border-p2-orange text-center text-p1-darkgreen shadow-lg"> 
      <div className="grid grid-cols-2 gap-4">
          <div className="space-x-5 p-2 text-2xl font-semibold text-p2-orange">
          Collectors NFT  +  Реальное Фото         
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={200}
              height={200}
             src="/HeroNFT/Collectors/Collector1.png"
              alt="Collector1"
            />
                  <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={200}
              height={200}
              src="/HeroNFT/Collectors/Collector1.png"
              alt="Collector1"
            />
           
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-8 py-8 text-xl font-normal text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
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
            Созданные вами NFT автоматически попадут в глобальную коллекцию GAA
            </p>
            <p className="p-2 text-2xl font-normal font-semibold text-p1-darkgreen">
            это единый сборник мирового сообщества
            </p>
            <p className="p-5 text-2xl font-normal font-semibold text-p1-darkgreen">
            Если вы планируете раздать или продать свои NFT, вы можете сделать несколько NFT одновременно            
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
          <button className="rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-8 py-8 text-xl text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Загрузить фото Коллекционера
            </button>
            <p className="pt-5 text-left text-2xl text-p1-darkgreen">
            Заполни все поля - эти метаданные будут храниться в блокчейне
            </p>
 
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="full-name"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Полное Имя
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="nic-name"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Ник-Имя
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="birthday"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Дата рождения
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="Country"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Страна
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="city"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Город
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="description"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Описание
              </label>
            </div>
          <div className="pb-5"></div>
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-20 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создать NFT Коллекционера
            </button>
            <div className="pb-8"></div>
          </div>
      </div>
      </div>



 {/* //Cars */}


      <div className="grid grid-cols-2 gap-4">
          <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          Cars NFT          </div>
            <div className="p-2 text-end text-4xl font-semibold text-p1-darkgreen">
            Страница исследователя
            </div>
      </div>
      <div className="m-5 flex rounded-3xl border-4 border-p1-darkgreen">

        <div className="grid grid-cols-2 gap-4">
          <div className="place-content-center p-4 text-left">
                    <p className="p-2 text-xl text-p1-darkgreen">
                    Невзаимозаменяемый токен, отражающий реальный коллекционный спортивный, кастомизированный или раритетный автомобиль из частной коллекции.
                    </p>
                    <p className="p-2 text-xl text-p1-darkgreen">
                    Каждый NFT содержит метаданные, хранящие информацию о коллекционном экземпляре, его описание и характеристики.
                    </p>
                    <p className="p-2 text-xl text-p1-darkgreen">
                    При желании владельца можно добавить медиаконтент.
                    </p>

                    <p className="p-2 text-xl text-p1-darkgreen">
                    Позже по желанию владельца токен может быть передан/продан любому человеку. Например новому владельцу автомобиля.
                    </p>
                    <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
                    Страница создания NFT
                  </button>
                  </div>
                  <div className="m-1 p-5">
                  <Image
                      className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                      width={1000}
                      height={1000}
                      src="/Cars/Car.png"
                      alt="Car"
                    />
                  </div>
        </div>


        <div className="pb-8"></div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        Способы получения Car NFT
      </div>
      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen p-6">
        <div className="pb-5 text-center text-xl text-p1-darkgreen">
        Только владельцы NFT коллекций Drivers, Team's members, Collectors смогут оцифровать свои автомобили и создать Car NFT
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
          Cars NFT          </div>
            <div className="p-2 text-end text-4xl font-semibold text-p2-orange">
          Страница создания NFT
          </div>
      </div>
      <div className="m-5 rounded-3xl border-4 border-p2-orange text-center text-p1-darkgreen shadow-lg"> 
      <div className="grid grid-cols-2 gap-4">
          <div className="space-x-5 p-2 text-2xl font-semibold text-p2-orange">
          Car NFT  +  Реальное Фото
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={200}
              height={200}
              src="/Cars/Car.png"
              alt="Car"
            />
                  <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={200}
              height={200}
              src="/Cars/Car.png"
              alt="Car"
            />

            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-8 py-8 text-xl font-normal text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
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
            Максимальное количество: 100 Cars NFT за транзакцию
            </p>

            <p className="p-2 text-2xl font-semibold text-p1-darkgreen">
            Созданные вами NFT автоматически попадут в глобальную коллекцию GAA
            </p>
            <p className="p-2 text-2xl font-normal font-semibold text-p1-darkgreen">
            это единый сборник мирового сообщества
            </p>
            <p className="p-5 text-2xl font-normal font-semibold text-p1-darkgreen">
            Если вы планируете раздать или продать свои NFT, вы можете сделать несколько NFT одновременно            
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
          <button className="rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-8 py-8 text-xl text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Загрузить фото Авто
            </button>
            <p className="pt-5 text-left text-2xl text-p1-darkgreen">
            Заполни все поля - эти метаданные будут храниться в блокчейне
            </p>
 
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="CarCategory"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
            Авто Категория
            </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="Custom_Original"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Самодельный или Оригональный
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="full-name"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Полное Имя создателя/владельца
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="nic-name"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Ник-Имя
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="Birthday"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Дата рождения
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="Brand"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Марка авто
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="Model"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Модель авто
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="Year_Made"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Год создания
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="Engine"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Двигатель
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="horse_power"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
               Лошадиных сил
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="Country"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Страна
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="City"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Город
              </label>
            </div>
            <div className="relative px-5 py-2">
              <input
                type="text"
                id="description"
                className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-p1-darkgreen focus:border-p1-cyan focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-p1-cyan"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="z-8 absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform bg-p1-white px-8 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-p1-darkgreen rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-p1-cyan"
              >
                Описание
              </label>
            </div>
          <div className="pb-5"></div>
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-20 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
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
              Кто твой персонаж - решать тебе!{" "}
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


      <div className="grid grid-cols-2 gap-4">
          <div className="p-2 text-4xl font-semibold text-p1-darkgreen">
          CustomLads NFT          </div>
            <div className="p-2 text-end text-4xl font-semibold text-p1-darkgreen">
            Страница исследователя
            </div>
      </div>
      <div className="m-5 flex rounded-3xl border-4 border-p1-darkgreen shadow-lg">
        
     
        <div className="grid grid-cols-2 gap-4">
          <div className="place-content-center p-4 text-left">
                    <p className="p-2 text-xl text-p1-darkgreen">
                    Невзаимозаменяемый токен, представляющий кастомизированного героя из элементов первой генеративной коллекции RaceLads, который собран его владельцем.
                    </p>
                    <p className="p-2 text-xl text-p1-darkgreen">
                    Мы очень ценим вклад каждого неравнодушного к проекту и готовы предоставить возможность формирования героя по своим предпочтениям.
                    </p>
                    <p className="p-2 text-xl text-p1-darkgreen">
                    Мы стали свидетелями дублирования (воровства) существующих коллекций и выступаем против подобных деяний, поэтому хотим дать каждому возможность собрать своего героя легальным способом.
                    </p>
                    <p className="p-2 text-xl text-p1-darkgreen">
                    Данная коллекция будет доступна только для держателей NFT из коллекции RaceLads.
                    </p>
                    <p className="p-2 text-xl text-p1-darkgreen">
                    10 уровней доступа к редким элементам определяется наличием соответствующего количества NFT из коллекции RaceLads
                    </p>
                    <p className="p-2 text-xl text-p1-darkgreen">
                    Любой CustomLad по желанию держателя может быть передан/продан любому участнику сообщества.
                    </p>
                  
                    <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
                    Страница создания NFT
                  </button> 
                  </div>
                  <div className="m-1 p-5">
                  <Image
                      className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                      width={130}
                      height={130}
                      src="/HeroNFT/CustomLads/CustomLads1.png"
                      alt="CustomLads1"
                    />
  
                    <Image
                      className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                      width={130}
                      height={130}
                        src="/HeroNFT/CustomLads/CustomLads2.png"
                      alt="CustomLads2"
                    />
                     <Image
                      className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                      width={130}
                      height={130}
                        src="/HeroNFT/CustomLads/CustomLads3.png"
                      alt="CustomLads3"
                    />
  
                    <Image
                      className="relative inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                      width={150}
                      height={150}
                       src="/HeroNFT/CustomLads/CustomLads4.png"
                      alt="CustomLads4"
                    />
                  
                  </div>
                 
        </div>

        <div className="pb-8"></div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold text-p1-darkgreen">
        Способы получения CustomLads NFT
      </div>
      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen p-6 shadow-lg">
        <div className="pb-5 text-center text-xl">
        Любой владелец NFT из коллекции RaceLads может собрать персонажа из коллекции CustomLads
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
          CustomLads NFT          </div>
            <div className="p-2 text-end text-4xl font-semibold text-p2-orange">
          Страница создания NFT
          </div>
      </div>
      <div className="flex grid grid-cols-6 gap-4">
        <div className="col-span-4 col-start-2 w-full rounded-3xl border-4 border-p2-orange text-center text-p1-darkgreen shadow-lg">
          <div>
            <p className="text-2xl text-p1-darkgreen">
            Присоединяйтесь к нам
            </p>
            <p className="text-2xl text-p1-darkgreen">
            Получите своего героя CustomLad
            </p>
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
              width={1000}
              height={1000}
              src="/HeroNFT/CustomLads/CustomLads1.png"
              alt="CustomLads1"
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
            Максимальное количество: 10 CustomLads за транзакцию
            </p>
          
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-48 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создать NFT
            </button>
            <div className="pb-8"></div>
          </div>
        </div>
        </div>



      {/* //Награды */}
      <div className="pb-5 text-center text-6xl font-bold">Награды</div>
      <div className="pb-5 text-center text-4xl font-bold">Кубки и медали</div>
      <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
        <div className="pb-5 text-center">
          NFT награды, содержащие метаданные о мероприятии, награжденном
          спортсмене, а также медиаконтент.
        </div>
        <div className="pb-5 text-center">
          Когда присоединиться к блокчейн технологиям - решать тебе!
        </div>
        <div className="pb-5 text-center">Исследовать </div>
        <div className="pb-5 text-center">Страница создания NFT</div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        Страница исследователя Награды победителей NFT
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        by Global Automotive Association
      </div>
      <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
        <div className="pb-5 text-center">
          Невзаимозаменяемый токен (NFT награда), вручаемая Промоутером
          (Организатором) в рамках мероприятия (соревнования).
        </div>
        <div className="pb-5 text-center">
          Rewards NFT можно коллекционировать, продавать, передавать.
        </div>
        <div className="pb-5">
          Каждый NFT включен в единую коллекцию Rewards GAA, что является
          уникальным для всех наград GAA
        </div>
        <div className="pb-5">
          Токен содержит ссылки на официальные документы:
        </div>
        <ul className="list-disc px-5">
          <li>Итоговый протокол конкурса, соревнования</li>
          <li>Фото награждения</li>
          <li>Видео победы</li>
          <div className="pb-5"></div>
        </ul>
        <div className="pb-5">
          Все данные хранятся в IPFS сети и защищены от несанкционированного
          уничтожения.
        </div>
        <div className="pb-5">
          Доступ к минту токена у организатора мероприятия, держателя Promoter
          License NFT, National License NFT, Management GAA NFT.
        </div>
        <div className="pb-5">
          Данный токен может быть уничтожен владельцем смарт-контракта
          (Burnebal), то есть собственник контракта может уничтожить любой токен
          из коллекции, эта мера необходима для формирования чистоты коллекции.
        </div>
        <div className="pb-5">
          То есть категорически запрещено присоединять к NFT медиаконтент
          политического содержания, экстремистской направленности, а также любой
          иной медиаконтент не отвечающий вектору развития Проекта. Также
          запрещено присоединять данные не соответствующие действительности.
        </div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        Способы получения NFT Награды
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        Схема взаимодействия сообщества GAA
      </div>
      <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
        <div className="pb-5 text-center">
          Награды могут вручать Management GAA, National License, Promoter
          License
        </div>
        <div className="pb-5 text-center">
          Награды могут получать: Drivers, Team&apos;s members, Collectors, Cars
          и т.п. даже если нет соответствующей NFT
        </div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold">NFT Награды</div>
      <div className="pb-5 text-center text-4xl font-bold">
        Страница создания NFT
      </div>
      <div className="my-5 rounded-3xl border-4 border-orange-400 p-6">
        <div className="text-center font-bold">Присоединяйтесь к нам</div>
        <div className="pb-5 text-center font-bold">
          Созданные вами NFT автоматически попадут в глобальную коллекцию GAA
        </div>
        <div className="pb-5 text-center">
          Первая коллекция GAA из NFT Наград
        </div>
        <div className="pb-5 text-center">
          это единый сборник мирового сообщества
        </div>
        <div className="pb-5 text-center">
          Доступен только Management GAA, National License, Promoter License NFT
        </div>
        <div className="pb-5 text-center">
          Подключите свой кошелек, чтобы подтвердить лицензию NFT
        </div>
        <div className="pb-5 text-center">
          Добавить вывод картинки награды в зависимости от выбранных полей
        </div>
        <div className="pb-5 text-center">Создай NFT награду</div>
        <div className="pb-5 text-center">
          Заполните метаданные в поля, чтобы создать Reward NFT
        </div>
        <div className="pb-5 text-center">Страна</div>
        <div className="pb-5 text-center">Город</div>
        <div className="pb-5 text-center">Мероприятие</div>
        <div className="pb-5 text-center">Категория</div>
        <div className="pb-5 text-center">
          Официальное название соревнование/конкурса
        </div>
        <div className="pb-5 text-center">Вид мероприятия</div>
        <div className="pb-5 text-center">место в соревновании</div>
        <div className="pb-5 text-center">Номинация</div>
        <div className="pb-5 text-center">Вид награды</div>
        <div className="pb-5 text-center">Дата Победы</div>
        <div className="pb-5 text-center">ФИО Победителя</div>
        <div className="pb-5 text-center">Ник Имя</div>
        <div className="pb-5 text-center">Дата рождения</div>
        <div className="pb-5 text-center">Название Команды</div>
        <div className="pb-5 text-center">Хэштэг</div>
        <div className="pb-5 text-center">Геолокация мероприятия</div>
        <div className="pb-5 text-center">Описание</div>
        <div className="pb-5 text-center">
          Загрузите медиаконтент момента Победы
        </div>
        <div className="pb-5 text-center">
          Загрузите фото Победителя с наградой
        </div>
        <div className="pb-5 text-center">
          Загрузите итоговый отчет о соревновании
        </div>
        <div className="pb-5 text-center">
          Я согласен на обработку персональных данных
        </div>
        <div className="pb-5 text-center font-bold">Создать NFT Награду</div>
        <div className="pb-5 text-center font-bold"></div>
      </div>
      {/* //Лицензии */}
      <div className="pb-5 text-center text-6xl font-bold">Лицензии</div>
      <div className="pb-5 text-center text-6xl font-bold">
        NFT, дающие преференции своим держателям
      </div>
      {/* //Promoter License */}
      <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
        <div className="pb-5 text-center">Promoter License</div>
        <div className="pb-5 text-center">
          Предоставляет доступ на страницу создания NFT наград
        </div>
        <div className="pb-5 text-center">Исследовать </div>
        <div className="pb-5 text-center">Страница создания NFT</div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        Страница исследователя
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        Promoter License
      </div>
      <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
        <div className="pb-5 text-center">
          Promoter License NFT невзаимозаменяемый токен,
        </div>
        <div className="pb-5 text-center">
          предоставляется Промоутеру (Организатору) мероприятия.
        </div>
        <div className="pb-5 text-center">
          Promouter License NFT предоставляет доступ к странице сайта для минта
          Reward NFT (NFT Наград)
        </div>
        <div className="pb-5">
          При положительном решении Промоутеру (Организатору) предоставляется
          возможность минта Promoter License NFT.
        </div>
        <div className="pb-5">
          Данный токен Burnebal, то есть собственник смарт-контракта может
          уничтожить любой токен из коллекции, эта мера необходима для
          формирования чистоты коллекции.
        </div>
        <div className="pb-5">
          То есть собственник смарт-контракта вправе уничтожить NFT в случае
          нарушения держателем Promouter License NFT правил, создания NFT не
          соответствующих целям Проекта.
        </div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        Способы получения Promoter License NFT
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        Схема взаимодействия сообщества GAA
      </div>
      <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
        <div className="pb-5 text-center">
          Верификацию и удостоверение статуса National License, Promoter
          License, Global License могут осуществить Management GAA,
        </div>
        <div className="pb-5 text-center">
          Management GAA и Global License организует обшее развитие и управление
          GAA
        </div>
        <div className="pb-5 text-center">
          Promoter License организует локальное мероприятие, может включать
          разные направления
        </div>
        <div className="pb-5 text-center">
          National License организует развитие направленинаправлений на
          национальном внутреннем уровне
        </div>
        <div className="pb-5 text-center">
          Вектор развития направления решает Management GAA, Global License,
          National License
        </div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        NFT Лицензия промоутера
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        Страница создания NFT
      </div>
      <div className="my-5 rounded-3xl border-4 border-orange-400 p-6">
        <div className="text-center font-bold">Присоединяйтесь к нам</div>
        <div className="pb-5 text-center font-bold">
          Получите NFT лицензию Промоутера
        </div>
        <div className="pb-5 text-center">
          Созданные вами NFT автоматически попадут в глобальную коллекцию GAA{" "}
        </div>
        <div className="pb-5 text-center">
          это единый сборник мирового сообщества
        </div>
        <div className="pb-5 text-center">Доступно для</div>
        <div className="pb-5 text-center">Nacional Licence NFT</div>
        <div className="pb-5 text-center">Global Licence NFT</div>
        <div className="pb-5 text-center">Management GAA</div>
        <div className="pb-5 text-center">
          Подключите свой кошелек, чтобы подтвердить лицензию NFT
        </div>

        <div className="pb-5 text-center">
          Я согласен на обработку персональных данных
        </div>
        <div className="pb-5 text-center">
          Количество NFT, которое можно создать сейчас за одну транзакцию
        </div>
        <div className="pb-5 text-center">Цена создания NFT</div>
        <div className="pb-5 text-center">Цена всего:</div>
        <div className="pb-5 text-center font-bold">
          Создай NFT лицензию промоутера
        </div>
        <div className="pb-5 text-center font-bold"></div>
      </div>
      {/* //National License */}
      <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
        <div className="pb-5 text-center">National License</div>
        <div className="pb-5 text-center">
          Предоставляет доступ на страницу создания NFT наград
        </div>
        <div className="pb-5 text-center">
          Предоставляет право голоса по развитию GAA на национальном и локальном
          уровнях
        </div>
        <div className="pb-5 text-center">Исследовать </div>
        <div className="pb-5 text-center">Страница создания NFT</div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        Страница исследователя
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        National License
      </div>
      <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
        <div className="pb-5 text-center">
          National License NFT невзаимозаменяемый токен,
        </div>
        <div className="pb-5 text-center">
          предоставляется лидерам направлений
        </div>
        <div className="pb-5 text-center">
          Держателю National License NFT будет доступна страница минта Promouter
          NFT и Rewards NFT для минта и передачи организаторам и участникам
          мероприятия
        </div>
        <div className="pb-5">
          То еcть держатель National License NFT решает вопросы связанные с
          организацией и проведением награждения конкурсантов и спортсменов
          мероприятий, а именно решает кто будет создавать NFT и кто будет
          награждать конкурсантов и спортсменов
        </div>
        <div className="pb-5">
          Мы благодарны активным участникам сообщества стремящихся идти в ногу
          со временем и популяризирующие новые технологии и их продвижение,
          делающие мир лучше.
        </div>
        <div className="pb-5">
          Для получения NFT необходимо зарегистрироваться и заполнить заявку для
          рассмотрения
        </div>
        <div className="pb-5">
          При положительном решении соискателю станет доступен минт National
          License NFT
        </div>
        <div className="pb-5">
          Держатель National License NFT принимает решения о векторе развития
          сообщества локального уровня, организует проведение голосований, а
          также сам принимает участие в голосовании по вопросам развития
          сообщества на локальной территории национального уровна
        </div>

        <div className="pb-5">
          Данный токен Burnebal, то есть собственник смарт-контракта может
          уничтожить любой токен из коллекции, эта мера необходима для
          формирования чистоты коллекции.
        </div>
        <div className="pb-5">
          То есть собственник смарт-контракта вправе уничтожить NFT в случае
          нарушения держателем National License NFT правил, создания NFT не
          соответствующих целям Проекта.
        </div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        Способы получения National license NFT
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        Схема взаимодействия сообщества GAA
      </div>
      <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
        <div className="pb-5 text-center">
          Верификацию и удостоверение статуса National License, Promoter
          License, Global License могут осуществить Management GAA,
        </div>
        <div className="pb-5 text-center">
          Management GAA и Global License организует обшее развитие и управление
          GAA
        </div>
        <div className="pb-5 text-center">
          Promoter License организует локальное мероприятие, может включать
          разные направления
        </div>
        <div className="pb-5 text-center">
          National License организует развитие направленинаправлений на
          национальном внутреннем уровне
        </div>
        <div className="pb-5 text-center">
          Вектор развития направления решает Management GAA, Global License,
          National License
        </div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        NFT Национальная Лицензия
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        Страница создания NFT
      </div>
      <div className="my-5 rounded-3xl border-4 border-orange-400 p-6">
        <div className="text-center font-bold">Присоединяйтесь к нам</div>
        <div className="pb-5 text-center font-bold">
          Получите NFT Национальную лицензию
        </div>
        <div className="pb-5 text-center">
          Созданные вами NFT автоматически попадут в глобальную коллекцию GAA
        </div>
        <div className="pb-5 text-center">
          это единый сборник мирового сообщества
        </div>
        <div className="pb-5 text-center">Доступно для</div>
        <div className="pb-5 text-center">Global Licence NFT</div>
        <div className="pb-5 text-center">Management GAA</div>
        <div className="pb-5 text-center">
          Подключите свой кошелек, чтобы подтвердить лицензию NFT
        </div>

        <div className="pb-5 text-center">
          Я согласен на обработку персональных данных
        </div>
        <div className="pb-5 text-center">
          Количество NFT, которое можно создать сейчас за одну транзакцию
        </div>
        <div className="pb-5 text-center">Цена создания NFT</div>
        <div className="pb-5 text-center">Цена всего:</div>
        <div className="pb-5 text-center font-bold">
          Создай NFT Национальную лицензию
        </div>
        <div className="pb-5 text-center font-bold"></div>
      </div>
      {/* //Global License */}
      <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
        <div className="pb-5 text-center">Global License</div>
        <div className="pb-5 text-center">
          Предоставляет доступ на страницу создания NFT наград
        </div>
        <div className="pb-5 text-center">
          Предоставляет право голоса по развитию GAA на международном уровне
        </div>
        <div className="pb-5 text-center">Исследовать </div>
        <div className="pb-5 text-center">Страница создания NFT</div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        Страница исследователя
      </div>
      <div className="pb-5 text-center text-4xl font-bold">Global License</div>
      <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
        <div className="pb-5 text-center">
          Global License NFT невзаимозаменяемый токен,
        </div>
        <div className="pb-5 text-center">
          предоставляется лидерам направлений
        </div>
        <div className="pb-5 text-center">
          Держателю Global License NFT доступна страница минта Promouter NFT и
          Rewards NFT для минта и передачи организаторам и участникам
          мероприятия
        </div>
        <div className="pb-5">
          Держатель Global License NFT принимает решения о векторе развития
          сообщества и организации проведения голосований, а также сам принимает
          участие в голосовании по вопросам развития сообщества
        </div>
        <div className="pb-5">
          Мы благодарны активным участникам сообщества стремящихся идти в ногу
          со временем и популяризирующие новые технологии и их продвижение,
          делающие мир лучше.
        </div>
        <div className="pb-5">
          Для получения NFT необходимо зарегистрироваться и заполнить заявку для
          рассмотрения
        </div>
        <div className="pb-5">
          При положительном решении соискателю станет доступен минт Global
          License NFT
        </div>
        <div className="pb-5">
          Держатель Global License NFT решает вопросы связанные с организацией и
          проведением награждения конкурсантов и спортсменов мероприятий, а
          именно решает кто будет создавать NFT и кто будет награждать
          конкурсантов и спортсменов
        </div>

        <div className="pb-5">
          Данный токен Burnebal, то есть собственник смарт-контракта может
          уничтожить любой токен из коллекции, эта мера необходима для
          формирования чистоты коллекции.
        </div>
        <div className="pb-5">
          То есть собственник смарт-контракта вправе уничтожить NFT в случае
          нарушения держателем National License NFT правил, создания NFT не
          соответствующих целям Проекта.
        </div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        Способы получения Global license NFT
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        Схема взаимодействия сообщества GAA
      </div>
      <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
        <div className="pb-5 text-center">
          Верификацию и удостоверение статуса National License, Promoter
          License, Global License могут осуществить Management GAA,
        </div>
        <div className="pb-5 text-center">
          Management GAA и Global License организует обшее развитие и управление
          GAA
        </div>
        <div className="pb-5 text-center">
          Promoter License организует локальное мероприятие, может включать
          разные направления
        </div>
        <div className="pb-5 text-center">
          National License организует развитие направленинаправлений на
          национальном внутреннем уровне
        </div>
        <div className="pb-5 text-center">
          Вектор развития направления решает Management GAA, Global License,
          National License
        </div>
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        NFT Глобальная Лицензия
      </div>
      <div className="pb-5 text-center text-4xl font-bold">
        Страница создания NFT
      </div>
      <div className="my-5 rounded-3xl border-4 border-orange-400 p-6">
        <div className="text-center font-bold">Присоединяйтесь к нам</div>
        <div className="pb-5 text-center font-bold">
          Получите NFT Глобальную лицензию
        </div>
        <div className="pb-5 text-center">
          Созданные вами NFT автоматически попадут в глобальную коллекцию GAA
        </div>
        <div className="pb-5 text-center">
          это единый сборник мирового сообщества
        </div>
        <div className="pb-5 text-center">Доступно для</div>
        <div className="pb-5 text-center">Management GAA</div>
        <div className="pb-5 text-center">
          Подключите свой кошелек, чтобы подтвердить лицензию NFT
        </div>

        <div className="pb-5 text-center">
          Я согласен на обработку персональных данных
        </div>
        <div className="pb-5 text-center">
          Количество NFT, которое можно создать сейчас за одну транзакцию
        </div>
        <div className="pb-5 text-center">Цена создания NFT</div>
        <div className="pb-5 text-center">Цена всего:</div>
        <div className="pb-5 text-center font-bold">
          Создай NFT Глобальную лицензию
        </div>
        <div className="pb-5 text-center font-bold"></div>
      </div>
    </div>
  );
}
