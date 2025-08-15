import "./style.css";
import { ToDo } from "../../types/ToDo";

type prop = {
  page: number;
  setpage: React.Dispatch<React.SetStateAction<number>>;
  ToDolst: ToDo[];
};

function PagesArr({ page, setpage, ToDolst }: prop) {
  const pagesarr: number[] = [];

  const totalpages = Math.ceil(ToDolst.length / 5);

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
