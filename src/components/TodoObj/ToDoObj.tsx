import { useState } from "react";
import "./style.css";

type objpar = {
  text: string;
  i: number;
  ToDolst: string[];
  ToDolstChange: React.Dispatch<React.SetStateAction<string[]>>;
};

function ToDoObj({ text, i, ToDolst, ToDolstChange }: objpar) {
  const [content, setContent] = useState(text);
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
      setContent(inptvalue);
      ToDoRename();
    }
  };

  const ToDoCheckbox = () => {
    setchechkboxvalue(!checkboxvalue);
  };

  return (
    <div className="ToDoObj">
      <input
        type="checkbox"
        checked={checkboxvalue}
        onChange={ToDoCheckbox}
      ></input>
      {ternar ? (
        <input
          className="renameinpt"
          value={inptvalue}
          onChange={(event) => setinptvalue(event.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          placeholder="Нажми Enter чтобы подтвердить изминение"
        />
      ) : checkboxvalue ? (
        <del className="del">{content}</del>
      ) : (
        <p className="p">{content}</p>
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
