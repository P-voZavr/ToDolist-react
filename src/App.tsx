import "./css/main.css";
import { useState } from "react";
import ToDoAdd from "./components/ToDoAdd/ToDoAdd";
import ToDoTable from "./components/ToDoTable/ToDoTable.tsx";
import PointerButtons from "./components/PointerButtons/PointerButtons.tsx";
import ThemeButtonDiv from "./components/ThemeButtonDiv/ThemeButtonDiv";

function App() {
  const [ToDolst, ToDolstChange] = useState<any[]>([]);
  const [page, setpage] = useState(0);
  const [isSearch, setIsSearch] = useState(false);
  const [ToDovalue, ToDovalueChange] = useState<string>("");

  const [isdark, setisdark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const searchlst = ToDolst.map((val, index) => {
    if (val.text.includes(ToDovalue.trim())) return index;
    else return null;
  })
    .reverse()
    .filter(Boolean);
  return (
    <>
      <ThemeButtonDiv isdark={isdark} setisdark={setisdark} />
      <div className="PurpLine"></div>
      <main className="MainPage">
        <ToDoAdd
          isdark={isdark}
          ToDolst={ToDolst}
          ToDolstChange={ToDolstChange}
          setpage={setpage}
          isSearch={isSearch}
          setIsSearch={setIsSearch}
          ToDovalue={ToDovalue}
          ToDovalueChange={ToDovalueChange}
        />
        <ToDoTable
          ToDolst={ToDolst}
          ToDolstChange={ToDolstChange}
          page={page}
          ToDovalue={ToDovalue}
          isSearch={isSearch}
        />
        {ToDolst.length > 5 ? (
          isSearch ? (
            searchlst.length > 5 ? (
              <PointerButtons
                page={page}
                setpage={setpage}
                ToDolst={ToDolst}
                isSearch={isSearch}
                ToDovalue={ToDovalue}
              />
            ) : null
          ) : (
            <PointerButtons
              page={page}
              setpage={setpage}
              ToDolst={ToDolst}
              isSearch={isSearch}
              ToDovalue={ToDovalue}
            />
          )
        ) : null}
      </main>
    </>
  );
}

export default App;
