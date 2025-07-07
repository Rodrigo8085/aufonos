import { useEffect, useRef } from 'react';
import { Modal as BSModal } from 'bootstrap'; // Importa el objeto Modal de Bootstrap JS
import type { ModalProps } from '../interfaces/ModalProps';

/**
 * Componente de modal personalizado.
 * Utiliza el componente Modal de Bootstrap 5.
 * @param {object} props - Las propiedades del componente.
 * @param {boolean} props.show - Si el modal debe ser visible.
 * @param {function} props.onClose - Función para cerrar el modal.
 * @param {string} props.title - Título del modal.
 * @param {React.ReactNode} props.children - Contenido del modal.
 * @param {string} [props.size] - Tamaño del modal (sm, lg, xl).
 */
function Modal({ show, onClose, title, children, size }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const bsModalRef = useRef<BSModal | null>(null);

  useEffect(() => {
    if (modalRef.current) {
      // Inicializa el modal de Bootstrap
      bsModalRef.current = new BSModal(modalRef.current);

      // Limpia el modal cuando el componente se desmonta
      return () => {
        if (bsModalRef.current) {
          bsModalRef.current.dispose();
          bsModalRef.current = null;
        }
      };
    }
  }, []);

  useEffect(() => {
    if (bsModalRef.current) {
      if (show) {
        bsModalRef.current.show();
      } else {
        bsModalRef.current.hide();
      }
    }
  }, [show]);

  return (
    <div
      className="modal fade"
      id="customModal"
      tabIndex={-1}
      aria-labelledby="customModalLabel"
      aria-hidden="true"
      ref={modalRef}
    >
      <div className={`modal-dialog modal-dialog-centered ${size ? `modal-${size}` : ''}`}>
        <div className="modal-content rounded-lg shadow-lg border-0">
          <div className="modal-header bg-primary text-white rounded-top">
            <h5 className="modal-title" id="customModalLabel">{title}</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary rounded-pill"
              data-bs-dismiss="modal"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
