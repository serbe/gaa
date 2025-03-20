'use client';
import { JumpButton } from '@/components/jumpButton';
import { Link } from '@/i18n/routing';
import { useFavicon } from '@/utils/hooks';
import Image from 'next/image';

export default function Page() {
  const jumpPoints = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];

  useFavicon('/Racepoint/Racepoit.png ');

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      <div className="text-center text-4xl font-bold text-p2-orange md:pt-4 md:text-6xl">
        Racepoint
      </div>
      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="rounded-3xl border-p2-orange px-2 md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl dark:border-amber-600 dark:text-amber-600">
            <div className="pt-2 text-center text-xl text-p1-darkgreen md:pb-5 md:text-2xl dark:text-amber-600">
              Racepoints - наша внутренняя система накопления &quot;очков&quot; на аккаунт.
            </div>
            <div className="px-2 pt-4 text-center text-base text-p1-darkgreen md:pb-5 md:text-xl dark:text-amber-600">
              Создана система рейтинга по аналогии с автоспортом, информация выведена на доску
              почета на сайте (больше Racepoints = выше твое место в общем зачете).
            </div>
            <div className="text-center text-lg font-bold text-p1-darkgreen md:text-2xl dark:text-amber-600">
              Как зарабатывать:
            </div>
            <ol className="list-decimal space-y-4 p-4 pb-5 text-base text-p1-darkgreen md:text-xl dark:text-amber-600">
              <li>
                Заходить на сайт и решать квизы, которые обновляются раз в неделю, 1 аккаунт = один
                квиз в неделю.
              </li>
              <li>
                Владеть NFT из наших коллекций и получать Racepoints по нажатию кнопки на сайте раз
                в неделю. Больше NFT = больше Racepoints.
              </li>
              <li>
                Приглашать друзей (реферральная ссылка) проходить квизы и получать за это
                Racepoints.
              </li>
              <li>Принимать участие в онлайн гонках (автосимуляторы).</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5"></div>
      </div>
      <div id="1" className="md:pt-2"></div>
      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="rounded-3xl border-p2-orange p-2 md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl dark:border-amber-600">
            <div className="pt-2 text-center text-xl font-bold text-p1-darkgreen md:text-2xl dark:text-amber-600">
              Приветственный бонус:
            </div>
            <div className="text-center text-base text-p1-darkgreen md:text-xl dark:text-amber-600">
              Получи 100 приветственных Racepoints за регистрацию на сайте!
            </div>
          </div>
        </div>
      </div>
      <div id="2" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="rounded-3xl border-p2-orange p-2 md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl dark:border-amber-600">
            <div className="text-center text-xl font-bold text-p1-darkgreen md:text-2xl dark:text-amber-600">
              Мы ценим конфиденциальность:
            </div>
            <div className="text-center text-base text-p1-darkgreen md:text-xl dark:text-amber-600">
              Для регистрации достаточно Web3 кошелька (MetaMask и т.д.) или e-mail.
            </div>
            <div className="flex flex-row justify-center pb-5">
              <div className="basis-1/5 scale-95 duration-300 hover:scale-100">
                <Link href={'/wallet'} className="mx-auto">
                  <Image
                    className="relative mb-4 inline-block"
                    width={1000}
                    height={1000}
                    src="/Logo/wallet-nft.png"
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
        <div className="">
          <div className="rounded-3xl border-p2-orange p-2 md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl dark:border-amber-600">
            <div className="text-center text-xl font-bold text-p1-darkgreen md:text-2xl dark:text-amber-600">
              Ежедневная награда
            </div>
            <div className="text-center text-base text-p1-darkgreen md:text-xl dark:text-amber-600">
              Зарабатывай Racepoints ежедневно за посещение сайта!
            </div>
            <div className="flex flex-row justify-center pb-5">
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href={'/rp50'} className="mx-auto justify-center hover:drop-shadow-2xl">
                  <Image
                    className="relative mb-4 inline-block w-max rounded-xl border-2 border-p2-orange md:rounded-3xl"
                    width={1000}
                    height={1000}
                    src="/Rpdaily/rp50.png"
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
                    src="/Rpdaily/rp100.png"
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
                    src="/Rpdaily/rp500.png"
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
                    src="/Rpdaily/rp1000.png"
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
          <div className="rounded-3xl border-p2-orange p-6 md:my-5 md:space-y-6 md:border-4 md:hover:shadow-2xl dark:border-amber-600">
            <div className="text-center text-xl font-bold text-p1-darkgreen md:text-2xl dark:text-amber-600">
              Реферальная программа
            </div>
            <div className="text-center text-base text-p1-darkgreen md:text-xl dark:text-amber-600">
              Пригласи друга по реферальной ссылке - получи Racepoints.
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
          <div className="text-center text-xl font-bold text-p2-orange md:pb-4 md:text-4xl dark:text-amber-600">
            Участвуй
          </div>
          <div className="text-center text-xl font-bold text-p2-orange md:pb-4 md:text-4xl dark:text-amber-600">
            в опросах и викторинах
          </div>
        </div>
      </div>
      <div id="5" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-5">
        <div className="w-full">
          <div className="rounded-3xl border-p2-orange p-2 md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl dark:border-amber-600">
            <div className="pb-2 text-center text-sm font-semibold text-p1-darkgreen md:text-2xl dark:text-amber-600">
              Участвуй в опросах и викторинах и зарабатывай Racepoints
            </div>

            <div className="flex flex-row justify-center pb-5">
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link href="/quize1" className="mx-auto justify-center hover:drop-shadow-2xl">
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
                <Link href="/quize2" className="mx-auto justify-center hover:drop-shadow-2xl">
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
                <Link href="/quize3" className="mx-auto justify-center hover:drop-shadow-2xl">
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
                <Link href="/quize4" className="mx-auto justify-center hover:drop-shadow-2xl">
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
        <div className="w-full">
          <div className="rounded-3xl border-p2-orange p-2 md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl dark:border-amber-600">
            <div className="pb-2 text-center text-sm font-semibold text-p1-darkgreen md:text-2xl dark:text-amber-600">
              Отвечай на вопросы, связанные с миром автоспорта и автокультуры и зарабатывай
              Racepoints
            </div>

            <div className="flex flex-row justify-center pb-5">
              <div className="basis-3/5 scale-95 duration-500 hover:scale-100">
                <Link
                  href="/autoquestion1"
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
                  href="/autoquestion2"
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
                  href="/autoquestion3"
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
                  href="/autoquestion4"
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
        <div className="w-full">
          <div className="rounded-3xl border-p2-orange md:my-5 md:space-y-6 md:border-4 md:p-6 md:hover:shadow-2xl dark:border-amber-600">
            <div className="pb-2 text-center text-sm font-semibold text-p1-darkgreen md:text-2xl dark:text-amber-600">
              Получай тематические карточки и зарабатывай Racepoints
            </div>

            <div className="flex flex-row place-content-center pb-5">
              <div className="basis-3/5 scale-95 duration-500 hover:scale-105">
                <Link href="/racepointcards" className="mx-auto hover:drop-shadow-2xl">
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
          <div className="rounded-3xl border-p2-orange p-2 md:my-5 md:space-y-3 md:border-4 md:p-6 md:hover:shadow-2xl dark:border-amber-600">
            <div className="pb-2 text-center text-2xl font-bold text-p1-darkgreen dark:text-amber-600">
              Racepoints начисляются за:
            </div>
            <ul className="list-disc pb-2 text-base text-p1-darkgreen md:px-5 md:text-xl dark:text-amber-600">
              <li> правильные ответы в викторинах</li>
              <li> пройденные опросы </li>
              <li> реферальную программу </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="9" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-4xl font-bold text-p2-orange md:pt-4 md:text-4xl">
            WhiteList
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="rounded-3xl border-p2-orange p-6 md:my-5 md:space-y-6 md:border-4 md:hover:shadow-2xl dark:border-amber-600">
            <div className="text-center text-xl font-bold text-p1-darkgreen md:text-2xl dark:text-amber-600">
              Вашу активность мы оцениваем очками Racepoints!
            </div>
            <div className="text-center text-xl text-p1-darkgreen md:text-2xl dark:text-amber-600">
              Самые активные получат преимущества при создании NFT:
            </div>

            <ol className="space-y-4 p-4 pb-5 text-center text-xl text-p1-darkgreen md:text-2xl dark:text-amber-600">
              <li>Уровень 1 = -10% </li>
              <li>Уровень 2 = -20% </li>
              <li>Уровень 3 = -30% </li>
            </ol>
          </div>
        </div>
      </div>
      <div id="10" className="md:pt-2"></div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-4xl font-bold text-p2-orange md:pt-4 md:text-4xl">
            Розыгрыши RaceLads NFT
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center pb-5">
        <div className="md:basis-3/5">
          <div className="rounded-3xl border-p2-orange p-6 md:my-5 md:space-y-6 md:border-4 md:hover:shadow-2xl dark:border-amber-600">
            <ul className="list-disc space-y-3 px-5 text-base text-p1-darkgreen md:text-xl dark:text-amber-600">
              <li>среди всех зарегистрированных на сайте</li>
              <li>среди 10% самых активных пользователей зарегистрированных на сайте</li>
              <li>среди активных пользователей, продвигающих проект</li>
              <li>среди пилотов и членов команд автоспортивного и автокультурного сообщества</li>
              <li>среди промоутеров автоспортивных и автокультурных мероприятий</li>
              <li>среди партнеров</li>
              <div className="pb-5"></div>
            </ul>
            <div className="pb-5 text-center text-xl text-p1-darkgreen md:text-2xl dark:text-amber-600">
              Ваша активная позиция в развитии Global Automotive Association повышает шансы!
            </div>
          </div>
        </div>
      </div>
      <div id="11" className="md:pt-2"></div>

      <div id="12" className="md:pt-0"></div>

      <div id="13" className="md:pt-2"></div>

      <div className="w-20 basis-1/5 place-self-center md:w-40">
        <Image width={150} height={150} src="/Hero/i12.png" alt="Hero12" />
      </div>
    </div>
  );
}
