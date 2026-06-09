import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Home.css";
import "./Portfolio.css";
import About from "./About.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <About />
  </StrictMode>,
);
