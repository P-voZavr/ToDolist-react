import "./style.css";
import { useEffect } from "react";
import { ToDo } from "../../types/ToDo";
import SearchButton from "../SearchButton/SearchButton";

type props = {
  ToDolst: ToDo[];
  ToDolstChange: React.Dispatch<React.SetStateAction<ToDo[]>>;
  setpage: React.Dispatch<React.SetStateAction<number>>;
  isdark: boolean;
  isSearch: boolean;
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;

  ToDovalue: string;
  ToDovalueChange: React.Dispatch<React.SetStateAction<string>>;
};
function ToDoAdd({
  ToDolst,
  ToDolstChange,
  setpage,
  isdark,
  isSearch,
  setIsSearch,
  ToDovalue,
  ToDovalueChange,
}: props) {
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

  useEffect(() => {
    ToDovalueChange("");
    setpage(0);
  }, [isSearch]);

  return (
    <>
      <div className="ToDoAdd">
        <div className="ToDoAddPSearchButton">
          <p className="ToDoAddP">New ToDo:</p>
          <SearchButton
            isdark={isdark}
            isSearch={isSearch}
            setIsSearch={setIsSearch}
          />
        </div>
        <div className="InputDiv">
          <input
            placeholder={
              !isSearch
                ? "Введите текст"
                : "Чтобы выйти из режима поиска повторно нажмите на кнопку Search"
            }
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
