import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  isAdmin: false,
  token: null,
  isInitializing: true,
  login: (token, isAdmin) => {
    localStorage.setItem("token", token);
    localStorage.setItem("isAdmin", isAdmin);
    set({ isAuthenticated: true, isAdmin, token, isInitializing: false });
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    set({
      isAuthenticated: false,
      isAdmin: false,
      token: null,
      isInitializing: false,
    });
  },
  initializeAuth: () => {
    const token = localStorage.getItem("token");
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    if (token) {
      set({ isAuthenticated: true, isAdmin, token, isInitializing: false });
    } else {
      set({ isInitializing: false });
    }
  },
}));

export default useAuthStore;
