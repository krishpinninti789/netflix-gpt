import "server-only";

import { cookies } from "next/headers";
import { adminAuth } from "../utils/firebase/fireBaseAdmin";

export async function getCurrentUser() {
  const cookieStore = await cookies();

  const sessionCookie = cookieStore.get("session")?.value;

  if (!sessionCookie) {
    return null;
  }

  try {
    const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie);

    const user = await adminAuth.getUser(decodedClaims.uid);

    return user;
  } catch (error) {
    console.error("Failed to get current user:", error);

    return null;
  }
}
