import React from "react";
import Person from "./Person/Person.js";

const persons = (props) => {
  console.log(props.persons);
  return (
    <div>
      {props.persons.map((person, arrayIndex) => {
        return (
          <Person
            name={person.name}
            age={person.age}
            // click={props.deletePerson(arrayIndex)}
            click={() => {
              props.deletePerson(arrayIndex);
            }}
            //if key is included then the rendering of the data will be efficient
            key={person.id}
            nameChanged={(event) => {
              // this.nameChangeHandler(event, person.id);
              props.changeName(event, person.id);
            }}
          />
        );
      })}
    </div>
  );
};

export default persons;
