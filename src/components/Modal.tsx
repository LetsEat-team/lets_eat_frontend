import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string[]; // className 배열 받기 optional
}

const Modal = ({ isOpen, onClose, children, className = [] }: ModalProps) => {
  if (!isOpen) return null;

  const baseClass =
    "fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 ";

  // 배열을 공백으로 합쳐서 문자열 클래스 생성
  const combinedClassName = [baseClass, ...className].join(" ");

  return (
    <div className={combinedClassName} onClick={onClose}>
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        {children}
        <button
          onClick={onClose}
          className="absolute top-[18px] right-[18px] "
          aria-label="Close popup"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[22px] h-[22px] text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;
