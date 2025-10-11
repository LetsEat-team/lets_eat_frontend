import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import CharaTalk from "../../components/CharaTalk";
import character1 from "../../assets/Common/img_chief_lee.png";


export default function LoginOnBoard2() {
const navigate = useNavigate();

  const messages = [
    <>
    오! 밥박사님의 편지를 받으셨군요!{`\n`} 
    제가 <span className="text-maingreen">한식</span>을 준비한 주민의 가게를{`\n`}
    소개시켜드릴까요?{`\n`}
    </>
  ];

    const handleNext = () => {
      navigate("/shop/list");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={character1}
        className={ "w-[290px] h-[300px] mt-[60px] mb-[40px]"}
      />
      <div className="relative">
        <CharaTalk charName="캐릭터이름">{messages}</CharaTalk>

        {/* <button
        onClick={() => navigate("/")}
        className="absolute -top-[35px] right-0 w-[62px] h-[26] px-3 py-[1px] rounded-full bg-[#5A6D64] text-white text-sm font-medium flex items-center gap-1"
      >
        SKIP <span className="text-lg">›</span>
      </button> */}
      </div>

      {/* 버튼 */}
      <Button className="mt-[15px]" onClick={handleNext}>추천메뉴 보기
      </Button>
        <button
        onClick={() => navigate("/shop/list")}
        className="absolute left-1/2 -translate-x-1/2 bottom-[8px] underline underline-offset-4 text-textblack hover:opacity-80 text-[12px] font-semibold"
        >
        괜찮아요. 그냥 둘러볼게요.
        </button>
    </div>
  );
}
