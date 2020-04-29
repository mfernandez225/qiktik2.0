import React, { useState } from "react";
import { Alert,Jumbotron } from "reactstrap";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupError, setSignupError] = useState();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSignupError(null);
    try {
      const {
        data: { token },
      } = await API.signup(firstName, lastName, email, password);
      localStorage.setItem("token", token);
      history.push("/");
    } catch (error) { 
      setSignupError("Invalid email or password");
    }
  };

  return (
    <div id="loginBody"> 
     <Jumbotron id="jumbo"  className="p-2 w-75">
       
      <h1 className="mt-5 colorMe fontMe">Sign Up</h1>
      {signupError && <Alert color="danger">{signupError}</Alert>}
      <form className="m-5" onSubmit={handleSubmit}>
        <input
          className="input-group p-3 fontMe text-center"
          name="firstName"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.currentTarget.value)}
        />
        <input
          className="input-group p-3 fontMe text-center"
          name="lastName"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.currentTarget.value)}
        />
        <input
          className="input-group p-3 fontMe text-center"
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <input
          className="input-group p-3 fontMe text-center "
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <div className="text-right ">
        <button className="btn btn-lg btn-dark mt-3 fontMe" id="sup" type="submit">
          Sign Up
        </button>
        </div>
      </form>
      </Jumbotron>
    </div>
  );
};

export default Signup;
