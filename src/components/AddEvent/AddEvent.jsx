import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import toast from 'react-hot-toast';
import 'react-datepicker/dist/react-datepicker.css';
import { cloudinaryUploadLow } from '../../Utils/Utils';

const AddEvent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;

    const headline = form.headline.value;
    const subHeadline = form.subHeadline.value;
    const time = form.time.value;
    const location = form.location.value;

    const imageFile = form.image.files[0];
    let imageUrl = '';

    try {
      if (imageFile) {
        imageUrl = await cloudinaryUploadLow(imageFile);
      } else {
        toast.error('Please select an image');
        setLoading(false);
        return;
      }

      const eventData = {
        headline,
        subHeadline,
        image: imageUrl,
        date: startDate,
        time,
        location,
      };

      await axios.post(
        `${import.meta.env.VITE_API_KEY}/events`,
        eventData,
        
      );

      toast.success('New Event Added Successfully');
      form.reset();
      setStartDate(new Date());
      // navigate('/dashboard/manage-events');
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong! Try Again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className="p-2 md:p-6 mx-auto bg-white rounded-md shadow-md w-full max-w-2xl">
        <h2 className="text-lg font-semibold text-gray-700 capitalize text-center">
          Add New Event
        </h2>
        <hr className="my-4" />

        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4">
            <div>
              <label className="text-gray-700" htmlFor="headline">
                Event Headline
              </label>
              <input
                required
                id="headline"
                name="headline"
                placeholder="Web Development Bootcamp"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md focus:border-[#07a698] focus:ring-[#07a698] focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="subHeadline">
                Sub Headline
              </label>
              <input
                required
                id="subHeadline"
                name="subHeadline"
                placeholder="Master modern web tools"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md focus:border-[#07a698] focus:ring-[#07a698] focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="time">
                Event Time
              </label>
              <input
                required
                id="time"
                name="time"
                placeholder="2:00 PM"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md focus:border-[#07a698] focus:ring-[#07a698] focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="location">
                Event Location
              </label>
              <input
                required
                id="location"
                name="location"
                placeholder="Online / Zoom / Hall Room B"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md focus:border-[#07a698] focus:ring-[#07a698] focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700">Event Date</label>
              <DatePicker
                className="text-black border p-2 rounded-md w-full"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="image">
                Event Image
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-[#07a698] file:text-white
                  hover:file:bg-[#058b7d]"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              disabled={loading}
              className={`px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform rounded-md focus:outline-none ${
                loading ? 'bg-gray-400' : 'bg-[#07a698] hover:bg-[#058b7d]'
              }`}
            >
              {loading ? (
                <span className="flex items-center">
                  Adding... <span className="loading loading-spinner ml-2"></span>
                </span>
              ) : (
                'Add Event'
              )}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddEvent;
