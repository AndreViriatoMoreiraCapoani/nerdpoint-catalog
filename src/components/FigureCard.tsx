import type { Figure } from '../data/types';

type FigureCardProps = {
  figure: Figure;
};

export function FigureCard({ figure }: FigureCardProps) {
  return (
    <article className="flex flex-col overflow-hidden border border-electric bg-navy transition hover:border-neon-pink hover:shadow-[0_0_14px] hover:shadow-neon-pink/50">
      <figure className="aspect-square bg-white">
        <img src={figure.image} alt={figure.name} className="h-full w-full object-contain p-2" />
      </figure>
      <div className="flex flex-1 flex-col gap-1 p-3">
        <h3 className="font-display text-sm font-bold text-ice">{figure.name}</h3>
        <p className="text-sm text-ice/70">{figure.description}</p>
        <p className="mt-auto pt-2 font-display text-lg font-black text-neon-pink">{figure.price}</p>
        <button
          type="button"
          className="bg-neon-magenta py-2 font-display text-xs font-bold uppercase tracking-widest text-white hover:bg-neon-pink"
        >
          Adicionar
        </button>
      </div>
    </article>
  );
}
