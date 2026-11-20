
import type { Product } from '../data/types';
import { Api } from '../lib/axios';

const ENDPOINT = '/listagens_nerd_point.json?key=key=f35cac90';

export const ProductService = {
  async listAll(): Promise<Product[]> {
    const result = await Api.get<Product[]>(ENDPOINT);
    return result.data;
  },
};
