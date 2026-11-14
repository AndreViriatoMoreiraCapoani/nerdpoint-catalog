import type { Product } from '../data/types';

type ProductCardProps = {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (productId: string) => void;
};

export function ProductCard({ product, isFavorite, onToggleFavorite }: ProductCardProps) {
  return (
    <article className="flex flex-col overflow-hidden border border-electric bg-navy transition hover:border-neon-cyan hover:shadow-[0_0_14px] hover:shadow-neon-cyan/50">
      <figure className="relative aspect-square bg-white">
        <img src={product.image} alt={product.name} className="h-full w-full object-contain p-2" />
        <figcaption className="absolute right-2 top-2 bg-neon-pink px-2 py-0.5 font-display text-[10px] uppercase tracking-widest text-white">
          {product.category}
        </figcaption>
      </figure>
      <div className="flex flex-1 flex-col gap-1 p-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-sm font-bold text-ice">{product.name}</h3>
          <button
            type="button"
            aria-label={isFavorite ? `Remover ${product.name} dos favoritos` : `Adicionar ${product.name} aos favoritos`}
            aria-pressed={isFavorite}
            onClick={() => onToggleFavorite(product.id)}
            className={`shrink-0 border px-2 py-1 text-sm transition ${
              isFavorite
                ? 'border-neon-pink bg-neon-pink text-white'
                : 'border-electric text-ice hover:border-neon-pink hover:text-neon-pink'
            }`}
          >
            {isFavorite ? '♥' : '♡'}
          </button>
        </div>
        <p className="text-sm text-ice/70">{product.description}</p>
        <p className="text-sm text-neon-cyan">★ {product.rating}</p>
        <p className="mt-auto pt-2 font-display text-lg font-black text-neon-pink">{product.price}</p>
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
