import { Producto } from '../types/Producto';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/inventory';

/**
 * Obtiene la lista de productos del backend
 */
export async function fetchProductos(): Promise<Producto[]> {
  const response = await fetch(`${BASE_URL}/productos/`);
  if (!response.ok) {
    throw new Error(`Error al obtener productos: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Obtiene los tipos de producto para el filtro
 */
export async function fetchTiposProductos(): Promise<{ id: number; nombre_tipo: string }[]> {
  const response = await fetch(`${BASE_URL}/tipos_productos/`);
  if (!response.ok) {
    throw new Error(`Error al obtener tipos: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Obtiene los departamentos para el filtro
 */
export async function fetchDepartamentos(): Promise<{ id: number; nombre_departamento: string }[]> {
  const response = await fetch(`${BASE_URL}/departamentos/`);
  if (!response.ok) {
    throw new Error(`Error al obtener departamentos: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Obtiene la lista de proveedores
 */
export async function fetchProveedores(): Promise<{ rut_proveedor: string; nombre_comercial: string }[]> {
  const response = await fetch(`${BASE_URL}/proveedores/`);
  if (!response.ok) {
    throw new Error(`Error al obtener proveedores: ${response.statusText}`);
  }
  return response.json();
}
