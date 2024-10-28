import React from 'react';

const View3: React.FC = () => {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center bg-[url('/building.png')]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex items-center justify-center border-4 border-white rounded-full w-80 h-80 bg-transparent relative z-10"> 
        <h1 className="text-4xl text-center text-white">
          Mission <br />「あああああ」
        </h1>
      </div>
    </div>
  );
};

export default View3;