import React, { useContext } from "react";
import { useFavorites } from "../contexts/FavoritesContext";
import MovieItem from "../components/MovieItem";

const FavoritesPage = () => {
  // Favorites context gebruiken

  const { favorites } = useFavorites();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 m-8">
      {favorites.length === 0 && <p>Geen favorieten gevonden</p>}
      {favorites.map((f) => (
        <MovieItem key={f.id} movie={f} canNavigate={false} />
      ))}
    </div>
  );
};

export default FavoritesPage;
