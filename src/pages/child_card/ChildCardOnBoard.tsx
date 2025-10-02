import CharaTalk from "../../components/CharaTalk";

type ChildCardOnBoardProps = {
  onFinish: () => void;  //onBoarding 끝났는지 여부
};

export default function ChildCardOnBoard({ onFinish }: ChildCardOnBoardProps) {

  return (
    <div>
      <h2>환영합니다!</h2>
      <CharaTalk>{`아동급식카드를 등록하면 `} 
        <span className="text-maingreen">냠냠패스</span>
        {`가 생겨요!\n`}<span className="text-maingreen">냠냠패스</span>
        {`로 메뉴를 구매하고\n가게에 보여줄 `}
        <span className="text-maingreen">방문증</span>
        {`을 받아봐요~`}
      </CharaTalk>
      <button onClick={onFinish}>온보딩 완료</button>
    </div>
  );
}
