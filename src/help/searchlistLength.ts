import { useToDoStore } from "../store/useToDoStore";

const { ToDolst, ToDovalue } = useToDoStore();

const searchlstLength = ToDolst.map((val, index) => {
  if (val.text.includes(ToDovalue.trim())) return index;
  else return null;
})
  .reverse()
  .filter(Boolean).length;

export default searchlstLength;
