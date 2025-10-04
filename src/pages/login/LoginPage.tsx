import Button from "../../components/Button";
import EyeIcon from "../../assets/Login/img_eye.png";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-[20px] py-[47px]">
      {/* 제목 영역 */}
      <div className="w-[335px] text-left mb-6">
        <p className="text-[16px] font-regular text-textBold">
          서비스 이용을 위해 로그인해주세요.
        </p>
        <h3 className="text-[22px] font-medium text-textBold">
          로그인 해주세요.
        </h3>
      </div>

      {/* 아이디 */}
      <div className="mt-[50px]"> 
        <label className="block text-sm font-medium text-gray-800 mb-2">
          아이디
        </label>
        <div className="relative w-[335px]">
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            className="w-full h-[43px] rounded-md border border-[#D7D7D7] px-3 text-[12px] bg-buttonGray"
          />
        </div>

        {/* 비밀번호 */}
        <label className="block text-sm font-medium text-gray-800 mb-2 mt-[24px]">
          비밀번호
        </label>
        <div className="relative w-[335px]">
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            className="w-full h-[43px] rounded-md border border-[#D7D7D7] px-3 pr-10 text-[12px] bg-buttonGray"
          />
          {/* 비밀번호 보기 아이콘 */}
          <img
            src={EyeIcon}
            alt="비밀번호 보기"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-3 cursor-pointer"
          />
        </div>

        <div className="space-y-3 text-sm text-gray-700 mt-2">
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4 border-[#D7D7D7] text-[12px] accent-buttonBlack" />
              <span>아이디 저장</span>
            </label>
                <div className="flex items-center space-x-2">
                <button
                    type="button"
                    className="text-[#4D4947] underline text-[10px]"
                >
                    아이디 찾기
                </button>
                <button
                    type="button"
                    className="text-[#4D4947] underline text-[10px]"
                >
                    비밀번호 찾기
                </button>
                </div>
          </div>
        </div>

      </div>
      {/* 로그인 버튼 */}
      <Button className="mt-[103px] w-[335px]">로그인</Button>

      {/* 회원가입 링크 */}
      <p className="mt-6 text-sm text-[#9D9896]">
        아직 회원이 아니신가요?{" "}
        <a href="/signup" className="text-black font-medium underline">
          회원가입하기
        </a>
      </p>
    </div>
  );
}
