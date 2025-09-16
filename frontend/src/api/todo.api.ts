import { ToDo } from "../types/ToDo";
import ENDPOINTS from "./endpoints";
import http from "./http";

type TODO = {
  text: string;
  checkboxvalue: boolean;
};

async function getToDolst() {
  const res = await http.get<ToDo[]>(ENDPOINTS.TODO);
  return res.data;
}

async function createToDo(toDo: TODO) {
  await http.post<ToDo>(ENDPOINTS.TODO, toDo);
}

async function updateToDo(toDo: TODO, id: string) {
  await http.put<ToDo>(ENDPOINTS.TODO + `/${id}`, toDo);
}

async function deleteToDo(id: string) {
  await http.delete<ToDo>(ENDPOINTS.TODO + `/${id}`);
}

export { getToDolst, createToDo, updateToDo, deleteToDo };
