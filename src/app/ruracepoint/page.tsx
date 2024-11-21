'use client';
import { useGaaStore } from '@/providers/store-provider';

import Image from 'next/image';
import Link from 'next/link';
import { JumpButton } from '@/components/jumpButton';

export default function Page() {
  const jumpPoints = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      <div className="text-center text-4xl font-bold text-p2-orange md:pt-4 md:text-6xl">
        Racepoint
      </div>

      <div className="text-center text-xl font-bold text-p2-orange md:pb-4 md:text-4xl">
        by Global Automotive Association
      </div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="rounded-3xl border-p2-orange px-2 md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl">
            <div className="px-2 text-center text-xl text-p1-darkgreen md:pb-5 md:text-2xl">
              Racepoint - наша внутренняя система накопления &quot;очков&quot; на аккаунт. В будущем
              возможно преобразовать в коин, пока что просто &quot;число&quot; на сайте.
            </div>
            <div className="text-center text-2xl text-p1-darkgreen">Как зарабатывать:</div>
            <ol className="list-decimal space-y-4 p-4 pb-5 text-p1-darkgreen">
              <li>
                Заходить на сайт и решать квизы, которые обновляются раз в неделю, 1 аккаунт = один
                квиз в неделю
              </li>
              <li>
                Купить нашу NFT и получать поинты по нажатию кнопки на сайте раз в неделю (нужно
                коннектить кошелек). Больше NFT = больше поинтов в неделю можно получать.
              </li>
              <li>Приглашать друзей пройти квиз (реферральная ссылка) и получать за это поинты</li>
              <li>
                Создана прогрессивная механика получения поинтов (например участие в онлайн гонках в
                автосимуляторах на приз GAA и тд)
              </li>
              <li>
                Создана система рейтинга / лицензий по аналогии с автоспортом, информация выведена
                на доску почета на сайте (больше поинтов = выше твое место в общем зачете)
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-xl font-bold text-p2-orange md:pb-4 md:text-4xl">
            Racepoint
          </div>
        </div>
      </div>
      <div id="1" className="md:pt-2"></div>
      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="rounded-3xl border-p2-orange p-2 md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl">
            <div className="text-center text-xl text-p1-darkgreen md:text-2xl">
              Приветственный бонус:
            </div>
            <div className="text-center text-p1-darkgreen">
              За регистрацию на сайте получите 100 приветственных бонусов
            </div>
          </div>
        </div>
      </div>
      <div id="2" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="rounded-3xl border-p2-orange p-2 md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl">
            <div className="text-center text-xl text-p1-darkgreen md:text-2xl">
              Мы ценим конфиденциальность:
            </div>
            <div className="text-center text-p1-darkgreen">
              в качестве регистрации достаточно Web3Wallet (MetaMask e.t.c.) или E-mail
            </div>
            <div className="flex flex-row justify-center pb-5">
              <div className="basis-2/5 scale-95 duration-500 hover:scale-100">
                <Link href={'/wallet'} className="mx-auto hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Logo/ruWeb3Wallet.png"
                    alt="wallet"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="3" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-5/5">
          <div className="rounded-3xl border-p2-orange p-2 md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl">
            <div className="text-center text-xl text-p1-darkgreen md:text-2xl">
              Ежедневная награда
            </div>
            <div className="text-center text-p1-darkgreen">
              за ежедневный вход на сайт мы благодарим посетителей предоставлением Racepoints
            </div>
            <div className="flex flex-row justify-center pb-5">
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href={'/rp50'} className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/rpdaily/rp50.png"
                    alt="rp50"
                  />
                </Link>
              </div>

              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href={'/rp100'} className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/rpdaily/rp100.png"
                    alt="rp100"
                  />
                </Link>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href={'/rp500'} className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/rpdaily/rp500.png"
                    alt="rp500"
                  />
                </Link>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href={'/rp1000'} className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/rpdaily/rp1000.png"
                    alt="rp1000"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="4" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="rounded-3xl border-p2-orange p-6 md:my-5 md:space-y-6 md:border-4 md:hover:shadow-2xl">
            <div className="text-center text-xl text-p1-darkgreen md:text-2xl">
              Реферальная программа
            </div>
            <div className="text-center text-p1-darkgreen">
              пригласи друга по реферальной ссылке - получи Racepoints
            </div>
            <div className="flex flex-row justify-center pb-5">
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link
                  href={'/InviteFriend'}
                  className="mx-auto justify-center hover:drop-shadow-2xl"
                >
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/RacePointCards/CardInviteFriend.png"
                    alt="InviteFriend"
                  />
                </Link>
              </div>

              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href={'/CreateTeam'} className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/RacePointCards/CardCreateTeam.png"
                    alt="CardCreateTeam"
                  />
                </Link>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href={'/JoinTeam'} className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/RacePointCards/CardJoinTeam.png"
                    alt="CardJoinTeam"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-xl font-bold text-p2-orange md:pb-4 md:text-4xl">
            Участвуй
          </div>
          <div className="text-center text-xl font-bold text-p2-orange md:pb-4 md:text-4xl">
            в опросах и викторинах
          </div>
        </div>
      </div>
      <div id="5" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-5">
        <div className="basis-5/5">
          <div className="rounded-3xl border-p2-orange p-2 md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl">
            <div className="pb-2 text-center text-sm font-semibold text-p1-darkgreen md:text-2xl">
              Участвуй в опросах и викторинах за пройденый опрос получи Racepoints
            </div>

            <div className="flex flex-row justify-center pb-5">
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href={'/ruquize1'} className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Quizbuttons/QuizeButton1.png"
                    alt="Quizbutton1"
                  />
                </Link>
              </div>

              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href={'/ruquize2'} className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Quizbuttons/QuizeButton2.png"
                    alt="Quizbutton2"
                  />
                </Link>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href={'/ruquize3'} className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Quizbuttons/QuizeButton3.png"
                    alt="Quizbutton3"
                  />
                </Link>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href={'/ruquize4'} className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Quizbuttons/QuizeButton4.png"
                    alt="Quizbutton4"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="6" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-5">
        <div className="basis-5/5">
          <div className="rounded-3xl border-p2-orange p-2 md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl">
            <div className="pb-2 text-center text-sm font-semibold text-p1-darkgreen md:text-2xl">
              Отвечай на вопросы, связанные с миром автоспорта и автокультуры за правильный ответ
              получи Racepoints
            </div>

            <div className="flex flex-row justify-center pb-5">
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link
                  href={'/ruautoquestion1'}
                  className="mx-auto justify-center hover:drop-shadow-2xl"
                >
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Autoquestionbuttons/RuQw1.png"
                    alt="RuQw1"
                  />
                </Link>
              </div>

              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link
                  href={'/ruautoquestion2'}
                  className="mx-auto justify-center hover:drop-shadow-2xl"
                >
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Autoquestionbuttons/RuQw2.png"
                    alt="RuQw2"
                  />
                </Link>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link
                  href={'/ruautoquestion3'}
                  className="mx-auto justify-center hover:drop-shadow-2xl"
                >
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Autoquestionbuttons/RuQw3.png"
                    alt="RuQw3"
                  />
                </Link>
              </div>
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link
                  href={'/ruautoquestion4'}
                  className="mx-auto justify-center hover:drop-shadow-2xl"
                >
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Autoquestionbuttons/RuQw4.png"
                    alt="RuQw4"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="7" className="md:pt-2"></div>

      <div className="flex flex-row place-self-center pb-5">
        <div className="basis-5/5">
          <div className="rounded-3xl border-p2-orange md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl">
            <div className="pb-2 text-center text-sm font-semibold text-p1-darkgreen md:text-2xl">
              Получай тематические карточки и получи Racepoints
            </div>

            <div className="flex flex-row place-content-center pb-5">
              <div className="basis-3/5 scale-95 duration-500 hover:scale-105">
                <Link href={'/ruracepointcards'} className="mx-auto hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max"
                    width={1000}
                    height={1000}
                    src="/Quizbuttons/CardsRacepoints.png"
                    alt="CardsRacepoints"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="8" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="rounded-3xl border-p2-orange p-2 md:my-5 md:space-y-3 md:border-4 md:p-6 md:hover:shadow-2xl">
            <div className="pb-2 text-center text-2xl text-p1-darkgreen">Бонусы начисляются</div>
            <ul className="list-disc pb-2 text-p1-darkgreen md:px-5">
              <li> за правильные ответ викторины</li>
              <li> за пройденные опросы </li>
              <li> по реферальной программе </li>
            </ul>
            <div className="px-2 text-center text-p1-darkgreen">
              зарегистрированные пользователи смогут получить
            </div>
            <div className="px-2 text-center text-p1-darkgreen">от 10 до 100 Racepoints</div>
          </div>
        </div>
      </div>
      <div id="9" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-4xl font-bold text-p2-orange md:pt-4 md:text-6xl">
            WhiteList
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="rounded-3xl border-p2-orange p-6 md:my-5 md:space-y-6 md:border-4 md:hover:shadow-2xl">
            <div className="text-center text-p1-darkgreen">
              Вашу активность мы оцениваем бонусами Racepoints
            </div>
            <div className="text-center text-2xl text-p1-darkgreen">
              Ваши Racepoints - Ваши преимущества
            </div>
            <div className="text-center text-p1-darkgreen">
              Самые активные получат доступ в White List и эксклюзивный доступ к Pre Mint NFT
            </div>

            <ol className="list space-y-4 p-4 pb-5 text-center text-2xl text-p1-darkgreen">
              <li>Level - 1 PreMint 10% off</li>
              <li>Level - 2 PreMint 20% off</li>
              <li>Level - 3 PreMint 30% off</li>
            </ol>
          </div>
        </div>
      </div>
      <div id="10" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-4xl font-bold text-p2-orange md:pt-4 md:text-6xl">
            Розыгрыш NFT
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="rounded-3xl border-p2-orange p-6 md:my-5 md:space-y-6 md:border-4 md:hover:shadow-2xl">
            <div className="text-center text-xl text-p1-darkgreen md:text-2xl">
              После минта коллекции RaceLads проведем розыгрыш NFT из коллекции:
            </div>

            <ul className="list-disc space-y-3 px-5 text-p1-darkgreen">
              <li>среди 10% самых активных пользователей зарегистрированных на сайте</li>
              <li>среди всех зарегистрированных на сайте</li>
              <li>среди активных пользователей, продвигающих Проект</li>
              <li>среди пилотов и членов команд автоспортивного и автокультурного сообщества</li>
              <li>среди промоутеров автоспортивных и автокультурных мероприятий</li>
              <li>среди партнеров</li>
              <div className="pb-5"></div>
            </ul>
            <div className="pb-5 text-center text-xl text-p1-darkgreen md:text-2xl">
              Шансы повышаются от активной позиции в развитии Global Automotive Association (DAO)
            </div>
          </div>
        </div>
      </div>
      <div id="11" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div className="text-center text-4xl font-bold text-p2-orange md:pt-4 md:text-6xl">
            Преференции
          </div>
          <div className="text-center text-2xl font-bold text-p2-orange md:pt-4 md:text-4xl">
            Держатели NFT из коллекции RaceLads смогут
          </div>
        </div>
      </div>
      <div id="12" className="md:pt-0"></div>

      <div className="flex flex-row justify-center pb-2">
        <div className="md:basis-3/5">
          <div className="rounded-3xl border-p2-orange md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl">
            <ul className="list-disc space-y-3 px-5 text-p1-darkgreen">
              <li>участвовать в развитии Global Automotive Association (DAO)</li>
              <li>
                провести минт NFT будующих коллекций от Global Automotive Association (DAO) с
                дисконтом
              </li>
              <li>провести минт NFT из коллекции CustomLads</li>
              <li>
                приять участие в розыгрышах NFT и AirDrop от Global Automotive Association (DAO)
              </li>
              <li>
                воспользоваться новыми возможностями личностного развития и роста вместе с Global
                Automotive Association (DAO)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="13" className="md:pt-2"></div>

      <div className="basis-1/5 place-self-center">
        <Image width={150} height={150} src="/Hero/12.png" alt="Hero12" />
      </div>
    </div>
  );
}
