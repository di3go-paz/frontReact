import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/home";
import InventarioPage from "./pages/inventario";

export function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página principal (puedes cambiarla si quieres otra página inicial) */}
        <Route path="/" element={<HomePage />} />
        <Route path="/inventario" element={<InventarioPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
