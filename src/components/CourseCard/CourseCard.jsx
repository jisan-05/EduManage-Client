import React from "react";
import { Link } from "react-router-dom";
import CourseDetails from "../CourseDetails/CourseDetails";

const CourseCard = ({ data }) => {
    const { image, price, name, title, description, _id } =
        data || {};
    return (
        <div>
            {/* ---------------- card ------------- */}
            <div className="card bg-base-100 w-full shadow-sm px-10 py-10 group">
                <figure className="overflow-hidden rounded-xl">
                    <div className="w-full md:h-56">
                        <img
                            src={image}
                            className="group-hover:scale-105 w-full h-full object-cover transition duration-500 ease-in-out"
                            alt="Course Image"
                        />
                    </div>
                </figure>
                <div className="pt-8 space-y-3">
                   
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="divider"></div>
                    <div className="card-actions flex justify-between items-center">
                        <p className="text-2xl font-semibold">
                            Price : ${price}
                        </p>
                        <Link to={`/courseDetails/${_id}`}>
                            <button className="btn btn-neutral bg-[#07a698] hover:bg-[#01998c] border-none rounded-3xl px-6 py-2 text-white">
                                See Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
