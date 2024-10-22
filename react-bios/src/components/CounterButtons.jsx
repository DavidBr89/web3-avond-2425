import React from "react";
import MyButton from "./MyButton";

const CounterButtons = (props) => {
  const { updateCounter } = props;

  return (
    <>
      <MyButton
        label="-"
        onClick={() => {
          //   counter -= 1;
          //   Asynchrone uitvoering
          updateCounter((currentState) => currentState - 1);
          //   Je hebt hier nooit de huidige state maar wel de vorige
          //   console.log(counter);
          //   Refresh nu de UI
        }}>
        -
      </MyButton>
      <MyButton
        label="+"
        onClick={() => {
          // Asynchrone uitvoering

          //   const newCounter = counter + 1;

          updateCounter((currentState) => currentState + 1);
          //   console.log(newCounter);
          //   Refresh nu de UI
        }}>
        +
      </MyButton>
    </>
  );
};

export default CounterButtons;
