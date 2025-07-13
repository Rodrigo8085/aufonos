// Este es el componente principal de tu aplicación React.
// Aquí se definen el layout general (Header, Navbar, Footer)
// y todas las rutas de tu aplicación usando react-router-dom.

import { Routes, Route } from 'react-router-dom';

// Importa tus componentes de layout que vivirán en la carpeta 'src/components'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importa tus componentes de página (vistas) que vivirán en la carpeta 'src/pages'
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * Componente principal de la aplicación.
 * Define el layout general y las rutas de navegación.
 */
function App() {
  return (
    <> {/* Fragmento de React: permite devolver múltiples elementos sin un div extra */}
      {/* Componente de encabezado, visible en todas las páginas */}
      <Header />
      {/* Componente de barra de navegación, visible en todas las páginas */}
      <Navbar />

      {/* Contenedor principal para el contenido dinámico de la página */}
      {/* El contenido de la ruta actual se renderizará dentro de este div */}
      <div className="container mt-5 mb-5"> {/* Añadido mb-5 para espacio antes del footer */}
        {/*
          Define las rutas de tu aplicación.
          Cada <Route> mapea una URL a un componente de página.
        */}
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<HomePage />} />
          {/* Ruta para la página de lista de productos */}
          <Route path="/products" element={<ProductsPage />} />
          {/* Ruta para la página de detalle de un producto específico, usando un parámetro ':id' */}
          <Route path="/products/:id" element={<ProductDetailPage />} />
          {/* Ruta para la página del carrito de compras */}
          <Route path="/cart" element={<CartPage />} />
          {/* Ruta para la página de finalización de compra */}
          <Route path="/checkout" element={<CheckoutPage />} />
          {/* Ruta comodín ('*') para manejar cualquier URL que no coincida con las anteriores (página 404) */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      {/* Componente de pie de página, visible en todas las páginas */}
      <Footer />
    </>
  );
}

export default App;
