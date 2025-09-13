import { Routes, Route } from "react-router-dom"
import LoginPage from "./pages/login"
import HomePage from "./pages/home"
import InventarioPage from "./pages/inventario"
import ProductoDetallePage from "./pages/productoDetalle"
import { PrivateRoute } from "./components/PrivateRoute"

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* Página de inicio protegida */}
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />

      {/* Inventario protegido */}
      <Route
        path="/inventario"
        element={
          <PrivateRoute>
            <InventarioPage />
          </PrivateRoute>
        }
      />
      {/* Detalle de producto protegido */}
      <Route
        path="/inventario/:id"
        element={
          <PrivateRoute>
            <ProductoDetallePage />
          </PrivateRoute>
        }
      />

      {/* Por si alguien entra a "/" lo mandamos al login */}
      <Route path="/" element={<LoginPage />} />
    </Routes>
  )
}
