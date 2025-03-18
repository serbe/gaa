'use client';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { JumpButton } from '@/components/jumpButton';

import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

export default function Page() {
  const jumpPoints = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
  ];

  return (
    <div className="mx-auto max-w-7xl font-serif dark:bg-p1-deepdarkgreen">
      <JumpButton points={jumpPoints} />

      <div className="flex flex-row">
        <div className="basis-1/6 text-center opacity-85 duration-500 ease-in-out hover:scale-105 hover:opacity-100">
          <Link
            href="/aboutmemberbenefit"
            className="mx-auto justify-center rounded-3xl hover:drop-shadow-2xl"
          >
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/AboutHero/Benefit.png"
              alt="Benefit"
            />
          </Link>
        </div>
        <div className="basis-1/6 text-center opacity-85 duration-500 hover:scale-105 hover:opacity-100">
          <Link
            href="/aboutterms"
            className="mx-auto justify-center rounded-3xl hover:drop-shadow-2xl"
          >
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/AboutHero/Terms.png"
              alt="Terms"
            />
          </Link>
        </div>
        <div className="basis-1/6 text-center opacity-85 duration-500 hover:scale-105 hover:opacity-100">
          <Link
            href="/aboutpolicy"
            className="mx-auto justify-center rounded-3xl hover:drop-shadow-2xl"
          >
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/AboutHero/Policy.png"
              alt="Policy"
            />
          </Link>
        </div>
        <div className="basis-1/6 text-center opacity-85 duration-500 hover:scale-105 hover:opacity-100">
          <Link
            href="/aboutweb3"
            className="mx-auto justify-center rounded-3xl hover:drop-shadow-2xl"
          >
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/AboutHero/Web3.png"
              alt="Web3"
            />
          </Link>
        </div>
        <div className="basis-1/6 text-center opacity-85 duration-500 hover:scale-105 hover:opacity-100">
          <Link href="/team" className="mx-auto justify-center rounded-3xl hover:drop-shadow-2xl">
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/AboutHero/Team.png"
              alt="Team"
            />
          </Link>
        </div>
        <div className="basis-1/6 text-center opacity-85 duration-500 hover:scale-105 hover:opacity-100">
          <Link
            href="/contacts"
            className="mx-auto justify-center rounded-3xl hover:drop-shadow-2xl"
          >
            <Image
              className="relative mb-4 inline-block w-max rounded-3xl"
              width={1000}
              height={1000}
              src="/AboutHero/Contacts.png"
              alt="Contacts"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-row justify-center p-2">
        <div className="text-p1-darkgreen md:basis-4/6">
          <div className="rounded-3xl">
            <div className="px-2 text-base text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              Global Automotive Association (GAA) – это революционный блокчейн-проект, который
              объединяет всех любителей автоспорта и автомобилей в сильное и активное сообщество,
              нацеленное на популяризацию автомобильной культуры.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center p-2">
        <div className="md:basis-5">
          <div
            id="1"
            className="p-2 text-center text-xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-3xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan"
          >
            Наши амбициозные планы
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <div className="my-5 text-p1-darkgreen md:basis-4/6">
          <div
            id="2"
            className="space-y-4 rounded-3xl border-p1-darkgreen p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan"
          >
            <p className="pt-2 text-center text-xl font-bold md:text-2xl">
              Создание активного сообщества
            </p>
            <p>
              Объединяем фанатов автоспорта и автомобильной культуры в соцсетях и мессенджерах
              (Telegram, Discord, X) для общения, новых знакомств и обмена опытом.
            </p>
            <p className="pt-2 text-center text-xl font-bold md:text-2xl">Партнерские отношения</p>
            <p>
              Устанавливаем связи с организаторами и участниками крупнейших автоспортивных событий
              (дрифт, кольцевые гонки, драг рейсинг, симрейсинг, автовыставки) для реализации
              совместных проектов.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center p-2 md:justify-start">
        <div className="md:basis-1/6"></div>
        <div className="md:basis-2/6">
          <div>
            <div
              id="3"
              className="rounded-3xl border-p1-darkgreen p-6 text-center text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan"
            >
              <p className="text-2xl font-bold">10,000</p>
              <p>уникальных NFT</p>
              <p>в коллекции</p>
              <p className="text-2xl font-bold">RaceLads</p>
            </div>
          </div>
        </div>
        <div className="md:basis-1/6"></div>
      </div>

      <div className="flex flex-row justify-center p-2 md:justify-end">
        <div className="md:basis-1/6"></div>
        <div className="md:basis-2/6"></div>
        <div className="basis-2/6 text-p1-darkgreen">
          <div>
            <div className="rounded-3xl border-p1-darkgreen p-6 text-center text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>первая коллекция</p>
              <p className="text-2xl font-bold">Глобальной Автомобильной Ассоциации</p>
            </div>
          </div>
        </div>
        <div className="md:basis-1/6"></div>
      </div>

      <div className="flex flex-row justify-center p-2">
        <div className="md:basis-1/5"></div>
        <div className="md:basis-3/5">
          <div
            id="4"
            className="pt-5 text-center text-4xl font-bold text-p1-darkgreen drop-shadow-2xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan"
          >
            RaceLads NFT
          </div>
        </div>
        <div className="md:basis-1/5"></div>
      </div>

      <div className="flex flex-row justify-center p-2">
        <div className="md:basis-1/6"></div>
        <div className="text-p1-darkgreen md:basis-4/6">
          <div>
            <div className="my-5 space-y-4 rounded-3xl border-p1-darkgreen p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="text-left text-base md:text-xl">
                Выпускаем первую NFT коллекцию, состоящую из 10.000 эксклюзивных и уникальных
                цифровых художественных работ, вдохновленных самыми захватывающими дисциплинами
                автогонок.
              </p>
              <p className="text-left text-base md:text-xl">
                Каждый «RaceLad» в нашей коллекции – это не просто цифровое изображение, а
                уникальный персонаж, обладающий различными особенностями и запечатленный в
                блокчейне.
              </p>
              <p className="text-left text-base md:text-xl">
                Владение NFT из нашей коллекции в будущем откроет вам доступ в уникальный мир драйва
                в Web3:
              </p>
              <ul className="list-disc space-y-3 px-5">
                <li className="text-left text-base md:text-xl">
                  участвуйте в виртуальных гонках и других захватывающих онлайн-событиях.
                </li>
                <li className="text-left text-base md:text-xl">
                  принимайте участие в ключевых голосованиях, влияющих на развитие нашего
                  сообщества.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:basis-1/6"></div>
      </div>

      <div className="md:pt-2" id="5"></div>
      <div className="w-full snap-x overflow-x-auto rounded-3xl md:w-4/5 md:place-self-center dark:border-p1-darkgreen dark:hover:border-p1-green">
        <Swiper
          autoplay={{
            delay: 5500,
            pauseOnMouseEnter: true,
          }}
          direction={'horizontal'}
          spaceBetween={0}
          slidesPerView={4}
          mousewheel={true}
          modules={[Autoplay, Mousewheel, Navigation, Pagination]}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="mySwyper"
        >
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/Drivers/Driver4.png"
                alt="Driver4"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/Drivers/Driver3.png"
                alt="Driver3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/Drivers/Driver2.png"
                alt="Driver2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/Drivers/Driver1.png"
                alt="Driver1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/CustomLads/CustomLads11.png"
                alt="CustomLads1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/CustomLads/CustomLads22.png"
                alt="CustomLads2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/CustomLads/CustomLads33.png"
                alt="CustomLads3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/CustomLads/CustomLads44.png"
                alt="CustomLads4"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/Collectors/Collector1.png"
                alt="Collector1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/Collectors/Collector2.png"
                alt="Collector2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/Collectors/Collector3.png"
                alt="Collector3"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full snap-center shadow-lg duration-500 hover:z-50 hover:scale-150"
                width={130}
                height={130}
                src="/HeroNFT/Collectors/Collector4.png"
                alt="Collector4"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="pb-2 md:pb-5"></div>
      </div>

      <div className="flex flex-row justify-center p-2">
        <div className="md:basis-1/5"></div>
        <div className="md:basis-3/5">
          <div
            id="6"
            className="text-center text-2xl font-bold text-p1-darkgreen drop-shadow-2xl md:pt-8 md:text-3xl dark:text-p1-green dark:hover:text-p1-cyan"
          >
            <p>Мы планируем</p>
            <p>будущее</p>
          </div>
        </div>
        <div className="md:basis-1/5"></div>
      </div>

      <div className="flex flex-row justify-center p-2">
        <div className="md:basis-1/6"></div>
        <div className="text-p1-darkgreen md:basis-4/6">
          <div>
            <div className="my-5 space-y-2 rounded-3xl border-p1-darkgreen p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="text-center text-xl font-bold md:text-2xl">
                В наших планах также выпуск и других уникальных коллекций для:
              </p>
              <ul className="list-disc space-y-3 px-5">
                <li className="text-left text-base md:text-xl">пилотов</li>
                <li className="text-left text-base md:text-xl">
                  направлений автоспорта (дрифт, кольцевые гонки, драг рейсинг и т.д.)
                </li>
                <li className="text-left text-base md:text-xl">
                  коллекционеров редких автомобилей с возможностью цифровизации своего автопарка и
                  создания NFT в единой глобальной коллекции
                </li>
                <li className="text-left text-base md:text-xl">
                  награждения победителей и призеров (кубки, медали)
                </li>
                <li className="text-left text-base md:text-xl">выдачи цифровых лицензий</li>
              </ul>
              <p className="text-center text-2xl font-bold">
                Уникальность коллекций заключается в:
              </p>
              <ul className="list-disc space-y-3 px-5">
                <li className="text-left text-base md:text-xl">
                  ограниченном тираже уникальных объектов цифрового искусства
                </li>
                <li className="text-left text-base md:text-xl">
                  принадлежности коллекции к Проекту автоспортивного и автокультурного сообщества
                </li>
                <li className="text-left text-base md:text-xl">
                  ограниченном перечне коллекций цифрового исскусства
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:basis-1/6"></div>
      </div>

      <div className="flex flex-row justify-center p-2">
        <div className="md:basis-1/5"></div>
        <div className="md:basis-3/5">
          <div
            id="7"
            className="pt-5 text-center text-3xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-3xl dark:text-p1-green dark:hover:text-p1-cyan"
          >
            <p>Сервисы и Награды</p>
          </div>
        </div>
        <div className="md:basis-1/5"></div>
      </div>

      <div className="flex flex-row justify-center p-2">
        <div className="md:basis-1/6"></div>
        <div className="text-p1-darkgreen md:basis-4/6">
          <div>
            <div className="space-y-4 rounded-3xl border-p1-darkgreen p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="text-center text-xl font-bold md:text-2xl">NFT Сервисы</p>
              <p className="text-left text-base md:text-xl">
                Создаем сервис цифровизации физических объектов в NFT и объединяем NFT в единые
                коллекции цифрового исскусства.
              </p>
              <p className="text-left text-base md:text-xl">
                Cоздавайте, дарите, продавайте NFT различных категорий:
              </p>
              <ul className="list-disc space-y-3 px-5">
                <li className="text-left text-base md:text-xl">Пилоты</li>
                <li className="text-left text-base md:text-xl">
                  Члены команд (дрифт, драг рейсинг и т.д.)
                </li>
                <li className="text-left text-base md:text-xl">Коллекционеры автомобилей</li>
                <li className="text-left text-base md:text-xl">
                  Раритетные, спортивные и кастомизированные автомобили
                </li>
              </ul>
              <p className="text-left text-base md:text-xl">
                Единая глобальная коллекция автоспортивного и автокультурного сообщества,
                создаваемая самим сообществом.
              </p>

              <p className="text-left text-base md:text-xl">
                Также мы предоставим командам и пилотам возможность создания уникальных
                персонализированных NFT для последующего распределения по своему усмотрению
                (розыгрыши, продажа) между своими фанатами.
              </p>
              <p className="text-left text-base md:text-xl">
                Таким образом команды и пилоты смогут привлекать инвестиции (в случае продажи) или
                поощрять своих поклонников (в случае безвозмездной передачи) через технологию NFT.
              </p>
              <p className="text-left text-base md:text-xl">
                Фанаты в свою очередь будут иметь возможность приобщиться к своей любимой команде
                или пилоту через владение NFT токеном.
              </p>
            </div>

            <div
              id="8"
              className="my-5 space-y-4 rounded-3xl border-p1-darkgreen p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan"
            >
              <p className="text-center text-xl font-bold drop-shadow-2xl md:text-2xl">
                NFT Награды
              </p>
              <p className="text-left text-base md:text-xl">
                Через функционал сайта мы предоставим организаторам (промоутерам) возможность выхода
                на новый уровень организации мероприятий путем создания уникальных NFT наград для
                победителей и участников.
              </p>
              <p className="text-left text-base md:text-xl">
                Все награды будут находиться в единой NFT коллекции автоспортивного и
                автокультурного сообщества (AWARDS NFT).
              </p>
              <p className="text-left text-base md:text-xl">
                Также для развития проекта мы предоставим лидерам направлений цифровые NFT лицензии,
                расширяющие возможности и предоставляющие расширенный функционал взаимодействия с
                сайтом.
              </p>
            </div>
          </div>
        </div>
        <div className="md:basis-1/6"></div>
      </div>
      <div id="9" className="md:pt-2"></div>
      <div className="w-full snap-x overflow-x-auto rounded-3xl md:w-4/5 md:place-self-center dark:border-p1-darkgreen dark:hover:border-p1-green">
        <Swiper
          autoplay={{
            delay: 5500,
            pauseOnMouseEnter: true,
          }}
          direction={'horizontal'}
          spaceBetween={0}
          slidesPerView={4}
          mousewheel={true}
          modules={[Autoplay, Mousewheel, Navigation, Pagination]}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="mySwyper"
        >
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full scale-75 snap-center duration-500 hover:z-10 hover:scale-100"
                width={130}
                height={130}
                src="/RewardsSite/DragRacingRewardSite.png"
                alt="DragRacingRewardSite"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full scale-75 snap-center duration-500 hover:z-10 hover:scale-100"
                width={130}
                height={130}
                src="/RewardsSite/DriftRewardSite.png"
                alt="DriftRewardSite"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full scale-75 snap-center duration-500 hover:z-10 hover:scale-100"
                width={130}
                height={130}
                src="/RewardsSite/OldtimerRewardSite.png"
                alt="OldtimerRewardSite"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full scale-75 snap-center duration-500 hover:z-10 hover:scale-100"
                width={130}
                height={130}
                src="/RewardsSite/OpenWheelsRewardSite.png"
                alt="OpenWheelsRewardSite"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full scale-75 snap-center duration-500 hover:z-10 hover:scale-100"
                width={130}
                height={130}
                src="/RewardsSite/RallyRewardSite.png"
                alt="RallyRewardSite"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full scale-75 snap-center duration-500 hover:z-10 hover:scale-100"
                width={130}
                height={130}
                src="/RewardsSite/SimRacingRewardSite.png"
                alt="SimRacingRewardSite"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full scale-75 snap-center duration-500 hover:z-10 hover:scale-100"
                width={130}
                height={130}
                src="/RewardsSite/SoundCarRewardSite.png"
                alt="SoundCarRewardSite"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full scale-75 snap-center duration-500 hover:z-10 hover:scale-100"
                width={130}
                height={130}
                src="/RewardsSite/StanceRewardSite.png"
                alt="StanceRewardSite"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image
                className="relative inline-block w-full scale-75 snap-center duration-500 hover:z-10 hover:scale-100"
                width={130}
                height={130}
                src="/RewardsSite/TCRRewardSite.png"
                alt="TCRRewardSite"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="pb-2 md:pb-5"></div>
      </div>
      <div className="flex flex-row justify-center p-2">
        <div className="md:basis-3/5">
          <div
            id="10"
            className="text-center text-xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-3xl dark:text-p1-green dark:hover:text-p1-cyan"
          >
            <p>Какие возможности открывает владение</p>
            <p>NFT из коллекции RaceLads?</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center p-2">
        <div className="text-p1-darkgreen md:basis-4/6">
          <div>
            <div className="my-5 space-y-4 rounded-3xl border-p1-darkgreen p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="text-center text-xl font-bold drop-shadow-2xl md:text-2xl">
                Уникальные привилегии
              </p>
              <p className="text-left text-base md:text-xl">
                Предоставляем нашим членам эксклюзивные бонусы:
              </p>
              <ul className="list-disc space-y-3 px-5">
                <li className="text-left text-base md:text-xl">билеты на мероприятия</li>
                <li className="text-left text-base md:text-xl">
                  участие в автограф и фото сессиях
                </li>
                <li className="text-left text-base md:text-xl">участие в лекциях и экскурсиях</li>
                <li className="text-left text-base md:text-xl">розыгрыши NFT</li>
                <li className="text-left text-base md:text-xl">многое другое</li>
              </ul>
            </div>

            <div
              id="11"
              className="my-5 space-y-4 rounded-3xl border-p1-darkgreen p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan"
            >
              <p className="text-center text-xl font-bold drop-shadow-2xl md:text-2xl">
                Собственные мероприятия
              </p>
              <p className="text-left text-base md:text-xl">
                Организуем награждения на таких мероприятиях, как дрифт, гонки, автовыставки.
              </p>
              <p className="text-left text-base md:text-xl">
                Планируем встречи (сходки) под брендом GAA с участием спортсменов и лидеров мнений
                (блогеров).
              </p>
              <p className="text-left text-base md:text-xl">
                Члены нашего сообщества смогут подавать заявки и принимать участие в голосованиях по
                выбору формата мероприятий, судей, участников и прочим вопросам.
              </p>
            </div>

            <div
              id="12"
              className="my-5 space-y-4 rounded-3xl border-p1-darkgreen p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan"
            >
              <p className="text-center text-2xl font-bold">Децентрализованный портал</p>
              <p className="text-left text-base md:text-xl">Запускаем сайт, где каждый сможет:</p>
              <ul className="list-disc space-y-3 px-5">
                <li className="text-left text-base md:text-xl">быть в курсе последних новостей</li>
                <li className="text-left text-base md:text-xl">
                  ознакамливаться с результатами мероприятий
                </li>
                <li className="text-left text-base md:text-xl">принимать участие в голосованиях</li>
                <li className="text-left text-base md:text-xl">
                  приобретать NFT из наших коллекций
                </li>
                <li className="text-left text-base md:text-xl">
                  наслаждаться фото и видео материалами
                </li>
                <li className="text-left text-base md:text-xl">загружать свой контент</li>
                <li className="text-left text-base md:text-xl">реализовывать свои возможности</li>
                <li className="text-left text-base md:text-xl">многое другое</li>
              </ul>
            </div>

            <div
              id="13"
              className="space-y-4 rounded-3xl border-p1-darkgreen p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-5 md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan"
            >
              <p className="text-center text-2xl font-bold">Выход на международный уровень</p>
              <p className="text-left text-base md:text-xl">
                Мы также планируем расширять наше присутствие на международной арене для того, чтобы
                объединить автолюбителей по всему миру, стирая границы и расстояния.
              </p>
              <p className="text-left text-base md:text-xl">
                Создание ежегодной круглогодичной международной серии и стандарта мероприятий для
                автоспортивного и автокультурного сообщества.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 text-xl">
        <div className="flex flex-row justify-center">
          <div className="md:basis-3/5">
            <div
              id="14"
              className="p-2 text-center text-3xl font-bold text-p1-darkgreen drop-shadow-2xl dark:text-p1-green dark:hover:text-p1-cyan"
            >
              Почему Web 3?
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center px-2">
          <div className="text-p1-darkgreen md:basis-4/6">
            <div>
              <div className="space-y-4 rounded-3xl border-p1-darkgreen p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-5 md:border-4 md:p-6 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
                <p className="text-left text-base md:text-xl">
                  Реализация глобальной идеи Web3 на сегодняшний день до сих пор находится на ранней
                  стадии и еще не получила должного внимания в обществе.
                </p>
                <p className="text-left text-base md:text-xl">
                  Мы в свою очередь видим перспективу реализации социально значимого проекта,
                  позволяющего объединить людей по общим интересам, используя технологии Blockchain
                  и NFT.
                </p>
                <p className="text-left text-base md:text-xl">
                  Именно технология Blockchain способна обеспечить децентрализованное сообщество,
                  управляемое самими людьми.
                </p>
                <p className="text-left text-base md:text-xl">
                  Blockchain и NFT - технологии свободы, которые открывают безграничные возможности
                  и позволяют вернуть власть людям, стирая границы между городами и странами и
                  объединяя единомышленников.
                </p>
              </div>

              <div
                id="15"
                className="space-y-4 rounded-3xl border-p1-darkgreen p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan"
              >
                <p className="text-center">
                  Присоединяйся к GAA и стань частью глобального движения, которое создает новые
                  правила справедливой игры в мире автоспорта и автокультуры!
                </p>
              </div>

              <div className="flex flex-row justify-center">
                <div className="basis-2/5">
                  <Image
                    className="relative mb-4 inline-block"
                    width={250}
                    height={250}
                    src="/Hero/cups.png"
                    alt="cups"
                  />
                </div>
                <div className="flex flex-row justify-end">
                  <div className="basis-5/5">
                    <Image
                      className="relative inline-block w-full items-end"
                      width={1000}
                      height={1000}
                      src="/Hero/hero1.png"
                      alt="hero1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
