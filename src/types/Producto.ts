// types/Producto.ts
export interface Producto {
  id: number;
  codigo_producto: string;
  nombre_producto: string;
  unidad_medida: { unidad_medida: string };
  ultimo_costo: number;
  precio_venta: number;
  estado: boolean;
  nombre_departamento: { nombre_departamento: string };
  nombre_tipo: { nombre_tipo: string };
  proveedores_info: {
    precio_compra: number;
    fecha_ultima_compra: string;
    proveedor: {
      rut_proveedor: string;
      nombre_comercial: string;
      razon_social: string;
    };
  }[];
}
