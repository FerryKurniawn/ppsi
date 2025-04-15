import React, { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-6xl flex flex-row items-center">
        <div className="w-1/2 flex justify-center items-center">
          <img 
            src="logo.png" 
            alt="Logo Madrasah Aliyah Negeri 1 Sintang" 
            className="w-96 h-96"
          />
        </div>

        <div className="w-1/2 p-8">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-1">Selamat Datang</h2>
            <p className="text-center mb-8">
              Halo, Selamat Datang di <strong>ARISMA</strong> (
              <strong>ARSIP DIGITAL MADRASAH ALIYAH NEGERI 1</strong>).
              <br />
              Solusi Cerdas Pengelolaan Arsip Digital Madrasah Aliyah Negeri 1
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">User name</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:border-green-500"
                  placeholder="Enter your User name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:border-green-500"
                    placeholder="Enter your Password"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <img src="/visibility.png" alt="Hide password" width="18" />
                    ) : (
                      <img src="/invisible-symbol.png" alt="Show password" width="18" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="mr-2"
                />
                <label htmlFor="remember" className="text-gray-700">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-800 text-white font-medium rounded-full hover:bg-green-900 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}