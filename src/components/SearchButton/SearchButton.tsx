import "./style.css";
import searchwite from "./img/searchWhite.svg";
import searchBlack from "./img/searchBlack.svg";
interface SearchButtonProps {
  isdark: boolean;
}
function SearchButton({ isdark }: SearchButtonProps) {
  return (
    <button className="SearchButton">
      Search
      {isdark ? (
        <img className="SearchButtonImg" src={searchwite} />
      ) : (
        <img className="SearchButtonImg" src={searchBlack} />
      )}
    </button>
  );
}
export default SearchButton;
