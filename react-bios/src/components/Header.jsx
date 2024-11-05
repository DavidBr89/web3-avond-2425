import React from "react";

import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

import {
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdOutlineHome,
} from "react-icons/md";

import { FaJedi } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="bg-emerald-800 p-4 flex justify-between items-center">
      <img className="w-20" src={logo} />
      <div className="flex gap-8 text-3xl mr-4">
        {/* <a href="/">Home</a>
        <a href="/favorites">Favorieten</a> */}

        {/* Achter de schermen wordt dit vertaald naar een <a /> element maar zonder dat de pagina volledig ververst wordt. */}
        {/* <Link to="/">Home</Link> */}
        {/* TODO: Eventueel StyledNavLink components van maken -> herbruikbaar */}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white underline underline-offset-8"
              : "text-emerald-600"
          }
          to="/">
          <MdOutlineHome />
        </NavLink>
        {/* De NavLink zorgt ervoor dat je een functie in de className prop binnen krijgt -> Styling kunt aanpassen a.h.v. isActive boolean */}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white underline underline-offset-8"
              : "text-emerald-600"
          }
          to="/favorites">
          <MdOutlineFavoriteBorder />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white underline underline-offset-8"
              : "text-emerald-600"
          }
          to="/starwars">
          <FaJedi />
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
