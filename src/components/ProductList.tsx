import type { Product } from '../data/types';
import { ProductCard } from './ProductCard';

type ProductListProps = {
  products: Product[];
  favoriteIds: string[];
  onToggleFavorite: (productId: string) => void;
};

export function ProductList({ products, favoriteIds, onToggleFavorite }: ProductListProps) {
  return (
    <section
      aria-labelledby="titulo-produtos"
      className="border border-electric bg-void p-3 md:col-span-2 md:p-4 lg:col-span-1 lg:col-start-1"
    >
      <h2 id="titulo-produtos" className="font-display text-lg font-bold uppercase tracking-widest text-neon-cyan">
        Produtos
      </h2>
      <p className="text-ice/70">{products.length} itens disponíveis</p>

      <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={favoriteIds.includes(product.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </section>
  );
}
