import React from "react";
import LetterBG from "../assets/Common/img_letter.png";
import TitleSVG from "../assets/Common/img_letter_title.svg";
import CloseSVG from "../assets/Common/img_close.svg";

type LetterProps = {
  title: string;          // 타이틀
  content: string;        // 본문
  onContinue: () => void; // "계속" 버튼
  onClose?: () => void;   // 닫기 버튼
  className?: string;
};

const Letter: React.FC<LetterProps> = ({
  title,
  content,
  onContinue,
  onClose,
  className = "",
}) => {
  return (
    <div
      className={`relative mx-auto ${className}`}
      style={{
        backgroundImage: `url(${LetterBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        height: "322px",
        width: "282px",
        aspectRatio: "3 / 4",
      }}
    >
      {/* 닫기(X) */}
      <button
        onClick={onClose}
        className="absolute right-8 top-4 z-10"
        aria-label="닫기"
      >
        <img src={CloseSVG} alt="닫기" className="w-6 h-6" />
      </button>

      <img
        src={TitleSVG}
        className="absolute left-1/2 -translate-x-1/2 top-[18px] w-[165px]"
        alt="title"
        />

        <h2
        className="absolute left-1/2 -translate-x-1/2 top-[42px] text-center font-semibold text-textblack text-[22px]"
        >
        {title}
        </h2>

        <div
        className="absolute left-1/2 -translate-x-1/2 top-[90px] text-center text-textblack font-medium leading-relaxed whitespace-pre-line w-[78%]"
        >
        {content}
        </div>

        <button
        onClick={onContinue}
        className="absolute left-1/2 -translate-x-1/2 bottom-[15px] underline underline-offset-4 text-textblack hover:opacity-80 text-[16px]"
        >
        계속
        </button>
    </div>
  );
};

export default Letter;
