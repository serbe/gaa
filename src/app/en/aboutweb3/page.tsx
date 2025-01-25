'use client';

import { JumpButton } from '@/components/jumpButton';

export default function Page() {
  const jumpPoints = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
  ];
  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />
      <div className="text-base md:text-xl">
        <div className="flex flex-row justify-center">
          <div className="basis-3/5 text-center text-p1-darkgreen">
            <div className="p-2 text-xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-4xl dark:text-p1-green dark:hover:text-p1-cyan">
              Lern Web 3
            </div>
          </div>
        </div>
        <div className="flex flex-row p-2">
          <div className="basis-4/10 text-p1-darkgreen">
            <div className="space-y-6 rounded-3xl p-2 md:my-5">
              <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
                The collected information contains the key fundamentals of the direction of
                development of the global community in the digital industry.
              </div>
              <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
                This information is not new, but for someone it will be a discovery and an
                understanding of how it works will appear.
              </div>
            </div>
          </div>
        </div>
        <div className="" id="1"></div>

        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="open:bg-p1-greem rounded-3xl border-p1-darkgreen p-2 open:ring-1 open:ring-p1-green hover:border-p1-green open:md:border-4 open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              Что такое Web 3?
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:text-p1-cyan">
              <p>
                Web 3 (или Web 3.0) — это концепция следующего поколения интернета, которая
                ориентирована на децентрализацию и использование блокчейн-технологий для создания
                более открытой и защищенной сети. В отличие от Web 2.0, который характеризуется
                централизованными платформами и сервисами, Web3 предполагает использование
                децентрализованных приложений (dApps), умных контрактов и криптовалют для выполнения
                различных функций в интернете.
              </p>
              <div className="space-y-4 pb-5"></div>
              <div className="pb-5">Основные характеристики Web3:</div>
              <ul className="list-disc space-y-4 px-5">
                <li>
                  Децентрализация: Управление и данные хранятся на распределенных сетях, а не на
                  серверах, принадлежащих одной компании.
                </li>
                <li>
                  Блокчейн: Использование блокчейн-технологий для обеспечения прозрачности и
                  безопасности транзакций.
                </li>
                <li>
                  Умные контракты: Автоматизированные контракты, которые исполняются автоматически
                  при выполнении определенных условий.
                </li>
                <li>
                  Криптовалюты и токены: Использование цифровых валют для расчетов и токенов для
                  управления и владения активами.
                </li>
                <li>
                  Идентичность и конфиденциальность: У пользователей больше контроля над своей
                  цифровой идентичностью и личными данными.
                </li>
              </ul>
            </div>
          </details>
        </div>
        <div className="" id="2"></div>

        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="open:bg-p1-greem rounded-3xl border-p1-darkgreen p-2 open:ring-1 open:ring-p1-green hover:border-p1-green open:md:border-4 open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              Для того чтобы лучше понять, что такое Web3 надо знать, что такое Web 1 и Web 2
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>Web-1</p>
              <div className="space-y-4 pb-5"></div>
              <div className="pb-5">
                Web 1 (или Web 1.0) — это первая эпоха развития интернета, охватывающая период
                примерно с 1990 по начало 2000-х годов. В этот период интернет представлял собой в
                основном статические веб-страницы, которые пользователи могли просматривать, но не
                взаимодействовать с ними так, как это возможно в более поздних версиях интернета.
                Основные характеристики Web1 включают:
              </div>
              <ul className="list-disc space-y-4 px-5">
                <li>
                  Статический контент: Большинство веб-сайтов состояли из статических HTML-страниц,
                  которые редко обновлялись. Контент создавался и публиковался веб-мастерами и не
                  позволял пользователям взаимодействовать с ним или вносить изменения.
                </li>
                <li>
                  Простые веб-технологии: Основными технологиями были HTML (HyperText Markup
                  Language) для разметки страниц и HTTP (HyperText Transfer Protocol) для передачи
                  данных по сети. CSS (Cascading Style Sheets) использовались для стилизации
                  страниц, но их возможности были ограничены.
                </li>
                <li>
                  Однонаправленное общение: Веб-сайты в основном предоставляли информацию
                  пользователям, но не обеспечивали интерактивности. Пользователи могли только
                  потреблять контент, но не могли вносить свой вклад или взаимодействовать с другими
                  пользователями через сайт.
                </li>
                <li>
                  Отсутствие социальных медиа: В этот период не существовало социальных сетей или
                  других платформ для пользовательского взаимодействия и создания контента.
                  Большинство сайтов были личными страницами, сайтами компаний или базами данных
                  информации.
                </li>
                <li>
                  Навигация через порталы и каталоги: Сайты, такие как Yahoo!, предоставляли
                  каталоги веб-страниц, упрощая пользователям поиск информации. Поисковые системы,
                  такие как AltaVista и Lycos, начали появляться, но их возможности были ограничены
                  по сравнению с современными поисковыми системами.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5"> Примеры типичных сайтов Web1:</div>
            <ul className="list-disc space-y-2 px-5">
              <li> Информационные порталы: Yahoo!, AOL.</li>
              <li>Первые поисковые системы: AltaVista, Lycos.</li>
              <li>Первые коммерческие сайты: Amazon, eBay (в ранние годы).</li>
              <li>Личные страницы и блоги: Geocities, Angelfire.</li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5">
              Web1 был важным этапом в развитии интернета, заложившим основу для последующего
              перехода к Web 2.0 и дальнейшему развитию интерактивного и социально ориентированного
              интернета.
            </div>
          </details>
        </div>
        <div className="" id="3"></div>

        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="open:bg-p1-greem rounded-3xl border-p1-darkgreen p-2 open:ring-1 open:ring-p1-green hover:border-p1-green open:md:border-4 open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              Web 2
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                Web 2 (или Web 2.0) — это вторая эпоха развития интернета, начавшаяся в начале
                2000-х годов. Web2 представляет собой переход от статических веб-страниц и
                однонаправленного взаимодействия (характерных для Web1) к более динамичным и
                интерактивным веб-приложениям.
              </p>
              <div className="space-y-4 pb-5"></div>
              <div className="pb-5">Основные характеристики Web2 включают:</div>
              <ul className="list-disc space-y-4 px-5">
                <li>
                  Динамический контент и интерактивность: В отличие от статических страниц Web1,
                  сайты Web2 содержат динамический контент, который может изменяться в реальном
                  времени. Пользователи могут взаимодействовать с сайтами и друг с другом через
                  комментарии, лайки, форумы и другие механизмы.
                </li>
                <li>
                  Социальные сети и создание пользовательского контента: Web2 характеризуется ростом
                  социальных медиа платформ, таких как Facebook, Twitter, Instagram, и YouTube. Эти
                  платформы позволяют пользователям создавать и делиться контентом, а также
                  взаимодействовать друг с другом.
                </li>
                <li>
                  Веб-приложения: Web2 включает развитие сложных веб-приложений, таких как Google
                  Docs, которые предоставляют функциональность, сравнимую с настольным программным
                  обеспечением, но работают в браузере.
                </li>
                <li>
                  Ajax и JavaScript: Технологии, такие как Ajax (Asynchronous JavaScript and XML),
                  JavaScript, и более современные фреймворки (например, React, Angular), позволяют
                  создавать более отзывчивые и интерактивные пользовательские интерфейсы.
                </li>
                <li>
                  API и Mashup: Web2 активно использует API (Application Programming Interface) для
                  интеграции различных сервисов и данных. Это позволяет создавать mashup-приложения,
                  комбинирующие данные и функциональность из разных источников.
                </li>
                <li>
                  Совместное использование и коллаборация: Платформы, такие как Wikipedia и
                  различные онлайн-редакторы, позволяют пользователям совместно работать над
                  контентом, внося изменения и дополнения в реальном времени.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5">Примеры типичных сайтов и приложений Web2:</div>
            <ul className="list-disc space-y-2 px-5">
              <li>Социальные сети: Facebook, Twitter, LinkedIn, Instagram.</li>
              <li>Платформы для обмена видео: YouTube, Vimeo.</li>
              <li>Блоги и платформы для публикации: WordPress, Medium.</li>
              <li>Совместные онлайн-инструменты: Google Docs, Trello, Slack.</li>
              <li>Электронная коммерция: Amazon, eBay.</li>
            </ul>
            <div className="pb-5"> </div>

            <div className="pb-5">
              Web2 принес значительные изменения в способах взаимодействия пользователей с
              интернетом, сделав его более интерактивным, социальным и ориентированным на
              пользовательский контент. Этот этап развития интернета заложил основу для дальнейшего
              прогресса, который мы видим в концепции Web3.
            </div>
          </details>
        </div>
        <div className="" id="4"></div>

        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="open:bg-p1-greem rounded-3xl border-p1-darkgreen p-2 open:ring-1 open:ring-p1-green hover:border-p1-green open:md:border-4 open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              Децентрализация
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                Децентрализация — это процесс распределения власти, управления и принятия решений от
                центрального органа или единой точки контроля к более распределенной системе или
                сети. В контексте информационных технологий и блокчейн-технологий децентрализация
                имеет несколько ключевых аспектов:
              </p>
              <div className="space-y-4 pb-5"></div>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Технологическая децентрализация: В этой модели данные и вычислительные ресурсы
                  распределяются по множеству узлов или серверов, а не хранятся и обрабатываются на
                  одном центральном сервере. Примером является блокчейн, где информация
                  распределяется по сети узлов, каждый из которых хранит копию всей цепочки блоков.
                </li>
                <li>
                  Организационная децентрализация: В этой модели принятие решений и управление
                  распределяются между многими участниками или организациями, а не сосредоточены в
                  одной компании или группе. Примером является децентрализованная автономная
                  организация (DAO), где участники коллективно принимают решения через
                  смарт-контракты.
                </li>
                <li>
                  Децентрализация власти: Это процесс распределения полномочий и ответственности
                  между различными уровнями управления или группами. В контексте государств это
                  может означать передачу власти от центрального правительства к региональным или
                  местным органам власти.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Преимущества децентрализации:
              <ul className="list-disc space-y-2 px-5 pt-3">
                <li>
                  Повышенная безопасность: Распределение данных и процессов снижает риск взлома или
                  отказа системы, так как нет единой точки отказа.
                </li>
                <li>
                  Прозрачность и доверие: В децентрализованных системах транзакции и процессы часто
                  открыты и проверяемы всеми участниками, что повышает доверие.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>
          </details>
        </div>
        <div className="" id="5"></div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="open:bg-p1-greem rounded-3xl border-p1-darkgreen p-2 open:ring-1 open:ring-p1-green hover:border-p1-green open:md:border-4 open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              Что такое блокчейн?
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                Блокчейн (blockchain) — это распределенная и защищенная технология хранения данных,
                представляющая собой цепочку блоков, каждый из которых содержит информацию. Эта
                информация может включать данные о транзакциях, смарт-контрактах или любых других
                событиях, которые должны быть зафиксированы и защищены от изменений. Основные
                особенности блокчейна включают децентрализацию, неизменяемость и безопасность.
              </p>
              <div className="space-y-4 pb-5"></div>
              <p>Основные характеристики блокчейна:</p>
              <div className="pb-5"></div>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Децентрализация: Данные в блокчейне хранятся на множестве узлов (компьютеров),
                  которые образуют сеть. Все узлы имеют копию всей цепочки блоков, что исключает
                  необходимость в центральном органе контроля и повышает устойчивость системы.
                </li>
                <li>
                  Неизменяемость: Каждый блок содержит хеш предыдущего блока, что делает невозможным
                  изменение информации в блоке без изменения всех последующих блоков. Это
                  обеспечивает целостность и надежность данных, записанных в блокчейн.
                </li>
                <li>
                  Прозрачность и проверяемость: В публичных блокчейнах данные доступны всем
                  участникам сети, что обеспечивает прозрачность. Любой желающий может проверить
                  транзакции и убедиться в их подлинности.
                </li>
                <li>
                  Безопасность: Блокчейн использует криптографические методы для защиты данных и
                  обеспечения их аутентичности. Сложные математические алгоритмы защищают данные от
                  несанкционированного доступа и изменений.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Как работает блокчейн:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Создание транзакции: Пользователь создает транзакцию, которая включает информацию,
                  такую как перевод криптовалюты, данные смарт-контракта или любое другое событие.
                </li>
                <li>
                  Проверка транзакции: Транзакция передается в сеть, где она проверяется узлами на
                  предмет правильности и соответствия правилам консенсуса (например, Proof of Work
                  или Proof of Stake).
                </li>
                <li>
                  Добавление в блок: Проверенные транзакции объединяются в блоки. Каждый блок
                  содержит хеш предыдущего блока, создавая таким образом цепочку.
                </li>
                <li>
                  Закрепление блока: После того как блок создан и подтвержден узлами, он добавляется
                  к цепочке блоков, и информация становится неизменяемой.
                </li>
                <li>
                  Распределение и синхронизация: Обновленный блокчейн передается всем узлам сети,
                  которые обновляют свои копии цепочки блоков.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Примеры использования блокчейна:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Криптовалюты: Самым известным применением блокчейна являются криптовалюты, такие
                  как Bitcoin и Ethereum. Они используют блокчейн для децентрализованного и
                  безопасного учета транзакций.
                </li>
                <li>
                  Смарт-контракты: Платформы, такие как Ethereum, используют блокчейн для выполнения
                  смарт-контрактов, которые автоматически выполняются при соблюдении заранее
                  определенных условий.
                </li>
                <li>
                  Управление цепочками поставок: Блокчейн может использоваться для отслеживания
                  движения товаров по цепочке поставок, обеспечивая прозрачность и аутентичность
                  данных.
                </li>
                <li>
                  Децентрализованные приложения (dApps): Приложения, работающие на блокчейне,
                  обеспечивают децентрализованное выполнение различных функций без необходимости в
                  центральном сервере.
                </li>
                <li>
                  Голосование: Блокчейн может использоваться для проведения безопасных и прозрачных
                  голосований, исключая возможность фальсификаций.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Преимущества блокчейна:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Устойчивость к взломам: Децентрализованная природа блокчейна делает его устойчивым
                  к атакам, так как нет единой точки отказа.
                </li>
                <li>
                  Прозрачность: Все участники сети могут видеть данные и проверять их подлинность.
                </li>
                <li>
                  Снижение затрат: Блокчейн устраняет необходимость в посредниках, что может снизить
                  операционные расходы.
                </li>
                <li>
                  Автоматизация: Смарт-контракты и децентрализованные приложения могут
                  автоматизировать множество процессов, делая их быстрее и надежнее.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>
            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Блокчейн — это мощная технология, которая открывает новые возможности для безопасного
              и децентрализованного хранения и обработки данных, находя применение во множестве
              отраслей, от финансов до управления цепочками поставок.
            </div>
          </details>
        </div>
        <div className="" id="6"></div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="open:bg-p1-greem rounded-3xl border-p1-darkgreen p-2 open:ring-1 open:ring-p1-green hover:border-p1-green open:md:border-4 open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              Смарт-контракты
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                Смарт-контракты (англ. smart contracts) — это самоисполняющиеся контракты с
                условиями соглашения между покупателем и продавцом, написанными непосредственно в
                строках кода. Эти контракты существуют на блокчейне и автоматически выполняются,
                когда определенные условия соблюдаются. Смарт-контракты обеспечивают прозрачность,
                безопасность и автоматизацию процессов, устраняя необходимость в посредниках.
              </p>
              <div className="space-y-4 pb-5"></div>
              <p>Основные характеристики смарт-контрактов:</p>
              <div className="pb-5"></div>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Автономность: Смарт-контракты исполняются автоматически без необходимости
                  вмешательства человека, как только выполнены заранее определенные условия.
                </li>
                <li>
                  Децентрализация: Они работают на блокчейне, что означает, что они не
                  контролируются одной центральной организацией или сервером.
                </li>
                <li>
                  Прозрачность: Все участники сети могут проверить условия контракта и его
                  выполнение, что увеличивает доверие и снижает риски мошенничества.
                </li>
                <li>
                  Неизменяемость: После развертывания на блокчейне смарт-контракт не может быть
                  изменен, что обеспечивает надежность и неизменность условий.
                </li>
                <li>
                  Безопасность: Код и транзакции защищены криптографией, что делает их устойчивыми к
                  взломам и манипуляциям.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Как работают смарт-контракты: :
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Создание и развертывание: Смарт-контракт создается разработчиком с использованием
                  языка программирования, такого как Solidity для Ethereum. Затем он развертывается
                  на блокчейне.
                </li>
                <li>
                  Выполнение условий: Смарт-контракт содержит логические условия (например,
                  &quot;если-это-то-то&quot;), которые проверяются и выполняются автоматически при
                  соблюдении определенных условий.
                </li>
                <li>
                  Автоматическое исполнение: Если условия соблюдены, смарт-контракт выполняет
                  запрограммированные действия, такие как перевод средств, регистрация данных или
                  запуск других смарт-контрактов.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Примеры использования смарт-контрактов:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Финансовые услуги: Смарт-контракты могут автоматизировать процессы, такие как
                  кредитование, страхование и торговля активами. Например, DeFi (децентрализованные
                  финансы) используют смарт-контракты для создания финансовых продуктов без
                  необходимости в традиционных финансовых учреждениях.
                </li>
                <li>
                  Логистика и управление цепочками поставок: Смарт-контракты могут отслеживать
                  движение товаров, автоматизировать платежи и управлять поставками на основе
                  предопределенных условий.
                </li>
                <li>
                  Управление цифровыми активами: Смарт-контракты могут использоваться для создания и
                  управления токенами, включая NFT (невзаимозаменяемые токены), которые представляют
                  собой уникальные цифровые объекты, такие как произведения искусства, коллекционные
                  предметы и виртуальная недвижимость.
                </li>
                <li>
                  Управление организациями: Децентрализованные автономные организации (DAO)
                  используют смарт-контракты для принятия коллективных решений и управления
                  ресурсами организации на основе голосования участников.
                </li>
                <li>
                  Юридические соглашения: Смарт-контракты могут автоматизировать выполнение
                  юридических соглашений, таких как аренда недвижимости или контракты на оказание
                  услуг.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Примеры платформ для создания смарт-контрактов:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Ethereum: Самая известная и широко используемая платформа для создания
                  смарт-контрактов. Использует язык программирования Solidity.
                </li>
                <li>
                  EOS: Платформа, ориентированная на высокую производительность и масштабируемость
                  смарт-контрактов.
                </li>
                <li>
                  Tron: Платформа, предназначенная для создания децентрализованных приложений и
                  смарт-контрактов, с акцентом на мультимедийные приложения.
                </li>
                <li>
                  Cardano: Платформа, известная своим научным подходом к разработке и безопасностью
                  смарт-контрактов. Смарт-контракты революционизируют множество отраслей,
                  автоматизируя процессы и создавая новые возможности для взаимодействия без
                  посредников.
                </li>
              </ul>
            </div>
          </details>
        </div>
        <div className="" id="7"></div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="open:bg-p1-greem rounded-3xl border-p1-darkgreen p-2 open:ring-1 open:ring-p1-green hover:border-p1-green open:md:border-4 open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              ДАО (Децентрализованная автономная организация)
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                ДАО (Децентрализованная автономная организация) — это организация, управляемая с
                помощью блокчейн-технологий и смарт-контрактов, которая функционирует без
                центрального управления. В DAO решения принимаются коллективно участниками
                организации, часто посредством голосования с использованием токенов.
              </p>
              <div className="space-y-4 pb-5"></div>
              <p>Основные характеристики и принципы DAO включают:</p>
              <div className="pb-5"></div>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Децентрализованное управление: В DAO нет единого управляющего органа или
                  централизованного управления. Вся деятельность организации контролируется и
                  управляется коллективно участниками через смарт-контракты.
                </li>
                <li>
                  Прозрачность и открытость: Все действия и транзакции DAO записываются в блокчейн,
                  что делает их прозрачными и проверяемыми для всех участников. Это повышает доверие
                  между участниками, так как все действия можно проверить.
                </li>
                <li>
                  Смарт-контракты: Основой функционирования DAO являются смарт-контракты —
                  автоматизированные программы, которые исполняются при выполнении определенных
                  условий. Эти контракты прописывают правила и процедуры работы DAO и гарантируют их
                  соблюдение без необходимости в центральном посреднике.
                </li>
                <li>
                  Голосование и участие: Участники DAO часто имеют право голоса пропорционально
                  количеству принадлежащих им токенов. Голосование может использоваться для принятия
                  решений о развитии проекта, распределении ресурсов и других важных вопросах.
                </li>
                <li>
                  Автономность: DAO функционируют автономно, следуя заложенным в смарт-контрактах
                  правилам. Это минимизирует необходимость вмешательства людей и снижает риск
                  человеческих ошибок или злоупотреблений.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Примеры использования DAO:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Финансовые проекты: DAO могут управлять фондами и инвестициями, распределяя
                  средства по проектам на основе коллективного голосования.
                </li>
                <li>
                  Социальные и благотворительные проекты: Участники могут совместно управлять
                  благотворительными фондами и распределять помощь на основе голосования.
                </li>
                <li>
                  Децентрализованные платформы: Управление децентрализованными приложениями и
                  сервисами, такими как платформы для обмена контентом или социальные сети, может
                  осуществляться через DAO.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Примеры известных DAO:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  The DAO: Один из первых и самых известных примеров DAO, созданный в 2016 году на
                  платформе Ethereum. Он собрал значительные средства через краудфандинг, но вскоре
                  столкнулся с уязвимостью, которая привела к хакерской атаке и значительным
                  потерям.
                </li>
                <li>
                  MakerDAO: Платформа, управляющая стейблкоином DAI. Участники могут голосовать за
                  изменения в протоколе и параметрах системы, таких как процентные ставки.
                </li>
                <li>
                  Aragon: Платформа, предоставляющая инструменты для создания и управления DAO,
                  включая интерфейсы для голосования и управления активами.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              DAO представляет собой инновационный способ организации и управления, который
              использует возможности блокчейн-технологий для обеспечения прозрачности, безопасности
              и децентрализации.
            </div>
          </details>
        </div>
        <div className="" id="8"></div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="open:bg-p1-greem rounded-3xl border-p1-darkgreen p-2 open:ring-1 open:ring-p1-green hover:border-p1-green open:md:border-4 open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              Организация хранения данных в децентрализованной сети по техологии IPFS
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                IPFS (InterPlanetary File System, Межпланетная файловая система) — это
                децентрализованная система хранения и обмена файлами, разработанная для создания
                более устойчивого и доступного интернета. IPFS использует P2P (peer-to-peer)
                технологию для распределенного хранения данных, что обеспечивает надежность,
                скорость и устойчивость к цензуре.
              </p>
              <div className="space-y-4 pb-5"></div>
              <p>Основные особенности и принципы IPFS включают:</p>
              <div className="pb-5"></div>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Децентрализованное хранилище: В отличие от традиционных централизованных серверов,
                  IPFS использует распределенную сеть узлов, где каждый узел может хранить и
                  передавать данные. Это делает систему более устойчивой к сбоям и атакам.
                </li>
                <li>
                  Контент-адресация: В IPFS файлы идентифицируются и запрашиваются по их
                  содержимому, а не по их местоположению. Каждому файлу или фрагменту данных
                  присваивается уникальный хеш, который используется для его поиска и извлечения.
                  Если содержимое файла изменится, изменится и его хеш.
                </li>
                <li>
                  P2P-сеть: IPFS использует P2P-сеть для обмена данными между узлами. Узлы могут
                  запрашивать, хранить и передавать файлы друг другу, что повышает общую скорость и
                  эффективность сети.
                </li>
                <li>
                  Версионирование и иммутабельность: IPFS поддерживает версионирование данных, что
                  позволяет хранить и отслеживать изменения файлов со временем. Также данные в IPFS
                  являются неизменяемыми (иммутабельными), что гарантирует их целостность.
                </li>
                <li>
                  Снижение нагрузки на серверы: За счет распределенного хранения и кеширования
                  данных на узлах, IPFS снижает нагрузку на центральные серверы и увеличивает
                  доступность контента.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Преимущества IPFS:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Устойчивость к сбоям: Данные дублируются и распределяются по множеству узлов, что
                  делает систему устойчивой к отказам и потерям данных.
                </li>
                <li>
                  Скорость и эффективность: Контент может быть извлечен из ближайших узлов, что
                  уменьшает задержки и повышает скорость загрузки.
                </li>
                <li>
                  Устойчивость к цензуре: Децентрализованная природа IPFS затрудняет контроль или
                  блокировку доступа к информации.
                </li>
                <li>
                  Экономия ресурсов: За счет распределенного хранения и обмена данными IPFS может
                  снизить затраты на инфраструктуру.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Примеры использования IPFS:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Децентрализованные приложения (dApps): Многие блокчейн-приложения используют IPFS
                  для хранения данных, таких как смарт-контракты, метаданные и пользовательский
                  контент.
                </li>
                <li>
                  Хранение и передача больших файлов: IPFS подходит для хранения и передачи больших
                  объемов данных, таких как мультимедийные файлы, научные данные и архивы.
                </li>
                <li>
                  Обеспечение устойчивости сайтов: Веб-сайты могут быть развернуты на IPFS, чтобы
                  повысить их доступность и защиту от атак.
                </li>
                <li>
                  Хранение данных в блокчейн-проектах: Проекты, такие как Filecoin, используют IPFS
                  для обеспечения децентрализованного хранилища данных с экономическими стимулами.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              IPFS представляет собой мощный инструмент для создания более децентрализованного,
              безопасного и эффективного интернета, позволяя пользователям хранить и обмениваться
              данными без необходимости в доверенных посредниках или центральных серверах.
            </div>
          </details>
        </div>
        <div className="" id="9"></div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="open:bg-p1-greem rounded-3xl border-p1-darkgreen p-2 open:ring-1 open:ring-p1-green hover:border-p1-green open:md:border-4 open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              Организация хранения данных в децентрализованной сети по техологии Blockweave
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                Blockweave — это уникальная структура хранения данных, используемая в сети Arweave.
                Она отличается от традиционных блокчейнов тем, что каждый блок в сети не только
                ссылается на предыдущий блок, но и на случайные более старые блоки. Это переплетение
                (weaving) блоков обеспечивает более эффективное и долговременное хранение данных.
                Такой подход позволяет снизить требования к хранению для узлов сети и обеспечивает
                устойчивость к потерям данных, делая сеть более надежной и масштабируемой.
              </p>
            </div>
          </details>
        </div>
        <div className="" id="10"></div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="open:bg-p1-greem rounded-3xl border-p1-darkgreen p-2 open:ring-1 open:ring-p1-green hover:border-p1-green open:md:border-4 open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              Что такое токен?
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                Токен — это цифровой актив, представляющий собой единицу стоимости или права,
                созданный и управляемый с использованием блокчейн-технологий. Токены могут иметь
                различные функции и применения, от финансовых инструментов до представления прав на
                активы или доступа к услугам.
              </p>
              <div className="space-y-4 pb-5"></div>
              <p>Основные виды токенов:</p>
              <div className="pb-5"></div>

              <ul className="list-disc px-5">
                <li>Фунгибельные токены (Fungible Tokens):</li>
              </ul>
              <div className="pb-5"></div>
              <div className="pb-5">
                Криптовалюты: Примеры включают Bitcoin (BTC), Ethereum (ETH), которые являются
                взаимозаменяемыми и могут использоваться для обмена и платежей.
              </div>
              <div className="pb-5">
                Стейблкоины: Токены, привязанные к стоимости традиционных валют, таких как USDT
                (Tether), USDC, DAI, обеспечивающие стабильность цен.
              </div>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Невзаимозаменяемые токены (Non-Fungible Tokens, NFT): Коллекционные предметы и
                  цифровое искусство: Каждый токен уникален и не может быть заменен другим на равных
                  условиях. Примеры включают цифровые произведения искусства, виртуальные игровые
                  предметы и коллекционные карточки.
                </li>
                <li>
                  Утилитарные токены (Utility Tokens):Доступ к услугам и продуктам: Эти токены
                  предоставляют доступ к определенным услугам или продуктам на платформе. Например,
                  токены, используемые для оплаты транзакционных сборов или доступа к дополнительным
                  функциям в децентрализованных приложениях (dApps).
                </li>
                <li>
                  Безопасные токены (Security Tokens):Инвестиционные инструменты: Представляют собой
                  доли в реальных активах, таких как акции компаний, недвижимость или другие
                  финансовые инструменты. Эти токены подлежат регулированию, как и традиционные
                  ценные бумаги.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Примеры использования токенов:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Финансовые транзакции: Криптовалюты используются для быстрых и дешевых транзакций
                  по всему миру без необходимости в банках или посредниках.
                </li>
                <li>
                  Коллекционирование и искусство: NFT позволяют художникам и коллекционерам
                  торговать уникальными цифровыми произведениями искусства и предметами
                  коллекционирования.
                </li>
                <li>
                  Голосование и управление: В децентрализованных автономных организациях (DAO)
                  токены могут использоваться для голосования и принятия решений коллективно.
                </li>
                <li>
                  Доступ к услугам: Утилитарные токены могут предоставлять доступ к премиум-функциям
                  на платформе или к определенным сервисам, таким как облачное хранилище или
                  программное обеспечение.
                </li>
                <li>
                  Инвестиции и владение активами: Безопасные токены позволяют инвесторам приобретать
                  и торговать долями в реальных активах, таких как недвижимость или доли в бизнесе,
                  с помощью блокчейна.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Преимущества токенов:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Быстрые и дешевые транзакции: Токены позволяют проводить транзакции быстро и с
                  низкими издержками по сравнению с традиционными финансовыми системами.
                </li>
                <li>
                  Прозрачность и безопасность: Токены и их транзакции записываются в блокчейн, что
                  обеспечивает прозрачность и защиту от подделок и мошенничества.
                </li>
                <li>
                  Децентрализация: Использование токенов позволяет исключить посредников и
                  централизованные органы управления, что делает системы более устойчивыми и
                  независимыми.
                </li>
                <li>
                  Глобальный доступ: Токены могут быть использованы в любой точке мира, что упрощает
                  международные транзакции и доступ к услугам.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Токены играют важную роль в экосистеме блокчейна и децентрализованных технологий,
              предоставляя новые возможности для финансовых операций, управления активами и создания
              новых бизнес-моделей.
            </div>
          </details>
        </div>
        <div className="" id="11"></div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="open:bg-p1-greem rounded-3xl border-p1-darkgreen p-2 open:ring-1 open:ring-p1-green hover:border-p1-green open:md:border-4 open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              Что такое NFT?
            </summary>
            <div className="mt-3 text-base leading-6 md:text-xl">
              <p className="pb:5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
                NFT (Non-Fungible Token, невзаимозаменяемый токен) — это уникальный цифровой актив,
                который представляет собой право собственности или доступ к определенному
                уникальному объекту или контенту. В отличие от взаимозаменяемых токенов, таких как
                биткоины или эфир, каждый NFT имеет уникальный идентификатор и не может быть обменен
                на другой NFT на равных условиях.
              </p>
              <div className="space-y-4 pt-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
                <p>Основные характеристики NFT:</p>

                <ul className="list-disc space-y-4 px-5">
                  <li>
                    Уникальность: Каждый NFT имеет уникальный идентификатор и метаданные, которые
                    отличают его от других токенов. Эти метаданные могут включать информацию о
                    создателе, владельце, истории продаж и других атрибутах.
                  </li>
                  <li>
                    Невзаимозаменяемость: NFT не могут быть обменены на другие NFT на основе
                    равенства. Это делает их идеальными для представления уникальных предметов,
                    таких как произведения искусства, коллекционные предметы, игровые предметы и
                    т.д.
                  </li>

                  <li>
                    Цифровая собственность: Владелец NFT имеет право собственности на связанный
                    цифровой актив, который может быть проверен и подтвержден через блокчейн.
                  </li>
                  <li>
                    Прозрачность и проверяемость: Вся история транзакций и изменений владельца NFT
                    записывается в блокчейн, что делает их подлинность и происхождение легко
                    проверяемыми.
                  </li>
                </ul>
              </div>
              <div className="pb-5"></div>
              <div className="space-y-4 pt-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
                Примеры использования NFT:
                <ul className="list-disc space-y-4 px-5 pt-4">
                  <li>
                    Цифровое искусство: Художники создают и продают свои произведения в виде NFT,
                    предоставляя покупателям уникальные и проверяемые права на цифровое искусство.
                  </li>
                  <li>
                    Коллекционные предметы: NFT используются для создания и торговли цифровыми
                    коллекционными предметами, такими как карточки, мемы и другие уникальные
                    цифровые объекты.
                  </li>
                  <li>
                    Игровые предметы: В видеоиграх NFT могут представлять уникальные игровые
                    предметы, персонажей или виртуальную недвижимость, которые могут быть проданы
                    или обменены между игроками.
                  </li>
                  <li>
                    Музыка и видео: Музыканты и кинематографисты могут выпускать свои произведения в
                    виде NFT, предоставляя эксклюзивный доступ или право собственности на контент.
                  </li>
                  <li>
                    Виртуальные миры и метавселенные: Виртуальные объекты, недвижимость и другие
                    элементы в метавселенных могут быть представлены в виде NFT, что позволяет
                    пользователям владеть и торговать виртуальными активами.
                  </li>
                </ul>
              </div>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Преимущества NFT:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Подлинность и право собственности: NFT позволяют легко проверять подлинность и
                  право собственности на цифровые активы.
                </li>
                <li>
                  Монетизация цифрового контента: Создатели контента могут получать вознаграждение
                  за свою работу, продавая свои произведения в виде NFT.
                </li>
                <li>
                  Прозрачность и доверие: Блокчейн обеспечивает прозрачность и безопасность всех
                  транзакций с NFT.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>
            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Технологии и платформы:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Ethereum: Самая популярная платформа для создания и торговли NFT благодаря
                  стандарту ERC-721 и ERC-1155, который поддерживает уникальные и взаимозаменяемые
                  токены.
                </li>
                <li>
                  Solana: Быстрая и масштабируемая блокчейн-платформа, также используемая для
                  создания NFT.
                </li>
                <li>
                  Flow: Блокчейн, специально разработанный для приложений и игр, поддерживающих NFT.
                </li>
              </ul>
            </div>

            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              NFT открывают новые возможности для цифрового мира, предоставляя способ оцифровывать,
              проверять и торговать уникальными цифровыми активами, что изменяет подход к
              собственности и монетизации контента в интернете.
            </div>
          </details>
        </div>
        <div className="" id="12"></div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="open:bg-p1-greem rounded-3xl border-p1-darkgreen p-2 open:ring-1 open:ring-p1-green hover:border-p1-green open:md:border-4 open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              Каким образом хранится NFT и сведения о том, что я собственник?
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                NFT (невзаимозаменяемые токены) представляют собой уникальные цифровые активы,
                которые хранятся на блокчейне. Однако, в отличие от криптовалют, таких как биткоин
                или эфир, NFT обычно не содержат саму цифровую картину, видео или другой контент, с
                которым они связаны. Вместо этого они содержат ссылки и метаданные, которые
                указывают на местоположение этого контента, а также информацию о собственности и
                другие данные.
              </p>
            </div>
            <div className="space-y-4 pt-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              <p>Как хранится NFT:</p>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Хранение на блокчейне:NFT состоит из записи на блокчейне, содержащей уникальный
                  идентификатор токена, метаданные и ссылку на цифровой актив. Метаданные могут
                  включать информацию о создателе, дате создания, описании, характеристиках и ссылке
                  на сам контент.
                </li>
                <li>
                  Хранение контента вне блокчейна:Сам цифровой контент (например, изображение,
                  видео, аудио) часто хранится вне блокчейна из-за больших размеров файлов и
                  ограничений на хранение данных в блокчейне. Чаще всего контент хранится в
                  децентрализованных хранилищах, таких как IPFS (InterPlanetary File System), или на
                  централизованных серверах.
                </li>
              </ul>
            </div>
            <div className="pb-5"></div>
            <div className="space-y-4 pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Сведения о собственности:
              <ul className="list-disc space-y-4 px-5 pt-2">
                <li>
                  Запись о собственности:Владелец NFT записан в блокчейн, что обеспечивает
                  неизменяемость и проверяемость записи о собственности. Приобретение NFT
                  осуществляется через транзакцию на блокчейне, которая регистрирует смену владельца
                  токена.
                </li>
                <li>
                  Проверка собственности:Любой пользователь может проверить владельца NFT,
                  просматривая информацию на блокчейне через публичные блокчейн-эксплореры, такие
                  как Etherscan для Ethereum.NFT содержит уникальный идентификатор и адрес текущего
                  владельца, что позволяет легко проверить подлинность и текущего владельца токена.
                </li>
              </ul>
            </div>

            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Пример процесса:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Создание NFT: Художник или создатель контента создает цифровое произведение
                  искусства. Он загружает контент в децентрализованное хранилище, такое как IPFS, и
                  получает уникальный хэш (идентификатор) файла. Затем он создает NFT на платформе,
                  такой как OpenSea или Rarible, и включает в метаданные токена ссылку на IPFS-хэш и
                  другую необходимую информацию.
                </li>
                <li>
                  Покупка и передача NFT: Покупатель находит интересующий его NFT на маркетплейсе и
                  покупает его. Транзакция регистрируется на блокчейне, и запись о собственности
                  обновляется, указывая на нового владельца. Новый владелец может хранить NFT в
                  своем криптовалютном кошельке, таком как MetaMask, и управлять им через
                  совместимые платформы.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>
            <div className="text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Безопасность и долговечность:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Информация о собственности и транзакции надежно защищены и неизменяемы благодаря
                  криптографическим механизмам
                </li>
              </ul>
              <div className="pb-5"> </div>
              <div className="">Проблемы с хранением вне блокчейна:</div>
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Хранение контента вне блокчейна может создавать риски, если центральный сервер
                  выйдет из строя или если ссылки на контент перестанут работать.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Децентрализованные системы хранения, такие как IPFS, более устойчивы к этим рискам,
              поскольку контент децентрализованно хранится на многих узлах сети.
            </div>
            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              NFT и блокчейн обеспечивают надежный способ подтверждения права собственности на
              уникальные цифровые активы, а децентрализованные хранилища помогают хранить контент
              безопасно и доступно.
            </div>
          </details>
        </div>
        <div className="" id="13"></div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="open:bg-p1-greem rounded-3xl border-p1-darkgreen p-2 open:ring-1 open:ring-p1-green hover:border-p1-green open:md:border-4 open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              Что такое метаданные?
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                Метаданные — это данные, которые описывают и предоставляют информацию о других
                данных. В контексте цифровых активов, таких как NFT, метаданные играют важную роль,
                предоставляя подробности о самом активе, такие как название, описание, автор, дата
                создания, и ссылки на связанный контент (например, изображения, видео, аудио).
              </p>
            </div>
            <div className="pt-3 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              <p>Метаданные в контексте NFT:</p>
              <div className="space-y-4 pb-5"></div>
              <p>
                Для NFT метаданные часто хранятся в формате JSON и могут включать следующие
                элементы:
              </p>
              <div className="pb-5"></div>

              <ul className="list-disc space-y-4 px-5">
                <li>Название (name):Название цифрового актива или произведения искусства.</li>
                <li>Описание (description):Краткое описание или история актива.</li>
                <li>
                  Изображение (image):Ссылка на изображение или видео, представляющее актив. Часто
                  эта ссылка указывает на ресурс, хранящийся в децентрализованной сети, такой как
                  IPFS.
                </li>
                <li>
                  Атрибуты (attributes):Дополнительные характеристики или свойства актива, которые
                  могут быть использованы, например, в игровых NFT для описания уровней,
                  способностей и т.д.
                </li>
                <li>Создатель (creator):Информация о создателе или авторе актива.</li>
                <li>Дата создания (creation_date):Дата и время создания актива.</li>
              </ul>
            </div>
            <div className="pb-5"></div>
            <div className="space-y-4 pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Хранение метаданных:
              <p>
                Метаданные для NFT могут храниться как на блокчейне, так и вне его, в зависимости от
                платформы и требований:
              </p>
              <ul className="list-disc space-y-4 px-5">
                <li>
                  На блокчейне:Включение метаданных прямо в смарт-контракт может быть дорогостоящим
                  из-за ограничений на размер данных и высоких транзакционных издержек.
                </li>
                <li>
                  Вне блокчейна:Часто метаданные хранятся в децентрализованных системах хранения,
                  таких как IPFS, Arweave или других платформах. В блокчейне хранится ссылка (URI)
                  на метаданные, что обеспечивает доступ к ним.
                </li>
              </ul>
            </div>

            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Использование метаданных:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Метаданные используются для отображения информации о NFT на различных платформах и
                  в кошельках. При просмотре NFT платформа или приложение запрашивает метаданные по
                  URI и отображает информацию и связанный контент пользователю.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>
            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Преимущества использования метаданных:
              <ul className="list-disc space-y-2 px-5">
                <li>
                  Дополнительная информация:Метаданные предоставляют подробную информацию о цифровом
                  активе, что делает его более понятным и привлекательным для потенциальных
                  покупателей и коллекционеров.
                </li>
                <li>
                  Структурированность:Метаданные организуют информацию в структурированном формате,
                  что облегчает обработку и отображение данных.
                </li>
                <li>
                  Гибкость:Возможность добавления различных атрибутов и характеристик делает NFT
                  более универсальными и пригодными для различных применений, таких как игры,
                  коллекционирование и искусство.
                </li>
                <li>
                  Совместимость:Стандарты метаданных, такие как формат JSON, обеспечивают
                  совместимость с различными платформами и сервисами.
                </li>
              </ul>
            </div>
            <div className="pb-5"> </div>
            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Метаданные играют ключевую роль в экосистеме NFT, обеспечивая богатую и
              структурированную информацию о цифровых активах, которая помогает пользователям и
              платформам взаимодействовать с этими активами более эффективно.
            </div>
          </details>
        </div>
        <div className="" id="14"></div>
        <div className="mx-auto flex max-w-full flex-row space-y-2 p-2">
          <details className="open:bg-p1-greem rounded-3xl border-p1-darkgreen p-2 open:ring-1 open:ring-p1-green hover:border-p1-green open:md:border-4 open:md:shadow-lg dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:open:ring-white/10 dark:hover:border-p1-green dark:hover:text-p1-cyan">
            <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              Что такое MetaMask?
            </summary>
            <div className="mt-3 text-base leading-6 text-p1-darkgreen md:text-xl dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
              <p>
                MetaMask — это популярный криптовалютный кошелек и инструмент для взаимодействия с
                блокчейном Ethereum, который позволяет пользователям управлять своими эфирами (ETH)
                и токенами, а также взаимодействовать с децентрализованными приложениями (dApps).
                MetaMask доступен как расширение для браузера (например, Chrome, Firefox, Brave) и
                как мобильное приложение (для iOS и Android).
              </p>
            </div>
            <div className="pt-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              <p>Основные функции MetaMask:</p>

              <ul className="list-disc space-y-4 px-5">
                <li>
                  Управление криптовалютами: Хранение и управление Ethereum (ETH) и токенами
                  стандарта ERC-20 и ERC-721. Отправка и получение криптовалюты. Поддержка
                  нескольких адресов (аккаунтов).
                </li>
                <li>
                  Интеракция с dApps:Интеграция с децентрализованными приложениями, что позволяет
                  пользователям легко взаимодействовать с DeFi протоколами, NFT платформами, играми
                  и другими сервисами на блокчейне Ethereum. Возможность подключения к dApps
                  напрямую через браузерное расширение или мобильное приложение.
                </li>
                <li>
                  Безопасность:Приватные ключи хранятся локально на устройстве пользователя и
                  защищены паролем. Возможность создания резервных копий и восстановления кошелька с
                  помощью сид-фразы (seed Поддержка аппаратных кошельков, таких как Ledger и Trezor,
                  для для дополнительной безопасности.
                </li>
                <li>
                  Пользовательский интерфейс:Удобный и интуитивно понятный интерфейс для управления
                  активами и взаимодействия с dApps. Поддержка кастомизации и добавления
                  пользовательских токенов.
                </li>
              </ul>
            </div>
            <div className="pb-5"></div>
            <div className="space-y-4 pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Мультибраузерная и мобильная поддержка:Расширения для популярных браузеров, что делает
              использование MetaMask удобным на настольных устройствах. Мобильное приложение для
              управления криптовалютами и взаимодействия с dApps на ходу.
            </div>
            <div className="space-y-4 pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              Как использовать MetaMask:
              <ul className="list-disc space-y-4 px-5">
                <li>
                  Установка и настройка:Скачать и установить расширение для браузера или мобильное
                  приложение MetaMask. Создать новый кошелек, следуя инструкциям, и сохранить
                  сид-фразу в безопасном месте. Установить пароль для защиты кошелька.
                </li>
                <li>
                  Пополнение кошелька:Получить адрес своего кошелька и использовать его для
                  получения ETH или других токенов. Пополнить кошелек, отправив криптовалюту на этот
                  адрес.
                </li>
                <li>
                  Интеракция с dApps:Подключить MetaMask к поддерживаемому dApp, нажав кнопку
                  &quot;Connect&quot; или аналогичную в интерфейсе dApp. Авторизовать MetaMask для
                  взаимодействия с dApp и подтверждать транзакции, используя кошелек.
                </li>
                <li>
                  Отправка и получение криптовалюты:Для отправки криптовалюты выбрать
                  &quot;Send&quot;, указать адрес получателя и сумму, затем подтвердить транзакцию.
                  Для получения криптовалюты использовать свой адрес кошелька и передать его
                  отправителю.
                </li>
              </ul>
            </div>

            <div className="pb-5"> </div>

            <div className="pb-5 text-p1-darkgreen dark:text-p1-green dark:hover:text-p1-cyan">
              MetaMask является мощным инструментом для любого, кто хочет участвовать в экосистеме
              Ethereum. Он обеспечивает безопасное хранение криптовалюты, удобное взаимодействие с
              децентрализованными приложениями и простой способ управления цифровыми активами.
            </div>
          </details>
        </div>
        <div className="" id="15"></div>
        <div className="pb-5"></div>
      </div>
    </div>
  );
}
