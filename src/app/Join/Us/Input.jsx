export const Input = ({
  label,
  placeholder,
  type,
  name,
  uberTragen,
  handlerSub,
  container1,
  error,
  style,
}) => {
  return (
    <div className="flex flex-col  ">
      <label className="pt-[10px]">
        {label}
        <sup className="text-[#E14942]">*</sup>
      </label>
      <div className="  ">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className={` w-[416px] h-[40px]   outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316] rounded-[8px] pl-4 ${style} `}
          onChange={uberTragen}
          value={container1}
        />
      </div>
    </div>
  );
};
