import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import movies from "../utils/films.json";

const DetailsPage = () => {
  // De id uithalen uit mijn parameters
  const { id } = useParams();
  const navigate = useNavigate();

  //   Film opzoeken a.h.v. mijn id dat binnenkomt via de params - Request versturen naar uw API met die id om de details op te vragen
  const foundMovie = movies.find((m) => m.id === Number.parseInt(id));

  //   Conditioneel renderen
  if (foundMovie === undefined) {
    return <p>Er is geen film gevonden met deze id.</p>;
  }

  return (
    <div>
      <img
        className="h-96 w-full object-cover"
        src={new URL(`../assets/${foundMovie.backdrop_path}`, import.meta.url)}
        alt=""
      />
      <div className="p-4">
        <h1 className="text-3xl font-black text-emerald-800">
          {foundMovie.title}
        </h1>
        {/* TODO: Andere properties gebruiken in paragrafen of andere elementen */}
        <Link className="font-thin uppercase text-emerald-800" to={-1}>
          Ga terug
        </Link>

        {/* <button
          onClick={() => {
            navigate(-1);
          }}>
          Ga terug (BTN)
        </button> */}
      </div>
    </div>
  );
};

export default DetailsPage;
