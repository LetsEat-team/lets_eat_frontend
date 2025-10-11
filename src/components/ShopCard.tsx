import React from "react";
import ShopMarker from "../assets/Shop/img_shop_marker.png";
import star_yellow from "../assets/Shop/img_star_yellow.png";
import star_gray from "../assets/Shop/img_star_gray.png";

type ShopInfoCardProps = {
  image: string;
  category: string;
  name: string;
  type: string; 
  address: string;
  rating: number;
  reviews: number;
};

const ShopInfoCard: React.FC<ShopInfoCardProps> = ({
  image,
  category, 
  name,
  type,
  address,
  rating,
  reviews,
}) => {
  return (
  <div className="flex items-center gap-4 bg-white w-[341px] h-[107px] rounded-[5px] shadow-[0_1px_4px_rgba(0,0,0,0.25)] p-4 hover:shadow-md transition">
      {/* 이미지 */}
      <img
        src={image}
        alt={name}
        className="w-[105px] h-[83px] rounded-[3px] object-cover"
      />

      {/* 가게 종류 ex.선한영향력 가게 */}
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-1 mt-1">
        <img src={ShopMarker} className="w-[11px] h-[12px]" />
        <p className="text-maingreen text-[12px] font-extrabold">{category}</p>
        </div>

        {/* 가게 상세 정보 */}
        <div className="flex items-center gap-1">
          <h3 className="text-[16px] font-bold text-textblack">{name}</h3>
          <span className="text-textgray text-[10px] mt-1 font-regular">{type}</span>
        </div>
        <div className="h-[1px] bg-linegray my-1" />
        <p className="text-textgray3 text-[10px] text-left w-full font-regular">{address}</p>

        {/* 별점 */}
        <div className="flex items-center gap-1 ">
          <span className="text-textgray3 text-[10px] font-regular">
            {rating.toFixed(1)}
          </span>
          {Array.from({ length: 5 }).map((_, i) => (
            <img
              key={i}
              src={i < Math.floor(rating) ? star_yellow : star_gray}
              alt="star"
              className="w-[10px] h-[10px]"
            />
          ))}
          <span className="text-textgray3 text-[10px]">({reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ShopInfoCard;
