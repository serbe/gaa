<body>
  <div className="max-w-screen-xl"></div>
</body>;
export default function Page() {
  return (
    <div className="w-full">
      <div></div>
      <div></div>

      <div className="pb-5 flex flex-row">
        <div className="basis-2/5">01</div>
        <div className="basis-2/5">02</div>
        <div className="basis-1/5">
          03
          <p className="pb-5 text-2xl font-bold">Get your RaceLad</p>
          <button className="rounded-full bg-slate-900 px-5 py-2 text-white">
            Connect Wallet
          </button>

          
        </div>
      </div>

      <div className="w-full">
        <section className="px-2 flex space-x-2">
          <a
            className="w-2/5 bg-p1-white h-96 mb-4 relative rounded inline-block overflow-hidden rounded-3xl border-4 border-p2-orange"
            href="#"
          >
            <div>
              <div className="pb-5 flex flex-row">
                <div className="basis-2/5 text-center">01</div>
                <div className="basis-1/5 text-center ">01</div>
                <div className="basis-2/5 text-center">01</div>
              </div>

              <h2 className="p-4 absolute bottom-0 text-p1-darkgreen	liading-tight">
                Генеративная коллекция
              </h2>
            </div>
          </a>
          <a
            className="w-3/5 bg-p1-white h-96 mb-4 relative rounded inline-block overflow-hidden rounded-3xl border-4 border-p1-darkgreen"
            href="#"
          >
            <div>
              <h2 className="p-4 absolute bottom-0 text-p1-darkgreen liading-tight">
                Сервис создания NFT наград на сайте
              </h2>
              <div className="pb-5 flex flex-row">
                <div className="basis-2/5 text-center">01</div>
                <div className="basis-1/5 text-center ">01</div>
                <div className="basis-2/5 text-center">01</div>
              </div>
            </div>
          </a>
        </section>
      </div>
    </div>
  );
}
