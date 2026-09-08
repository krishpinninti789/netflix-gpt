import Image from "next/image";
import { NETFLIX_LOGO_URL } from "@/utils/constants";

const Header = () => {
  return (
    <div className="relative z-10 p-8 bg-linear-to-b from-black">
      <Image
        width={100}
        height={100}
        alt="app-logo"
        className="h-16 w-36"
        src={NETFLIX_LOGO_URL}
      />
    </div>
  );
};

export default Header;
