import React, { useState } from "react";
import "./Accordion.css";
const Accordian = ({ data, index = 1 }) => {
  const [cardIsVisible, setCardIsVisible] = useState(data.open);
  return (
    <div className="container accordian">
      <div
        className="container__details"
        onClick={() => {
          setCardIsVisible((prev) => !prev);
          data.open = !data.open;
        }}
      >
        <p className={cardIsVisible ? "name--active" : null}>
          {index}: {data.person}:- {data.name}
        </p>
        <button
          className={
            cardIsVisible
              ? "accordion-btn"
              : "accordion-btn accordian--icon-down"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2c127a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      </div>
      {cardIsVisible ? (
        <div className="container__card">
          <ul className="container__card--list">
            <li>
              <span>Name:-</span> <span>{data.name}</span>
            </li>
            <li>
              <span>Address:-</span> <span>{data.address}</span>
            </li>
            <li>
              <span>Age:-</span> <span>{data.age}</span>
            </li>
            <li>
              <span>Count of Children:- </span>{" "}
              <span>{data.children ? data.children.length : 0}</span>
            </li>
          </ul>
          {data.children?.map((item, i) => (
            <Accordian key={i} data={item} index={`${index}.${1 + i}`} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Accordian;
