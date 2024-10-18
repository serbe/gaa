"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [value, setValue] = useState("0");
  const [check, setCheck] = useState(false);

  return (
    <div className="font-serif">
      <div className="p-10 text-xl">
        <div className="flex flex-row pb-5">
          <div className="basis-1/5"></div>
          <div className="basis-3/5 text-center text-6xl font-bold text-p1-darkgreen drop-shadow-2xl">
            Наша команда
          </div>
          <div className="basis-1/5"></div>
        </div>
        <div className="flex flex-row space-x-8 pb-5">
          <div className="basis-1/3 text-center text-p1-darkgreen">
            <Image
              className="rounded-full"
              width={500}
              height={500}
              src="/Team/Mike Starodub.png"
              alt="Mike Starodub"
            />

            <p className="pt-5 font-bold">Михаил Стародуб</p>
            <p>Founder & President</p>

            <div className="mt-3 space-y-4 text-justify text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                Михаил основал нашу компанию. Он отец наших главных целей и
                ценностей. Он нашел ключевых членов нашей команды и помог им
                проявить свои уникальные таланты в рабочем процессе. Он сделал
                первые шаги, которые были действительно важны. Орагнизовал старт
                Проекта, тактику и стратегию развития компании на ближайшие 5
                лет. Имеет международный опыт организации и проведения
                официальных спортивных международных соревнований таких как
                Formula-1, WTCR, национальных RDS GP, РСКГ, REC, SDC, а также
                иных автоспортивных и автокультурных мероприятий на Sochi
                Autodrom и Igora Drive
              </p>
            </div>
          </div>
          <div className="basis-1/3 text-center text-p1-darkgreen">
            <Image
              className="rounded-full"
              width={500}
              height={500}
              src="/Team/Andrey_Laus.png"
              alt="Andrey_Laus"
            />
            <p className="pt-5 font-bold">Андрей Лаус</p>
            <p>Founder & Vice President</p>

            <div className="mt-3 space-y-4 text-justify text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                Стратегическое планирование и рост компании. Специализируется на
                анализе рынка, разработке бизнес-стратегий и привлечении
                партнеров. Имеет международный опыт организации и проведения
                официальных спортивных международных соревнований таких как
                Formula-1, WTCR, национальных RDS GP, РСКГ, REC, SDC, а также
                иных автоспортивных и автокультурных мероприятий на Sochi
                Autodrom и Igora Drive
              </p>
            </div>
          </div>
          <div className="basis-1/3 text-center text-p1-darkgreen">
            <Image
              className="rounded-full"
              width={500}
              height={500}
              src="/Team/David Agadjanian.png"
              alt="David Agadjanian."
            />
            <p className="pt-5 font-bold">Давид Агаджанян</p>
            <p>Founder & Director of public and international relations</p>

            <div className="mt-3 space-y-4 text-justify text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                Специализируется на установлении и поддержании международных
                деловых отношений, управлении корпоративной репутацией,
                разработке и реализации PR-стратегий на глобальном уровне.
                Обладает навыками кризисного менеджмента и организации
                международных мероприятий. Опыт работы включает успешные проекты
                по продвижению бренда и укреплению партнерских отношений.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-8 pb-5">
          <div className="basis-1/3 text-center text-p1-darkgreen">
            <Image
              className="rounded-full"
              width={500}
              height={500}
              src="/Team/Valerii_Kostikov.png"
              alt="Valerii Kostikov"
            />
            <p className="pt-5 font-bold">Валерий Костиков</p>
            <p>Founder & Software developer</p>

            <div className="mt-3 space-y-4 text-justify text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                Разработчик программного обеспечения, специализирующийся на
                frontend (React, Vue.js), backend (Node.js, Django), Web3 и
                блокчейн (Solidity, Ethereum). Руководит разработкой и
                стратегией развития автоматизации сервисов. Имеет опыт создания
                и развертывания смарт-контрактов, а также интеграцией
                блокчейн-сетей.
              </p>
            </div>
          </div>
          <div className="basis-1/3 text-center text-p1-darkgreen">
            <Image
              className="rounded-full"
              width={500}
              height={500}
              src="/Team/Lada.png"
              alt="Lada Leman"
            />
            <p className="pt-5 font-bold"> Лада Леман</p>
            <p>Artist</p>

            <div className="mt-3 space-y-4 text-justify text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                Лада обладает креативным подходом к выполнению задач и обширным
                опытом в создании и управлении визуальными концепциями.
                Специализируется на разработке бренд-стратегий, внедрении
                инновационных решений в проекты. Успешно реализовала множество
                проектов в области графического дизайна, анимации. Обеспечивает
                высокие стандарты креативности и функциональности. Обладает
                глубокими знаниями в области пользовательского опыта и
                современного графического дизайна и анимации.
              </p>
            </div>
          </div>
          <div className="basis-1/3 text-center text-p1-darkgreen">
            <Image
              className="rounded-full"
              width={500}
              height={500}
              src="/Team/GermanBenkovsky.png"
              alt="German Benkovsky"
            />
            <p className="pt-5 font-bold"> Герман Беньковский</p>
            <p>Founder & Marketing Director</p>

            <div className="mt-3 space-y-4 text-justify text-xl leading-6 text-p1-darkgreen dark:text-slate-400">
              <p>
                Герман - на сегодняшний день самый молодой участник нашей
                команды. Он студент МГИМО. За плечами Германа опыт по созданию
                успешных социальнозначимых медиа продуктов в сферах Web2 и Web3.
                В команде Global Automotive Association Герман ответственен
                стратегию продвижения продукта и сотрудничество с отечественными
                и зарубежными партнерами.
              </p>
            </div>
          </div>
        </div>
        <div className="pb-5"></div>
      </div>
    </div>
  );
}
