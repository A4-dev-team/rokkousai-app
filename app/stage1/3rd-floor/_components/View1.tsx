import React from "react";

const View1: React.FC = () => {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-end bg-cover bg-center bg-[url('/building.png')]">
      <div className="absolute inset-0 bg-white opacity-50"></div>
      <div className="relative w-full h-[30%] flex items-start justify-start overflow-hidden p-4">
        <div className="border border-gray-700 p-2 w-full bg-black">
          <h1 className="text-white text-4xl mb-8 text-left">
            <br />
            <br />
            　誰もいないようだ...
            <br />
            <br />
            <br />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default View1;
