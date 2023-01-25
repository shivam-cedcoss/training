import React from "react";
import Progress from "./component/Progress";
import Search from "./component/Search";
import MultipleProgress from "./component/MultipleProgress";
import OTPInput from "./component/Otp.jsx";
import Select from "./component/Select";
import Movingindex from "./component/Movingindex";
import MultiSelect from "./component/MultiSelect";
const App = () => {
  // const options = ["Option 1", "Option 2", "Option 3"];
  const options = [
    {
      label: "This is Colors Heading",
      group: [
        { value: "ocean", label: "Ocean" },
        { value: "blue", label: "Blue" },
        { value: "purple", label: "Purple" },
        { value: "red", label: "Red" },
        { value: "orange", label: "Orange" },
        { value: "yellow", label: "Yellow" },
        { value: "green", label: "Green" },
        { value: "forest", label: "Forest" },
        { value: "slate", label: "Slate" },
        { value: "silver", label: "Silver" },
      ],
    },
    {
      label: "This is Chocolates Heading",
      group: [
        { value: "vanilla", label: "Vanilla" },
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "salted-caramel", label: "Salted Caramel" },
      ],
    },
    {
      label: "This is States Heading",
      group: [
        { value: "AL", label: "Alabama" },
        { value: "AK", label: "Alaska" },
        { value: "AS", label: "American Samoa" },
        { value: "AZ", label: "Arizona" },
        { value: "AR", label: "Arkansas" },
        { value: "CA", label: "California" },
        { value: "CO", label: "Colorado" },
        { value: "CT", label: "Connecticut" },
        { value: "DE", label: "Delaware" },
      ],
    },
  ];
  return (
    <>
      {/* <Search /> */}
      {/* <Progress /> */}
      {/* <MultipleProgress /> */}
      {/* <OTPInput/> */}
      {/* <Select options={options} /> */}
      <MultiSelect options={options} />
      {/* <Movingindex/> */}
    </>
  );
};

export default App;
