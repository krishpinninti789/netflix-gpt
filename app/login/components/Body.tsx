import Image from "next/image";
import Login from "./Login";
import { NETFLIX_HOME_BG_URL } from "@/utils/constants";

const Body = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        alt="bg-logo"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        src={NETFLIX_HOME_BG_URL}
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <Login />
      </div>
    </div>
  );
};

export default Body;
