import { create } from "zustand";

type RegistrationStore = {
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
};

export const useRegistrationStore = create<RegistrationStore>((set) => ({
  username: "",
  password: "",
  setUsername: (username: string) => set({ username: username }),
  setPassword: (password: string) => set({ password: password }),
}));
