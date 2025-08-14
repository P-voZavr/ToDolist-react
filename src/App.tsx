import "./css/main.css";
import { useState } from "react";
import ToDoAdd from "./components/ToDoAdd/ToDoAdd";
import ToDoTable from "./components/ToDoTable/ToDoTable.tsx";
import PointerButtons from "./components/PointerButtons/PointerButtons.tsx";

function App() {
  const [ToDolst, ToDolstChange] = useState<any[]>([]);
  return (
    <>
      <div className="PurpLine"></div>
      <main className="MainPage">
        <ToDoAdd ToDolst={ToDolst} ToDolstChange={ToDolstChange} />
        <ToDoTable ToDolst={ToDolst} ToDolstChange={ToDolstChange} />
        <PointerButtons />
      </main>
    </>
  );
}

export default App;
