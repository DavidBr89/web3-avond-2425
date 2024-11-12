import React from "react";
import { NavLink } from "react-router-dom";

const StyledNavLink = ({ navTo, children }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-white underline underline-offset-8"
          : "text-emerald-600"
      }
      to={navTo}>
      {children}
    </NavLink>
  );
};

export default StyledNavLink;
