import React from "react";

const MyButton = (props) => {
  const { label, onClick, children } = props;

  return (
    <button
      className="bg-sky-800 px-4 py-2 text-white rounded-2xl hover:bg-sky-600"
      onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;
