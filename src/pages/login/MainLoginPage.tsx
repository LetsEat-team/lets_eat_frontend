import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function MainLoginPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-[20px] py-3">

      {/* 서비스명 */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-extrabold text-textbold">Let's eat</h1>
        <p className="text-sm text-textbold mt-2">
          Let's eat과 함께하는 즐거운 식사시간 샘플샘플
        </p>
      </div>

      {/* 이미지*/}
      <div className="mt-10 w-[335px] h-[254px] bg-gray-200 "></div>

      {/* 버튼 영역 */}
      <div className="mt-20 space-y-2 flex flex-col">
        <Button onClick={()=>navigate("/signup")}>회원가입</Button>
        <Button onClick={()=>navigate("/login")}>로그인</Button>
        <button
          type="button"
          onClick={() => navigate("/cony")}
          className="w-full rounded-xl bg-sky-600 text-white py-2 mt-3 hover:bg-sky-700"
        >
          편의점항목카드로 이동
        </button>
      </div>
    </div>

  );

}

