import ChildCard from "../pages/child_card/ChildCard";
import ChildCardOnBoard from "../pages/child_card/ChildCardOnBoard";
import { useOnboarding } from "../contexts/OnBoardingContext";

export default function ChildCardWrapper() {
  const { needsOnboarding } = useOnboarding();

  if (needsOnboarding("childcard")) {
    return <ChildCardOnBoard />;
  }
  return <ChildCard />;
}
