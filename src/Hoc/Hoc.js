import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Hoc = (WrappedComponent) => {
  function Hoc1(props) {
    const selector = useSelector((state) => state.login.status);
    const dispatch = useDispatch();
    return (
      <>
        <WrappedComponent selector={selector} dispatch={dispatch} {...props} />
      </>
    );
  }
  return Hoc1;
};
export default Hoc;
