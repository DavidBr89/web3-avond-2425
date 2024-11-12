import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { fetchParkings } from "../api";

const ParkingsMapPage = () => {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 51.05311004768356,
    longitude: 3.719727740000235,
  });

  useEffect(() => {
    // Navigator -> Browser API -> Side effect
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setCurrentLocation(position.coords);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const {
    data: axiosResponse,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["fetchParkings"],
    queryFn: fetchParkings,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MapContainer
        className="flex-grow"
        zoom={15}
        center={[currentLocation.latitude, currentLocation.longitude]}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker
          position={[currentLocation.latitude, currentLocation.longitude]}
        />

        {axiosResponse.data.results.map((p) => (
          <Marker
            key={p.id}
            position={[p.location.lat, p.location.lon]}
            title={p.name}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default ParkingsMapPage;
