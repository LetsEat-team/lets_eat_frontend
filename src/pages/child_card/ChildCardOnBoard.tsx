import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import CharaTalk from "../../components/CharaTalk";


export default function ChildCardOnBoard() {
  const navigate = useNavigate();

  const goOnboard2 = () => {
    navigate("/childcard/onboard2");
  };
  return (
    <div className="flex flex-col justify-center items-center mt-[50px]">
      <div className="w-[258px] h-[258px] mt-[71px] mb-[67px] rounded-full bg-gray-200"></div>
      <CharaTalk charName="캐릭터이름">{`아동급식카드를 등록하면 `} 
        <span className="text-maingreen">냠냠패스</span>
        {`가 생겨요!\n`}<span className="text-maingreen">냠냠패스</span>
        {`로 메뉴를 구매하고\n가게에 보여줄 `}
        <span className="text-maingreen">티켓</span>
        {`을 받아봐요~`}
      </CharaTalk>
      <Button onClick={goOnboard2} className="mt-[20px]">카드 등록하기</Button>
    </div>
  );
}
