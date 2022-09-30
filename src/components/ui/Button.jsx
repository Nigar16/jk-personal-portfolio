import React from "react";

export default function Button(props) {
  return (
    <button onClick={props.onClick} className="px-2  text-white rounded-[6px] py-2 bg-[#338FE8]">
      {props.children}
    </button>
  );
}
