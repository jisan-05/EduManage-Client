import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAuth from "../../../hook/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyClass = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loadingDelete, setLoadingDelete] = useState(false);

    const {
        data: myClass = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["myClass", user?.email],
        queryFn: async () => {
            const { data } = await axios.get(
                `${import.meta.env.VITE_API_KEY}/myClass/${user?.email}`
            );
            return data;
        },
    });

    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "You won’t be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
        });

        if (confirm.isConfirmed) {
            setLoadingDelete(true);
            try {
                await axios.delete(
                    `${import.meta.env.VITE_API_KEY}/class/${id}`
                );
                Swal.fire(
                    "Deleted!",
                    "Your class has been deleted.",
                    "success"
                );
                refetch();
            } catch (error) {
                console.error(error);
                Swal.fire("Error", "Something went wrong!", "error");
            } finally {
                setLoadingDelete(false);
            }
        }
    };

    const handleUpdate = (id) => {
        navigate(`/dashboard/updateClass/${id}`);
    };

    const handleSeeDetails = (id) => {
        navigate(`/dashboard/myClassDetails/${id}`);
    };

    if (isLoading) return <div className="text-center mt-10">Loading...</div>;

    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myClass.map((item) => (
                <div
                    key={item._id}
                    className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                    <div className="h-48 w-full overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="p-4 space-y-2">
                        <h2 className="text-xl font-semibold text-gray-800">
                            {item.title}
                        </h2>
                        <div className="text-sm text-gray-600">
                            <p>
                                <span className="font-medium">Instructor:</span>{" "}
                                {item.name}
                            </p>
                            <p>
                                <span className="font-medium">Email:</span>{" "}
                                {item.email}
                            </p>
                            <p>
                                <span className="font-medium">Price:</span> $
                                {item.price}
                            </p>
                            <p>
                                <span className="font-medium">
                                    Description:
                                </span>{" "}
                                {item.description}
                            </p>
                            <p>
                                <span className="font-medium">Status:</span>
                                <span
                                    className={`ml-1 px-2 py-0.5 rounded-full text-xs font-semibold uppercase ${
                                        item.status === "approved"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-700"
                                    }`}
                                >
                                    {item.status}
                                </span>
                            </p>
                        </div>
                        <div className="pt-3 flex flex-wrap gap-2">
                            <button
                                onClick={() => handleUpdate(item._id)}
                                className="btn btn-sm btn-outline btn-primary"
                            >
                                Update
                            </button>
                            <button
                                onClick={() => handleDelete(item._id)}
                                className="btn btn-sm btn-outline btn-error"
                                disabled={loadingDelete}
                            >
                                {loadingDelete ? "Deleting..." : "Delete"}
                            </button>
                            <button
                                onClick={() => handleSeeDetails(item._id)}
                                className="btn btn-sm btn-outline btn-accent"
                                disabled={item.status !== "accepted"}
                            >
                                See Details
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyClass;
