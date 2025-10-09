import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import CharaTalk from "../../components/CharaTalk";
import Charater from "../../assets/Char/eejang.png"


export default function ConvyOnBoard() {
  const navigate = useNavigate();

  const goOnboard2 = () => {
    navigate("/convy/onboard2");
  };
  return (
    <div className="flex flex-col justify-center items-center mt-[50px]">
        <div className="mt-[71px] mb-[67px]">
          <img
            src={Charater}
            alt="character"
            className="w-[258px] h-[258px]"
          />
        </div>
      <CharaTalk charName="이장, 바비장">
        {`카메라로 `}<span className="text-maingreen">편의점에서 파는 물건</span> 
        {`을 찍어보세요. \n`}<span className="text-maingreen">구매 가능 여부</span>
        {`를 알려드릴게요!`}
      </CharaTalk>
      <Button onClick={goOnboard2} className="mt-[20px]">확인하기</Button>
    </div>
  );
}
