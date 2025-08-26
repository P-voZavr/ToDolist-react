import "./style.css";
import ToDoObj from "../TodoObj/ToDoObj";

import { useToDoStore } from "../../store/useToDoStore";
import { usePageStore } from "../../store/usePageStore";
import { useSearchStore } from "../../store/useSearchStore";

function ToDoTable() {
  const { ToDovalue, ToDolst } = useToDoStore();
  const { page } = usePageStore();
  const { isSearch } = useSearchStore();

  const startIndex = page * 5;
  const endIndex = startIndex + 5;

  const searchlst = ToDolst.map((val, index) => {
    if (val.text.includes(ToDovalue.trim()))
      return (
        <ToDoObj
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
