"use client";

import { Header } from "./Header";
import { motion } from "framer-motion";
import { Input } from "./Input";
import { Button } from "./Button";

// const regex = {
//   firstname: /^[a-zA-Z\\s]*$/,
//   lastname: /^[a-zA-Z\\s]*$/,
//   username: /^[a-zA-Z\\s]*$/,
// };

export const Container1 = ({
  uberTragen,
  handlerSub,
  error,
  NextHandler,
  setContainer1,
  container1,
  setError,
}) => {
  const HandleNext = () => {
    const newError = {};
    if (!container1.firstname) newError.firstname = "Нэрээ оруулна уу";
    if (!container1.lastname) newError.lastname = "Овгоо оруулна уу.";
    if (!container1.username)
      newError.username = "Хэрэглэгчийн нэрээ оруулна уу";

    if (Object.keys(newError).length) return setError(newError);
    setError({});
    NextHandler();
  };

  return (
    <div className="w-[480px] h-full flex justify-center flex-col p-8 rounded-lg shadow-lg ">
      <div className="flex flex-col rounded-md  gap-8 ">
        <motion.div>
          <Header />
          <Input
            name={"firstname"}
            label={"First name"}
            placeholder={"Your firstname"}
            type="text"
            uberTragen={uberTragen}
            handlerSub={handlerSub}
            container1={container1.firstname}
            style={`${error.firstname ? "border-2 border-[#E14942]" : ""}`}
          />
          {error.firstname && (
            <p className="text-error text-xs text-[#E14942]">
              {error.firstname}
            </p>
          )}
          <Input
            name={"lastname"}
            label={"Last name"}
            placeholder={"Your lastname"}
            type="text"
            uberTragen={uberTragen}
            container1={container1.lastname}
            style={`${error.lastname ? "border-2 border-[#E14942]" : ""}`}
          />
          {error.lastname && (
            <p className="text-error text-xs text-[#E14942]">
              {error.lastname}
            </p>
          )}

          <Input
            name={"username"}
            label={"Username name"}
            placeholder={"Your Username"}
            type="text"
            uberTragen={uberTragen}
            container1={container1.username}
            style={`${error.username ? "border-2 border-[#E14942]" : ""}`}
          />
          {error.username && (
            <p className="text-error text-xs text-[#E14942]">
              {error.username}
            </p>
          )}

          <Button
            text={"Continue 1/3 "}
            type={"next"}
            bgColor="bg-black"
            clickHandler={HandleNext}
          />
        </motion.div>
      </div>
    </div>
  );
};
