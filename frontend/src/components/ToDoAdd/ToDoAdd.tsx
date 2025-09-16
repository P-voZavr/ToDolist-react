import "./style.css";
import { useEffect } from "react";
import SearchButton from "../SearchButton/SearchButton";
import { useToDoStore } from "../../store/useToDoStore";
import { usePageStore } from "../../store/usePageStore";
import { useSearchStore } from "../../store/useSearchStore";
import { getToDolst, createToDo, searchToDo } from "../../api/todo.api";

function ToDoAdd() {
  const { ToDolstChange, ToDovalue, ToDovalueChange } = useToDoStore();

  const { setpage } = usePageStore();

  const { isSearch } = useSearchStore();

  useEffect(() => {
    ToDovalueChange("");
    setpage(0);
    const search = async () => {
      if (isSearch === false) ToDolstChange(await getToDolst());
    };
    search();
  }, [isSearch]);

  useEffect(() => {
    const search = async () => {
      if (isSearch) {
        setpage(0);
        if (ToDovalue.trim() === "") {
          ToDolstChange(await getToDolst());
        } else {
          ToDolstChange(await searchToDo(ToDovalue));
        }
      }
    };

    search();
  }, [isSearch, ToDovalue]);

  async function AddToDo() {
    if (ToDovalue.trim() === "") {
      ToDovalueChange("");
      return;
    }
    setpage(0);
    await createToDo({ text: ToDovalue, checkboxvalue: false });

    ToDolstChange(await getToDolst());
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
