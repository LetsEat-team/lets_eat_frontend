import Button from "../../components/Button";
import CharaTalk from "../../components/CharaTalk";

type ChildCardOnBoardProps = {
  onFinish: () => void;  //onBoarding 끝났는지 여부
};

export default function ChildCardOnBoard({ onFinish }: ChildCardOnBoardProps) {

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[258px] h-[258px] mt-[71px] mb-[67px] rounded-full bg-gray-200"></div>
      <CharaTalk charName="캐릭터이름">{`아동급식카드를 등록하면 `} 
        <span className="text-maingreen">냠냠패스</span>
        {`가 생겨요!\n`}<span className="text-maingreen">냠냠패스</span>
        {`로 메뉴를 구매하고\n가게에 보여줄 `}
        <span className="text-maingreen">티켓</span>
        {`을 받아봐요~`}
      </CharaTalk>
      <Button onClick={onFinish} className="mt-[20px]">둘러보기</Button>
    </div>
  );
}
