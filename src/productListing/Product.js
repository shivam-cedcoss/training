import React from "react";
import { Navigate } from "react-router-dom";
import Hoc from "../Hoc/Hoc";
const Product = (props) => {
  return (
    <>
      {!props.selector && <Navigate to="/" replace={true} />}
      <div>
        <div>
            <div>Overview</div>
            <div>Listing</div>
            <div>Product Linking</div>
            <div>Settings</div>
            <div>FAQs</div>
            <div>Feeds</div>
            <div>Failed Order</div>
            <div>Edit Product</div>
        </div>
        <div></div>
      </div>
    </>
  );
};
export default Hoc(Product);
