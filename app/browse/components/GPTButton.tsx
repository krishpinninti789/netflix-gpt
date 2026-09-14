"use client";
import { toggleGPTView } from "@/utils/redux/gptSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const GPTButton = () => {
  const dispatch = useDispatch();
  const handleToggleGPTView = () => {
    dispatch(toggleGPTView());
  };
  return (
    <div>
      <button
        className="rounded-md hidden md:block py-2 px-6 text-sm bg-red-600 cursor-pointer"
        onClick={handleToggleGPTView}
      >
        GPT Search
      </button>
      <button
        className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-red-600 text-sm font-bold text-white shadow-lg shadow-red-950/30 md:hidden"
        onClick={handleToggleGPTView}
      >
        <Image
          src="/robot.png"
          alt="GPT"
          width={100}
          height={100}
          loading="eager"
          className=" rounded-full object-contain invert-100 h-8 w-8"
        />
      </button>
    </div>
  );
};

export default GPTButton;
