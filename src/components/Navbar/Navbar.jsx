import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import AuthContext from "../../Providers/AuthContext";
import logo from "../../../src/assets/logo/image1.png";

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
                <Link to="/" className="btn btn-ghost text-xl">
                    Lost and Found
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/AddLostAndFoundItems">
                            All Classes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/AllLostAndFoundItems">
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
                        {user?.photoURL ? (
                            <img
                                src={user?.photoURL}
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
                            <NavLink to="/AddLostAndFoundItems">
                                All Classes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/AllLostAndFoundItems">
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
