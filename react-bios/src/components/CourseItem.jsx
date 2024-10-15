import React from "react";

const CourseItem = (props) => {
  // Destructuren vanuit een object
  const {
    student: { name },
  } = props;

  return <li>{name}</li>;
};

export default CourseItem;
