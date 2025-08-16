import MenuCard from "../components/MenuCard";
import MainLayout from "../components/MainLayouts";
import { useAuth } from "../auth";

interface MenuItem {
  label: string;
  path: string;
  roles: string[];
}

const MENU_ITEMS: MenuItem[] = [
  { label: "Inventario", path: "/inventario", roles: ["admin", "user"] },
  { label: "Usuarios", path: "/usuarios", roles: ["admin"] },
];

export default function HomePage() {
  // TODO: Reemplazar con rol real del usuario desde autenticación
  const role = "admin";
  const { user } = useAuth();

  const availableMenus = MENU_ITEMS.filter((item) =>
    item.roles.includes(role)
  );

  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-2 text-gray-700">Inicio</h2>
      {user && (
        <p className="mb-4 text-gray-600">Autenticado como {user}</p>
      )}
      <div className="grid gap-4 md:grid-cols-2">
        {availableMenus.map((item) => (
          <MenuCard key={item.path} to={item.path} label={item.label} />
        ))}
      </div>
    </MainLayout>
  );
}