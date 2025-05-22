import React from 'react';

const BecomeTeacher = () => {
  return (
    <section className=" text-black py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.ibb.co/Rk6ZwF16/shutterstock-303112742-1.jpg"
            alt="Teacher"
            className="rounded-xl shadow-lg w-full max-w-md object-cover h-80"
          />
        </div>

        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Inspire the Future. <br /> Teach with Us.
          </h2>
          <p className="text-lg text-black">
            Join a platform where your passion for teaching meets students eager to learn. 
            Share your expertise, impact lives, and grow your career from anywhere in the world.
          </p>

          <ul className="list-disc list-inside text-black space-y-1">
            <li>Flexible schedule</li>
            <li>Reach thousands of students</li>
            <li>Get rewarded for your knowledge</li>
          </ul>

          <button className="mt-4 px-6 py-3 cursor-pointer bg-[#07a698] text-white font-semibold rounded-xl shadow-md hover:bg-[#01998c] transition duration-300">
            Become a Teacher
          </button>
        </div>

        
      </div>
    </section>
  );
};

export default BecomeTeacher;
