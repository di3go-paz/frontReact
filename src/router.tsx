import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import InventarioPage from "./pages/inventario";

export function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página principal (puedes cambiarla si quieres otra página inicial) */}
        <Route path="/" element={<Navigate to="/inventario" />} />
        <Route path="/inventario" element={<InventarioPage />} />
      </Routes>
    </BrowserRouter>
  );
}
