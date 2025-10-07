import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import CharaTalk from "../../components/CharaTalk";
import character1 from "../../assets/Common/img_chief_lee.png";
import character2 from "../../assets/Common/img_doctor_bob.png";


export default function LoginOnBoard2() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  // 단계별 문구
  const messages = [
    <>
    와 초대에 응해주셔서 감사해요 ~{`\n`} 
    지금부터 <span className="text-maingreen">냠냠마음</span>
    에 대해 {`\n`} 소개해드릴게요!
    </>,
    <>
    우선 <span className="text-maingreen">아동 급식 카드</span>를 등록하면{`\n`} 
    <span className="text-maingreen">냠냠 패스</span>를 받을 수 있어요
    </>,
    <>
    냠냠패스로 가게에서 <span className="text-maingreen">메뉴를 구매하면</span>{`\n`} 
    <span className="text-maingreen">티켓</span>을 받아요.{`\n`} 
    이 티켓만 있다면{`\n`} 
    주민들이 준비한 <span className="text-maingreen">맛있는 음식</span>을 먹을 수 있어요!
    </>,
    <>
    혹시 냠냠마을의 편의점에 가실 일이 있다면 {`\n`} 
    저를 불러주세요!{`\n`} 
    냠냠패스로 <span className="text-maingreen">살 수 있는 편의점 품목</span>을{`\n`} 
    알려드릴 수 있어요~
    </>,
    <>
    엇! 이분은 저희 마을의 영양사, {`\n`} 
    <span className="text-maingreen">밥박사님</span>이에요.{`\n`} 
    OOO님이 먹은 음식을 기록해, {`\n`} 
    <span className="text-maingreen">영양 밸런스</span>에 맞는 음식을 <span className="text-maingreen">추천</span>해주실거에요!
    </>,
    <>
    이제 냠냠마을로 떠나볼까요?{`\n`} 
    Let’s Eat!
    </>
  ];

    const handleNext = () => {
    if (step < messages.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      navigate("/main");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {/* 캐릭터 이미지 */}
      <img
        src={step === 4 ? character2 : character1}
        className={
          step === 4
            ? "w-[200px] h-[250px] mt-[90px] mb-[70px]" 
            : "w-[290px] h-[300px] mt-[70px] mb-[40px]" 
        }
      />
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
