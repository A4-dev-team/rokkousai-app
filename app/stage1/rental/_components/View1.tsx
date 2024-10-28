import React from 'react';

const View1: React.FC = () => {
    return (
        <div className="relative h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center bg-[url('/building.png')]">
                  <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-white text-center">
        <h1 className="text-4xl mb-5">Stage1</h1>
        <p className="text-4xl">「賃貸」</p>
      </div>
    </div>
  );
};

export default View1;