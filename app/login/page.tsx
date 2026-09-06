import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

const page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <Header />
      <Body />
    </div>
  );
};

export default page;
