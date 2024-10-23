"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [value, setValue] = useState("0");
  const [check, setCheck] = useState(false);

  return (
    <div className="font-serif">
      <div className="flex flex-row p-2">
        <div className="basis-1/6 text-center">
          <Link
            href={{
              pathname: "/ruaboutmemberbenefit",
              query: { ruabout: "ruaboutmemberbenefit" },
            }}
            className="mx-auto justify-center rounded-3xl drop-shadow-2xl hover:drop-shadow-none"
          >
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl"
              width={1000}
              height={1000}
              src="/AboutHero/Benefit.png"
              alt="Benefit"
            />
          </Link>
        </div>
        <div className="basis-1/6 text-center">
          <Link
            href={{
              pathname: "/ruaboutterms",
              query: { ruabout: "ruaboutterms" },
            }}
            className="mx-auto justify-center rounded-3xl drop-shadow-2xl hover:drop-shadow-none"
          >
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl"
              width={1000}
              height={1000}
              src="/AboutHero/Terms.png"
              alt="Terms"
            />
          </Link>
        </div>
        <div className="basis-1/6 text-center">
          <Link
            href={{
              pathname: "/ruaboutpolicy",
              query: { ruabout: "ruaboutpolicy" },
            }}
            className="mx-auto justify-center rounded-3xl drop-shadow-2xl hover:drop-shadow-none"
          >
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl"
              width={1000}
              height={1000}
              src="/AboutHero/Policy.png"
              alt="Policy"
            />
          </Link>
        </div>
        <div className="basis-1/6 text-center">
          <Link
            href={{
              pathname: "/ruaboutweb3",
              query: { ruabout: "ruaboutweb3" },
            }}
            className="mx-auto justify-center rounded-3xl drop-shadow-2xl hover:drop-shadow-none"
          >
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl"
              width={1000}
              height={1000}
              src="/AboutHero/Web3.png"
              alt="Web3"
            />
          </Link>
        </div>
        <div className="basis-1/6 text-center">
          <Link
            href={{
              pathname: "/ruteam",
              query: { ruabout: "ruteam" },
            }}
            className="mx-auto justify-center rounded-3xl drop-shadow-2xl hover:drop-shadow-none"
          >
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl"
              width={1000}
              height={1000}
              src="/AboutHero/Team.png"
              alt="Team"
            />
          </Link>
        </div>
        <div className="basis-1/6 text-center">
          <Link
            href={{
              pathname: "/rucontacts",
              query: { ruabout: "rucontacts" },
            }}
            className="mx-auto justify-center rounded-3xl drop-shadow-2xl hover:drop-shadow-none"
          >
            <Image
              className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl"
              width={1000}
              height={1000}
              src="/AboutHero/Contacts.png"
              alt="Contacts"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="p-2 text-center text-6xl font-bold text-p1-darkgreen drop-shadow-2xl">
            О Нас
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/6"></div>
        <div className="basis-4/6 text-p1-darkgreen">
          <div className="my-5 space-y-6 rounded-3xl p-2">
            <div className="p-2 text-xl text-p1-darkgreen">
              Global Automotive Association (GAA) – это революционный
              блокчейн-проект, который объединяет всех любителей автоспорта и
              автомобилей в сильное и активное сообщество, нацеленное на
              популяризацию автомобильной культуры.
            </div>
          </div>
        </div>
        <div className="basis-1/6"></div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/6"></div>
        <div className="basis-4/6 text-p1-darkgreen">
          <div className="my-5 space-y-6 rounded-3xl p-2">
            <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl">
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
        <div className="basis-1/6">
          <Image
            className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl"
            width={1000}
            height={1000}
            src="/Hero/4.png"
            alt="4"
          />
        </div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/6"></div>
        <div className="basis-2/6">
          <div>
            <div className="rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl">
              <p className="text-2xl font-bold">10,000</p>
              <p>уникальных NFT</p>
              <p>в коллекции</p>
              <p className="text-2xl font-bold">RaceLads</p>
            </div>
          </div>
        </div>
        <div className="basis-1/6"></div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/6"></div>
        <div className="basis-2/6"></div>
        <div className="basis-2/6 text-p1-darkgreen">
          <div>
            <div className="rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl">
              <p>первая коллекция</p>
              <p className="text-2xl font-bold">
                Глобальной Автомобильной Ассоциации
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/6"></div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pt-5 text-center text-6xl font-bold text-p1-darkgreen drop-shadow-2xl">
            RaceLads
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/6"></div>
        <div className="basis-4/6 text-p1-darkgreen">
          <div>
            <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl">
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
        <div className="basis-1/6">
          <Image
            className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl"
            width={1000}
            height={1000}
            src="/Hero/2.png"
            alt="2"
          />
        </div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="p-2 text-center text-6xl font-bold text-p1-darkgreen drop-shadow-2xl">
            Мы планируем
          </div>
          <div className="p-2 text-center text-6xl font-bold text-p1-darkgreen drop-shadow-2xl">
            наше будущее
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/6"></div>
        <div className="basis-4/6 text-p1-darkgreen">
          <div>
            <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl">
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
        <div className="basis-1/6"></div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="p-2 text-center text-6xl font-bold text-p1-darkgreen drop-shadow-2xl">
            NFT
          </div>
          <div className="p-2 text-center text-6xl font-bold text-p1-darkgreen drop-shadow-2xl">
            Сервисы и Награды
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/6">
          <Image
            className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl"
            width={1000}
            height={1000}
            src="/Hero/2place.png"
            alt="2place"
          />
        </div>
        <div className="basis-4/6 text-p1-darkgreen">
          <div>
            <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl">
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

            <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl">
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
        <div className="basis-1/6">
          <Image
            className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl"
            width={1000}
            height={1000}
            src="/Hero/1place.png"
            alt="1place"
          />
        </div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="p-2 text-center text-6xl font-bold text-p1-darkgreen drop-shadow-2xl">
            выгода владельцу
          </div>
          <div className="p-2 text-center text-6xl font-bold text-p1-darkgreen drop-shadow-2xl">
            NFT RaceLad
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row p-2">
        <div className="basis-1/6">
          <Image
            className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl"
            width={1000}
            height={1000}
            src="/Hero/11.png"
            alt="11"
          />
        </div>
        <div className="basis-4/6 text-p1-darkgreen">
          <div>
            <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl">
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

            <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl">
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

            <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl">
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

            <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl">
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
        <div className="basis-1/6">
          <Image
            className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl"
            width={1000}
            height={1000}
            src="/Hero/12.png"
            alt="12"
          />
        </div>
      </div>

      <div className="p-10 text-xl">
        <div className="flex flex-row p-2">
          <div className="basis-1/5"></div>
          <div className="basis-3/5">
            <div className="p-2 text-center text-6xl font-bold text-p1-darkgreen drop-shadow-2xl">
              Web 3
            </div>
          </div>
          <div className="basis-1/5"></div>
        </div>
        <div className="flex flex-row p-2">
          <div className="basis-1/6"></div>
          <div className="basis-4/6 text-p1-darkgreen">
            <div>
              <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl">
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

              <div className="my-5 space-y-2 rounded-3xl border-4 border-p1-darkgreen p-6 text-center text-xl text-p1-darkgreen hover:border-p2-orange hover:shadow-xl">
                <p className="text-center">
                  Присоединяйся к GAA и стань частью глобального движения,
                  которое создает новые правила справедливой игры в мире
                  автоспорта и автокультуры!
                </p>
              </div>
              <div className="grid h-4/5 grid-cols-3 place-content-center gap-4">
                <div></div>
                <Image
                  className="relative mb-4 inline-block w-max overflow-hidden"
                  width={250}
                  height={250}
                  src="/Hero/cups.png"
                  alt="cups"
                />
              </div>
              <div className="grid h-4/5 grid-cols-2 place-content-center gap-4">
                <div></div>
                <Image
                  className="relative mb-4 inline-block w-max items-end overflow-hidden"
                  width={500}
                  height={500}
                  src="/Hero/hero1.png"
                  alt="hero1"
                />
              </div>
            </div>
          </div>
          <div className="basis-1/6"></div>
        </div>
        <div className="pb-5"></div>
      </div>
    </div>
  );
}
