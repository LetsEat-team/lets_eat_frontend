import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useLayoutEffect, useState } from "react";
import MenuIcon from "../assets/TopBar/img_menu.png";
import BackIcon from "../assets/TopBar/img_left.png";
import TopbarLogo from "../assets/TopBar/img_logo_sample.png";
import OwnerSidebar from "../components/Sidebar/OwnerSidebar";
import UserSidebar from "../components/Sidebar/UserSidebar";
import SidebarOverlay from "../components/SidebarOverlay";

// 경로별 테마 매핑
const routeThemeMap: Record<string, "green" | "white"> = {
  "/childcard": "white",
  "/login/onboard2": "green",
  "/childcard/onboard1": "green",
  "/convy/onboard1": "green",
  "/shop/onboard1": "green",
  "/shop/onboard2": "green",
};

export default function App() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // ✅ 경로에 따라 테마 적용
  useLayoutEffect(() => {
    const themeForPath = routeThemeMap[location.pathname] || "white";
    setTheme({ bgTheme: themeForPath });
  }, [location.pathname, setTheme]);

  const bgStyle =
    theme.bgTheme === "green"
      ? { background: "linear-gradient(to bottom, #C5EDE0 22%, #ffffff 90%)" }
      : { background: "#E2E2E250" };

    const menuIconRoutes = ["/login", "/childcard", "/convy", "/owner", "/store"];

    const isMenuPage = menuIconRoutes.some(route => location.pathname.startsWith(route));


  // ✅ 헤더 숨김 처리할 경로
  const hideHeaderRoutes = ["/childcard/scan", "/convy/scan"];
  const isHeaderHidden = hideHeaderRoutes.includes(location.pathname);

  // ✅ 헤더 제목
  const headerTitleMap: Record<string, string> = {
    "/childcard": "아동 카드 등록",
    "/childcard/scan": "카드 스캔",
    "/childcard/upload": "카드 등록",
    "/login/onboard2": "카드 등록",
    "/login": "로그인",
  };

  // ✅ 경로에 따라 사이드바 종류 결정
  const isOwnerRoute = ["/owner", "/store", "/event"].some((path) =>
    location.pathname.startsWith(path)
  );
  const SidebarComponent = isOwnerRoute ? OwnerSidebar : UserSidebar;

  return (
    <div style={bgStyle} className="min-h-screen text-gray-900 font-mplus1 relative">
      {/* ✅ 헤더 */}
      {!isHeaderHidden && (
        <header className="border-b bg-white w-full h-[51px] fixed top-0 left-0 z-80">
          <div className="flex items-center justify-between w-full h-full px-4 relative">
            {isMenuPage ? (
              <img
                src={MenuIcon}
                alt="menu"
                className="w-6 h-6 cursor-pointer"
                onClick={() => setSidebarOpen(true)} // ✅ 사이드바 열기
              />
            ) : (
              <img
                src={BackIcon}
                alt="back"
                className="w-6 h-6 cursor-pointer"
                onClick={() => navigate(-1)}
              />
            )}

            <div className="absolute left-1/2 transform -translate-x-1/2 font-bold">
              {headerTitleMap[location.pathname] || (
                <img src={TopbarLogo} className="h-6" />
              )}
            </div>
          </div>
        </header>
      )}

      {/* ✅ 사이드바 + 오버레이 */}
      <SidebarOverlay
        isOpen={isSidebarOpen}
        onClick={() => setSidebarOpen(false)}
      />
      {isSidebarOpen && <SidebarComponent onClose={() => setSidebarOpen(false)} />}

      {/* ✅ 메인 콘텐츠 */}
      <main className="max-w-5xl mx-auto pt-[51px]">
        <Outlet />
      </main>
    </div>
  );
}
