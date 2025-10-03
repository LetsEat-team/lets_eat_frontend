import Button from "../../components/Button";
import cardExample from "../../assets/ChildCard/card-ex.png";
import { useOnboarding } from "../../contexts/OnBoardingContext";

const ChildCardOnBoard2 = () => {
  const { completeOnboarding } = useOnboarding();

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-white">

      {/* 본문 */}
      <div className="flex flex-col items-center px-6 text-center mt-6 flex-1">
        <h2 className="text-base font-semibold mb-2">
          카드 등록을 위해 아동급식카드를 준비해주세요.
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          다음 화면에서 촬영을 진행합니다.
        </p>

        {/* 가운데 카드+핸드폰 이미지 */}
        <img
          src={cardExample}
          alt="카드 예시"
          className="w-72 mb-8"
        />

        {/* 안내문 */}
        <ul className="space-y-4 text-left text-sm text-gray-500">
          <li>
            <span className="font-semibold mr-1">1</span>
            카드의 뒷면이 보이도록 놓아주세요. 어두운 바닥에 놓으면 더 잘 인식됩니다.
          </li>
          <li>
            <span className="font-semibold mr-1">2</span>
            가이드 영역에 맞추어 반드시 아동급식카드 원본으로 촬영해주세요.
          </li>
          <li>
            <span className="font-semibold mr-1">3</span>
            빛이 반사되지 않도록 주의해주세요. 훼손이 심한 카드는 거절될 수도 있어요.
          </li>
        </ul>
      </div>

      {/* 버튼 */}
      <div className="w-full px-6 py-4">
        <Button onClick={completeOnboarding} className="w-full">
          다음 단계
        </Button>
      </div>
    </div>
  );
};

export default ChildCardOnBoard2;
