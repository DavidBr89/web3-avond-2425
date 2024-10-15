// Importeren van een dependency/third party package
import React from "react";
import "./App.css";
import Courses from "./components/Courses";

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

  // JSX
  return (
    // React Fragment
    <>
      <h1>Web 3</h1>
      {/* Commentaar */}
      <h3 id="subTitle">{subTitle}</h3>

      {/* PROPS Meegeven aan de hand van een attribuut, je mag zelf de naam kiezen */}
      <Courses courses={objects} />

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
    </>
  );
}

export default App;

// // Class component
// class App extends React.Component {

// }
