import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/home";
import InventarioPage from "./pages/inventario";
import LoginPage from "./pages/login";
import ProductoDetallePage from "./pages/productoDetalle";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./auth";

export function RouterApp() {
  const { token } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
         <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/inventario"
          element={
            <ProtectedRoute>
              <InventarioPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/inventario/:id"
          element={
            <ProtectedRoute>
              <ProductoDetallePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
