// import React from "react";
// import "../../assets/css/sliderarrow.css"
export default function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} `}
      style={{ ...style, display: "block", background: "#F5F8FA", padding: '15px' }}
      onClick={onClick}
    />
  );
}
