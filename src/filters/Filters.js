import React from "react";
import { Button, Popover, ActionList, TextField, Icon } from "@shopify/polaris";
import { SearchMinor } from "@shopify/polaris-icons";
import { useState, useCallback } from "react";
import classes from "./Filter.module.css";
const Filters = () => {
  const [popoverActive, setPopoverActive] = useState(true);
  const [value, setValue] = useState("Jaded Pixel");

  const handleChange = useCallback((newValue) => setValue(newValue), []);
  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    []
  );

  const activator1 = (
    <Button onClick={togglePopoverActive} disclosure>
      More actions
    </Button>
  );
  const activator2 = (
    <Button onClick={togglePopoverActive} disclosure>
    Admin actions
    </Button>
  );
  return (
    <>
      <div className={classes.filter_main_div}>
        <div>
          <Button>Sync Status</Button>
        </div>
        <div>
          <Button>Amazon Lookup</Button>
        </div>
        <div>
          <Popover
            active={popoverActive}
            activator={activator1}
            autofocusTarget="first-node"
            onClose={togglePopoverActive}
          >
            <ActionList
              actionRole="menuitem"
              items={[{ content: "Import" }, { content: "Export" }]}
            />
          </Popover>
        </div>
      </div>
      <div className={classes.filter_subdiv}>
        <div>
          {" "}
          <TextField
            // value={value}
            prefix={<Icon source={SearchMinor} color="base" />}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Search with Title, Vendor, or Product"
          />
        </div>
        <div>
          <Button>More Filters</Button>
        </div>
        <div>
          <Popover
            active={popoverActive}
            activator={activator2}
            autofocusTarget="first-node"
            onClose={togglePopoverActive}
          >
            <ActionList
              actionRole="menuitem"
              items={[{ content: "Remove error tag" }, { content: "Remove process tag" },{content : "Remove status"},{content : "Remove product matching from amazon"},{content: "Remove products from Amazon listing"},{content:"Remove asin"}]}
            />
          </Popover>
        </div>
      </div>
    </>
  );
};
export default Filters;
