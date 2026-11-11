import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Portfolio.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Home.css";
import Projects from "./Projects.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Projects />
  </StrictMode>,
);
