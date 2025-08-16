import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/');
    } catch (err) {
      setError('Credenciales inválidas');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800/90 backdrop-blur p-8 rounded-lg shadow-xl w-full max-w-sm space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-purple-400">Iniciar sesión</h1>
        {error && <p className="text-red-400 text-center">{error}</p>}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuario"
          className="w-full p-2 bg-gray-700 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          className="w-full p-2 bg-gray-700 rounded"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white p-2 rounded"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}