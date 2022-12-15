import React from "react";
import "@cedcommerce/ounce-ui/dist/index.css";
import {
  Button,
  Card,
  CheckBox,
  FlexLayout,
  FormElement,
  OverlappingImages,
  TextField,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import logo from "../logo.svg";
import "./Component1.css";
const Component1 = () => {
  return (
    <>
      <FlexLayout
        desktopWidth="50"
        mobileWidth="100"
        spacing="none"
        tabWidth="50"
      >
        <Card>
          <div className="container">
            <FlexLayout direction="vertical" spacing="loose">
              <div className="sub-container">
                <div>
                  <div>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 6.75556V0L1.02839 14.6389C0.462304 15.1924 0.457197 16.1016 1.01703 16.6615L3.55556 19.2"
                        fill="#2196F3"
                      />
                      <path
                        d="M16 6.75556V0L30.9716 14.6389C31.5377 15.1924 31.5428 16.1016 30.983 16.6615L28.4444 19.2"
                        fill="#1878C6"
                      />
                      <path
                        d="M3.55556 19.2L9.6 13.1556H16V19.2"
                        fill="#1565C0"
                      />
                      <path
                        d="M28.4444 19.2L22.4 13.1556H16V19.2"
                        fill="#10519D"
                      />
                      <path
                        d="M16 25.9556H9.95555L12.9778 22.7556L16 25.9556Z"
                        fill="#1565C0"
                      />
                      <path
                        d="M16 32L22.0444 25.9556L16 25.9556V32Z"
                        fill="#1878C6"
                      />
                      <path d="M16 32L9.95555 25.9556H16V32Z" fill="#2196F3" />
                      <path
                        d="M16 25.9556H22.0444L19.0222 22.7556L16 25.9556Z"
                        fill="#10519D"
                      />
                      <path
                        d="M7.72363 21.7502C7.18605 22.3085 7.19441 23.1944 7.74243 23.7424L9.95556 25.9556L16 19.5556V13.1556"
                        fill="#2196F3"
                      />
                      <path
                        d="M24.2764 21.7502C24.814 22.3085 24.8056 23.1944 24.2576 23.7424L22.0444 25.9556L16 19.5556V13.1556"
                        fill="#1878C6"
                      />
                    </svg>
                  </div>
                  <h1 className="signin-heading">Sign in</h1>
                  <h5>
                    Don't have an account? <a href="#sign">Sign up</a>
                  </h5>
                  <div className="alert-card">
                    You are browsing <b>Fuse Demo</b>. Click on the Sign in
                    button to access the Demo and Documentation.
                  </div>
                </div>

                <FormElement>
                  <TextField
                    name="Email address"
                    onChange={function noRefCheck() {}}
                    required
                  />
                  <TextField
                    name="Password"
                    onChange={function noRefCheck() {}}
                    required
                  />
                  <div className="forgot-password-div">
                    <FlexLayout direction="horizontal" halign="fill">
                      <CheckBox
                        id="three"
                        labelVal="Remember me"
                        onClick={function noRefCheck() {}}
                      />
                      <TextStyles>
                        <a href="#1">Forgot Password?</a>
                      </TextStyles>
                    </FlexLayout>
                  </div>
                  <div className="signin-btn">
                    <Button length="fullBtn">Sign in</Button>
                  </div>
                </FormElement>
                <div className="continue-with-div">
                  <div></div>
                  <p>Or continue with</p>
                </div>
                <div className="icons-div">
                  <FlexLayout halign="fill">
                    <Button
                      type="Outlined"
                      content={<i class="fa-brands fa-facebook-f"></i>}
                      thickness="large"
                      length="fullBtn"
                    />
                    <Button
                      type="Outlined"
                      content={<i class="fa-brands fa-twitter"></i>}
                      thickness="large"
                      length="fullBtn"
                    />
                    <Button
                      type="Outlined"
                      content={<i class="fa-brands fa-github"></i>}
                      thickness="large"
                      length="fullBtn"
                    />
                  </FlexLayout>
                </div>
              </div>
            </FlexLayout>
          </div>
        </Card>
        <div className="bg-img">
          <svg
            viewBox="0 0 960 540"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMax slice"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute inset-0 pointer-events-none ng-tns-c339-27"
          >
            <g
              fill="none"
              stroke="#232F41"
              stroke-width="100"
              class="text-gray-700 opacity-25 ng-tns-c339-27"
            >
              <circle r="234" cx="196" cy="23" class="ng-tns-c339-27"></circle>
              <circle r="234" cx="790" cy="491" class="ng-tns-c339-27"></circle>
            </g>
          </svg>
          <svg
            viewBox="0 0 220 192"
            width="180"
            height="152"
            fill="none"
            class="absolute -top-16 -right-16 text-gray-700 ng-tns-c339-27"
          >
            <defs class="ng-tns-c339-27">
              <pattern
                id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
                class="ng-tns-c339-27"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  fill="rgb(51 65 85)"
                  class="ng-tns-c339-27"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="220"
              height="192"
              fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
              class="ng-tns-c339-27"
            ></rect>
          </svg>
          <div className="setting-btn-div">
            <Button type="Danger">
              <img src={logo} alt="community-img" className="App-logo" />
            </Button>
          </div>
          <div style={{ maxWidth: "450px" }}>
            <FlexLayout direction="none" spacing="loose" valign="start">
              <h1>Welcome to our community</h1>
              <p className="community_para">
                Fuse helps developers to build organized and well coded
                dashboards full of beautiful and rich modules. Join us and start
                building your application today.
              </p>
              <div className="community-img-div">
                <FlexLayout wrap="noWrap">
                  <OverlappingImages>
                    <img
                      src="https://angular-material.fusetheme.com/assets/images/avatars/female-18.jpg"
                      alt="community-img"
                    />
                    <img
                      src="https://angular-material.fusetheme.com/assets/images/avatars/female-11.jpg"
                      alt="community-img"
                    />
                    <img
                      src="https://angular-material.fusetheme.com/assets/images/avatars/male-09.jpg"
                      alt="community-img"
                    />
                    <img
                      src="https://angular-material.fusetheme.com/assets/images/avatars/male-16.jpg"
                      alt="community-img"
                    />
                  </OverlappingImages>
                  <div className="join-para">
                    More than 17k people joined us, it's your turn
                  </div>
                </FlexLayout>
              </div>
            </FlexLayout>
          </div>
        </div>
      </FlexLayout>
    </>
  );
};
export default Component1;
