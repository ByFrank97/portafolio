// GraphicDesignImg.jsx
import React from "react";
import desingImg from "../../assets/images/desing.png";

export default function GraphicDesignImg(props) {
  return (
    <img
      src={desingImg}
      alt="Graphic Design"
      style={{
        width: "500px", // tamaño que quieras
        height: "auto",
        marginLeft: "90px",
      }}
    />
  );
}
