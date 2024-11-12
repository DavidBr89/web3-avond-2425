import React from "react";

import { useQuery } from "@tanstack/react-query";
import { fetchParkings } from "../api";

const ParkingsListPage = () => {
  // RQ: Om een nieuwe request te kunnen versturen
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
    <div className="p-4 flex flex-col gap-4">
      {axiosResponse.data.results.map((p) => (
        <div className="border p-2 rounded-xl" key={p.id}>
          <h1 className="text-2xl font-bold">{p.name}</h1>
          <p>
            {p.availablecapacity} / {p.totalcapacity}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ParkingsListPage;
