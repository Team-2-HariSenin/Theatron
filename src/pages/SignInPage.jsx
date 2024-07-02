import React, { useState } from "react";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement sign in logic here (e.g., API call, data validation)
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="py-8 text-center">
        <h1 class="text-5xl font-inter font-bold text-gray-800">THEATRON</h1>
      </div>
      <div className="w-full max-w-sm mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <p className="text-gray-800 text-3xl">Sign in</p>
            <label htmlFor="email" className="block text-gray-800 text-sm">
              Email or Mobile Phone Number
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-1 border  border-gray-700 rounded-md focus:border-sky-500 focus:ring focus:ring-sky-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="text-gray-800 text-sm">
                Password
              </label>
              <a href="#" className="text-sm text-blue-500">
                Forgot your password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-1 border  border-gray-700 rounded-md focus:border-sky-500 focus:ring focus:ring-sky-500 focus:outline-none"
            />
          </div>
        </form>
        <p className="text-center mb-2 ">
          <button
            type="submit"
            className="bg-yellow text-black text-sm py-2 px-1 rounded-xl w-full border  border-gray-700"
          >
            Sign In
          </button>
        </p>
        <div className="flex items-center mb-8">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-gray-800">
              Keep me signed in.
            </label>
          </div>
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-b border-gray-300"></div>
          </div>
          <div class="relative flex justify-center">
            <span class="bg-white px-4 text-sm text-gray-500">
              New to THEATRON?
            </span>
          </div>
        </div>
        <p className="text-center mt-2 ">
          <button
            type="submit"
            className="bg-gray-100 text-black text-sm py-2 rounded-xl w-3/4 border border-gray-700"
          >
            Create your THEATRON account
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
