import { useState } from "react";
import Button from "../components/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);

    // 아주 단순한 클라이언트 검증
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMsg("올바른 이메일을 입력해 주세요.");
      return;
    }
    if (!pw || pw.length < 6) {
      setMsg("비밀번호는 6자 이상이어야 합니다.");
      return;
    }
  }

  return (
    <section className="mx-auto max-w-md">
      <h1 className="text-3xl font-bold mb-6">로그인</h1>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">이메일</label>
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">비밀번호</label>
          <div className="relative">
            <input
              type={showPw ? "text" : "password"}
              value={pw}
              onChange={(e)=>setPw(e.target.value)}
              className="w-full rounded-xl border px-3 py-2 pr-12 outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="••••••••"
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={()=>setShowPw(v=>!v)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-gray-700"
            >
              {showPw ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <Button>회원가입</Button>


        {msg && (
          <p className="text-sm text-gray-600 bg-gray-50 border rounded-xl px-3 py-2">
            {msg}
          </p>
        )}
      </form>

      <p className="mt-6 text-sm text-gray-600">
        계정이 없나요? <a className="text-sky-700 underline underline-offset-2" href="#">회원가입</a>
      </p>
    </section>
  );
}
