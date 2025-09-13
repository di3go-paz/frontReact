import { useEffect, useState } from "react";
import { Producto } from "../types/Producto";
import { InventarioTable } from "../components/inventarioTable";
import { FiltroBusqueda } from "../components/FiltroBusqueda";
import MainLayout from "../components/MainLayouts";
import { fetchProductos } from "../api/Inventarioapi";

export default function InventarioPage() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [filtroSeleccionado, setFiltroSeleccionado] = useState<"nombre" | "tipo" | "departamento" | "proveedor">("nombre");

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const productosRes = await fetchProductos();
        setProductos(productosRes);
        setProductosFiltrados(productosRes);
      } catch (error) {
        console.error("Error cargando datos", error);
              }
    };

    cargarDatos();
  }, []);

  useEffect(() => {
    const textoBusqueda = busqueda.toLowerCase();

    const filtrados = productos.filter((p) => {
      if (!busqueda) return true;

      switch (filtroSeleccionado) {
        case "nombre":
          return p.nombre_producto?.toLowerCase().includes(textoBusqueda);
        case "tipo":
          return p.nombre_tipo?.nombre_tipo?.toLowerCase().includes(textoBusqueda);
        case "departamento":
          return p.nombre_departamento?.nombre_departamento?.toLowerCase().includes(textoBusqueda);
        case "proveedor":
                    return p.proveedores_info.some(
            (info) =>
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-dark-gradient py-10">
        <h1 className="text-3xl font-bold mb-8 text-textMain tracking-tight text-center">Inventario</h1>
        <div className="w-full max-w-4xl flex flex-col items-center gap-8">
          <FiltroBusqueda
            filtroSeleccionado={filtroSeleccionado}
            onFiltroSeleccionado={setFiltroSeleccionado}
            onBuscar={setBusqueda}
          />
          <InventarioTable productos={productosFiltrados} />
        </div>
      </div>
    </MainLayout>
  );
}
