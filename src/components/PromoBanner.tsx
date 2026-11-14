export function PromoBanner() {
  return (
    <section
      aria-label="Destaques e promoções"
      className="flex h-44 flex-col justify-center border border-neon-cyan bg-linear-to-r from-navy via-electric to-neon-magenta p-6 md:col-start-1 md:row-start-1 md:h-56 lg:h-64"
    >
      <p className="font-display text-xs uppercase tracking-[0.3em] text-neon-cyan">Sistema online</p>
      <h1 className="mt-2 font-display text-2xl font-black uppercase text-white md:text-3xl lg:text-4xl">
        Neon Week: até 40% off
      </h1>
      <p className="mt-2 text-lg text-ice">Promoções, novidades e peças limitadas para quem vive no futuro.</p>
    </section>
  );
}
