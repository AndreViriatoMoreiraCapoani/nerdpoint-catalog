import type { Product, ApiProduct } from '../data/types';
import { Api } from '../lib/axios';

const ENDPOINT = '/listagens_nerd_point.json?key=f35cac90';

export const ProductService = {
  async listAll(): Promise<Product[]> {
    const result = await Api.get<ApiProduct[]>(ENDPOINT);

    return result.data.map((product) => ({
      ...product,
      id: String(product.id),
      rating: String(product.rating),
      price: String(product.price),
    }));
  },
};