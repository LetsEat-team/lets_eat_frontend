import cardExample from "../../assets/ChildCard/card-ex2.png";
import cameraEx from "../../assets/ChildCard/camera-ex.png"
import Button from "../../components/Button";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const ChildCardUpload = () => {
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
  const [cardType, setCardType] = useState("부여군 꿈자람카드");
  const [password, setPassword] = useState("•");

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
    <div className="flex flex-col min-h-screen mt-[32px]">
      <div className="flex flex-col items-center justify-center overflow-y-auto">
        <h2 className="font-medium text-[16px] font-semibold mb-2">카드 확인</h2>
        <p className="text-sm text-textgray2 mb-4 text-center">
          카드가 정상적으로 촬영되었나요? <br />
          인식된 정보가 틀리면 이용에 제한되오니<br />
          반드시 확인 및 수정해주세요.
        </p>

        {/* 카드 이미지 */}
        <div className="w-[243.14px] h-[145.73px] relative flex justify-center mb-8 mt-3">
          <img src={cardExample} alt="카드 예시" className="w-72 rounded-lg shadow" />
          <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center">
            <img src={cameraEx} alt="카메라" className="w-[24px] h-[24px]"/>
          </div>
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
                className="w-full border-b text-left text-[16px] text-black outline-none bg-transparent"
                placeholder="0000-0000-0000-0000"
              />
          </div>

          {/* 만료일 */}
          <div>
            <label className="block text-sm text-textgray2 mb-1">만료일</label>
            <input
              value={expiry}
              onChange={handleExpiryChange}
              className="w-full border-b text-[16px] text-black outline-none bg-transparent"
              placeholder="00/00"
            />
          </div>

          {/* 보안코드 */}
          <div>
            <label className="block text-sm text-textgray2 mb-1">
              보안코드(CVC/CVV)
            </label>
            <input
              value={securityCode}
              onChange={handleSecurityCodeChange}
              className="w-full border-b text-[16px] text-black outline-none bg-transparent"
              placeholder="000"
            />
          </div>

          {/* 카드 선택 */}
          <div>
            <label className="block text-sm text-textgray2 mb-1">카드 선택</label>
            <input
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
              className="w-full border rounded px-2 py-2 bg-transparent"
            />
          </div>

          {/* 비밀번호 */}
          <div>
            <label className="block text-sm text-textgray2 mb-1">비밀번호</label>
            <div className="flex gap-2">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-10 border-b text-center text-[16px] text-black outline-none bg-transparent"
              />
              
            </div>
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="px-6 py-4">
        <Button className="w-full bg-green-500 text-white">카드 등록</Button>
      </div>
    </div>
  );
};

export default ChildCardUpload;
