import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import CharaTalk from "../../components/CharaTalk";


export default function LoginOnBoard2() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  // 단계별 문구
  const messages = [
    <>
    와 초대에 응해주셔서 감사해요 ~{`\n`} 
    지금부터 냠냠마을에 대해 {`\n`} 소개해드릴게요!
    </>,
    <>
    우선 아동 급식 카드를 등록하면{`\n`} 
    냠냠패스를 받을 수 있어요
    </>,
    <>
    냠냠패스로 가게에서 메뉴를 구매하면{`\n`} 
    티켓을 받아요.{`\n`} 
    이 티켓만 있다면{`\n`} 
    주민들이 준비한 맛있는 음식을 먹을 수 있어요!
    </>,
    <>
    혹시 냠냠마을의 편의점에 가실 일이 있다면 {`\n`} 
    저를 불러주세요!{`\n`} 
    냠냠패스로 살 수 있는 편의점 품목을{`\n`} 
    알려드릴 수 있어요~
    </>,
    <>
    엇! 이분은 저희 마을의 영양사, {`\n`} 
    밥박사님이에요.{`\n`} 
    OOO님이 먹은 음식을 기록해, {`\n`} 
    영양 밸런스에 맞는 음식을 추천해주실거에요!
    </>,
    <>
    이제 냠냠마을로 떠나볼까요?{`\n`} 
    Let’s Eat!
    </>
  ];

  const handleNext = () => {
    if (step < messages.length - 1) {
      setStep(prev => prev + 1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {/* 캐릭터 이미지 */}
      <div className="w-[258px] h-[258px] mt-[71px] mb-[67px] rounded-full bg-gray-200"></div>

      <div className="relative">
        <CharaTalk charName="캐릭터이름">{messages[step]}</CharaTalk>

        <button
        onClick={() => navigate("/main")}
        className="absolute -top-[35px] right-0 w-[62px] h-[26] px-3 py-[1px] rounded-full bg-[#5A6D64] text-white text-sm font-medium flex items-center gap-1"
      >
        SKIP <span className="text-lg">›</span>
      </button>
      </div>


      {/* 버튼 */}
      <Button className="mt-[20px]" onClick={handleNext}>
        {step < messages.length - 1 ? "계속" : "GOGO!"}
      </Button>
    </div>
  );
}
