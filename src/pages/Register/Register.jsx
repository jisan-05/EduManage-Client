import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../providers/AuthContext";
import toast from "react-hot-toast";

// import axios from "axios";

import { cloudinaryUploadLow, saveUser } from "../../Utils/Utils";
import { getAuth } from 'firebase/auth';

const Register = () => {
    const {
        createUser,
        signInWithGoogle,
        user,
        loading,
        updateUserProfile,
        setLoading,
    } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/";


    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.image.files[0];

        try {
            const photoURL = await cloudinaryUploadLow(image);
            const result = await createUser(email, password);

            await updateUserProfile(name, photoURL);


            await saveUser({ ...result?.user, displayName: name, photoURL });

            toast.success("User created successfully!");
            navigate(from, { replace: true });
        } catch (error) {
            console.error(error);
            toast.error(
                error.message || "Something went wrong. Please try again."
            );
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        const data = await signInWithGoogle();
        await saveUser(data?.user);
        navigate(from, { replace: true });
        toast.success("Google Login Success");
    };

    return (
        <div className="flex justify-center items-center my-10 bg-white">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                    <p className="text-sm text-gray-400">Welcome to Sh Tech</p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    noValidate=""
                    action=""
                    className="space-y-6 ng-untouched ng-pristine ng-valid"
                >
                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter Your Name Here"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#07a698] bg-gray-200 text-gray-900"
                                data-temp-mail-org="0"
                            />
                        </div>
                        {/* For upload image from local using imageBB */}
                        <div>
                            <label
                                htmlFor="image"
                                className="block mb-2 text-sm"
                            >
                                Select Your Image:
                            </label>
                            <input
                                required
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm"
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                placeholder="Enter Your Email Here"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#07a698] bg-gray-200 text-gray-900"
                                data-temp-mail-org="0"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <label
                                    htmlFor="password"
                                    className="text-sm mb-2"
                                >
                                    Password
                                </label>
                            </div>
                            <input
                                type="password"
                                name="password"
                                autoComplete="new-password"
                                id="password"
                                required
                                placeholder="*******"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#07a698] bg-gray-200 text-gray-900"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="bg-[#07a698] hover:bg-[#01998c]  w-full rounded-md py-3 text-white"
                        >
                            Continue
                        </button>
                    </div>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">
                        Signup with social accounts
                    </p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div
                    onClick={handleGoogleSignIn}
                    className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
                >
                    <FcGoogle size={32} />

                    <p>Continue with Google</p>
                </div>
                <p className="px-6 text-sm text-center text-gray-400">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="hover:underline hover:text-[#01998c] text-gray-600"
                    >
                        Login
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default Register;
