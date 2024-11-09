import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/Global.css";
import App from "./Pages/App.tsx";
import Providers from "./Authentication/providers.tsx";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <StrictMode>
        <Providers>
          <App />
        </Providers>
      </StrictMode>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found. Unable to render the application.");
}
