// src/components/Profile.jsx
import React from "react";

const Profile = ({ user }) => {
  // Check if user data is available
  if (!user) {
    return <div className="text-red-500">No user data available.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold">Profile Page</h1>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-lg w-full mt-4">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Country:</strong> {user.country.label} ({user.country.countryCode})</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Age:</strong> {user.age}</p>
      </div>
    </div>
  );
};

export default Profile;
