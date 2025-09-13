// src/api/Inventarioapi.ts
import type { Producto } from "../types/Producto"

const BASE_URL =
  process.env.REACT_APP_API_INVENTORY?.replace(/\/$/, "") ||
  "http://djangoerp.duckdns.org/api/inventory"

// Preferir: token de login (localStorage). Si no existe, usa REACT_APP_API_TOKEN (token fijo solo para pruebas).
function getAuthToken() {
  const userToken = localStorage.getItem("token")
  if (userToken) return userToken
  const envToken = process.env.REACT_APP_API_TOKEN
  return envToken || ""
}

async function apiFetch<T>(endpoint: string, errorMessage: string): Promise<T> {
  const token = getAuthToken()
  const headers: Record<string, string> = {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
  if (token) {
    // Si usas DRF TokenAuthentication:
    headers["Authorization"] = `Token ${token}`
    // Si usas JWT (SimpleJWT), cámbialo por:
    // headers["Authorization"] = `Bearer ${token}`
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers,
    // mode: "cors", // fetch ya usa CORS por defecto cuando origen ≠ destino
    credentials: "omit", // no enviamos cookies; usamos token
  })

  if (res.status === 401) {
    throw new Error(`${errorMessage}: No autorizado. Verifica el token de API.`)
  }
  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    const detail = (data as any).detail || res.statusText
    throw new Error(`${errorMessage}: ${detail}`)
  }
  return res.json()
}

/** Productos */
export function fetchProductos(): Promise<Producto[]> {
  return apiFetch<Producto[]>("/productos/", "Error al obtener productos")
}

/** Tipos de producto (¡ojo con el guion!) */
export function fetchTiposProductos(): Promise<{ id: number; nombre_tipo: string }[]> {
  return apiFetch<{ id: number; nombre_tipo: string }[]>("/tipos-productos/", "Error al obtener tipos")
}

/** Departamentos */
export function fetchDepartamentos(): Promise<{ id: number; nombre_departamento: string }[]> {
  return apiFetch<{ id: number; nombre_departamento: string }[]>("/departamentos/", "Error al obtener departamentos")
}

/** Proveedores */
export function fetchProveedores(): Promise<{ rut_proveedor: string; nombre_comercial: string }[]> {
  return apiFetch<{ rut_proveedor: string; nombre_comercial: string }[]>("/proveedores/", "Error al obtener proveedores")
}
