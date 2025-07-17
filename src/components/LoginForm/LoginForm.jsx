import React, { useState } from "react";
import { signIn } from "../../firebase.js";
import { useAuth } from "../../contexts/AuthContext.jsx";

const LoginForm = () => {
  // 1. Obtener información del usuario desde Context
  const { user, loading: authLoading } = useAuth();

  // 2. Estados locales para el formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading del botón submit
  const [error, setError] = useState("");

  // 3. Función para manejar el login del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activar loading del botón
    setError(""); // Limpiar errores anteriores

    try {
      // Llamar a Firebase para hacer login
      await signIn(email, password);
      // Si llega aquí = login exitoso
      // useAuth detectará automáticamente el cambio
    } catch (error) {
      setError("Wrong credentials");
    } finally {
      setLoading(false); // Desactivar loading del botón
    }
  };

  // 4. PASO 1: Si la app está verificando usuario, mostrar loading
  if (authLoading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center p-4">
        <div className="text-textDark">User authentication...</div>
      </div>
    );
  }

  // 5. PASO 2: Si ya hay usuario logueado, mostrar mensaje
  if (user) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-textDark mb-4 font-bold">¡You are logged!</h2>
        </div>
      </div>
    );
  }

  // 6. PASO 3: Si NO hay usuario, mostrar formulario de login
  return (
    <form onSubmit={handleSubmit} className=" py-10 w-[250px]  md:w-md  ">
      <div className="mb-5">
        <label htmlFor="email" className="block  mb-5">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark focus:border-dark text-textDark"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="password" className="block  mb-5">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark focus:border-dark text-textDark"
          required
        />
      </div>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-dark text-textLight py-3 mt-8 rounded-lg font-medium hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
};

export default LoginForm;
