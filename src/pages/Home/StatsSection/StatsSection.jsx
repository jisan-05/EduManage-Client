import React from 'react';

const StatsSection = () => {
  return (
    <section className="flex items-center justify-center py-10 px-6 bg-gray-600">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 text-white">
        
        {/* Left Side - Card */}
        <div className=" bg-opacity-20 backdrop-blur-md rounded-lg p-8 w-full  shadow-lg bg-gray-700">
          <h2 className="text-3xl font-bold mb-6">Website Stats</h2>
          <div className="space-y-4 text-lg font-semibold ">
            <div>
              <span className="text-4xl">1,250</span> <span>Users</span>
            </div>
            <div>
              <span className="text-4xl">85</span> <span>Classes</span>
            </div>
            <div>
              <span className="text-4xl">3,200</span> <span>Student Enrollments</span>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full max-w-lg">
          <img 
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" 
            alt="Education" 
            className="rounded-lg shadow-lg object-cover w-full h-72 md:h-72"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
