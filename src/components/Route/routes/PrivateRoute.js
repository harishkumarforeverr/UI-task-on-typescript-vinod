import React from "react";
import { Route, Navigate } from "react-router-dom";
import Container from "./Container";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    
    true ? (
      <Container>
        <Component {...rest} />
      </Container>
    ) : (
      <Navigate to="/" />
    )
  );
};

export default PrivateRoute;

