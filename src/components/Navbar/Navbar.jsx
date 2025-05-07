import React from "react";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                
                    <Link to='/' className="btn btn-ghost text-xl">
                        <img
                            src="/logo.webp"
                            className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                            alt=""
                        />{" "}
                        <span className="md:text-3xl">EDU MANAGE</span>
                    </Link>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="text-lg font-semibold">
                        <NavLink>Home</NavLink>
                    </li>
                    <li className="text-lg font-semibold">
                        <NavLink>All Classes</NavLink>
                    </li>
                    <li className="text-lg font-semibold">
                        <NavLink>Teach on EduManage</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-neutral bg-[#07a698] hover:bg-[#01998c] border-none rounded-3xl px-6 py-2 text-white">Login</button>
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <NavLink>Home</NavLink>
                        </li>
                        <li>
                            <NavLink>All Classes</NavLink>
                        </li>
                        <li>
                            <NavLink>Teach on EduManage</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
