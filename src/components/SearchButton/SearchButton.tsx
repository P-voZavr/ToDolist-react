import "./style.css";
import searchwite from "./img/searchWhite.svg";
function SearchButton() {
  return (
    <button className="SearchButton">
      Search
      <img className="SearchButtonImg" src={searchwite} />
    </button>
  );
}
export default SearchButton;
