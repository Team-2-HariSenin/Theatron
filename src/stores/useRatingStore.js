import { create } from "zustand";

const useRatingStore = create((set) => ({
  active: false,
  setActive: (value) => set({ active: value }),
  idMovie: null,
  setIdMovie: (value) => set({ idMovie: value }),
  titleMovie: null,
  setTitleMovie: (value) => set({ titleMovie: value }),
}));

export default useRatingStore;
