import { create } from "zustand";

type searchStore = {
  isSearch: boolean;
  setIsSearch: () => void;
};

export const useSearchStore = create<searchStore>((set) => ({
  isSearch: false,
  setIsSearch: () => set((state) => ({ isSearch: !state.isSearch })),
}));
