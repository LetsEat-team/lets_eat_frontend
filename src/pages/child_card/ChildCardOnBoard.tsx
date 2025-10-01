type ChildCardOnBoardProps = {
  onFinish: () => void;  //onBoarding 끝났는지 여부
};

export default function ChildCardOnBoard({ onFinish }: ChildCardOnBoardProps) {

  return (
    <div className="p-5 rounded-lg bg-[#F8F8F8E0] backdrop-blur-[27px] shadow-md">
      <h2>환영합니다!</h2>
      <p>처음 방문하셨군요. 온보딩 내용을 확인해 주세요.</p>
      <button onClick={onFinish}>온보딩 완료</button>
    </div>
  );
}
