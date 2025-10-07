import marker from "../assets/ChildCard/marker.png";

interface TicketCardProps {
  storeName: string;
  category: string;
  menu: string;
  price: string;
  status: string;
  date: string;
  className?: string[]; // 추가
}

const TicketCard = ({
  storeName,
  category,
  menu,
  price,
  status,
  date,
  className = [], // 기본값 빈 배열
}: TicketCardProps) => {
  // 기본 클래스와 배열 합치기
  const mergedClassName = [
    "rounded-2xl shadow-md p-5 relative border border-gray-100",
    ...className,
  ].join(" ");

  return (
    <div className={mergedClassName}>
      <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border border-gray-200"></div>
      <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border border-gray-200"></div>

      <p className="text-maingreen text-sm font-semibold mb-1 flex items-center gap-1">
        <img src={marker} alt="지도 마커" className="w-[11.4px] h-[13.82px]" />
        선한 영향력 가게
      </p>
      <p className="text-lg font-bold text-gray-900 mb-3">
        {storeName} <span className="text-sm text-gray-400 font-normal">{category}</span>
      </p>

      <div className="flex justify-between text-base font-semibold border-t border-gray-100 pt-3">
        <p>메뉴 <span className="font-normal text-gray-600 ml-2">{menu}</span></p>
        <p>가격 <span className="font-normal text-gray-900 ml-2">{price}</span></p>
      </div>

      <div className="mt-4">
        <div className="text-gray-400 text-center py-2 rounded-xl font-medium">{status}</div>
        <p className="text-center text-xs text-gray-400 mt-2">{date}</p>
      </div>
    </div>
  );
};

export default TicketCard;
