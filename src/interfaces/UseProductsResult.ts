import type { Product } from "./Product";

export interface UseProductsResult {
  products?: Product[]; // Para cuando se devuelve una lista
  product?: Product;    // Para cuando se devuelve un solo producto
  loading: boolean;
  error: string | null;
}