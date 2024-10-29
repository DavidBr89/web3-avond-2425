import React from "react";

// Statische images importeren
import duneImg from "../assets/dune_poster.jpg";
import { useNavigate } from "react-router-dom";

import { MdOutlineFavoriteBorder } from "react-icons/md";

const MovieItem = ({ movie }) => {
  // Navigate hook gebruiken
  const navigate = useNavigate();

  return (
    <div
      className="shadow-xl rounded-xl overflow-clip transform duration-500 hover:scale-105 cursor-pointer relative"
      onClick={() => {
        navigate(`/details/${movie.id}`);
      }}>
      <button
        className="absolute top-4 right-4 p-2 bg-emerald-800 text-white text-2xl rounded-full"
        onClick={(event) => {
          console.log("Voeg film toe aan favoriet");
          // Stop hier de event bubbling -> anders ga ik navigeren

          // TODO: Voeg deze movie toe aan de favorieten

          event.stopPropagation();

          // event.preventDefault()
        }}>
        <MdOutlineFavoriteBorder />
      </button>
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
