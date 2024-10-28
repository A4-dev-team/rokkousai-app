import React from 'react';

const View1: React.FC = () => {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-end bg-cover bg-center bg-[url('/building.png')]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative w-full bg-black opacity-50 h-[30%] flex items-start justify-start overflow-y-auto p-4">
        <div className="border border-gray-700 p-2 bg-black">
          <h1 className="text-white text-4xl">
          </h1>
        </div>
      </div>
    </div>
  );
};

export default View1;
