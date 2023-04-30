import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as AppRouter } from "react-router-dom";
import "./App.css";
import ContextNext from "./Context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppRouter>
    <ContextNext>
      <App />
    </ContextNext>
  </AppRouter>
);
