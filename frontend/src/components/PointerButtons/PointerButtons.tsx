import "./style.css";
import PagesArr from "../PagesArr/PagesArr";
import { useToDoStore } from "../../store/useToDoStore";
import { usePageStore } from "../../store/usePageStore";

function PointerButtons() {
  const { ToDolst } = useToDoStore();
  const { page, setpage } = usePageStore();

  const totalpages = Math.ceil(ToDolst.length / 5);

  const handleNextPage = () => {
    if (page < totalpages - 1) {
      setpage(page + 1);
    } else {
      setpage(0);
    }
  };

  const handlePrevPage = () => {
    if (page > 0) {
      setpage(page - 1);
    }
  };

  return (
    <div className="PointButtonDiv">
      <button className="PointButton" onClick={handlePrevPage}>
        {"<"} Prev
      </button>
      <div className="Botline">
        <PagesArr />
      </div>

      <button className="PointButton" onClick={handleNextPage}>
        Next {">"}
      </button>
    </div>
  );
}

export default PointerButtons;
