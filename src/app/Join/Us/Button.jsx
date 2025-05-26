import { ChevronLeft, ChevronRight } from "lucide-react";

export const Button = ({ text, type, bgColor, clickHandler }) => {
  return (
    <button
      className={`flex items-center justify-center w-full h-[44px] mt-[120px] font-semibold rounded-lg transition-all duration-300 hover:opacity-80 gap-2 ${bgColor} ${
        type === "next" ? "text-white" : " text-black "
      }`}
      onClick={clickHandler}>
      {type === "prev" && <ChevronLeft />}
      {text}
      {type === "next" && <ChevronRight />}
    </button>
  );
};
