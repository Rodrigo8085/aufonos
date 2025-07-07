import type { Product } from "./Product";

export interface CartItemType {
  product: Product;
  quantity: number;
}
