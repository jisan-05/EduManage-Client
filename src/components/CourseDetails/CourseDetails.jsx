import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import useAuth from "../../hook/useAuth";
import toast from "react-hot-toast";

const CourseDetails = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth(); // get current logged-in user

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_API_KEY}/class/${id}`
                );
                setCourse(res.data);
            } catch (error) {
                console.error("Failed to fetch course", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, [id]);

    

const handleEnroll = async () => {
    if (!user) {
        toast.error("You must be logged in to enroll");
        return;
    }

    const enrollment = {
        classId: course._id,
        classTitle: course.title,
        classImage: course.image,
        studentEmail: user.email,
        studentName: user.displayName,
        instructorEmail: course.email,
        enrolledAt: new Date()
    };

    try {
        const { data } = await axios.post(`${import.meta.env.VITE_API_KEY}/enroll`, enrollment);
        if (data.insertedId || data.acknowledged) {
            toast.success("Enrollment successful!");
            // Optionally update local state to show new enrolled count
            setCourse({ ...course, enrolled: (course.enrolled || 0) + 1 });
        } else {
            toast.error("Already enrolled or failed");
        }
    } catch (err) {
        console.error(err);
        toast.error("Enrollment failed");
    }
};


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
                                {course.name}
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
                            <button
                                onClick={handleEnroll}
                                className="btn btn-primary"
                            >
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
