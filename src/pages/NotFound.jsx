import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <>
      <h1>404 NOT FOUND</h1>
      <button onClick={handleClick}>Go Back</button>
    </>
  );
};

export default NotFound;
