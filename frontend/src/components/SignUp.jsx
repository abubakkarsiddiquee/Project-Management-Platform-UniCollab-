// src/components/SignUp.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUp = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const newUser = { name, email, password };
    setUser(newUser); 
    navigate("/profile"); 
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="mb-4 text-2xl font-bold">Sign-Up</h2>
      <form onSubmit={handleSignUp} className="flex flex-col">
        <input
          type="text"
          placeholder="Name"
          className="mb-2 p-2 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="mb-2 p-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border border-gray-300 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Sign-Up
        </button>
      </form>

      {/* Link to Login page */}
      <p className="mt-4">
        Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
