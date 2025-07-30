"use server";

import { signOut } from "@/auth.config";

export async function logout() {
  try {
    await signOut();
  } catch (error) {
    console.log(error);
    return "Credentials SignOut";
  }
}
