import Image from "next/image";

import { NETFLIX_LOGO_URL } from "@/utils/constants";
import { logoutAction } from "@/app/actions/auth.action";
import { getCurrentUser } from "@/app/actions/user.action";

const AppHeader = async () => {
  const user = await getCurrentUser();

  const displayName = user?.displayName || "User";
  const email = user?.email || "";

  const initials = displayName
    .split(" ")
    .map((name) => name[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]">
      <div className="flex h-18 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            width={100}
            height={100}
            alt="NetflixGPT"
            className="h-10 w-auto object-contain"
            src={NETFLIX_LOGO_URL}
            loading="eager"
          />
        </div>

        {/* User section */}
        {user && (
          <div className="flex items-center gap-4">
            {/* User information */}
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-white">{displayName}</p>

              <p className="max-w-55 truncate text-xs text-gray-400">{email}</p>
            </div>

            {/* Avatar */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-red-500 to-red-700 text-sm font-bold text-white shadow-lg shadow-red-950/30">
              {initials}
            </div>

            {/* Logout */}
            <form action={logoutAction}>
              <button
                type="submit"
                className="rounded-lg border cursor-pointer border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                Logout
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
