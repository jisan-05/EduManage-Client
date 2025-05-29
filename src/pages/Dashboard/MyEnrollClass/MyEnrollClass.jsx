import React from 'react';
import useAuth from '../../../hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MyEnrollClass = () => {
  const { user } = useAuth();

  const { data: myEnrollClass = [], isLoading } = useQuery({
    queryKey: ['myEnrollClass', user?.email],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_KEY}/enroll/${user?.email}`);
      return data;
    },
  });

  if (isLoading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {myEnrollClass.map((cls) => (
        <div
          key={cls._id}
          className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition"
        >
          <figure>
            <img
              src={cls.classImage}
              alt={cls.classTitle}
              className="h-48 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{cls.classTitle}</h2>
            <p className="text-sm text-gray-600">Instructor: {cls.instructorEmail}</p>
            <div className="card-actions justify-end">
              <Link to={`/dashboard/myEnrollClassDetails/${cls.classId}`}>
                <button className="btn btn-primary btn-sm">Continue</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyEnrollClass;
