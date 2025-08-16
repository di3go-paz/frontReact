import { Producto } from "../types/Producto";
import { useNavigate } from "react-router-dom";

interface Props {
  productos: Producto[];
}

export const InventarioTable = ({ productos }: Props) => {
  const navigate = useNavigate();
  const sorted = [...productos].sort((a, b) =>
    a.nombre_producto.localeCompare(b.nombre_producto)
  );

  const handleClick = (id: number) => {
    navigate(`/inventario/${id}`);
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow bg-white">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-100 text-gray-600 uppercase">
          <tr>
            <th className="px-4 py-3">Código</th>
            <th className="px-4 py-3">Nombre</th>
            <th className="px-4 py-3">Unidad</th>
            <th className="px-4 py-3">Costo</th>
            <th className="px-4 py-3">Precio</th>
            <th className="px-4 py-3">Estado</th>
            <th className="px-4 py-3">Proveedores</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {sorted.map((producto) => (
            <tr
              key={producto.id}
              onClick={() => handleClick(producto.id)}
              className="border-b border-gray-700 hover:bg-gray-700 cursor-pointer"
            >
              <td className="px-4 py-3">{producto.codigo_producto}</td>
              <td className="px-4 py-3">{producto.nombre_producto}</td>
              <td className="px-4 py-3">{producto.unidad_medida.unidad_medida}</td>
              <td className="px-4 py-3">${producto.ultimo_costo}</td>
              <td className="px-4 py-3">${producto.precio_venta}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    producto.estado
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {producto.estado ? "Activo" : "Inactivo"}
                </span>
              </td>
              <td className="px-4 py-3 space-y-1">
                {producto.proveedores_info.map((info, index) => (
                  <div key={index}>
                    <strong>{
                      info.proveedor.nombre_comercial || info.proveedor.razon_social
                    }</strong>
                    ${info.precio_compra} –
                    {new Date(info.fecha_ultima_compra).toLocaleDateString()}
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
