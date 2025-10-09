import React from "react";

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string[];
}
const CheckIcon = () => (
  <svg
    className="w-[10px] h-[10px] text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20.5 6 9 17 4 10" />
  </svg>
);

const Checkbox = ({
  id,
  label,
  checked = false,
  handler,
  className = [],
}: CheckboxProps) => {
  const mergedClassName = [
    "flex items-center gap-2 cursor-pointer select-none text-gray-700",
    ...className,
  ].join(" ");

  return (
    <label htmlFor={id} className={mergedClassName}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handler}
        className="sr-only"
      />
      <span
        className={`w-[14px] h-[14px] flex items-center justify-center rounded-[2px] ${
          checked ? "bg-black border-green-600" : "border-gray-300 border"
        }`}
      >
        {checked && <CheckIcon />}
      </span>
      <span className="text-sm text-black">{label}</span>
    </label>
  );
};

export default Checkbox;
