import { ToDo } from "../types/ToDo";
import ENDPOINTS from "./endpoints";
import http from "./http";

type TODO = {
  text: string;
  checkboxvalue: boolean;
};

async function getToDolst() {
  const res = await http.get<ToDo[]>(ENDPOINTS.TODOLST);
  return res.data;
}

async function createToDo(toDo: TODO) {
  const res = await http.post<ToDo>(ENDPOINTS.TODOADD, toDo);
  return res.data;
}

async function updateToDo(toDo: TODO, id: string) {
  await http.put<ToDo>(ENDPOINTS.TODOUPDATE + `/${id}`, toDo);
}

async function deleteToDo(id: string) {
  await http.delete<ToDo>(ENDPOINTS.TODODELETE + `/${id}`);
}

async function searchToDo(target: string) {
  const res = await http.get<ToDo[]>(ENDPOINTS.TODOLST + `/?search=${target}`);
  return res.data;
}

export { getToDolst, createToDo, updateToDo, deleteToDo, searchToDo };
