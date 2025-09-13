
interface Props {
  filtroSeleccionado: "nombre" | "tipo" | "departamento" | "proveedor"
  onFiltroSeleccionado: (valor: "nombre" | "tipo" | "departamento" | "proveedor") => void
  onBuscar: (valor: string) => void
}

export const FiltroBusqueda = ({ filtroSeleccionado, onFiltroSeleccionado, onBuscar }: Props) => {
  return (
  <div className="space-y-4 p-4 sidebar-dark rounded-lg">
      <h3 className="text-white font-medium text-sm mb-4">Filtros de Búsqueda</h3>

      <div className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-2">Buscar por</label>
          <select
            value={filtroSeleccionado}
            onChange={(e) => {
              const newFilter = e.target.value as any
              onFiltroSeleccionado(newFilter)
              const currentSearchTerm =
                (document.querySelector('input[placeholder="Buscar..."]') as HTMLInputElement)?.value || ""
              onBuscar(currentSearchTerm)
            }}
            className="input-glass w-full text-sm"
          >
            <option value="nombre">Nombre</option>
            <option value="tipo">Tipo</option>
            <option value="departamento">Departamento</option>
            <option value="proveedor">Proveedor</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-300 mb-2">Término de búsqueda</label>
          <input
            type="text"
            placeholder="Buscar..."
            onChange={(e) => onBuscar(e.target.value)}
            className="input-glass w-full text-sm"
          />
        </div>
      </div>
    </div>
  )
}
