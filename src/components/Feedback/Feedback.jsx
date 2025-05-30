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
    <div className="bg-white py-16 px-6 md:px-12 lg:px-24 mx-auto max-w-7xl">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
        What <span className="text-[#07a698]">Students Say</span>
      </h2>

      <Swiper
        className="!bg-white"
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={32}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {feedbacks.map((fb) => (
          <SwiperSlide key={fb._id}>
            <div className="bg-gray-50 shadow-lg rounded-2xl p-8 h-full flex flex-col transition-transform duration-300 hover:scale-[1.03]">
              <div className="flex items-center gap-5 mb-6">
                <img
                  src={fb.image || '/default-avatar.png'}
                  alt={fb.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-[#07a698]"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-semibold text-xl text-gray-900">{fb.name || 'Anonymous'}</h3>
                  <p className="text-sm text-gray-500">{fb.title || 'Student'}</p>
                </div>
              </div>

              <p className="text-gray-700 flex-1 mb-6 italic text-lg leading-relaxed">"{fb.feedbackText}"</p>

              <div className="text-yellow-400 text-base font-semibold tracking-wide">
                Rating: {'⭐'.repeat(fb.rating || 0)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modern styled meaningful text */}
      <div className="mt-20 max-w-3xl mx-auto text-center text-gray-700 text-lg md:text-xl leading-relaxed px-4 bg-gradient-to-r from-[#07a698]/10 to-[#00c9a7]/5 rounded-3xl shadow-lg py-10 ring-1 ring-[#07a698]/20 animate-fadeIn">
        <p>
          Our students’ voices are the heart of our community. Their stories of growth, resilience, and success inspire us daily.
          Each testimonial reflects a journey of learning, discovery, and achievement — a true testament to the transformative power 
          of education. Together, we nurture passion, unlock potential, and empower dreams to become reality.
        </p>
      </div>
    </div>
  );
};

export default Feedback;
