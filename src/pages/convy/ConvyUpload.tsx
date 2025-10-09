import { useLocation, useNavigate } from "react-router-dom";
import { useMinHeightRealScreen } from "../../hooks/useMinHeightRealScreen";
import CharaTalk from "../../components/CharaTalk";
import { useState } from "react";
import Button from "../../components/Button";

const ConvyUpload = () => {
   const navigate = useNavigate();
  const location = useLocation();
  const { product = "", imageBase64 = null } = location.state ?? {};
  const [isProhibited,_setIsProhibited] = useState(false)
  useMinHeightRealScreen();

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {imageBase64 && (
        <img src={imageBase64} alt="촬영한 사진" className="w-[288px] h-[181.8px] mt-[80px]" />
      )}
      <div className="w-[58px] h-[44px] mt-[15px] rounded-[50px] bg-[#26242360] text-white flex justify-center items-center">{product}</div>
      <div className="mt-[80px]">
        {isProhibited?(
        <CharaTalk charName="이장, 바비장">{`아쉽지만 `} 
          <span className="text-maingreen">{product}</span>
          {`는 구입할 수 없어요ㅠㅠ\n`}
          {`다른 품목을 찍어볼까요?`}
        </CharaTalk>
      ):
      (
        <CharaTalk charName="이장, 바비장">{`축하합니다~\n`}
        {product}{`은 구매 가능한 품목이에요!
              다른 품목을 더 찍어볼까요? `}
        </CharaTalk>
      )
      }
      </div>
      <Button onClick={()=>navigate("/convy/scan") } className="w-[335px] mt-3">
        사진 촬영하러 가기
      </Button>
    </div>
  );
};

export default ConvyUpload;
