import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="relative z-10 p-8 bg-linear-to-b from-black">
      <Image
        width={100}
        height={100}
        alt="app-logo"
        className="h-16 w-36"
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAWiPHORowsUPy4Ef8HnCO9JXGoNeHRyWtWY4xZAfUtau5iCnG2Ko_-8QuKVa8P6wtpfnyGopi4LoAha-VghVRE_N6kRqhwpLQCpga5tzrlTEHRGHgzpa9PYmEEEgQyuEdhsyq9vmhmPR.svg"
      />
    </div>
  );
};

export default Header;
