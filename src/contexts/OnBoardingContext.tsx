import { createContext, useContext, useState, type ReactNode } from "react";

type OnboardingStatus = {
  [key: string]: boolean; // 예: { childcard: true, convycard: false }
};

type OnboardingContextType = {
  onboardingStatus: OnboardingStatus;
  needsOnboarding: (key: string) => boolean;
  completeOnboarding: (key: string) => void;
};

const STORAGE_PREFIX = "onboarded_";

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [onboardingStatus, setOnboardingStatus] = useState<OnboardingStatus>(() => {
    // 로컬스토리지에 저장된 키값들을 기반으로 객체 상태 생성
    // 예: onboarded_childcard = 'true'
    const keys = ["childcard", "convycard"]; // 관리할 온보딩 종류 키 목록 추가 가능
    const status: OnboardingStatus = {};
    keys.forEach((key) => {
      status[key] = localStorage.getItem(STORAGE_PREFIX + key) === "true";
    });
    return status;
  });

  const needsOnboarding = (key: string) => {
    return !onboardingStatus[key];
  };

  const completeOnboarding = (key: string) => {
    localStorage.setItem(STORAGE_PREFIX + key, "true");
    setOnboardingStatus((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  return (
    <OnboardingContext.Provider value={{ onboardingStatus, needsOnboarding, completeOnboarding }}>
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
