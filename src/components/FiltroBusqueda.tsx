interface Props {
  filtroSeleccionado: "nombre" | "tipo" | "departamento" | "proveedor";
  onFiltroSeleccionado: (valor: "nombre" | "tipo" | "departamento" | "proveedor") => void;
  onBuscar: (valor: string) => void;
}

export const FiltroBusqueda = ({ filtroSeleccionado, onFiltroSeleccionado, onBuscar }: Props) => {
  return (
    <div className="flex gap-2 mb-4">
      <select
        value={filtroSeleccionado}
        onChange={(e) => onFiltroSeleccionado(e.target.value as any)}
        className="border border-gray-700 bg-gray-800 text-gray-100 p-2 rounded"
      >
        <option value="nombre">Nombre</option>
        <option value="tipo">Tipo</option>
        <option value="departamento">Departamento</option>
        <option value="proveedor">Proveedor</option>
      </select>

      <input
        type="text"
        placeholder="Buscar..."
        onChange={(e) => onBuscar(e.target.value)}
        className="border border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-400 p-2 rounded flex-1"
      />
    </div>
  );
};
