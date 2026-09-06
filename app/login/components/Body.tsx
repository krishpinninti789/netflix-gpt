import React from "react";
import Image from "next/image";

const Body = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        alt="bg-logo"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        src={
          "https://assets.nflxext.com/ffe/siteui/vlv3/ae999ff9-5858-4638-b0f2-8abcf9fb6a08/web/IN-en-20260831-TRIFECTA-perspective_8fd44dcf-63ea-4547-8e1e-e5fc7e03883d_large.jpg"
        }
      />
      <div className="absolute inset-0 bg-black/45" />
    </div>
  );
};

export default Body;
