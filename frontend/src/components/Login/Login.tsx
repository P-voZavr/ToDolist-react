import "./style.css";
import { useLoginStore } from "../../store/useLoginStore";
import { login } from "../../api/user.api";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const { username, password, setUsername, setPassword } = useLoginStore();
  const navigate = useNavigate();

  async function aplyLogin() {
    try {
      const res = await login(username, password);
      if (res.status === 201) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
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
