import React from "react";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>마이페이지 입니다</h1>
      <button onClick={handleClick}>Go Back</button>
    </>
  );
};

export default MyPage;
