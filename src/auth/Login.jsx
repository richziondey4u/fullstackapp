import React, { useContext, useState } from "react";
import ShopContext from "../context/ShopContext";

const Login = () => {
  const { login } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="auth-card"> 
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
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
        <button type="submit" className="auth-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
