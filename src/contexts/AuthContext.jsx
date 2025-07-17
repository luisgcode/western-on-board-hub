import React, { createContext, useContext } from "react";

import { useState, useEffect } from "react";
import { onAuthChange } from "../firebase.js";

// Creating the context
const AuthContext = createContext();

// This is the hook to go and check
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  // Estados que necesitamos
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Al iniciar, escuchar cambios de Firebase
  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      setUser(user); // Guardar el usuario
      setLoading(false); // Ya no estamos cargando
    });

    return unsubscribe; // Limpiar el listener
  }, []);

  // La información que vamos a "proveer"
  const value = {
    user,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
