import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import axios from "axios"; 
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner";



const FeaturedCourses = () => {
    const { data: courseData, isLoading ,error} = useQuery({
        queryKey: ["courseData"],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_KEY}/acceptedClass`);
            return data;
        },
    });
    console.log(courseData)

    if (isLoading) return <LoadingSpinner></LoadingSpinner>

  if (error) return <p className="text-center mt-10 text-xl text-red-600">Error loading courses.</p>;

    return (
        <div className="py-30">
            <div>
                <button className="btn btn-outline border-gray-600 px-10 rounded-4xl flex mx-auto ">
                    Top Class Courses
                </button>
                <p className="text-5xl font-semibold text-center mt-8">
                    Explore Featured Courses
                </p>
            </div>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 xl:gap-20">
                {
                    courseData.map(data => <CourseCard key={data._id} data={data}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedCourses;
