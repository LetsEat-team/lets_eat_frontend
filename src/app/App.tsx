import { Outlet } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

export default function App() {
  const { theme } = useTheme();
  const bgStyle =
    theme.bgTheme === "green"
      ? { background: "linear-gradient(to bottom, #04C97E, #ffffff)" } // maingreen -> white
      : { background: "#ffffff" };

  return (
    <div style={{ minHeight: "100dvh", ...bgStyle }} className="text-gray-900">
      <header className="border-b bg-white">
        <div>임시 상단바</div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
