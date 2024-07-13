import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  isAdmin: false,
  token: null,
  isInitializing: true,
  login: (user, token, isAdmin) => {
    localStorage.setItem("token", token);
    localStorage.setItem("isAdmin", isAdmin);
    localStorage.setItem("user", JSON.stringify(user));
    set({ isAuthenticated: true, user, isAdmin, token, isInitializing: false });
  },
  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    set({
      user: null,
      isAuthenticated: false,
      isAdmin: false,
      token: null,
      isInitializing: false,
    });
  },
  initializeAuth: () => {
    const token = localStorage.getItem("token");
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    const user = JSON.parse(localStorage.getItem("user"));
    if (token) {
      set({
        isAuthenticated: true,
        isAdmin,
        user,
        token,
        isInitializing: false,
      });
    } else {
      set({ isInitializing: false });
    }
  },
}));

export default useAuthStore;
