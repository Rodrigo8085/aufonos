/**
 * Componente de carrusel de Bootstrap 5.
 * Muestra una serie de diapositivas rotativas con imágenes o contenido.
 * Requiere que el bundle de JavaScript de Bootstrap esté cargado en index.html.
 */
function Carousel() {
  return (
    <div id="heroCarousel" className="carousel slide mb-5 rounded-lg shadow-lg" data-bs-ride="carousel">
      {/* Indicadores del carrusel */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      {/* Contenido del carrusel */}
      <div className="carousel-inner rounded-lg">
        {/* Diapositiva 1 */}
        <div className="carousel-item active">
          <img
            src="https://placehold.co/1200x400/007bff/ffffff?text=La+Mejor+Calidad+de+Sonido"
            className="d-block w-100 rounded-lg"
            alt="Audífonos de alta calidad"
            style={{ objectFit: 'cover', height: '400px' }}
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded p-3">
            <h5 className="fw-bold fs-3">Experimenta el Audio Premium</h5>
            <p className="fs-5">Sumérgete en un sonido cristalino y graves profundos.</p>
          </div>
        </div>
        {/* Diapositiva 2 */}
        <div className="carousel-item">
          <img
            src="https://placehold.co/1200x400/28a745/ffffff?text=Ofertas+Exclusivas"
            className="d-block w-100 rounded-lg"
            alt="Ofertas de audífonos"
            style={{ objectFit: 'cover', height: '400px' }}
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded p-3">
            <h5 className="fw-bold fs-3">No te Pierdas Nuestras Ofertas</h5>
            <p className="fs-5">Descuentos increíbles en tus marcas favoritas.</p>
          </div>
        </div>
        {/* Diapositiva 3 */}
        <div className="carousel-item">
          <img
            src="https://placehold.co/1200x400/ffc107/333333?text=Envío+Gratis"
            className="d-block w-100 rounded-lg"
            alt="Envío gratis de audífonos"
            style={{ objectFit: 'cover', height: '400px' }}
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded p-3">
            <h5 className="fw-bold fs-3">Envío Rápido y Gratuito</h5>
            <p className="fs-5">Recibe tus audífonos directamente en tu puerta.</p>
          </div>
        </div>
      </div>

      {/* Controles del carrusel */}
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

export default Carousel;
