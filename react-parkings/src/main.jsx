import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ParkingsListPage from "./pages/ParkingsListPage.jsx";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <ParkingsListPage />,
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
