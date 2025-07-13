import { useState, useEffect } from 'react';
import type { CartItem } from '../interfaces/CartItem';
import type { Product } from '../interfaces/Product';

/**
 * Custom Hook para gestionar el estado del carrito de compras.
 * Persiste el carrito en localStorage y calcula el total.
 */
function useCart() {
  // Inicializa el estado del carrito desde localStorage o un array vacío
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error parsing cart from localStorage:", error);
      return [];
    }
  });

  // Efecto para guardar el carrito en localStorage cada vez que cambia
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(items));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [items]);

  /**
   * Añade un producto al carrito. Si ya existe, incrementa la cantidad.
   */
  const addItem = (product: Product) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  /**
   * Elimina un producto del carrito.
   */
  const removeItem = (productId: string) => {
    setItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  /**
   * Actualiza la cantidad de un producto en el carrito.
   * Si la cantidad es 0 o menos, elimina el producto.
   */
  const updateItemQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(productId); // Eliminar si la cantidad es 0 o menos
      return;
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  /**
   * Vacía completamente el carrito.
   */
  const clearCart = () => {
    setItems([]);
  };

  // Calcula el total del carrito
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return { items, total, addItem, removeItem, updateItemQuantity, clearCart };
}

export default useCart;
