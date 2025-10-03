import { createContext, useContext, useState, type ReactNode } from "react";

type OnboardingContextType = {
  needsOnboarding: boolean;
  completeOnboarding: () => void;
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [needsOnboarding, setNeedsOnboarding] = useState(() => {
    return !localStorage.getItem('child_card_onboarded');
  });

  const completeOnboarding = () => {
    localStorage.setItem('child_card_onboarded', 'true');
    setNeedsOnboarding(false);
  };

  return (
    <OnboardingContext.Provider value={{ needsOnboarding, completeOnboarding }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
};
