import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ParkingsListPage from "./pages/ParkingsListPage.jsx";
import ParkingsMapPage from "./pages/ParkingsMapPage.jsx";
import AddProfilePage from "./pages/AddProfilePage.jsx";
import AddProfileWithFormikPage from "./pages/AddProfileWithFormikPage.jsx";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <ParkingsListPage />,
  },
  {
    path: "/map",
    element: <ParkingsMapPage />,
  },
  // Manuele manier om te werken met formulieren
  // {
  //   path: "/add",
  //   element: <AddProfilePage />,
  // },
  {
    path: "/add",
    element: <AddProfileWithFormikPage />,
  },
]);

// RQ: Aanmaken van een nieuwe React Query Client
const client = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* RQ: Het gebruiken van uw QueryClientProvider => queryClient meegeven die je eerder gemaakt hebt */}
    <QueryClientProvider client={client}>
      <RouterProvider router={browserRouter} />
    </QueryClientProvider>
  </StrictMode>
);
