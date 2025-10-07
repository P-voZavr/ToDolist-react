import { create } from "zustand";

type LoginStore = {
  isAuth: boolean;

  setIsAuth: (password: boolean) => void;
};

export const useAuthStore = create<LoginStore>((set) => ({
  isAuth: true,

  setIsAuth: (auth: boolean) => set({ isAuth: auth }),
}));
