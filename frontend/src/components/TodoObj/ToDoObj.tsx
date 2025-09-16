import { useEffect, useState } from "react";
import "./style.css";
import edit from "./img/edit.svg";
import del from "./img/delete.svg";
import { useToDoStore } from "../../store/useToDoStore";
import {
  getToDolst as getAll,
  deleteToDo,
  updateToDo,
} from "../../api/todo.api";

type objpar = {
  text: string;
  checkboxvalue: boolean;
  id: string;
};

function ToDoObj({ text, checkboxvalue, id }: objpar) {
  const [ternar, setTernar] = useState(false);
  const [inptvalue, setinptvalue] = useState("");
  const { ToDolstChange } = useToDoStore();

  async function getToDolst() {
    const res = await getAll();
    ToDolstChange(res);
  }

  const ToDoDel = async () => {
    await deleteToDo(id);

    await getToDolst();
  };

  useEffect(() => {
    setinptvalue("");
  }, [ternar]);

  const ToDoRename = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inptvalue.trim() !== "") {
      await updateToDo({ text: inptvalue, checkboxvalue }, id);
      setTernar(false);
      await getToDolst();
    } else if (event.key === "Enter") {
      setTernar(false);
    }
  };

  const ToDoCheckbox = async () => {
    await updateToDo({ text, checkboxvalue: !checkboxvalue }, id);
    await getToDolst();
  };

  return (
    <div className="ToDoObj">
      <input type="checkbox" checked={checkboxvalue} onChange={ToDoCheckbox} />
      {ternar ? (
        <input
          className="renameinpt"
          value={inptvalue}
          onChange={(event) => setinptvalue(event.target.value)}
          onKeyDown={ToDoRename}
          autoFocus
          placeholder="Нажми Enter чтобы подтвердить изменение"
        />
      ) : checkboxvalue ? (
        <del className="del">{text}</del>
      ) : (
        <p className="p">{text}</p>
      )}
      <button className="delButton" onClick={() => ToDoDel()}>
        <img className="delButtonImg" src={del} />
      </button>
      <button className="renameButton" onClick={() => setTernar(!ternar)}>
        <img className="renameButtonImg" src={edit} alt="Rename" />
      </button>
    </div>
  );
}

export default ToDoObj;
