'use client';
import { useFavicon } from '@/utils/hooks';
import { JumpButton } from '@/components/jumpButton';

export default function Page() {
  const jumpPoints = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  useFavicon('/icon/benefit.png ');

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      <div className="p-2 text-center text-xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-4xl dark:text-p1-green dark:hover:text-p1-cyan">
        Выгода участника
      </div>
      <div className="flex flex-wrap object-center px-2 md:flex-nowrap md:space-x-2">
        <div className="flex w-full min-w-96 flex-wrap object-center p-2 md:mb-2 md:flex-nowrap md:space-x-2">
          <div>
            <div className="md:pt-2" id="1"></div>

            <div className="my-1 rounded-3xl border-2 border-p1-darkgreen p-6 text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-2 md:border-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="pb-3 text-center font-bold">Уникальные привилегии:</p>
              <p className="pb-5">Мероприятия: Участие в мероприятиях, концертах, выставках.</p>
              <p className="pb-5">Доступ в Priority Club</p>
              <p className="pb-5">
                Предоставляем нашим членам эксклюзивные бонусы – билеты на мероприятия,
                автограф-сессии, фотосессии, лекции, экскурсии, розыгрыши NFT и многое другое.
              </p>
            </div>
            <div className="md:pt-2" id="2"></div>

            <div className="my-1 rounded-3xl border-2 border-p1-darkgreen p-6 text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-2 md:border-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="pb-3 text-center font-bold">Социальные привилегии:</p>
              <p className="pb-5">
                Сообщества: Доступ к эксклюзивным чатам, форумам или группам в социальных сетях.
              </p>
              <p className="pb-5">
                Сетевые мероприятия: Участие в приватных сетевых событиях и встречах.
              </p>
            </div>
            <div className="md:pt-2" id="3"></div>

            <div className="my-1 rounded-3xl border-2 border-p1-darkgreen p-6 text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-2 md:border-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="pb-3 text-center font-bold">Персонализация:</p>
              <p className="pb-5">
                Услуги на заказ: Возможность заказать уникальные произведения искусства или
                персонализированные товары.
              </p>
              <p className="pb-5">
                Аватары и идентификация: Персонализированные аватары или идентификационные знаки в
                онлайн-пространствах.
              </p>
            </div>
          </div>
          <div className="md:pt-2" id="4"></div>

          <div>
            <div className="my-1 rounded-3xl border-2 border-p1-darkgreen p-6 text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-2 md:border-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="pb-3 text-center font-bold">Скидки и предложения:</p>
              <p className="pb-5">
                Покупки: Скидки на товары и услуги, предлагаемые проектом или его партнерами.
              </p>
              <p className="pb-5">VIP-услуги: Доступ к премиальным услугам и сервисам.</p>
            </div>
            <div className="md:pt-2" id="5"></div>

            <div className="my-1 rounded-3xl border-2 border-p1-darkgreen p-6 text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-2 md:border-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="pb-3 text-center font-bold">Вознаграждения и бонусы:</p>
              <p className="pb-5">Airdrop: Бесплатное получение дополнительных токенов или NFT.</p>
            </div>
            <div className="md:pt-2" id="6"></div>

            <div className="my-1 rounded-3xl border-2 border-p1-darkgreen p-6 text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-2 md:border-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="pb-3 text-center font-bold">Физические товары:</p>
              <p className="pb-5">
                Коллекционные предметы: Получение физической версии произведения искусства или
                коллекционного предмета.
              </p>
              <p className="pb-5">
                Мерчандайзинг: Одежда, аксессуары и другие брендированные товары.
              </p>
            </div>
            <div className="md:pt-2" id="7"></div>

            <div className="my-1 rounded-3xl border-2 border-p1-darkgreen p-6 text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-2 md:border-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="pb-3 text-center font-bold">Образовательные ресурсы:</p>
              <p className="pb-5">
                Курсы и семинары: Доступ к обучающим материалам, вебинарам и мастер-классам.
              </p>
              <p className="pb-5">Мастер-классы с ведущими пилотами.</p>
            </div>
          </div>
          <div className="md:pt-2" id="8"></div>

          <div>
            <div className="my-1 rounded-3xl border-2 border-p1-darkgreen p-6 text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-2 md:border-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="pb-3 text-center font-bold">Права голоса:</p>
              <p className="pb-5">DAO (децентрализованные автономные организации):</p>
              <p className="pb-5">
                Члены нашего сообщества смогут подавать заявки и принимать участие в голосованиях по
                выбору формата мероприятий, судей, участников и прочим вопросам
              </p>
            </div>
            <div className="md:pt-2" id="9"></div>

            <div className="my-1 rounded-3xl border-2 border-p1-darkgreen p-6 text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-2 md:border-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="pb-3 text-center font-bold">Децентрализованный портал:</p>
              <p className="pb-5">
                Запускаем платформу с актуальными новостями автоспорта, фото и видео отчетами,
                статистикой, зафиксированной в блокчейн, а также анонсами и голосованиями для членов
                сообщества.
              </p>
              <p className="pb-5">Выход на международный портал.</p>
              <p className="pb-5">
                Расширяем наше присутствие на международной арене, чтобы объединить автолюбителей по
                всему миру, стирая границы и расстояния.
              </p>
            </div>
            <div className="md:pt-2" id="10"></div>

            <div className="my-1 rounded-3xl border-2 border-p1-darkgreen p-6 text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:my-2 md:border-4 dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p className="pb-3 text-center font-bold">Инвестиционные возможности:</p>
              <p className="pb-5">
                Доступ к ранним инвестициям: Возможность вкладывать в проекты на ранних стадиях или
                участвовать в закрытых раундах финансирования.
              </p>
            </div>
          </div>
        </div>

        <div className="pb-5"></div>
      </div>
    </div>
  );
}
