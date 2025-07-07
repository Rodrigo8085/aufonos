import { Link } from 'react-router-dom'; // Importación de react-router-dom

/**
 * Componente de la página 404 (No Encontrado).
 * Se muestra cuando ninguna otra ruta coincide.
 */
export default function NotFoundPage() {
  return (
    <main className="not-found-container">
      <h1 className="display-1 fw-bold">404</h1>
      <p className="fs-3 text-muted">¡Ups! La página que buscas no existe.</p>
      <p className="lead">Parece que te has perdido en el universo del sonido...</p>
      <Link to="/" className="btn btn-primary btn-lg rounded-pill px-5 mt-4">
        Volver al Inicio
      </Link>
    </main>
  );
}
