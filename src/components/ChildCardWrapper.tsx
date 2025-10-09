import ChildCard from "../pages/child_card/ChildCard";
import { useOnboarding } from "../contexts/OnBoardingContext";
import { Navigate } from "react-router-dom";

export default function ChildCardWrapper() {
  const { needsOnboarding } = useOnboarding();

  if (needsOnboarding("childcard")) {
     return <Navigate to="/childcard/onboard1" replace />;
  }
  return <ChildCard />;
}
