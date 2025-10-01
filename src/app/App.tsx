import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-dvh bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div>임시 상단바</div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
