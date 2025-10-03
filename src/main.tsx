import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes";
import { ThemeProvider } from "./contexts/ThemeContext";
import { OnboardingProvider } from "./contexts/OnBoardingContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OnboardingProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
    </OnboardingProvider>
  </React.StrictMode>
);
