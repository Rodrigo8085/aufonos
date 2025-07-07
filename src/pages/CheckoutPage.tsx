import React from 'react';
import { useNavigate } from 'react-router-dom';

import useCart from '../hooks/useCart';
import Modal from '../components/Modal';
import type { FormDataPay } from '../interfaces/FormDataPay';

/**
 * Componente de la página de pago.
 */
export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState<FormDataPay>({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    cardExp: '',
    cardCvv: ''
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({}); // Tipado para errores
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [showErrorModal, setShowErrorModal] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState('');

  // Redirige si el carrito está vacío
  React.useEffect(() => {
    if (items.length === 0 && !showSuccessModal && !showErrorModal) {
      const timer = setTimeout(() => navigate('/cart'), 50);
      return () => clearTimeout(timer);
    }
  }, [items, showSuccessModal, showErrorModal, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido.';
    if (!formData.address.trim()) newErrors.address = 'La dirección es requerida.';
    if (!formData.city.trim()) newErrors.city = 'La ciudad es requerida.';
    if (!formData.zip.trim()) newErrors.zip = 'El código postal es requerido.';
    if (!formData.cardName.trim()) newErrors.cardName = 'El nombre en la tarjeta es requerido.';
    if (!formData.cardNumber.trim() || !/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) newErrors.cardNumber = 'Número de tarjeta inválido (16 dígitos).';
    if (!formData.cardExp.trim() || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.cardExp)) newErrors.cardExp = 'Formato de fecha MM/AA inválido.';
    if (!formData.cardCvv.trim() || !/^\d{3,4}$/.test(formData.cardCvv)) newErrors.cardCvv = 'CVV inválido (3 o 4 dígitos).';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Procesando pago con:", formData);

      const success = Math.random() > 0.2; // 80% de éxito

      if (success) {
        setModalMessage("¡Tu compra ha sido exitosa! Recibirás un correo de confirmación pronto.");
        setShowSuccessModal(true);
        clearCart();
      } else {
        setModalMessage("Hubo un problema al procesar tu pago. Por favor, verifica tus datos o intenta con otro método.");
        setShowErrorModal(true);
      }
    } else {
      setModalMessage("Por favor, corrige los errores en el formulario.");
      setShowErrorModal(true);
    }
  };

  if (items.length === 0 && !showSuccessModal && !showErrorModal) {
    return null;
  }

  return (
    <main>
      <h2 className="text-center mb-4 fw-bold text-primary">Finalizar Compra</h2>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <form onSubmit={handleSubmit} className="checkout-form-section p-4 rounded-lg shadow-sm">
            <h3 className="mb-4">Información de Envío</h3>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre Completo</label>
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Dirección</label>
              <input
                type="text"
                className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              {errors.address && <div className="invalid-feedback">{errors.address}</div>}
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="city" className="form-label">Ciudad</label>
                <input
                  type="text"
                  className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                {errors.city && <div className="invalid-feedback">{errors.city}</div>}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="zip" className="form-label">Código Postal</label>
                <input
                  type="text"
                  className={`form-control ${errors.zip ? 'is-invalid' : ''}`}
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                />
                {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
              </div>
            </div>

            <h3 className="mt-4 mb-3">Información de Pago</h3>
            <div className="mb-3">
              <label htmlFor="cardName" className="form-label">Nombre en la Tarjeta</label>
              <input
                type="text"
                className={`form-control ${errors.cardName ? 'is-invalid' : ''}`}
                id="cardName"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                required
              />
              {errors.cardName && <div className="invalid-feedback">{errors.cardName}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Número de Tarjeta</label>
              <input
                type="text"
                className={`form-control ${errors.cardNumber ? 'is-invalid' : ''}`}
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="XXXX XXXX XXXX XXXX"
                required
              />
              {errors.cardNumber && <div className="invalid-feedback">{errors.cardNumber}</div>}
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="cardExp" className="form-label">Fecha de Vencimiento (MM/AA)</label>
                <input
                  type="text"
                  className={`form-control ${errors.cardExp ? 'is-invalid' : ''}`}
                  id="cardExp"
                  name="cardExp"
                  value={formData.cardExp}
                  onChange={handleChange}
                  placeholder="MM/AA"
                  required
                />
                {errors.cardExp && <div className="invalid-feedback">{errors.cardExp}</div>}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cardCvv" className="form-label">CVV</label>
                <input
                  type="text"
                  className={`form-control ${errors.cardCvv ? 'is-invalid' : ''}`}
                  id="cardCvv"
                  name="cardCvv"
                  value={formData.cardCvv}
                  onChange={handleChange}
                  placeholder="XXX"
                  required
                />
                {errors.cardCvv && <div className="invalid-feedback">{errors.cardCvv}</div>}
              </div>
            </div>

            <hr className="my-4" />

            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="mb-0">Total a Pagar:</h4>
              <span className="fs-3 fw-bold text-primary">${total.toFixed(2)}</span>
            </div>

            <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill">
              Realizar Pedido
            </button>
          </form>
        </div>
      </div>

      {/* Modal de éxito de compra */}
      <Modal
        show={showSuccessModal}
        onClose={() => { setShowSuccessModal(false); navigate('/'); }} // Redirige a inicio
        title="¡Compra Exitosa!"
      >
        <p className="text-center fs-5 text-success">{modalMessage}</p>
        <p className="text-center">Gracias por tu compra. ¡Disfruta de tus nuevos audífonos!</p>
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-primary rounded-pill px-4" onClick={() => { setShowSuccessModal(false); navigate('/'); }}>
            Volver al Inicio
          </button>
        </div>
      </Modal>

      {/* Modal de error de compra */}
      <Modal
        show={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        title="Error en el Pago"
      >
        <p className="text-center fs-5 text-danger">{modalMessage}</p>
        <p className="text-center">Por favor, inténtalo de nuevo.</p>
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-danger rounded-pill px-4" onClick={() => setShowErrorModal(false)}>
            Intentar de Nuevo
          </button>
        </div>
      </Modal>
    </main>
  );
}
