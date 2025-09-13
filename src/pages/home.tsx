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
    <div className="min-h-screen bg-dark-gradient text-textMain flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-2">Bienvenido, {user.username} 👋</h1>
      <p className="text-textSecondary mb-8">{user.rol}</p>

      <nav className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
        {availableMenus.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="card-glass px-6 py-4 text-center hover:bg-cardGlass/80 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button onClick={logout} className="mt-10 btn-modern">
        Cerrar sesión
      </button>
    </div>
  )
}

