import React, { useState } from "react";

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

  /* Form Color: #161d2f */

  return (
    <div className="bg-[#10131d] flex flex-row justify-center w-full h-screen">
      <form class="bg-[#161d2f] shadow-2xl rounded-2xl overflow-hidden">
        <div class="px-8 py-10 md:px-10">
          <h2 class="text-4xl font-extrabold text-left text-zinc-800 dark:text-white">
            Sign Up
          </h2>

          <div class="mt-10">
            <div class="relative">
              <label
                class="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
                for="email"
              ></label>
              <input
                placeholder="Email address"
                class="block w-full px-4 py-3 mt-2 bg-[#161d2f] border-b"
                name="email"
                id="email"
                type="email"
              />
            </div>
            <div class="mt-6">
              <label
                class="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
                for="password"
              ></label>
              <input
                placeholder="Password"
                class="block w-full px-4 py-3 mt-2 bg-[#161d2f] border-b"
                name="password"
                id="password"
                type="password"
                required
              />
            </div>
            <div class="mt-6">
              <label
                class="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
                for="repeatPassword"
              ></label>
              <input
                placeholder="Repeat Password"
                class="block w-full px-4 py-3 mt-2 bg-[#161d2f] border-b"
                name="repeatPassword"
                id="repeatPassword"
                type="repeatPassword"
                required
              />
            </div>
            <div class="mt-10">
              <button
                class="w-full px-4 py-3 tracking-wide rounded text-white bg-[#FC4747] hover:bg-white hover:text-gray-500"
                type="submit"
              >
                Create an account
              </button>
            </div>
          </div>
        </div>
        <div class="px-8 pb-8">
          <div class="text-sm text-white text-center">
            Already have an account?
            <a class="font-medium text-[#FC4747]" href="#">
              Login
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;

/* 
<div className="bg-[#10131d] flex flex-row justify-center w-full h-screen">
    
    <div id="heading" className="mx-auto">
      <h3 className="text-white">Sign Up</h3>
    </div>
    <form className="text-white grid grid-cols-1 gap-2" onSubmit={handleSubmit}>
      <div className="">
        <label onSubmit={handleSubmit}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input 
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="repeatPassword">Repeat Password:</label>
        <input
          type="password"
          id="repeatPassword"
          name="repeatPassword"
          value={formData.repeatPassword}
          onChange={handleChange}
          required
        />
      </div>
      {error && <p className="text-red">{error}</p>}
      <button className="bg-white text-gray-600 rounded" type="submit">Submit</button>
    </form>
</div> */
