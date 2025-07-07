export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl?: string;
  connectivity?: string;
  brand?: string;
  description?: string;
  features?: string[];
}