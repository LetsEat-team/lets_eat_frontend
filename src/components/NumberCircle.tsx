
interface NumberCircleProps {
  number: number | string;
  className?: string[]; // 클래스명을 배열로 지정, 추가적으로 className 붙이기 가능
}

const NumberCircle: React.FC<NumberCircleProps> = ({ number, className = [] }) => {
  const merged = [
    "flex items-center justify-center",
    "rounded-full bg-black text-white",
    "text-[12px] font-medium",
    "w-[20.16px] h-[20.16px]",
    "flex-shrink-0",
    ...className,
  ].join(" ");
  
  return (
    <div className={merged}>
      {number}
    </div>
  );
};

export default NumberCircle;
