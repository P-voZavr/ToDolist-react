import "./css/main.css";
import MainPage from "./pages/Mainpage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import Registrationppage from "./pages/Registrationpage.tsx";
import ThemeButtonDiv from "./components/ThemeButtonDiv/ThemeButtonDiv.tsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import validateToken from "./help/getAccessToken.ts";
import { useEffect } from "react";
import { useAuthStore } from "./store/useAuthStore.ts";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    async function checkToken() {
      const valid = await validateToken();
      useAuthStore.setState({ isAuth: valid });
      if (!valid) navigate("/Registration");
      console.log(valid);
    }
    checkToken();
  }, []);
  return (
    <>
      <ThemeButtonDiv />
      <div className="PurpLine"></div>
      <main className="MainPage">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Registration" element={<Registrationppage />} />
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
