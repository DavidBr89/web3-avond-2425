import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// Externe stylesheet
import "./index.css";
import DarkModeContextProvider from "./contexts/DarkModeContext.jsx";
import Movies from "./components/Movies.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import { AppBar } from "@mui/material";
import Courses from "./components/Courses.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

// STAP 1: Aanmaken van onze BrowserRouter
const browserRouter = createBrowserRouter([
  // Route object
  {
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    // Route objecten gaan nesten -> children
    children: [
      {
        path: "/",
        element: <MoviesPage />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        path: "details",
        // Lokale fouten element terug te geven
        // errorElement: <DetailNotFoundPage />,
        children: [
          {
            index: true,
            // path: "",
            element: <App />,
          },
          {
            // : -> dynamisch segment in uw pad te hebben -> parameters
            // /details/:id
            path: ":id",
            element: <DetailsPage />,
          },
          // /details/test
          {
            path: "test",
            element: <Courses courses={[]} />,
          },
        ],
      },
    ],
  },
]);

// Niet meer gebruiken
{
  /* <Routes>
  <Route path="" component={} />
  <Route path="" component={} />
</Routes> */
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeContextProvider defaultValue={true}>
      {/* STAP 2: RouterProvider gebruiken en uw browserRouter object meegeven aan de router prop */}
      <RouterProvider router={browserRouter} />
    </DarkModeContextProvider>
  </StrictMode>
);
