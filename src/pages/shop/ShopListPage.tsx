import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopInfoCard from "../../components/ShopCard";
import SearchBar from "../../components/SearchBar";

type Shop = {
  id: string;
  image: string;
  category: string;
  name: string;
  type: string;
  address: string;
  rating: number;
  reviews: number;
};

const MOCK_SHOPS: Shop[] = [
  {
    id: "1",
    image: "/images/kimbap.png",
    category: "선한 영향력 가게",
    name: "김가네 서울역점",
    type: "분식",
    address: "서울 중구 세종대로 28",
    rating: 4.0,
    reviews: 4,
  },
  {
    id: "2",
    image: "/images/noodle.png",
    category: "선한 영향력 가게",
    name: "온면당 시청점",
    type: "면요리",
    address: "서울 중구 을지로 110",
    rating: 4.5,
    reviews: 31,
  },
];

export default function ShopListPage() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleClick = (id: string) => {
    navigate(`/shops/${id}`);
  };

  const handleSearch = () => {
    console.log("검색 실행:", keyword);
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6">
      <main className="flex flex-col items-center gap-6 py-4 w-full">

      <div className="flex flex-col items-center gap-3 w-full">
        {/* 검색바 */}
        <div className="flex justify-center w-full">
          <div className="w-[392px]">
            <SearchBar
              value={keyword}
              onChange={setKeyword}
              onSearch={handleSearch}
              placeholder="가게 이름을 입력하세요"
            />
          </div>
        </div>

    {/* 필터 버튼 */}
    <div className="flex justify-left px-6 gap-2 w-[392px]">
      <button className="flex items-center gap-1 bg-white border border-gray-200 rounded-full px-3 py-1 text-sm text-gray-600 shadow-sm hover:shadow-md transition">
        가격 설정 <span className="text-gray-400 text-xs">▼</span>
      </button>

      <button className="bg-[#3CB371] text-white rounded-full px-3 py-1 text-sm font-medium shadow-sm hover:shadow-md transition">
        영업 중
      </button>

      <button className="flex items-center gap-1 bg-white border border-gray-200 rounded-full px-3 py-1 text-sm text-gray-600 shadow-sm hover:shadow-md transition">
        유형 <span className="text-gray-400 text-xs">▼</span>
      </button>
    </div>
  </div>

  {/* 리스트 */}
    <div className="flex flex-col gap-2">
      {MOCK_SHOPS.map((s) => (
        <button
          key={s.id}
          onClick={() => handleClick(s.id)}
          className="w-[341px]"
        >
          <ShopInfoCard
            image={s.image}
            category={s.category}
            name={s.name}
            type={s.type}
            address={s.address}
            rating={s.rating}
            reviews={s.reviews}
          />
        </button>
      ))}
    </div>
  </main>

    </div>
  );
}
