import React, { Component, useState } from "react";
// import logo from "./logo.svg";
import Person from "./Person/Person.js";
import "./App.css";
import Radium, { StyleRoot } from "radium";

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
    const buttonStyle = {
      padding: "8px",
      font: "inherit",
      border: "2px solid green",
      cursor: "pointer",
      backgroundColor: "green",
      color: "white",
      ":hover": {
        backgroundColor: "lightgreen",
      },
    };

    let persons = null;

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, arrayIndex) => {
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
          })}
        </div>
      );

      buttonStyle.backgroundColor = "red";
      buttonStyle[":hover"] = {
        backgroundColor: "#ffcccb",
      };
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1 className={classes.join(" ")}>Hi i am react app</h1>
          <button
            style={buttonStyle}
            // onClick={() => this.switchNameHandler("laxmana")}
            onClick={this.togglePersonsHandler}
          >
            Toggle persons
          </button>

          {persons}
        </div>
      </StyleRoot>
    );
  }
}
export default Radium(App);

/* 

******************************* Helper notes ***************************************

map method returns a new array, which can be stored into a different const/variable and then returned
or it can be returned without being stored into a new variable.


<Person
  //this way is recomended
  click={this.switchNameHandler.bind(this, "new name")}
  name={this.state.persons[0].name}
  age={this.state.persons[0].age}
/>
<Person
  name={this.state.persons[1].name}
  age={this.state.persons[1].age}
  nameChanged={this.nameChangeHandler}
/>
<Person
  name={this.state.persons[2].name}
  age={this.state.persons[2].age}
>
  {this.state.messageByLaxman}
</Person> 



*******************************

*/

/*
 ********************
 ********************
 ********************
 ********************
 ********************
 ********************
 ********************
 ********************
 ********************
 ********************
 ********************
 ********************
 ********************
 ********************
 */

// if you want to use functional components
// const app = (props) => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: "umakanth", age: 19 },
//       { name: "sriram", age: 23 },
//       { name: "laxman", age: 15 },
//     ],
//     messageByLaxman: "i am younger than both of you",
//   });

//   const switchNameHandler = () => {
//     setPersonState({
//       persons: [
//         { name: "rama", age: 19 },
//         { name: "rama", age: 19 },
//         { name: "rama", age: 19 },
//       ],
//       messageByLaxman: "i am elder than both of you",
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi i am react app</h1>
//       <button onClick={switchNameHandler}> Switch name </button>
//       <Person
//         name={personState.persons[0].name}
//         age={personState.persons[0].age}
//       />
//       <Person
//         name={personState.persons[1].name}
//         age={personState.persons[1].age}
//       />
//       <Person
//         name={personState.persons[2].name}
//         age={personState.persons[2].age}
//       >
//         {personState.messageByLaxman}
//       </Person>
//     </div>
//   );
// };

// export default app;
