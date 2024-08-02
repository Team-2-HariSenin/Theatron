import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number.";
    }
    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      return;
    }
    setLoading(true);
    setError("");
    setPasswordError("");
    try {
      const response = await axios.post(
        "https://theatron-backend.vercel.app/api/auth/register",
        {
          name: firstName,
          email,
          password,
        },
      );
      console.log("Registration response:", response.data);
      if (response.data.message === "User successfully registered") {
        navigate("/signin");
      } else {
        setError(
          response.data.message || "Registration failed. Please try again.",
        );
      }
    } catch (error) {
      console.error("Registration failed", error);
      setError(
        error.response?.data?.message ||
          "Registration failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="py-8 text-center">
        <h1 className="font-inter text-gray-800 text-5xl font-bold">
          THEATRON
        </h1>
      </div>
      <div className="mx-auto w-full max-w-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <p className="text-gray-800 text-3xl">Create account</p>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <label htmlFor="firstName" className="text-gray-700 block"></label>
            <input
              placeholder="First and Last Name"
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="focus:border-sky-500 focus:ring-sky-500 mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring"
              required
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
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="text-gray-700 block"></label>
            <input
              placeholder="Create Password"
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus:border-sky-500 focus:ring-sky-500 mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring"
              required
            />
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
          </div>
          <div className="py-2">
            <p className="text-gray-900 font-inter">
              Password must be at least 8 characters.
            </p>
          </div>
          <button
            type="submit"
            className="w-full rounded-xl border bg-yellow px-4 py-2 text-black hover:bg-light-blue"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Create Your THEATRON Account"}
          </button>
          <div className="flex items-center py-2">
            <input
              type="checkbox"
              id="showPassword"
              className="mr-2"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPassword" className="text-gray-700">
              Show Password
            </label>
          </div>
        </form>
        <div className="flex w-full flex-col justify-center">
          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="border-gray-300 w-full border-b"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="text-gray-500 bg-white px-4 text-sm">
                Already have an account?
              </span>
            </div>
          </div>
          <Link to={"/signin"} className="text-center">
            <button className="bg-gray-100 w-3/4 rounded-xl border py-2 text-sm text-black hover:bg-black-40">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
