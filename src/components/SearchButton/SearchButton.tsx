import "./style.css";
import searchwite from "./img/searchWhite.svg";
import searchBlack from "./img/searchBlack.svg";
interface SearchButtonProps {
  isdark: boolean;
  isSearch: boolean;
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
}
function SearchButton({ isdark, isSearch, setIsSearch }: SearchButtonProps) {
  const handleSearch = () => {
    setIsSearch(!isSearch);
  };
  return (
    <button className="SearchButton" onClick={handleSearch}>
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
