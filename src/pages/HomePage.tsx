import React from 'react';
import { Link } from 'react-router-dom';

import ProductList from '../components/ProductList';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import Modal from '../components/Modal';
import Carousel from '../components/Carousel';
import useProducts from '../hooks/useProducts';
import useCart from '../hooks/useCart';
import type { Product } from '../interfaces/Product';


/**
 * Home page component.
 * Displays a welcome message and a selection of featured products.
 */
export default function HomePage() {
  const { products, loading, error } = useProducts('all');
  const { addItem } = useCart(); // Hook to add to cart

  const [showModal, setShowModal] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState('');

  const handleAddToCart = (product: Product) => {
    addItem(product);
    setModalMessage(`${product.name} has been added to the cart!`);
    setShowModal(true);
  };

  return (
    <main>
      <Carousel />

      <div className="jumbotron text-center bg-light p-5 rounded mb-5 shadow-sm">
        <h1 className="display-4 fw-bold text-primary">¡Bienvenido a AuFonos!</h1>
        <p className="lead mt-3">Your ultimate destination for high-quality headphones.</p>
        <hr className="my-4" />
        <p>Explora nuestra colección de audifono para el gusto perfecto</p>
        <Link className="btn btn-primary btn-lg rounded-pill px-4" to="/products" role="button">
          Explora Audifonos
        </Link>
      </div>

      <section className="featured-products my-5">
        <h2 className="text-center mb-4 fw-bold">Productos Destacados</h2>
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && products && products.length > 0 && (
          <ProductList products={products.slice(0, 3)} onAddToCart={handleAddToCart} />
        )}
        {!loading && !error && (!products || products.length === 0) && (
          <div className="alert alert-warning text-center">No hay productos destacados en este moemento</div>
        )}
      </section>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Product Added"
      >
        <p className="text-center fs-5">{modalMessage}</p>
        <p className="text-center text-muted">Continua explorando o redirigite al carrito</p>
      </Modal>
    </main>
  );
}
