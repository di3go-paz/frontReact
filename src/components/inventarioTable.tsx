import { Producto } from "../types/Producto";

interface Props {
  productos: Producto[];
}

export const InventarioTable = ({ productos }: Props) => {
  return (
    <div className="overflow-x-auto rounded-xl shadow-md p-4 bg-white">
      <table className="min-w-full text-sm text-left border-collapse">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2">Código</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Unidad</th>
            <th className="px-4 py-2">Costo</th>
            <th className="px-4 py-2">Precio</th>
            <th className="px-4 py-2">Estado</th>
            <th className="px-4 py-2">Proveedores</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{producto.codigo_producto}</td>
              <td className="px-4 py-2">{producto.nombre_producto}</td>
              <td className="px-4 py-2">{producto.unidad_medida.unidad_medida}</td>
              <td className="px-4 py-2">${producto.ultimo_costo}</td>
              <td className="px-4 py-2">${producto.precio_venta}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    producto.estado ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  {producto.estado ? "Activo" : "Inactivo"}
                </span>
              </td>
              <td className="px-4 py-2 space-y-1">
                {producto.proveedores_info.map((info, index) => (
                  <div key={index}>
                    <strong>{info.proveedor.nombre_comercial || info.proveedor.razon_social}</strong>
                    ${info.precio_compra} – {new Date(info.fecha_ultima_compra).toLocaleDateString()}
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
