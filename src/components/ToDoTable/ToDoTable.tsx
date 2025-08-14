import "./style.css";
import ToDoObj from "../TodoObj/ToDoObj";

type props = {
  ToDolst: string[];
  ToDolstChange: React.Dispatch<React.SetStateAction<string[]>>;
  page: number;
};
function ToDoTable({ ToDolst, ToDolstChange, page }: props) {
  const startIndex = page * 5;
  const endIndex = startIndex + 5;
  const currentItems = [...ToDolst].reverse().slice(startIndex, endIndex);

  return (
    <div className="ToDoTable">
      {ToDolst.length > 5 ? (
        <>
          {currentItems.map((val, index) => (
            <ToDoObj
              ToDolstChange={ToDolstChange}
              ToDolst={ToDolst}
              text={val}
              i={index}
              key={index + val}
            />
          ))}
        </>
      ) : (
        ToDolst.map((val, index) => (
          <ToDoObj
            ToDolstChange={ToDolstChange}
            ToDolst={ToDolst}
            text={val}
            i={index}
            key={index + val}
          />
        )).reverse()
      )}
    </div>
  );
}
export default ToDoTable;
