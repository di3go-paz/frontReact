
import type { Producto } from "../types/Producto"
import { useState } from "react"

interface Props {
  productos: Producto[]
}

export const InventarioTable = ({ productos }: Props) => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null)

  const sorted = [...productos].sort((a, b) => a.nombre_producto.localeCompare(b.nombre_producto))

  const handleRowClick = (producto: Producto) => {
    setSelectedProduct(producto)
  }

  const handleCheckboxChange = (productId: number) => {
    setSelectedProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const getLastSupplier = (producto: Producto) => {
    if (producto.proveedores_info.length === 0) return "N/A"
    const latest = producto.proveedores_info.reduce((latest, current) =>
      new Date(current.fecha_ultima_compra) > new Date(latest.fecha_ultima_compra) ? current : latest,
    )
    return latest.proveedor.nombre_comercial || latest.proveedor.razon_social
  }

  return (
    <>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-bold text-textMain tracking-tight">
              Productos ({sorted.length})
            </h2>
            {selectedProducts.length > 0 && (
              <span className="text-sm text-textSecondary">
                {selectedProducts.length} seleccionados
              </span>
            )}
          </div>
          <div className="flex gap-3"></div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg card-glass">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-darkBgEnd text-textSecondary">
              <th className="p-3">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedProducts(sorted.map((p) => p.id))
                    } else {
                      setSelectedProducts([])
                    }
                  }}
                  className="input-glass"
                />
              </th>
              <th className="p-3">IMG</th>
              <th className="p-3">ID</th>
              <th className="p-3">NOMBRE ↕</th>
              <th className="p-3">CÓDIGO DE BARRAS</th>
              <th className="p-3">ÚLTIMO PRECIO COMPRA</th>
              <th className="p-3">PRECIO VENTA</th>
              <th className="p-3">DEPARTAMENTO</th>
              <th className="p-3">TIPO PRODUCTO</th>
              <th className="p-3">ÚLTIMO PROVEEDOR</th>
              <th className="p-3">ESTADO</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((producto, index) => (
              <tr
                key={producto.id}
                onClick={() => handleRowClick(producto)}
                className={
                  `cursor-pointer transition-colors ${index % 2 === 0 ? 'bg-darkBgStart' : 'bg-darkBgEnd'} hover:bg-cardGlass`
                }
                style={{ height: "56px" }}
              >
                <td onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(producto.id)}
                    onChange={() => handleCheckboxChange(producto.id)}
                    className="input-glass"
                  />
                </td>
                <td>
                  <div
                    className="w-6 h-6 rounded bg-darkBgEnd flex items-center justify-center text-xs text-textSecondary"
                  >
                    📦
                  </div>
                </td>
                <td className="text-textSecondary">{producto.id}</td>
                <td className="font-bold text-textMain">{producto.nombre_producto}</td>
                <td className="text-textSecondary font-mono">{producto.codigo_producto}</td>
                <td className="text-textMain">${Number(producto.ultimo_costo).toFixed(2)}</td>
                <td className="font-bold text-textMain">${Number(producto.precio_venta).toFixed(2)}</td>
                <td className="text-textSecondary">{producto.nombre_departamento?.nombre_departamento || "N/A"}</td>
                <td className="text-textSecondary">{producto.nombre_tipo?.nombre_tipo || "N/A"}</td>
                <td className="text-textSecondary">{getLastSupplier(producto)}</td>
                <td>
                  <span className="bg-accentGreen text-white px-2 py-1 rounded-full text-xs font-bold shadow-soft">Disponible</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
