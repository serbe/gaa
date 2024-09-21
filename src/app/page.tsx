import Image from "next/image";
<body>
  <div className="max-w-screen-xl"></div>
</body>;
export default function Page() {
  return (
    <div className="w-full">
      <div className="w-full">
        <section className="flex h-4/5 space-x-2 px-2 pt-5">
          <a className="relative mb-4 inline-block w-2/5 overflow-hidden rounded rounded-3xl border-4 border-p2-orange bg-p1-white shadow-lg">
            <div>
              <div className="flex flex-row">
                <div className="place-content-center p-8 text-center">
                <h2 className="pt-2 text-2xl text-p1-darkgreen">
                Генеративная коллекция
              </h2>
              <h2 className="pb-2 text-2xl text-p1-darkgreen">
                RaceLads NFT
              </h2>
                
        <Image className="relative mb-4 inline-block w-max overflow-hidden rounded rounded-3xl border-2 border-p2-orange shadow-lg"
            width={1000}
            height={1000}
            src="/HeroNFT/RaceLads/RaceLads1.png"
            alt="RaceLads1"
          />
          <button className="rounded-xl border-2 border-p2-orange bg-p1-white px-10 py-8 text-p1-darkgreen shadow-lg hover:bg-p2-orange hover:text-p1-white">
        Создай NFT
          </button>

                </div>
              </div>

            
            </div>
          </a>

          <a
           
           className="relative mb-4 inline-block h-max w-2/3 overflow-hidden rounded rounded-3xl border-4 border-p1-darkgreen bg-p1-white shadow-lg"
          >
           
            <div>
             
              <div className="text-centre flex flex-row">
           
                <div className="place-content-center p-8 text-center text-2xl text-p1-darkgreen">
               
                <h2 className="pt-2 text-center text-2xl text-p1-darkgreen">Сервис</h2>
                <h2 className="pb-5 text-center text-2xl text-p1-darkgreen">создания NFT наград на сайте</h2>
               
                <button className="rounded-xl border-2 border-p1-darkgreen bg-p1-white px-10 py-8 text-xl text-p1-darkgreen shadow-lg hover:bg-p1-darkgreen hover:text-p1-white">
        Форма подачи заявки
          </button>

              
                
                <div className="place-items-centre mt-5 grid grid-cols-3 gap-2 p-4">
                 
                <Image
            width={1000}
            height={1200}
            src="/Licenses/Promoter.png" 
            alt="Promoter"
          />
                
                <Image
            width={1000}
            height={1200}
            src="/Licenses/National.png" 
            alt="National"
          />
                
                <Image
            width={1000}
            height={1200}
            src="/Licenses/Global.png" 
            alt="Global"
          />
          <h2 className="pt-2 text-center text-xl text-p1-darkgreen">Все награды в Единая коллекции</h2>
          <div>
          <h2 className="pt-2 text-center text-xl text-p1-darkgreen">
            Безопасное хранение медиаконтента в IPFS сети
</h2>

</div>
          <Image
            width={1000}
            height={1200}
            src="/RewardsSite/DriftRewardSite.png" 
            alt="Drift"
          />

                </div>
              </div>
           
            
               
              </div>
            </div>
          </a>
        </section>
      </div>
    </div>
  );
}
