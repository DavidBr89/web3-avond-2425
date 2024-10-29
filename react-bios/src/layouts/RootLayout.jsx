import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow">
        {/* CONTENT -> Geïnjecteerd via react-router-dom */}
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
