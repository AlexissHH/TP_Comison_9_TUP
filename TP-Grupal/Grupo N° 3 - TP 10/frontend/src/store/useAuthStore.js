import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginUsuario } from "../services/loginService";

// Store para manejo del usuario autenticado
// Guarda el objeto `user` en localStorage (clave 'peluqueria_auth')
export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isLoading: false,
      error: null,
      // setUser recibe el objeto user (por ejemplo { id, nombre, rol })
      setUser: (user) => set({ user, error: null }),
      // actualiza parcialmente el user
      updateUser: (patch) => set({ user: { ...(get().user || {}), ...patch } }),
      logout: () => set({ user: null, error: null }),
      // login real: usa loginService
      login: async (usuario, password) => {
        set({ isLoading: true, error: null });
        try {
          const userData = await loginUsuario(usuario, password);
          set({ user: userData, isLoading: false });
          return userData;
        } catch (err) {
          set({ error: err.message || "Error en login", isLoading: false });
          throw err;
        }
      }
    }),
    {
      name: "peluqueria_auth",
      // Opcional: serializar solo lo necesario
      partialize: (state) => ({ user: state.user })
    }
  )
);

export const selectUser = (state) => state.user;
export const selectIsLogged = (state) => Boolean(state.user);

export default useAuthStore;
