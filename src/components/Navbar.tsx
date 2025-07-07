import { Link, NavLink } from 'react-router-dom'; // Importaciones de react-router-dom

/**
 * Componente de barra de navegación para la tienda.
 * Utiliza NavLink para resaltar la página activa.
 */
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-md">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          AuFonos
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* ms-auto para alinear a la derecha */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold' : ''}`}
                to="/"
                end // 'end' para que solo sea activo en la ruta exacta
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold' : ''}`}
                to="/products"
              >
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold' : ''}`}
                to="/cart"
              >
                🛒 Carrito
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold' : ''}`}
                to="/checkout"
              >
                Pagar
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
