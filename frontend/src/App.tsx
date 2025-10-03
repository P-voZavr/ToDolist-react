import "./css/main.css";
import MainPage from "./pages/Mainpage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import Registrationppage from "./pages/Registrationpage.tsx";
import ThemeButtonDiv from "./components/ThemeButtonDiv/ThemeButtonDiv.tsx";
import { Routes, Route } from "react-router-dom";

function App() {
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
