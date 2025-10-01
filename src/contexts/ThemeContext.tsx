import { createContext, useContext, useState } from "react";

// 테마 상태 타입
type ThemeState = {
  bgTheme: "green" | "white";
  // 나중에 추가 가능:
  // fontColor?: string;
  // buttonColor?: string;
  // darkMode?: boolean;
};

type ThemeContextType = {
  theme: ThemeState;
  setTheme: (theme: ThemeState) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeState>({ bgTheme: "white" });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
