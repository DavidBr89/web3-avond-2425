import React from "react";

// Statische images importeren
import duneImg from "../assets/dune_poster.jpg";
import { useNavigate } from "react-router-dom";

import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { useFavorites } from "../contexts/FavoritesContext";

const MovieItem = ({ movie, canNavigate = true }) => {
  // Navigate hook gebruiken
  const navigate = useNavigate();

  const { toggleFavorites, favorites } = useFavorites();

  const isInFavorites = favorites.some((f) => f.id === movie.id);

  return (
    <div
      className="shadow-xl rounded-xl overflow-clip transform duration-500 hover:scale-105 cursor-pointer relative"
      onClick={() => {
        if (canNavigate) {
          navigate(`/details/${movie.id}`);
        }
      }}>
      <button
        className={`absolute top-4 right-4 p-2 ${
          isInFavorites ? "bg-red-600" : "bg-emerald-600"
        } text-white text-2xl rounded-full`}
        onClick={(event) => {
          console.log("Voeg film toe aan favoriet");
          // Stop hier de event bubbling -> anders ga ik navigeren
          toggleFavorites(movie);
          event.stopPropagation();

          // event.preventDefault()
        }}>
        {isInFavorites ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
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
