import "./style.css";
import ToDoObj from "../TodoObj/ToDoObj";
import PointerButtons from "../PointerButtons/PointerButtons";
import { useState } from "react";
type props = {
  ToDolst: string[];
  ToDolstChange: React.Dispatch<React.SetStateAction<string[]>>;
};
function ToDoTable({ ToDolst, ToDolstChange }: props) {
  const [page, setpage] = useState(0);

  const totalpages = Math.ceil(ToDolst.length / 5);

  return (
    <div className="ToDoTable">
      {ToDolst.length > 5 ? (
        <>
          {[...ToDolst]
            .slice(ToDolst.length - 5, ToDolst.length)
            .map((val, index) => (
              <ToDoObj
                ToDolstChange={ToDolstChange}
                ToDolst={ToDolst}
                text={val}
                i={index}
                key={index + val}
              />
            ))}
          <PointerButtons />
        </>
      ) : (
        ToDolst.map((val, index) => (
          <ToDoObj
            ToDolstChange={ToDolstChange}
            ToDolst={ToDolst}
            text={val}
            i={index}
            key={index + val}
          />
        ))
      )}
    </div>
  );
}
export default ToDoTable;
