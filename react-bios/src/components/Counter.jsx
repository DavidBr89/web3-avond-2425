import React, { useEffect, useRef, useState } from "react";
import MyButton from "./MyButton";
import CounterButtons from "./CounterButtons";

const Counter = () => {
  //   let counter = 0;

  //   Array met twee elementen
  //      Element 1 (idx 0) => Huidige state
  //      Element 2 (idx 1) => Updater functie voor state aan te passen
  //    STATE MOET JE ALTIJD IMMUTABLE AANPAKKEN -> Originele data wordt niet gewijzigd
  //          React moet kunnen afleiden of er iets veranderd is aan onze data -> Ik moet rerenderen
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);

  // const [total, setTotal] = useState(0);

  // useEffect - Type 1
  // Reageren op het mounten van deze component -> useEffect -> side effects
  useEffect(() => {
    console.log("useEffect Type 1");
  });

  // useEffect - Type 2
  // Om code éénmalig uit te voeren bij de eerste mount van deze component
  useEffect(() => {
    console.log("useEffect Type 2");
  }, []);

  // useEffect - Type 2a
  useEffect(() => {
    console.log("useEffect Type 2a");
  }, [history]);

  // Hiervoor dient niet de useEffect hook -> enkel voor side effects
  // useEffect(() => {
  //   const totalOfHistory = history.reduce((acc, val) => acc + val, 0);
  //   setTotal(totalOfHistory);
  // }, [history]);

  // useEffect - Type 3
  useEffect(() => {
    // Side effect - Browser API
    // Afsluiten of interval gaan stoppen
    const timerId = setInterval(() => {
      setCounter(counter + 1);
      // console.log(counter);
    }, 1000);

    // Deze functie is een soort van cleanup -> connecties te sluiten, timers te stoppen, listeners te stoppen
    return () => {
      clearInterval(timerId);
    };
  }, [counter]);

  const totalOfHistory = history.reduce((acc, val) => acc + val, 0);

  // useRef hook -> Referentie aanmaken meestal met een bepaald JSX element
  // STAP 1 -> Referentie aan te maken -> useRef
  const inputRef = useRef();
  // de useRef geeft een object terug met een current property in =>  { current: undefined }

  // TYPE  2
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="border-2 p-4 m-4 ">
      <h1>Counter component</h1>
      <p>{counter}</p>

      <CounterButtons updateCounter={setCounter} />

      <div className="m-8">
        <input
          // STAP 2 -> Koppeling van de referentie met uw JSX element
          ref={inputRef}
          className="border rounded-lg px-4 py-2"
          type="text"
          placeholder="Naam vak"
        />
      </div>

      {/* Array van counter waardes */}
      <div className="border-2 p-4 m-4">
        <p>Geschiedenis:</p>
        <MyButton
          onClick={() => {
            // State moet altijd immutable aangepakt worden -> push methodes mogen niet gebruikt worden
            setHistory([...history, counter]);
          }}>
          Voeg toe aan geschiedenis
        </MyButton>

        <ul>
          {history.map((h, idx) => (
            <li key={idx}>{h}</li>
          ))}
        </ul>

        <p>De som van alle elementen uit de geschiedenis: {totalOfHistory}</p>
      </div>
    </div>
  );
};

export default Counter;
