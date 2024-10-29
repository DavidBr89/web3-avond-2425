import React from "react";

const LocationItem = ({ location }) => {
  return (
    <div className="flex justify-around items-center gap-8" key={location.id}>
      <img
        className="w-48"
        src={new URL(`../assets/${location.img}`, import.meta.url)}
        alt=""
      />
      <div>
        <p className="font-bold text-2xl text-white">{location.name}</p>
        <p>
          {location.address.street} {location.address.number}
        </p>
      </div>
    </div>
  );
};

export default LocationItem;
