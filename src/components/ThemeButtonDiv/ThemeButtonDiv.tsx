import "./style.css";
import { useEffect } from "react";
import { useRef } from "react";
import sun from "./img/sun.svg";
import moon from "./img/moon.svg";

interface ThemeButtonDivProps {
  isdark: boolean;
  setisdark: (value: boolean) => void;
}
function ThemeButtonDiv({ isdark, setisdark }: ThemeButtonDivProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const toggleTheme = () => {
    setisdark(!isdark);
    if (isdark) {
      btnRef.current?.classList.add("ThemeButtonIsDark");
    } else {
      btnRef.current?.classList.remove("ThemeButtonIsDark");
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isdark) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      btnRef.current?.classList.add("ThemeButtonIsDark");
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isdark]);

  return (
    <div className="ThemeButtonDiv">
      <button className="ThemeButtonIsDark" onClick={toggleTheme} ref={btnRef}>
        {isdark ? (
          <img src={moon} className="ThemeButtonIcon" />
        ) : (
          <img src={sun} className="ThemeButtonIcon" />
        )}
      </button>
    </div>
  );
}
export default ThemeButtonDiv;
