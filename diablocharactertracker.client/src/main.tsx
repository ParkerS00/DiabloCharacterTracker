import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/Global.css";
import App from "./App.tsx";
import Providers from "./Authentication/providers.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Providers>
        <App />
      </Providers>
    </StrictMode>
  );
} else {
  console.error("Root element not found. Unable to render the application.");
}
