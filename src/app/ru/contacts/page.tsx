'use client';
import { useState } from 'react';
import { JumpButton } from '@/components/jumpButton';
import { Link } from '@/i18n/routing';

export default function Page() {
  const [check, setCheck] = useState(false);
  const jumpPoints = ['1', '2', '3'];
  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      <div className="p-2 text-base md:p-4 md:text-2xl">
        <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan text-center font-bold drop-shadow-2xl md:text-4xl">
          Наши Контакты
        </div>
        <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan text-center">
          Смело пишите и звоните нам.
          <p> Мы очень любим общаться с нашими партнерами.</p>
        </div>

        <div className="border-p1-darkgreen hover:border-p1-green rounded-3xl p-2 text-xl md:m-5 md:border-4 md:p-6 md:hover:shadow-xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div id="1">
              <div className="font-regular text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan pb-3 text-center text-sm md:px-5 md:text-xl">
                Если вы хотите продвигать свое мероприятие с помощью Web3, создавать награды NFT или
                быть представителем GAA в вашем регионе, заполните форму заявки, и мы свяжемся с
                вами.
                <p>Нажмите кнопку ниже</p>
              </div>
              <div className="grid">
                <Link
                  href="/applicationform"
                  className="border-p2-orange bg-p1-white text-p1-darkgreen hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan inline-block w-full rounded-xl border-2 px-10 py-8 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out"
                >
                  Форма заявки
                </Link>
              </div>
            </div>
            <div>
              <div id="2">
                <label
                  htmlFor="full_name"
                  className="text-p1-darkgreen dark:text-p1-cyan block text-left text-sm font-medium"
                >
                  Полное имя
                </label>
                <input
                  type="text"
                  id="full_name"
                  className="bg-p2-white2 text-p1-darkgreen focus:border-p1-green focus:ring-p1-green dark:text-p1-white dark:placeholder-p1-gray dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border border-gray-300 p-3 text-sm md:p-2 md:text-lg dark:border-gray-600 dark:bg-gray-700"
                  placeholder="Иванов Иван Иванович"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="nic_name"
                  className="text-p1-darkgreen dark:text-p1-cyan block text-left text-sm font-medium"
                >
                  Ник-Имя
                </label>
                <input
                  type="text"
                  id="nic_name"
                  className="bg-p2-white2 text-p1-darkgreen focus:border-p1-green focus:ring-p1-green dark:text-p1-white dark:placeholder-p1-gray dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border border-gray-300 p-3 text-sm md:p-2 md:text-lg dark:border-gray-600 dark:bg-gray-700"
                  placeholder="Ник-Имя"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="organization"
                  className="text-p1-darkgreen dark:text-p1-cyan block text-left text-sm font-medium"
                >
                  Название организации/команды
                </label>
                <input
                  type="text"
                  id="organization"
                  className="bg-p2-white2 text-p1-darkgreen focus:border-p1-green focus:ring-p1-green dark:text-p1-white dark:placeholder-p1-gray dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border border-gray-300 p-3 text-sm md:p-2 md:text-lg dark:border-gray-600 dark:bg-gray-700"
                  placeholder="Название организации/команды"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="email"
                  className="text-p1-darkgreen dark:text-p1-cyan block text-left text-sm font-medium"
                >
                  Электронная почта
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-p2-white2 text-p1-darkgreen focus:border-p1-green focus:ring-p1-green dark:text-p1-white dark:placeholder-p1-gray dark:focus:border-p1-green dark:focus:ring-p1-green block w-full rounded-lg border border-gray-300 p-3 text-sm md:p-2 md:text-lg dark:border-gray-600 dark:bg-gray-700"
                  placeholder="Электронная почта"
                  required
                />
              </div>
              <div className="pb-2"></div>
              <div>
                <label
                  htmlFor="message"
                  className="text-p1-darkgreen dark:text-p1-cyan mb-2 block text-sm font-medium"
                >
                  {'Ваши вопросы, комментарии, предложения ...'}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="bg-p2-white2 text-p1-darkgreen block w-full rounded-lg border-2 border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Ваши вопросы, комментарии, предложения ..."
                ></textarea>
              </div>
              <div className="pb-2"></div>
              <div className="flex items-center">
                <input
                  checked={check}
                  id="checkbox"
                  onChange={() => {
                    setCheck(!check);
                  }}
                  type="checkbox"
                  value=""
                  className="focus:ring-p1-cian text-p1-darkgreen accent-p1-darkgreen dark:bg-p1-green dark:focus:ring-p1-green h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:ring-offset-gray-800"
                />
                <label
                  id="3"
                  htmlFor="checkbox"
                  className="text-p1-darkgreen dark:text-p1-cyan ms-2 text-lg font-medium"
                >
                  Соглашаюсь на обработку персональных данных данных.
                </label>
              </div>

              <div className="pb-2"></div>
              <div className="grid">
                <button className="border-p2-orange bg-p1-white text-p1-darkgreen hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-deepdarkgreen dark:text-p1-cyan dark:hover:border-p1-cyan dark:hover:bg-p1-darkgreen dark:hover:text-p1-cyan inline-block w-full rounded-xl border-2 px-10 py-8 text-center shadow-lg transition-all delay-75 duration-300 ease-in-out">
                  Отправить в GAA
                </button>
              </div>
            </div>

            <div className="dark:text-p1-green dark:hover:text-p1-cyan pb-5">
              Наш e-mail: info@gaa.zone
            </div>
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
