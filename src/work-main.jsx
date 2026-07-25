import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Portfolio.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Home.css";
import Work from "./Work.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Work />
  </StrictMode>,
);
