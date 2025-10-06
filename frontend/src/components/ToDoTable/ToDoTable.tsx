import "./style.css";
import ToDoObj from "../TodoObj/ToDoObj";
import { getToDolst } from "../../api/todo.api";

import { useToDoStore } from "../../store/useToDoStore";
import { usePageStore } from "../../store/usePageStore";

import { useEffect } from "react";

function ToDoTable() {
  const { ToDolst, ToDolstChange } = useToDoStore();
  const { page } = usePageStore();

  const startIndex = page * 5;
  const endIndex = startIndex + 5;

  useEffect(() => {
    const fetchData = async () => {
      const todos = await getToDolst();
      ToDolstChange(todos);
    };
    fetchData();
  }, []);

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
