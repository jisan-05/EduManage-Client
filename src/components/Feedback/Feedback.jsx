import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Feedback = () => {
  const { data: feedbacks = [], isLoading } = useQuery({
    queryKey: ['allFeedback'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_KEY}/feedback`);
      return res.data;
    },
  });

  if (isLoading) return <p className="text-center py-10">Loading feedback...</p>;
  if (!feedbacks.length) return <p className="text-center py-10">No feedback available.</p>;

  return (
    <div className="bg-white py-12 px-4  mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        What Students Say
      </h2>

      <Swiper
        className="!bg-white"
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {feedbacks.map((fb) => (
          <SwiperSlide key={fb._id}>
            <div className="bg-gray-200 shadow-md rounded-xl p-6 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={fb.image || '/default-avatar.png'}
                  alt={fb.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{fb.name}</h3>
                  <p className="text-sm text-gray-500">{fb.title}</p>
                </div>
              </div>

              <p className="text-gray-700 flex-1 mb-3">"{fb.feedbackText}"</p>

              <div className="text-yellow-500 text-sm">
                Rating: {'⭐'.repeat(fb.rating)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
