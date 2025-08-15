import { useEffect, useState } from "react";
import { Producto } from "../types/Producto";
import { fetchProductos, fetchDepartamentos, fetchProveedores, fetchTiposProductos } from "../api/Inventarioapi";
import { InventarioTable } from "../components/inventarioTable";
import { FiltroBusqueda } from "../components/FiltroBusqueda";
import MainLayout from "../components/MainLayouts";

export default function InventarioPage() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [filtroSeleccionado, setFiltroSeleccionado] = useState<"nombre" | "tipo" | "departamento" | "proveedor">("nombre");

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const [
          productosRes,
          tiposRes,
          departamentosRes,
          proveedoresRes
        ] = await Promise.all([
          fetchProductos(),
          fetchTiposProductos(),
          fetchDepartamentos(),
          fetchProveedores()
        ]);
        setProductos(productosRes);
        setProductosFiltrados(productosRes); // mostrar todo al inicio
      } catch (error) {
        console.error("Error cargando datos", error);
 export default function InventarioPage() {

    const filtrados = productos.filter(p => {
      if (!busqueda) return true;

      switch (filtroSeleccionado) {
        case "nombre":
          return p.nombre_producto?.toLowerCase().includes(textoBusqueda);
        case "tipo":
          return p.nombre_tipo?.nombre_tipo?.toLowerCase().includes(textoBusqueda);
        case "departamento":
          return p.nombre_departamento?.nombre_departamento?.toLowerCase().includes(textoBusqueda);
        case "proveedor":
          return p.proveedores_info.some(info =>
            info.proveedor?.nombre_comercial?.toLowerCase().includes(textoBusqueda) ||
            info.proveedor?.razon_social?.toLowerCase().includes(textoBusqueda)
          );
        default:
          return true;
      }
    });

    setProductosFiltrados(filtrados);
  }, [busqueda, filtroSeleccionado, productos]);

  return (
    <MainLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold mb-4">Inventario</h1>

    <FiltroBusqueda
      filtroSeleccionado={filtroSeleccionado}
      onFiltroSeleccionado={setFiltroSeleccionado}
      onBuscar={setBusqueda}
    />

    <InventarioTable productos={productosFiltrados} />
      </div>
    </MainLayout>
    );
}
