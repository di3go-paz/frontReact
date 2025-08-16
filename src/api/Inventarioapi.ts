import { Producto } from '../types/Producto';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/inventory';
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

async function apiFetch<T>(endpoint: string, errorMessage: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: API_TOKEN ? { Authorization: `Token ${API_TOKEN}` } : undefined,
  });
  if (!response.ok) {
    throw new Error(`${errorMessage}: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Obtiene la lista de productos del backend
 */
export function fetchProductos(): Promise<Producto[]> {
  return apiFetch<Producto[]>('/productos/', 'Error al obtener productos');
}

/**
 * Obtiene los tipos de producto para el filtro
 */
export function fetchTiposProductos(): Promise<{ id: number; nombre_tipo: string }[]> {
  return apiFetch<{ id: number; nombre_tipo: string }[]>('/tipos_productos/', 'Error al obtener tipos');
}

/**
 * Obtiene los departamentos para el filtro
 */
export function fetchDepartamentos(): Promise<{ id: number; nombre_departamento: string }[]> {
  return apiFetch<{ id: number; nombre_departamento: string }[]>('/departamentos/', 'Error al obtener departamentos');
}

/**
 * Obtiene la lista de proveedores
 */
export function fetchProveedores(): Promise<{ rut_proveedor: string; nombre_comercial: string }[]> {
  return apiFetch<{ rut_proveedor: string; nombre_comercial: string }[]>('/proveedores/', 'Error al obtener proveedores');
}