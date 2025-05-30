import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

import logo from "../../../src/assets/logo/image1.png";
import AuthContext from "../../providers/AuthContext";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // const [profile,setProfile] = useState('')
    // useEffect(()=>{
    //     setProfile(user?.photoURL)
    // },[])

    const signOut = () => {
        logOut();
    };
    console.log(user?.photoURL);

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-2xl">
                    EduManager
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="text-lg font-medium">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="text-lg font-medium">
                        <NavLink to="/classes">
                            All Classes
                        </NavLink>
                    </li>
                    <li className="text-lg font-medium">
                        <NavLink to="/techOn">
                            Teach on EduManage
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <label className="swap swap-rotate"></label>
                <div className="dropdown dropdown-end z-50">
                    <div
                        tabIndex={1}
                        className="tooltip tooltip-bottom"
                        data-tip={user?.displayName}
                    >
                        {user ? (
                            <img
                                src={user?.photoURL || "https://i.ibb.co/9mm4bKz1/blank-profile-picture-973460-640.png"}
                                className="w-12 h-12 bg-cover rounded-full"
                                alt="User"
                            />
                        ) : (
                            <button className="btn btn-square btn-ghost md:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-5 w-5 stroke-current"
                                >
                                    {" "}
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>{" "}
                                </svg>
                            </button>
                        )}
                    </div>
                    <ul
                        tabIndex={1}
                        className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li className="">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/classes">
                                All Classes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/techOn">
                                Teach on EduManage
                            </NavLink>
                        </li>

                        {user && (
                            <li>
                                <NavLink to="/dashboard">Dashboard</NavLink>
                            </li>
                        )}

                        {user ? (
                            <li onClick={signOut}>
                                <Link>Logout</Link>
                            </li>
                        ) : (
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        )}
                    </ul>
                </div>

                {user ? (
                    <></>
                ) : (
                    <Link to="/login">
                        <button className="btn btn-primary ">Login</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
