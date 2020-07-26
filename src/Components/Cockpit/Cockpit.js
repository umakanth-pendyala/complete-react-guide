import React from "react";
import "./Cockpit.css";
import styled from "styled-components";

const Cockpit = (props) => {
  const ButtonStyle = styled.button`
    padding: 8px;
    font: inherit;
    border: 2px solid black;
    cursor: pointer;
    background: ${(props) => (props.colorInfo ? "red" : "green")};
    color: white;
    &:hover {
      background-color: ${(props) =>
        props.colorInfo ? "#ffcccb" : "lightgreen"};
    }
  `;

  const classes = [];
  // console.log(props.persons);

  if (props.persons.length <= 2) {
    classes.push("red");
  }
  if (props.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <div className="test">
      <h1 className={classes.join(" ")}>{props.heading}</h1>
      <ButtonStyle
        colorInfo={props.shouldIShowPersons}
        onClick={props.executeTogglePersonsMethod}
      >
        Toggle Persons
      </ButtonStyle>
    </div>
  );
};

export default Cockpit;
