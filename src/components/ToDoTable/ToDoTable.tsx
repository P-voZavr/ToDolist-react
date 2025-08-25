import "./style.css";
import ToDoObj from "../TodoObj/ToDoObj";
import { ToDo } from "../../types/ToDo";

type props = {
  ToDolst: ToDo[];
  ToDolstChange: React.Dispatch<React.SetStateAction<ToDo[]>>;
  page: number;
  ToDovalue: string;
  isSearch: boolean;
};
function ToDoTable({
  ToDolst,
  ToDolstChange,
  page,
  ToDovalue,
  isSearch,
}: props) {
  const startIndex = page * 5;
  const endIndex = startIndex + 5;

  const searchlst = ToDolst.map((val, index) => {
    if (val.text.includes(ToDovalue.trim()))
      return (
        <ToDoObj
          ToDolstChange={ToDolstChange}
          ToDolst={ToDolst}
          text={val.text}
          checkboxvalue={val.checkboxvalue}
          i={index}
          key={index + val.text}
        />
      );
    else return null;
  })
    .reverse()
    .filter(Boolean);

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
      {isSearch
        ? searchlst.length > 5
          ? searchlst.slice(startIndex, endIndex)
          : searchlst
        : ToDolst.length > 5
        ? ToDoObjList.slice(startIndex, endIndex)
        : ToDoObjList}
    </div>
  );
}
export default ToDoTable;
