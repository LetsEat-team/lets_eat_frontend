import { useState } from "react";

interface ToggleButtonProps {
  list: string[];
  onToggle?: (selected: string) => void;
  className?: string;
}
const ToggleButton = ({ list, onToggle, className = "" }: ToggleButtonProps) => {
  const [selected, setSelected] = useState<string | null>(null);


  return (
      <div className={`border border-gray-300 flex flex-col rounded-md p-1 w-full mt-[6px] ${className}`}>
        {list.map((item, index) => (
          <div key={item}>
            <button
              onClick={() => onToggle?.(item)}
              className="w-full text-sm font-medium transition-all duration-200 text-gray-600 hover:bg-gray-200"
        >
              {item}
            </button>
            {/* 마지막 아이템 뒤에는 구분선 추가 안함 */}
            {index < list.length - 1 && (
              <div className="border-b border-gray-300 my-1" />
            )}
          </div>
        ))}
      </div>
    );
};


export default ToggleButton;
