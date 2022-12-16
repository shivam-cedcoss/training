import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
const Subdetails = ({ details }) => {
  return (
    <div className="sub_container-children1">
      <div>{details.name}</div>
      <div>
        <button><ExpandMoreIcon /></button>
      </div>
    </div>
  );
};

export default Subdetails;
