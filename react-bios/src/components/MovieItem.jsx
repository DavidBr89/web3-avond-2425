import React from "react";

// Statische images importeren
import duneImg from "../assets/dune_poster.jpg";

const MovieItem = ({ movie }) => {
  return (
    <div className="shadow-xl rounded-xl overflow-clip transform duration-500 hover:scale-105 cursor-pointer">
      <img
        src={new URL(`../assets/${movie.poster_path}`, import.meta.url)}
        alt=""
      />
      <div className="p-4 h-20">
        <p className="font-black text-xl">{movie.title}</p>
        <p className="font-thin">{movie.genres.join(", ")}</p>
      </div>
    </div>
  );
};

export default MovieItem;
