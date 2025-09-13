import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { loginApi } from "../api/auth"

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const user = await login(username, password);

    if (user.rol === "admin") {
      navigate("/home");
    } else if (user.rol === "bodeguero") {
      navigate("/home");
    } else if (user.rol === "vendedor") {
      navigate("/home");
    } else {
      navigate("/");
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error de autenticación";
    setError(message);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6 bg-white p-8 border rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center text-gray-700">Iniciar sesión</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuario"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white p-2 rounded shadow">
          Ingresar
        </button>
      </form>
    </div>
  );
}
