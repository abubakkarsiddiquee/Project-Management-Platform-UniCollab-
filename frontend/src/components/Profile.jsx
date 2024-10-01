// src/components/Profile.jsx
import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="mb-4 text-2xl font-bold">Profile</h2>
      <div className="mt-4">
        <h3 className="text-xl">Your Details:</h3>
        <ul className="list-disc list-inside">
          <li>Name: <strong>{user.name}</strong></li>
          <li>Email: <strong>{user.email}</strong></li>
        </ul>
      </div>

      {/* Link to log out and return to login */}
      <p className="mt-4">
        <Link to="/login" className="text-blue-500">Log Out</Link>
      </p>
    </div>
  );
};

export default Profile;
