import React, { useRef } from "react";

function Navbar({ onMenuClick }) {
  const navGreenRef = useRef(null);

  return (
    <div className="fixed top-0 left-0 z-40 flex w-full items-start justify-between px-5">
      <div className="py-4">
        <h1 className="text-2xl  text-white tracking-[0.3em]  font-extralight leading-tight" style={{fontFamily:""}}>Pragati Films</h1>
      </div>

      <div
        onClick={onMenuClick}
        onMouseEnter={() => {
          if (navGreenRef.current) navGreenRef.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          if (navGreenRef.current) navGreenRef.current.style.height = "0%";
        }}
        className="relative h-10 w-[17vw] cursor-pointer overflow-hidden bg-black"
      >
        <div
          ref={navGreenRef}
          className="absolute top-0 h-0 w-full bg-[#D3FD50] transition-all duration-300"
        />

        <div className="relative z-10 flex h-full flex-col items-end justify-center gap-1 pr-4">
          <div className="h-0.5 w-15 bg-white" />
          <div className="h-0.5 w-10 bg-white" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;