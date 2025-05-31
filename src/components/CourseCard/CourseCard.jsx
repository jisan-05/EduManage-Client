import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ data }) => {
    const { image, price, name, title, description, enrolled, _id } = data || {};

    return (
        <div className="card bg-base-100 w-full shadow-sm px-10 py-10 group">
            {/* Image */}
            <figure className="overflow-hidden rounded-xl">
                <div className="w-full md:h-56">
                    <img
                        src={image}
                        className="group-hover:scale-105 w-full h-full object-cover transition duration-500 ease-in-out"
                        alt="Course Image"
                    />
                </div>
            </figure>

            {/* Content */}
            <div className="pt-8 space-y-3">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className="text-sm text-gray-600">
                    <strong>Instructor:</strong> {name}
                </p>

                <p className="text-sm text-gray-500">
                    <strong>Total Enrolled:</strong> {enrolled || 0}
                </p>

                <div className="divider"></div>

                {/* Actions */}
                <div className="card-actions flex justify-between items-center">
                    <p className="text-2xl font-semibold">Price: ${price}</p>
                    <div className="flex gap-2">
                        <Link to={`/courseDetails/${_id}`}>
                            <button className="bg-[#07a698] hover:bg-[#01998c] text-white rounded-3xl px-6 py-2">
                                Enroll
                            </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
