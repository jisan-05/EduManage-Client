import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
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
import useRole from "../../../hook/useRole";

const Dashboard = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [role, isLoading] = useRole();

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`${
                    isCollapsed ? "w-20" : "w-64"
                } bg-white shadow-md p-5 transition-all duration-300 relative overflow-visible`}
            >
                {/* Collapse Button */}
                <div className="absolute top-6 -right-4 z-50">
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="bg-blue-500 text-white rounded-full p-1 text-2xl shadow hover:bg-blue-600 transition"
                    >
                        {isCollapsed ? <FaAngleRight /> : <FaAngleLeft />}
                    </button>
                </div>

                {/* Logo or Title */}
                <h2
                    className={`text-xl font-bold text-blue-600 mb-8 transition-opacity duration-300 ${
                        isCollapsed ? "opacity-0" : "opacity-100"
                    }`}
                >
                    Dashboard
                </h2>

                {/* Student Menu  */}
                {role === "student" && (
                    <nav className="space-y-4">
                        <NavItem
                            icon={<FaHome />}
                            label="Go Home"
                            collapsed={isCollapsed}
                            to="/"
                        />
                        <NavItem
                            icon={<FaChalkboardTeacher />}
                            label="My enroll class"
                            collapsed={isCollapsed}
                            to="myEnrollClass"
                        />

                        <NavItem
                            icon={<FaUser />}
                            label="Profile"
                            collapsed={isCollapsed}
                            to="profile"
                        />
                    </nav>
                )}
                {/* Teacher Menu  */}
                {role === "teacher" && (
                    <nav className="space-y-4">
                        <NavItem
                            icon={<FaHome />}
                            label="Go Home"
                            collapsed={isCollapsed}
                            to="/"
                        />
                        <NavItem
                            icon={<FaChalkboardTeacher />}
                            label="Add Class"
                            collapsed={isCollapsed}
                            to="addClass"
                        />
                        <NavItem
                            icon={<FaUsers />}
                            label="My class"
                            collapsed={isCollapsed}
                            to="myClass"
                        />
                        <NavItem
                            icon={<FaUsers />}
                            label="Add Event"
                            collapsed={isCollapsed}
                            to="addEvent"
                        />
                        <NavItem
                            icon={<FaUsers />}
                            label="Manage Events"
                            collapsed={isCollapsed}
                            to="manageEvents"
                        />

                        <NavItem
                            icon={<FaUser />}
                            label="Profile"
                            collapsed={isCollapsed}
                            to="profile"
                        />
                    </nav>
                )}
                {/* Admin Menu  */}
                {role === "admin" && (
                    <nav className="space-y-4">
                        <NavItem
                            icon={<FaHome />}
                            label="Go Back"
                            collapsed={isCollapsed}
                            to="/"
                        />
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
                            icon={<FaUsers />}
                            label="User"
                            collapsed={isCollapsed}
                            to="user"
                        />
                        <NavItem
                            icon={<FaChartBar />}
                            label="All Classes"
                            collapsed={isCollapsed}
                            to="allClasses"
                        />
                        <NavItem
                            icon={<FaUser />}
                            label="Profile"
                            collapsed={isCollapsed}
                            to="profile"
                        />
                    </nav>
                )}
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
    const isActive =
        location.pathname === to || location.pathname === `/dashboard/${to}`;

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
