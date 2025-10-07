import React from "react";

const ChildCard = () => {
  return (
    <div className="w-[390px] mx-auto min-h-screen bg-gray-50 flex flex-col items-center pb-10">
      {/* 카드 영역 */}
      <div className="w-full h-40 bg-gradient-to-b from-green-300 to-green-500 rounded-b-3xl flex items-center justify-center shadow-inner">
        <div className="w-[280px] h-[150px] bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-xl shadow-lg flex flex-col justify-between p-4 text-white">
          <div className="text-xs tracking-widest">5282 3456 7890 1289</div>
          <div className="text-right text-xs">09/25</div>
        </div>
      </div>

      {/* 잔액 박스 */}
      <div className="mt-6 border border-green-300 rounded-xl text-center py-5 px-4 w-[340px] bg-white shadow-sm">
        <p className="text-gray-400 text-lg font-semibold mb-1">이번 달 잔액</p>
        <p className="text-3xl font-bold text-gray-900 mb-2">210,000 원</p>
        <p className="text-sm text-gray-400">“이만큼 맛있는 음식을 더 먹을 수 있어요!”</p>
      </div>

      {/* 내 티켓 */}
      <div className="w-full px-6 mt-8">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold text-gray-900">내 티켓</h2>
          <label className="flex items-center gap-2 text-xs text-gray-500">
            <input type="checkbox" defaultChecked className="accent-green-500" />
            사용 전 티켓만 보기
          </label>
        </div>

        {/* 티켓 카드 */}
        <div className="bg-white rounded-2xl shadow-md p-5 relative border border-gray-100">
          <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gray-50 border border-gray-200"></div>
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gray-50 border border-gray-200"></div>

          <p className="text-green-600 text-sm font-semibold mb-1">✅ 선한 영향력 가게</p>
          <p className="text-lg font-bold text-gray-900 mb-3">김가네 서울역점 <span className="text-sm text-gray-400 font-normal">분식</span></p>

          <div className="flex justify-between text-base font-semibold border-t border-gray-100 pt-3">
            <p>메뉴 <span className="font-normal text-gray-600 ml-2">라면</span></p>
            <p>가격 <span className="font-normal text-gray-900 ml-2">3,000원</span></p>
          </div>

          <div className="mt-4">
            <div className="bg-gray-100 text-gray-400 text-center py-2 rounded-xl font-medium">사용 전</div>
            <p className="text-center text-xs text-gray-400 mt-2">2025.09.11</p>
          </div>
        </div>

        {/* 추가 버튼 */}
        <div className="flex flex-col items-center mt-6">
          <button className="w-12 h-12 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-sm hover:bg-gray-300 transition">
            +
          </button>
          <p className="text-sm text-gray-500 mt-2">카드 사용 내역을 추가해보세요</p>
        </div>
      </div>
    </div>
  );
};

export default ChildCard;
