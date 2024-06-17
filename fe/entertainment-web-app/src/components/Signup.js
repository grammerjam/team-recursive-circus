import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [error, setError] = useState('');

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
      setError('Passwords do not match');
    } else {
      setError('');
      // Handle form submission (e.g., send data to a server)
      console.log('Form submitted:', formData);
    }
  };

  /* Form Color: #161d2f */

  return (
    <div className="bg-[#10131d] flex flex-row justify-center w-full h-screen">
      <section
        id="signup"
        className="container my-auto mx-auto w-1/4 h-1/2 bg-[#161d2f] flex flex-row"
      >
        <div id="heading" className="mx-auto">
          <h3 className="text-white">Sign Up</h3>
        </div>
        <form className="" onSubmit={handleSubmit}>
          <div>
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
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Signup;
