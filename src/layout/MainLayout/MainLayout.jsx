import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { useContext } from 'react';
import AuthContext from '../../Providers/AuthContext';
import LoadingSpinner from '../../Shared/LoadingSpinner';

const MainLayout = () => {
  const {loading} = useContext(AuthContext)

  if(loading){
    return <LoadingSpinner></LoadingSpinner>
  }

  return (
    <div>
      <div className="max-w-[93%] md:max-w-[94%] lg:max-w-[92%] 2xl:max-w-[1600px] mx-auto flex items-center">
      <Navbar></Navbar>
      </div>
     <div className=''>
       <Outlet></Outlet>
     </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;