import React, { useState } from "react";
import Subdetails from "./Subdetails";
const Details = ({ item }) => {
  return (
    <div>
      <ul className="container__detail">
        <li className="container__detail-user">{item.name}</li>
        <li className="container__detail-user">{item.age}</li>
        <li className="container__detail-user">{item.address}</li>
        <li className="container__detail-user">
          Have children: {item.children.length}
        </li>
        {item.children.map((k) => {
          return <Subdetails details={k} />;
        })}
      </ul>
    </div>
  );
};

export default Details;
