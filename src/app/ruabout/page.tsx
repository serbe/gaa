'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl font-serif">
      <div className="flex flex-row">
        <div className="basis-1/6 text-center opacity-85 duration-500 hover:scale-105 hover:opacity-100">
          <Link
            href={{
              pathname: '/ruaboutmemberbenefit',
              query: { ruabout: 'ruaboutmemberbenefit' },
            }}
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
            href={{
              pathname: '/ruaboutterms',
              query: { ruabout: 'ruaboutterms' },
            }}
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
            href={{
              pathname: '/ruaboutpolicy',
              query: { ruabout: 'ruaboutpolicy' },
            }}
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
            href={{
              pathname: '/ruaboutweb3',
              query: { ruabout: 'ruaboutweb3' },
            }}
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
          <Link
            href={{
              pathname: '/ruteam',
              query: { ruabout: 'ruteam' },
            }}
            className="mx-auto justify-center rounded-3xl hover:drop-shadow-2xl"
          >
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
            href={{
              pathname: '/rucontacts',
              query: { ruabout: 'rucontacts' },
            }}
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
        <div className="md:basis-5/5">
          <div className="p-2 text-center text-xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-3xl">
            О Нас
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center p-2">
        <div className="text-p1-darkgreen md:basis-4/6">
          <div className="rounded-3xl">
            <div className="px-2 text-base text-p1-darkgreen md:text-xl">
              Global Automotive Association (GAA) – это революционный блокчейн-проект, который
              объединяет всех любителей автоспорта и автомобилей в сильное и активное сообщество,
              нацеленное на популяризацию автомобильной культуры.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <div className="mb-5 mt-5 text-p1-darkgreen md:basis-4/6">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 p-6 text-left text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:text-xl">
            <p className="text-center text-xl font-bold md:text-2xl">Наши амбициозные цели:</p>
            <p>Создание активного сообщества:</p>
            <p>
              Объединяем фанатов автоспорта и автомобильной культуры в соцсетях и мессенджерах
              (Telegram, Discord, X) для общения, новых знакомств и обмена опытом.
            </p>
            <p>Организация и проведение крупных международных автоспортивных мероприятий.</p>
            <p className="pt-2 text-center text-xl font-bold md:text-2xl">Партнерские отношения:</p>
            <p>
              Устанавливаем связи с организаторами и участниками крупнейших автоспортивных событий
              (дрифт, кольцевые гонки, драг рейсинг, симрейсинг, автовыставки) для совместных
              проектов и акций.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center p-2 md:justify-start">
        <div className="md:basis-1/6"></div>
        <div className="md:basis-2/6">
          <div>
            <div className="rounded-3xl border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4">
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
            <div className="rounded-3xl border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4">
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
          <div className="pt-5 text-center text-6xl font-bold text-p1-darkgreen drop-shadow-2xl">
            RaceLads
          </div>
        </div>
        <div className="md:basis-1/5"></div>
      </div>

      <div className="flex flex-row justify-center p-2">
        <div className="md:basis-1/6"></div>
        <div className="text-p1-darkgreen md:basis-4/6">
          <div>
            <div className="my-5 space-y-4 rounded-3xl border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4">
              <p className="text-center text-2xl font-bold text-p1-darkgreen">
                NFT коллекция «RaceLads»
              </p>
              <p className="text-left text-base text-p1-darkgreen md:text-xl">
                Выпускаем первую NFT коллекцию, состоящую из 10.000 эксклюзивных и уникальных
                цифровых художественных работ, вдохновленных самыми захватывающими дисциплинами
                автогонок.
              </p>
              <p className="text-left text-base text-p1-darkgreen md:text-xl">
                Каждый «RaceLad» в нашей коллекции – это не просто цифровое изображение, а
                уникальный персонаж, обладающий различными особенностями и запечатленный в
                блокчейне.
              </p>
              <p className="text-left text-base text-p1-darkgreen md:text-xl">
                Владение NFT из нашей коллекции в будущем откроет вам доступ в уникальный мир драйва
                на Web3:
              </p>
              <ul className="list-disc space-y-3 px-5 text-p1-darkgreen">
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  участвуйте в виртуальных гонках и других захватывающих онлайн-событиях.
                </li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  принимайте участие в ключевых голосованиях, влияющих на развитие нашего
                  сообщества.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:basis-1/6"></div>
      </div>

      <div className="md:place-self-senter rounden-3xl w-fulloverflow-x-auto snap-x pb-5 pt-5 md:h-full">
        <Swiper
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
          direction={'horizontal'}
          spaceBetween={1}
          slidesPerView={2.5}
          mousewheel={true}
          modules={[Autoplay, Mousewheel, Navigation, Pagination]}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="mySwyper h-full w-full md:w-3/5"
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
                src="/HeroNFT/CustomLads/CustomLads1.png"
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
                src="/HeroNFT/CustomLads/CustomLads2.png"
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
                src="/HeroNFT/CustomLads/CustomLads3.png"
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
                src="/HeroNFT/CustomLads/CustomLads4.png"
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
          <div className="text-center text-2xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-3xl">
            Мы планируем
          </div>
          <div className="text-center text-2xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-3xl">
            будущее
          </div>
        </div>
        <div className="md:basis-1/5"></div>
      </div>

      <div className="flex flex-row justify-center p-2">
        <div className="md:basis-1/6"></div>
        <div className="text-p1-darkgreen md:basis-4/6">
          <div>
            <div className="my-5 space-y-2 rounded-3xl border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4">
              <p className="text-center text-xl font-bold text-p1-darkgreen md:text-2xl">
                В наших планах также выпуск и других уникальных коллекций для:
              </p>
              <ul className="list-disc space-y-3 px-5 text-p1-darkgreen">
                <li className="text-left text-base text-p1-darkgreen md:text-xl">пилотов</li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  направлений автоспорта (дрифт, кольцевые гонки, драг рейсинг и т.д.)
                </li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  коллекционеров редких автомобилей с возможностью цифровизации своего автопарка и
                  создания NFT в единой глобальной коллекции
                </li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  награждения победителей и призеров (кубки, медали)
                </li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  выдачи цифровых лицензий
                </li>
              </ul>
              <p className="text-center text-2xl font-bold text-p1-darkgreen">
                Уникальность коллекций заключается в
              </p>
              <ul className="list-disc space-y-3 px-5 text-p1-darkgreen">
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  ограниченном тираже уникальных объектов цифрового искусства
                </li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  принадлежности коллекции к Проекту автоспортивного и автокультурного сообщества
                </li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  ограниченным перечнем коллекций цифрового исскусства
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
          <div className="pt-5 text-center text-3xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-4xl">
            NFT
          </div>
          <div className="pb-5 text-center text-3xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-4xl">
            Сервисы и Награды
          </div>
        </div>
        <div className="md:basis-1/5"></div>
      </div>

      <div className="flex flex-row justify-center p-2">
        <div className="md:basis-1/6"></div>
        <div className="text-p1-darkgreen md:basis-4/6">
          <div>
            <div className="space-y-4 rounded-3xl border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4">
              <p className="text-center text-xl font-bold text-p1-darkgreen md:text-2xl">
                NFT Сервисы
              </p>
              <p className="text-left text-base text-p1-darkgreen md:text-xl">
                Создание сервиса цифровизации физических объектов в NFT и объединение NFT в единые
                коллекции цифрового исскусства:
              </p>
              <p className="text-left text-base text-p1-darkgreen md:text-xl">
                Cоздавайте, дарите, продавайте NFT по направлениям:
              </p>
              <ul className="list-disc space-y-3 px-5 text-p1-darkgreen">
                <li className="text-left text-base text-p1-darkgreen md:text-xl">Пилоты</li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  Участники команд (дрифт, драг рейсинг и т.д.)
                </li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  Коллекционеры редких автомобилей
                </li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  Раритетные, спортивные и кастомизированные автомобили
                </li>
              </ul>
              <p className="text-left text-base text-p1-darkgreen md:text-xl">
                Единая глобальная коллекция автоспортивного и автокультурного сообщества создаваемая
                самим сообществом
              </p>
            </div>

            <div className="my-5 space-y-4 rounded-3xl border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4">
              <p className="text-center text-xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-3xl">
                NFT Награды
              </p>
              <p className="text-left text-base text-p1-darkgreen md:text-xl">
                На сайте мы предоставляем организаторам мероприятий возможность создать уникальные
                NFT награды для победителей и участников мероприятий и выход на новый уровень
                организации проведения мероприятий
              </p>
              <p className="text-left text-base text-p1-darkgreen md:text-xl">
                Все награды будут в единой коллекции автоспортивного и автокультурного сообщества
                NFT Rewards
              </p>
              <p className="text-left text-base text-p1-darkgreen md:text-xl">
                Для развития Проекта предоставляем лидерам направлений цифровые NFT лицензии,
                расширяющие возможности и предоставляющие дополнительные полномочия использования
                сайта.
              </p>
            </div>
          </div>
        </div>
        <div className="md:basis-1/6"></div>
      </div>

      <div className="md:place-self-senter rounden-3xl w-fulloverflow-x-auto snap-x pb-5 pt-5 md:h-full">
        <Swiper
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
          direction={'horizontal'}
          spaceBetween={1}
          slidesPerView={2.5}
          mousewheel={true}
          modules={[Autoplay, Mousewheel, Navigation, Pagination]}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="mySwyper h-full w-full md:w-3/5"
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
          <div className="text-center text-xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-3xl">
            Выгода владельцу
          </div>
          <div className="text-center text-xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-3xl">
            NFT RaceLad
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center p-2">
        <div className="text-p1-darkgreen md:basis-4/6">
          <div>
            <div className="my-5 space-y-4 rounded-3xl border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4">
              <p className="text-center text-xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-2xl">
                Уникальные привилегии
              </p>
              <p className="text-left text-base text-p1-darkgreen md:text-xl">
                Предоставляем нашим членам эксклюзивные бонусы:
              </p>
              <ul className="list-disc space-y-3 px-5 text-p1-darkgreen">
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  билеты на мероприятия
                </li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  участие в автограф и фото сессиях
                </li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  участие в лекциях и экскурсиях
                </li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">розыгрыши NFT</li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">многое другое</li>
              </ul>
            </div>

            <div className="my-5 space-y-2 rounded-3xl border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4">
              <p className="text-center text-xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-2xl">
                Собственные мероприятия
              </p>
              <p className="text-left text-base text-p1-darkgreen md:text-xl">
                Организуем награждения на таких мероприятиях, как дрифт, гонки, автовыставки,
                Планируем вечеринки под брендом GAA с участием спортсменов и лидеров мнений
                (блогеров).
              </p>
              <p className="text-left text-base text-p1-darkgreen md:text-xl">
                Члены нашего сообщества смогут подавать заявки и принимать участие в голосованиях по
                выбору формата мероприятий, судей, участников и прочим вопросам.
              </p>
            </div>

            <div className="my-5 space-y-2 rounded-3xl border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4">
              <p className="text-center text-2xl font-bold text-p1-darkgreen">
                Децентрализованный портал
              </p>
              <p className="text-left text-base text-p1-darkgreen md:text-xl">
                Разрабатываем сайт, который будет являться уникальным порталом, где каждый сможет:
              </p>
              <ul className="list-disc space-y-3 px-5 text-p1-darkgreen">
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  быть в курсе последних новостей
                </li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  ознакамливаться с результатами мероприятий
                </li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  принимать участие в голосованиях
                </li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  приобретать NFT из наших коллекций
                </li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  наслаждаться фото и видео материалами
                </li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  загружать свой контент
                </li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">
                  реализовывать свои возможности
                </li>
                <li className="text-left text-base text-p1-darkgreen md:text-xl">многое другое</li>
              </ul>
            </div>

            <div className="space-y-4 rounded-3xl border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-5 md:border-4">
              <p className="text-center text-2xl font-bold text-p1-darkgreen">
                Выход на международный уровень
              </p>
              <p className="text-left text-base text-p1-darkgreen md:text-xl">
                Расширяем наше присутствие на международной арене, чтобы объединить автолюбителей по
                всему миру, стирая границы и расстояния.
              </p>
              <p className="text-left text-base text-p1-darkgreen md:text-xl">
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
            <div className="p-2 text-center text-3xl font-bold text-p1-darkgreen drop-shadow-2xl">
              Web 3
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center px-2">
          <div className="text-p1-darkgreen md:basis-4/6">
            <div>
              <div className="space-y-2 rounded-3xl border-p1-darkgreen p-2 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-5 md:border-4 md:p-6">
                <p className="text-center text-xl font-bold text-p1-darkgreen md:text-2xl">
                  Почему Web 3?
                </p>
                <p className="text-left text-base text-p1-darkgreen md:text-xl">
                  Реализация глобальной идеи Web3 на сегодняшний день до сих пор находится на ранней
                  стадии и еще не получила должного внимания в обществе.
                </p>
                <p className="text-left text-base text-p1-darkgreen md:text-xl">
                  Мы в свою очередь видим перспективу реализации социально значимого проекта,
                  позволяющего объединить людей по общим интересам, используя технологии Blockchain
                  и NFT.
                </p>
                <p className="text-left text-base text-p1-darkgreen md:text-xl">
                  Именно технология Blockchain способна обеспечить децентрализованное сообщество,
                  управляемое самими людьми.
                </p>
                <p className="text-left text-base text-p1-darkgreen md:text-xl">
                  Blockchain и NFT - технологии свободы, которые открывают безграничные возможности
                  и позволяют вернуть власть людям, стирая границы между городами и странами и
                  объединяя единомышленников.
                </p>
              </div>

              <div className="my-5 space-y-2 rounded-3xl border-p1-darkgreen p-4 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4">
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
                  <div className="basis- 4/5">
                    <Image
                      className="relative inline-block w-max items-end"
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
