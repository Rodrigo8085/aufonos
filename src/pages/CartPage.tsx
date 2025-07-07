import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importaciones de react-router-dom

import useCart from '../hooks/useCart';
import CartItem from '../components/CartItem';
import Modal from '../components/Modal'; 
import type { CartItemType } from '../interfaces/CartItemType';


/**
 * Componente de la página del carrito de compras.
 * Muestra los artículos en el carrito, permite ajustar cantidades y eliminar.
 */
export default function CartPage() { // <-- Asegúrate de que 'export default' esté aquí
  const { items, total, removeItem, updateItemQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const [showClearModal, setShowClearModal] = React.useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState('');

  const handleClearCartConfirm = () => {
    clearCart();
    setShowClearModal(false);
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      setModalMessage("Tu carrito está vacío. Añade productos antes de pagar.");
      setShowCheckoutModal(true);
    } else {
      navigate('/checkout'); // Redirige a la página de pago
    }
  };

  return (
    <main>
      <h2 className="text-center mb-4 fw-bold text-primary">Tu Carrito de Compras</h2>

      {items.length === 0 ? (
        <div className="alert alert-info text-center py-4 cart-empty-message">
          <h4 className="alert-heading">¡Tu carrito está vacío!</h4>
          <p>Parece que aún no has añadido ningún audífono. ¡Explora nuestros productos y encuentra tu sonido ideal!</p>
          <hr />
          <Link to="/products" className="btn btn-primary rounded-pill px-4">
            Ir a la Tienda
          </Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            <ul className="list-group">
              {items.map((item: CartItemType) => (
                <CartItem
                  key={item.product.id}
                  item={item}
                  onUpdateQuantity={updateItemQuantity}
                  onRemoveItem={removeItem}
                />
              ))}
            </ul>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="cart-summary p-4 rounded-lg shadow-sm">
              <h4 className="mb-3 fw-bold">Resumen del Carrito</h4>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Subtotal ({items.length} {items.length === 1 ? 'artículo' : 'artículos'}):
                  <span className="fw-bold">${total.toFixed(2)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center text-success">
                  Envío:
                  <span className="fw-bold">Gratis</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center fs-4 fw-bold text-primary">
                  Total:
                  <span>${total.toFixed(2)}</span>
                </li>
              </ul>
              <div className="d-grid gap-2">
                <button
                  className="btn btn-success btn-lg rounded-pill"
                  onClick={handleCheckout}
                >
                  Proceder al Pago
                </button>
                <button
                  className="btn btn-outline-danger btn-sm rounded-pill"
                  onClick={() => setShowClearModal(true)}
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de confirmación para vaciar carrito */}
      <Modal
        show={showClearModal}
        onClose={() => setShowClearModal(false)}
        title="Vaciar Carrito"
      >
        <p className="text-center fs-5">¿Estás seguro de que quieres vaciar tu carrito de compras?</p>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="btn btn-danger rounded-pill px-4" onClick={handleClearCartConfirm}>
            Sí, Vaciar
          </button>
          <button className="btn btn-secondary rounded-pill px-4" onClick={() => setShowClearModal(false)}>
            Cancelar
          </button>
        </div>
      </Modal>

      {/* Modal para carrito vacío al intentar pagar */}
      <Modal
        show={showCheckoutModal}
        onClose={() => setShowCheckoutModal(false)}
        title="Carrito Vacío"
      >
        <p className="text-center fs-5">{modalMessage}</p>
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-primary rounded-pill px-4" onClick={() => { setShowCheckoutModal(false); navigate('/products'); }}>
            Ir a la Tienda
          </button>
        </div>
      </Modal>
    </main>
  );
}
