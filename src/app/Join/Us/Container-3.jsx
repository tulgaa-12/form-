"use client";

import { Header } from "./Header";
import { motion } from "framer-motion";
import { Input } from "./Input";
import { Button } from "./Button";
import Image from "next/image";
import { useState, useEffect } from "react";

export const Container3 = ({
  NextHandler,
  BackHandler,
  setError,
  error,
  container1,
  setContainer1,
  uberTragen,
}) => {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (container1.file) {
      const fileUrl = URL.createObjectURL(container1.file);
      setPreview(fileUrl);

      return () => URL.revokeObjectURL(fileUrl);
    }
  }, [container1.file]);

  const HandleNext = () => {
    const newError = {};
    // if (!container1.birthdate) newError.birthdate = "Төрсөн өдрөө оруулна уу";
    if (!container1.file) newError.file = "Зураг оруулна уу";

    if (Object.keys(newError).length) return setError(newError);
    setError({});
    NextHandler();
  };

  const removeImage = () => {
    setContainer1((prev) => ({ ...prev, file: false }));
    setPreview(false);
  };

  return (
    <div className="w-[480px] h-auto flex justify-center flex-col p-8 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col gap-8">
        <motion.div>
          <Header />

          <Input
            name="birthdate"
            label="Date of birth"
            type="date"
            // uberTragen={uberTragen}
            // container1={container1.birthdate}
            // style={`${error.birthdate ? "border border-[#E14942]" : ""}`}
          />
          {/* {error.birthdate && (
            <p className="text-xs text-[#E14942]">{error.birthdate}</p>
          )} */}

          <label className="text-sm font-medium">Profile Image</label>
          <div className="relative w-full h-[180px] border border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            {preview ? (
              <>
                <Image src={preview} alt="Preview" width={416} height={180} />

                <button
                  onClick={removeImage}
                  className="absolute top-2 right-2 bg-black text-white border border-gray-300 rounded-full px-2 hover:bg-red-500 hover:text-black transition">
                  x
                </button>
              </>
            ) : (
              <h4>Browser or Drop Image</h4>
            )}

            <Input
              name="file"
              type="file"
              uberTragen={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setContainer1((prev) => ({ ...prev, file }));
                }
              }}
              style="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          {error.file && <p className="text-xs text-[#E14942]">{error.file}</p>}

          <div className="flex justify-between mt-6">
            <Button
              text="Back"
              type="prev"
              bgColor="bg-transparent border border-gray-300"
              clickHandler={BackHandler}
            />
            <Button
              text="Continue 3/3"
              type="next"
              bgColor="bg-black"
              clickHandler={HandleNext}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
