import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="flex flex-row p-2">
        <div className="basis-1/6 text-center">01</div>
        <div className="basis-1/6 text-center"> 02 </div>
        <div className="basis-1/6 text-center">03</div>
        <div className="basis-1/6 text-center">04</div>
        <div className="basis-1/6 text-center">05</div>
        <div className="basis-1/6 text-center">06</div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/5">01</div>
        <div className="basis-3/5">
          02
          <div className="p-2 text-center text-6xl font-bold text-p1-darkgreen">
            О Нас
          </div>
        </div>
        <div className="basis-1/5">03</div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/6">01</div>
        <div className="basis-4/6 text-p1-darkgreen">
          02
          <div className="my-5 space-y-6 rounded-3xl p-2">
            <div className="p-2 text-xl text-p1-darkgreen">
              Global Automotive Association (GAA) – это революционный
              блокчейн-проект, который объединяет всех любителей автоспорта и
              автомобилей в сильное и активное сообщество, нацеленное на
              популяризацию автомобильной культуры.
            </div>
          </div>
        </div>
        <div className="basis-1/6">03</div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/6">01</div>
        <div className="basis-4/6 text-p1-darkgreen">
          02
          <div className="my-5 space-y-6 rounded-3xl p-2">
            <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen">
              <p className="text-2xl font-bold">Наши амбициозные цели:</p>
              <p>Создание активного сообщества:</p>
              <p>
                Объединяем фанатов автоспорта и автомобильной культуры в
                соцсетях и мессенджерах (Telegram, Discord, X) для общения,
                новых знакомств и обмена опытом.
              </p>
              <p className="text-2xl font-bold">Партнерские отношения:</p>
              <p>
                Устанавливаем связи с организаторами и участниками крупнейших
                автоспортивных событий (дрифт, кольцевые гонки, драг рейсинг,
                симрейсинг, автовыставки) для совместных проектов и акций.
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/6">03</div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/6">01</div>
        <div className="basis-2/6 text-p1-darkgreen">
          02
          <div className="my-5 space-y-6 rounded-3xl p-2">
            <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen">
              <p className="text-2xl font-bold">10,000</p>
              <p>уникальных NFT</p>
              <p>в коллекции</p>
              <p className="text-2xl font-bold">RaceLads</p>
            </div>
          </div>
        </div>
        <div className="basis-2/6 text-p1-darkgreen">03</div>
        <div className="basis-1/6">04</div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/6">01</div>
        <div className="basis-2/6 text-p1-darkgreen">
          02
          <div className="my-5 space-y-6 rounded-3xl p-2"></div>
        </div>
        <div className="basis-2/6 text-p1-darkgreen">
          03
          <div className="my-5 space-y-6 rounded-3xl p-2">
            <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen">
              <p>первая коллекция</p>
              <p className="text-2xl font-bold">
                Глобальной Автомобильной Ассоциации
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/6">04</div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/5">01</div>
        <div className="basis-3/5">
          02
          <div className="p-2 text-center text-6xl font-bold text-p1-darkgreen">
            RaceLads
          </div>
        </div>
        <div className="basis-1/5">03</div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/6">01</div>
        <div className="basis-4/6 text-p1-darkgreen">
          02
          <div className="my-5 space-y-6 rounded-3xl p-2">
            <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen">
              <p className="text-center text-2xl font-bold text-p1-darkgreen">
                NFT коллекция «RaceLads»
              </p>
              <p className="text-left text-xl text-p1-darkgreen">
                Выпускаем первую NFT коллекцию, состоящую из 10.000 эксклюзивных
                и уникальных цифровых художественных работ, вдохновленных самыми
                захватывающими дисциплинами автогонок.
              </p>
              <p className="text-left text-xl text-p1-darkgreen">
                Каждый «RaceLad» в нашей коллекции – это не просто цифровое
                изображение, а уникальный персонаж, обладающий различными
                особенностями и запечатленный в блокчейне.
              </p>
              <p className="text-left text-xl text-p1-darkgreen">
                Владение NFT из нашей коллекции в будущем откроет вам доступ в
                уникальный мир драйва на Web3:
              </p>
              <ul className="list-disc space-y-3 px-5 text-p1-darkgreen">
                <li className="text-justify text-xl text-p1-darkgreen">
                  участвуйте в виртуальных гонках и других захватывающих
                  онлайн-событиях.
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  принимайте участие в ключевых голосованиях, влияющих на
                  развитие нашего сообщества.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="basis-1/6">03</div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/5">01</div>
        <div className="basis-3/5">
          02
          <div className="p-2 text-center text-6xl font-bold text-p1-darkgreen">
            Мы планируем
          </div>
          <div className="p-2 text-center text-6xl font-bold text-p1-darkgreen">
            наше будущее
          </div>
        </div>
        <div className="basis-1/5">03</div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/6">01</div>
        <div className="basis-4/6 text-p1-darkgreen">
          02
          <div className="my-5 space-y-6 rounded-3xl p-2">
            <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen">
              <p className="text-center text-2xl font-bold text-p1-darkgreen">
                В наших планах также выпуск и других уникальных коллекций для:
              </p>
              <ul className="list-disc space-y-3 px-5 text-p1-darkgreen">
                <li className="text-justify text-xl text-p1-darkgreen">
                  пилотов
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  направлений автоспорта (дрифт, кольцевые гонки, драг рейсинг и
                  т.д.)
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  коллекционеров редких автомобилей с возможностью цифровизации
                  своего автопарка и создания NFT в единой глобальной коллекции
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  награждения победителей и призеров (кубки, медали)
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  выдачи цифровых лицензий
                </li>
              </ul>
              <p className="text-center text-2xl font-bold text-p1-darkgreen">
                Уникальность коллекций заключается в
              </p>
              <ul className="list-disc space-y-3 px-5 text-p1-darkgreen">
                <li className="text-justify text-xl text-p1-darkgreen">
                  ограниченном тираже уникальных объектов цифрового искусства
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  принадлежности коллекции к Проекту автоспортивного и
                  автокультурного сообщества
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  ограниченным перечнем коллекций цифрового исскусства
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="basis-1/6">03</div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/5">01</div>
        <div className="basis-3/5">
          02
          <div className="p-2 text-center text-6xl font-bold text-p1-darkgreen">
            NFT
          </div>
          <div className="p-2 text-center text-6xl font-bold text-p1-darkgreen">
            Сервисы и Награды
          </div>
        </div>
        <div className="basis-1/5">03</div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/6">01</div>
        <div className="basis-4/6 text-p1-darkgreen">
          02
          <div className="my-5 space-y-6 rounded-3xl p-2">
            <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen">
              <p className="text-center text-2xl font-bold text-p1-darkgreen">
                NFT Сервисы
              </p>
              <p className="text-left">
                Создание сервиса цифровизации физических объектов в NFT и
                объединение NFT в единые коллекции цифрового исскусства
              </p>
              <p className="text-left">
                создавайте, дарите, продавайте NFT по направлениям:
              </p>
              <ul className="list-disc space-y-3 px-5 text-p1-darkgreen">
                <li className="text-justify text-xl text-p1-darkgreen">
                  Пилоты
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  Участники команд (дрифт, драг рейсинг и т.д.)
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  Коллекционеры редких автомобилей
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  Раритетные, спортивные и кастомизированные автомобили
                </li>
              </ul>
              <p className="text-left">
                Единая глобальная коллекция автоспортивного и автокультурного
                сообщества создаваемая самим сообществом
              </p>
            </div>

            <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen">
              <p className="text-center text-2xl font-bold text-p1-darkgreen">
                NFT Награды
              </p>
              <p className="text-left">
                На сайте мы предоставляем организаторам мероприятий возможность
                создать уникальные NFT награды для победителей и участников
                мероприятий и выход на новый уровень организации проведения
                мероприятий
              </p>
              <p className="text-left">
                Все награды будут в единой коллекции автоспортивного и
                автокультурного сообщества NFT Rewards
              </p>
              <p className="text-left">
                Для развития Проекта предоставляем лидерам направлений цифровые
                NFT лицензии, расширяющие возможности и предоставляющие
                дополнительные полномочия использования сайта.
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/6">03</div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/5">01</div>
        <div className="basis-3/5">
          02
          <div className="p-2 text-center text-6xl font-bold text-p1-darkgreen">
            выгода владельцу
          </div>
          <div className="p-2 text-center text-6xl font-bold text-p1-darkgreen">
            NFT RaceLad
          </div>
        </div>
        <div className="basis-1/5">03</div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/6">01</div>
        <div className="basis-4/6 text-p1-darkgreen">
          02
          <div className="my-5 space-y-6 rounded-3xl p-2">
            <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen">
              <p className="text-center text-2xl font-bold text-p1-darkgreen">
                Уникальные привилегии
              </p>
              <p className="text-left">
                Предоставляем нашим членам эксклюзивные бонусы:
              </p>
              <ul className="list-disc space-y-3 px-5 text-p1-darkgreen">
                <li className="text-justify text-xl text-p1-darkgreen">
                  билеты на мероприятия
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  участие в автограф и фото сессиях
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  участие в лекциях и экскурсиях
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  розыгрыши NFT
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  многое другое
                </li>
              </ul>
            </div>

            <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen">
              <p className="text-center text-2xl font-bold text-p1-darkgreen">
                Собственные мероприятия
              </p>
              <p className="text-left">
                Организуем такие мероприятия, как дрифт, гонки, автовыставки и
                вечеринки под брендом GAA с участием спортсменов и лидеров
                мнений (блогеров) с различными наградами (в том числе
                цифровыми).
              </p>
              <p className="text-left">
                Члены нашего сообщества смогут подавать заявки и принимать
                участие в голосованиях по выбору формата мероприятий, судей,
                участников и прочим вопросам.
              </p>
            </div>

            <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen">
              <p className="text-center text-2xl font-bold text-p1-darkgreen">
                Децентрализованный портал
              </p>
              <p className="text-left">
                Разрабатываем сайт, который будет являться уникальным порталом,
                где каждый сможет:
              </p>
              <ul className="list-disc space-y-3 px-5 text-p1-darkgreen">
                <li className="text-justify text-xl text-p1-darkgreen">
                  быть в курсе последних новостей
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  ознакамливаться с результатами мероприятий
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  принимать участие в голосованиях
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  приобретать NFT из наших коллекций
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  наслаждаться фото и видео материалами
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  загружать свой контент
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  реализовывать свои возможности
                </li>
                <li className="text-left text-xl text-p1-darkgreen">
                  многое другое
                </li>
              </ul>
            </div>

            <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen">
              <p className="text-center text-2xl font-bold text-p1-darkgreen">
                Выход на международный уровень
              </p>
              <p className="text-left">
                Расширяем наше присутствие на международной арене, чтобы
                объединить автолюбителей по всему миру, стирая границы и
                расстояния.
              </p>
              <p className="text-left">
                Создание ежегодной круглогодичной международной серии и
                стандарта мероприятий для автоспортивного и автокультурного
                сообщества.
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/6">03</div>
      </div>

      <div className="p-10 text-xl">
        <div className="flex flex-row p-2">
          <div className="basis-1/5">01</div>
          <div className="basis-3/5">
            02
            <div className="p-2 text-center text-6xl font-bold text-p1-darkgreen">
              Web 3
            </div>
          </div>
          <div className="basis-1/5">03</div>
        </div>
        <div className="flex flex-row p-2">
          <div className="basis-1/6">01</div>
          <div className="basis-4/6 text-p1-darkgreen">
            02
            <div className="my-5 space-y-6 rounded-3xl p-2">
              <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen">
                <p className="text-center text-2xl font-bold text-p1-darkgreen">
                  Почему Web 3?
                </p>
                <p className="text-left">
                  Реализация глобальной идеи Web3 на сегодняшний день до сих пор
                  находится на ранней стадии и еще не получила должного внимания
                  в обществе.
                </p>
                <p className="text-left">
                  Мы в свою очередь видим перспективу реализации социально
                  значимого проекта, позволяющего объединить людей по общим
                  интересам, используя технологии Blockchain и NFT.
                </p>
                <p className="text-left">
                  Именно технология Blockchain способна обеспечить
                  децентрализованное сообщество, управляемое самими людьми.
                </p>
                <p className="text-left">
                  Blockchain и NFT - технологии свободы, которые открывают
                  безграничные возможности и позволяют вернуть власть людям,
                  стирая границы между городами и странами и объединяя
                  единомышленников.
                </p>
              </div>

              <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen">
                <p className="text-center">
                  Присоединяйся к GAA и стань частью глобального движения,
                  которое создает новые правила справедливой игры в мире
                  автоспорта и автокультуры!
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/6">03</div>
        </div>
        <div className="text-center text-6xl font-bold"> Выгода участника</div>
        <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
          <div className="pb-3 text-center font-bold">
            Уникальные привилегии:
          </div>
          <div className="pb-5">
            Мероприятия: Участие в мероприятиях, концертах, выставках. Доступ в
            Priority Club
          </div>
          <div className="pb-5">
            Предоставляем нашим членам эксклюзивные бонусы – билеты на
            мероприятия, автограф-сессии, фотосессии, лекции, экскурсии,
            розыгрыши NFT и многое другое.
          </div>
        </div>
        <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
          <div className="pb-3 text-center font-bold">
            Скидки и предложения:
          </div>
          <div className="pb-5">
            Покупки: Скидки на товары и услуги, предлагаемые проектом или его
            партнерами.
          </div>
          <div className="pb-5">
            VIP-услуги: Доступ к премиальным услугам и сервисам.
          </div>
        </div>
        <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
          <div className="pb-3 text-center font-bold">Права голоса:</div>
          <div className="pb-5">
            DAO (децентрализованные автономные организации):
          </div>
          <div className="pb-5">
            Члены нашего сообщества смогут подавать заявки и принимать участие в
            голосованиях по выбору формата мероприятий, судей, участников и
            прочим вопросам
          </div>
        </div>
        <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
          <div className="pb-3 text-center font-bold">
            Децентрализованный портал:
          </div>
          <div className="pb-5">
            Запускаем платформу с актуальными новостями автоспорта, фото и видео
            отчетами, статистикой, зафиксированной в блокчейн, а также анонсами
            и голосованиями для членов сообщества.
          </div>
          <div className="pb-5">Выход на международный портал.</div>
          <div className="pb-5">
            Расширяем наше присутствие на международной арене, чтобы объединить
            автолюбителей по всему миру, стирая границы и расстояния.
          </div>
        </div>
        <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
          <div className="pb-3 text-center font-bold">
            Вознаграждения и бонусы:
          </div>
          <div className="pb-5">
            Airdrop: Бесплатное получение дополнительных токенов или NFT.
          </div>
        </div>
        <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
          <div className="pb-3 text-center font-bold">
            Социальные привилегии:
          </div>
          <div className="pb-5">
            Сообщества: Доступ к эксклюзивным чатам, форумам или группам в
            социальных сетях.
          </div>
          <div className="pb-5">
            Сетевые мероприятия: Участие в приватных сетевых событиях и
            встречах.
          </div>
        </div>
        <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
          <div className="pb-3 text-center font-bold">Персонализация:</div>
          <div className="pb-5">
            Услуги на заказ: Возможность заказать уникальные произведения
            искусства или персонализированные товары.
          </div>
          <div className="pb-5">
            Аватары и идентификация: Персонализированные аватары или
            идентификационные знаки в онлайн-пространствах.
          </div>
        </div>
        <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
          <div className="pb-3 text-center font-bold">Физические товары:</div>
          <div className="pb-5">
            Коллекционные предметы: Получение физической версии произведения
            искусства или коллекционного предмета.
          </div>
          <div className="pb-5">
            Мерчандайзинг: Одежда, аксессуары и другие брендированные товары.
          </div>
        </div>
        <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
          <div className="pb-3 text-center font-bold">
            Образовательные ресурсы:
          </div>
          <div className="pb-5">
            Курсы и семинары: Доступ к обучающим материалам, вебинарам и
            мастер-классам.
          </div>
          <div className="pb-5">Мастер-классы с ведущими пилотами.</div>
        </div>
        <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
          <div className="pb-3 text-center font-bold">
            Инвестиционные возможности:
          </div>
          <div className="pb-5">
            Доступ к ранним инвестициям: Возможность вкладывать в проекты на
            ранних стадиях или участвовать в закрытых раундах финансирования.
          </div>
        </div>
        <div className="text-center text-6xl font-bold">
          Термины и определения
        </div>
        <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
          <div className="pb-3 text-center font-bold">
            Заголовок внутри блока
          </div>
          <div className="pb-5">
            NFT, также известные как Non-Fungible Token (невзаимозаменяемый
            токен), лучше всего понимать как цифровые активы, существующие в
            блокчейн. Как только этот актив попадает в блокчейн, его уже нельзя
            удалить, и вы можете видеть каждого человека, который когда-либо
            владел этим NFT, поскольку все сделки хранятся в блокчейн. NFT могут
            быть представлены в виде цифрового искусства, музыки, виртуальной
            недвижимости, вплоть до коллекционных предметов и игровых активов!
            Любой цифровой актив может быть заминчен (отчеканен) или
            токенизирован и превращен в NFT. После минтинга (чеканки) или
            токенизации эти активы можно покупать, продавать и торговать ими с
            помощью криптовалюты.
          </div>
          <div className="pb-5">
            Assets (активы) - термин, используемый для обозначения цифровых
            коллекционных предметов. Это может быть произведение искусства,
            музыка, твит или что-либо еще, что можно купить в качестве NFT.
          </div>
          <div className="pb-5">
            Блокчейн – основа всех криптовалют и NFT. Блокчейн был придуман
            Сатоши Накамото в 2008 году как децентрализованная (то есть не
            контролируемая одним человеком, компанией или организацией) система
            учета транзакций. Это способ отслеживания всех транзакций, которые
            происходят в самом блокчейн, а также протоколы, созданные для
            подтверждения этих транзакций. Таким образом, вы можете быть уверены
            в подлинности того, что покупаете, отправляете или получаете. В
            блокчейн ничего нельзя изменить!
          </div>
          <div className="pb-5">
            Минт (чеканка) – процесс первого добавления NFT в блокчейн. Это
            важная составляющая NFT и то, что делает их такими ценными, потому
            что, когда предмет или актив отчеканен (заминчен), этот факт
            является доказательством его подлинности.
          </div>
          <div className="pb-5">
            DAO (Decentralized Autonomous Organization) - расшифровывается как
            Децентрализованная Автономная Организация и представляет собой
            организацию, которая установила свои собственные правила на основе
            смарт-контрактов в блокчейн.
          </div>
          <div className="pb-5">
            DeFi (Decentralised Finance) - децентрализованные финансы, что
            является общим термином для любого вида финансовой деятельности,
            использующей криптовалюту и принципы блокчейн. Вероятно, вы не часто
            будете сталкиваться с этим термином, но его полезно знать, поскольку
            эта область развивается и будет все чаще появляться в повседневных
            обсуждениях.
          </div>
          <div className="pb-5">
            Floor (Флор) - &quot;минимальная цена&quot; проекта. Это самая
            низкая цена, по которой вы можете купить NFT из данного проекта на
            вторичном рынке.
          </div>
          <div className="pb-5">
            Газ – это &quot;комиссия&quot;, которую нужно оплатить, чтобы
            совершить сделку (или любые другие транзакции) в блокчейн. Цена газа
            может расти и падать в зависимости от спроса и предложения (нагрузки
            на сеть).
          </div>
          <div className="pb-5">
            Генеративная коллекция - у всех NFT в каждой коллекции есть общие
            черты: одежда, цвет кожи, головной убор, фон и т. д. Можно смешивать
            и сочетать эти особенности, чтобы создать коллекцию NFT, которая
            будет уникальной. Хотя исходные черты создаются вручную, каждый NFT
            автоматически создается компьютером со случайной комбинацией всех
            доступных черт.
          </div>
          <div className="pb-5">
            Metadata (метаданные) - все необходимые и уникальные данные
            (свойства), делающие конкретный NFT именно тем, чем он является.
            Простыми словами, метаданные определяют, как выглядит предмет
            коллекционирования.
          </div>
          <div className="pb-5">
            Metamask (метамаск) - самый популярный криптокошелек в экосистеме
            Ethereum.
          </div>
          <div className="pb-5">
            OpenSea - самый популярный маркетплейс для покупки / продажи NFT.
          </div>
          <div className="pb-5">
            PFP (Profile Picture) - простыми словами ваш &quot;аватар&quot;, в
            качестве которого может выступать например NFT.
          </div>
          <div className="pb-5">
            Rarity (рарити/ редкость) – этот термин определяет, насколько редким
            (ценным) является конкретный NFT в рамках коллекции, исходя из
            уникальности его метаданных.
          </div>
          <div className="pb-5">
            Ревил - как правило в генеративных коллекциях сразу после минта ваш
            NFT попадает в криптокошелек в &quot;закрытом виде&quot;. Таким
            образом все NFT данной коллекции будут иметь одинаковый внешний вид.
            Через какое-то время (определяется создателем коллекции) с
            обновлением метаданных происходит открытие (ревил) NFT в следствие
            чего токен становится уникальным.
          </div>
        </div>
        <div className="text-center text-6xl font-bold">
          Политика приватности
        </div>
        <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
          <div className="pb-3 text-center font-bold">
            Политика в отношении обработки персональных данных
          </div>
          <div className="pb-5">1. Общие положения</div>
          <div className="pb-5">
            Настоящая политика обработки персональных данных составлена в
            соответствии с требованиями Федерального закона от 27.07.2006. №
            152-ФЗ «О персональных данных» (далее — Закон о персональных данных)
            и определяет порядок обработки персональных данных и меры по
            обеспечению безопасности персональных данных, предпринимаемые
            Децентрализованной автономной организацией Decentralized autonomous
            organization (DAO) Global Automotive Association (далее — Оператор).
          </div>
          <div className="pb-5">
            1.1. Оператор ставит своей важнейшей целью и условием осуществления
            своей деятельности соблюдение прав и свобод человека и гражданина
            при обработке его персональных данных, в том числе защиты прав на
            неприкосновенность частной жизни, личную и семейную тайну.
          </div>
          <div className="pb-5">
            1.2. Настоящая политика Оператора в отношении обработки персональных
            данных (далее — Политика) применяется ко всей информации, которую
            Оператор может получить о посетителях веб-сайта https://gaa.zone.
          </div>
          <div className="pb-5">
            2. Основные понятия, используемые в Политике
          </div>
          <div className="pb-5">
            2.1. Автоматизированная обработка персональных данных — обработка
            персональных данных с помощью средств вычислительной техники.
          </div>
          <div className="pb-5">
            2.2. Блокирование персональных данных — временное прекращение
            обработки персональных данных (за исключением случаев, если
            обработка необходима для уточнения персональных данных).
          </div>
          <div className="pb-5">
            2.3. Веб-сайт — совокупность графических и информационных
            материалов, а также программ для ЭВМ и баз данных, обеспечивающих их
            доступность в сети интернет по сетевому адресу https://gaa.zone.
          </div>
          <div className="pb-5">
            2.4. Информационная система персональных данных — совокупность
            содержащихся в базах данных персональных данных и обеспечивающих их
            обработку информационных технологий и технических средств.
          </div>
          <div className="pb-5">
            2.5. Обезличивание персональных данных — действия, в результате
            которых невозможно определить без использования дополнительной
            информации принадлежность персональных данных конкретному
            Пользователю или иному субъекту персональных данных.
          </div>
          <div className="pb-5">
            2.6. Обработка персональных данных — любое действие (операция) или
            совокупность действий (операций), совершаемых с использованием
            средств автоматизации или без использования таких средств с
            персональными данными, включая сбор, запись, систематизацию,
            накопление, хранение, уточнение (обновление, изменение), извлечение,
            использование, передачу (распространение, предоставление, доступ),
            обезличивание, блокирование, удаление, уничтожение персональных
            данных.
          </div>
          <div className="pb-5">
            2.7. Оператор — государственный орган, муниципальный орган,
            юридическое или физическое лицо, самостоятельно или совместно с
            другими лицами организующие и/или осуществляющие обработку
            персональных данных, а также определяющие цели обработки
            персональных данных, состав персональных данных, подлежащих
            обработке, действия (операции), совершаемые с персональными данными.
          </div>
          <div className="pb-5">
            2.8. Персональные данные — любая информация, относящаяся прямо или
            косвенно к определенному или определяемому Пользователю веб-сайта
            https://gaa.zone.
          </div>
          <div className="pb-5">
            2.9. Персональные данные, разрешенные субъектом персональных данных
            для распространения, — персональные данные, доступ неограниченного
            круга лиц к которым предоставлен субъектом персональных данных путем
            дачи согласия на обработку персональных данных, разрешенных
            субъектом персональных данных для распространения в порядке,
            предусмотренном Законом о персональных данных (далее — персональные
            данные, разрешенные для распространения).
          </div>
          <div className="pb-5">
            2.10. Пользователь — любой посетитель веб-сайта https://gaa.zone.
          </div>
          <div className="pb-5">
            2.11. Предоставление персональных данных — действия, направленные на
            раскрытие персональных данных определенному лицу или определенному
            кругу лиц.
          </div>
          <div className="pb-5">
            2.12. Распространение персональных данных — любые действия,
            направленные на раскрытие персональных данных неопределенному кругу
            лиц (передача персональных данных) или на ознакомление с
            персональными данными неограниченного круга лиц, в том числе
            обнародование персональных данных в средствах массовой информации,
            размещение в информационно-телекоммуникационных сетях или
            предоставление доступа к персональным данным каким-либо иным
            способом.
          </div>
          <div className="pb-5">
            2.13. Трансграничная передача персональных данных — передача
            персональных данных на территорию иностранного государства органу
            власти иностранного государства, иностранному физическому или
            иностранному юридическому лицу.
          </div>
          <div className="pb-5">
            2.14. Уничтожение персональных данных — любые действия, в результате
            которых персональные данные уничтожаются безвозвратно с
            невозможностью дальнейшего восстановления содержания персональных
            данных в информационной системе персональных данных и/или
            уничтожаются материальные носители персональных данных.
          </div>
          <div className="pb-5">3. Основные права и обязанности Оператора</div>
          <div className="pb-5">
            3.1. Оператор имеет право:— получать от субъекта персональных данных
            достоверные информацию и/или документы, содержащие персональные
            данные;— в случае отзыва субъектом персональных данных согласия на
            обработку персональных данных, а также, направления обращения с
            требованием о прекращении обработки персональных данных, Оператор
            вправе продолжить обработку персональных данных без согласия
            субъекта персональных данных при наличии оснований, указанных в
            Законе о персональных данных;— самостоятельно определять состав и
            перечень мер, необходимых и достаточных для обеспечения выполнения
            обязанностей, предусмотренных Законом о персональных данных и
            принятыми в соответствии с ним нормативными правовыми актами, если
            иное не предусмотрено Законом о персональных данных или другими
            федеральными законами.
          </div>
          <div className="pb-5">
            3.2. Оператор обязан:— предоставлять субъекту персональных данных по
            его просьбе информацию, касающуюся обработки его персональных
            данных;— организовывать обработку персональных данных в порядке,
            установленном действующим законодательством РФ;— отвечать на
            обращения и запросы субъектов персональных данных и их законных
            представителей в соответствии с требованиями Закона о персональных
            данных;— сообщать в уполномоченный орган по защите прав субъектов
            персональных данных по запросу этого органа необходимую информацию в
            течение 10 дней с даты получения такого запроса;— публиковать или
            иным образом обеспечивать неограниченный доступ к настоящей Политике
            в отношении обработки персональных данных;— принимать правовые,
            организационные и технические меры для защиты персональных данных от
            неправомерного или случайного доступа к ним, уничтожения, изменения,
            блокирования, копирования, предоставления, распространения
            персональных данных, а также от иных неправомерных действий в
            отношении персональных данных;— прекратить передачу
            (распространение, предоставление, доступ) персональных данных,
            прекратить обработку и уничтожить персональные данные в порядке и
            случаях, предусмотренных Законом о персональных данных;— исполнять
            иные обязанности, предусмотренные Законом о персональных данных.
          </div>
          <div className="pb-5">
            4. Основные права и обязанности субъектов персональных данных
          </div>
          <div className="pb-5">
            4.1. Субъекты персональных данных имеют право:— получать информацию,
            касающуюся обработки его персональных данных, за исключением
            случаев, предусмотренных федеральными законами. Сведения
            предоставляются субъекту персональных данных Оператором в доступной
            форме, и в них не должны содержаться персональные данные,
            относящиеся к другим субъектам персональных данных, за исключением
            случаев, когда имеются законные основания для раскрытия таких
            персональных данных. Перечень информации и порядок ее получения
            установлен Законом о персональных данных;— требовать от оператора
            уточнения его персональных данных, их блокирования или уничтожения в
            случае, если персональные данные являются неполными, устаревшими,
            неточными, незаконно полученными или не являются необходимыми для
            заявленной цели обработки, а также принимать предусмотренные законом
            меры по защите своих прав;— выдвигать условие предварительного
            согласия при обработке персональных данных в целях продвижения на
            рынке товаров, работ и услуг;— на отзыв согласия на обработку
            персональных данных, а также, на направление требования о
            прекращении обработки персональных данных;— обжаловать в
            уполномоченный орган по защите прав субъектов персональных данных
            или в судебном порядке неправомерные действия или бездействие
            Оператора при обработке его персональных данных;— на осуществление
            иных прав, предусмотренных законодательством РФ.
          </div>
          <div className="pb-5">
            4.2. Субъекты персональных данных обязаны:— предоставлять Оператору
            достоверные данные о себе;— сообщать Оператору об уточнении
            (обновлении, изменении) своих персональных данных.
          </div>
          <div className="pb-5">
            4.3. Лица, передавшие Оператору недостоверные сведения о себе, либо
            сведения о другом субъекте персональных данных без согласия
            последнего, несут ответственность в соответствии с законодательством
            РФ.
          </div>
          <div className="pb-5">5. Принципы обработки персональных данных</div>
          <div className="pb-5">
            5.1. Обработка персональных данных осуществляется на законной и
            справедливой основе.
          </div>
          <div className="pb-5">
            5.2. Обработка персональных данных ограничивается достижением
            конкретных, заранее определенных и законных целей. Не допускается
            обработка персональных данных, несовместимая с целями сбора
            персональных данных.
          </div>
          <div className="pb-5">
            5.3. Не допускается объединение баз данных, содержащих персональные
            данные, обработка которых осуществляется в целях, несовместимых
            между собой.
          </div>
          <div className="pb-5">
            5.4. Обработке подлежат только персональные данные, которые отвечают
            целям их обработки.
          </div>
          <div className="pb-5">
            5.5. Содержание и объем обрабатываемых персональных данных
            соответствуют заявленным целям обработки. Не допускается
            избыточность обрабатываемых персональных данных по отношению к
            заявленным целям их обработки.
          </div>
          <div className="pb-5">
            5.6. При обработке персональных данных обеспечивается точность
            персональных данных, их достаточность, а в необходимых случаях и
            актуальность по отношению к целям обработки персональных данных.
            Оператор принимает необходимые меры и/или обеспечивает их принятие
            по удалению или уточнению неполных или неточных данных.
          </div>
          <div className="pb-5">
            5.7. Хранение персональных данных осуществляется в форме,
            позволяющей определить субъекта персональных данных, не дольше, чем
            этого требуют цели обработки персональных данных, если срок хранения
            персональных данных не установлен федеральным законом, договором,
            стороной которого, выгодоприобретателем или поручителем по которому
            является субъект персональных данных. Обрабатываемые персональные
            данные уничтожаются либо обезличиваются по достижении целей
            обработки или в случае утраты необходимости в достижении этих целей,
            если иное не предусмотрено федеральным законом.
          </div>
          <div className="pb-5">6. Цели обработки персональных данных</div>
          <div className="pb-5">
            6.1. Цель обработки информирование Пользователя посредством отправки
            электронных писем, предоставление доступа Пользователю к сервисам,
            информации и/или материалам, содержащимся на веб-сайте
          </div>
          <div className="pb-5">
            Персональные данные фамилия, имя, отчество, электронный адрес,
            номера телефонов, год, месяц, дата и место рождения фотографии
          </div>
          <div className="pb-5">
            Правовые основания уставные (учредительные) документы Оператора
            договоры, заключаемые между оператором и субъектом персональных
            данных
          </div>
          <div className="pb-5">
            Виды обработки персональных данных Сбор, запись, систематизация,
            накопление, хранение, уничтожение и обезличивание персональных
            данных Отправка информационных писем на адрес электронной почты
          </div>
          <div className="pb-5">7. Условия обработки персональных данных</div>
          <div className="pb-5">
            7.1. Обработка персональных данных осуществляется с согласия
            субъекта персональных данных на обработку его персональных данных.
          </div>
          <div className="pb-5">
            7.2. Обработка персональных данных необходима для достижения целей,
            предусмотренных международным договором Российской Федерации или
            законом, для осуществления возложенных законодательством Российской
            Федерации на оператора функций, полномочий и обязанностей.
          </div>
          <div className="pb-5">
            7.3. Обработка персональных данных необходима для осуществления
            правосудия, исполнения судебного акта, акта другого органа или
            должностного лица, подлежащих исполнению в соответствии с
            законодательством Российской Федерации об исполнительном
            производстве.
          </div>
          <div className="pb-5">
            7.4. Обработка персональных данных необходима для исполнения
            договора, стороной которого либо выгодоприобретателем или
            поручителем по которому является субъект персональных данных, а
            также для заключения договора по инициативе субъекта персональных
            данных или договора, по которому субъект персональных данных будет
            являться выгодоприобретателем или поручителем.
          </div>
          <div className="pb-5">
            7.5. Обработка персональных данных необходима для осуществления прав
            и законных интересов оператора или третьих лиц либо для достижения
            общественно значимых целей при условии, что при этом не нарушаются
            права и свободы субъекта персональных данных.
          </div>
          <div className="pb-5">
            7.6. Осуществляется обработка персональных данных, доступ
            неограниченного круга лиц к которым предоставлен субъектом
            персональных данных либо по его просьбе (далее — общедоступные
            персональные данные).
          </div>
          <div className="pb-5">
            7.7. Осуществляется обработка персональных данных, подлежащих
            опубликованию или обязательному раскрытию в соответствии с
            федеральным законом.
          </div>
          <div className="pb-5">
            8. Порядок сбора, хранения, передачи и других видов обработки
            персональных данныхБезопасность персональных данных, которые
            обрабатываются Оператором, обеспечивается путем реализации правовых,
            организационных и технических мер, необходимых для выполнения в
            полном объеме требований действующего законодательства в области
            защиты персональных данных.
          </div>
          <div className="pb-5">
            8.1. Оператор обеспечивает сохранность персональных данных и
            принимает все возможные меры, исключающие доступ к персональным
            данным неуполномоченных лиц.
          </div>
          <div className="pb-5">
            8.2. Персональные данные Пользователя никогда, ни при каких условиях
            не будут переданы третьим лицам, за исключением случаев, связанных с
            исполнением действующего законодательства либо в случае, если
            субъектом персональных данных дано согласие Оператору на передачу
            данных третьему лицу для исполнения обязательств по
            гражданско-правовому договору.
          </div>
          <div className="pb-5">
            8.3. В случае выявления неточностей в персональных данных,
            Пользователь может актуализировать их самостоятельно, путем
            направления Оператору уведомление на адрес электронной почты
            Оператора info@gaa.zone с пометкой «Актуализация персональных
            данных».
          </div>
          <div className="pb-5">
            8.4. Срок обработки персональных данных определяется достижением
            целей, для которых были собраны персональные данные, если иной срок
            не предусмотрен договором или действующим законодательством.
            Пользователь может в любой момент отозвать свое согласие на
            обработку персональных данных, направив Оператору уведомление
            посредством электронной почты на электронный адрес Оператора
            info@gaa.zone с пометкой «Отзыв согласия на обработку персональных
            данных».
          </div>
          <div className="pb-5">
            8.5. Вся информация, которая собирается сторонними сервисами, в том
            числе платежными системами, средствами связи и другими поставщиками
            услуг, хранится и обрабатывается указанными лицами (Операторами) в
            соответствии с их Пользовательским соглашением и Политикой
            конфиденциальности. Субъект персональных данных и/или с указанными
            документами. Оператор не несет ответственность за действия третьих
            лиц, в том числе указанных в настоящем пункте поставщиков услуг.
          </div>
          <div className="pb-5">
            8.6. Установленные субъектом персональных данных запреты на передачу
            (кроме предоставления доступа), а также на обработку или условия
            обработки (кроме получения доступа) персональных данных, разрешенных
            для распространения, не действуют в случаях обработки персональных
            данных в государственных, общественных и иных публичных интересах,
            определенных законодательством РФ.
          </div>
          <div className="pb-5">
            8.7. Оператор при обработке персональных данных обеспечивает
            конфиденциальность персональных данных.
          </div>
          <div className="pb-5">
            8.8. Оператор осуществляет хранение персональных данных в форме,
            позволяющей определить субъекта персональных данных, не дольше, чем
            этого требуют цели обработки персональных данных, если срок хранения
            персональных данных не установлен федеральным законом, договором,
            стороной которого, выгодоприобретателем или поручителем по которому
            является субъект персональных данных.
          </div>
          <div className="pb-5">
            8.9. Условием прекращения обработки персональных данных может
            являться достижение целей обработки персональных данных, истечение
            срока действия согласия субъекта персональных данных, отзыв согласия
            субъектом персональных данных или требование о прекращении обработки
            персональных данных, а также выявление неправомерной обработки
            персональных данных.
          </div>
          <div className="pb-5">
            9. Перечень действий, производимых Оператором с полученными
            персональными данными
          </div>
          <div className="pb-5">
            9.1. Оператор осуществляет сбор, запись, систематизацию, накопление,
            хранение, уточнение (обновление, изменение), извлечение,
            использование, передачу (распространение, предоставление, доступ),
            обезличивание, блокирование, удаление и уничтожение персональных
            данных.
          </div>
          <div className="pb-5">
            9.2. Оператор осуществляет автоматизированную обработку персональных
            данных с получением и/или передачей полученной информации по
            информационно-телекоммуникационным сетям или без таковой.
          </div>
          <div className="pb-5">
            10. Трансграничная передача персональных данных
          </div>
          <div className="pb-5">
            10.1. Оператор до начала осуществления деятельности по
            трансграничной передаче персональных данных обязан уведомить
            уполномоченный орган по защите прав субъектов персональных данных о
            своем намерении осуществлять трансграничную передачу персональных
            данных (такое уведомление направляется отдельно от уведомления о
            намерении осуществлять обработку персональных данных).
          </div>
          <div className="pb-5">
            10.2. Оператор до подачи вышеуказанного уведомления, обязан получить
            от органов власти иностранного государства, иностранных физических
            лиц, иностранных юридических лиц, которым планируется трансграничная
            передача персональных данных, соответствующие сведения.
          </div>
          <div className="pb-5">
            11. Конфиденциальность персональных данныхОператор и иные лица,
            получившие доступ к персональным данным, обязаны не раскрывать
            третьим лицам и не распространять персональные данные без согласия
            субъекта персональных данных, если иное не предусмотрено федеральным
            законом.
          </div>
          <div className="pb-5">12. Заключительные положения</div>
          <div className="pb-5">
            12.1. Пользователь может получить любые разъяснения по интересующим
            вопросам, касающимся обработки его персональных данных, обратившись
            к Оператору с помощью электронной почты info@gaa.zone.
          </div>
          <div className="pb-5">
            12.2. В данном документе будут отражены любые изменения политики
            обработки персональных данных Оператором. Политика действует
            бессрочно до замены ее новой версией.
          </div>
          <div className="pb-5">
            12.3. Актуальная версия Политики в свободном доступе расположена в
            сети Интернет по адресу http://gaa.zone/ruprivacypolicy.
          </div>
          <div className="pb-5">Дата публикации 01июня 2024 года</div>
          <div className="pb-5">Опубликовано Администрацией</div>
          <div className="pb-5">
            Администрация: Децентрализованная автономная организация Global
            Automotive Association
          </div>
        </div>
        <div className="text-center text-6xl font-bold">
          Политика конфиденциальности
        </div>
        <div className="text-center text-6xl font-bold">Cookie </div>
        <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
          <div className="pb-3 text-center font-bold">
            Уведомление об использовании Cookie
          </div>
          <div className="pb-5">
            Настройка блока, который позволяет посетителям выбирать и управлять
            Cookie-файлами на сайте
          </div>
          <div className="pb-5">Обязательные сookie-файлы</div>
          <div className="pb-5">
            Обязательные cookie включены по умолчанию. Их нельзя отключить, так
            как они используются для правильной работы системы и обеспечивают
            работу сайта, в том числе защиту от DDoS-атак. Аналитические и
            рекламные cookie-файлы
          </div>
          <div className="pb-5">Внутренняя статистика сайта</div>
          <div className="pb-5">
            Если посетитель не принял решение или отключил Cookie для аналитики,
            то внутренняя статистика сайта в любом случае зафиксирует переход,
            не используя сookie. При использовании такого метода может быть
            погрешность в результатах, но она не будет достигать более 10%
            посещений. Когда Cookie для аналитики разрешаются к использовании,
            событие досылается и посещение связывается с прошлым, чтобы
            статистика была точнее. Если во встроенной статистике включен режим
            упрощенной статистики, то сookie не будут создаваться в любом
            случае, даже если посетитель разрешил их использование. Google
            Analytics и Яндекс.Метрика. Пока посетитель не принял решение или
            отключил Cookie для аналитики, то код Google Analytics и Яндекс
            Метрики не будет передавать данных в системы аналитики. Код будет
            инициализирован только после действия пользователя. Некоторые cookie
            в счетчиках аналитики являются рекламными и будут активированы
            только после того, как будет получено разрешение на использование
            рекламных Cookie-файлов.
          </div>
          <div className="pb-5">Google Tag Manager</div>
          <div className="pb-5">
            Весь контейнер Google Tag Manager относится к аналитическим Cookie,
            и запрет использования этого типа Cookie будет влиять на работу
            всего кода GTM. Рекламные системы: пиксели Facebook, ВКонтакте и
            другие Пока посетитель не принял решение или отключил Cookie для
            рекламных систем, код пикселей Facebook и ВКонтакте не будет
            инициализирован и не будет передавать данные. Код начнет работать
            только после действия пользователя.
          </div>
          <div className="pb-5">
            Особенности работы сайта при отключенных cookie
          </div>
          <div className="pb-5">
            Передача UTM-меток вместе с данными формЕсли аналитические
            Cookie-файлы не разрешены посетителем, то при переходе на другую
            страницу UTM-метки не будут отправлены вместе с данными формы. Они
            будут отправлены только в случае, если форма была заполнена и
            отправлена на этой же странице.
          </div>
          <div className="pb-5">Дата публикации 01июня 2024 года</div>
          <div className="pb-5">Опубликовано Администрацией</div>
          <div className="pb-5">
            Администрация: Децентрализованная автономная организация Global
            Automotive Association
          </div>
        </div>
        <div className="flex flex-row pb-5">
          <div className="basis-1/5">01</div>
          <div className="basis-3/5 text-center text-p1-darkgreen">
            02
            <div className="my-5 p-2">
              <div className="text-center text-6xl font-bold text-p1-darkgreen">
                Изучи Web 3
              </div>
            </div>
          </div>
          <div className="basis-1/5">03</div>
        </div>
        <div className="flex flex-row p-2">
          <div className="basis-1/10">01</div>
          <div className="basis-8/10 text-p1-darkgreen">
            02
            <div className="my-5 space-y-6 rounded-3xl p-2">
              <div className="text-p1-darkgreen">
                Собранная информация содержит ключевые основы направления
                развития мирового сообщества в цифровой индустрии.
              </div>
              <div className="text-p1-darkgreen">
                Для кого то эта информация не нова, а для кого то станет
                открытием и появится понимание как это устроено.
              </div>
            </div>
          </div>
          <div className="basis-1/10">03</div>
        </div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details
            className="rounded-lg p-2 open:bg-p1-white open:shadow-lg open:ring-1 open:ring-black/5 dark:open:bg-slate-900 dark:open:ring-white/10"
            open
          >
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-white">
              Что такое Web 3?
            </summary>
            <div className="mt-3 text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                Web 3 (или Web 3.0) — это концепция следующего поколения
                интернета, которая ориентирована на децентрализацию и
                использование блокчейн-технологий для создания более открытой и
                защищенной сети. В отличие от Web 2.0, который характеризуется
                централизованными платформами и сервисами, Web3 предполагает
                использование децентрализованных приложений (dApps), умных
                контрактов и криптовалют для выполнения различных функций в
                интернете.
              </p>
              <div className="space-y-4 pb-5"></div>
              <div className="pb-5">Основные характеристики Web3:</div>
              <ul className="list-disc space-y-4 px-5">
                <li>
                  Децентрализация: Управление и данные хранятся на
                  распределенных сетях, а не на серверах, принадлежащих одной
                  компании.
                </li>
                <li>
                  Блокчейн: Использование блокчейн-технологий для обеспечения
                  прозрачности и безопасности транзакций.
                </li>
                <li>
                  Умные контракты: Автоматизированные контракты, которые
                  исполняются автоматически при выполнении определенных условий.
                </li>
                <li>
                  Криптовалюты и токены: Использование цифровых валют для
                  расчетов и токенов для управления и владения активами.
                </li>
                <li>
                  Идентичность и конфиденциальность: У пользователей больше
                  контроля над своей цифровой идентичностью и личными данными.
                </li>
              </ul>
            </div>
          </details>
        </div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-lg p-2 open:bg-p1-white open:shadow-lg open:ring-1 open:ring-black/5 dark:open:bg-slate-900 dark:open:ring-white/10">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-white">
              Для того чтобы лучше понять, что такое Web3 надо знать, что такое
              Web 1 и Web 2
            </summary>
            <div className="mt-3 text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>Web-1</p>
              <div className="space-y-4 pb-5"></div>
              <div className="pb-5">
                Web 1 (или Web 1.0) — это первая эпоха развития интернета,
                охватывающая период примерно с 1990 по начало 2000-х годов. В
                этот период интернет представлял собой в основном статические
                веб-страницы, которые пользователи могли просматривать, но не
                взаимодействовать с ними так, как это возможно в более поздних
                версиях интернета. Основные характеристики Web1 включают:
              </div>
              <ul className="list-disc space-y-4 px-5">
                <li>
                  Статический контент: Большинство веб-сайтов состояли из
                  статических HTML-страниц, которые редко обновлялись. Контент
                  создавался и публиковался веб-мастерами и не позволял
                  пользователям взаимодействовать с ним или вносить изменения.
                </li>
                <li>
                  Простые веб-технологии: Основными технологиями были HTML
                  (HyperText Markup Language) для разметки страниц и HTTP
                  (HyperText Transfer Protocol) для передачи данных по сети. CSS
                  (Cascading Style Sheets) использовались для стилизации
                  страниц, но их возможности были ограничены.
                </li>
                <li>
                  Однонаправленное общение: Веб-сайты в основном предоставляли
                  информацию пользователям, но не обеспечивали интерактивности.
                  Пользователи могли только потреблять контент, но не могли
                  вносить свой вклад или взаимодействовать с другими
                  пользователями через сайт.
                </li>
                <li>
                  Отсутствие социальных медиа: В этот период не существовало
                  социальных сетей или других платформ для пользовательского
                  взаимодействия и создания контента. Большинство сайтов были
                  личными страницами, сайтами компаний или базами данных
                  информации.
                </li>
                <li>
                  Навигация через порталы и каталоги: Сайты, такие как Yahoo!,
                  предоставляли каталоги веб-страниц, упрощая пользователям
                  поиск информации. Поисковые системы, такие как AltaVista и
                  Lycos, начали появляться, но их возможности были ограничены по
                  сравнению с современными поисковыми системами.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5"> Примеры типичных сайтов Web1:</div>
            <ul className="list-disc space-y-2 px-5">
              <li> Информационные порталы: Yahoo!, AOL.</li>
              <li>Первые поисковые системы: AltaVista, Lycos.</li>
              <li>Первые коммерческие сайты: Amazon, eBay (в ранние годы).</li>
              <li>Личные страницы и блоги: Geocities, Angelfire.</li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5">
              Web1 был важным этапом в развитии интернета, заложившим основу для
              последующего перехода к Web 2.0 и дальнейшему развитию
              интерактивного и социально ориентированного интернета.
            </div>
          </details>
        </div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-lg p-2 open:bg-p1-white open:shadow-lg open:ring-1 open:ring-black/5 dark:open:bg-slate-900 dark:open:ring-white/10">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-white">
              Web 2
            </summary>
            <div className="mt-3 text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                Web 2 (или Web 2.0) — это вторая эпоха развития интернета,
                начавшаяся в начале 2000-х годов. Web2 представляет собой
                переход от статических веб-страниц и однонаправленного
                взаимодействия (характерных для Web1) к более динамичным и
                интерактивным веб-приложениям.
              </p>
              <div className="space-y-4 pb-5"></div>
              <div className="pb-5">Основные характеристики Web2 включают:</div>
              <ul className="list-disc space-y-4 px-5">
                <li>
                  Динамический контент и интерактивность: В отличие от
                  статических страниц Web1, сайты Web2 содержат динамический
                  контент, который может изменяться в реальном времени.
                  Пользователи могут взаимодействовать с сайтами и друг с другом
                  через комментарии, лайки, форумы и другие механизмы.
                </li>
                <li>
                  Социальные сети и создание пользовательского контента: Web2
                  характеризуется ростом социальных медиа платформ, таких как
                  Facebook, Twitter, Instagram, и YouTube. Эти платформы
                  позволяют пользователям создавать и делиться контентом, а
                  также взаимодействовать друг с другом.
                </li>
                <li>
                  Веб-приложения: Web2 включает развитие сложных веб-приложений,
                  таких как Google Docs, которые предоставляют функциональность,
                  сравнимую с настольным программным обеспечением, но работают в
                  браузере.
                </li>
                <li>
                  Ajax и JavaScript: Технологии, такие как Ajax (Asynchronous
                  JavaScript and XML), JavaScript, и более современные
                  фреймворки (например, React, Angular), позволяют создавать
                  более отзывчивые и интерактивные пользовательские интерфейсы.
                </li>
                <li>
                  API и Mashup: Web2 активно использует API (Application
                  Programming Interface) для интеграции различных сервисов и
                  данных. Это позволяет создавать mashup-приложения,
                  комбинирующие данные и функциональность из разных источников.
                </li>
                <li>
                  Совместное использование и коллаборация: Платформы, такие как
                  Wikipedia и различные онлайн-редакторы, позволяют
                  пользователям совместно работать над контентом, внося
                  изменения и дополнения в реальном времени.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5">
              Примеры типичных сайтов и приложений Web2:
            </div>
            <ul className="list-disc space-y-2 px-5">
              <li>Социальные сети: Facebook, Twitter, LinkedIn, Instagram.</li>
              <li>Платформы для обмена видео: YouTube, Vimeo.</li>
              <li>Блоги и платформы для публикации: WordPress, Medium.</li>
              <li>
                Совместные онлайн-инструменты: Google Docs, Trello, Slack.
              </li>
              <li>Электронная коммерция: Amazon, eBay.</li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5">
              Web2 принес значительные изменения в способах взаимодействия
              пользователей с интернетом, сделав его более интерактивным,
              социальным и ориентированным на пользовательский контент. Этот
              этап развития интернета заложил основу для дальнейшего прогресса,
              который мы видим в концепции Web3.
            </div>
          </details>
        </div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-lg p-2 open:bg-p1-white open:shadow-lg open:ring-1 open:ring-black/5 dark:open:bg-slate-900 dark:open:ring-white/10">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-white">
              Децентрализация
            </summary>
            <div className="mt-3 text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                Децентрализация — это процесс распределения власти, управления и
                принятия решений от центрального органа или единой точки
                контроля к более распределенной системе или сети. В контексте
                информационных технологий и блокчейн-технологий децентрализация
                имеет несколько ключевых аспектов:
              </p>
              <div className="space-y-4 pb-5"></div>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Технологическая децентрализация: В этой модели данные и
                  вычислительные ресурсы распределяются по множеству узлов или
                  серверов, а не хранятся и обрабатываются на одном центральном
                  сервере. Примером является блокчейн, где информация
                  распределяется по сети узлов, каждый из которых хранит копию
                  всей цепочки блоков.
                </li>
                <li>
                  Организационная децентрализация: В этой модели принятие
                  решений и управление распределяются между многими участниками
                  или организациями, а не сосредоточены в одной компании или
                  группе. Примером является децентрализованная автономная
                  организация (DAO), где участники коллективно принимают решения
                  через смарт-контракты.
                </li>
                <li>
                  Децентрализация власти: Это процесс распределения полномочий и
                  ответственности между различными уровнями управления или
                  группами. В контексте государств это может означать передачу
                  власти от центрального правительства к региональным или
                  местным органам власти.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen">
              Преимущества децентрализации:
            </div>
            <ul className="list-disc space-y-2 px-5 text-p1-darkgreen">
              <li>
                Повышенная безопасность: Распределение данных и процессов
                снижает риск взлома или отказа системы, так как нет единой точки
                отказа.
              </li>
              <li>
                Прозрачность и доверие: В децентрализованных системах транзакции
                и процессы часто открыты и проверяемы всеми участниками, что
                повышает доверие.
              </li>
            </ul>
            <div className="pb-5"> </div>
          </details>
        </div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-lg p-2 open:bg-p1-white open:shadow-lg open:ring-1 open:ring-black/5 dark:open:bg-slate-900 dark:open:ring-white/10">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-white">
              Что такое блокчейн?
            </summary>
            <div className="mt-3 text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                Блокчейн (blockchain) — это распределенная и защищенная
                технология хранения данных, представляющая собой цепочку блоков,
                каждый из которых содержит информацию. Эта информация может
                включать данные о транзакциях, смарт-контрактах или любых других
                событиях, которые должны быть зафиксированы и защищены от
                изменений. Основные особенности блокчейна включают
                децентрализацию, неизменяемость и безопасность.
              </p>
              <div className="space-y-4 pb-5"></div>
              <p>Основные характеристики блокчейна:</p>
              <div className="pb-5"></div>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Децентрализация: Данные в блокчейне хранятся на множестве
                  узлов (компьютеров), которые образуют сеть. Все узлы имеют
                  копию всей цепочки блоков, что исключает необходимость в
                  центральном органе контроля и повышает устойчивость системы.
                </li>
                <li>
                  Неизменяемость: Каждый блок содержит хеш предыдущего блока,
                  что делает невозможным изменение информации в блоке без
                  изменения всех последующих блоков. Это обеспечивает
                  целостность и надежность данных, записанных в блокчейн.
                </li>
                <li>
                  Прозрачность и проверяемость: В публичных блокчейнах данные
                  доступны всем участникам сети, что обеспечивает прозрачность.
                  Любой желающий может проверить транзакции и убедиться в их
                  подлинности.
                </li>
                <li>
                  Безопасность: Блокчейн использует криптографические методы для
                  защиты данных и обеспечения их аутентичности. Сложные
                  математические алгоритмы защищают данные от
                  несанкционированного доступа и изменений.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen">Как работает блокчейн:</div>
            <ul className="list-disc space-y-2 px-5 text-p1-darkgreen">
              <li>
                Создание транзакции: Пользователь создает транзакцию, которая
                включает информацию, такую как перевод криптовалюты, данные
                смарт-контракта или любое другое событие.
              </li>
              <li>
                Проверка транзакции: Транзакция передается в сеть, где она
                проверяется узлами на предмет правильности и соответствия
                правилам консенсуса (например, Proof of Work или Proof of
                Stake).
              </li>
              <li>
                Добавление в блок: Проверенные транзакции объединяются в блоки.
                Каждый блок содержит хеш предыдущего блока, создавая таким
                образом цепочку.
              </li>
              <li>
                Закрепление блока: После того как блок создан и подтвержден
                узлами, он добавляется к цепочке блоков, и информация становится
                неизменяемой.
              </li>
              <li>
                Распределение и синхронизация: Обновленный блокчейн передается
                всем узлам сети, которые обновляют свои копии цепочки блоков.
              </li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen">
              Примеры использования блокчейна:
            </div>
            <ul className="list-disc space-y-2 px-5 text-p1-darkgreen">
              <li>
                Криптовалюты: Самым известным применением блокчейна являются
                криптовалюты, такие как Bitcoin и Ethereum. Они используют
                блокчейн для децентрализованного и безопасного учета транзакций.
              </li>
              <li>
                Смарт-контракты: Платформы, такие как Ethereum, используют
                блокчейн для выполнения смарт-контрактов, которые автоматически
                выполняются при соблюдении заранее определенных условий.
              </li>
              <li>
                Управление цепочками поставок: Блокчейн может использоваться для
                отслеживания движения товаров по цепочке поставок, обеспечивая
                прозрачность и аутентичность данных.
              </li>
              <li>
                Децентрализованные приложения (dApps): Приложения, работающие на
                блокчейне, обеспечивают децентрализованное выполнение различных
                функций без необходимости в центральном сервере.
              </li>
              <li>
                Голосование: Блокчейн может использоваться для проведения
                безопасных и прозрачных голосований, исключая возможность
                фальсификаций.
              </li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen">
              Преимущества блокчейна:
            </div>
            <ul className="list-disc space-y-2 px-5 text-p1-darkgreen">
              <li>
                Устойчивость к взломам: Децентрализованная природа блокчейна
                делает его устойчивым к атакам, так как нет единой точки отказа.
              </li>
              <li>
                Прозрачность: Все участники сети могут видеть данные и проверять
                их подлинность.
              </li>
              <li>
                Снижение затрат: Блокчейн устраняет необходимость в посредниках,
                что может снизить операционные расходы.
              </li>
              <li>
                Автоматизация: Смарт-контракты и децентрализованные приложения
                могут автоматизировать множество процессов, делая их быстрее и
                надежнее.
              </li>
            </ul>
            <div className="pb-5"> </div>
            <div className="pb-5 text-p1-darkgreen">
              Блокчейн — это мощная технология, которая открывает новые
              возможности для безопасного и децентрализованного хранения и
              обработки данных, находя применение во множестве отраслей, от
              финансов до управления цепочками поставок.
            </div>
          </details>
        </div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-lg p-2 open:bg-p1-white open:shadow-lg open:ring-1 open:ring-black/5 dark:open:bg-slate-900 dark:open:ring-white/10">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-white">
              Смарт-контракты
            </summary>
            <div className="mt-3 text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                Смарт-контракты (англ. smart contracts) — это самоисполняющиеся
                контракты с условиями соглашения между покупателем и продавцом,
                написанными непосредственно в строках кода. Эти контракты
                существуют на блокчейне и автоматически выполняются, когда
                определенные условия соблюдаются. Смарт-контракты обеспечивают
                прозрачность, безопасность и автоматизацию процессов, устраняя
                необходимость в посредниках.
              </p>
              <div className="space-y-4 pb-5"></div>
              <p>Основные характеристики смарт-контрактов:</p>
              <div className="pb-5"></div>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Автономность: Смарт-контракты исполняются автоматически без
                  необходимости вмешательства человека, как только выполнены
                  заранее определенные условия.
                </li>
                <li>
                  Децентрализация: Они работают на блокчейне, что означает, что
                  они не контролируются одной центральной организацией или
                  сервером.
                </li>
                <li>
                  Прозрачность: Все участники сети могут проверить условия
                  контракта и его выполнение, что увеличивает доверие и снижает
                  риски мошенничества.
                </li>
                <li>
                  Неизменяемость: После развертывания на блокчейне
                  смарт-контракт не может быть изменен, что обеспечивает
                  надежность и неизменность условий.
                </li>
                <li>
                  Безопасность: Код и транзакции защищены криптографией, что
                  делает их устойчивыми к взломам и манипуляциям.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen">
              Как работают смарт-контракты: :
            </div>
            <ul className="list-disc space-y-2 px-5 text-p1-darkgreen">
              <li>
                Создание и развертывание: Смарт-контракт создается разработчиком
                с использованием языка программирования, такого как Solidity для
                Ethereum. Затем он развертывается на блокчейне.
              </li>
              <li>
                Выполнение условий: Смарт-контракт содержит логические условия
                (например, &quot;если-это-то-то&quot;), которые проверяются и
                выполняются автоматически при соблюдении определенных условий.
              </li>
              <li>
                Автоматическое исполнение: Если условия соблюдены,
                смарт-контракт выполняет запрограммированные действия, такие как
                перевод средств, регистрация данных или запуск других
                смарт-контрактов.
              </li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen">
              Примеры использования смарт-контрактов:
            </div>
            <ul className="list-disc space-y-2 px-5 text-p1-darkgreen">
              <li>
                Финансовые услуги: Смарт-контракты могут автоматизировать
                процессы, такие как кредитование, страхование и торговля
                активами. Например, DeFi (децентрализованные финансы) используют
                смарт-контракты для создания финансовых продуктов без
                необходимости в традиционных финансовых учреждениях.
              </li>
              <li>
                Логистика и управление цепочками поставок: Смарт-контракты могут
                отслеживать движение товаров, автоматизировать платежи и
                управлять поставками на основе предопределенных условий.
              </li>
              <li>
                Управление цифровыми активами: Смарт-контракты могут
                использоваться для создания и управления токенами, включая NFT
                (невзаимозаменяемые токены), которые представляют собой
                уникальные цифровые объекты, такие как произведения искусства,
                коллекционные предметы и виртуальная недвижимость.
              </li>
              <li>
                Управление организациями: Децентрализованные автономные
                организации (DAO) используют смарт-контракты для принятия
                коллективных решений и управления ресурсами организации на
                основе голосования участников.
              </li>
              <li>
                Юридические соглашения: Смарт-контракты могут автоматизировать
                выполнение юридических соглашений, таких как аренда недвижимости
                или контракты на оказание услуг.
              </li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen">
              Примеры платформ для создания смарт-контрактов:
            </div>
            <ul className="list-disc space-y-2 px-5 text-p1-darkgreen">
              <li>
                Ethereum: Самая известная и широко используемая платформа для
                создания смарт-контрактов. Использует язык программирования
                Solidity.
              </li>
              <li>
                EOS: Платформа, ориентированная на высокую производительность и
                масштабируемость смарт-контрактов.
              </li>
              <li>
                Tron: Платформа, предназначенная для создания децентрализованных
                приложений и смарт-контрактов, с акцентом на мультимедийные
                приложения.
              </li>
              <li>
                Cardano: Платформа, известная своим научным подходом к
                разработке и безопасностью смарт-контрактов. Смарт-контракты
                революционизируют множество отраслей, автоматизируя процессы и
                создавая новые возможности для взаимодействия без посредников.
              </li>
            </ul>
          </details>
        </div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-lg p-2 open:bg-p1-white open:shadow-lg open:ring-1 open:ring-black/5 dark:open:bg-slate-900 dark:open:ring-white/10">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-white">
              ДАО (Децентрализованная автономная организация)
            </summary>
            <div className="mt-3 text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                ДАО (Децентрализованная автономная организация) — это
                организация, управляемая с помощью блокчейн-технологий и
                смарт-контрактов, которая функционирует без центрального
                управления. В DAO решения принимаются коллективно участниками
                организации, часто посредством голосования с использованием
                токенов.
              </p>
              <div className="space-y-4 pb-5"></div>
              <p>Основные характеристики и принципы DAO включают:</p>
              <div className="pb-5"></div>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Децентрализованное управление: В DAO нет единого управляющего
                  органа или централизованного управления. Вся деятельность
                  организации контролируется и управляется коллективно
                  участниками через смарт-контракты.
                </li>
                <li>
                  Прозрачность и открытость: Все действия и транзакции DAO
                  записываются в блокчейн, что делает их прозрачными и
                  проверяемыми для всех участников. Это повышает доверие между
                  участниками, так как все действия можно проверить.
                </li>
                <li>
                  Смарт-контракты: Основой функционирования DAO являются
                  смарт-контракты — автоматизированные программы, которые
                  исполняются при выполнении определенных условий. Эти контракты
                  прописывают правила и процедуры работы DAO и гарантируют их
                  соблюдение без необходимости в центральном посреднике.
                </li>
                <li>
                  Голосование и участие: Участники DAO часто имеют право голоса
                  пропорционально количеству принадлежащих им токенов.
                  Голосование может использоваться для принятия решений о
                  развитии проекта, распределении ресурсов и других важных
                  вопросах.
                </li>
                <li>
                  Автономность: DAO функционируют автономно, следуя заложенным в
                  смарт-контрактах правилам. Это минимизирует необходимость
                  вмешательства людей и снижает риск человеческих ошибок или
                  злоупотреблений.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen">
              Примеры использования DAO:
            </div>
            <ul className="list-disc space-y-2 px-5 text-p1-darkgreen">
              <li>
                Финансовые проекты: DAO могут управлять фондами и инвестициями,
                распределяя средства по проектам на основе коллективного
                голосования.
              </li>
              <li>
                Социальные и благотворительные проекты: Участники могут
                совместно управлять благотворительными фондами и распределять
                помощь на основе голосования.
              </li>
              <li>
                Децентрализованные платформы: Управление децентрализованными
                приложениями и сервисами, такими как платформы для обмена
                контентом или социальные сети, может осуществляться через DAO.
              </li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen">Примеры известных DAO:</div>
            <ul className="list-disc space-y-2 px-5 text-p1-darkgreen">
              <li>
                The DAO: Один из первых и самых известных примеров DAO,
                созданный в 2016 году на платформе Ethereum. Он собрал
                значительные средства через краудфандинг, но вскоре столкнулся с
                уязвимостью, которая привела к хакерской атаке и значительным
                потерям.
              </li>
              <li>
                MakerDAO: Платформа, управляющая стейблкоином DAI. Участники
                могут голосовать за изменения в протоколе и параметрах системы,
                таких как процентные ставки.
              </li>
              <li>
                Aragon: Платформа, предоставляющая инструменты для создания и
                управления DAO, включая интерфейсы для голосования и управления
                активами.
              </li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen">
              DAO представляет собой инновационный способ организации и
              управления, который использует возможности блокчейн-технологий для
              обеспечения прозрачности, безопасности и децентрализации.
            </div>
          </details>
        </div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-lg p-2 open:bg-p1-white open:shadow-lg open:ring-1 open:ring-black/5 dark:open:bg-slate-900 dark:open:ring-white/10">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-white">
              Организация хранения данных в децентрализованной сети по техологии
              IPFS
            </summary>
            <div className="mt-3 text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                IPFS (InterPlanetary File System, Межпланетная файловая система)
                — это децентрализованная система хранения и обмена файлами,
                разработанная для создания более устойчивого и доступного
                интернета. IPFS использует P2P (peer-to-peer) технологию для
                распределенного хранения данных, что обеспечивает надежность,
                скорость и устойчивость к цензуре.
              </p>
              <div className="space-y-4 pb-5"></div>
              <p>Основные особенности и принципы IPFS включают:</p>
              <div className="pb-5"></div>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Децентрализованное хранилище: В отличие от традиционных
                  централизованных серверов, IPFS использует распределенную сеть
                  узлов, где каждый узел может хранить и передавать данные. Это
                  делает систему более устойчивой к сбоям и атакам.
                </li>
                <li>
                  Контент-адресация: В IPFS файлы идентифицируются и
                  запрашиваются по их содержимому, а не по их местоположению.
                  Каждому файлу или фрагменту данных присваивается уникальный
                  хеш, который используется для его поиска и извлечения. Если
                  содержимое файла изменится, изменится и его хеш.
                </li>
                <li>
                  P2P-сеть: IPFS использует P2P-сеть для обмена данными между
                  узлами. Узлы могут запрашивать, хранить и передавать файлы
                  друг другу, что повышает общую скорость и эффективность сети.
                </li>
                <li>
                  Версионирование и иммутабельность: IPFS поддерживает
                  версионирование данных, что позволяет хранить и отслеживать
                  изменения файлов со временем. Также данные в IPFS являются
                  неизменяемыми (иммутабельными), что гарантирует их
                  целостность.
                </li>
                <li>
                  Снижение нагрузки на серверы: За счет распределенного хранения
                  и кеширования данных на узлах, IPFS снижает нагрузку на
                  центральные серверы и увеличивает доступность контента.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen"> Преимущества IPFS:</div>
            <ul className="list-disc space-y-2 px-5 text-p1-darkgreen">
              <li>
                Устойчивость к сбоям: Данные дублируются и распределяются по
                множеству узлов, что делает систему устойчивой к отказам и
                потерям данных.
              </li>
              <li>
                Скорость и эффективность: Контент может быть извлечен из
                ближайших узлов, что уменьшает задержки и повышает скорость
                загрузки.
              </li>
              <li>
                Устойчивость к цензуре: Децентрализованная природа IPFS
                затрудняет контроль или блокировку доступа к информации.
              </li>
              <li>
                Экономия ресурсов: За счет распределенного хранения и обмена
                данными IPFS может снизить затраты на инфраструктуру.
              </li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen">
              Примеры использования IPFS:
            </div>
            <ul className="list-disc space-y-2 px-5 text-p1-darkgreen">
              <li>
                Децентрализованные приложения (dApps): Многие
                блокчейн-приложения используют IPFS для хранения данных, таких
                как смарт-контракты, метаданные и пользовательский контент.
              </li>
              <li>
                Хранение и передача больших файлов: IPFS подходит для хранения и
                передачи больших объемов данных, таких как мультимедийные файлы,
                научные данные и архивы.
              </li>
              <li>
                Обеспечение устойчивости сайтов: Веб-сайты могут быть развернуты
                на IPFS, чтобы повысить их доступность и защиту от атак.
              </li>
              <li>
                Хранение данных в блокчейн-проектах: Проекты, такие как
                Filecoin, используют IPFS для обеспечения децентрализованного
                хранилища данных с экономическими стимулами.
              </li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen">
              IPFS представляет собой мощный инструмент для создания более
              децентрализованного, безопасного и эффективного интернета,
              позволяя пользователям хранить и обмениваться данными без
              необходимости в доверенных посредниках или центральных серверах.
            </div>
          </details>
        </div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-lg p-2 open:bg-p1-white open:shadow-lg open:ring-1 open:ring-black/5 dark:open:bg-slate-900 dark:open:ring-white/10">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-white">
              Организация хранения данных в децентрализованной сети по техологии
              Blockweave
            </summary>
            <div className="mt-3 text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                Blockweave — это уникальная структура хранения данных,
                используемая в сети Arweave. Она отличается от традиционных
                блокчейнов тем, что каждый блок в сети не только ссылается на
                предыдущий блок, но и на случайные более старые блоки. Это
                переплетение (weaving) блоков обеспечивает более эффективное и
                долговременное хранение данных. Такой подход позволяет снизить
                требования к хранению для узлов сети и обеспечивает устойчивость
                к потерям данных, делая сеть более надежной и масштабируемой.
              </p>
            </div>
          </details>
        </div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-lg p-2 open:bg-p1-white open:shadow-lg open:ring-1 open:ring-black/5 dark:open:bg-slate-900 dark:open:ring-white/10">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-white">
              Что такое токен?
            </summary>
            <div className="mt-3 text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                Токен — это цифровой актив, представляющий собой единицу
                стоимости или права, созданный и управляемый с использованием
                блокчейн-технологий. Токены могут иметь различные функции и
                применения, от финансовых инструментов до представления прав на
                активы или доступа к услугам.
              </p>
              <div className="space-y-4 pb-5"></div>
              <p>Основные виды токенов:</p>
              <div className="pb-5"></div>

              <ul className="list-disc px-5">
                <li>Фунгибельные токены (Fungible Tokens):</li>
              </ul>
              <div className="pb-5"></div>
              <div className="pb-5">
                Криптовалюты: Примеры включают Bitcoin (BTC), Ethereum (ETH),
                которые являются взаимозаменяемыми и могут использоваться для
                обмена и платежей.
              </div>
              <div className="pb-5">
                Стейблкоины: Токены, привязанные к стоимости традиционных валют,
                таких как USDT (Tether), USDC, DAI, обеспечивающие стабильность
                цен.
              </div>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Невзаимозаменяемые токены (Non-Fungible Tokens, NFT):
                  Коллекционные предметы и цифровое искусство: Каждый токен
                  уникален и не может быть заменен другим на равных условиях.
                  Примеры включают цифровые произведения искусства, виртуальные
                  игровые предметы и коллекционные карточки.
                </li>
                <li>
                  Утилитарные токены (Utility Tokens):Доступ к услугам и
                  продуктам: Эти токены предоставляют доступ к определенным
                  услугам или продуктам на платформе. Например, токены,
                  используемые для оплаты транзакционных сборов или доступа к
                  дополнительным функциям в децентрализованных приложениях
                  (dApps).
                </li>
                <li>
                  Безопасные токены (Security Tokens):Инвестиционные
                  инструменты: Представляют собой доли в реальных активах, таких
                  как акции компаний, недвижимость или другие финансовые
                  инструменты. Эти токены подлежат регулированию, как и
                  традиционные ценные бумаги.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen">
              Примеры использования токенов:
            </div>
            <ul className="list-disc space-y-2 px-5 text-p1-darkgreen">
              <li>
                Финансовые транзакции: Криптовалюты используются для быстрых и
                дешевых транзакций по всему миру без необходимости в банках или
                посредниках.
              </li>
              <li>
                Коллекционирование и искусство: NFT позволяют художникам и
                коллекционерам торговать уникальными цифровыми произведениями
                искусства и предметами коллекционирования.
              </li>
              <li>
                Голосование и управление: В децентрализованных автономных
                организациях (DAO) токены могут использоваться для голосования и
                принятия решений коллективно.
              </li>
              <li>
                Доступ к услугам: Утилитарные токены могут предоставлять доступ
                к премиум-функциям на платформе или к определенным сервисам,
                таким как облачное хранилище или программное обеспечение.
              </li>
              <li>
                Инвестиции и владение активами: Безопасные токены позволяют
                инвесторам приобретать и торговать долями в реальных активах,
                таких как недвижимость или доли в бизнесе, с помощью блокчейна.
              </li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen"> Преимущества токенов:</div>
            <ul className="list-disc space-y-2 px-5 text-p1-darkgreen">
              <li>
                Быстрые и дешевые транзакции: Токены позволяют проводить
                транзакции быстро и с низкими издержками по сравнению с
                традиционными финансовыми системами.
              </li>
              <li>
                Прозрачность и безопасность: Токены и их транзакции записываются
                в блокчейн, что обеспечивает прозрачность и защиту от подделок и
                мошенничества.
              </li>
              <li>
                Децентрализация: Использование токенов позволяет исключить
                посредников и централизованные органы управления, что делает
                системы более устойчивыми и независимыми.
              </li>
              <li>
                Глобальный доступ: Токены могут быть использованы в любой точке
                мира, что упрощает международные транзакции и доступ к услугам.
              </li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen">
              Токены играют важную роль в экосистеме блокчейна и
              децентрализованных технологий, предоставляя новые возможности для
              финансовых операций, управления активами и создания новых
              бизнес-моделей.
            </div>
          </details>
        </div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-lg p-2 open:bg-p1-white open:shadow-lg open:ring-1 open:ring-black/5 dark:open:bg-slate-900 dark:open:ring-white/10">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-white">
              Что такое NFT?
            </summary>
            <div className="mt-3 text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                NFT (Non-Fungible Token, невзаимозаменяемый токен) — это
                уникальный цифровой актив, который представляет собой право
                собственности или доступ к определенному уникальному объекту или
                контенту. В отличие от взаимозаменяемых токенов, таких как
                биткоины или эфир, каждый NFT имеет уникальный идентификатор и
                не может быть обменен на другой NFT на равных условиях.
              </p>
              <div className="space-y-4 pb-5"></div>
              <p>Основные характеристики NFT:</p>
              <div className="pb-5"></div>

              <ul className="list-disc space-y-4 px-5 text-p1-darkgreen">
                <li>
                  Уникальность: Каждый NFT имеет уникальный идентификатор и
                  метаданные, которые отличают его от других токенов. Эти
                  метаданные могут включать информацию о создателе, владельце,
                  истории продаж и других атрибутах.
                </li>
                <li>
                  Невзаимозаменяемость: NFT не могут быть обменены на другие NFT
                  на основе равенства. Это делает их идеальными для
                  представления уникальных предметов, таких как произведения
                  искусства, коллекционные предметы, игровые предметы и т.д.
                </li>

                <li>
                  Цифровая собственность: Владелец NFT имеет право собственности
                  на связанный цифровой актив, который может быть проверен и
                  подтвержден через блокчейн.
                </li>
                <li>
                  Прозрачность и проверяемость: Вся история транзакций и
                  изменений владельца NFT записывается в блокчейн, что делает их
                  подлинность и происхождение легко проверяемыми.
                </li>
              </ul>
              <div className="pb-5"></div>
              <div className="space-y-4 pb-5 text-p1-darkgreen">
                Примеры использования NFT:
              </div>

              <ul className="list-disc space-y-4 px-5 text-p1-darkgreen">
                <li>
                  Цифровое искусство: Художники создают и продают свои
                  произведения в виде NFT, предоставляя покупателям уникальные и
                  проверяемые права на цифровое искусство.
                </li>
                <li>
                  Коллекционные предметы: NFT используются для создания и
                  торговли цифровыми коллекционными предметами, такими как
                  карточки, мемы и другие уникальные цифровые объекты.
                </li>
                <li>
                  Игровые предметы: В видеоиграх NFT могут представлять
                  уникальные игровые предметы, персонажей или виртуальную
                  недвижимость, которые могут быть проданы или обменены между
                  игроками.
                </li>
                <li>
                  Музыка и видео: Музыканты и кинематографисты могут выпускать
                  свои произведения в виде NFT, предоставляя эксклюзивный доступ
                  или право собственности на контент.
                </li>
                <li>
                  Виртуальные миры и метавселенные: Виртуальные объекты,
                  недвижимость и другие элементы в метавселенных могут быть
                  представлены в виде NFT, что позволяет пользователям владеть и
                  торговать виртуальными активами.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen"> Преимущества NFT:</div>
            <ul className="list-disc space-y-2 px-5 text-p1-darkgreen">
              <li>
                Подлинность и право собственности: NFT позволяют легко проверять
                подлинность и право собственности на цифровые активы.
              </li>
              <li>
                Монетизация цифрового контента: Создатели контента могут
                получать вознаграждение за свою работу, продавая свои
                произведения в виде NFT.
              </li>
              <li>
                Прозрачность и доверие: Блокчейн обеспечивает прозрачность и
                безопасность всех транзакций с NFT.
              </li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen">
              Технологии и платформы:
            </div>
            <ul className="list-disc space-y-2 px-5 text-p1-darkgreen">
              <li>
                Ethereum: Самая популярная платформа для создания и торговли NFT
                благодаря стандарту ERC-721 и ERC-1155, который поддерживает
                уникальные и взаимозаменяемые токены.
              </li>
              <li>
                Solana: Быстрая и масштабируемая блокчейн-платформа, также
                используемая для создания NFT.
              </li>
              <li>
                Flow: Блокчейн, специально разработанный для приложений и игр,
                поддерживающих NFT.
              </li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen">
              NFT открывают новые возможности для цифрового мира, предоставляя
              способ оцифровывать, проверять и торговать уникальными цифровыми
              активами, что изменяет подход к собственности и монетизации
              контента в интернете.
            </div>
          </details>
        </div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-lg p-2 open:bg-p1-white open:shadow-lg open:ring-1 open:ring-black/5 dark:open:bg-slate-900 dark:open:ring-white/10">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-white">
              Каким образом хранится NFT и сведения о том, что я собственник?
            </summary>
            <div className="mt-3 text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                NFT (невзаимозаменяемые токены) представляют собой уникальные
                цифровые активы, которые хранятся на блокчейне. Однако, в
                отличие от криптовалют, таких как биткоин или эфир, NFT обычно
                не содержат саму цифровую картину, видео или другой контент, с
                которым они связаны. Вместо этого они содержат ссылки и
                метаданные, которые указывают на местоположение этого контента,
                а также информацию о собственности и другие данные.
              </p>
              <div className="space-y-4 pb-5"></div>
              <p>Как хранится NFT:</p>
              <div className="pb-5"></div>

              <ul className="list-disc space-y-4 px-5 text-p1-darkgreen">
                <li>
                  Хранение на блокчейне:NFT состоит из записи на блокчейне,
                  содержащей уникальный идентификатор токена, метаданные и
                  ссылку на цифровой актив. Метаданные могут включать информацию
                  о создателе, дате создания, описании, характеристиках и ссылке
                  на сам контент.
                </li>
                <li>
                  Хранение контента вне блокчейна:Сам цифровой контент
                  (например, изображение, видео, аудио) часто хранится вне
                  блокчейна из-за больших размеров файлов и ограничений на
                  хранение данных в блокчейне. Чаще всего контент хранится в
                  децентрализованных хранилищах, таких как IPFS (InterPlanetary
                  File System), или на централизованных серверах.
                </li>
              </ul>
              <div className="pb-5"></div>
              <div className="space-y-4 pb-5 text-p1-darkgreen">
                Сведения о собственности:
              </div>

              <ul className="list-disc space-y-4 px-5 text-p1-darkgreen">
                <li>
                  Запись о собственности:Владелец NFT записан в блокчейн, что
                  обеспечивает неизменяемость и проверяемость записи о
                  собственности. Приобретение NFT осуществляется через
                  транзакцию на блокчейне, которая регистрирует смену владельца
                  токена.
                </li>
                <li>
                  Проверка собственности:Любой пользователь может проверить
                  владельца NFT, просматривая информацию на блокчейне через
                  публичные блокчейн-эксплореры, такие как Etherscan для
                  Ethereum.NFT содержит уникальный идентификатор и адрес
                  текущего владельца, что позволяет легко проверить подлинность
                  и текущего владельца токена.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen"> Пример процесса:</div>
            <ul className="list-disc space-y-2 px-5 text-p1-darkgreen">
              <li>
                Создание NFT: Художник или создатель контента создает цифровое
                произведение искусства. Он загружает контент в
                децентрализованное хранилище, такое как IPFS, и получает
                уникальный хэш (идентификатор) файла. Затем он создает NFT на
                платформе, такой как OpenSea или Rarible, и включает в
                метаданные токена ссылку на IPFS-хэш и другую необходимую
                информацию.
              </li>
              <li>
                Покупка и передача NFT: Покупатель находит интересующий его NFT
                на маркетплейсе и покупает его. Транзакция регистрируется на
                блокчейне, и запись о собственности обновляется, указывая на
                нового владельца. Новый владелец может хранить NFT в своем
                криптовалютном кошельке, таком как MetaMask, и управлять им
                через совместимые платформы.
              </li>
            </ul>
            <div className="pb-5"> </div>
            <div className="pb-5 text-p1-darkgreen">
              Безопасность и долговечность:
            </div>
            <ul className="list-disc space-y-2 px-5 text-p1-darkgreen">
              <li>
                Информация о собственности и транзакции надежно защищены и
                неизменяемы благодаря криптографическим механизмам
              </li>
            </ul>
            <div className="pb-5"> </div>
            <div className="pb-5 text-p1-darkgreen">
              Проблемы с хранением вне блокчейна:
            </div>
            <ul className="list-disc space-y-2 px-5 text-p1-darkgreen">
              <li>
                Хранение контента вне блокчейна может создавать риски, если
                центральный сервер выйдет из строя или если ссылки на контент
                перестанут работать.
              </li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen">
              Децентрализованные системы хранения, такие как IPFS, более
              устойчивы к этим рискам, поскольку контент децентрализованно
              хранится на многих узлах сети.
            </div>
            <div className="pb-5 text-p1-darkgreen">
              NFT и блокчейн обеспечивают надежный способ подтверждения права
              собственности на уникальные цифровые активы, а децентрализованные
              хранилища помогают хранить контент безопасно и доступно.
            </div>
          </details>
        </div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-lg p-2 open:bg-p1-white open:shadow-lg open:ring-1 open:ring-black/5 dark:open:bg-slate-900 dark:open:ring-white/10">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-white">
              Что такое метаданные?
            </summary>
            <div className="mt-3 text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                Метаданные — это данные, которые описывают и предоставляют
                информацию о других данных. В контексте цифровых активов, таких
                как NFT, метаданные играют важную роль, предоставляя подробности
                о самом активе, такие как название, описание, автор, дата
                создания, и ссылки на связанный контент (например, изображения,
                видео, аудио).
              </p>
              <p>Метаданные в контексте NFT:</p>
              <div className="space-y-4 pb-5"></div>
              <p>
                Для NFT метаданные часто хранятся в формате JSON и могут
                включать следующие элементы:
              </p>
              <div className="pb-5"></div>

              <ul className="list-disc space-y-4 px-5 text-p1-darkgreen">
                <li>
                  Название (name):Название цифрового актива или произведения
                  искусства.
                </li>
                <li>
                  Описание (description):Краткое описание или история актива.
                </li>
                <li>
                  Изображение (image):Ссылка на изображение или видео,
                  представляющее актив. Часто эта ссылка указывает на ресурс,
                  хранящийся в децентрализованной сети, такой как IPFS.
                </li>
                <li>
                  Атрибуты (attributes):Дополнительные характеристики или
                  свойства актива, которые могут быть использованы, например, в
                  игровых NFT для описания уровней, способностей и т.д.
                </li>
                <li>
                  Создатель (creator):Информация о создателе или авторе актива.
                </li>
                <li>
                  Дата создания (creation_date):Дата и время создания актива.
                </li>
              </ul>
              <div className="pb-5"></div>
              <div className="space-y-4 pb-5 text-p1-darkgreen">
                Хранение метаданных:
              </div>
              <div className="space-y-4 pb-5 text-p1-darkgreen">
                Метаданные для NFT могут храниться как на блокчейне, так и вне
                его, в зависимости от платформы и требований:
              </div>

              <ul className="list-disc space-y-4 px-5 text-p1-darkgreen">
                <li>
                  На блокчейне:Включение метаданных прямо в смарт-контракт может
                  быть дорогостоящим из-за ограничений на размер данных и
                  высоких транзакционных издержек.
                </li>
                <li>
                  Вне блокчейна:Часто метаданные хранятся в децентрализованных
                  системах хранения, таких как IPFS, Arweave или других
                  платформах. В блокчейне хранится ссылка (URI) на метаданные,
                  что обеспечивает доступ к ним.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen">
              Использование метаданных:
            </div>
            <ul className="list-disc space-y-2 px-5 text-p1-darkgreen">
              <li>
                Метаданные используются для отображения информации о NFT на
                различных платформах и в кошельках. При просмотре NFT платформа
                или приложение запрашивает метаданные по URI и отображает
                информацию и связанный контент пользователю.
              </li>
            </ul>
            <div className="pb-5"> </div>
            <div className="pb-5 text-p1-darkgreen">
              Преимущества использования метаданных:
            </div>
            <ul className="list-disc space-y-2 px-5 text-p1-darkgreen">
              <li>
                Дополнительная информация:Метаданные предоставляют подробную
                информацию о цифровом активе, что делает его более понятным и
                привлекательным для потенциальных покупателей и коллекционеров.
              </li>
              <li>
                Структурированность:Метаданные организуют информацию в
                структурированном формате, что облегчает обработку и отображение
                данных.
              </li>
              <li>
                Гибкость:Возможность добавления различных атрибутов и
                характеристик делает NFT более универсальными и пригодными для
                различных применений, таких как игры, коллекционирование и
                искусство.
              </li>
              <li>
                Совместимость:Стандарты метаданных, такие как формат JSON,
                обеспечивают совместимость с различными платформами и сервисами.
              </li>
            </ul>
            <div className="pb-5"> </div>
            <div className="pb-5 text-p1-darkgreen">
              Метаданные играют ключевую роль в экосистеме NFT, обеспечивая
              богатую и структурированную информацию о цифровых активах, которая
              помогает пользователям и платформам взаимодействовать с этими
              активами более эффективно.
            </div>
          </details>
        </div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="rounded-lg p-2 open:bg-p1-white open:shadow-lg open:ring-1 open:ring-black/5 dark:open:bg-slate-900 dark:open:ring-white/10">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-white">
              Что такое MetaMask?
            </summary>
            <div className="mt-3 text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                MetaMask — это популярный криптовалютный кошелек и инструмент
                для взаимодействия с блокчейном Ethereum, который позволяет
                пользователям управлять своими эфирами (ETH) и токенами, а также
                взаимодействовать с децентрализованными приложениями (dApps).
                MetaMask доступен как расширение для браузера (например, Chrome,
                Firefox, Brave) и как мобильное приложение (для iOS и Android).
              </p>
              <p>Основные функции MetaMask:</p>
              <div className="space-y-4 pb-5"></div>

              <div className="pb-5"></div>

              <ul className="list-disc space-y-4 px-5 text-p1-darkgreen">
                <li>
                  Управление криптовалютами: Хранение и управление Ethereum
                  (ETH) и токенами стандарта ERC-20 и ERC-721. Отправка и
                  получение криптовалюты. Поддержка нескольких адресов
                  (аккаунтов).
                </li>
                <li>
                  Интеракция с dApps:Интеграция с децентрализованными
                  приложениями, что позволяет пользователям легко
                  взаимодействовать с DeFi протоколами, NFT платформами, играми
                  и другими сервисами на блокчейне Ethereum. Возможность
                  подключения к dApps напрямую через браузерное расширение или
                  мобильное приложение.
                </li>
                <li>
                  Безопасность:Приватные ключи хранятся локально на устройстве
                  пользователя и защищены паролем. Возможность создания
                  резервных копий и восстановления кошелька с помощью сид-фразы
                  (seed Поддержка аппаратных кошельков, таких как Ledger и
                  Trezor, для для дополнительной безопасности.
                </li>
                <li>
                  Пользовательский интерфейс:Удобный и интуитивно понятный
                  интерфейс для управления активами и взаимодействия с dApps.
                  Поддержка кастомизации и добавления пользовательских токенов.
                </li>
              </ul>
              <div className="pb-5"></div>
              <div className="space-y-4 pb-5 text-p1-darkgreen">
                Мультибраузерная и мобильная поддержка:Расширения для популярных
                браузеров, что делает использование MetaMask удобным на
                настольных устройствах. Мобильное приложение для управления
                криптовалютами и взаимодействия с dApps на ходу.
              </div>
              <div className="space-y-4 pb-5 text-p1-darkgreen">
                Как использовать MetaMask:
              </div>

              <ul className="list-disc space-y-4 px-5 text-p1-darkgreen">
                <li>
                  Установка и настройка:Скачать и установить расширение для
                  браузера или мобильное приложение MetaMask. Создать новый
                  кошелек, следуя инструкциям, и сохранить сид-фразу в
                  безопасном месте. Установить пароль для защиты кошелька.
                </li>
                <li>
                  Пополнение кошелька:Получить адрес своего кошелька и
                  использовать его для получения ETH или других токенов.
                  Пополнить кошелек, отправив криптовалюту на этот адрес.
                </li>
                <li>
                  Интеракция с dApps:Подключить MetaMask к поддерживаемому dApp,
                  нажав кнопку &quot;Connect&quot; или аналогичную в интерфейсе
                  dApp. Авторизовать MetaMask для взаимодействия с dApp и
                  подтверждать транзакции, используя кошелек.
                </li>
                <li>
                  Отправка и получение криптовалюты:Для отправки криптовалюты
                  выбрать &quot;Send&quot;, указать адрес получателя и сумму,
                  затем подтвердить транзакцию. Для получения криптовалюты
                  использовать свой адрес кошелька и передать его отправителю.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen">
              MetaMask является мощным инструментом для любого, кто хочет
              участвовать в экосистеме Ethereum. Он обеспечивает безопасное
              хранение криптовалюты, удобное взаимодействие с
              децентрализованными приложениями и простой способ управления
              цифровыми активами.
            </div>
          </details>
        </div>
        <section className="flex space-x-2 px-2">
          <a
            className="relative mb-4 inline-block h-96 w-1/3 overflow-hidden rounded bg-violet-300"
            href="#"
          >
            <div>
              <h2 className="liading-tight absolute bottom-0 p-4 text-gray-100">
                123456778890-
              </h2>
            </div>
          </a>
          <a
            className="relative mb-4 inline-block h-96 w-2/3 overflow-hidden rounded bg-violet-100"
            href="#"
          >
            <div>
              <h2 className="liading-tight absolute bottom-0 p-4 text-gray-100">
                123456778890-
              </h2>
            </div>
          </a>
        </section>
        <section className="flex space-x-2 px-2">
          <a
            className="relative mb-4 inline-block h-96 w-1/3 overflow-hidden rounded bg-violet-300"
            href="#"
          >
            <div>
              <h2 className="liading-tight absolute bottom-0 p-4 text-gray-100">
                123456778890-
              </h2>
            </div>
          </a>
          <a
            className="relative mb-4 inline-block h-96 w-2/3 overflow-hidden rounded bg-violet-100"
            href="#"
          >
            <div>
              <h2 className="liading-tight absolute bottom-0 p-4 text-gray-100">
                123456778890-
              </h2>
            </div>
          </a>
        </section>
        <div className="flex flex-row pb-5">
          <div className="basis-1/5">01</div>
          <div className="basis-3/5 text-center text-6xl font-bold text-p1-darkgreen">
            Наша команда
          </div>
          <div className="basis-1/5">03</div>
        </div>
        <div className="flex flex-row space-x-8 pb-5">
          <div className="basis-1/3 text-center text-p1-darkgreen">
            <Image
              width={500}
              height={500}
              src="/Team/Mike Starodub.png"
              alt="Mike Starodub"
            />

            <p className="pt-5 font-bold">Михаил Стародуб</p>
            <p>Founder & President</p>

            <div className="mt-3 space-y-4 text-justify text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                Михаил основал нашу компанию. Он отец наших главных целей и
                ценностей. Он нашел ключевых членов нашей команды и помог им
                проявить свои уникальные таланты в рабочем процессе. Он сделал
                первые шаги, которые были действительно важны. Орагнизовал старт
                Проекта, тактику и стратегию развития компании на ближайшие 5
                лет. Имеет международный опыт организации и проведения
                официальных спортивных международных соревнований таких как
                Formula-1, WTCR, национальных RDS GP, РСКГ, REC, SDC, а также
                иных автоспортивных и автокультурных мероприятий на Sochi
                Autodrom и Igora Drive
              </p>
            </div>
          </div>
          <div className="basis-1/3 text-center text-p1-darkgreen">
            <Image
              width={500}
              height={500}
              src="/Team/Andrey_Laus.png"
              alt="Andrey_Laus"
            />
            <p className="pt-5 font-bold">Андрей Лаус</p>
            <p>Founder & Vice President</p>

            <div className="mt-3 space-y-4 text-justify text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                Стратегическое планирование и рост компании. Специализируется на
                анализе рынка, разработке бизнес-стратегий и привлечении
                партнеров. Имеет международный опыт организации и проведения
                официальных спортивных международных соревнований таких как
                Formula-1, WTCR, национальных RDS GP, РСКГ, REC, SDC, а также
                иных автоспортивных и автокультурных мероприятий на Sochi
                Autodrom и Igora Drive
              </p>
            </div>
          </div>
          <div className="basis-1/3 text-center text-p1-darkgreen">
            <Image
              width={500}
              height={500}
              src="/Team/David Agadjanian.png"
              alt="David Agadjanian."
            />
            <p className="pt-5 font-bold">Давид Агаджанян</p>
            <p>Founder & Director of public and international relations</p>

            <div className="mt-3 space-y-4 text-justify text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                Специализируется на установлении и поддержании международных
                деловых отношений, управлении корпоративной репутацией,
                разработке и реализации PR-стратегий на глобальном уровне.
                Обладает навыками кризисного менеджмента и организации
                международных мероприятий. Опыт работы включает успешные проекты
                по продвижению бренда и укреплению партнерских отношений.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-8 pb-5">
          <div className="basis-1/3 text-center text-p1-darkgreen">
            <Image
              width={500}
              height={500}
              src="/Team/Valerii_Kostikov.png"
              alt="Valerii Kostikov"
            />
            <p className="pt-5 font-bold">Валерий Костиков</p>
            <p>Founder & Software developer</p>

            <div className="mt-3 space-y-4 text-justify text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                Разработчик программного обеспечения, специализирующийся на
                frontend (React, Vue.js), backend (Node.js, Django), Web3 и
                блокчейн (Solidity, Ethereum). Руководит разработкой и
                стратегией развития автоматизации сервисов. Имеет опыт создания
                и развертывания смарт-контрактов, а также интеграцией
                блокчейн-сетей.
              </p>
            </div>
          </div>
          <div className="basis-1/3 text-center text-p1-darkgreen">
            <Image
              width={500}
              height={500}
              src="/Team/Lada.png"
              alt="Lada Leman"
            />
            <p className="pt-5 font-bold"> Лада Леман</p>
            <p>Artist</p>

            <div className="mt-3 space-y-4 text-justify text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                Лада обладает креативным подходом к выполнению задач и обширным
                опытом в создании и управлении визуальными концепциями.
                Специализируется на разработке бренд-стратегий, внедрении
                инновационных решений в проекты. Успешно реализовала множество
                проектов в области графического дизайна, анимации. Обеспечивает
                высокие стандарты креативности и функциональности. Обладает
                глубокими знаниями в области пользовательского опыта и
                современного графического дизайна и анимации.
              </p>
            </div>
          </div>
          <div className="basis-1/3 text-center text-p1-darkgreen">
            <Image
              width={500}
              height={500}
              src="/Team/GermanBenkovsky.png"
              alt="German Benkovsky"
            />
            <p className="pt-5 font-bold"> Герман Беньковский</p>
            <p>Founder & Marketing Director</p>

            <div className="mt-3 space-y-4 text-justify text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                Герман - на сегодняшний день самый молодой участник нашей
                команды. Он студент МГИМО. За плечами Германа опыт по созданию
                успешных социальнозначимых медиа продуктов в сферах Web2 и Web3.
                В команде Global Automotive Association Герман ответственен
                стратегию продвижения продукта и сотрудничество с отечественными
                и зарубежными партнерами.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row pb-5">
          <div className="basis-1/5 text-center text-p1-darkgreen">01</div>
          <div className="basis-3/5 text-center text-p1-darkgreen">02 </div>
          <div className="basis-1/5 text-center text-p1-darkgreen">03</div>
        </div>
        ---------------------
        <div className="text-center text-6xl font-bold"> Наши Контакты </div>
        <div className="text-center"> Смело пишите и звоните нам.</div>
        <div className="text-center">
          Мы очень любим общаться с нашими партнерами.
        </div>
        <div className="my-5 rounded-3xl border-4 border-gray-500 p-6">
          <div className="pb-3 text-center font-bold">
            Если вы хотите продвигать свое мероприятие с помощью Web3, создавать
            награды NFT или быть представителем GAA в вашем регионе, заполните
            форму заявки, и мы свяжемся с вами. Нажмите кнопку ниже
          </div>
          <div className="pb-5">Ваша электронная почта</div>
          <div className="pb-5">ФИО</div>
          <div className="pb-5">Название организации</div>
          <div className="pb-5">
            Ваши вопросы, комментарии, предложения и т.п.
          </div>
          <div className="pb-5">
            Я соглашаюсь с Политикой приватности и на обработку персональных
            данных.
          </div>
          <div className="pb-5">Наш e-mail: info@gaa.zone</div>
        </div>
      </div>
    </div>
  );
}
