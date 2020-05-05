import React, { useState } from "react";
import { Alert ,Jumbotron, Navbar,  NavbarBrand, Media} from "reactstrap";
import API from "../../utils/API";
import { useHistory, Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/imgs/teal.png";


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
   
    

   //loginBody is f  
  <div >
  <Navbar  fixed="top" className="p-0 transparent " >
    <NavbarBrand  >  
    
     <Media   >
        <Media id="logo" object src={logo} alt="qiktik"  className="p-1 m-3"/>
      </Media>
  
      </NavbarBrand>
  
  </Navbar>



   
    <div id="loginBody" >

      
       <Jumbotron id="jumbo" className="mt-3" >
       
      <h1   className="mt-1 fontMe text-white colorMe"  >Login</h1>
      {loginError && <Alert color="danger">{loginError}</Alert>}
    
    
      <form className="m-5 "  onSubmit={handleSubmit}>
      
        <input
          className="input-group p-3 m-1 fontMeSmall text-center"
          name="email"
          placeholder="Login (Email)"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <input
          className="input-group p-3 m-1 fontMeSmall text-center"
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
     
    
        <div className="text-right mt-2">
        <button className="btn btn-lg btn-dark  m-2 fontMeSmall "  id="sup2" type="submit">
          Log In
        </button>
        <Link to="./Signup">
          <button id="sup" className="btn btn-lg btn-secondary m-2  fontMeSmall">Sign Up</button>
        </Link>
        </div>
    
      </form>
      
      </Jumbotron>

    </div>
    </div>
  );
};

export default Login;
