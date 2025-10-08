import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import balloon from "../../assets/ChildCard/balloon.png";
import cardExample from "../../assets/ChildCard/card-ex2.png";
import Checkbox from "../../components/CheckBox";
import TicketCard from "../../components/TicketCard";
import "swiper/css";
import "swiper/css/pagination";
import TicketCardSwiper from "../../components/TicketCardSwiper";
import Ticket from "../../assets/Card/Ticket.png";
import Modal from "../../components/Modal";
import Button from "../../components/Button";


const ChildCard = () => {
  const [cardNum, _setCardNum] = useState("");
  const [expiry, _setExpiry] = useState("");
  const [securityCode, _setSecurityCode] = useState("");
  const [amount, _setAmount] = useState(210000);

  const [checked1, setChecked1] = useState(false); //사용전 티켓인지 여부
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1(e.target.checked);
  };

    const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  const [popstatus,_setPopStatus] = useState("작성완료")
  const [popDate, _setPopDate] = useState("2025.09.11")

  const tickets = [
    {
      storeName: "김가네 서울역점",
      category: "분식",
      menu: "라면",
      price: "3,000",
      status: "사용 완료",
      date: "2025.09.11",
    },
    {
      storeName: "박가네 강남점",
      category: "한식",
      menu: "비빔밥",
      price: "8,000",
      status: "사용 전",
      date: "2025.09.15",
    },
    {
      storeName: "최가네 마포점",
      category: "카페",
      menu: "아메리카노",
      price: "4,500",
      status: "사용 전",
      date: "2025.09.20",
    },
    {
      storeName: "원가네 이태원점",
      category: "양식",
      menu: "스테이크",
      price: "20,000",
      status: "사용 전",
      date: "2025.09.25",
    },
    {
      storeName: "정가네 홍대점",
      category: "분식",
      menu: "떡볶이",
      price: "3,500",
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
      <div className="w-[375px] px-6 mt-8 ">
        
          <h2 className="text-[24px] font-semibold text-gray-900 ml-2">내 티켓</h2>
        <div className="flex justify-end mb-3 mt-10 mr-2">
          <Checkbox id="chk1" label="사용 전 티켓만 보기" checked={checked1} handler={onChangeHandler} />
        </div>

        {/* Swiper */}
        <TicketCardSwiper tickets={tickets} />


        {/* 추가 버튼 */}
        <div className="flex flex-col items-center mt-6">
          <button onClick={openPopup} 
          className="w-[37px] h-[37px] bg-black text-white rounded-full flex-none flex items-center justify-center text-2xl font-bold shadow-sm hover:bg-gray-300 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <line x1="12" y1="4" x2="12" y2="20" />
              <line x1="4" y1="12" x2="20" y2="12" />
            </svg>
          </button>
          <div   className="relative w-[171px] h-[70px] flex items-center justify-center"
            style={{
              backgroundImage: `url(${balloon})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}>
            <p className="text-[12px] text-white mt-2">
            카드 사용 내역을 추가해보세요
            </p>
          </div>
          
        </div>
      </div>
      {/* 팝업 모달 */}
      <Modal
        isOpen={isPopupOpen}
        onClose={closePopup}
        className={["custom-modal-class", "another-class"]} // 원하는 클래스 배열로 전달
      >
        <div
          style={{
            width: "296.4px",
            height: "373.2px",
            backgroundImage: `url(${Ticket})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px"
          }}
        >
          <h2 className="text-[20px] text-black font-bold mt-[15px]">카드 사용 내역</h2>
          <input
            type="text"
            placeholder="사용처를 입력해주세요."
            className="w-[184px] h-[46px] mb-[10px] mt-[64px] bg-[#F2F2F2] border border-[#D7D7D7] rounded px-4 text-gray-700"
          />
          <input
            type="number"
            placeholder="사용 금액을 입력해주세요."
            className="w-[184px] h-[46px] bg-[#F2F2F2] border border-[#D7D7D7] rounded px-4 text-gray-700"
          />
                {/* 하단 상태 및 날짜 */}
          <div className="flex flex-col items-center justify-start mb-[10px] mt-[30px]">
            <Button style={{ width: "159px", height: "43px" }}>{popstatus}</Button>
              
            <p className="text-center text-[12px] text-black mt-2">{popDate}</p>
          </div>
        </div>
      </Modal>

    </div>
  );
};

export default ChildCard;
