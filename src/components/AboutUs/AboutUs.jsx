import React from "react";
import aboutAnimation from "../../assets/about-us.json";
import Lottie from "lottie-react";
import PrimaryButton from "../Button/PrimaryButton";

const AboutUs = () => {
    return (
        <div className="pt-32">
            <div>
                <button className="btn btn-outline border-gray-600 px-10 rounded-4xl flex mx-auto ">
                    Get More About Us
                </button>
            </div>
            <div className="md:flex md:mt-20">
                <div className="flex-1 ">
                    <Lottie
                        animationData={aboutAnimation}
                        className="w-80 h-80 md:w-96 md:h-96 md:pb-24 mx-auto"
                    ></Lottie>
                </div>
                <div className="flex-1 justify-between ">
                    <h3 className="text-xl md:text-4xl mt-5">
                        Over 10 Years in Distant learning for Skill Development
                    </h3>
                    <p className="mt-5">
                        Compellingly procrastinate equity invested markets with
                        efficient process improvements. actualize
                        mission-critical partnerships with integrated portals.
                        Authoritatively optimize low-risk high-yield metrics and
                        plug-and-play potentialities
                    </p>
                    <div className="mt-4">
                        <PrimaryButton buttonText="Learn More"></PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
