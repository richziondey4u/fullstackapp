import React, { useContext, useState } from "react";
import ShopContext from "../context/ShopContext";

const Signup = () => {
  const { signup } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <div className="auth-card">
      <br /> <br /> <br />
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="auth-input"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="auth-input"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="auth-input"
          />
        </label>
        <br />
        <button type="submit" className="auth-button">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
