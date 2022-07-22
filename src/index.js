import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./services/Firebase";
import "./services/Firebase/Firestore";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
