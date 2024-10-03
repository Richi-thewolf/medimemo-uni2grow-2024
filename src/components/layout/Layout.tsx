import React from "react";
import "./Layout.css";
import { Outlet, useLocation } from "react-router-dom";
import { AppNavigation } from "../appNavigation/AppNavigation";

export function Layout() {
  const location = useLocation();
  const appNavigationRoutes = ["/medications/details", "/login", "/profil"];

  // Vérifie si le chemin actuel fait partie des routes avec navigation
  const showNavigation = !appNavigationRoutes.includes(location.pathname);

  return (
    <div className="container">
      <div className="panel">
        <Outlet />
      </div>
      {showNavigation && <AppNavigation />}
    </div>
  );
}
