import searchIcon from "../assets/Shop/img_search.png"

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch?: () => void;
  placeholder?: string;
  width?: string; 
}

export default function SearchBar({
  value,
  onChange,
  onSearch,
  placeholder = "검색어를 입력하세요",
}: SearchBarProps) {
  return (
    <div
      className={`flex items-center bg-white rounded-[5px] border border-[#D8D8D8] px-4 py-2 w-[339px] h-[43px]`}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 text-sm text-gray-700 focus:outline-none"
      />
      <button onClick={onSearch}>
        <img src={searchIcon} className="w-5 h-5"/>
      </button>
    </div>
  );
}
