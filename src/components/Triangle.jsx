import React from "react";

const Triangle = ({ className, isClicked }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
      className={className}
      style={isClicked ? { fill: "#fff" } : { fill: "#000" }}
    >
      <title>ionicons-v5-s</title>
      <polygon points="256 32 20 464 492 464 256 32" />
    </svg>
  );
};

export default Triangle;