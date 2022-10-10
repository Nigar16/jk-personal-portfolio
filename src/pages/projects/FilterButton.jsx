import React, { useState, memo, useEffect } from "react";

const FilterButton = memo((props) => {
  const [active, setActive] = useState("");
  const [selected, setSelected] = useState(false);

  
  const selectedHandle = (e) => {
    setActive(e.target.value.toString());
    console.log(active);
  };

  return (
    <div>
      <button
        value={props.children}
        onClick={selectedHandle}
        className={`px-2  hover:text-[#1E4F99]  rounded-[4px] py-4`}
      >
        {props.children}
      </button>
    </div>
  );
});

export default FilterButton;
