import "./style.css";
import { useEffect } from "react";
import SearchButton from "../SearchButton/SearchButton";
import { useToDoStore } from "../../store/useToDoStore";
import { usePageStore } from "../../store/usePageStore";
import { useSearchStore } from "../../store/useSearchStore";

function ToDoAdd() {
  const { ToDolst, ToDolstChange, ToDovalue, ToDovalueChange } = useToDoStore();

  const { setpage } = usePageStore();

  const { isSearch } = useSearchStore();

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
          <SearchButton />
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
            onKeyDown={!isSearch ? handleKeyDown : undefined}
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
