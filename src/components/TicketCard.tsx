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
    "w-[296.64px] h-[367.4px] relative flex flex-col justify-between bg-cover bg-center rounded-2xl py-[28px] px-[30px]",
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
        <p className="text-maingreen text-[12px] font-semibold mb-1 flex items-center gap-1 ml-[4px]">
          <img
            src={marker}
            alt="지도 마커"
            className="w-[11.4px] h-[13.82px]"
          />
          선한 영향력 가게
        </p>
        <p className="text-[20px] font-bold text-gray-900 mb-3 mt-[8px]">
          {storeName}{" "}
          <span className="text-[10px] text-gray-400 font-regular">{category}</span>
        </p>

        <div className="flex justify-between text-base font-semibold pt-3  mt-[40px] ">
          <div className="flex-col">
            <div className="w-[108px] text-[16px] font-medium text-[#9D9896] text-center">메뉴</div>
            <div className=" text-black text-[24px] font-semibold mt-[10px] text-center">{menu}</div>
          </div>
          <div>
            <div className="w-[108px] text-[16px] font-medium text-[#9D9896] text-center">가격</div>
            <div className="text-black text-[24px] font-semibold mt-[10px]  text-center">{price} 원</div>
          </div>
        </div>
      </div>

      {/* 하단 상태 및 날짜 */}
      <div className="flex flex-col items-center justify-start mb-[10px]">
        <button className="w-[159px] h-[43px] text-[#9D9896] bg-[#F2F2F2] text-center font-semibold">
          {status}
        </button>
        <p className="text-center text-[12px] text-black mt-2">{date}</p>
      </div>
    </div>
  );
};

export default TicketCard;
