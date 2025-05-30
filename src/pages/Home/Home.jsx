import React from "react";
import Banner from "../../components/Banner/Banner";
import AboutUs from "../../components/AboutUs/AboutUs";
import Trusted from "../../components/Trusted/Trusted";
import FeaturedCourses from "../../components/FeaturedCourses/FeaturedCourses";
import StatsSection from "./StatsSection/StatsSection";
import BecomeTeacher from "./BecomeTeacher/BecomeTeacher";
import Feedback from "../../components/Feedback/Feedback";
import OurEvents from "../../components/OurEvents/OurEvents";
import StartJourney from "../../components/StartJourney/StartJourney";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div className="max-w-[93%] md:max-w-[94%] lg:max-w-[92%] 2xl:max-w-[1600px] mx-auto flex items-center">
                <AboutUs></AboutUs>
            </div>
            <div className="py-14">
                <div className="max-w-[93%] md:max-w-[94%] lg:max-w-[92%] 2xl:max-w-[1600px] mx-auto ">
                    <Trusted></Trusted>
                </div>
            </div>
            <div className="bg-[#f5f7f8]">
            <div className="max-w-[93%] md:max-w-[94%] lg:max-w-[92%] 2xl:max-w-[1600px] mx-auto ">
                <FeaturedCourses></FeaturedCourses>
            </div>
            </div>
            <div className=" max-w-[93%] md:max-w-[94%] lg:max-w-[92%] 2xl:max-w-[1600px] mx-auto py-10">
                <Feedback></Feedback>
            </div>
            <div>
                <StatsSection></StatsSection>
            </div>
            <div>
                <BecomeTeacher></BecomeTeacher>
            </div>
            <div>
                <StartJourney></StartJourney>
            </div>
            <div className=" py-10">
                <OurEvents></OurEvents>
            </div>
        </div>
    );
};

export default Home;
