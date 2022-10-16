import React from 'react'

export default function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
  return (
    <div
      className={`${className}  px-24 truncate   w-[50px] h-[12%] top-[30%] right-[20px] rounded-full`}
      style={{ ...style, display: "block", background: "#F5F8FA", padding: '15px' }}
      onClick={onClick}
    />
  )
}
