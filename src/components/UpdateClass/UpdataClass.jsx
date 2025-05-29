import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdateClass = () => {
  const { id } = useParams(); // Get class id from URL
  const navigate = useNavigate();
  const [classData, setClassData] = useState(null);

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_KEY}/class/${id}`);
        setClassData(data);
      } catch (err) {
        toast.error("Failed to load class data");
      }
    };
    fetchClassData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedClass = {
      title: form.title.value,
      name: form.name.value,
      email: form.email.value,
      price: form.price.value,
      description: form.description.value,
      image: form.image.value
    };

    try {
      await axios.put(`${import.meta.env.VITE_API_KEY}/class/${id}`, updatedClass);
      toast.success("Class updated successfully!");
      navigate('/dashboard/myClass'); // Navigate after update
    } catch (error) {
      toast.error("Failed to update class");
    }
  };

  if (!classData) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Update Class</h2>

      <form onSubmit={handleSubmit} className="space-y-4 bg-base-200 p-6 rounded-lg shadow-md">
        <input
          type="text"
          defaultValue={classData.title}
          placeholder="Title"
          className="input input-bordered w-full"
          name="title"
        />

        <input
          type="text"
          defaultValue={classData.name}
          readOnly
          className="input input-bordered w-full"
          name="name"
        />

        <input
          type="email"
          defaultValue={classData.email}
          readOnly
          className="input input-bordered w-full"
          name="email"
        />

        <input
          type="number"
          defaultValue={classData.price}
          placeholder="Price"
          className="input input-bordered w-full"
          name="price"
        />

        <textarea
          defaultValue={classData.description}
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          name="description"
        ></textarea>

        <input
          type="text"
          defaultValue={classData.image}
          placeholder="Image URL"
          className="input input-bordered w-full"
          name="image"
        />

        <button type="submit" className="btn btn-success w-full">
          Update Class
        </button>
      </form>
    </div>
  );
};

export default UpdateClass;
