import React from 'react';
import useAuth from '../hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Profile = () => {
  const { user } = useAuth();

  const { data: userData = {}, isLoading } = useQuery({
    queryKey: ["user", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_KEY}/user/${user?.email}`
      );
      return data;
    },
  });

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl max-w-md w-full p-6 md:p-8">
        <div className="flex flex-col items-center">
          <img
            src={userData.image || "https://i.ibb.co/2n4hQhG/default-avatar.png"}
            alt="User"
            className="w-32 h-32 rounded-full object-cover shadow-md mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
          <p className=" font-semibold text-gray-500 mt-1 capitalize">{userData.role}</p>
        </div>

        <div className="mt-6 space-y-3 text-sm text-gray-700">
          <div className="flex items-center justify-between">
            <span className="font-medium">Email:</span>
            <span>{userData.email}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Phone:</span>
            <span>{userData.phone || 'N/A'}</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
