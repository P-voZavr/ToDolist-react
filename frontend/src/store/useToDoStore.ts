import { create } from "zustand";
import { ToDo } from "../types/ToDo";

type ToDoStore = {
  ToDovalue: string;
  ToDolst: ToDo[];
  ToDolstChange: (NewToDolst: ToDo[]) => void;
  ToDovalueChange: (NewToDovalue: string) => void;
};

export const useToDoStore = create<ToDoStore>((set) => ({
  ToDovalue: "",
  ToDolst: [],
  ToDovalueChange: (NewToDovalue) => {
    set({ ToDovalue: NewToDovalue });
  },
  ToDolstChange: (NewToDolst) => {
    set({ ToDolst: NewToDolst });
  },
}));
