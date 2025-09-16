import { create } from "zustand";

type themeStore = {
  isdark: boolean;
  setIsDark: () => void;
};

export const useThemeStore = create<themeStore>((set) => ({
  isdark: localStorage.getItem("theme") === "dark",
  setIsDark: () => set((state) => ({ isdark: !state.isdark })),
}));
