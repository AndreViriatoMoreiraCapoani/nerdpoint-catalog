import { useState } from 'react';
import './App.css';
import './index.css';
import { Header } from './components/Header';
import { PromoBanner } from './components/PromoBanner';
import { FilterNav } from './components/FilterNav';
import { CartAside } from './components/CartAside';
import { ProductList } from './components/ProductList';
import { FigureList } from './components/FigureList';
import { Footer } from './components/Footer';
import { products } from './data/products';
import { figures } from './data/figures';

function App() {
  // Estado dos produtos favoritos
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  // Adiciona ou remove um produto dos favoritos sem afetar os outros cards
  function toggleFavorite(productId: string) {
    setFavoriteIds((currentFavorites) =>
      currentFavorites.includes(productId)
        ? currentFavorites.filter((id) => id !== productId)
        : [...currentFavorites, productId],
    );
  }

  return (
    <div className="min-h-screen bg-void font-body text-ice">
      {/*header*/}
      <Header />

      {/*grid principal*/}
      <main className="mx-auto grid w-full max-w-300 gap-4 px-4 py-4 md:grid-cols-[3fr_1fr] lg:grid-cols-[1fr_320px]">
        {/*destaques/banner*/}
        <PromoBanner />

        {/*filtros*/}
        <FilterNav />

        {/*carrinho desktop*/}
        <CartAside />

        {/*primeira listagem*/}
        <ProductList products={products} favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />

        {/*segunda listagem*/}
        <FigureList figures={figures} />
      </main>

      {/*footer*/}
      <Footer />
    </div>
  );
}

export default App;
