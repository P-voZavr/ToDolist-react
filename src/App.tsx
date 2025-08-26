import "./css/main.css";

import searchlstLength from "./help/searchlistLength";

import ToDoAdd from "./components/ToDoAdd/ToDoAdd";
import ToDoTable from "./components/ToDoTable/ToDoTable.tsx";
import PointerButtons from "./components/PointerButtons/PointerButtons.tsx";

import ThemeButtonDiv from "./components/ThemeButtonDiv/ThemeButtonDiv";
import { useToDoStore } from "./store/useToDoStore";
import { useSearchStore } from "./store/useSearchStore";

function App() {
  const { ToDolst } = useToDoStore();

  const { isSearch } = useSearchStore();

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
