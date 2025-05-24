import React from 'react';
import useAuth from '../../hook/useAuth';
import axios from 'axios';

const TeachOn = () => {
  const { user } = useAuth();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const image = form.image.value;
    const email = user?.email;
    const experience = form.experience.value;
    const title = form.title.value;
    const category = form.category.value;

    const formData = {
      name,
      image,
      email,
      experience,
      title,
      category,
    };

    const {data} = await axios.post(`${import.meta.env.VITE_API_KEY}/techOn`,formData)
    console.log(data)

    console.log(formData);
    // You can now send formData to your backend using Axios or fetch
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Teach on EduManage</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
            required
          />
        </div>

        {/* Image */}
        <div>
          <label className="block font-medium mb-1">Your Image</label>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            value={user?.email}
            readOnly
            className="w-full border rounded-md p-2 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block font-medium mb-1">Experience</label>
          <select
            name="experience"
            className="w-full border rounded-md p-2"
            required
          >
            <option value="beginner">Beginner</option>
            <option value="mid-level">Mid-Level</option>
            <option value="experienced">Experienced</option>
          </select>
        </div>

        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter your teaching title"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            name="category"
            className="w-full border rounded-md p-2"
            required
          >
            <option value="web-development">Web Development</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="data-science">Data Science</option>
            <option value="cyber-security">Cyber Security</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit for Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeachOn;
