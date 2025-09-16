import { useToDoStore } from "../store/useToDoStore";

const ToDolst = useToDoStore.getState().ToDolst;
const ToDovalue = useToDoStore.getState().ToDovalue;

let searchlstLength = 0;
if (ToDovalue.trim() !== "") {
  searchlstLength = ToDolst.filter((val) =>
    val.text.includes(ToDovalue.trim())
  ).length;
} else {
  searchlstLength = ToDolst.length;
}
export default searchlstLength;
