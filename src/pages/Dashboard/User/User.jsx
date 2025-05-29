import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

const User = () => {
  const [search, setSearch] = useState("");
  const [reload, setReload] = useState(false);

  const debouncedSearch = useDebounce(search, 500);

  // Debug log to monitor search state changes
  console.log("Search state:", search);

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users", debouncedSearch, reload],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_KEY}/user`, {
        params: { search: debouncedSearch },
      });
      return res.data;
    },
    enabled: debouncedSearch.length === 0 || debouncedSearch.length >= 3,
    keepPreviousData: true,
  });

  const handleMakeAdmin = async (id) => {
    try {
      await axios.patch(`${import.meta.env.VITE_API_KEY}/users/admin/${id}`);
      toast.success("User promoted to admin!");
      setReload(!reload);
    } catch (error) {
      toast.error("Failed to promote user.");
      console.error(error);
    }
  };

  if (isLoading) return <p className="text-center py-10">Loading users...</p>;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-center">
        Total Users: {users.length}
      </h3>

      {/* Search Input */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full max-w-md"
          autoComplete="off"
          spellCheck="false"
          // optional: onFocus/onBlur handlers to debug focus issues
          onFocus={() => console.log("Input focused")}
          onBlur={() => console.log("Input blurred")}
        />
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="table w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <td>{idx + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.image || "/default-avatar.png"}
                          alt="User Avatar"
                        />
                      </div>
                    </div>
                    <div className="font-medium">{user.name}</div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn btn-sm btn-primary"
                    disabled={user.role === "admin"}
                  >
                    {user.role === "admin" ? "Admin" : "Make Admin"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
