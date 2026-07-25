"use client";

import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function AdminSignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    try {
      await signOut(auth);
      router.replace("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Admin sign-out failed:", error);
    }
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-[#082b57] transition hover:border-red-300 hover:bg-red-50 hover:text-red-700"
    >
      Sign Out
    </button>
  );
}