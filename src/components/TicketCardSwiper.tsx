import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/swiper-custom.css";

import TicketCard from "./TicketCard";

interface Ticket {
  storeName: string;
  category: string;
  menu: string;
  price: string;
  status: string;
  date: string;
}

interface TicketCardSwiperProps {
  tickets: Ticket[];
}

const TicketCardSwiper = ({ tickets }: TicketCardSwiperProps) => {
  return (
    <div className="w-[296.64px] h-[400.4px] mt-4 mx-auto relative overflow-visible">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
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
  );
};

export default TicketCardSwiper;
