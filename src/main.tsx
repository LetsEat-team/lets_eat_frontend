import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes";
import { ThemeProvider } from "./contexts/ThemeContext";
import { OnboardingProvider } from "./contexts/OnBoardingContext";
import { UserProvider } from "./contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OnboardingProvider>
    <ThemeProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ThemeProvider>
    </OnboardingProvider>
  </React.StrictMode>
);
