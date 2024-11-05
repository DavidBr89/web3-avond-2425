import React, { useEffect, useState } from "react";

// Axios importeren
import Axios from "axios";

const StarWarsPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // OPTIE 1: standaard ingebouwde fetch API

  // GET request
  //   const fetchMovies = async () => {
  //     try {
  //       const response = await fetch("https://swapi.dev/api/films");
  //       // Readable stream om te zetten naar JSON
  //       const data = await response.json();

  //       setMovies(data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  // useEffect(() => {
  //   // Externe functie om data op te halen
  //   // fetchMovies();

  //   // Inline functie om data op te halen -> enkel als je dit wilt gebruiken in uw useEffect (nergens daarbuiten)
  //   // const fetchData = async () => {
  //   //   try {
  //   //     const response = await fetch("https://swapi.dev/api/films");
  //   //     // Readable stream om te zetten naar JSON
  //   //     const data = await response.json();

  //   //     setMovies(data.results);
  //   //   } catch (error) {
  //   //     console.log(error);
  //   //   }
  //   // };

  //   // fetchData();

  //   // Self invoking function
  //   // (async () => {})()
  //   setIsLoading(true);
  //   (async () => {
  //     try {
  //       const response = await fetch("https://swapi.dev/api/films");
  //       // Readable stream om te zetten naar JSON
  //       const data = await response.json();

  //     // //   POST request
  //     // const postResponse = await fetch("https://swapi.dev/api/films", {
  //     //     method: "POST",
  //     //     body: JSON.stringify({ fName: "David", lName: "Breckx" })
  //     //  });

  //     //  const postData = await postResponse.json();

  //       setMovies(data.results);
  //     } catch (error) {
  //       // console.log(error);
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   })();
  // }, []);

  //   Achter de schermen gaat een async functie -> Promise returnen
  // return new Promise();

  //   OPTIE 2: gebruik makend van het Axios package
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await Axios.get("https://swapi.dev/api/films");

        // // POST request
        // const postResponse = await Axios.post("https://swapi.dev/api/films", {
        //   fName: "David",
        //   lName: "Breckx",
        // });
        // const postData = postResponse.data

        setMovies(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <p className="animate-pulse m-4">Loading...</p>;
  }

  if (error) {
    return <p>Er is een fout opgetreden.</p>;
  }

  return (
    <div className="p-4">
      {/* Conditioneel renderen in JSX -> ternary expression " condition ? true case : false case " */}
      {movies.map((m) => (
        <p key={m.episode_id}>{m.title}</p>
      ))}
    </div>
  );
};

export default StarWarsPage;
