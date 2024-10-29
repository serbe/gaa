export default function Page() {
  return (
    <div className="mx-auto max-w-7xl font-serif">
      <div className="pt-2 text-center text-6xl font-bold text-p1-darkgreen">Выгода участника</div>
      <div className="flex flex-wrap space-x-2 object-center px-2 pt-5 md:flex-nowrap">
        <div className="mb-2 flex w-full min-w-96 flex-wrap space-x-2 object-center p-2 md:flex-nowrap">
          <div>
            <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 hover:border-p2-orange hover:shadow-xl">
              <p className="pb-3 text-center font-bold">Уникальные привилегии:</p>
              <p className="pb-5">Мероприятия: Участие в мероприятиях, концертах, выставках.</p>
              <p className="pb-5">Доступ в Priority Club</p>
              <p className="pb-5">
                Предоставляем нашим членам эксклюзивные бонусы – билеты на мероприятия,
                автограф-сессии, фотосессии, лекции, экскурсии, розыгрыши NFT и многое другое.
              </p>
            </div>
            <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 hover:border-p2-orange hover:shadow-xl">
              <p className="pb-3 text-center font-bold">Социальные привилегии:</p>
              <p className="pb-5">
                Сообщества: Доступ к эксклюзивным чатам, форумам или группам в социальных сетях.
              </p>
              <p className="pb-5">
                Сетевые мероприятия: Участие в приватных сетевых событиях и встречах.
              </p>
            </div>
            <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 hover:border-p2-orange hover:shadow-xl">
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

          <div>
            <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 hover:border-p2-orange hover:shadow-xl">
              <p className="pb-3 text-center font-bold">Скидки и предложения:</p>
              <p className="pb-5">
                Покупки: Скидки на товары и услуги, предлагаемые проектом или его партнерами.
              </p>
              <div className="pb-5">VIP-услуги: Доступ к премиальным услугам и сервисам.</div>
            </div>
            <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 hover:border-p2-orange hover:shadow-xl">
              <p className="pb-3 text-center font-bold">Вознаграждения и бонусы:</p>
              <p className="pb-5">Airdrop: Бесплатное получение дополнительных токенов или NFT.</p>
            </div>
            <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 hover:border-p2-orange hover:shadow-xl">
              <p className="pb-3 text-center font-bold">Физические товары:</p>
              <p className="pb-5">
                Коллекционные предметы: Получение физической версии произведения искусства или
                коллекционного предмета.
              </p>
              <p className="pb-5">
                Мерчандайзинг: Одежда, аксессуары и другие брендированные товары.
              </p>
            </div>
            <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 hover:border-p2-orange hover:shadow-xl">
              <p className="pb-3 text-center font-bold">Образовательные ресурсы:</p>
              <p className="pb-5">
                Курсы и семинары: Доступ к обучающим материалам, вебинарам и мастер-классам.
              </p>
              <div className="pb-5">Мастер-классы с ведущими пилотами.</div>
            </div>
          </div>

          <div>
            <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 hover:border-p2-orange hover:shadow-xl">
              <p className="pb-3 text-center font-bold">Права голоса:</p>
              <p className="pb-5">DAO (децентрализованные автономные организации):</p>
              <p className="pb-5">
                Члены нашего сообщества смогут подавать заявки и принимать участие в голосованиях по
                выбору формата мероприятий, судей, участников и прочим вопросам
              </p>
            </div>
            <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 hover:border-p2-orange hover:shadow-xl">
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
            <div className="my-5 rounded-3xl border-4 border-p1-darkgreen p-6 hover:border-p2-orange hover:shadow-xl">
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
