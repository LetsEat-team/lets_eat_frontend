import { useState } from "react";
import foodImg from "../../assets/Convy/image.png"
import ConvyItem from "../../components/ConvyItem";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useMinHeightRealScreenMinusHeader } from "../../hooks/useMinHeightRealScreen";

const ConvyList = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("식사류");
  useMinHeightRealScreenMinusHeader();

  const categories = [
    { key: "식사류", label: "도시락 및 식사류" },
    { key: "가공식품", label: "가공식품 / 유제품 / 음료" },
  ];

  const foodList = [
    { name: "도시락", image: foodImg },
    { name: "김밥", image: foodImg },
    { name: "주먹밥", image: foodImg },
    { name: "샐러드", image: foodImg },
    { name: "샌드위치", image: foodImg },
    { name: "햄버거", image: foodImg },
    { name: "즉석밥", image: foodImg },
  ];

  const processedList = [
    { name: "햄", image: foodImg },
    { name: "소시지", image: foodImg },
    { name: "핫바", image: foodImg },
    { name: "우유", image: foodImg },
    { name: "치즈", image: foodImg },
    { name: "건강음료", image: foodImg },
    { name: "생수", image: foodImg },
    { name: "요구르트", image: foodImg },
  ];

  const currentList = activeTab === "식사류" ? foodList : processedList;

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white px-4 py-6">
      {/* 상단 탭 */}
      <div className="w-[302px] flex gap-4 mb-4 border-b border-gray-200 w-full justify-center">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveTab(category.key)}
            className={`pb-2 font-semibold text-sm transition-all duration-200 ${
              activeTab === category.key
                ? "text-textblack border-b-2 border-maingreen"
                : "text-gray-400"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* 아이템 목록 */}
      <div className="grid grid-cols-2 gap-4 mb-6 overflow-y-auto">
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
