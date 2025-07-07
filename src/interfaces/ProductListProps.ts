import type { Product } from "./Product";

export interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}