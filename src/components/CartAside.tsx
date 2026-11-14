export function CartAside() {
  return (
    <aside
      aria-label="Carrinho de compras"
      className="hidden border border-neon-pink bg-navy lg:sticky lg:top-24 lg:col-start-2 lg:row-span-4 lg:row-start-1 lg:block lg:self-start"
    >
      <h2 className="border-b border-neon-pink p-4 font-display text-sm font-bold uppercase tracking-widest text-neon-pink">
        Seu carrinho
      </h2>
      <div className="p-6 text-center">
        <img src="/img/carrinho.png" alt="" className="mx-auto h-12 w-12" />
        <p className="mt-3 font-display text-sm font-bold uppercase text-ice">Carrinho vazio</p>
        <p className="mt-1 text-ice/70">Escolha uma peça para começar.</p>
        <p className="mt-6 border-t border-electric pt-3 font-display text-lg font-bold text-neon-cyan">
          Total: R$ 0,00
        </p>
      </div>
    </aside>
  );
}
