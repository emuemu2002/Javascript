import React from "react";
import "./Body.css";
import image from "./image/im-1.png";

const Body = () => {
  return (
    <>
      <div className="box2">
        <h1>This is Body Section</h1>
        <img src={image} alt="" />
      </div>
    </>
  );
};

export default Body;
