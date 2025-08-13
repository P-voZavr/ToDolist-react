import "./style.css";
import { useState } from "react";

type props = {
  ToDolst: string[];
  ToDolstChange: React.Dispatch<React.SetStateAction<string[]>>;
};
function ToDoAdd({ ToDolst, ToDolstChange }: props) {
  const [ToDovalue, ToDovalueChange] = useState<string>("");

  function AddToDo() {
    if (ToDovalue.trim() === "") {
      ToDovalueChange("");
      return;
    }
    ToDolstChange([...ToDolst, ToDovalue]);
    ToDovalueChange("");
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      AddToDo();
    }
  };

  return (
    <>
      <div className="ToDoAdd">
        <p className="ToDoAddP">New ToDo:</p>
        <div className="InputDiv">
          <input
            value={ToDovalue}
            className="TextInput"
            onKeyDown={handleKeyDown}
            onChange={(event) => {
              ToDovalueChange(event.target.value);
            }}
          ></input>
          <button className="AddButton" onClick={AddToDo}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default ToDoAdd;
