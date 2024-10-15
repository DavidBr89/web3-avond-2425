import React from "react";
import CourseItem from "./CourseItem";

// Externe CSS module importeren
import styles from "./Courses.module.css";

// Hier krijg je de props binnen die je dan kan gebruiken in deze component - Opgelet altijd een object
const Courses = (props) => {
  // PROPS -> Object
  // { courses: [...], children: [] }

  return (
    <ul className={styles.title}>
      {props.courses.map((o) => (
        // KEY is beter om een unieke identifier te kiezen en probeer zo weinig mogelijk om de index te gebruiken
        // Want kan problemen geven met het delete keyword in JS

        // TODO: Verplaats dit li element in een nieuwe CourseItem component en zorg er natuurlijk voor dat de code nog steeds werkt.
        <CourseItem key={o.id} student={o} />
      ))}
    </ul>
  );
};

export default Courses;
