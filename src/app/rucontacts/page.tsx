'use client';
import { useState } from 'react';

export default function Page() {
  const [check, setCheck] = useState(false);

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <div className="p-2 text-base md:p-10 md:text-2xl">
        <div className="text-center font-bold text-p1-darkgreen drop-shadow-2xl md:text-6xl">
          Наши Контакты
        </div>
        <div className="text-center text-p1-darkgreen">Смело пишите и звоните нам.</div>
        <div className="text-center text-p1-darkgreen">
          Мы очень любим общаться с нашими партнерами.
        </div>
        <div className="rounded-3xl border-p1-darkgreen p-2 text-xl hover:border-p1-green md:m-5 md:border-4 md:p-6 md:hover:shadow-xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <p className="pb-3 text-center text-sm font-semibold text-p1-darkgreen md:text-xl">
                Если вы хотите продвигать свое мероприятие с помощью Web3, создавать награды NFT или
                быть представителем GAA в вашем регионе, заполните форму заявки, и мы свяжемся с
                вами.
              </p>
              <p className="pb-3 text-center font-semibold text-p1-darkgreen">
                Нажмите кнопку ниже
              </p>
              <div className="grid">
                <a
                  href="/ruapplicationform"
                  className="inline-block w-full rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-10 py-8 text-center text-p1-darkgreen shadow-lg hover:border-p1-green hover:bg-p1-green hover:text-p1-white"
                >
                  Форма подачи заявки
                </a>
              </div>
            </div>
            <div>
              <div>
                <label
                  htmlFor="full_name"
                  className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                >
                  Полное имя
                </label>
                <input
                  type="text"
                  id="full_name"
                  className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p1-green focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
                  placeholder="Иванов Иван Иванович"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="nic_name"
                  className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                >
                  Ник-Имя
                </label>
                <input
                  type="text"
                  id="nic_name"
                  className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p1-green focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
                  placeholder="Ник-Имя"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="organization"
                  className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                >
                  Название организации/команды
                </label>
                <input
                  type="text"
                  id="organization"
                  className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p1-green focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
                  placeholder="Название организации/команды"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-left text-sm font-medium text-p1-darkgreen dark:text-p1-white"
                >
                  Электронная почта
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-p2-white2 p-3 text-sm text-p1-darkgreen focus:border-p1-green focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:text-p1-white dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
                  placeholder="Электронная почта"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-p1-darkgreen dark:text-white"
                >
                  {'Ваши вопросы, комментарии, предложения ...'}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Ваши вопросы, комментарии, предложения ..."
                ></textarea>
              </div>
              <div className="pb-2"></div>
              <div className="flex items-center">
                <input
                  checked={check}
                  id="checkbox"
                  onChange={() => setCheck(!check)}
                  type="checkbox"
                  value=""
                  className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen accent-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
                />
                <label
                  htmlFor="checkbox"
                  className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
                >
                  Соглашаюсь на обработку персональных данных данных.
                </label>
              </div>

              <div className="pb-2"></div>
              <div className="grid">
                <button className="mx-auto w-full justify-center rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-10 py-8 text-xl text-p1-darkgreen shadow-sm shadow-p1-cyan hover:border-p1-green hover:bg-p1-green hover:text-p1-white">
                  Отправить в GAA
                </button>
              </div>
            </div>

            <div className="pb-5">Наш e-mail: info@gaa.zone</div>
          </div>
          <div></div>

          <div></div>

          <div></div>
        </div>
        <div className="pb-5"></div>
      </div>
    </div>
  );
}
