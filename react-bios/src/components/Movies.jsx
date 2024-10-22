import React from "react";

// Vite die gaat deze json importeren en eigenlijk ook omzetten naar JS
import movies from "../utils/films.json";
import MovieItem from "./MovieItem";
// Array met JS objecten

const Movies = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 m-8">
      {movies.map((m) => (
        <MovieItem key={m.id} movie={m} />
      ))}
    </div>
  );
};

export default Movies;
