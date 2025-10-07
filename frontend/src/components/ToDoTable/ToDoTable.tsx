import "./style.css";
import ToDoObj from "../TodoObj/ToDoObj";

import { useToDoStore } from "../../store/useToDoStore";
import { usePageStore } from "../../store/usePageStore";

function ToDoTable() {
  const { ToDolst } = useToDoStore();
  const { page } = usePageStore();

  const startIndex = page * 5;
  const endIndex = startIndex + 5;

  const ToDoObjList = ToDolst.map((val, index) => (
    <ToDoObj
      text={val.text}
      checkboxvalue={val.checkboxvalue}
      key={index + val.text}
      id={val._id}
    />
  )).reverse();

  return (
    <>
      {ToDolst.length <= 5 ? (
        <div className="ToDoTable">{ToDoObjList}</div>
      ) : (
        <div className="ToDoTable">
          {ToDoObjList.slice(startIndex, endIndex)}
        </div>
      )}
    </>
  );
}
export default ToDoTable;
