import { useUser } from "../../contexts/UserContext";

const MainPage = () => {
  const {isOwner } = useUser(); 

  return (
    <div className="relative min-h-screen bg-[#F9F9F9]">
      {/* 메인 컨텐츠 */}
      <main className="flex flex-col items-center mt-8 space-y-4">
        <h1 className="text-xl font-semibold text-gray-800">서비스명</h1>
        <p className="text-gray-500 text-center">
          맛있는 하루의 시작, let's eats
        </p>

        <div className="w-[340px] h-[220px] bg-gray-200 rounded-lg shadow-md my-6" />

        {isOwner ? (
          <>
            <button className="w-[340px] py-3 bg-[#8CD790] text-white rounded-lg text-[16px] font-semibold">
              가게 등록 및 확인
            </button>
            <button className="w-[340px] py-3 bg-[#8CD790] text-white rounded-lg text-[16px] font-semibold">
              이벤트 신청
            </button>
          </>
        ) : (
          <>
            <button className="w-[340px] py-3 bg-[#8CD790] text-white rounded-lg text-[16px] font-semibold">
              가게 찾기
            </button>
            <button className="w-[340px] py-3 bg-[#8CD790] text-white rounded-lg text-[16px] font-semibold">
              아동급식카드
            </button>
          </>
        )}
      </main>
    </div>
  );
};

export default MainPage;
