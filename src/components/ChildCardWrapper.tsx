import ChildCard from "../pages/child_card/ChildCard";
import ChildCardOnBoard from "../pages/child_card/ChildCardOnBoard";

export default function ChildCardWrapper() {
  const needsOnboarding = true;

  if (needsOnboarding) {
    return <ChildCardOnBoard  />;
  }
  return <ChildCard />;
}

