// src/pages/ShopListPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import ShopInfoCard from "../../components/ShopCard"

type Shop = {
  id: string;
  image: string;
  category: string; // 예: "선한 영향력 가게"
  name: string;     // 예: "김가네 서울역점"
  type: string;     // 예: "분식"
  address: string;  // 예: "서울 중구 세종대로 28"
  rating: number;   // 예: 4.0
  reviews: number;  // 예: 4
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
  {
    id: "3",
    image: "/images/cafe.png",
    category: "선한 영향력 가게",
    name: "그린라이트 카페",
    type: "카페",
    address: "서울 중구 태평로1가 60",
    rating: 3.8,
    reviews: 12,
  },
];

export default function ShopListPage() {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/shops/${id}`); // 필요시 라우트에 맞게 변경
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <h1 className="text-xl font-semibold text-gray-900">샵 리스트</h1>
          <p className="text-sm text-gray-500">가까운 선한 영향력 가게를 찾아보세요</p>
        </div>
      </header>

      {/* 리스트 */}
      <main className="max-w-3xl mx-auto px-4 py-6 space-y-4">
        {MOCK_SHOPS.map((s) => (
          <button
            key={s.id}
            onClick={() => handleClick(s.id)}
            className="text-left w-full"
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
      </main>
    </div>
  );
}
