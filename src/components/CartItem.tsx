import type { CartItemProps } from '../interfaces/CartItemProps';
import QuantitySelector from './QuantitySelector'; 

/**
 * Componente que representa un artículo individual en el carrito de compras.
 */
function CartItem({ item, onUpdateQuantity, onRemoveItem }: CartItemProps) {
  const { product, quantity } = item;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center cart-item p-3 mb-2 rounded shadow-sm">
      <div className="d-flex align-items-center">
        <img
          src={product.imageUrl || `https://placehold.co/80x80/e0e0e0/333333?text=${product.name}`}
          alt={product.name}
          className="img-thumbnail me-3 rounded"
          style={{ width: '80px', height: '80px', objectFit: 'cover' }}
          onError={(e) => { e.currentTarget.src = `https://placehold.co/80x80/e0e0e0/333333?text=N/A`; }}
        />
        <div>
          <h5 className="mb-1 fw-bold">{product.name}</h5>
          <p className="mb-0 text-muted">${product.price.toFixed(2)} c/u</p>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <QuantitySelector
          quantity={quantity}
          onIncrease={() => onUpdateQuantity(product.id, quantity + 1)}
          onDecrease={() => onUpdateQuantity(product.id, quantity - 1)}
        />
        <span className="ms-3 fw-bold fs-5 text-primary">
          ${(product.price * quantity).toFixed(2)}
        </span>
        <button
          className="btn btn-danger btn-sm ms-3 rounded-pill"
          onClick={() => onRemoveItem(product.id)}
          aria-label={`Eliminar ${product.name} del carrito`}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default CartItem;
