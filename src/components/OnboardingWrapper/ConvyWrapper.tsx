import { useOnboarding } from "../../contexts/OnBoardingContext";
import { Navigate } from "react-router-dom";
import ConvyScan from "../../pages/convy/ConvyScan";

export default function ConvyWrapper() {
  const { needsOnboarding } = useOnboarding();

  if (needsOnboarding("convy")) {
     return <Navigate to="/convy/onboard1" replace />;
  }
  return <ConvyScan />;
}
