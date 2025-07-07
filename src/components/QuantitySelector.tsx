import React from 'react';
import type { QuantitySelectorProps } from '../interfaces/QuantitySelectorProps';

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onIncrease, onDecrease }) => (
  <div className="input-group">
    <button
      className="btn btn-outline-secondary"
      type="button"
      onClick={onDecrease}
      disabled={quantity <= 1}
      aria-label="Disminuir cantidad"
    >
      -
    </button>
    <input
      type="text"
      className="form-control text-center"
      value={quantity}
      readOnly
      style={{ width: '40px', minWidth: '40px' }}
      aria-label="Cantidad seleccionada"
    />
    <button
      className="btn btn-outline-secondary"
      type="button"
      onClick={onIncrease}
      aria-label="Aumentar cantidad"
    >
      +
    </button>
  </div>
);

export default QuantitySelector;