import { Button, FormLayout, TextField } from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import classes from "./Login.module.css";
import Fetch from "../useFetch";
import { Navigate } from "react-router-dom";
import { checkLogin } from "./LoginSlice";
import Hoc from "../Hoc/Hoc";
import { Spinner } from "@shopify/polaris";
const Login = (props) => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const { fetchApi, loading, status } = Fetch();
  // Login function
  const userLogin = () => {
    let url = new URL(
      `https://fbapi.sellernext.com/user/login?username=${username}&password=${pass}`
    );
    let token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInJvbGUiOiJhcHAiLCJpYXQiOjE1MzkwNTk5NzgsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsImF1ZCI6ImV4YW1wbGUuY29tIiwibmJmIjoxNTM5MDU5OTc4LCJ0b2tlbl9pZCI6MTUzOTA1OTk3OH0.GRSNBwvFrYe4H7FBkDISVee27fNfd1LiocugSntzxAUq_PIioj4-fDnuKYh-WHsTdIFMHIbtyt-uNI1uStVPJQ4K2oYrR_OmVe5_zW4fetHyFmoOuoulR1htZlX8pDXHeybRMYlkk95nKZZAYQDB0Lpq8gxnTCOSITTDES0Jbs9MENwZWVLfyZk6vkMhMoIAtETDXdElIdWjP6W_Q1kdzhwqatnUyzOBTdjd_pt9ZkbHHYnv6gUWiQV1bifWpMO5BYsSGR-MW3VzLqsH4QetZ-DC_AuF4W2FvdjMRpHrsCgqlDL4I4ZgHJVp-iXGfpug3sJKx_2AJ_2aT1k5sQYOMA";
    fetchApi(url, token);
  };
  useEffect(() => {
    props.dispatch(checkLogin(status));
  }, [loading]);
  console.log(props.selector)
  return (
    <>
      {props.selector && <Navigate to="/product" replace={true} />}
      <div className={classes.main_div}>
        <FormLayout>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e)}
          />
          <TextField
            type="text"
            label="Password"
            value={pass}
            onChange={(e) => setPass(e)}
          />
          {loading ? (
            <Spinner accessibilityLabel="Spinner example" size="large" />
          ) : (
            <Button className="Polaris-Button" primary onClick={userLogin}>
              Submit
            </Button>
          )}
        </FormLayout>
      </div>
    </>
  );
};
export default Hoc(Login);
