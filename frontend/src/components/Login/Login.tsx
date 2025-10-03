import "./style.css";
import { useLoginStore } from "../../store/useLoginStore";
import { login } from "../../api/user.api";
import { Link } from "react-router-dom";

function Login() {
  const { username, password, setUsername, setPassword } = useLoginStore();

  function aplyLogin() {
    login(username, password);
  }

  return (
    <div className="Registration">
      <h1 className="RegistrationBigText">Login</h1>
      <p className="RegistrationSmallText">Enter your login credentials</p>

      <input
        className="UsernameInput"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        className="PasswordInput"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="RegistrationButton" onClick={aplyLogin}>
        Sing up
      </button>
      <p className="RegistrationSmallBottomText">
        Don't have an account Sgin up{" "}
        <Link to="/registration" className="LoginLink">
          Here!
        </Link>
      </p>
    </div>
  );
}

export default Login;
