export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  rating: string;
  price: string;
};

export type Figure = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
};

export type ApiProduct = {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  price: number;
};