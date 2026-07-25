"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage("");
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);

      router.push("/admin");
      router.refresh();
    } catch (error: unknown) {
      console.error("Admin login failed:", error);

      setErrorMessage(
        "Login failed. Please check your email address and password.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f7fa] px-4 py-10">
      {/* Background decorations */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />

      <section className="relative grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(8,43,87,0.16)] lg:grid-cols-[0.9fr_1.1fr]">
        {/* Branding panel */}
        <div className="flex flex-col justify-between bg-[#082b57] p-8 text-white sm:p-10">
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white p-1">
                <Image
                  src="/samvaad-logo.png"
                  alt="SAMVAAD logo"
                  width={64}
                  height={64}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              <div>
                <p className="text-xl font-bold tracking-[0.16em]">
                  SAMVAAD
                </p>

                <p className="mt-1 text-xs text-blue-200">
                  Informing Youth, Empowering Nation
                </p>
              </div>
            </Link>

            <div className="mt-16">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-300">
                Administration
              </p>

              <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Manage SAMVAAD securely.
              </h1>

              <p className="mt-5 leading-8 text-blue-100">
                Sign in to manage news publications, member information and
                website content.
              </p>
            </div>
          </div>

          <p className="mt-12 text-xs leading-6 text-blue-300">
            Access is restricted to authorised SAMVAAD administrators.
          </p>
        </div>

        {/* Login form */}
        <div className="p-7 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-md">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e96f17]">
              Admin Portal
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#082b57]">
              Welcome back
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Enter your authorised administrator credentials.
            </p>

            <form onSubmit={handleLogin} className="mt-8 space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-[#082b57]"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="admin@example.com"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#e96f17] focus:ring-4 focus:ring-orange-100"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-bold text-[#082b57]"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 pr-20 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#e96f17] focus:ring-4 focus:ring-orange-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-[#082b57] hover:text-[#e96f17]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Error */}
              {errorMessage && (
                <div
                  role="alert"
                  className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
                >
                  {errorMessage}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center rounded-2xl bg-[#082b57] px-5 py-3.5 font-bold text-white shadow-lg shadow-blue-950/15 transition hover:bg-[#123f70] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Signing in..." : "Sign in to Admin Panel"}
              </button>
            </form>

            <div className="mt-8 border-t border-slate-200 pt-6 text-center">
              <Link
                href="/"
                className="text-sm font-bold text-[#082b57] transition hover:text-[#e96f17]"
              >
                ← Return to SAMVAAD website
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}