import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useLayoutEffect } from "react";
import MenuIcon from "../assets/TopBar/img_menu.png";
import BackIcon from "../assets/TopBar/img_left.png";
import TopbarLogo from "../assets/TopBar/img_logo_sample.png"

// 경로별 테마 매핑
const routeThemeMap: Record<string, "green" | "white"> = {
  "/childcard": "green",
  "/login/onboard2": "green",
  // 추가 경로는 계속 작성
};

// 메뉴 아이콘이 표시될 페이지 경로
const menuIconRoutes = ["/login",];

export default function App() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();


  // 경로 변경 시 테마 변경
  useLayoutEffect(() => {
    const themeForPath = routeThemeMap[location.pathname] || "white";
    setTheme({ bgTheme: themeForPath });
  }, [location.pathname, setTheme]);

  const bgStyle =
    theme.bgTheme === "green"
      ? {   background: "linear-gradient(to bottom, #C5EDE0 0%, #C5EDE0 22%, #ffffff 100%)"} // #C5EDE0 → white
      : { background: "#F9F9F9" };
  

  const isMenuPage = menuIconRoutes.includes(location.pathname);

  // 헤더를 숨길 경로 목록 추가
  const hideHeaderRoutes = [
    "/childcard/scan",
    // 필요에 따라 추가 경로 작성 가능
  ];

  const isHeaderHidden = hideHeaderRoutes.includes(location.pathname);


  return (
    <div style={bgStyle} className="min-h-dvh text-gray-900 font-mplus1">
         {/* 헤더 조건부 렌더링 */}
      {!isHeaderHidden && (
        <header className="border-b bg-white w-full h-[51px]">
          <div className="flex items-center justify-between w-full h-full px-4 relative">
            {isMenuPage ? (
              <img src={MenuIcon} alt="menu" className="w-6 h-6" />
            ) : (
              <img
                src={BackIcon}
                alt="back"
                className="w-6 h-6 cursor-pointer"
                onClick={() => navigate(-1)}
              />
            )}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <img src={TopbarLogo} className="h-6" />
            </div>
          </div>
        </header>
      )}

      <main className="max-w-5xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
