import { useParams } from "react-router-dom";
import MainLayout from "../components/MainLayouts";

export default function ProductoDetallePage() {
  const { id } = useParams();

  return (
    <MainLayout>
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-bold">Detalle de Producto</h1>
        <p>Producto ID: {id}</p>
      </div>
    </MainLayout>
  );
}