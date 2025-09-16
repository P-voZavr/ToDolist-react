import "./style.css";
import searchwite from "./img/searchWhite.svg";
import searchBlack from "./img/searchBlack.svg";
import searchPurple from "./img/searchPurple.svg";
import searchGreen from "./img/searchGreen.svg";
import { useSearchStore } from "../../store/useSearchStore.ts";
import { useThemeStore } from "../../store/useThemeStore.ts";

function SearchButton() {
  const { isSearch, setIsSearch } = useSearchStore();
  const { isdark } = useThemeStore();
  return (
    <button
      className={isSearch ? "SearchButtonActive" : "SearchButton"}
      onClick={setIsSearch}
    >
      Search
      {isSearch ? (
        !isdark ? (
          <img className="SearchButtonImg" src={searchPurple} />
        ) : (
          <img className="SearchButtonImg" src={searchGreen} />
        )
      ) : isdark ? (
        <img className="SearchButtonImg" src={searchwite} />
      ) : (
        <img className="SearchButtonImg" src={searchBlack} />
      )}
    </button>
  );
}
export default SearchButton;
