"use client";
import { useState } from "react";
import { Container1 } from "./Container-1";
import { Container2 } from "./Container-2";
import { Container3 } from "./Container-3";
import { Container } from "./Container";

const Join = () => {
  const components = [Container1, Container2, Container3, Container];
  const [step, setStep] = useState(0);
  const Stepper = components[step];

  const [container1, setContainer1] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
    birthdate: null,
    file: null,
  });

  const [error, setError] = useState({});

  const NextHandler = () => {
    setStep((prev) => prev + 1);
  };
  const BackHandler = () => {
    setStep((prev) => prev - 1);
  };

  const uberTragen = (event) => {
    console.log(event.target.value);
    if (event.target.name === "firstname") {
      setContainer1((prev) => {
        return { ...prev, firstname: event.target.value };
      });
    } else if (event.target.name === "lastname") {
      setContainer1((prev) => {
        return { ...prev, lastname: event.target.value };
      });
    } else if (event.target.name === "username") {
      setContainer1((prev) => {
        return { ...prev, username: event.target.value };
      });
    } else if (event.target.name === "email") {
      setContainer1((prev) => {
        return { ...prev, email: event.target.value };
      });
    } else if (event.target.name === "phone") {
      setContainer1((prev) => {
        return { ...prev, phone: event.target.value };
      });
    } else if (event.target.name === "password") {
      setContainer1((prev) => {
        return { ...prev, password: event.target.value };
      });
    } else if (event.target.name === "confirm") {
      setContainer1((prev) => {
        return { ...prev, confirmpassword: event.target.value };
      });
    }
  };

  return (
    <div className="flex justify-center flex-row  mt-[50px]">
      <Stepper
        NextHandler={NextHandler}
        BackHandler={BackHandler}
        uberTragen={uberTragen}
        setContainer1={setContainer1}
        container1={container1}
        error={error}
        setError={setError}
      />
    </div>
  );
};

export default Join;
