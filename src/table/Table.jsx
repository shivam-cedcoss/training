import React, { useEffect, useRef, useState } from "react";
import Popover from "../popover/Popover";
import "./Table.css";
const Table = () => {
  const [post, setPost] = useState([]);
  const divRef = useRef();
  const fetchPost = async () => {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/albums?_limit=20"
    );
    let result = await response.json();
    setPost(result);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="container" ref={divRef}>
      <table>
        {post.map((i) => {
          return (
            <tbody className="container__album" key={i.id}>
              <tr>
                <td>{i.id}</td>
                <td>{i.title}</td>
                <td>
                  <Popover data={i.title} referring={divRef.current} />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
