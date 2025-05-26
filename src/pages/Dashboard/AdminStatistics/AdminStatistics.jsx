import React from 'react';
import {
    FaUsers,
    FaBook,
    FaChartBar,
    FaHome,
    FaAngleLeft,
    FaAngleRight,
} from "react-icons/fa";
const AdminStatistics = () => {
  return (
    <div>
      <h3 className="text-3xl font-semibold mb-4">Welcome, Admin</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {/* Cards */}
                    <DashboardCard
                        title="Total Users"
                        value="128"
                        color="text-blue-600"
                    />
                    <DashboardCard
                        title="Active Courses"
                        value="34"
                        color="text-green-600"
                    />
                    <DashboardCard
                        title="Pending Requests"
                        value="7"
                        color="text-red-500"
                    />
                </div>
    </div>
  );
};

// Reusable DashboardCard component
const DashboardCard = ({ title, value, color }) => (
    <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className={`text-2xl font-semibold ${color}`}>{value}</p>
    </div>
);

export default AdminStatistics;