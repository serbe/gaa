'use client';
import Image from 'next/image';
import Link from 'next/link';
import { JumpButton } from '@/components/jumpButton';

export default function Page() {
  const jumpPoints = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />
      <div id="1"></div>
      <section className="flex flex-wrap object-center px-2 md:flex-nowrap md:space-x-2 md:pt-4">
        <div className="mb-4 w-full rounded-3xl border-p1-darkgreen bg-p1-white shadow-lg md:border-4 dark:border-p1-green dark:bg-p1-deepdarkgreen">
          <div className="flex flex-row">
            <div className="mx-auto text-center md:p-2 md:text-xl lg:text-2xl">
              <div className="flex flex-row justify-center md:pb-2">
                <div className="md:basis-3/5">
                  <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-2 md:text-4xl dark:text-p1-cyan">
                    Партнеры
                  </div>
                  <div className="px-2 pt-2 text-center text-base text-p1-darkgreen drop-shadow-2xl md:text-2xl dark:text-p1-green">
                    Если Вы заинтересованы в том, чтобы стать нашим партнером или спонсором - свяжитесь с нами.
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-center">
                <div className="basis-1/5">
                  <Image width={200} height={500} src="/Hero/77.png" alt="Hero77" />
                </div>
                <div className="basis-3/5">
                  <div className="rounded-3xl p-2 md:my-5">
                    <div className="text-center text-2xl text-p1-darkgreen md:pb-5">
                      <div className="place-content-center">
                        <div className="grid">
                          <div>
                            <Link
                              href="/rucontacts"
                              className="inline-block rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                            >
                              Обратная связь
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-1/5">
                  <Image width={200} height={600} src="/Hero/5.png" alt="Hero5" />
                </div>
              </div>
              <div className="my-5">
                <Link
                  href="#3"
                  className="inline-block w-11/12 rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                >
                  Наши партнеры
                </Link>
              </div>
              <div className="my-5">
                <Link
                  href="#4"
                  className="inline-block w-11/12 rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan"
                >
                  Наши спонсоры
                </Link>
              </div>

              <div className="my-5"></div>
            </div>
          </div>
        </div>
        <div id="2"></div>
        <div className="w-full rounded-3xl border-p2-orange bg-p1-white shadow-lg md:mb-4 md:min-w-96 md:border-4 dark:border-amber-600 dark:bg-p1-deepdarkgreen">
          <div className="flex flex-row">
            <div className="mx-auto text-center md:p-2 md:text-xl lg:text-2xl">
              <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-4xl dark:text-amber-600">
                Если Вы хотите поддержать нас,
              </div>
              <div className="px-2 pt-4 text-left text-base text-p1-darkgreen drop-shadow-2xl md:text-xl dark:text-p1-green">
                <p>предлагаем принять участие в сборе средств, которые будут направлены на развитие проекта:</p>
                <p className="p-2"> - маркетинг (вовлечение лидеров мнений и аудитории);</p>
                <p className="p-2"> - распоространение лицензий;</p>
                <p className="p-2"> - создание новых коллекций NFT;</p>
                <p className="p-2"> - аренда хостинга и серверов</p>
                <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-2xl dark:text-amber-600">
                  Первые 100 участников сбора получат NFT награды в количестве, зависящем от размера пожертвования</div>
                <p className="p-4">
                  Таким образом мы планируем привлечь первоначальный капитал и поблагодарть наших  первых сторонников.
                </p>
              </div>

              <div className="my-5">
                <Link
                  href="#11"
                  className="inline-block w-11/12 rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-amber-400 dark:hover:bg-amber-800 dark:hover:text-amber-200"
                >
                  Пожертвовать
                </Link>
              </div>
              <div className="my-5">
                <Link
                  href="#12"
                  className="inline-block w-11/12 rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-amber-400 dark:hover:bg-amber-800 dark:hover:text-amber-200"
                >
                  Таблица участников
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="md:pb-96"></div>
      <div id="3" className="pt-10"></div>
      <div className="flex flex-row justify-center md:pb-5">
        <div className="md:basis-5/5">
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-4xl dark:text-p1-cyan">
            Партнеры
          </div>

          <div className="text-center text-xl text-p1-darkgreen md:pt-4 md:text-2xl dark:text-p1-green">
            <p>Партнерами являются обладатели лицензий NFT Promoter, National, Global</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center md:pb-5">
        <div className="basis-1/6 p-2">
          <Image width={200} height={500} src="/Hero/9.png" alt="Hero9" />
        </div>
      </div>

      <div className="md:pb-96"></div>
      <div className="md:pb-48"></div>
      <div id="4" className="pt-10"></div>

      <div className="flex flex-row justify-center md:pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-4xl dark:text-p1-cyan">
            Спонсоры
          </div>
        </div>
      </div>
      <div id="5"></div>
      <div className="flex flex-row justify-center md:pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-4xl dark:text-p1-green">
            Титульный спонсор:
          </div>
          <div className="text-center text-xl text-p1-darkgreen md:pt-4 md:text-2xl dark:text-p1-green">
            <p>
              Так как наша организация децентрализованная, данный статус определяется держателями
              NFT Promoter, National, Global и ограничен временным периодом на покрытие всех
              расходов на организацию и проведение конкретного мероприятия
            </p>
            <p>
              Титульный спонсор покрывает своим денежным взносом сто процентов стоимости
              мероприятия.
            </p>
            <p>стоимость размещения - 1% спонсорского взноса </p>

            <p>
              Логотип Вашего бренда со статусом &quot;Титульный спонсор&quot; на NFT награде
              мероприятия
            </p>
          </div>
          <div id="6"></div>
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-8 md:text-4xl dark:text-p1-green">
            Генеральный спонсор:
          </div>
          <div className="text-center text-xl text-p1-darkgreen md:pt-4 md:text-2xl dark:text-p1-green">
            <p>
              Данный статус определяется держателями NFT Promoter, National, Global и ограничен
              временным периодом на покрытие 50% расходов на организацию и проведение конкретного
              мероприятия
            </p>
            <p>стоимость размещения - 2% спонсорского взноса</p>

            <p>
              Логотип Вашего бренда со статусом &quot;Генеральный спонсор&quot; на NFT награде
              мероприятия
            </p>
          </div>
          <div id="7"></div>
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-8 md:text-4xl dark:text-p1-green">
            Официальный спонсор:
          </div>
          <div className="text-center text-xl text-p1-darkgreen md:pt-4 md:text-2xl dark:text-p1-green">
            <p>
              Данный статус определяется держателями NFT Promoter, National, Global и ограничен
              временным периодом на покрытие 25% расходов на организацию и проведение конкретного
              мероприятия
            </p>
            <p>стоимость размещения - 2% спонсорского взноса</p>

            <p>
              Логотип Вашего бренда со статусом &quot;Официальный спонсор&quot; на NFT награде
              мероприятия
            </p>
          </div>
          <div id="8"></div>
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-8 md:text-4xl dark:text-p1-green">
            Спонсор участник:
          </div>
          <div className="text-center text-xl text-p1-darkgreen md:pt-4 md:text-2xl dark:text-p1-green">
            <p>
              Данный статус определяется держателями NFT Promoter, National, Global и ограничен
              временным периодом на покрытие не более 10% расходов на организацию и проведение
              конкретного мероприятия
            </p>
            <p>стоимость размещения - 10% спонсорского взноса</p>

            <p>Логотип Вашего бренда со статусом &quot;Спонсор&quot; на NFT награде мероприятия</p>
            <p>Стоимость размещения логотипа на награде составляет не менее 1000 USDT</p>
          </div>
          <div id="9"></div>
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-8 md:text-4xl dark:text-p1-green">
            Информационный спонсор:
          </div>
          <div className="text-center text-xl text-p1-darkgreen md:pt-4 md:text-2xl dark:text-p1-green">
            <p>
              Данный статус определяется держателями NFT Promoter, National, Global и ограничен
              временным периодом на организацию и проведение конкретного мероприятия
            </p>
            <p>СМИ: телеканалы, радиостанции, журналы, газеты, интернет-ресурсы</p>

            <p>
              Логотип Вашего информационного ресурса на сайте gaa.zone в разделе информационный
              спонсор и ссылкой на Ваш ресурс
            </p>
          </div>
          <div id="10"></div>
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-8 md:text-4xl dark:text-p1-green">
            Бартерный спонсор:
          </div>
          <div className="text-center text-xl text-p1-darkgreen md:pt-4 md:text-2xl dark:text-p1-green">
            <p>
              Данный статус определяется держателями NFT Promoter, National, Global и ограничен
              временным периодом сотрудничества
            </p>
            <p>внесение не денежных средств а предоставление продукции, услуг</p>

            <p>
              Логотип Вашего бренда на сайте gaa.zone в разделе Бартерные спонсоры, ссылкой на Ваш
              ресурс, а также коллаборация в совместных проектах
            </p>
          </div>
        </div>
      </div>

      <div className="md:pb-96"></div>
      <div className="md:pb-96"></div>

      <div id="11" className="pt-10"></div>
      <div className="flex flex-row justify-center md:pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-4xl dark:text-p1-cyan">
            QR-код для поддержания Проекта
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center md:pb-5">
        <div className="basis-1/6 scale-95 p-2 transition-all delay-75 duration-300 ease-in-out hover:scale-100">
          <Link href="https://gaa.zone">
            <Image width={200} height={600} src="/QR/QR-gaa.zone.png" alt="QR-gaa.zone" />
          </Link>
        </div>
      </div>
      <div className="text-center text-xl text-p1-darkgreen md:pt-4 md:text-2xl dark:text-p1-green">
        <p>пока ссылка на сайт gaa.zone</p>
        <p>реальную поддержку возможно будет осуществить </p>
        <p>только после развертывания смарт-контрактов и старта Проекта</p>
      </div>

      <div className="flex flex-row justify-center md:pb-5">
        <div className="basis-1/6 p-2">
          <Image width={200} height={600} src="/Hero/3.png" alt="Hero5" />
        </div>
      </div>
      <div className="md:pb-96"></div>
      <div className="md:pb-48"></div>

      <div id="12" className="pt-10"></div>
      <div className="flex flex-row justify-center md:pb-5">
        <div className="md:basis-3/5">
          <div className="text-center text-2xl font-bold text-p1-darkgreen md:pt-4 md:text-4xl dark:text-p1-cyan">
            Таблица участников
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center md:pb-5">
        <div className="basis-5/6 p-2 text-p1-green">
          <div className="grid grid-cols-4 gap-4">
            <div>#</div>
            <div>Avatar</div>
            <div>Номер кошелька</div>
            <div>USDT</div>
            <div>1</div>
            <div>
              {' '}
              <Image width={30} height={30} src="/HeroNFT/RaceLads/RaceLads1.png" alt="RaceLads1" />
            </div>

            <div>assdfgfgjfghk1235467455689</div>
            <div>10 000</div>
            <div>2</div>
            <div>
              {' '}
              <Image width={30} height={30} src="/HeroNFT/RaceLads/RaceLads2.png" alt="RaceLads2" />
            </div>

            <div>assdfgfgjfghk1235467455689</div>
            <div>8 000</div>
            <div>3</div>
            <div>
              {' '}
              <Image width={30} height={30} src="/HeroNFT/RaceLads/RaceLads3.png" alt="RaceLads3" />
            </div>

            <div>assdfgfgjfghk1235467455689</div>
            <div>5 000</div>
            <div>4</div>
            <div>
              {' '}
              <Image width={30} height={30} src="/HeroNFT/RaceLads/RaceLads4.png" alt="RaceLads4" />
            </div>

            <div>assdfgfgjfghk1235467455689</div>
            <div>3 000</div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center md:pb-5">
        <div className="md:basis-3/5"></div>
      </div>
      <div className="md:pb-96"></div>
      <div className="md:pb-36"></div>
      <div id="13"></div>
    </div>
  );
}
