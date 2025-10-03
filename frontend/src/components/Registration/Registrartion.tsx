import "./style.css";
import { useRegistrationStore } from "../../store/useRegistrationStore";
import { register } from "../../api/user.api";
import { Link } from "react-router-dom";

function Registration() {
  const { username, password, setUsername, setPassword } =
    useRegistrationStore();

  function aplyRegistration() {
    register(username, password);
  }

  return (
    <div className="Registration">
      <h1 className="RegistrationBigText">Create An Account</h1>
      <p className="RegistrationSmallText">
        Create an account to save your tasks and notes in the cloud, without any
        ads and freeEn
      </p>
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
      <button className="RegistrationButton" onClick={aplyRegistration}>
        Sing in
      </button>
      <p className="RegistrationSmallBottomText">
        Already have an account? Login{" "}
        <Link to="/login" className="LoginLink">
          Here!
        </Link>
      </p>
    </div>
  );
}

export default Registration;
