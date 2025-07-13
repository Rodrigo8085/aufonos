import { useState, useEffect } from 'react';
import { fetchProducts, fetchProductById } from '../services/api'; // Importa las funciones de la API simulada
import type { UseProductsResult } from '../interfaces/UseProductsResult';
import type { Product } from '../interfaces/Product';


/**
 * Custom Hook para gestionar la carga de productos.
 * Puede cargar todos los productos, productos por categoría o un producto específico por ID.
 * @param {string} [idOrCategory='all'] - ID del producto o categoría a filtrar.
 * @returns {object} Un objeto con products/product, loading y error.
 */
function useProducts(idOrCategory: string = 'all'): UseProductsResult {
  const [data, setData] = useState<Product[] | Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(null);
        let result: Product[] | Product | undefined;

        // Determina si se busca por categoría o por ID
        if (['all', 'over-ear', 'in-ear', 'wireless', 'wired'].includes(idOrCategory)) {
          result = await fetchProducts(idOrCategory);
        } else {
          result = await fetchProductById(idOrCategory);
        }
        setData(result || null); // Asegura que sea null si no se encuentra nada
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("No se pudo cargar la información. Inténtalo de nuevo más tarde.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [idOrCategory]); // Re-ejecuta cuando el ID o categoría cambian

  // Devuelve 'products' si es una lista, 'product' si es un solo elemento
  if (typeof idOrCategory === 'string' && ['all', 'over-ear', 'in-ear', 'wireless', 'wired'].includes(idOrCategory)) {
    return { products: data as Product[], loading, error };
  } else {
    return { product: data as Product, loading, error };
  }
}

export default useProducts;
