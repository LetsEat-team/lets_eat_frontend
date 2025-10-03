
import cardExample from "@/assets/ChildCard/card-ex.png";
import Button from "../../components/Button";

const ChildCardUpload = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 헤더 */}
      <div className="w-full flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <button className="text-lg">←</button>
        <h1 className="text-base font-semibold">카드 등록</h1>
        <div className="w-5" />
      </div>

      {/* 본문 */}
      <div className="flex-1 px-6 py-6 overflow-y-auto">
        <h2 className="text-base font-semibold mb-2">카드 확인</h2>
        <p className="text-sm text-gray-500 mb-4">
          카드가 정상적으로 촬영되었나요? <br />
          인식된 정보가 틀리면 이용에 제한되오니 반드시 확인 및 수정해주세요.
        </p>

        {/* 카드 이미지 */}
        <div className="relative flex justify-center mb-6">
          <img src={cardExample} alt="카드 예시" className="w-72 rounded-lg shadow" />
          <div className="absolute bottom-2 right-6 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center">
            📷
          </div>
        </div>

        {/* 입력 폼 */}
        <div className="space-y-5">
          {/* 카드번호 */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">카드 확인</label>
            <div className="flex gap-2">
              {["5282", "5282", "5282", "5282"].map((num, i) => (
                <input
                  key={i}
                  value={num}
                  className="flex-1 border-b text-center text-lg outline-none"
                  readOnly
                />
              ))}
            </div>
          </div>

          {/* 만료일 */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">만료일</label>
            <input
              value="09 / 25"
              className="w-full border-b text-lg outline-none"
              readOnly
            />
          </div>

          {/* 보안코드 */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              보안코드(CVC/CVV)
            </label>
            <input
              value="712"
              className="w-full border-b text-lg outline-none"
              readOnly
            />
          </div>

          {/* 카드 선택 */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">카드 선택</label>
            <input
              value="부여군 꿈자람카드"
              className="w-full border rounded px-2 py-2"
              readOnly
            />
          </div>

          {/* 비밀번호 */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">비밀번호</label>
            <div className="flex gap-2">
              <input
                type="password"
                value="•"
                className="w-10 border-b text-center text-lg outline-none"
                readOnly
              />
              <input
                type="password"
                value="•"
                className="w-10 border-b text-center text-lg outline-none"
                readOnly
              />
              <input
                type="password"
                value="•"
                className="w-10 border-b text-center text-lg outline-none"
                readOnly
              />
              <input
                type="password"
                value="•"
                className="w-10 border-b text-center text-lg outline-none"
                readOnly
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
