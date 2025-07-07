import { Link } from 'react-router-dom'; // Importación de react-router-dom
import type { ProductCardProps } from '../interfaces/ProductCardProps';

/**
 * Componente que muestra una tarjeta individual de producto.
 */
function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4"> {/* Columnas responsivas */}
      <div className="card h-100 product-card shadow-sm border-0 rounded-lg"> {/* h-100 para altura uniforme */}
        <img
          className="card-img-top product-card-img rounded-top"
          src={product.imageUrl || `https://placehold.co/400x300/e0e0e0/333333?text=${product.name}`}
          alt={product.name}
          onError={(e) => { e.currentTarget.src = `https://placehold.co/400x300/e0e0e0/333333?text=Imagen no disponible`; }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold text-truncate">{product.name}</h5>
          <p className="card-text text-muted mb-2">{product.category}</p>
          <p className="card-text fs-4 fw-bold text-primary">${product.price.toFixed(2)}</p>
          <div className="mt-auto d-flex justify-content-between align-items-center"> {/* Botones en la parte inferior */}
            <Link to={`/products/${product.id}`} className="btn btn-outline-primary btn-sm rounded-pill">
              Ver Detalles
            </Link>
            <button
              className="btn btn-success btn-sm rounded-pill"
              onClick={() => onAddToCart(product)}
            >
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
