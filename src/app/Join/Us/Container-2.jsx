"use client";

import { Header } from "./Header";
import { motion } from "framer-motion";
import { Input } from "./Input";
import { Button } from "./Button";

const regex = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[0-9]{8,}$/,
  password: /^.{6,}$/,
};

export const Container2 = ({
  uberTragen,
  handlerSub,
  error,
  NextHandler,
  BackHandler,
  setContainer1,
  container1,
  setError,
}) => {
  const HandleNext = () => {
    const newError = {};

    if (!container1.email) {
      newError.email = "Имэйл хаягаа оруулна уу";
    } else if (!regex.email.test(container1.email.trim())) {
      newError.email = "Зөв имэйл хаяг оруулна уу";
    }

    if (!container1.phone) {
      newError.phone = "Утасны дугаараа оруулна уу";
    } else if (!regex.phone.test(container1.phone)) {
      newError.phone = "Утасны дугаар буруу байна (дор хаяж 8 тоо)";
    }

    if (!container1.password) {
      newError.password = "Нууц үгээ оруулна уу";
    } else if (!regex.password.test(container1.password)) {
      newError.password = "Нууц үг дор хаяж 6 тэмдэгт байх ёстой";
    }

    if (!container1.confirmpassword) {
      newError.confirmpassword = "Нууц үгээ давтаж оруулна уу";
    } else if (container1.confirmpassword !== container1.password) {
      newError.confirmpassword = "Нууц үг таарахгүй байна";
    }

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    setError({});
    NextHandler();
  };

  return (
    <div className="w-[480px] h-full flex justify-center flex-col p-8 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col rounded-md gap-8">
        <motion.div>
          <Header />

          <Input
            name="email"
            label="Email"
            placeholder="Your email"
            type="email"
            uberTragen={uberTragen}
            container1={container1.email}
            style={`${error.email ? "border-2 border-[#E14942]" : ""}`}
          />
          {error.email && (
            <p className="text-xs text-[#E14942] mt-1">{error.email}</p>
          )}

          <Input
            name="phone"
            label="Phone"
            placeholder="Your phone"
            type="text"
            uberTragen={uberTragen}
            container1={container1.phone}
            style={`${error.phone ? "border-2 border-[#E14942]" : ""}`}
          />
          {error.phone && (
            <p className="text-xs text-[#E14942] mt-1">{error.phone}</p>
          )}

          <Input
            name="password"
            label="Password"
            placeholder="Your password"
            type="password"
            uberTragen={uberTragen}
            container1={container1.password}
            style={`${error.password ? "border-2 border-[#E14942]" : ""}`}
          />
          {error.password && (
            <p className="text-xs text-[#E14942] mt-1">{error.password}</p>
          )}

          <Input
            name="confirm"
            label="Confirm Password"
            placeholder="Confirm password"
            type="password"
            uberTragen={uberTragen}
            container1={container1.confirmpassword}
            style={`${
              error.confirmpassword ? "border-2 border-[#E14942]" : ""
            }`}
          />
          {error.confirmpassword && (
            <p className="text-xs text-[#E14942] mt-1">
              {error.confirmpassword}
            </p>
          )}

          <div className="flex justify-between mt-6 gap-2">
            <Button
              text="Back"
              clickHandler={BackHandler}
              type={"prev"}
              bgColor="bg-transparent border border-gray-300  "
            />
            <Button
              text="Continue 2/3"
              clickHandler={HandleNext}
              type={"next"}
              bgColor={"bg-black"}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
