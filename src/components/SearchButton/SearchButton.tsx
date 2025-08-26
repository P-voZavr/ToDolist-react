import "./style.css";
import searchwite from "./img/searchWhite.svg";
import searchBlack from "./img/searchBlack.svg";
import { useSearchStore } from "../../store/useSearchStore.ts";
import { useThemeStore } from "../../store/useThemeStore";

function SearchButton() {
  const { isSearch, setIsSearch } = useSearchStore();
  const { isdark } = useThemeStore();
  return (
    <button
      className={isSearch ? "SearchButtonActive" : "SearchButton"}
      onClick={setIsSearch}
    >
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
