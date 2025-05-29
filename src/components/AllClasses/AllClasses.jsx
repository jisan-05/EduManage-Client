import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch classes that are pending or accepted (exclude rejected)
    const fetchClasses = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${import.meta.env.VITE_API_KEY}/class`);
        // Filter out rejected classes
        const filtered = res.data.filter(
          (cls) => cls.status === "pending" || cls.status === "accepted"
        );
        setClasses(filtered);
      } catch (error) {
        toast.error("Failed to fetch classes");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, [reload]);

  const updateStatus = async (classId, status) => {
    try {
      await axios.put(`${import.meta.env.VITE_API_KEY}/class/${classId}`, {
        status,
      });
      toast.success(`Class ${status === "accepted" ? "approved" : "rejected"}!`);
      setReload(!reload);
    } catch (error) {
      toast.error("Failed to update class status");
      console.error(error);
    }
  };

  const handleApprove = (id) => updateStatus(id, "accepted");
  const handleReject = (id) => updateStatus(id, "rejected");

  const handleProgress = (classId) => {
    // TODO: Implement class progress display
    navigate(`/dashboard/myClassDetails/${classId}`);
    
  };

  if (loading) return <p className="text-center py-10">Loading classes...</p>;

  if (classes.length === 0)
    return <p className="text-center py-10">No classes available</p>;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">All Classes</h2>
      <div className="overflow-x-auto">
        <table className="table w-full bg-white shadow rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Email</th>
              <th>Short Description</th>
              <th>Approve</th>
              <th>Reject</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls) => (
              <tr key={cls._id}>
                <td>{cls.title}</td>
                <td>
                  <img
                    src={cls.image}
                    alt={cls.title}
                    className="w-20 h-14 object-cover rounded"
                  />
                </td>
                <td>{cls.email}</td>
                <td className="max-w-xs truncate">{cls.description}</td>
                <td>
                  <button
                    className="btn btn-sm btn-success"
                    disabled={cls.status === "accepted"}
                    onClick={() => handleApprove(cls._id)}
                  >
                    Approve
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleReject(cls._id)}
                  >
                    Reject
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-info"
                    disabled={cls.status !== "accepted"}
                    onClick={() => handleProgress(cls._id)}
                  >
                    Progress
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

export default AllClasses;
