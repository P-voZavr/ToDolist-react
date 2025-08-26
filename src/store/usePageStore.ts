import { create } from "zustand";

type pageStore = {
  page: number;
  setpage: (NewPage: number) => void;
};

export const usePageStore = create<pageStore>((set) => ({
  page: 0,
  setpage: (NewPage) => {
    set({ page: NewPage });
  },
}));
