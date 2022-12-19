import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import "./Popover.css";
const Popover = ({ data, referring }) => {
  const [flag, setFlag] = useState(false);
  const btnRef = useRef(null);
  const popoverRef = useRef(null);
  const checkVisibility = () => {
    intialPosition();
    // setFlag(!flag);
    if (!flag) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };

  if (flag) {
    window.addEventListener("click", function (e) {
      if (!popoverRef.current.contains(e.target)) {
        // setFlag();
      }
    });
  }

  const theme = {
    display: flag ? "block" : "none",
    width: "100px",
    minHeight: "100px",
    backgroundColor: "white",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    float: "right",
    right: "85px",
    position: "fixed",
    zIndex: "99",
  };

  const intialPosition = () => {
    let dimension = btnRef.current.getBoundingClientRect();
    console.log(dimension);
    popoverRef.current.style.top = `${dimension.bottom}px`;
    popoverRef.current.style.right = `${dimension.x / dimension.left + 85}px`;
  };

  useEffect(() => {
    if (referring !== undefined) {
      referring.onscroll = intialPosition;
    }
  }, [flag]);

  return (
    <div className="popover__container">
      <button onClick={checkVisibility} ref={btnRef}>
        View Title
      </button>
      <div style={theme} ref={popoverRef}>
        {data}
      </div>
    </div>
  );
};
export default Popover;
