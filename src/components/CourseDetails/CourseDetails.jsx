import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../Shared/LoadingSpinner";

const CourseDetails = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/cardData.json")
            .then((res) => res.json())
            .then((data) => {
                const selected = data.find((item) => item._id === Number(id));
                setCourse(selected);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching course data:", error);
                setLoading(false);
            });
            }, [id]);

    if (loading) return <LoadingSpinner></LoadingSpinner>;
    if (!course) return <p>Course not found.</p>;
    console.log(course);

    return (
        <div className="p-5">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row bg-base-100 shadow-2xl rounded-3xl overflow-hidden">
                    <div className="w-full md:w-1/2">
                        <img
                            src={course.image}
                            alt={course.title}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="w-full md:w-1/2 p-6 sm:p-8 space-y-5">
                        <h2 className="text-4xl font-extrabold text-primary">
                            {course.title}
                        </h2>
                        <p className="text-sm badge badge-secondary">
                            {course.category}
                        </p>
                        <p className="text-base text-gray-700 leading-relaxed">
                            {course.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
                            <p>
                                <span className="font-semibold">
                                    Instructor:
                                </span>{" "}
                                {course.teacher}
                            </p>
                            <p>
                                <span className="font-semibold">Duration:</span>{" "}
                                {course.duration}
                            </p>
                            <p>
                                <span className="font-semibold">Lessons:</span>{" "}
                                {course.lessons}
                            </p>
                            <p>
                                <span className="font-semibold">Enrolled:</span>{" "}
                                {course.enrolled}
                            </p>
                            <p>
                                <span className="font-semibold">Rating:</span>{" "}
                                ⭐ {course.rating}
                            </p>
                            <p>
                                <span className="font-semibold">Price:</span>{" "}
                                <span className="text-green-600 font-bold">
                                    ${course.price}
                                </span>
                            </p>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
