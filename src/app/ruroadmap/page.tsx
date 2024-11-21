'use client';

import Image from 'next/image';

import { JumpButton } from '@/components/jumpButton';

export default function Page() {
  const jumpPoints = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />
      <hr className="z-100 relative h-full w-full border-2 bg-red-500" />

      <div className="p-2 text-center text-xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-3xl">
        Дорожная карта
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-1/5"></div>
        <div className="md:basis-3/5">
          <div
            id="1"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-6 md:text-xl"
          >
            1. Зарождение и обсуждение идеи объединения людей в сообщество посредством технологий
            Blockchain и NFT
          </div>
        </div>
        <div className="md:basis-1/5"></div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="basis-1/5">
          <Image width={150} height={600} src="/Hero/6.png" alt="Hero6" />
        </div>
        <div className="basis-4/5 md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl">
            <div className="pb-5">
              Реализация глобальной идеи Web3 на сегодняшний день до сих пор находится на ранней
              стадии и еще не получила должного внимания в обществе.
            </div>
            <div className="pb-5">
              Мы в свою очередь видим перспективу реализации социально значимого проекта,
              позволяющего объединить людей в сообщество по общим интересам, используя технологии
              Blockchain и NFT.
            </div>
            <div className="pb-5">
              Именно технология Blockchain способна обеспечить децентрализованное сообщество,
              управляемое самими людьми.
            </div>
          </div>
        </div>
        <div className="basis-1/5">
          <Image width={150} height={600} src="/Hero/9.png" alt="Hero9" />
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-5/5 md:basis-3/5">
          <div
            id="2"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl"
          >
            2. Старт проекта
            <p>&quot;Global Automotive Association&quot;</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl">
            Начало разработки блокчейн проекта, способного объединить людей, неравнодушных к
            автоспорту и автомобильной культуре в целом.
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-5/5 md:basis-3/5">
          <div
            id="3"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl"
          >
            3. Регистрация в социальных сетях
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:text-xl md:hover:shadow-xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <button className="mx-auto justify-center rounded-3xl duration-500 hover:scale-105">
                  <a href="https://discord.gg/gaa">
                    <Image width={200} height={600} src="/logo/discordlogomini.png" alt="discord" />
                  </a>
                </button>
                <p>Discord</p>
              </div>

              <div className="text-center">
                <button className="mx-auto justify-center rounded-3xl duration-500 hover:scale-105">
                  <a href="https://t.me/GlobalAutomotiveAssociation">
                    <Image
                      width={200}
                      height={600}
                      src="/logo/telegramlogomini.png"
                      alt="telegram_channel"
                    />
                  </a>
                </button>
                <p>Telegram News Channel</p>
              </div>

              <div className="text-center">
                <button className="mx-auto justify-center rounded-3xl duration-500 hover:scale-105">
                  <a href="https://x.com/RaceLads">
                    <Image width={200} height={600} src="/logo/twitterlogox.png" alt="twitter" />
                  </a>
                </button>
                <p>X.com / Twitter</p>
              </div>

              <div className="text-center">
                <button className="mx-auto justify-center rounded-3xl duration-500 hover:scale-105">
                  <a href="https://t.me/GAAChat">
                    <Image
                      width={200}
                      height={600}
                      src="/logo/telegramlogomini.png"
                      alt="telegram_chat"
                    />
                  </a>
                </button>
                <p>Telegram Community</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div
            id="4"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl"
          >
            4. NFT коллекция RaceLads
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center p-5">
        <div className="md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl">
            <div className="md:px-5">
              Разработка 1-й генеративной NFT коллекции от GAA, состоящей из 10.000 цифровых героев.
            </div>
            <div className="md:px-5">
              Каждый «RaceLad» – это не просто изображение, а уникальный персонаж, обладающий
              различными особенностями и запечатленный в блокчейне.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="basis-5/5 md:basis-3/5">
          <div
            id="5"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl"
          >
            5. Интернет портал
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl">
            <div className="justify-center px-4 pb-5">Регистрация доменного имени gaa.zone.</div>
            <div className="px-4 pb-2">
              Разработка сайта, который будет являться уникальным порталом, где каждый сможет:
            </div>
            <ul className="list-disc px-4 md:px-5">
              <li>быть в курсе последних новостей</li>
              <li>ознакамливаться с результатами мероприятий, реализация через NFT</li>
              <li>принимать участие в голосованиях</li>
              <li>приобретать NFT из наших коллекций</li>
              <li>наслаждаться фото и видео материалами прикрепленными к NFT</li>
              <li>загружать свой контент</li>
              <li>реализовывать свои возможности</li>
              <div className="pb-5"></div>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="p-5">
          <Image width={700} height={600} src="/Cars/TCR.png" alt="TCR" />
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div
            id="6"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl"
          >
            6. Сервисы и cоциальная значимость
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl">
            <div className="px-4 pb-2">Сервисы для участников проекта:</div>
            <ul className="list-disc px-4">
              <li>промоутеров</li>
              <li>пилотов</li>
              <li>коллекционеров</li>
              <li>судей</li>
              <li>зрителей</li>
            </ul>
            <div className="px-4 pb-5">
              Cвобода выбора и коммуникаций, формирование NFT наград, цифровизация участников
              проекта, формирование единой среды общения и принятия решений.
            </div>
            <div className="px-4 pb-5">
              Мы создаем свободную информационную среду, за сохранность сведений в которой отвечает
              blockchain и Web3 технологии.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="basis-4/5 md:basis-3/5">
          <div
            id="7"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl"
          >
            7. Другие коллекции
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div className="sspace-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl">
            <div className="px-4 pb-5">
              Проектом предусмотрен выпуск нескольких категорий NFT коллекций:
            </div>
            <div className="px-4 pb-5">
              Раритетные / спортивные автомобили - каждый сможет оцифровать свой автопарк.
            </div>
            <div className="px-4 pb-5">
              Пилоты, коллекционеры и участники команд смогут создавать свои уникальные NFT.
            </div>
            <div className="px-4 pb-5">
              Награды - NFT с метаданными о событии, изображением цифровой награды, видео-контентом.
            </div>
            <div className="px-4 pb-5">
              Другие коллекции, способные закрыть социально значимые вопросы общества.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center pb-2">
        <div className="p-5 md:basis-3/5">
          <Image width={1000} height={600} src="/Cars/Stance.png" alt="Stance" />
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div
            id="8"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl"
          >
            8. Выпуск взаимозаменяемых токенов
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl">
            <div className="px-4 pb-5">
              По достижению первоочередных целей участниками сообщества (держатели NFT из коллекций
              GAA) решат о необходимости выпуска токена в формате ERC20.
            </div>
            <div className="px-4 pb-5">
              Таким образом мы планируем предоставить дополнительные возможности для инвесторов.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="basis-5/5 md:basis-3/5">
          <div
            id="9"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl"
          >
            9. Создание децентрализованной автономной организации (DAO)
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl">
            <div className="px-4 pb-5">
              Предоставляем лидерам направлений права Global Automotive Association (GAA).
            </div>
            <div className="px-4 pb-5">
              Поиск лидеров направлений и предложение объединить свои усилия, направленные на
              становление и укрепление сообщества.
            </div>
            <div className="px-4 pb-5">
              Включение лидеров направлений в DAO путем предоставления соответствующих NFT.
            </div>
            <div className="px-4 pb-5">
              Если Вы являетесь лидером направления в своем регионе и хотите стать частью DAO Global
              Automotive Association (GAA) заполните форму заявки.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div
            id="10"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl"
          >
            10. Содействие развитию молодых талантов
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-1/5"></div>
        <div className="basis-4/5 md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl">
            <div className="pb-5">
              Создаем комфортную социальную среду для организации содействия и поддержки молодых
              талантов.
            </div>
          </div>
        </div>
        <div className="md:basis-1/5"></div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div
            id="11"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl"
          >
            11. Сохранение культурных ценностей
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="basis-4/5 md:basis-3/5">
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl">
            <div className="md:px-5">
              Помогаем сохранять культурные ценности и памятники, поддерживаем музеи.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="p-5 md:basis-3/5">
          <Image width={600} height={300} src="/Cars/Oldtimer.png" alt="Oldtimer" />
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div
            id="12"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl"
          >
            12. Организация и проведение национальных автоспортивных и автокультурных мероприятий
          </div>
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl">
            <div className="px-4 pb-5">
              Организация и проведение национальных автоспортивных и автокультурных мероприятий,
              объединяющих разные стили и направления.
            </div>
            <div className="px-4 pb-5">
              Создание комфортной среды для развития каждого из направлений.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div
            id="13"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl"
          >
            13. Организация и проведение международных автоспортивных и автокультурных мероприятий
          </div>
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl">
            <div className="px-4 pb-5">
              Организация и проведение международных автоспортивных и автокультурных мероприятий
              объединяя разные стили и направления и создавая комфортную среду для каждого
              направления
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div
            id="14"
            className="px-2 text-center text-base font-semibold text-p1-darkgreen md:pt-4 md:text-xl"
          >
            14. Организация и проведение регулярных международных автоспортивных и автокультурных
            мероприятий
          </div>
          <div className="space-y-4 rounded-3xl border-p1-darkgreen p-2 text-left text-base text-p1-darkgreen hover:border-p2-orange md:border-4 md:p-5 md:text-xl md:hover:shadow-xl">
            <div className="px-4 pb-5">
              Создание регулярных ежегодных международных автоспортивных и автокультурных
              мероприятий, создание GranPrix высокого уровня организации, создание праздника в
              автокультуры и автоспорта.
            </div>
            <div className="pb-5 text-center">Создание Королевских мероприятий!</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center p-2 md:pt-5">
        <div className="p-10 md:basis-3/5">
          <Image width={1000} height={600} src="/Cars/OpenWheels.png" alt="OpenWheels" />
        </div>
      </div>
      <div className="flex flex-row p-5">
        <div className="basis-5/5">
          <Image width={1900} height={200} src="/Hero/Compose1.png" alt="Compose1" />
        </div>
      </div>
      <div className="flex flex-row justify-center pb-2">
        <div className="">
          <Image width={1200} height={200} src="/Cars/Dragster.png" alt="Dragster" />
        </div>
      </div>
    </div>
  );
}
