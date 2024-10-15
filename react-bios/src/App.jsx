// Importeren van een dependency/third party package
import React from "react";
// Externe stylesheet
import "./App.css";
import Courses from "./components/Courses";
import { Button } from "@mui/material";
import MyButton from "./components/MyButton";
import Counter from "./components/Counter";

// Manier in Web 2
// const subTitle = document.querySelector("#subTitle");
// subTitle.textContent = "React & Node.js";

// Function component
function App() {
  const subTitle = "React & Node.js";

  const courses = ["Web 1", "Web 2", "Web 3"];
  const objects = [
    { id: "1", name: "Web 1" },
    { id: "2", name: "Web 2" },
    { id: "3", name: "Web 3" },
  ];

  // Dit was de manier in Web 2 -> Dus niet meer te gebruiken in React
  // const myBtn = document.querySelector("#myBtn");
  // myBtn.addEventListener("click", () => {
  //   console.log("Geklikt op de knop");
  // });

  const handleClick = (event) => {
    console.log("Er is geklikt op de knop! ", event.target);
  };

  // JSX
  return (
    // React Fragment
    <div className="p-4">
      <h1 className="title">Web 3</h1>
      {/* Commentaar */}
      <h3
        // Inline styles - JavaScript object -> Toegang tot alle CSS properties
        style={{
          color: "red",
          backgroundColor: "yellow",
          padding: 14,
        }}
        id="subTitle">
        {subTitle}
      </h3>

      <Counter />

      {/* PROPS Meegeven aan de hand van een attribuut, je mag zelf de naam kiezen */}
      <Courses courses={objects} />

      <MyButton label="Klik mij (APP)" onClick={handleClick}>
        <>
          <div>
            <p>Klik mij (APP)</p>
          </div>
          <div>
            <p> Test</p>
          </div>
        </>
      </MyButton>

      {/* <button>Test gmegemogemogeg</button>

      <p>Material Button</p>
      <Button variant="outlined">KLIK MIJ (MUI)</Button> */}

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam
        eveniet repudiandae, rerum perferendis accusantium vero repellat quis
        debitis ab autem ratione. Vero, velit rerum deserunt mollitia
        consequuntur atque vel.
      </p>
      <p>
        Corporis nemo inventore libero eum delectus voluptates, aperiam nisi
        illo voluptas reiciendis. Provident animi dignissimos consequatur,
        repellendus nam earum cumque nobis velit iure officia delectus, at
        temporibus. Eaque, ad omnis!
      </p>
      <p>
        Corrupti vero dolore minus illum possimus accusamus soluta veritatis
        autem eligendi, adipisci quia in commodi iure, magnam doloribus! Ex
        nesciunt rerum possimus, velit ducimus pariatur vitae? Inventore
        consectetur aliquam et.
      </p>
    </div>
  );
}

export default App;

// // Class component
// class App extends React.Component {

// }
