import { useState } from "react";
import "./style.css";
import edit from "./img/edit.svg";
import del from "./img/delete.svg";
import { useToDoStore } from "../../store/useToDoStore";

type objpar = {
  text: string;
  i: number;
  checkboxvalue: boolean;
};

function ToDoObj({ text, i, checkboxvalue }: objpar) {
  const [ternar, setTernar] = useState(false);
  const [inptvalue, setinptvalue] = useState("");
  const { ToDolst, ToDolstChange } = useToDoStore();

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
      newList.splice(i, 1, { text: inptvalue, checkboxvalue: checkboxvalue });

      ToDolstChange(newList);

      ToDoRename();
    }
  };

  const ToDoCheckbox = () => {
    const newList = [...ToDolst];
    newList.splice(i, 1, { text: text, checkboxvalue: !checkboxvalue });
    ToDolstChange(newList);
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
        <img className="delButtonImg" src={del} />
      </button>
      <button className="renameButton" onClick={ToDoRename}>
        <img className="renameButtonImg" src={edit} alt="Rename" />
      </button>
    </div>
  );
}

export default ToDoObj;
