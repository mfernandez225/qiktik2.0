import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import useAuth from "../../utils/use-auth";
import "./style.css";

const LogoutButton = () => {
  const history = useHistory();
  const { logOut } = useAuth();

  // Logs the user out and clears the history and token

  const handleLogout = () => {
    logOut();
    history.push("/login");
  };

  return (
    <Button
      id="logoutButton"
      className="btn btn-lrg btn-dark fontMeSmall m-3"
     
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
