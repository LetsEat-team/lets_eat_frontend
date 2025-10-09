import { useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";
import MainImage from "../../assets/Login/img_login_onboard.png";
import LetterImage from "../../assets/Login/img_login_letter.png";
import OnboardLetterImage from "../../assets/Login/img_onboard_letter.png";
import Letter from "../../components/Letter";


export default function LoginOnboardPage() {
  const navigate = useNavigate();

  const [showOverlay, setShowOverlay] = useState(false);
  const [showLetter, setShowLetter] = useState(false);


  const handleLetterClick = () => {
    setShowOverlay(true); // 오버레이 띄우기
  };

  useEffect(() => {
    if (!showOverlay) return;
    const t = setTimeout(() => setShowLetter(true), 500);
    return () => clearTimeout(t);
  }, [showOverlay]);

  return (
    <div className="relative flex flex-col justify-start min-h-screen w-full bg-gradient-to-b from-[#C5EDE0] to-white">
      {/* 메인 이미지 */}
      <img
        src={MainImage}
        className="w-full h-[400px] object-cover mt-[70px]"
        alt="메인 일러스트"
      />

      {/* 스킵 버튼 */}
      <button
        onClick={() => navigate("/main")}
        className="absolute top-[20px] right-[20px] w-[72px] h-[28px] px-3 py-[1px] 
                   rounded-full bg-[#5A6D64] text-white text-xs font-medium 
                   flex items-center justify-center gap-1"
      >
        SKIP <span className="text-lg leading-none">›</span>
      </button>

      {/* Letter 이미지 + 텍스트 */}
      <div className="flex flex-col items-center mt-8">
        {/* 말풍선 */}
        <div className="bg-[#898E8C] font-regular text-white text-[12px] px-4 py-1.5 rounded-md mb-3 relative">
          눌러보세요 👇
          {/* 말풍선 꼬리 */}
          <div className="absolute left-1/2 -bottom-1 w-2 h-2 bg-[#898E8C] rotate-45 transform -translate-x-1/2"></div>
        </div>

        {/* 편지 이미지 버튼 */}
        <button onClick={handleLetterClick}>
        <img src={LetterImage} className="w-[164px] h-[71px]" />
        </button>

         {/* 오버레이 */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-85 z-50 flex items-center justify-center">
          {/* 1) 500ms 동안은 안내 이미지 보여주기 */}
          {!showLetter && (
            <img
              src={OnboardLetterImage}
              alt="Onboard Letter"
              className="w-[300px] h-auto animate-fadeIn"
            />
          )}

          {/* 2) 500ms 뒤에 편지 표시 */}
          {showLetter && (
            <Letter
              title="냠냠마을 초대장"
              content={`안녕하세요,\n저는 남남마을의 이장인\n (캐릭터이름)이에요.\n저희 마을의 주민들이 \nOOO님을 기다리고 있어요!\n남남마을에 방문해서\n 주민들을 만나보시겠어요?`}
              onContinue={() => navigate("/login/onboard2")}
              onClose={() => {
                setShowLetter(false);
                setShowOverlay(false);
              }}
              className="w-[440px] max-w-[92vw] animate-slideUpFadeIn"
            />
          )}
        </div>
      )}
    </div>
    </div>
  );
}
