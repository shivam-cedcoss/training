import React, { useState } from "react";

const MultiSelect = ({ options }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [lastAction, setLastAction] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (open) {
        setSelectedIndex(
          selectedIndex === 0
            ? options[selectedGroupIndex].group.length - 1
            : selectedIndex - 1
        );
        setLastAction("keyPress");
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (open) {
        setSelectedIndex(
          selectedIndex === options[selectedGroupIndex].group.length - 1
            ? 0
            : selectedIndex + 1
        );
        setLastAction("keyPress");
      }
    }
    if (event.key === "Enter") {
      setOpen(!open);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (open) {
        setSelectedGroupIndex(
          selectedGroupIndex === 0 ? options.length - 1 : selectedGroupIndex - 1
        );
        setLastAction("keyPress");
      }
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (open) {
        setSelectedGroupIndex(
          selectedGroupIndex === options.length - 1 ? 0 : selectedGroupIndex + 1
        );
        setLastAction("keyPress");
      }
    }
  };

  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      <div onClick={() => setOpen(!open)}>
        {options[selectedGroupIndex].group[selectedIndex].label}
      </div>
      {open && (
        <div>
          {options.map((option, index) => (
            <div key={option.label}>
              <div>{option.label}</div>
              {option.group.map((groupOption, groupIndex) => (
                <div
                  key={groupOption.value}
                  style={{
                    background:
                      index === selectedGroupIndex &&
                      groupIndex === selectedIndex
                        ? "gray"
                        : "white",
                  }}
                  onMouseOver={() => {
                    if (lastAction === "keyPress") {
                      setLastAction("mouseEnter");
                    } else {
                      setSelectedIndex(groupIndex);
                      setSelectedGroupIndex(index);
                    }
                  }}
                  onClick={() => {
                    setSelectedIndex(groupIndex);
                    setSelectedGroupIndex(index);
                    setOpen(false);
                  }}
                >
                  {groupOption.label}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default MultiSelect;
