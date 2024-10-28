import React from 'react';

const View2: React.FC = () => {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center bg-[url('/building.png')]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative mt-10 px-10 text-center text-white text-4xl">
        ここにページ2の説明文やコンテンツを追加できます。
        ここにページ2の説明文やコンテンツを追加できます。
        ここにページ2の説明文やコンテンツを追加できます。
        ここにページ2の説明文やコンテンツを追加できます。
        ここにページ2の説明文やコンテンツを追加できます。
      </h1>
    </div>
  );
};

export default View2;