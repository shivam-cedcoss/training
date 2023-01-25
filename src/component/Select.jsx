import React, { useState } from "react";

const Select = ({ options }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (open)
        setSelectedIndex(
          selectedIndex === 0 ? options.length - 1 : selectedIndex - 1
        );
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (open)
        setSelectedIndex(
          selectedIndex === options.length - 1 ? 0 : selectedIndex + 1
        );
    }
    if (event.key === "Enter") {
      setOpen(!open);
    }
  };

  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      <div onClick={() => setOpen(!open)}>{options[selectedIndex]}</div>
      {open && (
        <div>
          {options.map((option, index) => (
            <div
              key={option}
              style={{ background: index === selectedIndex ? "gray" : "white" }}
              onMouseOver={() => setSelectedIndex(index)}
              onClick={() => {
                setSelectedIndex(index);
                setOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Select;
