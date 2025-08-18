import "./css/main.css";
import { useState } from "react";
import ToDoAdd from "./components/ToDoAdd/ToDoAdd";
import ToDoTable from "./components/ToDoTable/ToDoTable.tsx";
import PointerButtons from "./components/PointerButtons/PointerButtons.tsx";
import ThemeButtonDiv from "./components/ThemeButtonDiv/ThemeButtonDiv";

function App() {
  const [ToDolst, ToDolstChange] = useState<any[]>([]);
  const [page, setpage] = useState(0);
  return (
    <>
      <ThemeButtonDiv />
      <div className="PurpLine"></div>
      <main className="MainPage">
        <ToDoAdd
          ToDolst={ToDolst}
          ToDolstChange={ToDolstChange}
          setpage={setpage}
        />
        <ToDoTable
          ToDolst={ToDolst}
          ToDolstChange={ToDolstChange}
          page={page}
        />
        {ToDolst.length > 5 ? (
          <PointerButtons page={page} setpage={setpage} ToDolst={ToDolst} />
        ) : null}
      </main>
    </>
  );
}

export default App;
