import "./style.css";
import { useToDoStore } from "../../store/useToDoStore";
import { usePageStore } from "../../store/usePageStore";

function PagesArr() {
  const pagesarr: number[] = [];

  const { ToDolst } = useToDoStore();
  const { page, setpage } = usePageStore();

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
