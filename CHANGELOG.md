30.09
=====

- замена всех for= на htmlFor=
- замена всех class= на className=
- замена rows="номер" на rows={номер} т.к. значение в кавычках является строкой
- замена одновременного применения 2 стилей шрифта на 1 стиль (font-normal font-semibold на font-semibold)
- замена одновременного применения 2 стилей фона на 1 стиль (dark:hover:bg-gray-600 dark:hover:bg-gray-800)
- замена stroke-linejoin на strokeLinejoin
- замена stroke-width на strokeWidth
- замена stroke-linecap на strokeLinecap
- замена <option selected> на <option value="DEFAULT" disabled> и добавление defaultValue={"DEFAULT"} в тег select

31.09
=====

- замена всех тегов <a></a> на <Link></Link>
- удалил двойной тег <div className="w-full"><div className="w-full"></div></div>
- использование mx-auto вместо place-content-center для выравнивания по центру
- убрал вложенные в <p></p> теги, из за этого ошибка hydration была
- сделал все лицензии на 1 странице
- изменение навигации

03.10
=====

- добавил разные чекбокс на главную страницу и на страницу эвентов

07.10
=====

- добавил радиокнопки на страницу эвентов
- отцентрировал кнопки в ruabout

20.10
=====

- добавил в руэвенты swiper (перед использованием открой терминал ctrl+` и выполни в нем npm upgrade)
