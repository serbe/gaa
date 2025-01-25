'use client';

import { JumpButton } from '@/components/jumpButton';

import Image from 'next/image';
export default function Page() {
  const jumpPoints = ['1', '2', '3', '4', '5', '6'];
  return (
    <div className="mx-auto max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      <div className="text-lg">
        <div className="flex flex-row place-self-center">
          <div className="text-center text-xl font-bold text-p1-darkgreen md:pt-5 md:text-4xl dark:text-p1-green dark:hover:text-p1-cyan">
            Our Team
          </div>
        </div>

        <div className="flex flex-row">
          <div className="grid grid-cols-1 gap-4 text-center text-p1-darkgreen md:grid-cols-2 md:p-2 xl:grid-cols-3">
            <div id="1" className="place-items-center text-p1-darkgreen">
              <Image
                className="rounded-full"
                width={200}
                height={200}
                src="/Team/Mike Starodub.png"
                alt="Mike Starodub"
              />

              <div className="mx-auto flex max-w-full flex-row justify-center space-y-2 p-2">
                <details className="rounded-3xl p-2 text-center open:ring-1 open:ring-black/5 dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:hover:border-p1-green dark:hover:text-p1-cyan">
                  <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
                    Михаил Стародуб
                    <p>Founder & President</p>
                  </summary>
                  <div className="mt-3 text-base leading-6 md:text-xl">
                    <div className="pb-5 text-justify">
                      Михаил основал нашу компанию. Он отец наших главных целей и ценностей. Он
                      нашел ключевых членов нашей команды и помог им проявить свои уникальные
                      таланты в рабочем процессе. Он сделал первые шаги, которые были действительно
                      важны. Орагнизовал старт Проекта, тактику и стратегию развития компании на
                      ближайшие 5 лет. Имеет международный опыт организации и проведения официальных
                      спортивных международных соревнований таких как Formula-1, WTCR, национальных
                      RDS GP, РСКГ, REC, SDC, а также иных автоспортивных и автокультурных
                      мероприятий на Sochi Autodrom и Igora Drive
                    </div>
                  </div>
                </details>
              </div>
            </div>

            <div id="2" className="place-items-center text-p1-darkgreen">
              <Image
                className="rounded-full"
                width={200}
                height={200}
                src="/Team/Andrey_Laus.png"
                alt="Andrey_Laus"
              />

              <div className="mx-auto flex max-w-full flex-row justify-center space-y-2 p-2">
                <details className="rounded-3xl p-2 text-center open:ring-1 open:ring-black/5 dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:hover:border-p1-green dark:hover:text-p1-cyan">
                  <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
                    Андрей Лаус
                    <p>Founder & Vice President</p>
                  </summary>
                  <div className="mt-3 text-base leading-6 md:text-xl">
                    <div className="text-justify">
                      Стратегическое планирование и рост компании. Специализируется на анализе
                      рынка, разработке бизнес-стратегий и привлечении партнеров. Имеет
                      международный опыт организации и проведения официальных спортивных
                      международных соревнований таких как Formula-1, WTCR, национальных RDS GP,
                      РСКГ, REC, SDC, а также иных автоспортивных и автокультурных мероприятий на
                      Sochi Autodrom и Igora Drive
                    </div>
                  </div>
                </details>
              </div>
            </div>

            <div id="3" className="place-items-center text-p1-darkgreen">
              <Image
                className="rounded-full"
                width={200}
                height={200}
                src="/Team/David Agadjanian.png"
                alt="David Agadjanian."
              />

              <div className="mx-auto flex max-w-full flex-row justify-center space-y-2 p-2">
                <details className="rounded-3xl p-2 text-center open:ring-1 open:ring-black/5 dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:hover:border-p1-green dark:hover:text-p1-cyan">
                  <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
                    Давид Агаджанян
                    <p>Founder & Director of public and international relations</p>
                  </summary>
                  <div className="mt-3 text-base leading-6 md:text-xl">
                    <div className="text-justify">
                      Специализируется на установлении и поддержании международных деловых
                      отношений, управлении корпоративной репутацией, разработке и реализации
                      PR-стратегий на глобальном уровне. Обладает навыками кризисного менеджмента и
                      организации международных мероприятий. Опыт работы включает успешные проекты
                      по продвижению бренда и укреплению партнерских отношений.
                    </div>
                  </div>
                </details>
              </div>

              <p className="pt-5 font-bold"></p>
              <p></p>
            </div>

            <div id="4" className="place-items-center text-p1-darkgreen">
              <Image
                className="rounded-full"
                width={200}
                height={200}
                src="/Team/Valerii_Kostikov.png"
                alt="Valerii Kostikov"
              />
              <div className="mx-auto flex max-w-full flex-row justify-center space-y-2 p-2">
                <details className="rounded-3xl p-2 text-center open:ring-1 open:ring-black/5 dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:hover:border-p1-green dark:hover:text-p1-cyan">
                  <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
                    Валерий Костиков
                    <p>Founder & Software developer</p>
                  </summary>
                  <div className="mt-3 text-base leading-6 md:text-xl">
                    <div className="text-justify">
                      Разработчик программного обеспечения, специализирующийся на frontend (React,
                      Vue.js), backend (Node.js, Django), Web3 и блокчейн (Solidity, Ethereum).
                      Руководит разработкой и стратегией развития автоматизации сервисов. Имеет опыт
                      создания и развертывания смарт-контрактов, а также интеграцией блокчейн-сетей.
                    </div>
                  </div>
                </details>
              </div>
            </div>

            <div id="5" className="place-items-center text-p1-darkgreen">
              <Image
                className="rounded-full"
                width={200}
                height={200}
                src="/Team/Lada.png"
                alt="Lada Leman"
              />

              <div className="mx-auto flex max-w-full flex-row justify-center space-y-2 p-2">
                <details className="rounded-3xl p-2 text-center open:ring-1 open:ring-black/5 dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:hover:border-p1-green dark:hover:text-p1-cyan">
                  <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
                    Лада Леман
                    <p>Artist</p>
                  </summary>
                  <div className="mt-3 text-base leading-6 md:text-xl">
                    <div className="text-justify">
                      Лада обладает креативным подходом к выполнению задач и обширным опытом в
                      создании и управлении визуальными концепциями. Специализируется на разработке
                      бренд-стратегий, внедрении инновационных решений в проекты. Успешно
                      реализовала множество проектов в области графического дизайна, анимации.
                      Обеспечивает высокие стандарты креативности и функциональности. Обладает
                      глубокими знаниями в области пользовательского опыта и современного
                      графического дизайна и анимации.
                    </div>
                  </div>
                </details>
              </div>
            </div>

            <div id="6" className="place-items-center text-p1-darkgreen">
              <Image
                className="rounded-full"
                width={200}
                height={200}
                src="/Team/GermanBenkovsky.png"
                alt="German Benkovsky"
              />

              <div className="mx-auto flex max-w-full flex-row justify-center space-y-2 p-2">
                <details className="rounded-3xl p-2 text-center open:ring-1 open:ring-black/5 dark:text-p1-green dark:open:bg-p1-deepdarkgreen dark:hover:border-p1-green dark:hover:text-p1-cyan">
                  <summary className="text-lm select-none space-y-4 font-semibold leading-6 text-p1-darkgreen dark:text-p1-green dark:hover:border-p1-green dark:hover:text-p1-cyan">
                    Герман Беньковский
                    <p>Founder & Marketing Director</p>
                  </summary>
                  <div className="mt-3 text-base leading-6 md:text-xl">
                    <div className="text-justify">
                      Герман - на сегодняшний день самый молодой участник нашей команды. Он студент
                      МГИМО. За плечами Германа опыт по созданию успешных социальнозначимых медиа
                      продуктов в сферах Web2 и Web3. В команде Global Automotive Association Герман
                      ответственен стратегию продвижения продукта и сотрудничество с отечественными
                      и зарубежными партнерами.
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
