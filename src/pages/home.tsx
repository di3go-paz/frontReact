import { useAuth } from "../contexts/authContext"

interface MenuItem {
  label: string
  path: string
  roles: string[] // qué roles pueden ver este menú
}

const MENU_ITEMS: MenuItem[] = [
  { label: "📊 Dashboard", path: "/dashboard/admin", roles: ["admin"] },
  { label: "📦 Ingreso de Documentos", path: "/bodega/ingresos", roles: ["admin", "bodeguero"] },
  { label: "📦 Inventario", path: "/inventario", roles: ["admin", "bodeguero"] },
  { label: "🚚 Salidas de Bodega", path: "/bodega/salidas", roles: ["admin", "bodeguero"] },
  { label: "🛒 Ventas", path: "/ventas", roles: ["admin", "vendedor"] },
  { label: "👀 Supervisión", path: "/supervision", roles: ["admin", "supervisor"] },
]

export default function HomePage() {
  const { user, logout } = useAuth()

  if (!user) {
    return <h2>No has iniciado sesión</h2>
  }

  // Filtrar menús según el rol del usuario
  const availableMenus = MENU_ITEMS.filter((item) => item.roles.includes(user.rol))

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Bienvenido, {user.username} 👋</h1>
      <h2 className="text-lg mb-4"><strong>{user.rol}</strong></h2>

      <nav className="grid gap-4">
        {availableMenus.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button
        onClick={logout}
        className="mt-8 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Cerrar sesión
      </button>
    </div>
  )
}
