import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import "./Popover.css";

const Popover = ({ data, referring, position }) => {
  const [flag, setFlag] = useState(false);
  const btnRef = useRef(null);
  const popoverRef = useRef(null);
  const checkVisibility = () => {
    intialPosition();
    if (!flag) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };

  const theme = {
    display: flag ? "block" : "none",
  };

  const Modal = createPortal(
    <div style={theme} ref={popoverRef} className="popover__container-popover">
      {data}
    </div>,
    document.body
  );

  //Detecting window resize
  const getResizePosition = () => {
    window.addEventListener("resize", resizeWindow);
    resizeWindow();
  };

  const resizeWindow = () => {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    let btnDimension = btnRef.current.getBoundingClientRect();
    let popoverDimension = popoverRef.current.getBoundingClientRect();
    if (
      h - btnDimension.bottom > popoverDimension.height &&
      w - btnDimension.right > popoverDimension.width
    ) {
      popoverRef.current.style.top = `${btnDimension.bottom}px`;
      popoverRef.current.style.left = `${btnDimension.left}px`;
    } else if (
      h - btnDimension.bottom < popoverDimension.height &&
      w - btnDimension.right > popoverDimension.width
    ) {
      popoverRef.current.style.top = `${
        btnDimension.top - popoverDimension.height
      }px`;
      popoverRef.current.style.left = `${btnDimension.left}px`;
    } else if (
      w - btnDimension.right < popoverDimension.width &&
      h - btnDimension.bottom > popoverDimension.height
    ) {
      popoverRef.current.style.top = `${btnDimension.bottom}px`;
      popoverRef.current.style.left = `${
        btnDimension.right - popoverDimension.width
      }px`;
    } else if (
      w - btnDimension.right < popoverDimension.width &&
      h - btnDimension.bottom < popoverDimension.height
    ) {
      popoverRef.current.style.top = `${
        btnDimension.top - popoverDimension.height
      }px`;
      popoverRef.current.style.left = `${
        btnDimension.right - popoverDimension.width
      }px`;
    }
  };

  // Initial position
  const intialPosition = () => {
    let btnDimension = btnRef.current.getBoundingClientRect();
    if (popoverRef.current !== null) {
      if (position === "default") {
        popoverRef.current.style.top = `${btnDimension.bottom}px`;
        popoverRef.current.style.left = `${btnDimension.left}px`;
      } else if (position === "Bottom-left") {
        popoverRef.current.style.top = `${btnDimension.bottom}px`;
        popoverRef.current.style.left = `${btnDimension.left}px`;
      } else if (position === "Bottom-right") {
        var popoverDimension = popoverRef.current.getBoundingClientRect();
        popoverRef.current.style.top = `${btnDimension.bottom}px`;
        popoverRef.current.style.left = `${
          btnDimension.right - popoverDimension.width
        }px`;
      } else if (position === "Top-left") {
        popoverDimension = popoverRef.current.getBoundingClientRect();
        popoverRef.current.style.top = `${
          btnDimension.top - popoverDimension.height
        }px`;
        popoverRef.current.style.left = `${btnDimension.left}px`;
      } else if (position === "Top-right") {
        popoverDimension = popoverRef.current.getBoundingClientRect();
        popoverRef.current.style.top = `${
          btnDimension.top - popoverDimension.height
        }px`;
        popoverRef.current.style.left = `${
          btnDimension.right - popoverDimension.width
        }px`;
      } else if (position === "Auto") {
        getResizePosition();
      }
    }
  };

  // Gets calls when clicking outside
  const handleClickOutside = (event) => {
    if (btnRef.current && !btnRef.current.contains(event.target)) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setFlag(false);
      }
    }
  };

  // Getting position on scrolling
  useEffect(() => {
    intialPosition();
    if (referring !== undefined) {
      referring.onscroll = intialPosition;
    }
  }, [flag]);

  // Adding the event listener
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="popover__container">
      <button
        onClick={checkVisibility}
        ref={btnRef}
        className="popover__container-btn"
      >
        View Title
      </button>
      {flag && Modal}
    </div>
  );
};
export default Popover;
