import React, { useState } from 'react';
import {GoogleLogin} from "react-google-login"
import API from "../../utils/API";


const Login = () => {

  const [name,setName] = useState(" ")
  const [email,setEmail] = useState(" ")
  const [googleID,setgoogleID] = useState(" ")
  const [url,setUrl] = useState(" ")
  const [loggedin, setLoggedin] = useState(false)

  //this will be getting response given by google api
  const responseGoogle = (response) =>{

    console.log(response)
    setName(response.profileObj.name)
    setEmail(response.profileObj.email)
    setUrl(response.profileObj.imageUrl)
    setgoogleID(response.googleID)
    setLoggedin(true)


  }



  // const logout = () => {
  //   setLoggedin(false)
  // };

const Authenticated = () => {

   API.getusers() 
   .then( data => {console.log(data)})


}


  return (
    <div align="center">
<h1>hello {name}</h1>
   <GoogleLogin
   onClick={Authenticated()}
    clientId="902882525683-kh5lcha60bm4asri8tp7ne1i5g0gcdto.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    isSignedIn={false}
    cookiePolicy={'single_host_origin' }
    
  />,
    </div>
  );
};

export default Login;
