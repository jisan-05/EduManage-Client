import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const User = () => {
    const { data: users = [], isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const { data } = await axios.get(
                `${import.meta.env.VITE_API_KEY}/user`
            );
            return data;
        },
    });
    if (isLoading) {
        return "Loading ...";
    }

    return (
        <div>
            <h3 className="text-3xl text-center font-semibold">
                Total user : {users.length}
            </h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users.map((user) => (
                            <tr>
                                <th>1</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                Hart Hagerty
                                            </div>
                                            <div className="text-sm opacity-50">
                                                United States
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">
                                        Desktop Support Technician
                                    </span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">
                                        details
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;
