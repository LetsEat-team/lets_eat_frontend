interface SidebarProps {
  onClose: () => void;
}

const UserSidebar = ({ onClose }: SidebarProps) => {
  return (
    <div className="fixed top-0 left-0 w-[280px] h-full bg-white shadow-xl z-50 animate-slideInLeft flex flex-col">
      <div className="flex justify-end p-4">
        <button onClick={onClose}>✕</button>
      </div>

      <div className="flex flex-col items-center">
        <img src="/user-icon.png" alt="profile" className="w-24 h-24 rounded-full bg-gray-200" />
        <p className="mt-2 font-semibold text-gray-800">내가제일밥잘먹어</p>
        <button className="mt-2 px-4 py-1 bg-black text-white text-sm rounded-md">마이페이지</button>
      </div>

      <div className="mt-6 space-y-4 px-8 text-gray-700">
        <p>• 가게 찾기</p>
        <p>• 아동급식카드</p>
        <p>• 편의점 구매 가능 품목</p>
        <p>• AI 영양사</p>
      </div>

      <div className="mt-auto border-t px-8 py-4 text-gray-600">
        • 로그아웃
      </div>
    </div>
  );
};

export default UserSidebar;
