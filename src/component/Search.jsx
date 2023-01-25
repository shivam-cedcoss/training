import React, { useState } from "react";

const array = [
  {
    label: "Colours",
    group: [
      { value: "vanilla", label: "Vanilla" },
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "salted-caramel", label: "Salted Caramel" },
    ],
  },
  {
    label: "Flavours",
    group: [
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

const Search = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(array);

  const handleChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value === "") {
      setResult(array);
    } else {
      let filteredArray = JSON.parse(JSON.stringify(array));
      filteredArray = filteredArray.filter((item) => {
        item.group = item.group.filter((obj) =>
          obj.label.toLowerCase().includes(event.target.value.toLowerCase())
        );
        return item.group.length > 0;
      });
      setResult(filteredArray);
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        value={search}
        placeholder="Search"
      />
      {result.map((item, index) => (
        <div key={index}>
          <h2>{item.label}</h2>
          {item.group.map((obj, i) => (
            <div key={i}>
              <p>{obj.label}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Search;
