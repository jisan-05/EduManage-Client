import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const MyClassDetails = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: '',
    deadline: '',
    description: ''
  });

  const { data: counts = {}, refetch } = useQuery({
    queryKey: ['classStats', id],
    queryFn: async () => {
      const [enrollRes, assignRes, subRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_API_KEY}/enrollments/count/${id}`),
        axios.get(`${import.meta.env.VITE_API_KEY}/assignments/count/${id}`),
        axios.get(`${import.meta.env.VITE_API_KEY}/submissions/count/${id}`),
      ]);
      return {
        totalEnrollments: enrollRes.data.count || 0,
        totalAssignments: assignRes.data.count || 0,
        totalSubmissions: subRes.data.count || 0
      };
    }
  });

  const handleCreateAssignment = async () => {
    if (!form.title || !form.deadline || !form.description) {
      return Swal.fire('Warning', 'Please fill all fields', 'warning');
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_KEY}/assignments`, {
        ...form,
        classId: id
      });
      Swal.fire('Success', 'Assignment created', 'success');
      setShowModal(false);
      setForm({ title: '', deadline: '', description: '' });
      refetch(); // update counts
    } catch (err) {
      console.error(err);
      Swal.fire('Error', 'Failed to create assignment', 'error');
    }
  };

  return (
    <div className="p-4 space-y-8">
      {/* Class Progress Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700">Total Enrollments</h3>
          <p className="text-3xl text-primary mt-2">{counts.totalEnrollments}</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700">Total Assignments</h3>
          <p className="text-3xl text-secondary mt-2">{counts.totalAssignments}</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700">Total Submissions</h3>
          <p className="text-3xl text-accent mt-2">{counts.totalSubmissions}</p>
        </div>
      </div>

      {/* Create Assignment Button */}
      <div className="text-center">
        <button onClick={() => setShowModal(true)} className="btn btn-primary btn-wide">Create Assignment</button>
      </div>

      {/* Modal */}
      {showModal && (
        <dialog open className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Create Assignment</h3>
            <div className="space-y-3">
              <input 
                type="text" 
                placeholder="Assignment Title" 
                className="input input-bordered w-full" 
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
              <input 
                type="date" 
                placeholder="Deadline" 
                className="input input-bordered w-full"
                value={form.deadline}
                onChange={(e) => setForm({ ...form, deadline: e.target.value })}
              />
              <textarea 
                placeholder="Description" 
                className="textarea textarea-bordered w-full"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>
            <div className="modal-action">
              <button onClick={handleCreateAssignment} className="btn btn-success">Add Assignment</button>
              <button onClick={() => setShowModal(false)} className="btn btn-outline">Cancel</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyClassDetails;
