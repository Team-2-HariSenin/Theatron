import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement sign up logic here (e.g., API call, data validation)
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="py-8 text-center">
        <h1 class="font-inter text-gray-800 text-5xl font-bold">THEATRON</h1>
      </div>
      <div className="mx-auto w-full max-w-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <p className="text-gray-800 text-3xl">Create account</p>
            <label htmlFor="firstName" className="text-gray-700 block"></label>
            <input
              placeholder="First and Last Name"
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="focus:border-sky-500 focus:ring-sky-500 mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700 block"></label>
            <input
              placeholder="Your Email Address"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus:border-sky-500 focus:ring-sky-500 mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="text-gray-700 block"></label>
            <input
              placeholder="Create Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus:border-sky-500 focus:ring-sky-500 mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring"
            />
          </div>
          <div className="py-2">
            <p className="text-gray-900 font-inter">
              i Password must be at least 8 characters.
            </p>
          </div>
          <button
            type="submit"
            className="w-full rounded-xl border bg-yellow px-4 py-2 text-black"
          >
            Create Your THEATRON Account
          </button>
          <div className="flex items-center py-2">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-gray-700">
              Show Password
            </label>
          </div>
        </form>
        <div className="flex w-full flex-col justify-center">
          <div class="relative py-2">
            <div class="absolute inset-0 flex items-center">
              <div class="border-gray-300 w-full border-b"></div>
            </div>
            <div class="relative flex justify-center">
              <span class="text-gray-500 bg-white px-4 text-sm">
                Already have an account?
              </span>
            </div>
          </div>
          <Link to={"/signin"} className="text-center">
            <button className="bg-gray-100 w-3/4 rounded-xl border py-2 text-sm text-black">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
