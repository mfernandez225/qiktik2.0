import React, { useState } from "react";
import { Alert ,Jumbotron, Button, Col, Row} from "reactstrap";
import API from "../../utils/API";
import { useHistory, Link } from "react-router-dom";
import "./style.css";

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
   
    

   //loginBody is for css background image
    <div id="loginBody" className="">
      


      
       <Jumbotron id="jumbo"  className="  w-75">
       
      <h1   className="mt-1 fontMe text-white colorMe"  >Login</h1>
      {loginError && <Alert color="danger">{loginError}</Alert>}
    
    
      <form className="m-5 " onSubmit={handleSubmit}>
      
        <input
          className="input-group p-3 m-1 fontMe"
          name="email"
          placeholder="Login (Email)"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <input
          className="input-group p-3 m-1 fontMe"
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
     
      
        <div className="text-right mt-2">
        <button className="btn btn-lg btn-dark  m-2 fontMe " type="submit">
          Log In
        </button>
        <Link to="./Signup">
          <button id="sup" className="btn btn-lg btn-secondary m-2   fontMe">Sign Up</button>
        </Link>
        </div>
        
      </form>
      
      </Jumbotron>

    </div>

  );
};

export default Login;
