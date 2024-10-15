import React from "react";

const Courses = (props) => {
  // PROPS -> Object
  // { courses: [...], children: [] }

  return (
    <ul>
      {props.courses.map((o) => (
        // KEY is beter om een unieke identifier te kiezen en probeer zo weinig mogelijk om de index te gebruiken
        // Want kan problemen geven met het delete keyword in JS

        // TODO: Verplaats dit li element in een nieuwe CourseItem component en zorg er natuurlijk voor dat de code nog steeds werkt.
        <li key={o.id}>{o.name}</li>
      ))}
    </ul>
  );
};

export default Courses;
