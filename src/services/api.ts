import type { Product } from "../interfaces/Product";

// Datos de productos simulados, ahora tipados con la interfaz Product
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Sony WH-1000XM5',
    price: 11004.00,
    category: 'over-ear',
    connectivity: 'wireless',
    brand: 'Sony',
    imageUrl: '/earphones/WH-1000XM5.png',
    description: 'Audífonos con cancelación de ruido líder en la industria, diseño ligero y excelente calidad de llamada. Ideales para viajes y uso diario.',
    features: ['Cancelación de ruido', 'Audio de alta resolución', 'Hasta 30h de batería', 'Carga rápida'],
  },
  {
    id: '2',
    name: 'Apple AirPods Pro 2',
    price: 5950.50,
    category: 'in-ear',
    connectivity: 'wireless',
    brand: 'Apple',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803975001',
    description: 'Rediseñados con hasta 2 veces más Cancelación Activa de Ruido y Transparencia Adaptativa. Experiencia de audio inmersiva con audio espacial.',
    features: ['Cancelación de ruido activa', 'Modo de transparencia', 'Audio espacial personalizado', 'Resistencia al sudor y al agua'],
  },
  {
    id: '3',
    name: 'Bose QuietComfort 45',
    price: 5206.50,
    category: 'over-ear',
    connectivity: 'wireless',
    brand: 'Bose',
    imageUrl: '/earphones/QuietComfort.png',
    description: 'Un equilibrio perfecto entre silencio, comodidad y sonido. Disfruta de tu música sin interrupciones con la aclamada cancelación de ruido de Bose.',
    features: ['Cancelación de ruido', 'Modo Aware', 'Hasta 24h de batería', 'Comodidad superior'],
  },
  {
    id: '4',
    name: 'Sennheiser HD 660S2',
    price: 10452.00,
    category: 'over-ear',
    connectivity: 'wired',
    brand: 'Sennheiser',
    imageUrl: '/earphones/HD660S2.png',
    description: 'Audífonos de gama alta con diseño abierto para sesiones de escucha analíticas. Ofrecen una calidad de sonido excepcional y una experiencia inmersiva.',
    features: ['Diseño abierto', 'Sonido de alta fidelidad', 'Cable desmontable', 'Comodidad para largas sesiones'],
  },
  {
    id: '5',
    name: 'Jabra Elite 7 Active',
    price: 1664.00,
    category: 'in-ear',
    connectivity: 'wireless',
    brand: 'Jabra',
    imageUrl: '/earphones/JabraElite7Active.png',
    description: 'Diseñados para un ajuste seguro y activo con Jabra ShakeGrip. Perfectos para deportes y entrenamientos intensos.',
    features: ['Ajuste seguro ShakeGrip', 'Cancelación de ruido activa', 'Resistencia al agua y al sudor (IP57)', 'Hasta 8h de batería'],
  },
  {
    id: '6',
    name: 'Audio-Technica ATH-M50x',
    price: 4098.00,
    category: 'over-ear',
    connectivity: 'wired',
    brand: 'Audio-Technica',
    imageUrl: '/earphones/ATH-M50x.png',
    description: 'Rendimiento sónico aclamado por la crítica, elogiado por los principales ingenieros de audio y revisores profesionales. Un estándar de la industria.',
    features: ['Monitoreo de estudio', 'Graves profundos', 'Diseño plegable', 'Cables desmontables'],
  },
  {
    id: '7',
    name: 'Beats Studio Buds +',
    price: 169.99,
    category: 'in-ear',
    connectivity: 'wireless',
    brand: 'Beats',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT2N3?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1684347710955',
    description: 'Diseñados para ofrecer un sonido potente y equilibrado con cancelación activa de ruido y modo de transparencia.',
    features: ['Cancelación de ruido activa', 'Modo de transparencia', 'Hasta 36h de batería con estuche', 'Compatibilidad con Apple y Android'],
  },
  {
    id: '8',
    name: 'HyperX Cloud II',
    price: 2924.69,
    category: 'over-ear',
    connectivity: 'wired',
    brand: 'HyperX',
    imageUrl: '/earphones/HyperXCloudII.png',
    description: 'Audífonos gaming con sonido envolvente 7.1 virtual, micrófono con cancelación de ruido y gran comodidad para largas sesiones de juego.',
    features: ['Sonido envolvente 7.1', 'Micrófono desmontable con cancelación de ruido', 'Comodidad premium', 'Durabilidad'],
  },
  {
    id: '9',
    name: 'Samsung Galaxy Buds2 Pro',
    price: 3222.00,
    category: 'in-ear',
    connectivity: 'wireless',
    brand: 'Samsung',
    imageUrl: '/earphones/GalaxyBuds.png',
    description: 'Audio Hi-Fi de 24 bits, cancelación activa de ruido inteligente y un diseño compacto para un ajuste cómodo.',
    features: ['Audio Hi-Fi de 24 bits', 'Cancelación de ruido inteligente', 'Audio 360', 'Resistencia al agua IPX7'],
  },
  {
    id: '10',
    name: 'Marshall Major IV',
    price: 1799.00,
    category: 'over-ear',
    connectivity: 'wireless',
    brand: 'Marshall',
    imageUrl: '/earphones/MarshallMajorIV.png',
    description: 'Más de 80 horas de reproducción inalámbrica, carga inalámbrica y un diseño plegable para llevarlos a cualquier parte.',
    features: ['Más de 80h de batería', 'Carga inalámbrica', 'Diseño plegable', 'Sonido característico de Marshall'],
  },
];

/**
 * Simula la obtención de productos desde una API con un retardo.
 * @param {string} [category='all'] - Categoría para filtrar los productos.
 * @returns {Promise<Array<Product>>} Una promesa que resuelve con un array de productos.
 */
export const fetchProducts = (category: string = 'all'): Promise<Product[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (category === 'all') {
        resolve(mockProducts);
      } else {
        const filteredProducts = mockProducts.filter(product => product.category === category);
        resolve(filteredProducts);
      }
    }, 700); // Simula un retardo de red
  });
};

/**
 * Simula la obtención de un producto por su ID desde una API con un retardo.
 * @param {string} id - El ID del producto a buscar.
 * @returns {Promise<Product | undefined>} Una promesa que resuelve con el objeto del producto o undefined si no se encuentra.
 */
export const fetchProductById = (id: string): Promise<Product | undefined> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const product = mockProducts.find(p => p.id === id);
      resolve(product);
    }, 500);
  });
};
