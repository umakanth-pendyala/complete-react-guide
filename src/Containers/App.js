import React, { Component, useState } from "react";
import styled from "styled-components";

import Person from "../Components/Persons/Person/Person.js";
import Cockpit from "../Components/Cockpit/Cockpit.js";
import Persons from "../Components/Persons/Persons.js";
import "./App.css";

// import Radium, { StyleRoot } from "radium";

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

class App extends Component {
  state = {
    persons: [
      { id: "as", name: "umakanth", age: 19 },
      { id: "ab", name: "sriram", age: 23 },
      { id: "ac", name: "laxman", age: 15 },
    ],
    messageByLaxman: "i am smaller than both of you",
    showPersons: true,
  };

  switchNameHandler = (newName) => {
    // setState method come from class name Component which is imported from the 'react' lib
    this.setState({
      //new values wont work you can update only existing state through setstate.
      persons: [
        { name: newName, age: 30 },
        { name: "rama", age: 30 },
        { name: "rama", age: 30 },
      ],
    });
    console.log(this.state);
  };

  nameChangeHandler = (event, id) => {
    //get index with the help of id
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    //get the person object with the help of its index,
    //as the object and arrays in js are reference types its good to use spred operator on arrays and objects.
    const person = {
      ...this.state.persons[personIndex],
    };
    //update the person name to the new name.
    person.name = event.target.value;

    //assign the updated person object to the array of persons in state
    const personsCopy = [...this.state.persons];
    personsCopy[personIndex] = person;

    //now assign the updated persons array to the initial(1st) array of persons in state object
    this.setState({
      persons: personsCopy,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = !this.state.showPersons;

    this.setState({
      showPersons: doesShow,
    });
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    // const buttonStyle = {
    //   padding: "8px",
    //   font: "inherit",
    //   border: "2px solid green",
    //   cursor: "pointer",
    //   backgroundColor: "green",
    //   color: "white",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //   },
    // };

    let persons = null;

    // const classes = [];

    // if (this.state.persons.length <= 2) {
    //   classes.push("red");
    // }

    // if (this.state.persons.length <= 1) {
    //   classes.push("bold");
    // }

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            deletePerson={this.deletePersonHandler}
            changeName={this.nameChangeHandler}
          />

          {/* {this.state.persons.map((person, arrayIndex) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, arrayIndex)}
                //if key is included then the rendering of the data will be efficient
                key={person.id}
                nameChanged={(event) => {
                  this.nameChangeHandler(event, person.id);
                }}
              />
            );
          })} */}
        </div>
      );

      // buttonStyle.backgroundColor = "red";
      // buttonStyle[":hover"] = {
      //   backgroundColor: "#ffcccb",
      // };
    }

    return (
      <div className="App">
        {/* <h1 className={classes.join(" ")}>Hi i am react app</h1> */}
        <Cockpit
          heading="Hi i am react app"
          shouldIShowPersons={this.state.showPersons}
          executeTogglePersonsMethod={this.togglePersonsHandler}
          persons={this.state.persons}
        />
        {/* <ButtonStyle
          colorInfo={this.state.showPersons}
          // onClick={() => this.switchNameHandler("laxmana")}
          onClick={this.togglePersonsHandler}
        >
          Toggle persons
        </ButtonStyle> */}
        {persons}
      </div>
    );
  }
}
// export default Radium(App);
export default App;
