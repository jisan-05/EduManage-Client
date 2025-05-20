import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { useContext } from 'react';
import AuthContext from '../../Providers/AuthContext';

const MainLayout = () => {
  const {loading} = useContext(AuthContext)

  if(loading){
    return <p className='text-3xl'>Loading...</p>
  }

  return (
    <div>
      <div className="max-w-[93%] md:max-w-[94%] lg:max-w-[92%] 2xl:max-w-[1600px] mx-auto flex items-center">
      <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;