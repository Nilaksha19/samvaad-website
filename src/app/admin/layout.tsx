"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [isChecking, setIsChecking] = useState(true);
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (isLoginPage) {
        if (user) {
          router.replace("/admin");
          return;
        }

        setIsChecking(false);
        return;
      }

      if (!user) {
        router.replace("/admin/login");
        return;
      }

      setIsChecking(false);
    });

    return unsubscribe;
  }, [isLoginPage, router]);

  if (isChecking) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f7fa]">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#082b57]" />

          <p className="mt-4 font-semibold text-[#082b57]">
            Verifying administrator access...
          </p>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}