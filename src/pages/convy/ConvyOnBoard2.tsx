import Button from "../../components/Button";
import cardExample from "../../assets/Convy/ConvyCam.png";
import NumberCircle from "../../components/NumberCircle";
import { useNavigate } from "react-router-dom";
import ConvyListButton from "../../assets/Convy/ConvyList.png"
import { useMinHeightRealScreenMinusHeader } from "../../hooks/useMinHeightRealScreen";

const ConvyOnBoard2 = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/convy/scan"); 
  };
  useMinHeightRealScreenMinusHeader();
  return (
    <div className="flex flex-col items-center justify-between min-h-screen relative">
      <button onClick={()=>navigate("/convy/list")} className="absolute top-[10px] right-[10px]">
        <img src={ConvyListButton} alt="촬영한 사진" className="w-[24px] h-[24px]" />
      </button>
      <div className="flex flex-col items-center  text-center mt-6 ">
        <h2 className="text-base font-semibold mb-2">
          편의점에서 <br/>구매 가능한 품목을 찍어보세요
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
            <span className="ml-2">물건이 잘 보이도록놓아주세요.. 어두운 바닥에 놓으면 더 잘 인식됩니다.</span>
          </li>
          <li className="flex">
            <NumberCircle number='2' className={["mt-1"]}/>
            <span className="ml-2">가이드 영역에 맞추어 촬영해주세요.</span>
          </li>
          <li className="flex">
            <NumberCircle number='3' className={["mt-1"]}/>
            <span className="ml-2">빛이 반사되지 않도록 주의해주세요.</span>
          </li>
        </ul>
        <Button onClick={handleNext} className="w-[335px] mt-10">
          다음 단계
        </Button>
      </div>
    </div>
  );
};

export default ConvyOnBoard2;
