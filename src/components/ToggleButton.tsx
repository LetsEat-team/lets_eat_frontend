import { useState } from "react";

interface ToggleButtonProps {
  list: string[];
  onToggle?: (selected: string) => void;
  className?: string;
}
const ToggleButton = ({ list, onToggle, className = "" }: ToggleButtonProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (item: string) => {
    if (selected === item) {
      setSelected(null); // 이미 선택된 항목 클릭 → 접힘
      onToggle?.(null!);
    } else {
      setSelected(item); // 다른 항목 클릭 → 선택 변경 (펼침)
      onToggle?.(item);
    }
  };

  return (
    <div
      className={[
        "flex-col gap-2 bg-gray-100 rounded-2xl p-1 w-fit",
        className || "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {list.map((item) => (
        <button
          key={item}
          onClick={() => handleClick(item)}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
            selected === item
              ? "bg-blue-500 text-white shadow-sm"
              : "bg-white text-gray-600 hover:bg-gray-200"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};


export default ToggleButton;
