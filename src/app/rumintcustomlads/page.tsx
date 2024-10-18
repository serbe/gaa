"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [value, setValue] = useState("0");
  const [check, setCheck] = useState(false);

  return (
    <div className="font-serif">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-2 text-4xl font-semibold text-p2-orange">
          CustomLads NFT
        </div>
        <div className="p-2 text-end text-4xl font-semibold text-p2-orange">
          Страница создания NFT
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 col-start-2 w-full rounded-3xl border-4 border-p2-orange text-center text-p1-darkgreen shadow-lg">
          <div>
            <p className="pt-5 text-2xl text-p1-darkgreen">
              Присоединяйтесь к нам
            </p>
            <p className="pb-5 text-2xl text-p1-darkgreen">
              Получите своего героя CustomLad
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className="w-12 rounded-s-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    Х
                  </button>
                  <button
                    type="button"
                    className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {"<"}
                  </button>
                  <button
                    type="button"
                    className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    фон
                  </button>

                  <button
                    type="button"
                    className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {">"}
                  </button>
                </div>
                <div>
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="w-12 rounded-s-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      Х
                    </button>
                    <button
                      type="button"
                      className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      тело
                    </button>

                    <button
                      type="button"
                      className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {">"}
                    </button>
                  </div>
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="w-12 rounded-s-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      Х
                    </button>
                    <button
                      type="button"
                      className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      глаза
                    </button>

                    <button
                      type="button"
                      className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {">"}
                    </button>
                  </div>
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="w-12 rounded-s-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      Х
                    </button>
                    <button
                      type="button"
                      className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      рот
                    </button>

                    <button
                      type="button"
                      className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {">"}
                    </button>
                  </div>
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="w-12 rounded-s-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      Х
                    </button>
                    <button
                      type="button"
                      className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      нос
                    </button>

                    <button
                      type="button"
                      className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {">"}
                    </button>
                  </div>
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="w-12 rounded-s-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      Х
                    </button>
                    <button
                      type="button"
                      className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      усы борода
                    </button>

                    <button
                      type="button"
                      className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {">"}
                    </button>
                  </div>
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="w-12 rounded-s-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      Х
                    </button>
                    <button
                      type="button"
                      className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      серьга в ухо
                    </button>

                    <button
                      type="button"
                      className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {">"}
                    </button>
                  </div>
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="w-12 rounded-s-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      Х
                    </button>
                    <button
                      type="button"
                      className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      монеты на глаза
                    </button>

                    <button
                      type="button"
                      className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {">"}
                    </button>
                  </div>
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="w-12 rounded-s-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      Х
                    </button>
                    <button
                      type="button"
                      className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      балаклава, маски, очки...
                    </button>

                    <button
                      type="button"
                      className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {">"}
                    </button>
                  </div>
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="w-12 rounded-s-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      Х
                    </button>
                    <button
                      type="button"
                      className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      броне жилет
                    </button>

                    <button
                      type="button"
                      className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                    >
                      {">"}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  className="relative mb-4 inline-block w-max overflow-hidden rounded-3xl border-2 border-p2-orange shadow-lg"
                  width={1000}
                  height={1000}
                  src="/HeroNFT/CustomLads/CustomLads1.png"
                  alt="CustomLads1"
                />
                <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-5 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
                  Случайное изображения NFT
                </button>
                <div className="pb-5"></div>
                <button className="w-full rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-5 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
                  Сброс
                </button>
              </div>

              <div>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {"<"}
                  </button>
                  <button
                    type="button"
                    className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    верхняя одежда
                  </button>

                  <button
                    type="button"
                    className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {">"}
                  </button>
                  <button
                    type="button"
                    className="w-12 rounded-e-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    Х
                  </button>
                </div>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {"<"}
                  </button>
                  <button
                    type="button"
                    className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    прическа головной убор
                  </button>

                  <button
                    type="button"
                    className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {">"}
                  </button>
                  <button
                    type="button"
                    className="w-12 rounded-e-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    Х
                  </button>
                </div>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {"<"}
                  </button>
                  <button
                    type="button"
                    className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    нимб и альбатрос
                  </button>

                  <button
                    type="button"
                    className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {">"}
                  </button>
                  <button
                    type="button"
                    className="w-12 rounded-e-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    Х
                  </button>
                </div>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {"<"}
                  </button>
                  <button
                    type="button"
                    className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    попугай
                  </button>

                  <button
                    type="button"
                    className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {">"}
                  </button>
                  <button
                    type="button"
                    className="w-12 rounded-e-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    Х
                  </button>
                </div>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {"<"}
                  </button>
                  <button
                    type="button"
                    className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    стрела с сердцем
                  </button>

                  <button
                    type="button"
                    className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {">"}
                  </button>
                  <button
                    type="button"
                    className="w-12 rounded-e-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    Х
                  </button>
                </div>
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {"<"}
                  </button>
                  <button
                    type="button"
                    className="w-24 border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    надписи
                  </button>

                  <button
                    type="button"
                    className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    {">"}
                  </button>
                  <button
                    type="button"
                    className="w-12 rounded-e-lg border-b border-t border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p2-red focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    Х
                  </button>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="default-range"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {value}
              </label>
              <input
                id="default-range"
                type="range"
                min="1"
                max="10"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="h-2 w-3/5 cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
              />
            </div>

            <p className="pb-8 pt-8 text-2xl text-p1-darkgreen">
              Максимальное количество: 10 CustomLads за транзакцию
            </p>
            <p className="pb-8 pt-8 text-2xl text-p1-darkgreen">
              стрелки - перебор доступных элементов, Х-фиксация пустого слоя, по
              центру нажатие названия элемента - фиксация выбранного элемента,
              сброс - сброс всех настроек, случайное изображение - рандомайзер
              из доступных элементов, на странице должна быть проверка
              количества NFT в кошельке и открытие доступных элементов
            </p>

            <div className="pb-5"></div>
            <button className="rounded-3xl border-2 border-p1-darkgreen bg-p2-white2 px-48 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
              Создать NFT
            </button>
            <div className="pb-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
