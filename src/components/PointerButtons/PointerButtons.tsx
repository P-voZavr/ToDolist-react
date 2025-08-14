import "./style.css";

type prop = {
  setpage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  ToDolst: string[];
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
        {"<"}
      </button>
      <div className="pages">
        {page + 1} / {totalpages}
      </div>
      <button className="PointButton" onClick={handleNextPage}>
        {">"}
      </button>
    </div>
  );
}

export default PointerButtons;
