import React from "react";
import { useState } from "react";
import "./Taxonomy.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
const Taxonomy = ({ data }) => {
  const [users, setUsers] = useState([...data]);
  const [flag, setflag] = useState(false);
  const openDetails = (item) => {
    if (item === undefined) {
      setflag(!flag);
    } else {
      setUsers([...users, item]);
    }
  };
  console.log(users);
  return (
    <>
      <div className="container">
        <div className="sub_container">
          <div>{data[0].person}</div>
          <div>
            <button onClick={() => openDetails()}>
              <span>
                {!flag ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </span>
            </button>
          </div>
        </div>
        {flag && users.map((item, index) => {
          return (
            <ul className="container__detail">
              <li className="container__detail-user">{item.name}</li>
              <li className="container__detail-user">{item.age}</li>
              <li className="container__detail-user">{item.address}</li>
              <li
                className="container__detail-user"
              >
                Have children: {item.children.length}
              </li>
              {item.children.map((k) => {
                return (
                  <div className="sub_container-children">
                    <div>{k.name}</div>
                    <button onClick={() => openDetails(k)}>
                      <ExpandMoreIcon />
                    </button>
                  </div>
                );
              })}
            </ul>
          );
        })}
      </div>
    </>
  );
};
export default Taxonomy;
