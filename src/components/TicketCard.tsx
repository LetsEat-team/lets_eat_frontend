import marker from "../assets/ChildCard/marker.png";
import Ticket from "../assets/Card/Ticket.png";

interface TicketCardProps {
  storeName: string;
  category: string;
  menu: string;
  price: string;
  status: string;
  date: string;
  className?: string[];
}

const TicketCard = ({
  storeName,
  category,
  menu,
  price,
  status,
  date,
  className = [],
}: TicketCardProps) => {
  // Tailwind 클래스 병합
  const mergedClassName = [
    "w-[296.64px] h-[367.4px] p-5 relative flex flex-col justify-between bg-cover bg-center rounded-2xl ",
    ...className,
  ].join(" ");

  return (
    <div
      className={mergedClassName}
      style={{
        backgroundImage: `url(${Ticket})`,
      }}
    >
      {/* 상단 가게 정보 */}
      <div>
        <p className="text-maingreen text-sm font-semibold mb-1 flex items-center gap-1">
          <img
            src={marker}
            alt="지도 마커"
            className="w-[11.4px] h-[13.82px]"
          />
          선한 영향력 가게
        </p>
        <p className="text-lg font-bold text-gray-900 mb-3">
          {storeName}{" "}
          <span className="text-sm text-gray-400 font-normal">{category}</span>
        </p>

        <div className="flex justify-between text-base font-semibold border-t border-gray-100 pt-3">
          <p>
            메뉴{" "}
            <span className="font-normal text-gray-600 ml-2">{menu}</span>
          </p>
          <p>
            가격{" "}
            <span className="font-normal text-gray-900 ml-2">{price}</span>
          </p>
        </div>
      </div>

      {/* 하단 상태 및 날짜 */}
      <div className="mt-4">
        <div className="text-gray-400 text-center py-2 rounded-xl font-medium bg-white/70 backdrop-blur-sm">
          {status}
        </div>
        <p className="text-center text-xs text-gray-400 mt-2">{date}</p>
      </div>
    </div>
  );
};

export default TicketCard;
