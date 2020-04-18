import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Login from "../../pages/Login/index.js";

const Logout = () => {
  return (
    <Link to="/">
      <Button onClick={Login} variant="outlined" color="secondary">
        Logout
      </Button>
    </Link>
  );
};

export default Logout;
