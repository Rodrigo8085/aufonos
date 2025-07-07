/**
 * Componente de spinner de carga.
 * Muestra un indicador visual mientras se cargan datos.
 */
function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center my-5" style={{ minHeight: '200px' }}>
      <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
        <span className="visually-hidden">Cargando...</span>
      </div>
      <p className="ms-3 fs-5 text-muted">Cargando...</p>
    </div>
  );
}

export default LoadingSpinner;
