import React from "react";
import { Star } from "react-feather";

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
    <div className="flex items-center gap-4 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">
      {/* 이미지 */}
      <img
        src={image}
        alt={name}
        className="w-[100px] h-[100px] rounded-lg object-cover"
      />

      {/* 내용 */}
      <div className="flex flex-col flex-1">
        <p className="text-maingreen text-sm font-medium">{category}</p>
        <div className="flex items-center gap-1">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <span className="text-gray-500 text-sm">{type}</span>
        </div>
        <div className="h-[1px] bg-gray-200 my-1" />
        <p className="text-gray-600 text-sm">{address}</p>

        {/* 별점 */}
        <div className="flex items-center gap-1 mt-1">
          <span className="text-gray-800 text-sm font-medium">
            {rating.toFixed(1)}
          </span>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
            />
          ))}
          <span className="text-gray-500 text-sm">({reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ShopInfoCard;
