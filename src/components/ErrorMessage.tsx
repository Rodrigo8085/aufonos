import type { ErrorMessageProps } from "../interfaces/ErrorMessageProps";

/**
 * Componente para mostrar mensajes de error.
 * @param {object} props - Las propiedades del componente.
 * @param {string} props.message - El mensaje de error a mostrar.
 */
function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="alert alert-danger text-center my-5" role="alert">
      <h4 className="alert-heading">¡Error!</h4>
      <p>{message}</p>
      <hr />
      <p className="mb-0">Por favor, inténtalo de nuevo más tarde o contacta a soporte.</p>
    </div>
  );
}

export default ErrorMessage;
