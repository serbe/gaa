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
          <div className="p-5 text-center text-6xl font-bold text-p1-darkgreen">
            Партнеры
          </div>
          <div className="text-center text-2xl text-p1-darkgreen">
            Если Вы заинтересованы в том, чтобы стать партнером или спонсором,
            пожалуйста, свяжитесь с нами.{" "}
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>

      <div className="flex flex-row pb-5">
        <div className="basis-1/5 p-5">
          <Image width={500} height={600} src="/Hero/77.png" alt="Hero77" />
        </div>
        <div className="basis-3/5">
          <div className="rounded-3xlp-6 my-5 space-y-6">
            <div className="pb-5 text-center text-2xl text-p1-darkgreen">
              <div className="place-content-center pt-8">
                {" "}
                <div className="grid">
                  <button className="mx-auto justify-center rounded-3xl hover:bg-p2-white2 hover:drop-shadow-2xl">
                    <Image
                      width={200}
                      height={600}
                      src="/logo/letter.png"
                      alt="letter"
                    />
                  </button>
                </div>
                <div className="pt-28">
                  {" "}
                  <div className="mx-auto justify-center rounded-3xl drop-shadow-2xl">
                    <Image
                      width={1000}
                      height={600}
                      src="/Cars/OpenWheels.png"
                      alt="OpenWheels"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/5 p-5">
          <Image width={200} height={600} src="/Hero/5.png" alt="Hero5" />
        </div>
      </div>

      <div className="p-8 text-center text-6xl font-bold text-p1-darkgreen">
        {" "}
        Наши Контакты{" "}
      </div>
      <div className="text-center text-2xl text-p1-darkgreen">
        {" "}
        Смело пишите и звоните нам.
      </div>
      <div className="text-center text-2xl text-p1-darkgreen">
        Мы очень любим общаться с нашими партнерами.
      </div>

      <div className="m-5 rounded-3xl border-4 border-p1-darkgreen p-6 text-xl hover:border-p1-green hover:shadow-xl">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="pb-3 text-center text-p1-darkgreen">
              Если вы хотите продвигать свое мероприятие с помощью Web3,
              создавать награды NFT или быть представителем GAA в вашем регионе,
              заполните форму заявки, и мы свяжемся с вами.
            </p>
            <p className="pb-3 pt-5 text-center font-semibold text-p1-darkgreen">
              Нажмите кнопку ниже
            </p>
            <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-10 py-8 text-xl text-p1-darkgreen shadow-sm shadow-p1-cyan hover:bg-p1-green hover:text-p1-white">
              Форма подачи заявки
            </button>
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
                {"Ваши вопросы, комментарии, предложения ..."}
              </label>
              <textarea
                id="message"
                rows={4}
                className="placeholder= block w-full rounded-lg border-2 border-gray-300 bg-p2-white2 p-2.5 text-sm text-p1-darkgreen focus:border-p1-green focus:ring-p1-green dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-p1-green dark:focus:ring-p1-green"
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
                className="focus:ring-p1-cian h-5 w-5 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Соглашаюсь на обработку персональных данных данных.
              </label>
            </div>

            <div className="pb-2"></div>
            <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p1-white px-10 py-8 text-xl text-p1-darkgreen shadow-sm shadow-p1-cyan hover:bg-p1-green hover:text-p1-white">
              Отправить в GAA
            </button>
          </div>

          <div className="pb-5">Наш e-mail: info@gaa.zone</div>
        </div>
        <div></div>

        <div></div>

        <div></div>
      </div>
    </div>
  );
}
