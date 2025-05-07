import React from "react";
import image1 from '../../assets/logo/image1.webp'
import image2 from '../../assets/logo/image2.jpg'
import image3 from '../../assets/logo/image3.png'
import image4 from '../../assets/logo/image4.jpeg'
import image5 from '../../assets/logo/image5.avif'
import image6 from '../../assets/logo/image6.webp'

const Trusted = () => {
    return (
        <div className="">
            <div className="">
                <p className="text-center md:text-2xl mt-10 ">
                    Trusted by over 15,000 companies and millions of learners
                    around the world
                </p>
                <div className="divider max-w-[1200px] mx-auto  mb-8"></div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 items-center">
              <img src={image1} className="bg-white py-3 md:py-8" alt="" />
              <img src={image2} className="" alt="" />
              <img src={image3} className="bg-white" alt="" />
              <img src={image4} className="bg-white py-1 md:py-3" alt="" />
              <img src={image5} className="" alt="" />
              <img src={image6} className="" alt="" />
            </div>
        </div>
    );
};

export default Trusted;
