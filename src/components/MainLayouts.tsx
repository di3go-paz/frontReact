import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
      <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-white border-b border-gray-200 p-4">
        <h1 className="text-xl font-semibold text-gray-700">Sistema de Inventario</h1>
      </header>
      <main className="p-4 max-w-5xl mx-auto">{children}</main>
    </div>
  );
}