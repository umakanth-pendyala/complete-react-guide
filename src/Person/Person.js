import React from "react";
import "./Person.css";
import Radium from "radium";

const person = (props) => {
  const style = {
    "@media (max-width: 500px)": {
      fontSize: "30px",
      color: "red",
    },
  };

  return (
    <div className="Person">
      <p onClick={props.click} style={style}>
        Hi! my name is {props.name} and my age is {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.nameChanged} value={props.name} />
    </div>
  );
};

export default Radium(person);
