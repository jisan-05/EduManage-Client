import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import CourseCard from "../../components/CourseCard/CourseCard";

const Classes = () => {
    

    const {data:classes=[],isLoading,isError,error} = useQuery({
      queryKey:["classes"],
      queryFn:async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_KEY}/acceptedClass`)
        return data;
      },
      
    })
    
    console.log(classes)
    return <div>
      <h3 className="text-3xl text-center">All Classes</h3>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 xl:gap-20">
      {
        classes.map(classs => <CourseCard key={classs._id} data={classs} ></CourseCard>)
      }
      </div>

    </div>;
};

export default Classes;
