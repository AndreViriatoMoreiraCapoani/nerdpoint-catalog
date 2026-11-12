import type { Figure } from '../data/types';
import { FigureCard } from './FigureCard';

type FigureListProps = {
  figures: Figure[];
};

export function FigureList({ figures }: FigureListProps) {
  return (
    <section
      aria-labelledby="titulo-mercenarios"
      className="border border-neon-pink bg-void p-3 md:col-span-2 md:p-4 lg:col-span-1 lg:col-start-1"
    >
      <h2 id="titulo-mercenarios" className="font-display text-lg font-bold uppercase tracking-widest text-neon-pink">
        Cyberpunk: Edgerunners
      </h2>
      <p className="text-ice/70">Figures da categoria mais pedida da loja.</p>

      <div className="mt-3 grid gap-3 md:grid-cols-3">
        {figures.map((figure) => (
          <FigureCard key={figure.id} figure={figure} />
        ))}
      </div>
    </section>
  );
}
