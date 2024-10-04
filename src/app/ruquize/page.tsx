"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [value, setValue] = useState("0");
  const [check, setCheck] = useState(false);

  return (
    <div>
      <div className="flex flex-row pb-5">
        <div className="basis-1/5"></div>
        <div className="basis-3/5">
          <div className="pt-5 text-center text-6xl font-bold text-p2-orange">
            Racepoint
          </div>
          <div className="p-2 text-center text-6xl font-bold text-p2-orange">
            QUIZE
          </div>
          <div className="p-2 text-center text-4xl font-bold text-p2-orange">
            Автоспорт, автокультура
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
            <div className="pb-2 text-center text-2xl text-p1-darkgreen">
              Какое отношение Вы имеете к автоспорту, автокультуре?
            </div>
            <div className="pb-5"></div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Дрифт
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Кузовные гонки (TCR){" "}
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Открытые колеса
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Драгрэйсинг
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Стэнс
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Rally{" "}
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Авто Звук{" "}
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Олдтаймер
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Симрэйсинг{" "}
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Другое{" "}
              </label>
            </div>
            <button className="rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Проголосовать
            </button>
            <div className="pb-5"></div>
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
            <div className="pb-2 text-center text-2xl text-p1-darkgreen">
              Какое направления автоспорта, автокультуры Вам больше всего
              нравится?
            </div>
            <div className="pb-5"></div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я зритель, автоспорт смотрю по телевизору, интернету
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я Пилот автоспортивной команды
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я участник автоспортивной команды
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я организатор автоспортивных и автокультурных мероприятий
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                У меня арендный бизнес спортивных автомобилей
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я спонсор автоспортивных и автокультурных мероприятий
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я коллекционирую автомобили, участник авто мероприятий
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Мои дети занимаются автоспортом
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я коллекционирую NFT
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Другое{" "}
              </label>
            </div>
            <button className="rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Проголосовать
            </button>
            <div className="pb-5"></div>
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
            <div className="text-center text-2xl text-p1-darkgreen">NFT</div>
            <div className="pb-2 text-center text-2xl text-p1-darkgreen">
              Какое у вас отношение к NFT?
            </div>
            <div className="pb-5"></div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                У меня есть NFT
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                У меня есть криптокошелек, слышал(а) про NFT, но NFT нет.
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я слышал про NFT, но как приобрести, как создать NFT я не знаю.
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Я не знаю, что такое NFT
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Мне NFT не нужны и знать про NFT ничего не хочу
              </label>
            </div>

            <button className="rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Проголосовать
            </button>
            <div className="pb-5"></div>
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
            <div className="text-center text-2xl text-p1-darkgreen">NFT</div>
            <div className="pb-2 text-center text-2xl text-p1-darkgreen">
              Какие из сервисов Web3, блокчейн, NFT Вы бы хотели увидеть в
              автоспорте и автокультуре в первую очередь?
            </div>
            <div className="pb-5"></div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                NFT награды для победителей, участников и членов команд
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Коллекцию NFT Пилотов
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Коллекцию NFT членов команд
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Коллекцию NFT раритетных, спортивных автомобилей
              </label>
            </div>
            <div className="flex items-center">
              <input
                checked={check}
                id="checkbox"
                onChange={() => setCheck(!check)}
                type="checkbox"
                value=""
                className="focus:ring-p1-cian h-4 w-4 rounded border-gray-300 bg-gray-100 text-p1-darkgreen focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-p1-green"
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-lg font-medium text-p1-darkgreen dark:text-gray-300"
              >
                Коллекция NFT с эксклюзивными условиями для держателей
              </label>
            </div>

            <button className="rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Проголосовать
            </button>
            <div className="pb-5"></div>
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>
    </div>
  );
}
