import { useState } from "react";
import "./style.css";

type objpar = {
  text: string;
  i: number;
  ToDolst: string[];
  ToDolstChange: React.Dispatch<React.SetStateAction<string[]>>;
};

function ToDoObj({ text, i, ToDolst, ToDolstChange }: objpar) {
  const [ternar, setTernar] = useState(false);
  const [inptvalue, setinptvalue] = useState("");
  const [checkboxvalue, setchechkboxvalue] = useState(false);

  const ToDoDel = (index: number) => {
    const newList = [...ToDolst];
    newList.splice(index, 1);
    ToDolstChange(newList);
  };

  const ToDoRename = () => {
    setTernar(!ternar);
    setinptvalue("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inptvalue.trim() !== "") {
      const newList = [...ToDolst];
      newList.splice(i, 1, inptvalue);

      ToDolstChange(newList);

      ToDoRename();
    }
  };

  const ToDoCheckbox = () => {
    setchechkboxvalue(!checkboxvalue);
  };

  return (
    <div className="ToDoObj">
      <input type="checkbox" checked={checkboxvalue} onChange={ToDoCheckbox} />
      {ternar ? (
        <input
          className="renameinpt"
          value={inptvalue}
          onChange={(event) => setinptvalue(event.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          placeholder="Нажми Enter чтобы подтвердить изменение"
        />
      ) : checkboxvalue ? (
        <del className="del">{text}</del>
      ) : (
        <p className="p">{text}</p>
      )}
      <button className="delButton" onClick={() => ToDoDel(i)}>
        Delete
      </button>
      <button className="renameButton" onClick={ToDoRename}>
        Rename
      </button>
    </div>
  );
}

export default ToDoObj;
