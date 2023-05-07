import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("btn login clicked");
    console.log(email);

    if (validateEmail(email)) {
      console.log({ email, password });
      // navigate to hope page
      navigate("/profile/1", { state: { email, password } });
    }
  };

  const validateEmail = (email) => {
    if (!email) {
      setErrorMessage("email is required");
      return false;
    }
    if (!EMAIL_REGEX.test(email)) {
      setErrorMessage("email is not valid");

      return false;
    }
    setErrorMessage("");
    return true;
  };

  return (
    <form onSubmit={handleSubmit} className="login_form">
      <label>
        Email:
        <input
          // type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errorMessage}
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
      email: {email} <br />
      password:{password}
    </form>
  );
}
export default Login;
