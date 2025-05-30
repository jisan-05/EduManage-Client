import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const ManageEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchEvents = async () => {
        try {
            const res = await axios.get(
                `${import.meta.env.VITE_API_KEY}/events`
            );
            setEvents(res.data);
        } catch (err) {
            console.error("Error fetching events:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "This event will be deleted permanently!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(
                    `${import.meta.env.VITE_API_KEY}/events/${id}`,
                );
                setEvents(events.filter((event) => event._id !== id));

                Swal.fire("Deleted!", "The event has been deleted.", "success");
            } catch (error) {
                console.error("Error deleting event:", error);
                Swal.fire(
                    "Error",
                    "Something went wrong while deleting.",
                    "error"
                );
            }
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#07a698]"></div>
            </div>
        );
    }

    return (
        <section className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Manage Events
                    </h2>
                    <Link to="/dashboardLayout/addEvent">
                        <button className="flex items-center gap-2 bg-[#07a698] text-white px-4 py-2 rounded hover:bg-[#058a81] transition">
                            <FaPlus /> Add Event
                        </button>
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-[#07a698] text-white text-left">
                                <th className="p-4">Image</th>
                                <th className="p-4">Headline</th>
                                <th className="p-4">Subheadline</th>
                                <th className="p-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map((event) => (
                                <tr
                                    key={event._id}
                                    className="border-b hover:bg-gray-50"
                                >
                                    <td className="p-4">
                                        <img
                                            src={event.image}
                                            alt={event.headline}
                                            className="w-20 h-16 object-cover rounded"
                                        />
                                    </td>
                                    <td className="p-4 font-medium">
                                        {event.headline}
                                    </td>
                                    <td className="p-4 text-gray-600">
                                        {event.subHeadline}
                                    </td>
                                    <td className="p-4 text-center space-x-4">
                                        <button
                                            className="text-red-500 hover:text-red-700"
                                            onClick={() =>
                                                handleDelete(event._id)
                                            }
                                        >
                                            <FaTrash />
                                        </button>
                                        <button
                                            className="text-blue-500 hover:text-blue-700"
                                            onClick={() =>
                                                Swal.fire(
                                                    "Coming Soon",
                                                    "Edit functionality is under development.",
                                                    "info"
                                                )
                                            }
                                        >
                                            <FaEdit />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {events.length === 0 && (
                                <tr>
                                    <td
                                        colSpan="4"
                                        className="text-center p-4 text-gray-500"
                                    >
                                        No events found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ManageEvents;
