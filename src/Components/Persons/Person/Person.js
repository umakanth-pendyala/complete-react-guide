import React from "react";
import "./Person.css";
import Radium from "radium";
import styled from "styled-components";

const StyledPara = styled.p`
  color: green;

  @media (max-width: 500px) {
    color: red;
    font-weight: bold;
    font-size: 40px;
  }
`;

const StyledDiv = styled.div`
  width: 400px;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 40px;
`;

const person = (props) => {
  // const style = {
  //   "@media (max-width: 500px)": {
  //     backgroundColor: "red",
  //     fontWeight: "bold",
  //   },
  // };
  return (
    // <div className="Person">

    <StyledDiv>
      <StyledPara onClick={props.click}>
        Hi! my name is {props.name} and my age is {props.age}
      </StyledPara>
      <p>{props.children}</p>
      <input type="text" onChange={props.nameChanged} value={props.name} />
    </StyledDiv>
    // </div>
  );
};

export default Radium(person);
