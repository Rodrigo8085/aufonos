import type { CategoryFilterProps } from "../interfaces/CategoryFilterProps";

/**
 * Componente para filtrar productos por categoría, utilizando metodología BEM para los estilos.
 * @param {object} props - Las propiedades del componente.
 * @param {function} props.onSelectCategory - Función que se llama al seleccionar una categoría.
 * @param {string} props.currentCategory - La categoría actualmente seleccionada.
 */
function CategoryFilter({ onSelectCategory, currentCategory }: CategoryFilterProps) {
  const categories = [
    { value: 'all', label: 'Todas' },
    { value: 'over-ear', label: 'Over-Ear' },
    { value: 'in-ear', label: 'In-Ear' },
    { value: 'wireless', label: 'Inalámbricos' },
    { value: 'wired', label: 'Con Cable' },
  ];

  return (
    <div className="category-filter mb-4 d-flex justify-content-center"> {/* Bloque BEM */}
      <div className="input-group w-auto">
        <label htmlFor="categorySelect" className="category-filter__label input-group-text bg-primary text-white border-primary"> {/* Elemento BEM */}
          Filtrar por Categoría:
        </label>
        <select
          id="categorySelect"
          className="category-filter__select form-select form-select-lg rounded-end" // <-- ¡Comentario eliminado de aquí!
          value={currentCategory}
          onChange={(e) => onSelectCategory(e.target.value)}
          aria-label="Filtrar productos por categoría"
        >
          {categories.map(category => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CategoryFilter;
