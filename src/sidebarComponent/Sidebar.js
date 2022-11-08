import React from "react";
import classes from "./sidebar.module.css";
import { Frame, Navigation, Text } from "@shopify/polaris";
const Sidebar = () => {
  return (
    <>
      <div className={classes.sidebar_div}>
        <Frame>
          <Navigation location="/" ariaLabelledBy="label-id">
            <Text variant="bodySm" as="span" visuallyHidden>
              <p id="label-id">Hidden label</p>
            </Text>
            <Navigation.Section
              items={[
                {
                  url: "/path/to/place",
                  label: "Overview",
                },
                {
                  url: "/path/to/place",
                  label: "Listing",
                },
                {
                  url: "/path/to/place",
                  label: "Product Linking",
                },
                {
                  url: "/path/to/place",
                  label: "Settings",
                },
                {
                  url: "/path/to/place",
                  label: "FAQs",
                },
                {
                  url: "/path/to/place",
                  label: "Feeds",
                },
                {
                  url: "/path/to/place",
                  label: "Failed Order",
                },
                {
                  url: "/path/to/place",
                  label: "Edit Product",
                },
              ]}
            />
          </Navigation>
        </Frame>
      </div>
    </>
  );
};
export default Sidebar;
