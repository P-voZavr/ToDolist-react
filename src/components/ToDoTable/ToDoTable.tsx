import "./style.css";
import ToDoObj from "../TodoObj/ToDoObj";
type props = {
  ToDolst: string[];
  ToDolstChange: React.Dispatch<React.SetStateAction<string[]>>;
};
function ToDoTable({ ToDolst, ToDolstChange }: props) {
  return (
    <div className="ToDoTable">
      {ToDolst.map((val, index) => (
        <ToDoObj
          ToDolstChange={ToDolstChange}
          ToDolst={ToDolst}
          text={val}
          i={index}
          key={index + val}
        />
      ))}
    </div>
  );
}
export default ToDoTable;
