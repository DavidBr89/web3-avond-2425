import React from "react";

import locations from "../utils/locations.json";
import LocationItem from "./LocationItem";

const Footer = () => {
  return (
    <footer className="bg-emerald-800 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
        {locations.map((l) => (
          <LocationItem key={l.id} location={l} />
        ))}
      </div>
      <p className="text-center text-sm font-thin text-white">
        &copy; 2024 - Web3
      </p>
    </footer>
  );
};

export default Footer;
