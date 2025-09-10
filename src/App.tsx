import "./css/main.css";

import ToDoAdd from "./components/ToDoAdd/ToDoAdd";
import ToDoTable from "./components/ToDoTable/ToDoTable.tsx";
import PointerButtons from "./components/PointerButtons/PointerButtons.tsx";

import ThemeButtonDiv from "./components/ThemeButtonDiv/ThemeButtonDiv";
import { useToDoStore } from "./store/useToDoStore";
import { useSearchStore } from "./store/useSearchStore";

function App() {
  const { ToDolst, ToDovalue } = useToDoStore();

  const { isSearch } = useSearchStore();

  let searchlstLength = 0;
  if (ToDovalue.trim() !== "") {
    searchlstLength = ToDolst.filter((val) =>
      val.text.includes(ToDovalue.trim())
    ).length;
  } else {
    searchlstLength = ToDolst.length;
  }

  return (
    <>
      <ThemeButtonDiv />
      <div className="PurpLine"></div>
      <main className="MainPage">
        <ToDoAdd />
        <ToDoTable />
        {ToDolst.length > 5 ? (
          isSearch ? (
            searchlstLength > 5 ? (
              <PointerButtons />
            ) : null
          ) : (
            <PointerButtons />
          )
        ) : null}
      </main>
    </>
  );
}

export default App;
