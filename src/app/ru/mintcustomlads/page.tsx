'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { JumpButton } from '@/components/jumpButton';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

export default function Page() {
  const [value, setValue] = useState('1');
  const jumpPoints = ['1', '2'];

  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      <div className="flex flex-wrap justify-center space-x-2 object-center px-2 pt-5 md:flex-nowrap md:justify-between">
        <div className="text-xl font-semibold text-p2-orange md:text-3xl dark:text-amber-600">
          CustomLads NFT
        </div>
        <div className="text-end text-xl font-semibold text-p2-orange md:text-3xl dark:text-amber-600">
          Страница создания NFT
        </div>
      </div>

      <div className="flex flex-wrap justify-center md:flex-nowrap">
        <div className="rounded-3xl border-p2-orange md:border-4 md:hover:shadow-lg dark:border-amber-600">
          <div className="flex flex-row justify-center">
            <div className="mx-auto text-center md:text-xl lg:text-2xl">
              <div className="flex flex-row justify-center">
                <div className="p-2 text-base text-p1-darkgreen md:text-2xl md:font-semibold dark:text-p1-green">
                  <p>Присоединяйтесь к нам</p>
                  <p>Получите своего героя CustomLad</p>
                </div>
              </div>
              <div id="1" className="flex flex-wrap place-content-center md:flex-nowrap">
                <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
                  <div className="w-full md:w-3/5 md:place-self-center">
                    <Image
                      className="relative inline-block w-3/5 rounded-3xl border-2 border-p2-orange shadow-lg hover:drop-shadow-2xl md:min-w-full dark:border-p1-green"
                      width={1000}
                      height={1000}
                      src="/HeroNFT/CustomLads/CustomLads1.png"
                      alt="CustomLads1"
                    />
                    <div className="space-y-2 pt-2">
                      <button className="inline-block w-full rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-4 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p2-orange dark:hover:bg-amber-600 dark:hover:text-amber-100">
                        Создать NFT
                      </button>
                      <button className="inline-block w-full rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-4 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p2-orange dark:hover:bg-amber-600 dark:hover:text-amber-100">
                        Сгенерировать изображения
                      </button>
                    </div>
                  </div>

                  <div className="h-250 md:h-350 md:place-self-center w-full overflow-y-auto pt-5">
                    <Swiper
                      direction={'vertical'}
                      spaceBetween={1}
                      slidesPerView={5}
                      mousewheel={true}
                      modules={[Mousewheel, Pagination]}
                      // navigation={true}
                      // scrollbar={{ draggable: true }}
                      pagination={{
                        clickable: true,
                      }}
                      loop={true}
                      className="mySwyper h-[200px] max-w-[380px] md:h-[250px]"
                    >
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            фон
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            тело
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            глаза
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            рот
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            нос
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            усы борода
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            серьга в ухо
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            монеты на глаза
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            балаклава, маски, очки
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            броне жилет
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            верхняя одежда
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            прическа головной убор
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            нимб и альбатрос
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            попугай
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            стрела с сердцем
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            надписи
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            верхняя одежда
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            прическа головной убор
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            нимб и альбатрос
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            попугай
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-s-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            стрела с сердцем
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          <button
                            type="button"
                            className="w-12 rounded-e-lg border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-p2-red hover:bg-p2-red hover:text-p1-white focus:z-10 focus:text-p1-white focus:ring-2 focus:ring-p3-red dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            Х
                          </button>
                          <button
                            type="button"
                            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &lt;
                          </button>
                          <button
                            type="button"
                            className="w-48 border-y border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            надписи
                          </button>

                          <button
                            type="button"
                            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
                          >
                            &gt;
                          </button>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <div id="2" className="pb-2 md:pb-5"></div>

                    <button className="inline-block w-3/5 rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-4 text-p1-darkgreen shadow-lg transition-all delay-75 duration-300 ease-in-out hover:bg-p2-orange hover:text-p1-white dark:border-p1-cyan dark:bg-p1-darkgreen dark:text-p1-cyan dark:hover:border-p2-orange dark:hover:bg-amber-600 dark:hover:text-amber-100">
                      Сброс
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:flex-nowrap">
                <div>
                  <div></div>

                  <div className="accent-amber-600">
                    <label
                      htmlFor="default-range"
                      className="mb-2 block text-2xl font-medium text-gray-900 dark:text-amber-500"
                    >
                      {value}
                    </label>
                    <input
                      id="default-range"
                      type="range"
                      min="1"
                      max="10"
                      value={value}
                      onChange={(e) => {
                        setValue(e.target.value);
                      }}
                      className="h-2 w-3/5 cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                    />
                  </div>

                  <p className="p-2 text-base text-p1-darkgreen md:text-2xl dark:text-p1-green">
                    Максимальное количество: 10 CustomLads за транзакцию
                  </p>

                  <div className="pb-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5"></div>

      <div className="pb-5"></div>

      <p className="p-5 text-2xl text-p1-darkgreen">
        стрелки - перебор доступных элементов, Х-фиксация пустого слоя, по центру нажатие названия
        элемента - фиксация выбранного элемента, сброс - сброс всех настроек, случайное изображение
        - рандомайзер из доступных элементов, на странице должна быть проверка количества NFT в
        кошельке и открытие доступных элементов
      </p>
    </div>
  );
}
