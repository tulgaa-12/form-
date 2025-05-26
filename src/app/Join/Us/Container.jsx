import Image from "next/image";

export const Container = () => {
  return (
    <div className="w-[480px] h-[193px]  mb-7 flex flex-col gap-[10px] shadow-lg pl-[30px] justify-center ">
      <div className="">
        <Image src="/Main 1.png" width={60} height={60} />
      </div>
      <h2 className="text-[26px] text-foreground font-semibold">
        You're All Set 🔥
      </h2>
      <p className="text-[18px] text-[#8E8E8E]">
        We have received your submission. Thank you!
      </p>
    </div>
  );
};
