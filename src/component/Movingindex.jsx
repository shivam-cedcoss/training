import React, { useState, useEffect } from "react";
const items = [
    { id: 1, name: "Josh Weir" },
    { id: 2, name: "Sarah Weir" },
    { id: 3, name: "Alicia Weir" },
    { id: 4, name: "Doo Weir" },
    { id: 5, name: "Grooft Weir" }
  ];
const Movingindex = () => {
  const [selected, setSelected] = useState(undefined);
  const [cursor, setCursor] = useState(0);

  const useKeyPress = function(targetKey) {
    const [keyPressed, setKeyPressed] = useState(false);
    console.log(targetKey)
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };
    useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    });
    return keyPressed;
  };
  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const enterPress = useKeyPress("Enter");
  useEffect(() => {
    if (items.length && downPress) {
      setCursor(prevState =>
        prevState < items.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress]);
  useEffect(() => {
    if (items.length && upPress) {
      setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress]);
  useEffect(() => {
    if (items.length && enterPress) {
      setSelected(items[cursor]);
    }
  }, [cursor, enterPress]);
  return (
    <div>
      <span>Selected: {selected ? selected.name : "none"}</span>
      {items.map((item, index) => (
        <div
        onClick={() => setSelected(item)}
        key={index}
        className="container"
      >
        {item.name}
      </div>
      ))}
    </div>
  );
};
export default Movingindex;