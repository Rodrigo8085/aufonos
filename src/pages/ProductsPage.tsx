import React from 'react';
import ProductList from '../components/ProductList';
import CategoryFilter from '../components/CategoryFilter';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import Modal from '../components/Modal';
import useProducts from '../hooks/useProducts';
import useCart from '../hooks/useCart';
import type { Product } from '../interfaces/Product';

/**
 * Componente de la página de productos.
 * Permite ver todos los productos y filtrarlos por categoría.
 */
export default function ProductsPage() {
  const [filterCategory, setFilterCategory] = React.useState('all');
  const { products, loading, error } = useProducts(filterCategory); // Usando el Custom Hook
  const { addItem } = useCart(); // Hook para añadir al carrito

  const [showModal, setShowModal] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState('');

  const handleAddToCart = (product: Product) => {
    addItem(product);
    setModalMessage(`${product.name} ha sido añadido al carrito!`);
    setShowModal(true);
  };

  return (
    <main>
      <h2 className="text-center mb-4 fw-bold text-primary">Nuestros Audífonos</h2>

      <CategoryFilter onSelectCategory={setFilterCategory} currentCategory={filterCategory} />

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && products && (
        <ProductList products={products} onAddToCart={handleAddToCart} />
      )}

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Producto Añadido"
      >
        <p className="text-center fs-5">{modalMessage}</p>
        <p className="text-center text-muted">Puedes continuar comprando o ir al carrito.</p>
      </Modal>
    </main>
  );
}
