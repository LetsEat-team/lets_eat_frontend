import { useEffect, useState } from 'react';

export function useOnboardingCheck() {
  const [needsOnboarding, setNeedsOnboarding] = useState(false);
  useEffect(() => {
    //const needOnboarding = !localStorage.getItem('child_card_onboarded'); //값이 없으면 false
    //setNeedsOnboarding(needOnboarding);
    setNeedsOnboarding(true);
  }, []);

  const completeOnboarding = () => {
    localStorage.setItem('child_card_onboarded', 'true');
    setNeedsOnboarding(false);
  };

  return { needsOnboarding, completeOnboarding };
}
