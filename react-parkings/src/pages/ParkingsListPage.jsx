import React from "react";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchParkings } from "../api";

const ParkingsListPage = () => {
  // Dit zou waarschijnlijk in een andere component staan, zodanig dat je de data al kan opvragen op voorhand
  const queryClient = useQueryClient();
  queryClient.prefetchQuery(["fetchParkings"]);

  // RQ: Om een nieuwe request te kunnen versturen
  const {
    data: axiosResponse,
    isLoading,
    isError,
    error,
    dataUpdatedAt,
    refetch,
  } = useQuery({
    queryKey: ["fetchParkings"],
    queryFn: fetchParkings,
    // Uw request om de 5 min opvragen
    refetchInterval: 5 * 60 * 1000,
    // Dit is om het automatisch versturen van de request te stoppen bij het mounten van uw component
    enabled: false,
    initialData: {
      data: {
        results: [],
      },
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <p>{new Date(dataUpdatedAt).toLocaleString()}</p>
      {axiosResponse.data.results.map((p) => (
        <div className="border p-2 rounded-xl" key={p.id}>
          <h1 className="text-2xl font-bold">{p.name}</h1>
          <p>
            {p.availablecapacity} / {p.totalcapacity}
          </p>
        </div>
      ))}
      <button
        className="bg-purple-900 text-white px-4 py-2 rounded-lg"
        onClick={refetch}>
        Haal gegevens op
      </button>
    </div>
  );
};

export default ParkingsListPage;
