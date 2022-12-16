import React from "react";
import { useState } from "react";
import "./Taxonomy.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
const Taxonomy = ({ data }) => {
  const [users, setUsers] = useState([...data]);
  const [flag, setflag] = useState(false);
  const openDetails = (item, index1) => {
    if (item === undefined) {
      setflag(!flag);
    } else {
    //   users.map((i,index) => {
    //     if(index === index1 && i.person === "father"){
    //         i.open = true;
    //     }
        // console.log(i.open)
        // i.children.splice(index + 1, 0, item);
    //   });
      setUsers([...users,item]);
    }
    // console.log(index)
  };
  console.log(users);
  return (
    <>
      <div className="container">
        <div className="sub_container">
          <div>{data[0].person}</div>
          <div>
            <button onClick={() => openDetails()}>
              <span>{!flag ? <ExpandMoreIcon /> : <ExpandLessIcon />}</span>
            </button>
          </div>
        </div>
        {flag &&
          users.map((item, index) => {
            return (
              <ul className="container__detail" key={index}>
                <li className="container__detail-user">{item.name}</li>
                <li className="container__detail-user">{item.age}</li>
                <li className="container__detail-user">{item.address}</li>
                <li className="container__detail-user">
                  Have children: {item.children.length}
                </li>
                {item.children.map((k, index) => {
                  return (
                    <div className="sub_container-children">
                      <div>{k.person}</div>
                      <button onClick={() => openDetails(k, index)}>
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
