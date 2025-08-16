import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
      <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 text-purple-400 p-4 shadow">
        <h1 className="text-xl font-semibold">Sistema de Inventario</h1>
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
}