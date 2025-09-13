import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/authContext"
import type { ReactNode } from "react"

interface PrivateRouteProps {
  children: ReactNode
  roles?: string[] // roles permitidos (ej: ["admin"])
}

export function PrivateRoute({ children, roles }: PrivateRouteProps) {
  const { user } = useAuth()

  // 1. Si no hay usuario → enviar al login
  if (!user) {
    return <Navigate to="/login" replace />
  }

  // 2. Si hay roles definidos y el rol del user no está incluido → enviar a inicio
  if (roles && !roles.includes(user.rol)) {
    return <Navigate to="/" replace />
  }

  // 3. Si pasa las validaciones → renderizamos el children (el dashboard o la página protegida)
  return <>{children}</>
}

