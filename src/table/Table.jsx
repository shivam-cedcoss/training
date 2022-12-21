import React, { useEffect, useRef, useState } from "react";
import Popover from "../popover/Popover";
import "./Table.css";
const Table = () => {
  const [post, setPost] = useState([]);
  const [popoverPosition, setPopoverPosition] = useState("default");
  const divRef = useRef();
  const fetchPost = async () => {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/albums?_limit=10"
    );
    let result = await response.json();
    setPost(result);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  // Setting popover position
  const callPopoverPosition = (e) => {
    setPopoverPosition(e.target.innerText);
  };
  return (
    <>
      <div className="container" ref={divRef}>
        <table>
          <tbody>
            {post.map((i, index) => {
              return (
                <tr className="container__album" key={i.id}>
                  <td>{i.id}</td>
                  <td>{i.title}</td>
                  <td>
                    <Popover
                      data={i.title}
                      referring={divRef.current}
                      position={popoverPosition}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="container-btn">
        <button
          onClick={callPopoverPosition}
          style={{
            backgroundColor: popoverPosition === "Bottom-left" ? "#008000" : "",
          }}
        >
          Bottom-left
        </button>
        <button
          onClick={callPopoverPosition}
          style={{
            backgroundColor:
              popoverPosition === "Bottom-right" ? "#008000" : "",
          }}
        >
          Bottom-right
        </button>
        <button
          onClick={callPopoverPosition}
          style={{
            backgroundColor: popoverPosition === "Top-left" ? "#008000" : "",
          }}
        >
          Top-left
        </button>
        <button
          onClick={callPopoverPosition}
          style={{
            backgroundColor: popoverPosition === "Top-right" ? "#008000" : "",
          }}
        >
          Top-right
        </button>
        <button
          onClick={callPopoverPosition}
          style={{
            backgroundColor: popoverPosition === "Auto" ? "#008000" : "",
          }}
        >
          Auto
        </button>
      </div>
    </>
  );
};

export default Table;
