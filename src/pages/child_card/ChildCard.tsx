import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import cardExample from "../../assets/ChildCard/card-ex2.png";
import Checkbox from "../../components/CheckBox";
import TicketCard from "../../components/TicketCard";
import "swiper/css";
import "swiper/css/pagination";

const ChildCard = () => {
  const [cardNum, _setCardNum] = useState("");
  const [expiry, _setExpiry] = useState("");
  const [securityCode, _setSecurityCode] = useState("");
  const [amount, _setAmount] = useState(210000);

  const [checked1, setChecked1] = useState(false); //사용전 티켓인지 여부
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1(e.target.checked);
  };

  const tickets = [
    {
      storeName: "김가네 서울역점",
      category: "분식",
      menu: "라면",
      price: "3,000원",
      status: "사용 전",
      date: "2025.09.11",
    },
    {
      storeName: "박가네 강남점",
      category: "한식",
      menu: "비빔밥",
      price: "8,000원",
      status: "사용 전",
      date: "2025.09.15",
    },
    {
      storeName: "최가네 마포점",
      category: "카페",
      menu: "아메리카노",
      price: "4,500원",
      status: "사용 전",
      date: "2025.09.20",
    },
    {
      storeName: "원가네 이태원점",
      category: "양식",
      menu: "스테이크",
      price: "20,000원",
      status: "사용 전",
      date: "2025.09.25",
    },
    {
      storeName: "정가네 홍대점",
      category: "분식",
      menu: "떡볶이",
      price: "3,500원",
      status: "사용 전",
      date: "2025.09.30",
    },
  ];

  return (
    <div className="w-full mx-auto min-h-screen flex flex-col items-center pb-10 bg-[#E2E2E250]">
      {/* 카드 영역 */}
      <div className="w-full h-[235px] bg-gradient-to-b from-maingreen to-white flex items-center justify-center">
        <div className="w-full relative flex justify-center items-center mb-8 mt-3">
          <div className="absolute bottom-[30px] text-white flex-col text-[11px]">
            <div>{cardNum || "0000 0000 0000 0000"}</div>
            <div>
              <span>{expiry || "00/00"}</span>
              <span className="ml-[10px]">{securityCode || "000"}</span>
            </div>
          </div>
          <img
            src={cardExample}
            alt="카드 예시"
            className="w-[243.14px] h-[145.73px]"
          />
        </div>
      </div>

      {/* 잔액 박스 */}
      <div className="mt-6 border bg-white border-maingreen rounded-md text-center py-5 px-4 w-[340px] shadow-sm">
        <p className="text-[#9D9896] text-[24px] font-medium mb-1">
          이번 달 잔액
        </p>
        <p className="text-[24px] font-semibold text-gray-900 mb-2">
          {amount.toLocaleString()} 원
        </p>
        <p className="text-[12px] text-gray-400">
          <span className="text-maingreen font-bold">“</span>이만큼 맛있는 음식을
          더 먹을 수 있어요!
          <span className="text-maingreen font-bold">”</span>
        </p>
      </div>

      {/* 내 티켓 */}
      <div className="w-full px-6 mt-8">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-[24px] font-semibold text-gray-900">내 티켓</h2>
          <Checkbox id="chk1" label="사용 전 티켓만 보기" checked={checked1} handler={onChangeHandler} />
        </div>

        {/* Swiper */}
        <div className="w-full mt-4">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}  // 한 번에 한 슬라이드만 보이도록 설정
            className="pb-10"
            centeredSlides={true} 
            grabCursor={true}     
          >
            {tickets.map((ticket, index) => (
              <SwiperSlide key={index}>
                <TicketCard {...ticket} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


        {/* 추가 버튼 */}
        <div className="flex flex-col items-center mt-6">
          <button className="w-12 h-12 text-gray-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-sm hover:bg-gray-300 transition">
            +
          </button>
          <p className="text-sm text-gray-500 mt-2">
            카드 사용 내역을 추가해보세요
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChildCard;
