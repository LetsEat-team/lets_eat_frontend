import { useOnboardingCheck } from "../hooks/useOnboardingCheck";
import ChildCard from "../pages/child_card/ChildCard";
import ChildCardOnBoard from "../pages/child_card/ChildCardOnBoard";

export default function ChildCardWrapper() {
  const { needsOnboarding, completeOnboarding } = useOnboardingCheck();
  if (needsOnboarding) {
    return <ChildCardOnBoard onFinish={completeOnboarding} />;
  }
  return <ChildCard />;
}
