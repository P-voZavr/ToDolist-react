import "./style.css";
import { useEffect, useRef, useState } from "react";
import sun from "./img/sun.svg";
import moon from "./img/moon.svg";
import account_dark_theme from "../../img/account-dark-theme.svg";
import account_light_theme from "../../img/account-light-theme.svg";
import { useThemeStore } from "../../store/useThemeStore";
import { logout } from "../../api/user.api";
import { useAuthStore } from "../../store/useAuthStore";

function ThemeButtonDiv() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [isdropdown, setIsDropdown] = useState(false);
  const { isdark, setIsDark } = useThemeStore();

  const { isAuth } = useAuthStore();

  const toggleTheme = () => {
    setIsDark();
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
      {isAuth ? (
        <div>
          <button
            className="AccountButton"
            onClick={() => setIsDropdown(!isdropdown)}
          >
            Account{" "}
            {isdark ? (
              <img src={account_dark_theme} className="AccountButtonIcon" />
            ) : (
              <img src={account_light_theme} className="AccountButtonIcon" />
            )}
          </button>
          {isdropdown && (
            <div className="DropdownDiv">
              <button className="DropdownButton">Delete account</button>
              <button className="DropdownButton" onClick={logout}>
                Log out
              </button>
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}

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
