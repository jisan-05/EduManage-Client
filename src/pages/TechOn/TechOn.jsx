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

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_KEY}/techOn`, formData);
      // Show success toast/notification here
      console.log(data);
    } catch (error) {
      // Show error toast/notification here
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join Our Instructor Community
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Share your knowledge and inspire the next generation of learners
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="p-8 sm:p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Name */}
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    className="input input-bordered w-full focus:ring-2 focus:ring-[#07a698] focus:border-transparent"
                    required
                  />
                </div>

                {/* Image URL */}
                <div className="sm:col-span-2">
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                    Profile Image URL
                  </label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    defaultValue={user?.photoURL}
                    placeholder="Paste your image URL"
                    className="input input-bordered w-full focus:ring-2 focus:ring-[#07a698] focus:border-transparent"
                    required
                  />
                </div>

                {/* Email (readonly) */}
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={user?.email || ''}
                    readOnly
                    className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Teaching Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    className="select select-bordered w-full focus:ring-2 focus:ring-[#07a698] focus:border-transparent"
                    required
                  >
                    <option disabled selected>Select your experience</option>
                    <option value="beginner">Beginner (1-2 years)</option>
                    <option value="mid-level">Mid-Level (3-5 years)</option>
                    <option value="experienced">Experienced (5+ years)</option>
                  </select>
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Teaching Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="select select-bordered w-full focus:ring-2 focus:ring-[#07a698] focus:border-transparent"
                    required
                  >
                    <option disabled selected>Select a category</option>
                    <option value="web-development">Web Development</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="data-science">Data Science</option>
                    <option value="cyber-security">Cyber Security</option>
                  </select>
                </div>

                {/* Title */}
                <div className="sm:col-span-2">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Course Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="What will you teach?"
                    className="input input-bordered w-full focus:ring-2 focus:ring-[#07a698] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="btn w-full py-3 px-4 text-lg font-medium rounded-lg shadow-md hover:shadow-lg transition duration-200"
                  style={{ backgroundColor: '#07a698', color: 'white' }}
                >
                  Submit Application
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              <div className="text-center text-sm text-gray-500 mt-4">
                <p>Your application will be reviewed within 2-3 business days</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachOn;