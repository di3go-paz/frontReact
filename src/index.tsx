import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterApp } from "./router"; // <--- Importa el enrutador
import { AuthProvider } from "./auth";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterApp />
    </AuthProvider>
  </React.StrictMode>
);
