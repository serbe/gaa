const Footer = () => {
  return (
    <header className="sticky bottom-0 bg-black text-slate-300">
      <div className="mx-auto flex max-w-5xl py-2">
        <div className="pr-4 text-6xl">GAA
        </div>
        <div className="pt-1 text-xs tracking-[0.4em]" >
          <div>Global</div>
          <div>Automotive</div>
          <div>Association</div>
        </div>
        <div className="flex w-full text-center text-sm">
          <div className="w-1/4">Privacy Policy</div>
          <div className="w-1/4">Term & Conditions</div>
          <div className="w-1/4">About Us</div>
          <div className="w-1/4">Contacts</div>
        </div>
      </div>
      <div className="mx-auto flex max-w-5xl py-2 text-sm">
        <div>© 2024 All Rights Reserved</div>
        <div className="flex w-full">
          <div className="w-full"></div>
          <div className="px-2">Instagramm</div>
          <div className="px-2">Facebook</div>
          <div className="px-2">Twitter</div>
        </div>
      </div>
    </header>
  )
}

export default Footer
