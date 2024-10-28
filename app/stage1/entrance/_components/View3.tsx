import React from 'react';

const View3: React.FC = () => {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-end bg-cover bg-center bg-[url('/building.png')]">
      <div className="absolute inset-0 bg-white opacity-50"></div>
      <div className="relative w-full h-[30%] flex items-start justify-start overflow-hidden p-4">
        <div className="border border-gray-700 p-2 bg-black opacity-90">
          <h1 className="text-white text-4xl mb-4 text-left">
            エントランス <br /><br /><br />
            <span className="text-green-400">3階から302に行けるようになった</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default View3;