"use client";

import { loginAction } from "@/app/actions/auth";
import { useFormState } from "react-dom";

export default function LoginPage() {
  // state untuk menangkap error dari backend
  const [state, action] = useFormState(loginAction, null);

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="p-8 bg-white shadow-xl rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-slate-800 mb-6">
          SyntaxWeb Admin
        </h1>

        {/* FRONTEND UI: Form Login */}
        <form action={action} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Username
            </label>
            <input
              name="username"
              type="text"
              className="w-full mt-1 p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
              placeholder="Masukkan username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="w-full mt-1 p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
              placeholder="********"
              required
            />
          </div>

          {/* Menampilkan error dari backend jika ada */}
          {state?.error && (
            <p className="text-red-500 text-sm italic">{state.error}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-all"
          >
            Masuk Sekarang
          </button>
        </form>
      </div>
    </div>
  );
}
