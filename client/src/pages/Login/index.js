import React, { useState } from "react";
import { Alert } from "reactstrap";
import API from "../../utils/API";
import { useHistory, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError(null);
    try {
      const {
        data: { token },
      } = await API.login(email, password);
      localStorage.setItem("token", token);
      history.push("/");
    } catch (error) {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <div className="">
      <h1 className="mt-5">Login Page</h1>
      {loginError && <Alert color="danger">{loginError}</Alert>}
      <form className="m-5" onSubmit={handleSubmit}>
        <input
          className="input-group p-3"
          name="email"
          placeholder="Login (Email)"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <input
          className="input-group p-3"
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <button className="btn btn-lg btn-dark m-5" type="submit">
          Log In
        </button>
        <Link to="./Signup">
          <button className="btn btn-lg btn-secondary m-5">Sign Up</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
