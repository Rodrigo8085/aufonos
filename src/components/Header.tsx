/**
 * Componente de encabezado para la tienda de audífonos.
 * Muestra el título principal y un eslogan.
 */
function Header() {
  return (
    <header className="p-5 bg-primary text-white text-center rounded-bottom shadow-sm">
      <h1 className="display-4 fw-bold">🎧 Tu Tienda de Audífonos 🎧</h1>
      <p className="lead mt-3">Descubre la experiencia de sonido perfecta para ti.</p>
    </header>
  );
}

export default Header;
