import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@material-ui/core/styles";
import { Button } from "reactstrap";

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});

const Logout = () => {
  return (
    <Link to="/login">
      <Button className="text-decoration-none text-light" color="link">
        <MyButton> Logout </MyButton>
      </Button>
    </Link>
  );
};

export default Logout;
