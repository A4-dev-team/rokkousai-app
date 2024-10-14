"use client";

import { useState } from 'react';

export default function Home() {
  const keywords = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const sceneClassNameColors = [
    'bg-red-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-cyan-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-purple-500',
    'bg-violet-500',
    'bg-purple-700'
  ];

  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [currentScene, setCurrentScene] = useState<number>(0);
  const [showNext, setShowNext] = useState<boolean>(false);

  const scenes = sceneClassNameColors.map((color, index) => (
    <div key={index} className={`h-screen w-screen flex items-center justify-center ${color} text-white rounded-lg`}>
      Scene {index + 1}
    </div>
  ));  

  const checkKeyword = () => {
    if (input === '') { 
      setResult(''); 
      return; 
    }

    if (input === keywords[currentScene]) {
      setResult('正解！');
      setShowNext(true);
    } else {
      setResult('間違い！');
      setShowNext(false);
    }
    setInput('');
  };

  const handleNext = () => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(prev => prev + 1);
      setShowNext(false);
      setResult('');
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="absolute inset-0">
        {scenes[currentScene]}
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 w-80 z-10 mb-4 relative">
        <h1 className="text-2xl font-bold text-center mb-4">キーワードチェック</h1>
        <div className="text-center mb-4">キーワードを入力してください</div>
        <input className='border border-gray-300 rounded p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400'
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="キーワードを入力"
        />
        <button className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
          onClick={checkKeyword}
        >
          送信
        </button>
        {result && <div className="mt-4 text-lg text-center text-gray-700">{result}</div>}
        <div className="mt-4">
          {showNext && (
            <button className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200"
              onClick={handleNext}
            >
              次へ
            </button>
          )}
        </div>
      </div>
    </div>
  );
}