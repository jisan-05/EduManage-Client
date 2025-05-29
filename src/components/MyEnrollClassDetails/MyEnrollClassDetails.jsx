import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import toast from 'react-hot-toast';
import useAuth from '../../hook/useAuth';

const MyEnrollClassDetails = () => {
  const { id } = useParams(); // classId
  const [submissionTexts, setSubmissionTexts] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const submissionEmail = user?.email;

  // Fetch assignments of the class
  const { data: assignments = [] } = useQuery({
    queryKey: ['assignments', id],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_KEY}/assignments/class/${id}`);
      return res.data;
    }
  });

  // Submit assignment mutation
  const submitMutation = useMutation({
    mutationFn: async ({ assignmentId, submissionText }) => {
      const res = await axios.post(`${import.meta.env.VITE_API_KEY}/submit-assignment`, {
        assignmentId,
        submissionText,
        submissionEmail
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['assignments', id]);
      toast.success("Assignment Submit Successful");
    }
  });

  // Submit feedback mutation
  const feedbackMutation = useMutation({
    mutationFn: async (feedbackData) => {
      const res = await axios.post(`${import.meta.env.VITE_API_KEY}/feedback`, feedbackData);
      return res.data;
    },
    onSuccess: () => {
      toast.success("'Feedback sent!'")
      setIsModalOpen(false);
      setFeedback('');
      setRating(0);
      queryClient.invalidateQueries(['feedback', id]); // refresh feedbacks for this class if fetched somewhere
    }
  });

  const handleSubmission = (assignmentId) => {
    const submissionText = submissionTexts[assignmentId];
    if (!submissionText) return alert("Write something before submitting.");
    submitMutation.mutate({ assignmentId, submissionText });
  };

  // Get class title from assignments (fallback if empty)
  const classTitle = assignments.length > 0 ? assignments[0].title : "Unknown Class";

  const handleSendFeedback = () => {
    if (!feedback || rating === 0) return alert('Please fill all fields.');

    feedbackMutation.mutate({
      classId: id,
      feedbackText: feedback,
      rating,
      name: user?.displayName || "Anonymous",
      image: user?.photoURL || "/default-avatar.png",
      title: classTitle,
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Assignments</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Title</th>
            <th className="p-2">Description</th>
            <th className="p-2">Deadline</th>
            <th className="p-2">Submission</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment._id} className="border-t">
              <td className="p-2">{assignment.title}</td>
              <td className="p-2">{assignment.description}</td>
              <td className="p-2">{new Date(assignment.deadline).toLocaleDateString()}</td>
              <td className="p-2">
                <input
                  type="text"
                  className="border p-1 w-full"
                  placeholder="Enter submission text or link"
                  value={submissionTexts[assignment._id] || ''}
                  onChange={(e) =>
                    setSubmissionTexts({
                      ...submissionTexts,
                      [assignment._id]: e.target.value,
                    })
                  }
                />
              </td>
              <td className="p-2">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() => handleSubmission(assignment._id)}
                >
                  Submit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Teaching Evaluation Button */}
      <div className="mt-8">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Teaching Evaluation Report (TER)
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-bold mb-2">Teaching Evaluation Report</h3>

            <textarea
              className="w-full border p-2 mb-4"
              placeholder="Write your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>

            <div className="mb-4">
              <p className="mb-1 font-medium">Rating:</p>
              <Rating value={rating} onChange={setRating} />
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSendFeedback}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyEnrollClassDetails;
