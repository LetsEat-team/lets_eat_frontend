import React, { useState, useRef } from "react";

const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // 숫자만 받고 최대 4자리 제한
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 4);
    setPassword(val);
  };

  // 4칸으로 맞추기 위해 빈칸은 공백으로 채움
  const chars = password.padEnd(4, " ").split("");

  // 박스 클릭시 실제 input 포커스
  const handleBoxClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-[100px] flex gap-2 cursor-text" onClick={handleBoxClick}>
        {chars.slice(0, 2).map((ch, i) => (
        <div
            key={i}
            className="w-[43px] h-[43px] flex-none border border-gray-300 rounded-md font-mono flex items-center justify-center"
        >
            {ch !== " " ? ch : ""}
        </div>
        ))}

      <input
        ref={inputRef}
        type="password"
        value={password}
        onChange={onChange}
        maxLength={2}
        autoFocus
        className="absolute text-[16px] inset-0 w-full h-full opacity-0 appearance-none"
      />
      <span className="w-[38px] h-[43px] flex-none flex items-center justify-center">*</span>
      <span className="w-[38px] h-[43px] flex-none flex items-center justify-center">*</span>
    </div>
  );
};

export default PasswordInput;
