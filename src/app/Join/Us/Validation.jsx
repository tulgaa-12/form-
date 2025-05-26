import Image from "next/image";

export const Validation = () => {
  return (
    <div>
      <div
        className="relative w-[416px] h-[180px] border-none rounded-md border-solid
                bg-gray-100 flex justify-center items-center flex-col gap-y-2">
        <div className=" h-[28px] w-[28px] bg-white rounded-[100%] flex justify-center items-center">
          <Image src="/vector.png" width={9} height={9} />
        </div>
        <h4 class="text-sm text-center">Browse or Drop Image</h4>
      </div>
    </div>
  );
};
