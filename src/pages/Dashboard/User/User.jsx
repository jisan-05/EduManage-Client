import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const User = () => {
    const { data: users = [], isLoading } = useQuery({
        queryKey: ["users"],
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
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users.map((user,idx) => (
                            <tr key={idx}>
                                <th>{idx+1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user?.image}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {user.name}
                                            </div>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {user.email}
                                    </div>
                                </td>
                                <td>{user.role}</td>
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
