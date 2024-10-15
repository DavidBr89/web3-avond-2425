import React, { useState } from "react";
import MyButton from "./MyButton";

const Counter = () => {
  //   let counter = 0;

  //   Array met twee elementen
  //      Element 1 (idx 0) => Huidige state
  //      Element 2 (idx 1) => Updater functie voor state aan te passen
  //    STATE MOET JE ALTIJD IMMUTABLE AANPAKKEN -> Originele data wordt niet gewijzigd
  //          React moet kunnen afleiden of er iets veranderd is aan onze data -> Ik moet rerenderen
  const [counter, setCounter] = useState(0);

  return (
    <div className="border-2 p-4 m-4 ">
      <h1>Counter component</h1>
      <p>{counter}</p>
      <MyButton
        label="-"
        onClick={() => {
          //   counter -= 1;
          //   Asynchrone uitvoering
          setCounter(counter - 1);
          //   Je hebt hier nooit de huidige state maar wel de vorige
          console.log(counter);
          //   Refresh nu de UI
        }}>
        -
      </MyButton>
      <MyButton
        label="+"
        onClick={() => {
          // Asynchrone uitvoering

          const newCounter = counter + 1;

          setCounter(newCounter);
          console.log(newCounter);
          //   Refresh nu de UI
        }}>
        +
      </MyButton>

      {/* TODO: Zorg ervoor dat de counter waarde als op de voeg toe geklikt wordt, toegevoegd wordt aan de geschiedenis */}
      {/* Array van counter waardes */}
      <div className="border-2 p-4 m-4">
        <p>Geschiedenis:</p>
        <MyButton>Voeg toe aan geschiedenis</MyButton>

        {/* TODO: Geschiedenis tonen aan de hand van ul met li */}
      </div>
    </div>
  );
};

export default Counter;
