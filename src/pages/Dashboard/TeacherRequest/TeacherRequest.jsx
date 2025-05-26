import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const TeacherRequest = () => {
    const {
        data: pendingTeacher = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["pendingTeacher"],
        queryFn: async () => {
            const { data } = await axios.get(
                `${import.meta.env.VITE_API_KEY}/teacher-requests`
            );
            return data;
        },
    });

    const handleStatusUpdate = async (id, status) => {
        const { data } = await axios.patch(
            `${import.meta.env.VITE_API_KEY}/teacher-status/${id}`,
            { status: status }
        );
        console.log(data);
        refetch();
    };

    return (
        <div className="p-6 bg-white rounded-md shadow-md overflow-x-auto">
            <h2 className="text-2xl font-semibold mb-4">Teacher Requests</h2>
            <table className="table-auto w-full text-left">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-2">Image</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Experience</th>
                        <th className="p-2">Title</th>
                        <th className="p-2">Category</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pendingTeacher.map((req) => (
                        <tr key={req._id} className="border-t">
                            <td className="p-2">
                                <img
                                    src={req.image}
                                    alt={req.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                            </td>
                            <td className="p-2">{req.name}</td>
                            <td className="p-2">{req.experience}</td>
                            <td className="p-2">{req.title}</td>
                            <td className="p-2">{req.category}</td>
                            <td className={`p-2 capitalize`}>
                                <p
                                    className={`px-3 py-1 rounded-2xl font-medium inline ${
                                        req.status === "accepted"
                                            ? "bg-green-200"
                                            : "bg-red-200"
                                    }`}
                                >
                                    {req.status}
                                </p>{" "}
                            </td>
                            <td className="p-2 space-x-2">
                                <button
                                    onClick={() =>
                                        handleStatusUpdate(req._id, "accepted")
                                    }
                                    className={`px-3 py-1 ${
                                        req.status === "accepted"
                                            ? " bg-gray-500 text-white rounded cursor-not-allowed "
                                            : "bg-green-500 text-white rounded hover:bg-green-600 "
                                    }`}
                                    disabled={req.status === "rejected"}
                                >
                                    Approve
                                </button>
                                <button
                                    onClick={() =>
                                        handleStatusUpdate(req._id, "rejected")
                                    }
                                    className={`px-3 py-1 ${
                                        req.status === "rejected"
                                            ? " bg-gray-500 text-white rounded cursor-not-allowed "
                                            : " bg-red-500 text-white rounded hover:bg-red-600"
                                    }`}
                                    disabled={req.status === "rejected"}
                                >
                                    Reject
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeacherRequest;
