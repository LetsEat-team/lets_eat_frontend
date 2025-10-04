import Button from "../../components/Button";
import EyeIcon from "../../assets/Login/img_eye.png";


export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-[20px] py-[30px]">
        {/* 제목 */}
      <h3 className="text-[22px] font-medium text-textbold mb-6 text-left w-[335px]">
        회원가입을 위한 <br /> 정보를 입력해주세요.
      </h3>

      <form className="w-[335px] space-y-5">
        {/* 닉네임 */}
        <div>
          <label className="block text-[14px] font-medium text-textbold mb-2">
            닉네임
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="최소 2자, 최대 10자"
              className="w-[250px] h-[43px] rounded-md border border-#D7D7D7 px-3 text-[12px] bg-buttonGray"
            />
            <button
              type="button"
              className="w-[80px] h-[43px] text-[12px] font-medium text-white bg-buttonBlack rounded-md"
            >
              중복확인
            </button>
          </div>
        </div>

        {/* 아이디 */}
          <div>
          <label className="block text-[14px] font-medium text-textbold mb-2">
            아이디
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="최소 2자, 최대 10자"
            className="w-[250px] h-[43px] rounded-md border border-#D7D7D7 px-3 text-[12px] bg-buttonGray"
            />
            <button
              type="button"
              className="w-[80px] h-[43px] text-[12px] font-medium text-white bg-buttonBlack rounded-md"
            >
              중복확인
            </button>
          </div>
        </div>


        {/* 비밀번호 */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">
            비밀번호
          </label>
          <div className="relative w-[335px]">
            <input
              type="password"
              placeholder="영문, 숫자, 특수문자 포함 8-20자"
              className="w-[335px] h-[43px] rounded-md border border-[#D7D7D7] px-3 pr-10 text-[12px] bg-buttonGray"
            />
            {/* 비밀번호 보기 */}
            <img
              src={EyeIcon}
              alt="비밀번호 보기"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-3 cursor-pointer"
            />
          </div>
            <div className="relative w-[335px] mt-3">
            <input
              type="password"
              placeholder="비밀번호 확인"
              className="w-[335px] h-[43px] rounded-md border border-[#D7D7D7] px-3 pr-10 text-[12px] bg-buttonGray"
            />
            {/* 비밀번호 보기 */}
            <img
              src={EyeIcon}
              alt="비밀번호 보기"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-3 cursor-pointer"
            />
          </div>

        </div>



        {/* 체크박스 */}
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4 border-[#D7D7D7] text-[12px] accent-buttonBlack" />
              <span>(필수)이용약관에 동의</span>
            </label>
            <button type="button" className="text-#4D4947 underline text-[10px]">
              자세히 보기
            </button>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4 border-[#D7D7D7] text-[12px] accent-buttonBlack" />
              <span>(필수)개인정보 수집 및 이용에 동의</span>
            </label>
            <button type="button" className="text-#4D4947 underline text-[10px]">
              자세히 보기
            </button>
          </div>
        </div>

        {/* 회원가입 버튼 */}
        <Button>회원가입</Button>
      </form>

      {/* 로그인 이동 */}
      <p className="mt-2 text-sm text-#9D9896">
        이미 계정이 있으신가요?{" "}
        <a href="/login" className="text-black font-medium underline">
          로그인하기
        </a>
      </p>
    </div>
  );

}

