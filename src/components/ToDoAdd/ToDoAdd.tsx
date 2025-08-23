import "./style.css";
import { useState } from "react";
import { ToDo } from "../../types/ToDo";
import SearchButton from "../SearchButton/SearchButton";

type props = {
  ToDolst: ToDo[];
  ToDolstChange: React.Dispatch<React.SetStateAction<ToDo[]>>;
  setpage: React.Dispatch<React.SetStateAction<number>>;
  isdark: boolean;
};
function ToDoAdd({ ToDolst, ToDolstChange, setpage, isdark }: props) {
  const [ToDovalue, ToDovalueChange] = useState<string>("");

  function AddToDo() {
    if (ToDovalue.trim() === "") {
      ToDovalueChange("");
      return;
    }
    setpage(0);
    ToDolstChange([...ToDolst, { text: ToDovalue, checkboxvalue: false }]);
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
        <div className="ToDoAddPSearchButton">
          <p className="ToDoAddP">New ToDo:</p>
          <SearchButton isdark={isdark} />
        </div>
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
