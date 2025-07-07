import type { ProductListProps } from '../interfaces/ProductListProps';
import ProductCard from './ProductCard';

/**
 * Componente que muestra una lista de tarjetas de productos.
 */
function ProductList({ products, onAddToCart }: ProductListProps) {
  if (!products || products.length === 0) {
    return (
      <div className="alert alert-info text-center mt-4" role="alert">
        No se encontraron productos en esta categoría.
      </div>
    );
  }

  return (
    <div className="row justify-content-center"> {/* Centra las tarjetas */}
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;
