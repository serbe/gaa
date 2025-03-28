'use client';
import { useFavicon } from '@/utils/hooks';
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
  useFavicon('/icon/terms.png ');

  return (
    <div className="mx-auto flex max-w-7xl font-serif">
      <JumpButton points={jumpPoints} />

      <div className="p-2 text-xl md:p-2">
        <div className="p-2 text-center text-xl font-bold text-p1-darkgreen drop-shadow-2xl md:text-4xl dark:text-p1-green dark:hover:text-p1-cyan">
          Термины и определения
        </div>
        <div className="my-5 rounded-3xl border-p1-darkgreen px-2 text-base text-p1-darkgreen hover:border-p2-orange hover:shadow-xl md:border-4 md:p-6 md:text-xl dark:hover:border-p1-green">
          <div className="md:pt-2" id="1"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">NFT</span>, также известные как Non-Fungible Token
            (невзаимозаменяемый токен), лучше всего понимать как цифровые активы, существующие в
            блокчейн. Как только этот актив попадает в блокчейн, его уже нельзя удалить, и вы можете
            видеть каждого человека, который когда-либо владел этим NFT, поскольку все сделки
            хранятся в блокчейн. NFT могут быть представлены в виде цифрового искусства, музыки,
            виртуальной недвижимости, вплоть до коллекционных предметов и игровых активов! Любой
            цифровой актив может быть заминчен (отчеканен) или токенизирован и превращен в NFT.
            После минтинга (чеканки) или токенизации эти активы можно покупать, продавать и
            торговать ими с помощью криптовалюты.
          </div>
          <div className="md:pt-2" id="2"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">Assets</span> (активы) - термин, используемый для
            обозначения цифровых коллекционных предметов. Это может быть произведение искусства,
            музыка, твит или что-либо еще, что можно купить в качестве NFT.
          </div>
          <div className="md:pt-2" id="3"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">Блокчейн</span> – основа всех криптовалют и NFT.
            Блокчейн был придуман Сатоши Накамото в 2008 году как децентрализованная (то есть не
            контролируемая одним человеком, компанией или организацией) система учета транзакций.
            Это способ отслеживания всех транзакций, которые происходят в самом блокчейн, а также
            протоколы, созданные для подтверждения этих транзакций. Таким образом, вы можете быть
            уверены в подлинности того, что покупаете, отправляете или получаете. В блокчейн ничего
            нельзя изменить!
          </div>
          <div className="md:pt-2" id="4"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">Минт</span> (чеканка) – процесс первого добавления NFT в
            блокчейн. Это важная составляющая NFT и то, что делает их такими ценными, потому что,
            когда предмет или актив отчеканен (заминчен), этот факт является доказательством его
            подлинности.
          </div>
          <div className="md:pt-2" id="5"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">DAO (Decentralized Autonomous Organization)</span>-
            расшифровывается как Децентрализованная Автономная Организация и представляет собой
            организацию, которая установила свои собственные правила на основе смарт-контрактов в
            блокчейн.
          </div>
          <div className="md:pt-2" id="6"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">DeFi (Decentralised Finance)</span>- децентрализованные
            финансы, что является общим термином для любого вида финансовой деятельности,
            использующей криптовалюту и принципы блокчейн. Вероятно, вы не часто будете сталкиваться
            с этим термином, но его полезно знать, поскольку эта область развивается и будет все
            чаще появляться в повседневных обсуждениях.
          </div>
          <div className="md:pt-2" id="7"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">Floor</span> (Флор) - &quot;минимальная цена&quot;
            проекта. Это самая низкая цена, по которой вы можете купить NFT из данного проекта на
            вторичном рынке.
          </div>
          <div className="md:pt-2" id="8"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">Газ</span> – это &quot;комиссия&quot;, которую нужно
            оплатить, чтобы совершить сделку (или любые другие транзакции) в блокчейн. Цена газа
            может расти и падать в зависимости от спроса и предложения (нагрузки на сеть).
          </div>
          <div className="md:pt-2" id="9"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">Генеративная коллекция</span> - у всех NFT в каждой
            коллекции есть общие черты: одежда, цвет кожи, головной убор, фон и т. д. Можно
            смешивать и сочетать эти особенности, чтобы создать коллекцию NFT, которая будет
            уникальной. Хотя исходные черты создаются вручную, каждый NFT автоматически создается
            компьютером со случайной комбинацией всех доступных черт.
          </div>
          <div className="md:pt-2" id="10"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">Metadata</span> (метаданные) - все необходимые и
            уникальные данные (свойства), делающие конкретный NFT именно тем, чем он является.
            Простыми словами, метаданные определяют, как выглядит предмет коллекционирования.
          </div>
          <div className="md:pt-2" id="11"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">Metamask</span> (метамаск) - самый популярный
            криптокошелек в экосистеме Ethereum.
          </div>
          <div className="md:pt-2" id="12"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">OpenSea</span> - самый популярный маркетплейс для
            покупки / продажи NFT.
          </div>
          <div className="md:pt-2" id="13"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">PFP (Profile Picture) </span> - простыми словами ваш
            &quot;аватар&quot;, в качестве которого может выступать например NFT.
          </div>
          <div className="md:pt-2" id="14"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">Rarity </span> (рарити/ редкость) – этот термин
            определяет, насколько редким (ценным) является конкретный NFT в рамках коллекции, исходя
            из уникальности его метаданных.
          </div>
          <div className="md:pt-2" id="15"></div>

          <div className="pb-5 dark:text-p1-green dark:hover:text-p1-cyan">
            <span className="font-semibold">Ревил</span> - как правило в генеративных коллекциях
            сразу после минта ваш NFT попадает в криптокошелек в &quot;закрытом виде&quot;. Таким
            образом все NFT данной коллекции будут иметь одинаковый внешний вид. Через какое-то
            время (определяется создателем коллекции) с обновлением метаданных происходит открытие
            (ревил) NFT в следствие чего токен становится уникальным.
          </div>
        </div>
        <div className="pb-5"></div>
      </div>
    </div>
  );
}
