import React from "react";
import { Navigate } from "react-router-dom";
import Hoc from "../Hoc/Hoc";
import Sidebar from "../sidebarComponent/Sidebar";
import Tab from "./Tabs";
import classes from './product.module.css'
const Product = (props) => {
  return (
    <>
      {!props.selector && <Navigate to="/" replace={true} />}
      <div className={classes.product_main_div}>
        <div>{<Sidebar />}</div>
        <div>{<Tab/>}</div>
      </div>
    </>
  );
};
export default Hoc(Product);
