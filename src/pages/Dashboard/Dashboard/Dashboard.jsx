import React, { useState } from "react";
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
    FaUsers,
    FaBook,
    FaChartBar,
    FaHome,
    FaAngleLeft,
    FaAngleRight,
    FaUser,
    FaChalkboardTeacher,
} from "react-icons/fa";


const Dashboard = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`${
                    isCollapsed ? "w-20" : "w-64"
                } bg-white shadow-md p-5 transition-all duration-300 relative`}
            >
                {/* Collapse Button */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="absolute -right-3 top-6 bg-blue-500 text-white rounded-full p-1 shadow hover:bg-blue-600 transition"
                >
                    {isCollapsed ? <FaAngleRight /> : <FaAngleLeft />}
                </button>

                {/* Logo or Title */}
                <h2
                    className={`text-xl font-bold text-blue-600 mb-8 transition-opacity duration-300 ${
                        isCollapsed ? "opacity-0" : "opacity-100"
                    }`}
                >
                    Admin Panel
                </h2>

                {/* Admin Menu  */}
                {/* Navigation */}
                <nav className="space-y-4">
                    <NavItem
                        icon={<FaHome />}
                        label="Dashboard Home"
                        collapsed={isCollapsed}
                        to="/dashboard"
                        
                    />
                    <NavItem
                        icon={<FaChalkboardTeacher />}
                        label="Teacher Request"
                        collapsed={isCollapsed}
                        to="teacherRequest"
                    />
                    <NavItem
                        icon={<FaUser />}
                        label="User"
                        collapsed={isCollapsed}
                        to="user"
                    />
                    <NavItem
                        icon={<FaChartBar />}
                        label="All Classes"
                        collapsed={isCollapsed}
                        to=""
                    />
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

// Reusable NavItem component
const NavItem = ({ icon, label, collapsed, to = "#" }) => {
    const location = useLocation();
    const isActive = location.pathname === to || location.pathname === `/dashboard/${to}`;

    return (
        <Link
            to={to}
            className={`flex items-center gap-3 p-2 rounded transition ${
                isActive
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            }`}
        >
            <span className="text-lg">{icon}</span>
            {!collapsed && <span className="text-sm font-medium">{label}</span>}
        </Link>
    );
};



export default Dashboard;
