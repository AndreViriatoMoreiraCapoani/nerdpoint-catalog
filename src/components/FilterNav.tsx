const filters = ['Gênero', 'Categoria', 'Preço', 'Ordem'];

export function FilterNav() {
  return (
    <nav
      aria-label="Filtros"
      className="md:col-start-2 md:row-start-1 md:h-full lg:col-start-1 lg:row-start-2 lg:h-auto"
    >
      <ul className="grid h-full grid-cols-4 gap-2 md:grid-cols-1 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-1">
        {filters.map((filter) => (
          <li key={filter}>
            <button
              type="button"
              className="h-full w-full border border-electric bg-navy px-2 py-3 font-display text-[10px] font-bold uppercase tracking-wider text-ice hover:border-neon-cyan hover:text-neon-cyan md:text-xs"
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
