
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import Modal from '../components/Modal';
import useProducts from '../hooks/useProducts';
import useCart from '../hooks/useCart';

/**
 * Componente de la página de detalles de un producto.
 * Muestra información detallada de un audífono específico.
 */
export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>(); // Obtiene el ID del producto de la URL
  const navigate = useNavigate(); // Hook para navegar

  const { product, loading, error } = useProducts(id || ''); 
  const { addItem } = useCart(); // Hook para añadir al carrito

  const [showModal, setShowModal] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState('');

  const handleAddToCart = () => {
    if (product) {
      addItem(product);
      setModalMessage(`${product.name} ha sido añadido al carrito!`);
      setShowModal(true);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!product) {
    // Si no se encuentra el producto, puedes redirigir a una página 404
    // o mostrar un mensaje específico.
    return (
      <main>
        <div className="alert alert-warning text-center">
          Producto no encontrado.
          <button className="btn btn-link" onClick={() => navigate('/products')}>Volver a Productos</button>
        </div>
      </main>
    );
  }

  return (
    <main className="product-detail-info">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.imageUrl || `https://placehold.co/600x400/e0e0e0/333333?text=${product.name}`}
            alt={product.name}
            className="img-fluid rounded product-detail-img"
            onError={(e) => { e.currentTarget.src = `https://placehold.co/600x400/e0e0e0/333333?text=Imagen no disponible`; }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold text-primary">{product.name}</h2>
          <p className="lead fs-2 fw-bold mb-3">${product.price.toFixed(2)}</p>
          <p className="text-muted mb-4">{product.description}</p>

          <h4 className="fw-semibold mb-3">Características Clave:</h4>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item"><strong>Marca:</strong> {product.brand || 'N/A'}</li>
            <li className="list-group-item"><strong>Categoría:</strong> {product.category || 'N/A'}</li>
            <li className="list-group-item"><strong>Conectividad:</strong> {product.connectivity || 'N/A'}</li>
            {product.features && product.features.map((feature: string, index: number) => (
              <li key={index} className="list-group-item">
                <i className="bi bi-check-circle-fill text-success me-2"></i>{feature}
              </li>
            ))}
          </ul>

          <div className="d-flex gap-2">
            <button className="btn btn-primary btn-lg rounded-pill px-4" onClick={handleAddToCart}>
              Añadir al Carrito
            </button>
            <button className="btn btn-outline-secondary btn-lg rounded-pill px-4" onClick={() => navigate('/products')}>
              Volver a Productos
            </button>
          </div>
        </div>
      </div>

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
