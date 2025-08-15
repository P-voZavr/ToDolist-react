import "./style.css";
import ToDoObj from "../TodoObj/ToDoObj";
import { ToDo } from "../../types/ToDo";

type props = {
  ToDolst: ToDo[];
  ToDolstChange: React.Dispatch<React.SetStateAction<ToDo[]>>;
  page: number;
};
function ToDoTable({ ToDolst, ToDolstChange, page }: props) {
  const startIndex = page * 5;
  const endIndex = startIndex + 5;

  const ToDoObjList = ToDolst.map((val, index) => (
    <ToDoObj
      ToDolstChange={ToDolstChange}
      ToDolst={ToDolst}
      text={val.text}
      checkboxvalue={val.checkboxvalue}
      i={index}
      key={index + val.text}
    />
  )).reverse();

  return (
    <div className="ToDoTable">
      {ToDolst.length > 5
        ? ToDoObjList.slice(startIndex, endIndex)
        : ToDoObjList}
    </div>
  );
}
export default ToDoTable;
