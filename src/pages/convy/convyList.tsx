import { useState } from "react";
import ConvyItem from "../../components/ConvyItem";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useMinHeightRealScreenMinusHeader } from "../../hooks/useMinHeightRealScreen";

import 도시락 from "../../assets/Convy/도시락 및 식사류/도시락.png";
import 김밥 from "../../assets/Convy/도시락 및 식사류/김밥.png";
import 샐러드 from "../../assets/Convy/도시락 및 식사류/샐러드.png";
import 샌드위치 from "../../assets/Convy/도시락 및 식사류/샌드위치.png";
import 주먹밥 from "../../assets/Convy/도시락 및 식사류/주먹밥.png";
import 즉석밥 from "../../assets/Convy/도시락 및 식사류/즉석밥.png";
import 햄버거 from "../../assets/Convy/도시락 및 식사류/햄버거.png";

// 가공식품
import 건강음료 from "../../assets/Convy/가공식품/건강음료.png";
import 생수 from "../../assets/Convy/가공식품/생수.png";
import 소시지 from "../../assets/Convy/가공식품/소시지.png";
import 요구르트 from "../../assets/Convy/가공식품/요구르트.png";
import 우유 from "../../assets/Convy/가공식품/우유.png";
import 치즈 from "../../assets/Convy/가공식품/치즈.png";
import 핫바 from "../../assets/Convy/가공식품/핫바.png";
import 햄 from "../../assets/Convy/가공식품/햄.png";

// 냉동식품
import 과일 from "../../assets/Convy/냉장식품/과일.png";
import 냉동식품 from "../../assets/Convy/냉장식품/냉동식품.png";
import 떡 from "../../assets/Convy/냉장식품/떡.png";
import 반찬류 from "../../assets/Convy/냉장식품/반찬류.png";
import 빵 from "../../assets/Convy/냉장식품/빵.png";
import 채소 from "../../assets/Convy/냉장식품/채소.png";

const ConvyList = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("식사류");
  useMinHeightRealScreenMinusHeader();

  const categories = [
    { key: "식사류", label: "도시락 및 식사류" },
    { key: "가공식품", label: "가공식품 / 유제품 / 음료" },
    { key: "냉동식품", label: "냉장(냉동)식품" },
  ];

  const foodList = [
    { name: "도시락", image: 도시락 },
    { name: "김밥", image: 김밥 },
    { name: "샐러드", image: 샐러드 },
    { name: "샌드위치", image: 샌드위치 },
    { name: "주먹밥", image: 주먹밥 },
    { name: "즉석밥", image: 즉석밥 },
    { name: "햄버거", image: 햄버거 },
  ];

  const processedList = [
    { name: "건강음료", image: 건강음료 },
    { name: "생수", image: 생수 },
    { name: "소시지", image: 소시지 },
    { name: "요구르트", image: 요구르트 },
    { name: "우유", image: 우유 },
    { name: "치즈", image: 치즈 },
    { name: "핫바", image: 핫바 },
    { name: "햄", image: 햄 },
  ];

  const frozenList = [
    { name: "과일", image: 과일 },
    { name: "냉동식품", image: 냉동식품 },
    { name: "떡", image: 떡 },
    { name: "반찬류", image: 반찬류 },
    { name: "빵", image: 빵 },
    { name: "채소", image: 채소 },
  ];

 const currentList =
    activeTab === "식사류"
      ? foodList
      : activeTab === "가공식품"
      ? processedList
      : frozenList;

  return (
    <div className="flex flex-col items-center w-full px-4 py-6">
      {/* 상단 탭 */}
      <div className="w-[302px] overflow-x-auto scrollbar-hide mb-4 border-b border-gray-200">
        <div className="flex gap-6 px-2 w-max">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveTab(category.key)}
              className={`whitespace-nowrap pb-2 font-semibold text-sm transition-all duration-200 ${
                activeTab === category.key
                  ? "text-textblack border-b-2 border-maingreen"
                  : "text-gray-400"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* 아이템 목록 */}
      <div className="grid grid-cols-2 gap-4 mb-6 overflow-y-auto px-1 py-1">
        {currentList.map((item) => (
          <ConvyItem key={item.name} image={item.image} name={item.name} />
        ))}
      </div>

      {/* 하단 버튼 */}
      <Button onClick={() => navigate(-1)}>
        확인했어요
      </Button>
    </div>
  );
};

export default ConvyList;
