import React from 'react';
import image01 from '../../assets/course-01.jpg'

const CourseCard = () => {
  return (
    <div>
      {/* ---------------- card ------------- */}
      <div className="card bg-base-100 w-full shadow-sm px-10 py-10 group">
                   
                   <figure className="overflow-hidden rounded-xl">
                        <img
                            src={image01}
                            className="group-hover:scale-105 w-full object-cover transition duration-500 ease-in-out"
                            alt="Course Image"
                        />
                    </figure>
                    <div className="pt-8 space-y-3">
                        <p className="px-4 py-1 text-sm border border-sky-300 rounded-4xl w-fit font-semibold bg-[#e3f4f3]">Wordpress Development</p>
                        <h2 className="card-title">WordPress Development</h2>
                        <p>
                            A card component has a figure, a body part, and
                            inside body there are title and actions parts
                        </p>
                        <div className="divider"></div>
                        <div className="card-actions flex justify-between items-center">
                        <p className="text-2xl font-semibold">Price : $99</p>
                        <button className="btn btn-neutral bg-[#07a698] hover:bg-[#01998c] border-none rounded-3xl px-6 py-2 text-white">See Details</button>
   
                        </div>
                    
                   </div>
                </div>
    </div>
  );
};

export default CourseCard;