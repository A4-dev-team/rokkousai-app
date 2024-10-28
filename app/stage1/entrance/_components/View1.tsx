import React, { useRef } from 'react';
import Form from './Form';

interface View1Props {
  onFormSubmit: () => void;
}

const View1: React.FC<View1Props> = ({ onFormSubmit }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null); // スクロールコンテナの参照

  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-end bg-cover bg-center bg-[url('/building.png')]">
      <div className="absolute inset-0 bg-white opacity-50"></div>
      <div className="relative w-full h-[30%] flex items-start justify-start overflow-y-auto p-4">
        <div className="border border-gray-700 p-2 bg-black opacity-90">
          {/* テキストを上部に配置 */}
          <h1 className="text-white text-4xl mb-4 text-left">エントランス</h1>
          <div 
            ref={scrollContainerRef}
            style={{ 
              height: '100%', 
              overflowY: 'scroll',
              paddingRight: '15px',
              position: 'relative',
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // スクロールコンテナの背景色を透明度を持たせる
            }}>
            <style>{`
              ::-webkit-scrollbar {
                display: none; 
              }
            `}</style>
            
            {/* ここに長い文章が入る */}
            <p className="text-white text-center" style={{ fontSize: '20px' }}>
              ここに長い文章を追加して、スクロールできるようにします。<br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. 
              Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec 
              consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget 
              libero egestas mattis sit amet vitae augue. 
            </p>
            <p className="text-white text-center" style={{ fontSize: '20px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. 
              Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec 
              consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget 
              libero egestas mattis sit amet vitae augue. 
            </p>

            {/* FormコンポーネントにonSubmitを渡す */}
            <div className="flex justify-center mt-6">
              <Form onSubmit={onFormSubmit} /> {/* onSubmitに関数を渡す */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View1;