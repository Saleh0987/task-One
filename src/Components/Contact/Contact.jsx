import React, { useState } from "react";
import Heading from "../../Utilities/Heading/Heading";

const InputField = ({ id, label, placeholder, value, setValue }) => (
  <div className="my-2">
    <label
      htmlFor={id}
      className={`block text-mainColor relative duration-500 ${
        value ? "top-0 z-10" : "top-10 -z-10"
      }`}
    >
      {label}:
    </label>
    <input
      onInput={(e) => setValue(e.target.value !== "")}
      id={id}
      type="text"
      placeholder={placeholder}
      className="z-30 w-full border-b p-4 focus:outline-none"
    />
  </div>
);

export default function Contact() {
  const [topName, setTopName] = useState(false);
  const [topAge, setTopAge] = useState(false);
  const [topMail, setTopMail] = useState(false);
  const [topPass, setTopPass] = useState(false);

  return (
    <>
      <div className="min-h-screen py-24 ">
        <div className="container">
          <div className="w-fit mx-auto">
            <Heading
              text={"CONATCT SECTION"}
              starbgColor={"bg-white"}
              textColor={"text-navColor"}
              bgColor={"bg-navColor"}
            />
          </div>

    <div className="form w-full lg:w-3/5 mx-auto mt-16">
      <InputField
        id="name"
        label="Your Name"
        placeholder="Your Name"
        value={topName}
        setValue={setTopName}
      />
      <InputField
        id="age"
        label="Your Age"
        placeholder="Your Age"
        value={topAge}
        setValue={setTopAge}
      />
      <InputField
        id="mail"
        label="Your Email"
        placeholder="Your Email"
        value={topMail}
        setValue={setTopMail}
      />
      <InputField
        id="pass"
        label="Your Password"
        placeholder="Your Password"
        value={topPass}
        setValue={setTopPass}
      />
      <button className="bg-mainColor hover:bg-navColor transition-all text-white py-2 px-4 rounded-lg mt-4">
        Send Message
      </button>
    </div>
        </div>
      </div>
    </>
  );
}