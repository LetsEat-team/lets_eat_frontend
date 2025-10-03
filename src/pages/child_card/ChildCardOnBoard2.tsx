import Button from "../../components/Button";
import cardExample from "../../assets/ChildCard/card-ex.png";
import { useOnboarding } from "../../contexts/OnBoardingContext";
import NumberCircle from "../../components/NumberCircle";
import { useNavigate } from "react-router-dom";

const ChildCardOnBoard2 = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/childcard/scan"); // ChildCardScan 페이지 경로
  };
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-white">

      <div className="flex flex-col items-center  text-center mt-6 flex-1">
        <h2 className="text-base font-semibold mb-2">
          카드 등록을 위해<br/>아동급식카드를 준비해주세요.
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          다음 화면에서 촬영을 진행합니다.
        </p>

        <img
          src={cardExample}
          alt="카드 예시"
          className="w-[283px] h-[144px] mb-10"
        />

        {/* 안내문 */}
        <ul className="px-6 space-y-4 text-center text-[16px] text-gray-500">
          <li className="flex">
            <NumberCircle number='1'className={["mt-1"]}/>
            <span className="ml-2">카드의 뒷면이 보이도록 놓아주세요. 어두운 바닥에 놓으면 더 잘 인식됩니다.</span>
          </li>
          <li className="flex">
            <NumberCircle number='2' className={["mt-1"]}/>
            <span className="ml-2">가이드 영역에 맞추어 반드시 아동급식카드 원본으로 촬영해주세요.</span>
          </li>
          <li className="flex">
            <NumberCircle number='3' className={["mt-1"]}/>
            <span className="ml-2">빛이 반사되지 않도록 주의해주세요. 훼손이 심한 카드는 거절될 수도 있어요.</span>
          </li>
        </ul>
        <Button onClick={handleNext} className="w-[335px] mt-10 bg-maingreen">
          다음 단계
        </Button>
      </div>
    </div>
  );
};

export default ChildCardOnBoard2;
