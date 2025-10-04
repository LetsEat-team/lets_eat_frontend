import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        "inline-flex items-center justify-center",
        "w-[335px] h-[43px] rounded-md",
        "bg-buttonBlack text-white",
        "text-m font-semibold",
        "transition-colors hover:opacity-95",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}
