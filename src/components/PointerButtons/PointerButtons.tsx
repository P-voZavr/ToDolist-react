import "./style.css";
import PagesArr from "../PagesArr/PagesArr";
import { ToDo } from "../../types/ToDo";
type prop = {
  setpage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  ToDolst: ToDo[];
};

function PointerButtons({ page, setpage, ToDolst }: prop) {
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

      <PagesArr page={page} setpage={setpage} ToDolst={ToDolst} />

      <button className="PointButton" onClick={handleNextPage}>
        Next {">"}
      </button>
    </div>
  );
}

export default PointerButtons;
