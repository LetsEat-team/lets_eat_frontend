import { Outlet, useLocation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useLayoutEffect } from "react";

// 경로별 테마 매핑
const routeThemeMap: Record<string, "green" | "white"> = {
  "/childcard": "green",
  // 추가 경로는 계속 작성
};

export default function App() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  // 경로 변경 시 테마 변경
  useLayoutEffect(() => {
    const themeForPath = routeThemeMap[location.pathname] || "white";
    setTheme({ bgTheme: themeForPath });
  }, [location.pathname, setTheme]);

  const bgStyle =
    theme.bgTheme === "green"
      ? { background: "linear-gradient(to bottom, #04C97E, #ffffff)" } // maingreen → white
      : { background: "#ffffff" };

  return (
    <div style={bgStyle} className="min-h-dvh text-gray-900">
      <header className="border-b bg-white">
        <div>임시 상단바</div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
