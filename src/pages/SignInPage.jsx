import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        <h1 class="font-inter text-gray-800 text-5xl font-bold">THEATRON</h1>
      </div>
      <div className="mx-auto w-full max-w-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <p className="text-gray-800 text-3xl">Sign in</p>
            <label htmlFor="email" className="text-gray-800 block text-sm">
              Email or Mobile Phone Number
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-gray-700 focus:border-sky-500 focus:ring-sky-500 mt-1 w-full rounded-md border px-3 py-1 focus:outline-none focus:ring"
            />
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-gray-800 text-sm">
                Password
              </label>
              <a href="#" className="text-blue-500 text-sm">
                Forgot your password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-gray-700 focus:border-sky-500 focus:ring-sky-500 mt-1 w-full rounded-md border px-3 py-1 focus:outline-none focus:ring"
            />
          </div>
          <p className="mb-2 text-center">
            <button
              type="submit"
              className="border-gray-700 w-full rounded-xl border bg-yellow px-1 py-2 text-sm text-black"
            >
              Sign In
            </button>
          </p>
          <div className="mb-8 flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-gray-800">
              Keep me signed in.
            </label>
          </div>
        </form>
      </div>
      <div className="mx-auto flex w-full max-w-sm flex-col justify-center">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="border-gray-300 w-full border-b"></div>
          </div>
          <div class="relative flex justify-center">
            <span class="text-gray-500 bg-white px-4 text-sm">
              New to THEATRON?
            </span>
          </div>
        </div>
        <Link to={"/signup"} className="item mt-2 flex w-full justify-center">
          <button
            type="submit"
            className="bg-gray-100 border-gray-700 w-3/4 rounded-xl border py-2 text-sm text-black"
          >
            Create your THEATRON account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
