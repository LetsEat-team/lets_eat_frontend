import cardExample from "../../assets/ChildCard/card-ex2.png";
import cameraEx from "../../assets/ChildCard/camera-ex.png"
import Button from "../../components/Button";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ToggleButton from "../../components/ToggleList";
import PasswordInput from "../../components/PasswordInput";
import Divider from "../../components/Divider";

const ChildCardUpload = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as {
    cardNum?: string;
    cardExpiry?: string;
    cardCVC?: string;
  } | null;

  // 초기 상태에 location state가 있으면 채움
  const [cardNum, setCardNum] = useState(state?.cardNum || "");
  const [expiry, setExpiry] = useState(state?.cardExpiry || "");
  const [securityCode, setSecurityCode] = useState(state?.cardCVC || "")
  const [cardType, setCardType] = useState("");
  const [password, setPassword] = useState("");
  
  const cardList = [
    "강릉시 아동급식카드",
    "강원특별자치도 꿈드림 카드",
    "경기도 G-Dream 카드",
    "경상남도 아동급식카드",
    "경상북도 아동급식카드",
    "광주광역시 아이꿈 카드",
    "대구광역시 아동급식카드",
    "대전광역시 아동급식카드",
    "부산광역시 행복드림카드",
    "서울특별시 꿈나무 카드",
    "세종특별자치시 아동급식카드",
    "울산광역시 아동급식카드",
    "인천광역시 아동급식카드",
    "전라남도 아동급식카드",
    "전라북도 아동급식카드",
    "제주특별자치도 아동급식카드",
    "충청남도 아동급식카드",
    "충청북도 아동급식카드",
    "춘천시 아동급식카드",
    "원주시 아동급식카드",
    "속초시 아동급식카드",
    "김해시 아동급식카드",
  ];

  const [isCardListVisible, setIsCardListVisible] = useState(false);
  const handleSelectCardType = (type: string | null) => {
    if (type) setCardType(type);
    setIsCardListVisible(false); // 카드 선택 시 닫음
  };

  const toggleCardList = () => {
    setIsCardListVisible(!isCardListVisible);
  };


  const formatCardNumber = (value: string) => {
    // 숫자만 남기기
    const digits = value.replace(/\D/g, "");
    // 4자리마다 - 추가 (최대 16자리)
    const matched = digits.match(/.{1,4}/g);
    if (!matched) return "";
    return matched.join("-");
  };
  // MM / YY 형식으로 포맷팅
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    // 숫자와 '/'만 허용하고, 공백 제거
    value = value.replace(/[^\d]/g, "");
    if (value.length > 4) {
      value = value.slice(0, 4);
    }
    // 2자리 입력 후 " / " 추가
    if (value.length > 2) {
      value = value.slice(0, 2) + " / " + value.slice(2);
    }

    setExpiry(value);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formatted = formatCardNumber(rawValue);
    setCardNum(formatted);
  };

  const handleSecurityCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecurityCode(e.target.value);
  };

  
  return (
    <div className="flex flex-col min-h-screen items-center mt-[32px] font-medium ">
      <div className="w-[287px] flex flex-col ">
        <h2 className="text-[16px] mb-2 text-center">카드 확인</h2>
        <p className="text-[12px] text-textgray2 mb-4 text-center">
          카드가 정상적으로 촬영되었나요? <br />
          인식된 정보가 틀리면 이용에 제한되오니<br />
          반드시 확인 및 수정해주세요.
        </p>

        {/* 카드 이미지 */}
        <div className="w-full relative flex justify-center items-center mb-8 mt-3">
          <div className="absolute bottom-[30px] text-white flex-col text-[11px]">
            <div>{cardNum || "0000 0000 0000 0000"}</div>
            <div><span>{expiry || "00/00"}</span><span className="ml-[10px]">{securityCode || "000"}</span></div>
          </div>
          <img src={cardExample} alt="카드 예시" className="w-[243.14px] h-[145.73px]" />
            <button
              onClick={() => navigate("/childcard/scan")}
              className="absolute -bottom-4 right-2 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
            >
              <img src={cameraEx} alt="카메라" className="w-[24px] h-[24px]"/>
            </button>
        </div>

        {/* 입력 폼 */}
        <div className="space-y-5">
          {/* 카드번호 */}
          <div>
            <label className="block text-sm text-[16px] text-textgray2 mb-1">카드 확인</label>
              <input
                type="text"
                value={cardNum}
                onChange={handleChange}
                maxLength={19} // 16자리 + 3개의 '-' 포함
                className="w-full text-left text-[16px] text-black outline-none bg-transparent"
                placeholder="0000-0000-0000-0000"
              />
          </div>
          <Divider/>
          {/* 만료일 */}
          <div>
            <label className="block text-sm text-textgray2 mb-1">만료일</label>
            <input
              value={expiry}
              onChange={handleExpiryChange}
              className="w-full text-[16px] text-black outline-none bg-transparent"
              placeholder="00/00"
            />
          </div>
          <Divider/>

          {/* 보안코드 */}
          <div>
            <label className="block text-sm text-textgray2 mb-1">
              보안코드(CVC/CVV)
            </label>
            <input
              value={securityCode}
              onChange={handleSecurityCodeChange}
              className="w-full text-[16px] text-black outline-none bg-transparent"
              placeholder="000"
            />
          </div>
          <Divider />

          {/* 카드 선택 */}
          <div>
            <label className="block text-sm text-textgray2 mb-2">카드 선택</label>
            
            <button
              className="w-full h-[43px] border border-gray-300 rounded-md flex items-center justify-between px-4 text-gray-400 text-[16px] font-medium"
              onClick={toggleCardList}
            >
                <span className={cardType ? "text-black" : "text-gray-400"}>
                  {cardType || "카드를 선택해주세요."}
                </span>
              <svg
                className="w-5 h-5 text-gray-400 transform transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                style={{ transform: isCardListVisible ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isCardListVisible && (
              <ToggleButton list={cardList} onToggle={handleSelectCardType} />
            )}
            
          <Divider/>
          </div>

          {/* 비밀번호 */}
          <div>
            <label className="block text-sm text-textgray2 mb-4">비밀번호</label>
            <div className="flex gap-2">
              <PasswordInput/>
              
            </div>
          </div>
          <Divider style={{ marginBottom: "30px" }}/>
        </div>
              {/* 하단 버튼 */}
        <Button className="w-full text-white" onClick={() => navigate("/childcard")}>카드 등록</Button>
      </div>
    </div>
  );
};

export default ChildCardUpload;
