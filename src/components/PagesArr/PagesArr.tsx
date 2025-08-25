import "./style.css";
import { ToDo } from "../../types/ToDo";

type prop = {
  page: number;
  setpage: React.Dispatch<React.SetStateAction<number>>;
  ToDolst: ToDo[];
  isSearch: boolean;
  ToDovalue: string;
};

function PagesArr({ page, setpage, ToDolst, isSearch, ToDovalue }: prop) {
  const pagesarr: number[] = [];

  const searchlst = ToDolst.map((val, index) => {
    if (val.text.includes(ToDovalue.trim())) return index;
    else return null;
  })
    .reverse()
    .filter(Boolean);

  let totalpages = 0;
  if (isSearch) {
    totalpages = Math.ceil(searchlst.length / 5);
  } else {
    totalpages = Math.ceil(ToDolst.length / 5);
  }

  for (let i = 0; i < totalpages; i++) {
    pagesarr.push(i);
  }

  return (
    <div className="pagesArr">
      {pagesarr.map((val, index) =>
        val === page ? (
          <button
            className="pageButtonactive"
            key={val + index}
            onClick={() => setpage(val)}
          >
            {val + 1}
          </button>
        ) : (
          <button
            className="pageButton"
            key={val + index}
            onClick={() => setpage(val)}
          >
            {val + 1}
          </button>
        )
      )}
    </div>
  );
}

export default PagesArr;
