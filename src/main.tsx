import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App"; // ou "./pages/App" si tu as laissé App dans /pages
import CGU from "./pages/CGU";
import Confidentialite from "./pages/Confidentialite";
import Contact from "./pages/CONTACT";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div className="p-10 text-center">Page introuvable</div>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
