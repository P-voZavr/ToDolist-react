import "./style.css";
import { useEffect } from "react";
import SearchButton from "../SearchButton/SearchButton";
import { useToDoStore } from "../../store/useToDoStore";
import { usePageStore } from "../../store/usePageStore";
import { useSearchStore } from "../../store/useSearchStore";
import axios from "axios";

function ToDoAdd() {
  const { ToDolstChange, ToDovalue, ToDovalueChange } = useToDoStore();

  const { setpage } = usePageStore();

  const { isSearch } = useSearchStore();

  async function AddToDo() {
    if (ToDovalue.trim() === "") {
      ToDovalueChange("");
      return;
    }
    setpage(0);
    await axios.post("http://localhost:5000/api/ToDolst", {
      text: ToDovalue,
      checkboxvalue: false,
    });
    ToDovalueChange("");
    const response = await axios.get("http://localhost:5000/api/ToDolst");
    // @ts-ignore
    ToDolstChange(response.data);
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
