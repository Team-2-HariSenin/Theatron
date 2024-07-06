import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  isAdmin: false,
  token: null,
  login: (token, isAdmin) => {
    localStorage.setItem("token", token);
    localStorage.setItem("isAdmin", isAdmin);
    set({ isAuthenticated: true, isAdmin, token });
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    set({ isAuthenticated: false, isAdmin: false, token: null });
  },
  initializeAuth: () => {
    const token = localStorage.getItem("token");
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    if (token) {
      set({ isAuthenticated: true, isAdmin, token });
    }
  },
}));

export default useAuthStore;
