import React from "react";
import {Link} from "react-router-dom"
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route } from "react-router-dom";

const Logout = () => {
  return (
    <Button variant="outlined" color="secondary">
    Logout
  </Button>
  );
};

export default Logout;
