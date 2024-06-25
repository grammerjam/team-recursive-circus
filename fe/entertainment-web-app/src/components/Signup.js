import React, { useState } from "react";
import logoIcon from "../assets/logo.svg";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeatPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      // Handle form submission (e.g., send data to a server)
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="bg-dark-blue flex flex-col gap-16 justify-center items-center w-full h-screen">
      <img src={logoIcon} alt="Logo" className="w-8 h-6" />
      <form
        className="bg-semi-dark-blue shadow-2xl rounded-2xl overflow-hidden mb-80"
        onSubmit={handleSubmit}
      >
        <div className="px-8 py-10 md:px-10">
          <h2 className="font-outfit text-4xl text-left text-pure-white dark:text-pure-white">
            Sign Up
          </h2>

          <div className="mt-10">
            <div className="relative">
              <label
                className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
                htmlFor="email"
              ></label>
              <input
                placeholder="Email address"
                className="block w-full px-4 py-3 mt-2 bg-semi-dark-blue border-b"
                name="email"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-6">
              <label
                className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
                htmlFor="password"
              ></label>
              <input
                placeholder="Password"
                className="block w-full px-4 py-3 mt-2 bg-semi-dark-blue border-b"
                name="password"
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-6">
              <label
                className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
                htmlFor="repeatPassword"
              ></label>
              <input
                placeholder="Repeat Password"
                className="block w-full px-4 py-3 mt-2 bg-semi-dark-blue border-b"
                name="repeatPassword"
                id="repeatPassword"
                type="password"
                value={formData.repeatPassword}
                onChange={handleChange}
                required
              />
            </div>
            {error && (
              <div className="mt-4 text-red-500 text-sm">
                {error}
              </div>
            )}
            <div className="mt-10">
              <button
                className="w-full px-4 py-3 tracking-wide rounded text-white bg-pure-red hover:bg-white hover:text-gray-500"
                type="submit"
              >
                Create an account
              </button>
            </div>
          </div>
        </div>
        <div className="px-8 pb-8">
          <div className="text-sm text-white text-center">
            Already have an account?
            <a className="tx-small px-2 text-pure-red" href="/login">
              Login
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
