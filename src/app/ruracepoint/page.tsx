"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [value, setValue] = useState("0");
  const [check, setCheck] = useState(false);

  return (
    <div className="font-serif">
      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pt-5 text-center text-6xl font-bold text-p2-orange">
            Racepoint
          </div>
          <div className="text-center text-4xl font-bold text-p2-orange">
            by Global Automotive Association
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5 p-5">
          <Image width={500} height={600} src="/Hero/6.png" alt="Hero6" />
        </div>
        <div className="basis-3/5">
          <div className="my-5 space-y-6 rounded-3xl border-4 border-p2-orange p-6">
            <div className="pb-5 text-center text-2xl text-p1-darkgreen">
              Racepoint - наша внутренняя система накопления &quot;очков&quot;
              на аккаунт. В будущем возможно преобразовать в коин, пока что
              просто &quot;число&quot; на сайте.
            </div>
            <div className="text-center text-2xl text-p1-darkgreen">
              Как зарабатывать:
            </div>
            <ol className="list-decimal space-y-4 p-4 pb-5 text-p1-darkgreen">
              <li>
                Заходить на сайт и решать квизы, которые обновляются раз в
                неделю, 1 аккаунт = один квиз в неделю
              </li>
              <li>
                Купить нашу NFT и получать поинты по нажатию кнопки на сайте раз
                в неделю (нужно коннектить кошелек). Больше NFT = больше поинтов
                в неделю можно получать.
              </li>
              <li>
                Приглашать друзей пройти квиз (реферральная ссылка) и получать
                за это поинты
              </li>
              <li>
                Создана прогрессивная механика получения поинтов (например
                участие в онлайн гонках в автосимуляторах на приз GAA и тд)
              </li>
              <li>
                Создана система рейтинга / лицензий по аналогии с автоспортом,
                информация выведена на доску почета на сайте (больше поинтов =
                выше твое место в общем зачете)
              </li>
            </ol>
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pb-5 text-center text-4xl font-bold text-p2-orange">
            Racepoint
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="my-5 space-y-6 rounded-3xl border-4 border-p2-orange p-6">
            <div className="text-center text-2xl text-p1-darkgreen">
              Приветственный бонус:
            </div>
            <div className="text-center text-p1-darkgreen">
              За регистрацию на сайте получите 100 приветственных бонусов
            </div>
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="my-5 space-y-6 rounded-3xl border-4 border-p2-orange p-6">
            <div className="text-center text-2xl text-p1-darkgreen">
              Мы ценим конфиденциальность:
            </div>
            <div className="text-center text-p1-darkgreen">
              в качестве регистрации достаточно MetaMask или E-mail
            </div>
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="my-5 space-y-6 rounded-3xl border-4 border-p2-orange p-6">
            <div className="text-center text-2xl text-p1-darkgreen">
              Ежедневная награда
            </div>
            <div className="text-center text-p1-darkgreen">
              за ежедневный вход на сайт мы благодарим посетителей
              предоставлением Racepoints
            </div>
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="my-5 space-y-6 rounded-3xl border-4 border-p2-orange p-6">
            <div className="text-center text-2xl text-p1-darkgreen">
              Реферальная программа
            </div>
            <div className="text-center text-p1-darkgreen">
              пригласи друга по реферальной ссылке - получи Racepoints
            </div>
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pb-5 text-center text-4xl font-bold text-p2-orange">
            Участвуй
          </div>
          <div className="pb-5 text-center text-4xl font-bold text-p2-orange">
            в опросах и викторинах
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="my-5 space-y-6 rounded-3xl border-4 border-p2-orange p-6">
            <div className="text-center text-p1-darkgreen">
              Участвуй в опросах и викторинах за пройденый опрос получи
              Racepoints
            </div>
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>
      <div className="flex flex-row pb-5">
        <div className="basis-2/5"></div>
        <div className="basis-1/5">
          <Link
            href={{
              pathname: "/ruquize",
              query: { ruquize: "ruquize" },
            }}
            className="w-full rounded-xl border-2 border-p2-orange bg-p1-white px-20 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white"
          >
            Квиз
          </Link>
        </div>
        <div className="basis-2/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="my-5 space-y-6 rounded-3xl border-4 border-p2-orange p-6">
            <div className="text-center text-p1-darkgreen">
              Отвечай на вопросы, связанные с миром автоспорта и автокультуры за
              правильный ответ получи Racepoints
            </div>
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-2/5"></div>
        <div className="basis-1/5">
          <button className="w-full rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
            Авто Вопросы
          </button>
        </div>
        <div className="basis-2/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="my-5 space-y-6 rounded-3xl border-4 border-p2-orange p-6">
            <div className="text-center text-p1-darkgreen">
              Получай тематические карточки и получи Racepoints
            </div>
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-2/5"></div>
        <div className="basis-1/5">
          <button className="w-full rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
            Карточки
          </button>
        </div>
        <div className="basis-2/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="my-5 space-y-3 rounded-3xl border-4 border-p2-orange p-6">
            <div className="text-center text-2xl text-p1-darkgreen">
              Бонусы начисляются
            </div>
            <ul className="list-disc px-5 text-p1-darkgreen">
              <li> за правильные ответ викторины</li>
              <li> за пройденные опросы </li>
              <li> по реферальной программе </li>
            </ul>
            <div className="text-center text-p1-darkgreen">
              зарегистрированные пользователи смогут получить
            </div>
            <div className="text-center text-p1-darkgreen">
              от 10 до 100 Racepoints
            </div>
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pb-5 text-center text-6xl font-bold text-p2-orange">
            WhiteList
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="5-5 basis-1/5">
          <Image width={150} height={150} src="/Hero/3.png" alt="Hero" />
        </div>
        <div className="basis-3/5">
          <div className="my-5 space-y-6 rounded-3xl border-4 border-p2-orange p-6">
            <div className="text-center text-p1-darkgreen">
              Вашу активность мы оцениваем бонусами Racepoints
            </div>
            <div className="text-center text-2xl text-p1-darkgreen">
              Ваши Racepoints - Ваши преимущества
            </div>
            <div className="text-center text-p1-darkgreen">
              Самые активные получат доступ в White List и эксклюзивный доступ к
              Pre Mint NFT
            </div>

            <ol className="list space-y-4 p-4 pb-5 text-center text-2xl text-p1-darkgreen">
              <li>Level - 1 PreMint 10% off</li>
              <li>Level - 2 PreMint 30% off</li>
              <li>Level - 3 PreMint 30% off</li>
            </ol>
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pb-5 text-center text-6xl font-bold text-p2-orange">
            Розыгрыш NFT
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="my-5 space-y-6 rounded-3xl border-4 border-p2-orange p-6">
            <div className="text-center text-2xl text-p1-darkgreen">
              После минта коллекции RaceLads проведем розыгрыш NFT из коллекции:
            </div>

            <ul className="list-disc space-y-3 px-5 text-p1-darkgreen">
              <li>
                среди 10% самых активных пользователей зарегистрированных на
                сайте
              </li>
              <li>среди всех зарегистрированных на сайте</li>
              <li>среди активных пользователей, продвигающих Проект</li>
              <li>
                среди пилотов и членов команд автоспортивного и автокультурного
                сообщества
              </li>
              <li>
                среди промоутеров автоспортивных и автокультурных мероприятий
              </li>
              <li>среди партнеров</li>
              <div className="pb-5"></div>
            </ul>
            <div className="pb-5 text-center text-2xl text-p1-darkgreen">
              Шансы повышаются от активной позиции в развитии Global Automotive
              Association (DAO)
            </div>
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pb-5 text-center text-6xl font-bold text-p2-orange">
            Преференции
          </div>
          <div className="pb-5 text-center text-4xl font-bold text-p2-orange">
            Держатели NFT из коллекции RaceLads смогут
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="my-5 space-y-6 rounded-3xl border-4 border-p2-orange p-6">
            <ul className="list-disc space-y-3 px-5 text-p1-darkgreen">
              <li>
                участвовать в развитии Global Automotive Association (DAO)
              </li>
              <li>
                провести минт NFT будующих коллекций от Global Automotive
                Association (DAO) с дисконтом
              </li>
              <li>провести минт NFT из коллекции CustomLads</li>
              <li>
                приять участие в розыгрышах NFT и AirDrop от Global Automotive
                Association (DAO)
              </li>
              <li>
                воспользоваться новыми возможностями личностного развития и
                роста вместе с Global Automotive Association (DAO)
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-1/5 p-5">
          <Image width={150} height={150} src="/Hero/12.png" alt="Hero12" />
        </div>
      </div>
    </div>
  );
}
