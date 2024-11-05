import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

// Provider aanmaken

import React from "react";

const FavoritesContextProvider = (props) => {
  // Als je een functie meegeeft als initiële waarde in een useState -> wordt die automatisch opgeroepen -> maar wel maar 1 keer enkel bij het mounten van onze component
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Localstorage -> side effect
  // useEffect(() => {
  //   const storedFavorites = localStorage.getItem("favorites");
  //   const storedParsed = storedFavorites ? JSON.parse(storedFavorites) : [];

  //   setFavorites(storedParsed);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("favorites", JSON.stringify(favorites));
  // }, [favorites]);

  const toggleFavorites = (movie) => {
    // Als het movie object al in de favorites staat inzit dan moet je deze verwijderen -> Zoniet is het toevoegen
    // .includes methode -> werkt enkel voor literals -> strings, numbers, booleans, ...

    // Met de findIndex methode -> -1 als het element er niet inzit
    const foundIdx = favorites.findIndex((f) => f.id === movie.id);

    let updateState = [];

    if (favorites.some((f) => f.id === movie.id)) {
      updateState = favorites.filter((f) => f.id !== movie.id);
    } else {
      updateState = [...favorites, movie];
    }
    // Asynchrone code -> set van uw state
    setFavorites(updateState);
    localStorage.setItem("favorites", JSON.stringify(updateState));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites: favorites, toggleFavorites: toggleFavorites }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;

export const useFavorites = () => useContext(FavoritesContext);
