/**
 * Componente de pie de página para la tienda.
 * Contiene información de derechos de autor y enlaces básicos.
 */
function Footer() {
  return (
    <footer className="mt-5 p-4 bg-dark text-white text-center rounded-top shadow-sm">
      <p className="mb-1">&copy; {new Date().getFullYear()} AuFonos. Todos los derechos reservados.</p>
      <p className="mb-0">Diseñado con ❤️ para la mejor experiencia de sonido.</p>
      <div className="social-links mt-2">
        <a href="#" className="text-white mx-2"><i className="bi bi-facebook"></i></a>
        <a href="#" className="text-white mx-2"><i className="bi bi-twitter"></i></a>
        <a href="#" className="text-white mx-2"><i className="bi bi-instagram"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
