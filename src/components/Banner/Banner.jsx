import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

import "./Banner.css";
import image from "../../assets/school.jpg";

const Banner = () => {
    return (
        <div className="h-[500px]">
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg "
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide className="">
                    <div className="flex flex-col items-center justify-center h-[500px]">
                        <div className="title text-2xl md:text-4xl " data-swiper-parallax="-300">
                            Empower Your Learning Journey
                        </div>
                        <div className="subtitle text-lg" data-swiper-parallax="-200">
                            Learn. Grow. Succeed.
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p className="text-center">
                                Join thousands of students and professionals who
                                are advancing their skills with EduManage.
                                Experience a smarter and more interactive
                                learning platform built for the future.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center h-[500px]">
                  <div className="title text-2xl md:text-4xl " data-swiper-parallax="-300">
                        Teach, Inspire, Grow
                    </div>
                    <div className="subtitle text-lg" data-swiper-parallax="-200">
                        Become an EduManage Instructor
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p className="text-center">
                            Share your expertise with the world. Apply as an
                            instructor and inspire students globally through
                            your experience and knowledge, all from one powerful
                            platform.
                        </p>
                    </div>
                  </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center h-[500px]">

                    <div className="title text-2xl md:text-4xl " data-swiper-parallax="-300">
                        All-in-One Class Management
                    </div>
                    <div className="subtitle text-lg" data-swiper-parallax="-200">
                        Smart Tools for Smarter Learning
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p className="text-center">
                            Manage classes, assignments, enrollments, and
                            feedback in one place. EduManage provides everything
                            you need to teach, learn, and grow — efficiently and
                            effortlessly.
                        </p>
                    </div>
                  </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
