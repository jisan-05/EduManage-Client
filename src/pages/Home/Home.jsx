import React from 'react';
import Banner from '../../components/Banner/Banner';
import AboutUs from '../../components/AboutUs/AboutUs';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className='max-w-[93%] md:max-w-[94%] lg:max-w-[92%] 2xl:max-w-[1600px] mx-auto flex items-center'>
      <AboutUs></AboutUs>
      </div>
    </div>
  );
};

export default Home;