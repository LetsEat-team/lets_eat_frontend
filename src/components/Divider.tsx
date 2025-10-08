import React from "react";

interface DividerProps {
  className?: string;
  style?: React.CSSProperties;
}

const Divider = ({ className = "", style }: DividerProps) => {
  // 기본 마진 스타일
  const defaultStyle: React.CSSProperties = {
    marginTop: "8px",
    ...style,
  };

  return (
    <div
      className={`w-full border-b border-gray-300 ${className}`}
      style={defaultStyle}
    />
  );
};

export default Divider;
