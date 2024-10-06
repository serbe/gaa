import Image from "next/image";
export default function Page() {
  return (
    <div>
      <hr className="z-100 relative h-full w-2 border-2 bg-red-500" />

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="p-5 text-center text-6xl font-bold text-p1-darkgreen">
            Дорожная карта
          </div>
          <div className="pb-5 text-center text-2xl text-p1-darkgreen">
            1. Зарождение и обсуждение идеи объединения людей в сообщество
            посредством технологий Blockchain и NFT
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5">
          <Image width={150} height={600} src="/Hero/6.png" alt="Hero6" />
        </div>
        <div className="basis-3/5">
          <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 text-xl text-p1-darkgreen hover:border-p1-green hover:shadow-xl">
            <div className="pb-5">
              Реализация глобальной идеи Web3 на сегодняшний день до сих пор
              находится на ранней стадии и еще не получила должного внимания в
              обществе.
            </div>
            <div className="pb-5">
              Мы в свою очередь видим перспективу реализации социально значимого
              проекта, позволяющего объединить людей в сообщество по общим
              интересам, используя технологии Blockchain и NFT.
            </div>
            <div className="pb-5">
              Именно технология Blockchain способна обеспечить
              децентрализованное сообщество, управляемое самими людьми.
            </div>
          </div>
        </div>
        <div className="basis-1/5">
          <Image width={150} height={600} src="/Hero/9.png" alt="Hero9" />
        </div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pb-5 text-center text-2xl text-p1-darkgreen">
            2. Старт проекта &quot;Global Automotive Association&quot;
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5 p-8"></div>
        <div className="basis-3/5">
          <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 text-xl text-p1-darkgreen hover:border-p1-green hover:shadow-xl">
            <div className="pb-5">
              Начало разработки блокчейн проекта, способного объединить людей,
              неравнодушных к автоспорту и автомобильной культуре в целом.
            </div>
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pb-5 text-center text-2xl text-p1-darkgreen">
            3. Регистрация в социальных сетях
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pb-5 text-center text-2xl"></div>
        </div>
        <div className="basis-1/5 items-end"></div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 text-xl text-p1-darkgreen hover:border-p1-green hover:shadow-xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="pb-5">
                <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-5 py-8 text-xl text-p1-darkgreen shadow-sm shadow-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white">
                  Telegram News Channel
                </button>
              </div>
              <div className="pb-5">
                <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-10 py-8 text-xl text-p1-darkgreen shadow-sm shadow-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white">
                  Telegram Community
                </button>
              </div>

              <div className="pb-5">
                <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-10 py-8 text-xl text-p1-darkgreen shadow-sm shadow-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white">
                  Discord
                </button>
              </div>
              <div className="pb-5">
                <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-10 py-8 text-xl text-p1-darkgreen shadow-sm shadow-p1-cyan hover:bg-p1-darkgreen hover:text-p1-white">
                  X.com (Twitter)
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/5 p-5">
          {" "}
          <Image
            width={100}
            height={600}
            src="/Wheels etc/WheelDragracing1.png"
            alt="Wheel_Dragster"
          />
        </div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pb-5 text-center text-2xl text-p1-darkgreen">
            4. NFT коллекция RaceLads
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row p-5">
        <div className="basis-1/5">
          <Image
            width={100}
            height={600}
            src="/Wheels etc/WheelRally.png"
            alt="Wheel_Rally"
          />
        </div>
        <div className="basis-3/5">
          <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 text-xl text-p1-darkgreen hover:border-p1-green hover:shadow-xl">
            <div className="pb-5">
              Разработка 1-й генеративной NFT коллекции от GAA, состоящей из
              10.000 цифровых героев.
            </div>
            <div className="pb-5">
              Каждый «RaceLad» – это не просто изображение, а уникальный
              персонаж, обладающий различными особенностями и запечатленный в
              блокчейне.
            </div>
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pb-5 text-center text-2xl text-p1-darkgreen">
            5. Интернет портал
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 text-xl text-p1-darkgreen hover:border-p1-green hover:shadow-xl">
            <div className="pb-5">Регистрация доменного имени gaa.zone.</div>
            <div className="pb-5">
              Разработка сайта, который будет являться уникальным порталом, где
              каждый сможет:
            </div>
            <ul className="list-disc px-5">
              <li>быть в курсе последних новостей</li>
              <li>
                ознакамливаться с результатами мероприятий, реализация через NFT
              </li>
              <li>принимать участие в голосованиях</li>
              <li>приобретать NFT из наших коллекций</li>
              <li>
                наслаждаться фото и видео материалами прикрепленными к NFT
              </li>
              <li>загружать свой контент</li>
              <li>реализовывать свои возможности</li>
              <div className="pb-5"></div>
            </ul>
          </div>
        </div>
        <div className="basis-1/5 p-5">
          {" "}
          <Image width={200} height={600} src="/Hero/2.png" alt="Hero2" />
        </div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-4/5 p-5">
          <Image width={500} height={600} src="/Cars/TCR.png" alt="TCR" />
        </div>
        <div className="basis-1/5">
          <div className="pb-5 text-center text-2xl">
            <Image
              width={300}
              height={600}
              src="/RewardsSite/TCRRewardSite.png"
              alt="TCRReward"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pb-5 text-center text-2xl text-p1-darkgreen">
            6. Сервисы и cоциальная значимость
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 text-xl text-p1-darkgreen hover:border-p1-green hover:shadow-xl">
            <div className="pb-5">Сервисы для участников проекта:</div>
            <ul className="list-disc px-5">
              <li>промоутеров</li>
              <li>пилотов</li>
              <li>коллекционеров</li>
              <li>судей</li>
              <li>зрителей</li>

              <div className="pb-5"></div>
            </ul>
            <div className="pb-5">
              Cвобода выбора и коммуникаций, формирование NFT наград,
              цифровизация участников проекта, формирование единой среды общения
              и принятия решений.
            </div>
            <div className="pb-5">
              Мы создаем свободную информационную среду, за сохранность сведений
              в которой отвечает blockchain и Web3 технологии.
            </div>
          </div>
        </div>
        <div className="basis-1/5">
          <Image
            width={300}
            height={600}
            src="/Hero/1place.png"
            alt="Hero1place"
          />
        </div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pb-5 text-center text-2xl text-p1-darkgreen">
            7. Другие коллекции
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 text-xl text-p1-darkgreen hover:border-p1-green hover:shadow-xl">
            <div className="pb-5">
              Проектом предусмотрен выпуск нескольких категорий NFT коллекций:
            </div>
            <div className="pb-5">
              Раритетные / спортивные автомобили - каждый сможет оцифровать свой
              автопарк.
            </div>
            <div className="pb-5">
              Пилоты, коллекционеры и участники команд смогут создавать свои
              уникальные NFT.
            </div>
            <div className="pb-5">
              Награды - NFT с метаданными о событии, изображением цифровой
              награды, видео-контентом.
            </div>
            <div className="pb-5">
              Другие коллекции, способные закрыть социально значимые вопросы
              общества.
            </div>
          </div>
        </div>
        <div className="basis-1/5 p-5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-3/5">
          <Image
            width={500}
            height={600}
            src="/Cars/OpenWheels.png"
            alt="OpenWheels"
          />
        </div>
        <div className="basis-1/5">
          <div className="pb-5 text-center text-2xl"></div>
        </div>
        <div className="basis-1/5">
          <Image
            width={300}
            height={600}
            src="/RewardsSite/OpenWheelsRewardSite.png"
            alt="OpenWhelsReward"
          />
        </div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pb-5 text-center text-2xl text-p1-darkgreen">
            8. Выпуск взаимозаменяемых токенов
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 text-xl text-p1-darkgreen hover:border-p1-green hover:shadow-xl">
            <div className="pb-5">
              По достижению первоочередных целей участниками сообщества
              (держатели NFT из коллекций GAA) решат о необходимости выпуска
              токена в формате ERC20.
            </div>
            <div className="pb-5">
              Таким образом мы планируем предоставить дополнительные возможности
              для инвесторов.
            </div>
          </div>
        </div>
        <div className="basis-1/5">
          <Image width={150} height={600} src="/Hero/4.png" alt="Hero4" />
        </div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5">
          {" "}
          <Image width={150} height={600} src="/Hero/10.png" alt="Hero10" />
        </div>
        <div className="basis-3/5">
          <div className="pb-5 text-center text-2xl text-p1-darkgreen">
            9. Создание децентрализованной автономной организации (DAO)
          </div>
          <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 text-xl text-p1-darkgreen hover:border-p1-green hover:shadow-xl">
            <div className="pb-5">
              Предоставляем лидерам направлений права Global Automotive
              Association (GAA).
            </div>
            <div className="pb-5">
              Поиск лидеров направлений и предложение объединить свои усилия,
              направленные на становление и укрепление сообщества.
            </div>
            <div className="pb-5">
              Включение лидеров направлений в DAO путем предоставления
              соответствующих NFT.
            </div>
            <div className="pb-5">
              Если Вы являетесь лидером направления в своем регионе и хотите
              стать частью DAO Global Automotive Association (GAA) заполните
              форму заявки.
            </div>
          </div>
        </div>
        <div className="basis-1/5">
          <Image
            width={150}
            height={600}
            src="/Wheels etc/DiskStance.png"
            alt="DiskStance"
          />
        </div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-2/5">
          <div className="text-2xl">
            <Image
              width={500}
              height={200}
              src="/Cars/Drift1.png"
              alt="Drift1"
            />
          </div>
        </div>
        <div className="basis-2/5"></div>

        <div className="basis-1/5"></div>
      </div>
      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-4/5">
          <Image
            width={1000}
            height={200}
            src="/Cars/Dragster.png"
            alt="Dragster"
          />
        </div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pb-5 text-center text-2xl text-p1-darkgreen">
            10. Содействие развитию молодых талантов
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 text-xl text-p1-darkgreen hover:border-p1-green hover:shadow-xl">
            <div className="pb-5">
              Создаем комфортную социальную среду для организации содействия и
              поддержки молодых талантов.
            </div>
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row p-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <Image
            width={1900}
            height={200}
            src="/Hero/Compose1.png"
            alt="Compose1"
          />
        </div>

        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pb-5 text-center text-2xl text-p1-darkgreen">
            11. Сохранение культурных ценностей
          </div>
          <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 text-xl text-p1-darkgreen hover:border-p1-green hover:shadow-xl">
            <div className="pb-5">
              Помогаем сохранять культурные ценности и памятники, поддерживаем
              музеи.
            </div>
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5">
          <Image
            width={300}
            height={600}
            src="/RewardsSite/OldtimerRewardSite.png"
            alt="OldtimerReward"
          />
        </div>

        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <Image
            width={600}
            height={300}
            src="/Cars/Oldtimer.png"
            alt="Oldtimer"
          />
        </div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pb-5 text-center text-2xl text-p1-darkgreen">
            12. Организация и проведение национальных автоспортивных и
            автокультурных мероприятий
          </div>
          <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 text-xl text-p1-darkgreen hover:border-p1-green hover:shadow-xl">
            <div className="pb-5">
              Организация и проведение национальных автоспортивных и
              автокультурных мероприятий, объединяющих разные стили и
              направления.
            </div>
            <div className="pb-5">
              Создание комфортной среды для развития каждого из направлений.
            </div>
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-3/5">
          <Image
            width={500}
            height={600}
            src="/Cars/SoundCar.png"
            alt="SoundCar"
          />
        </div>
        <div className="basis-1/5">
          <div className="pb-5 text-center text-2xl"></div>
        </div>
        <div className="basis-1/5">
          <Image
            width={300}
            height={600}
            src="/RewardsSite/SoundCarRewardSite.png"
            alt="SoundCarReward"
          />
        </div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pb-5 text-center text-2xl text-p1-darkgreen">
            13. Организация и проведение международных автоспортивных и
            автокультурных мероприятий
          </div>
          <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 text-xl text-p1-darkgreen hover:border-p1-green hover:shadow-xl">
            <div className="pb-5">
              Организация и проведение международных автоспортивных и
              автокультурных мероприятий объединяя разные стили и направления и
              создавая комфортную среду для каждого направления
            </div>
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5">
          <Image
            width={300}
            height={600}
            src="/RewardsSite/StanceRewardSite.png"
            alt="StanceReward"
          />
        </div>
        <div className="basis-1/5">
          <div className="pb-5 text-center text-2xl"></div>
        </div>
        <div className="basis-3/5">
          <Image
            width={1000}
            height={600}
            src="/Cars/Stance.png"
            alt="Stance"
          />
        </div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pb-5 text-center text-2xl text-p1-darkgreen">
            14. Организация и проведение регулярных международных автоспортивных
            и автокультурных мероприятий
          </div>
          <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 text-xl text-p1-darkgreen hover:border-p1-green hover:shadow-xl">
            <div className="pb-5">
              Создание регулярных ежегодных международных автоспортивных и
              автокультурных мероприятий, создание Granprix высокого уровня
              организации, создание праздника в автокультуры и автоспорта.
            </div>
            <div className="pb-5">Создание Королевских мероприятий!</div>
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pb-5 text-center text-2xl text-p1-darkgreen">
            У нас своя
          </div>
          <div className="pb-5 text-center text-2xl text-p1-darkgreen">
            ОЛИМПИАДА!
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5">
          <Image
            width={300}
            height={600}
            src="/RewardsSite/SimracingRewardSite.png"
            alt="SimracingReward"
          />
        </div>
        <div className="basis-1/5"></div>
        <div className="basis-1/5">
          <div className="pb-5 text-center text-2xl">
            <Image
              width={400}
              height={600}
              src="/Hero/Compose2.png"
              alt="Compose2"
            />
          </div>
        </div>
        <div className="basis-1/5"></div>
        <div className="basis-1/5">
          <Image width={150} height={600} src="/Hero/12.png" alt="Hero12" />
        </div>
      </div>
    </div>
  );
}
