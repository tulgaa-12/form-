import Image from "next/image";

export const Header = () => {
  return (
    <div className="w-[416px] h-[142px]  mb-7 flex flex-col gap-[10px]  ">
      <div className="">
        <Image src="/Main 1.png" width={60} height={60} />
      </div>
      <h2 className="text-[26px] text-foreground font-semibold">Join Us! 😎</h2>
      <p className="text-[18px] text-[#8E8E8E]">
        Please provide all current information accurately.
      </p>
    </div>
  );
};
