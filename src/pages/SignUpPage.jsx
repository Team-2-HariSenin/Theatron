import React, { useState } from "react";

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
        <h1 class="text-5xl font-inter font-bold text-gray-800">THEATRON</h1>
      </div>
      <div className="w-full max-w-sm mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <p className="text-3xl text-gray-800">Create account</p>
            <label htmlFor="firstName" className="block text-gray-700"></label>
            <input
              placeholder="First and Last Name"
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full mt-1 border rounded-md px-3 py-2 focus:border-sky-500 focus:ring focus:ring-sky-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700"></label>
            <input
              placeholder="Your Email Address"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 border rounded-md px-3 py-2 focus:border-sky-500 focus:ring focus:ring-sky-500 focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-gray-700"></label>
            <input
              placeholder="Create Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 border rounded-md px-3 py-2 focus:border-sky-500 focus:ring focus:ring-sky-500 focus:outline-none"
            />
          </div>
          <div className="py-2">
          <p className="text-gray-900 font-inter">i Password must be at least 8 characters.</p>
          </div>
          <button
            type="submit"
            className="bg-yellow text-black py-2 px-4 rounded-xl w-full border"
          >
            Create Your THEATRON Account
          </button>
          <div className="flex items-center py-2">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-gray-700">
              Show Password
            </label>
          </div>
          <div class="relative py-2">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-b border-gray-300"></div>
            </div>
            <div class="relative flex justify-center">
              <span class="bg-white px-4 text-sm text-gray-500">
                Already have an account?
              </span>
            </div>
          </div>
          <p className="text-center">
          <button
            type="submit"
            className="bg-gray-100 text-black text-sm py-2 rounded-xl w-3/4 border"
          >
              Sign In
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
