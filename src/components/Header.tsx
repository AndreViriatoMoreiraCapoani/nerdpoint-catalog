export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b-2 border-neon-cyan bg-void/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-300 items-center justify-between px-4 py-3">
        {/*conta*/}
        <button
          type="button"
          aria-label="Minha conta"
          className="flex h-10 w-10 items-center justify-center overflow-hidden border border-neon-cyan bg-navy hover:bg-electric"
        >
          <img src="/img/icone-usuario.jpg" alt="" className="h-full w-full object-cover" />
        </button>

        {/*logo*/}
        <a href="#" className="block h-12 w-40 overflow-hidden md:h-14 md:w-56 lg:order-first lg:w-64">
          <img src="/img/logo.png" alt="Logo NerdPoint" className="h-full w-full object-cover" />
        </a>

        {/*carrinho*/}
        <button
          type="button"
          aria-label="Carrinho"
          className="flex h-10 w-10 items-center justify-center border border-neon-pink bg-navy hover:bg-neon-magenta lg:hidden"
        >
          <img src="/img/carrinho.png" alt="" className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
