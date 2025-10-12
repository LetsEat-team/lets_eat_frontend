interface SidebarProps {
  onClose: () => void;
}

const OwnerSidebar = ({ onClose }: SidebarProps) => {
  return (
    <div className="fixed top-0 left-0 w-[280px] h-full bg-white shadow-xl z-50 animate-slideInLeft flex flex-col">
      <div className="flex justify-end p-4">
        <button onClick={onClose}>✕</button>
      </div>

      <div className="flex flex-col items-center">
        <img src="/owner-icon.png" alt="profile" className="w-24 h-24 rounded-full bg-gray-200" />
        <p className="mt-2 font-semibold text-gray-800">내가바로사장님</p>
        <button className="mt-2 px-4 py-1 bg-black text-white text-sm rounded-md">마이페이지</button>
      </div>

      <div className="mt-6 space-y-4 px-8 text-gray-700">
        <p>• 가게 등록 및 확인</p>
        <p>• 가게 관리</p>
        <p>• 이벤트 신청</p>
      </div>

      <div className="mt-auto border-t px-8 py-4 text-gray-600">
        • 로그아웃
      </div>
    </div>
  );
};

export default OwnerSidebar;
